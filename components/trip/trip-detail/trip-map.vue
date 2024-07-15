<template>
  <div class="md:px-8">
    <div class="w-full h-96 relative border border-neutral-200 shadow">
      <ClientOnly>
        <MapboxMap
          :map-id="mapId"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          :options="{
            style: 'mapbox://styles/mapbox/light-v11',
            center: center,
            zoom: 13,
          }"
        >
          <MapboxDefaultMarker
            marker-id="start-marker"
            :lnglat="startCoords"
            :options="{
              color: '#1D73E7',
              offset: [0, -7],
            }"
          >
            <template #marker>
              <div class="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1D73E7"
                  class="size-10 opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="font-semibold uppercase text-neutral-500"
                  >Inicio</span
                >
              </div>
            </template>
          </MapboxDefaultMarker>
          <MapboxDefaultMarker
            marker-id="end-marker"
            :lnglat="endCoords"
            :options="{
              color: '#29933B',
            }"
          >
            <template #marker>
              <div class="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#29933B"
                  class="size-10 opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="font-semibold uppercase text-neutral-500"
                  >Fin</span
                >
              </div>
            </template>
          </MapboxDefaultMarker>

          <MapboxSource
            :source-id="boxId"
            :source="{
              type: 'geojson',
              data: boundingBoxGeojson,
            }"
          />
          <MapboxLayer
            :layer="{
              source: boxId,
              id: 'box-layer',
              type: 'line',
              paint: {
                'line-color': '#3386c0',
                'line-width': 6,
              },
            }"
          />
        </MapboxMap>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FeatureCollection, Polygon } from 'geojson';
import getCenter from 'geolib/es/getCenter.js';
import type { Trip } from '~/utils/trip/trip';

interface Props {
  trip: Trip;
}

const { trip } = defineProps<Props>();
const mapId = 'mapbox';
const boxId = 'bounding-box';

const center = computed(() => {
  const centerObj = getCenter(
    trip.boundingBox.map((point) => ({
      latitude: point.lat,
      longitude: point.lon,
    }))
  );

  if (!centerObj) {
    return [-68.137343, 45.137451];
  }

  return [centerObj.longitude, centerObj.latitude];
});

const startCoords = computed<[number, number]>(() => {
  return [trip.start.lon, trip.start.lat];
});

const endCoords = computed<[number, number]>(() => {
  return [trip.end.lon, trip.end.lat];
});

const boundingBoxGeojson = computed<FeatureCollection<Polygon>>(() => {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [trip.boundingBox[0].lon, trip.boundingBox[0].lat],
              [trip.boundingBox[1].lon, trip.boundingBox[1].lat],
              [trip.boundingBox[2].lon, trip.boundingBox[2].lat],
              [trip.boundingBox[3].lon, trip.boundingBox[3].lat],
              [trip.boundingBox[0].lon, trip.boundingBox[0].lat],
            ],
          ],
        },
      },
    ],
  };
});

useMapbox(mapId, (map) => {
  map.on('load', () => {
    map.fitBounds(
      [
        [trip.boundingBox[0].lon, trip.boundingBox[0].lat],
        [trip.boundingBox[2].lon, trip.boundingBox[2].lat],
      ],
      {
        padding: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 50,
        },
      }
    );
  });
});
</script>
