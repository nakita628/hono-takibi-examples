import { createRoute, z } from '@hono/zod-openapi'

const CalculateReachableRangePostDataParametersSchema = z
  .object({
    allowVignette: z
      .array(z.string())
      .exactOptional()
      .openapi({ xml: { name: 'allowVignette' } }),
    avoidAreas: z
      .object({
        rectangles: z
          .array(
            z
              .object({
                northEastCorner: z
                  .object({
                    latitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                    longitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                southWestCorner: z
                  .object({
                    latitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                    longitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ xml: { name: 'rectangle' }, required: [] }),
          )
          .exactOptional()
          .openapi({ xml: { name: 'rectangles', wrapped: true } }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    avoidVignette: z
      .array(z.string())
      .exactOptional()
      .openapi({ xml: { name: 'avoidVignette' } }),
  })
  .openapi({
    example: {
      avoidAreas: {
        rectangles: [
          {
            northEastCorner: { latitude: 48.90309, longitude: 2.41115 },
            southWestCorner: { latitude: 48.81851, longitude: 2.26593 },
          },
        ],
      },
      avoidVignette: ['AUS', 'CHE'],
      supportingPoints: [
        { latitude: 52.5093, longitude: 13.42936 },
        { latitude: 52.50844, longitude: 13.42859 },
      ],
    },
    xml: { name: 'postData' },
    required: [],
  })
  .openapi('CalculateReachableRangePostDataParameters')

const CalculateRoutePostDataParametersSchema = z
  .object({
    allowVignette: z
      .array(z.string())
      .exactOptional()
      .openapi({ xml: { name: 'allowVignette' } }),
    avoidAreas: z
      .object({
        rectangles: z
          .array(
            z
              .object({
                northEastCorner: z
                  .object({
                    latitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                    longitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                southWestCorner: z
                  .object({
                    latitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                    longitude: z
                      .string()
                      .exactOptional()
                      .openapi({ xml: { attribute: true } }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ xml: { name: 'rectangle' }, required: [] }),
          )
          .exactOptional()
          .openapi({ xml: { name: 'rectangles', wrapped: true } }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    avoidVignette: z
      .array(z.string())
      .exactOptional()
      .openapi({ xml: { name: 'avoidVignette' } }),
    supportingPoints: z
      .array(
        z
          .object({
            latitude: z
              .string()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
            longitude: z
              .string()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
          })
          .openapi({ xml: { name: 'supportingPoint' }, required: [] }),
      )
      .exactOptional()
      .openapi({ xml: { name: 'supportingPoints', wrapped: true } }),
  })
  .openapi({
    example: {
      avoidAreas: {
        rectangles: [
          {
            northEastCorner: { latitude: 48.90309, longitude: 2.41115 },
            southWestCorner: { latitude: 48.81851, longitude: 2.26593 },
          },
        ],
      },
      avoidVignette: ['AUS', 'CHE'],
      supportingPoints: [
        { latitude: 52.5093, longitude: 13.42936 },
        { latitude: 52.50844, longitude: 13.42859 },
      ],
    },
    xml: { name: 'postData' },
    required: [],
  })
  .openapi('CalculateRoutePostDataParameters')

const _403Response = {
  description:
    'Permission, capacity, or authentication issues:\n  - Forbidden\n  - Not authorized\n  - Account inactive\n  - Account over queries per second limit\n  - Account over rate limit\n  - Rate limit exceeded',
}

const _404Response = {
  description:
    'Not Found: the requested resource could not be found, but it may be available again in the future.',
}

const _405Response = {
  description: 'Method Not Allowed: the client used a HTTP method other than GET or POST.',
}

const _408Response = { description: 'Request timeout.' }

const _414Response = { description: 'Requested uri is too long.' }

const _500Response = {
  description: 'An error occurred while processing the request. Please try again later.',
}

const _502Response = { description: 'Internal network connectivity issue.' }

const _503Response = { description: 'Service currently unavailable.' }

const _504Response = {
  description:
    'Internal network connectivity issue or a request that has taken too long to complete.',
}

const _596Response = { description: 'Service not found.' }

const AccelerationEfficiencyParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).',
      in: 'query',
      name: 'accelerationEfficiency',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const AlternativeTypeParamsSchema = z
  .enum(['anyRoute', 'betterRoute'])
  .default('anyRoute')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.',
      in: 'query',
      name: 'alternativeType',
      schema: { default: 'anyRoute', enum: ['anyRoute', 'betterRoute'], type: 'string' },
      required: false,
    },
  })

const ArriveAtParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The date and time of arrival at the destination point. It must be specified as a dateTime.',
      in: 'query',
      name: 'arriveAt',
      schema: { format: 'dateTime', type: 'string' },
      required: false,
    },
  })

const AuxiliaryPowerInLitersPerHourParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.',
      in: 'query',
      name: 'auxiliaryPowerInLitersPerHour',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const AuxiliaryPowerInkWParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the amount of power consumed by auxiliary systems, in kilowatts (kW).',
      in: 'query',
      name: 'auxiliaryPowerInkW',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const AvoidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.\nPossible values:\n  - tollRoads\n  - motorways\n  - ferries\n  - unpavedRoads\n  - carpools\n  - alreadyUsedRoads',
      example: 'unpavedRoads',
      in: 'query',
      name: 'avoid',
      schema: { type: 'string' },
      required: false,
    },
  })

const AvoidInCalculateReachableRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.\nPossible values:\n  - tollRoads\n  - motorways\n  - ferries\n  - unpavedRoads\n  - carpools',
      example: 'unpavedRoads',
      in: 'query',
      name: 'avoid',
      schema: { type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .default('callback')
  .exactOptional()
  .openapi({
    param: {
      description: 'Specifies the jsonp callback method.',
      in: 'query',
      name: 'callback',
      schema: { default: 'callback', type: 'string' },
      required: false,
    },
  })

const ComputeBestOrderParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Re-order the route waypoints to reduce the route length.',
      in: 'query',
      name: 'computeBestOrder',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const ComputeTravelTimeForParamsSchema = z
  .enum(['none', 'all'])
  .default('none')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.',
      in: 'query',
      name: 'computeTravelTimeFor',
      schema: { default: 'none', enum: ['none', 'all'], type: 'string' },
      required: false,
    },
  })

const ConstantSpeedConsumptionInLitersPerHundredkmParamsSchema = z
  .string()
  .regex(/^((\d+\.?\d*,\d+\.?\d*):?)+$/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.',
      in: 'query',
      name: 'constantSpeedConsumptionInLitersPerHundredkm',
      schema: { pattern: '^((\\d+\\.?\\d*,\\d+\\.?\\d*):?)+$', type: 'string' },
      required: false,
    },
  })

const ConstantSpeedConsumptionInkWhPerHundredkmParamsSchema = z
  .string()
  .regex(/^((\d+\.?\d*,\d+\.?\d*):?)+$/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.',
      in: 'query',
      name: 'constantSpeedConsumptionInkWhPerHundredkm',
      schema: { pattern: '^((\\d+\\.?\\d*,\\d+\\.?\\d*):?)+$', type: 'string' },
      required: false,
    },
  })

