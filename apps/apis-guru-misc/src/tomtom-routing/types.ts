type CalculateReachableRangePostDataParameters = {
  allowVignette?: string[] | undefined
  avoidAreas?:
    | {
        rectangles?:
          | {
              northEastCorner?:
                | { latitude?: string | undefined; longitude?: string | undefined }
                | undefined
              southWestCorner?:
                | { latitude?: string | undefined; longitude?: string | undefined }
                | undefined
            }[]
          | undefined
      }
    | undefined
  avoidVignette?: string[] | undefined
}
type CalculateRoutePostDataParameters = {
  allowVignette?: string[] | undefined
  avoidAreas?:
    | {
        rectangles?:
          | {
              northEastCorner?:
                | { latitude?: string | undefined; longitude?: string | undefined }
                | undefined
              southWestCorner?:
                | { latitude?: string | undefined; longitude?: string | undefined }
                | undefined
            }[]
          | undefined
      }
    | undefined
  avoidVignette?: string[] | undefined
  supportingPoints?: { latitude?: string | undefined; longitude?: string | undefined }[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/routing/:versionNumber/calculateReachableRange/:origin/:contentType': {
      $get:
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 414
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 596
          }
      $post:
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 408
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 414
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 504
          }
        | {
            input: {
              param: { versionNumber: 1; origin: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                fuelBudgetInLiters?: number | undefined
                energyBudgetInkWh?: number | undefined
                timeBudgetInSec?: number | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateReachableRangePostDataParameters }
            output: {}
            outputFormat: string
            status: 596
          }
    }
  } & {
    '/routing/:versionNumber/calculateRoute/:locations/:contentType': {
      $get:
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 414
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 596
          }
      $post:
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 408
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 414
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 504
          }
        | {
            input: {
              param: { versionNumber: 1; locations: string; contentType: 'xml' | 'json' | 'jsonp' }
            } & {
              query: {
                maxAlternatives?: number | undefined
                alternativeType?: 'anyRoute' | 'betterRoute' | undefined
                minDeviationDistance?: number | undefined
                minDeviationTime?: number | undefined
                instructionsType?: 'coded' | 'text' | 'tagged' | undefined
                language?: string | undefined
                computeBestOrder?: boolean | undefined
                routeRepresentation?: 'polyline' | 'none' | undefined
                computeTravelTimeFor?: 'none' | 'all' | undefined
                vehicleHeading?: number | undefined
                sectionType?: string | undefined
                callback?: string | undefined
                report?: 'effectiveSettings' | undefined
                departAt?: string | undefined
                arriveAt?: string | undefined
                routeType?: 'fastest' | 'shortest' | 'eco' | 'thrilling' | undefined
                traffic?: boolean | undefined
                avoid?: string | undefined
                travelMode?:
                  | 'car'
                  | 'truck'
                  | 'taxi'
                  | 'bus'
                  | 'van'
                  | 'motorcycle'
                  | 'bicycle'
                  | 'pedestrian'
                  | undefined
                hilliness?: 'low' | 'normal' | 'high' | undefined
                windingness?: 'low' | 'normal' | 'high' | undefined
                vehicleMaxSpeed?: number | undefined
                vehicleWeight?: number | undefined
                vehicleAxleWeight?: number | undefined
                vehicleLength?: number | undefined
                vehicleWidth?: number | undefined
                vehicleHeight?: number | undefined
                vehicleCommercial?: boolean | undefined
                vehicleLoadType?: string | undefined
                vehicleEngineType?: 'combustion' | 'electric' | undefined
                constantSpeedConsumptionInLitersPerHundredkm?: string | undefined
                currentFuelInLiters?: number | undefined
                auxiliaryPowerInLitersPerHour?: number | undefined
                fuelEnergyDensityInMJoulesPerLiter?: number | undefined
                accelerationEfficiency?: number | undefined
                decelerationEfficiency?: number | undefined
                uphillEfficiency?: number | undefined
                downhillEfficiency?: number | undefined
                constantSpeedConsumptionInkWhPerHundredkm?: string | undefined
              }
            } & { json: CalculateRoutePostDataParameters }
            output: {}
            outputFormat: string
            status: 596
          }
    }
  },
  '/'
>
export default routes
