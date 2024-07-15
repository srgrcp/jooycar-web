import type { LatLon } from '../types/lat-lon';
import type { PaginableParams } from '../types/paginable';

export interface TripStep {
  time: number;
  lat: number;
  lon: number;
  address: string;
}

export interface Trip {
  id: string;
  start: TripStep;
  end: TripStep;
  distance: number;
  duration: number;
  overspeedsCount: number;
  boundingBox: LatLon[];
}

export interface TripsQuery extends PaginableParams {
  startGte?: number;
  startLte?: number;
  distanceGte?: number;
}