const ContentTypeParamsSchema = z
  .enum(['xml', 'json', 'jsonp'])
  .default('xml')
  .openapi({
    param: {
      description:
        'The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.',
      in: 'path',
      name: 'contentType',
      required: true,
      schema: { default: 'xml', enum: ['xml', 'json', 'jsonp'], type: 'string' },
    },
  })

const CurrentChargeInkWhParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Specifies the current electric energy supply in kilowatt hours (kWh).',
      in: 'query',
      name: 'currentChargeInkWh',
      schema: { format: 'float', minimum: 0, type: 'number' },
      required: false,
    },
  })

const CurrentFuelInLitersParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Specifies the current supply of fuel in liters.',
      in: 'query',
      name: 'currentFuelInLiters',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const DecelerationEfficiencyParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).',
      in: 'query',
      name: 'decelerationEfficiency',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const DepartAtParamsSchema = z
  .string()
  .default('now')
  .exactOptional()
  .openapi({
    param: {
      description:
        'The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.',
      in: 'query',
      name: 'departAt',
      schema: { default: 'now', type: 'string' },
      required: false,
    },
  })

const DownhillEfficiencyParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).',
      in: 'query',
      name: 'downhillEfficiency',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const EnergyBudgetInkWhParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.',
      example: 43,
      in: 'query',
      name: 'energyBudgetInkWh',
      schema: { format: 'float', minimum: 0, type: 'number' },
      required: false,
    },
  })

const FuelBudgetInLitersParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.',
      in: 'query',
      name: 'fuelBudgetInLiters',
      schema: { format: 'float', minimum: 0, type: 'number' },
      required: false,
    },
  })

const FuelEnergyDensityInMJoulesPerLiterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).',
      in: 'query',
      name: 'fuelEnergyDensityInMJoulesPerLiter',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const HillinessParamsSchema = z
  .enum(['low', 'normal', 'high'])
  .default('normal')
  .exactOptional()
  .openapi({
    param: {
      description: 'Degree of hilliness for calculating a thrilling route.',
      in: 'query',
      name: 'hilliness',
      schema: { default: 'normal', enum: ['low', 'normal', 'high'], type: 'string' },
      required: false,
    },
  })

const InstructionsTypeParamsSchema = z
  .enum(['coded', 'text', 'tagged'])
  .exactOptional()
  .openapi({
    param: {
      description: 'If specified, guidance instructions will be returned (if available).',
      in: 'query',
      name: 'instructionsType',
      schema: { enum: ['coded', 'text', 'tagged'], type: 'string' },
      required: false,
    },
  })

const LanguageParamsSchema = z
  .string()
  .default('en-GB')
  .exactOptional()
  .openapi({
    param: {
      description: 'The language parameter determines the language of the guidance messages.',
      in: 'query',
      name: 'language',
      schema: { default: 'en-GB', type: 'string' },
      required: false,
    },
  })

const LocationsParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Locations through which the calculated route must pass.',
      example: '52.50931,13.42936:52.50274,13.43872',
      in: 'path',
      name: 'locations',
      required: true,
      schema: { type: 'string' },
    },
  })

const MaxAlternativesParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(5),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of alternative routes to be calculated.',
      in: 'query',
      name: 'maxAlternatives',
      schema: { default: 0, maximum: 5, minimum: 0, type: 'integer' },
      required: false,
    },
  })

const MaxChargeInkWhParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        "Specifies the maximum electric energy supply in kilowatt hours (kWh) that may be stored in the vehicle's battery.",
      in: 'query',
      name: 'maxChargeInkWh',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const MinDeviationDistanceParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description:
        'All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.',
      in: 'query',
      name: 'minDeviationDistance',
      schema: { default: 0, type: 'integer' },
      required: false,
    },
  })

const MinDeviationTimeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description:
        'All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.',
      in: 'query',
      name: 'minDeviationTime',
      schema: { default: 0, type: 'integer' },
      required: false,
    },
  })

const OriginParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Point from which the range calculation should start.',
      example: '52.50931,13.42936',
      in: 'path',
      name: 'origin',
      required: true,
      schema: { type: 'string' },
    },
  })

const ReportParamsSchema = z
  .literal('effectiveSettings')
  .exactOptional()
  .openapi({
    param: {
      description: 'Specifies which data should be reported for diagnosis purposes.',
      in: 'query',
      name: 'report',
      schema: { enum: ['effectiveSettings'], type: 'string' },
      required: false,
    },
  })

const RouteRepresentationParamsSchema = z
  .enum(['polyline', 'none'])
  .default('polyline')
  .exactOptional()
  .openapi({
    param: {
      description: 'Specifies the representation of the set of routes provided as a response.',
      in: 'query',
      name: 'routeRepresentation',
      schema: { default: 'polyline', enum: ['polyline', 'none'], type: 'string' },
      required: false,
    },
  })

const RouteTypeParamsSchema = z
  .enum(['fastest', 'shortest', 'eco', 'thrilling'])
  .default('fastest')
  .exactOptional()
  .openapi({
    param: {
      description: 'The type of route requested.',
      in: 'query',
      name: 'routeType',
      schema: {
        default: 'fastest',
        enum: ['fastest', 'shortest', 'eco', 'thrilling'],
        type: 'string',
      },
      required: false,
    },
  })

const SectionTypeParamsSchema = z
  .string()
  .default('travelMode')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies which section types are explicitly reported in the route response. Can be specified multiple times.\n  - carTrain, ferry, tunnel or motorway\n  - pedestrian\n  - tollRoad\n  - tollVignette\n  - country\n  - travelMode\n  - traffic',
      in: 'query',
      name: 'sectionType',
      schema: { default: 'travelMode', type: 'string' },
      required: false,
    },
  })

const TimeBudgetInSecParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.',
      in: 'query',
      name: 'timeBudgetInSec',
      schema: { format: 'float', minimum: 0, type: 'number' },
      required: false,
    },
  })

const TrafficParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.',
      in: 'query',
      name: 'traffic',
      schema: { default: true, type: 'boolean' },
      required: false,
    },
  })

const TravelModeParamsSchema = z
  .enum(['car', 'truck', 'taxi', 'bus', 'van', 'motorcycle', 'bicycle', 'pedestrian'])
  .default('car')
  .exactOptional()
  .openapi({
    param: {
      description: 'The mode of travel for the requested route.',
      in: 'query',
      name: 'travelMode',
      schema: {
        default: 'car',
        enum: ['car', 'truck', 'taxi', 'bus', 'van', 'motorcycle', 'bicycle', 'pedestrian'],
        type: 'string',
      },
      required: false,
    },
  })

const UphillEfficiencyParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).',
      in: 'query',
      name: 'uphillEfficiency',
      schema: { format: 'float', type: 'number' },
      required: false,
    },
  })

const VehicleAxleWeightParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Weight per axle of the vehicle in kg.',
      in: 'query',
      name: 'vehicleAxleWeight',
      schema: { default: 0, type: 'integer' },
      required: false,
    },
  })

const VehicleCommercialParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.',
      in: 'query',
      name: 'vehicleCommercial',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const VehicleEngineTypeParamsSchema = z
  .enum(['combustion', 'electric'])
  .default('combustion')
  .exactOptional()
  .openapi({
    param: {
      description: 'Engine type of the vehicle.',
      in: 'query',
      name: 'vehicleEngineType',
      schema: { default: 'combustion', enum: ['combustion', 'electric'], type: 'string' },
      required: false,
    },
  })

const VehicleHeadingParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(359),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).',
      in: 'query',
      name: 'vehicleHeading',
      schema: { maximum: 359, minimum: 0, type: 'integer' },
      required: false,
    },
  })

const VehicleHeightParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Height of the vehicle in meters.',
      in: 'query',
      name: 'vehicleHeight',
      schema: { default: 0, format: 'float', type: 'number' },
      required: false,
    },
  })

const VehicleLengthParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Length of the vehicle in meters.',
      in: 'query',
      name: 'vehicleLength',
      schema: { default: 0, format: 'float', type: 'number' },
      required: false,
    },
  })

const VehicleLoadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.\nUse these for routing in the US:\n\n  - <i>USHazmatClass1</i> Explosives\n  - <i>USHazmatClass2</i> Compressed gas\n  - <i>USHazmatClass3</i> Flammable liquids\n  - <i>USHazmatClass4</i> Flammable solids\n  - <i>USHazmatClass5</i> Oxidizers\n  - <i>USHazmatClass6</i> Poisons\n  - <i>USHazmatClass7</i> Radioactive\n  - <i>USHazmatClass8</i> Corrosives\n  - <i>USHazmatClass9</i> Miscellaneous\n\nUse these for routing in all other countries:\n\n  - <i>otherHazmatExplosive</i> Explosives\n  - <i>otherHazmatGeneral</i> Miscellaneous\n  - <i>otherHazmatHarmfulToWater</i> Harmful to water\n\nvehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.',
      in: 'query',
      name: 'vehicleLoadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const VehicleMaxSpeedParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Maximum speed of the vehicle in km/hour.',
      in: 'query',
      name: 'vehicleMaxSpeed',
      schema: { default: 0, type: 'integer' },
      required: false,
    },
  })

const VehicleWeightParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Weight of the vehicle in kilograms.',
      in: 'query',
      name: 'vehicleWeight',
      schema: { default: 0, type: 'integer' },
      required: false,
    },
  })

const VehicleWidthParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float32(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'Width of the vehicle in meters.',
      in: 'query',
      name: 'vehicleWidth',
      schema: { default: 0, format: 'float', type: 'number' },
      required: false,
    },
  })

const VersionNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.literal(1),
  )
  .openapi({
    param: {
      description: 'Service version number. The current value is 1.',
      in: 'path',
      name: 'versionNumber',
      required: true,
      schema: { enum: [1], type: 'integer' },
    },
  })

const WindingnessParamsSchema = z
  .enum(['low', 'normal', 'high'])
  .default('normal')
  .exactOptional()
  .openapi({
    param: {
      description: 'Amount that a thrilling route should wind.',
      in: 'query',
      name: 'windingness',
      schema: { default: 'normal', enum: ['low', 'normal', 'high'], type: 'string' },
      required: false,
    },
  })

const ApiKeySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute = createRoute({
  method: 'get',
  path: '/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}',
  tags: ['Routing'],
  summary: 'Reachable Range',
  description: 'Calculates a set of locations that can be reached from the origin point.',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      origin: OriginParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    query: z.object({
      fuelBudgetInLiters: FuelBudgetInLitersParamsSchema,
      energyBudgetInkWh: EnergyBudgetInkWhParamsSchema,
      timeBudgetInSec: TimeBudgetInSecParamsSchema,
      callback: CallbackParamsSchema,
      report: ReportParamsSchema,
      departAt: DepartAtParamsSchema,
      arriveAt: ArriveAtParamsSchema,
      routeType: RouteTypeParamsSchema,
      traffic: TrafficParamsSchema,
      avoid: AvoidInCalculateReachableRangeParamsSchema,
      travelMode: TravelModeParamsSchema,
      hilliness: HillinessParamsSchema,
      windingness: WindingnessParamsSchema,
      vehicleMaxSpeed: VehicleMaxSpeedParamsSchema,
      vehicleWeight: VehicleWeightParamsSchema,
      vehicleAxleWeight: VehicleAxleWeightParamsSchema,
      vehicleLength: VehicleLengthParamsSchema,
      vehicleWidth: VehicleWidthParamsSchema,
      vehicleHeight: VehicleHeightParamsSchema,
      vehicleCommercial: VehicleCommercialParamsSchema,
      vehicleLoadType: VehicleLoadTypeParamsSchema,
      constantSpeedConsumptionInLitersPerHundredkm:
        ConstantSpeedConsumptionInLitersPerHundredkmParamsSchema,
      currentFuelInLiters: CurrentFuelInLitersParamsSchema,
      auxiliaryPowerInLitersPerHour: AuxiliaryPowerInLitersPerHourParamsSchema,
      fuelEnergyDensityInMJoulesPerLiter: FuelEnergyDensityInMJoulesPerLiterParamsSchema,
      accelerationEfficiency: AccelerationEfficiencyParamsSchema,
      decelerationEfficiency: DecelerationEfficiencyParamsSchema,
      uphillEfficiency: UphillEfficiencyParamsSchema,
      downhillEfficiency: DownhillEfficiencyParamsSchema,
      vehicleEngineType: z
        .enum(['combustion', 'electric'])
        .default('combustion')
        .exactOptional()
        .openapi({
          param: {
            description: 'Engine type of the vehicle.',
            example: 'electric',
            in: 'query',
            name: 'vehicleEngineType',
            schema: { default: 'combustion', enum: ['combustion', 'electric'], type: 'string' },
            required: false,
          },
        }),
      constantSpeedConsumptionInkWhPerHundredkm: z
        .string()
        .regex(/^((\d+\.?\d*,\d+\.?\d*):?)+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.',
            example: '50,8.2:130,21.3',
            in: 'query',
            name: 'constantSpeedConsumptionInkWhPerHundredkm',
            schema: { pattern: '^((\\d+\\.?\\d*,\\d+\\.?\\d*):?)+$', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK: a range was calculated and the body of the response contains the polygon description and further data.',
    },
    400: {
      description:
        'Bad request: one or more parameters were incorrectly specified or are mutually exclusive, or the origin point specified in the request is not near enough to a road.',
    },
    403: _403Response,
    404: _404Response,
    405: _405Response,
    408: _408Response,
    414: _414Response,
    500: _500Response,
    502: _502Response,
    503: _503Response,
    504: _504Response,
    596: _596Response,
  },
})

export const postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute = createRoute({
  method: 'post',
  path: '/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}',
  tags: ['Routing'],
  summary: 'Reachable Range',
  description:
    'Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      origin: OriginParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    query: z.object({
      fuelBudgetInLiters: FuelBudgetInLitersParamsSchema,
      energyBudgetInkWh: EnergyBudgetInkWhParamsSchema,
      timeBudgetInSec: TimeBudgetInSecParamsSchema,
      callback: CallbackParamsSchema,
      report: ReportParamsSchema,
      departAt: DepartAtParamsSchema,
      arriveAt: ArriveAtParamsSchema,
      routeType: RouteTypeParamsSchema,
      traffic: TrafficParamsSchema,
      avoid: AvoidInCalculateReachableRangeParamsSchema,
      travelMode: TravelModeParamsSchema,
      hilliness: HillinessParamsSchema,
      windingness: WindingnessParamsSchema,
      vehicleMaxSpeed: VehicleMaxSpeedParamsSchema,
      vehicleWeight: VehicleWeightParamsSchema,
      vehicleAxleWeight: VehicleAxleWeightParamsSchema,
      vehicleLength: VehicleLengthParamsSchema,
      vehicleWidth: VehicleWidthParamsSchema,
      vehicleHeight: VehicleHeightParamsSchema,
      vehicleCommercial: VehicleCommercialParamsSchema,
      vehicleLoadType: VehicleLoadTypeParamsSchema,
      constantSpeedConsumptionInLitersPerHundredkm:
        ConstantSpeedConsumptionInLitersPerHundredkmParamsSchema,
      currentFuelInLiters: CurrentFuelInLitersParamsSchema,
      auxiliaryPowerInLitersPerHour: AuxiliaryPowerInLitersPerHourParamsSchema,
      fuelEnergyDensityInMJoulesPerLiter: FuelEnergyDensityInMJoulesPerLiterParamsSchema,
      accelerationEfficiency: AccelerationEfficiencyParamsSchema,
      decelerationEfficiency: DecelerationEfficiencyParamsSchema,
      uphillEfficiency: UphillEfficiencyParamsSchema,
      downhillEfficiency: DownhillEfficiencyParamsSchema,
      vehicleEngineType: z
        .enum(['combustion', 'electric'])
        .default('combustion')
        .exactOptional()
        .openapi({
          param: {
            description: 'Engine type of the vehicle.',
            example: 'electric',
            in: 'query',
            name: 'vehicleEngineType',
            schema: { default: 'combustion', enum: ['combustion', 'electric'], type: 'string' },
            required: false,
          },
        }),
      constantSpeedConsumptionInkWhPerHundredkm: z
        .string()
        .regex(/^((\d+\.?\d*,\d+\.?\d*):?)+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.',
            example: '50,8.2:130,21.3',
            in: 'query',
            name: 'constantSpeedConsumptionInkWhPerHundredkm',
            schema: { pattern: '^((\\d+\\.?\\d*,\\d+\\.?\\d*):?)+$', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: CalculateReachableRangePostDataParametersSchema },
        'application/xml': { schema: CalculateReachableRangePostDataParametersSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'OK: a range was calculated and the body of the response contains the polygon description and further data.',
    },
    400: {
      description:
        'Bad request: one or more parameters were incorrectly specified or are mutually exclusive, or the origin point specified in the request is not near enough to a road.',
    },
    403: _403Response,
    404: _404Response,
    405: _405Response,
    408: _408Response,
    414: _414Response,
    500: _500Response,
    502: _502Response,
    503: _503Response,
    504: _504Response,
    596: _596Response,
  },
})

export const getRoutingVersionNumberCalculateRouteLocationsContentTypeRoute = createRoute({
  method: 'get',
  path: '/routing/{versionNumber}/calculateRoute/{locations}/{contentType}',
  tags: ['Routing'],
  summary: 'Calculate Route',
  description: 'Calculates a route between an origin and a destination.',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      locations: LocationsParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    query: z.object({
      maxAlternatives: MaxAlternativesParamsSchema,
      alternativeType: AlternativeTypeParamsSchema,
      minDeviationDistance: MinDeviationDistanceParamsSchema,
      minDeviationTime: MinDeviationTimeParamsSchema,
      instructionsType: InstructionsTypeParamsSchema,
      language: LanguageParamsSchema,
      computeBestOrder: ComputeBestOrderParamsSchema,
      routeRepresentation: RouteRepresentationParamsSchema,
      computeTravelTimeFor: ComputeTravelTimeForParamsSchema,
      vehicleHeading: VehicleHeadingParamsSchema,
      sectionType: SectionTypeParamsSchema,
      callback: CallbackParamsSchema,
      report: ReportParamsSchema,
      departAt: DepartAtParamsSchema,
      arriveAt: ArriveAtParamsSchema,
      routeType: RouteTypeParamsSchema,
      traffic: TrafficParamsSchema,
      avoid: AvoidParamsSchema,
      travelMode: TravelModeParamsSchema,
      hilliness: HillinessParamsSchema,
      windingness: WindingnessParamsSchema,
      vehicleMaxSpeed: VehicleMaxSpeedParamsSchema,
      vehicleWeight: VehicleWeightParamsSchema,
      vehicleAxleWeight: VehicleAxleWeightParamsSchema,
      vehicleLength: VehicleLengthParamsSchema,
      vehicleWidth: VehicleWidthParamsSchema,
      vehicleHeight: VehicleHeightParamsSchema,
      vehicleCommercial: VehicleCommercialParamsSchema,
      vehicleLoadType: VehicleLoadTypeParamsSchema,
      vehicleEngineType: VehicleEngineTypeParamsSchema,
      constantSpeedConsumptionInLitersPerHundredkm:
        ConstantSpeedConsumptionInLitersPerHundredkmParamsSchema,
      currentFuelInLiters: CurrentFuelInLitersParamsSchema,
      auxiliaryPowerInLitersPerHour: AuxiliaryPowerInLitersPerHourParamsSchema,
      fuelEnergyDensityInMJoulesPerLiter: FuelEnergyDensityInMJoulesPerLiterParamsSchema,
      accelerationEfficiency: AccelerationEfficiencyParamsSchema,
      decelerationEfficiency: DecelerationEfficiencyParamsSchema,
      uphillEfficiency: UphillEfficiencyParamsSchema,
      downhillEfficiency: DownhillEfficiencyParamsSchema,
      constantSpeedConsumptionInkWhPerHundredkm:
        ConstantSpeedConsumptionInkWhPerHundredkmParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'OK: a route was calculated and the body of the response contains the route description and any other requested data.',
    },
    400: {
      description:
        'Bad request: one or more parameters were incorrectly specified, are mutually exclusive, the points in the request are not connected by the road network or the points in the request are not near enough to a road.',
    },
    403: _403Response,
    404: _404Response,
    405: _405Response,
    408: _408Response,
    414: _414Response,
    500: _500Response,
    502: _502Response,
    503: _503Response,
    504: _504Response,
    596: _596Response,
  },
})

export const postRoutingVersionNumberCalculateRouteLocationsContentTypeRoute = createRoute({
  method: 'post',
  path: '/routing/{versionNumber}/calculateRoute/{locations}/{contentType}',
  tags: ['Routing'],
  summary: 'Calculate Route',
  description:
    'Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.',
  request: {
    params: z.object({
      versionNumber: VersionNumberParamsSchema,
      locations: LocationsParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    query: z.object({
      maxAlternatives: MaxAlternativesParamsSchema,
      alternativeType: AlternativeTypeParamsSchema,
      minDeviationDistance: MinDeviationDistanceParamsSchema,
      minDeviationTime: MinDeviationTimeParamsSchema,
      instructionsType: InstructionsTypeParamsSchema,
      language: LanguageParamsSchema,
      computeBestOrder: ComputeBestOrderParamsSchema,
      routeRepresentation: RouteRepresentationParamsSchema,
      computeTravelTimeFor: ComputeTravelTimeForParamsSchema,
      vehicleHeading: VehicleHeadingParamsSchema,
      sectionType: SectionTypeParamsSchema,
      callback: CallbackParamsSchema,
      report: ReportParamsSchema,
      departAt: DepartAtParamsSchema,
      arriveAt: ArriveAtParamsSchema,
      routeType: RouteTypeParamsSchema,
      traffic: TrafficParamsSchema,
      avoid: AvoidParamsSchema,
      travelMode: TravelModeParamsSchema,
      hilliness: HillinessParamsSchema,
      windingness: WindingnessParamsSchema,
      vehicleMaxSpeed: VehicleMaxSpeedParamsSchema,
      vehicleWeight: VehicleWeightParamsSchema,
      vehicleAxleWeight: VehicleAxleWeightParamsSchema,
      vehicleLength: VehicleLengthParamsSchema,
      vehicleWidth: VehicleWidthParamsSchema,
      vehicleHeight: VehicleHeightParamsSchema,
      vehicleCommercial: VehicleCommercialParamsSchema,
      vehicleLoadType: VehicleLoadTypeParamsSchema,
      vehicleEngineType: VehicleEngineTypeParamsSchema,
      constantSpeedConsumptionInLitersPerHundredkm:
        ConstantSpeedConsumptionInLitersPerHundredkmParamsSchema,
      currentFuelInLiters: CurrentFuelInLitersParamsSchema,
      auxiliaryPowerInLitersPerHour: AuxiliaryPowerInLitersPerHourParamsSchema,
      fuelEnergyDensityInMJoulesPerLiter: FuelEnergyDensityInMJoulesPerLiterParamsSchema,
      accelerationEfficiency: AccelerationEfficiencyParamsSchema,
      decelerationEfficiency: DecelerationEfficiencyParamsSchema,
      uphillEfficiency: UphillEfficiencyParamsSchema,
      downhillEfficiency: DownhillEfficiencyParamsSchema,
      constantSpeedConsumptionInkWhPerHundredkm:
        ConstantSpeedConsumptionInkWhPerHundredkmParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: CalculateRoutePostDataParametersSchema },
        'application/xml': { schema: CalculateRoutePostDataParametersSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'OK: a route was calculated and the body of the response contains the route description and any other requested data.',
    },
    400: {
      description:
        'Bad request: one or more parameters were incorrectly specified, are mutually exclusive, the points in the request are not connected by the road network or the points in the request are not near enough to a road.',
    },
    403: _403Response,
    404: _404Response,
    405: _405Response,
    408: _408Response,
    414: _414Response,
    500: _500Response,
    502: _502Response,
    503: _503Response,
    504: _504Response,
    596: _596Response,
  },
})
