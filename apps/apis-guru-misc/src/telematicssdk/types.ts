declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/mobilesdk/stage/track/get_track/v1': {
      $get: {
        input: { query: { trackToken?: string | undefined } }
        output: {
          Result?:
            | {
                Code?: number | undefined
                Track?:
                  | {
                      AccelerationCount?: number | undefined
                      AddressEnd?: string | undefined
                      AddressFinishParts?:
                        | {
                            City?: string | undefined
                            CountryCode?: string | undefined
                            District?: string | undefined
                            House?: string | undefined
                            PostalCode?: string | undefined
                            Street?: string | undefined
                          }
                        | undefined
                      AddressStart?: string | undefined
                      AddressStartParts?:
                        | {
                            City?: string | undefined
                            CountryCode?: string | undefined
                            District?: string | undefined
                            House?: string | undefined
                            PostalCode?: string | undefined
                            Street?: string | undefined
                          }
                        | undefined
                      BeaconId?: number | undefined
                      CityFinish?: string | undefined
                      CityStart?: string | undefined
                      DecelerationCount?: number | undefined
                      Distance?: number | undefined
                      DrivingTips?: string | undefined
                      Duration?: number | undefined
                      EcoScore?: number | undefined
                      EcoScoreBrakes?: number | undefined
                      EcoScoreDepreciation?: number | undefined
                      EcoScoreFuel?: number | undefined
                      EcoScoreTyres?: number | undefined
                      EndDate?: string | undefined
                      HighOverSpeedMileage?: number | undefined
                      MidOverSpeedMileage?: number | undefined
                      OriginChanged?: boolean | undefined
                      PhoneUsage?: number | undefined
                      Points?:
                        | {
                            AlertType?: string | undefined
                            AlertValue?: number | undefined
                            Cornering?: boolean | undefined
                            Course?: number | undefined
                            Height?: number | undefined
                            Id?: number | undefined
                            Lateral?: number | undefined
                            Latitude?: number | undefined
                            Longitude?: number | undefined
                            MidSpeed?: number | undefined
                            Number?: number | undefined
                            PhoneUsage?: boolean | undefined
                            PointDate?: string | undefined
                            Speed?: number | undefined
                            SpeedLimit?: number | undefined
                            SpeedType?: string | undefined
                            TotalMeters?: number | undefined
                            Yaw?: number | undefined
                          }[]
                        | undefined
                      Rating?: number | undefined
                      Rating100?: number | undefined
                      RatingAcceleration?: number | undefined
                      RatingAcceleration100?: number | undefined
                      RatingBraking?: number | undefined
                      RatingBraking100?: number | undefined
                      RatingCornering?: number | undefined
                      RatingCornering100?: number | undefined
                      RatingPhoneDistraction100?: number | undefined
                      RatingPhoneUsage?: number | undefined
                      RatingSpeeding?: number | undefined
                      RatingSpeeding100?: number | undefined
                      RatingTimeOfDay?: number | undefined
                      ShareType?: string | undefined
                      StartDate?: string | undefined
                      Status?: string | undefined
                      TrackOriginCode?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/statistics/v1/Scorings/consolidated': {
      $get: {
        input: {
          query: {
            DeviceToken?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            Tag?: string | undefined
            InstanceId?: string | undefined
            AppId?: string | undefined
            CompanyId?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/statistics/v1/Scorings/consolidated/daily': {
      $get: {
        input: {
          query: {
            DeviceToken?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            Tag?: string | undefined
            InstanceId?: string | undefined
            AppId?: string | undefined
            CompanyId?: string | undefined
          }
        }
        output: {
          Errors?: { [x: string]: unknown }[] | undefined
          Result?:
            | {
                AccelerationScore?: number | undefined
                AppId?: string | undefined
                BrakingScore?: number | undefined
                CompanyId?: string | undefined
                CorneringScore?: number | undefined
                DeviceToken?: string | undefined
                DistractedScore?: number | undefined
                InstanceId?: string | undefined
                OverallScore?: number | undefined
                ReportDate?: string | undefined
                SpeedingScore?: number | undefined
              }[]
            | undefined
          Status?: number | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/statistics/v1/Scorings/individual/': {
      $get: {
        input: { query: { startDate?: string | undefined; endDate?: string | undefined } }
        output: {
          Errors?: { [x: string]: unknown }[] | undefined
          Result?:
            | {
                AccelerationScore?: number | undefined
                AppId?: string | undefined
                BrakingScore?: number | undefined
                CompanyId?: string | undefined
                CorneringScore?: number | undefined
                DeviceToken?: string | undefined
                DistractedScore?: number | undefined
                InstanceId?: string | undefined
                OverallScore?: number | undefined
                SpeedingScore?: number | undefined
              }
            | undefined
          Status?: number | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/statistics/v1/Scorings/individual/daily': {
      $get: {
        input: {
          query: {
            Tag?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
          }
        }
        output: {
          Errors?: { [x: string]: unknown }[] | undefined
          Result?:
            | {
                AccelerationScore?: number | undefined
                AppId?: string | undefined
                BrakingScore?: number | undefined
                CalcDate?: string | undefined
                CompanyId?: string | undefined
                CorneringScore?: number | undefined
                DeviceToken?: string | undefined
                DistractedScore?: number | undefined
                InstanceId?: string | undefined
                OverallScore?: number | undefined
                SpeedingScore?: number | undefined
              }[]
            | undefined
          Status?: number | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/statistics/v1/Statistics/consolidated': {
      $get: {
        input: {
          query: {
            DeviceToken?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            Tag?: string | undefined
            InstanceId?: string | undefined
            AppId?: string | undefined
            CompanyId?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/statistics/v1/Statistics/consolidated/daily': {
      $get: {
        input: {
          query: {
            DeviceToken?: string | undefined
            StartDate?: string | undefined
            EndDate?: string | undefined
            Tag?: string | undefined
            InstanceId?: string | undefined
            AppId?: string | undefined
            CompanyId?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/statistics/v1/Statistics/individual/': {
      $get: {
        input: { query: { startDate?: string | undefined; endDate?: string | undefined } }
        output: {
          Errors?: { [x: string]: unknown }[] | undefined
          Result?:
            | {
                AccelerationCount?: number | undefined
                AppId?: string | undefined
                AverageSpeedKmh?: number | undefined
                AverageSpeedMileh?: number | undefined
                BreakingCount?: number | undefined
                CompanyId?: string | undefined
                CorneringCount?: number | undefined
                DayDrivingTime?: number | undefined
                DeviceToken?: string | undefined
                DriverTripsCount?: number | undefined
                DrivingTime?: number | undefined
                InstanceId?: string | undefined
                MaxSpeedKmh?: number | undefined
                MaxSpeedMileh?: number | undefined
                MileageKm?: number | undefined
                MileageMile?: number | undefined
                NightDrivingTime?: number | undefined
                OtherTripsCount?: number | undefined
                PhoneUsageDistanceKm?: number | undefined
                PhoneUsageDistanceMile?: number | undefined
                PhoneUsageDurationMin?: number | undefined
                PhoneUsageOverSpeedDistanceKm?: number | undefined
                PhoneUsageOverSpeedDistanceMile?: number | undefined
                PhoneUsageOverSpeedDurationMin?: number | undefined
                RushHoursDrivingTime?: number | undefined
                TotalSpeedingKm?: number | undefined
                TotalSpeedingMile?: number | undefined
                TripsCount?: number | undefined
              }
            | undefined
          Status?: number | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/statistics/v1/Statistics/individual/daily/': {
      $get: {
        input: { query: { startDate?: string | undefined; endDate?: string | undefined } }
        output: {
          Errors?: { [x: string]: unknown }[] | undefined
          Result?:
            | {
                AccelerationCount?: number | undefined
                AppId?: string | undefined
                AverageSpeedKmh?: number | undefined
                AverageSpeedMileh?: number | undefined
                BreakingCount?: number | undefined
                CompanyId?: string | undefined
                CorneringCount?: number | undefined
                DayDrivingTime?: number | undefined
                DeviceToken?: string | undefined
                DriverTripsCount?: number | undefined
                DrivingTime?: number | undefined
                InstanceId?: string | undefined
                MaxSpeedKmh?: number | undefined
                MaxSpeedMileh?: number | undefined
                MileageKm?: number | undefined
                MileageMile?: number | undefined
                NightDrivingTime?: number | undefined
                OtherTripsCount?: number | undefined
                PhoneUsageDistanceKm?: number | undefined
                PhoneUsageDistanceMile?: number | undefined
                PhoneUsageDurationMin?: number | undefined
                PhoneUsageOverSpeedDistanceKm?: number | undefined
                PhoneUsageOverSpeedDistanceMile?: number | undefined
                PhoneUsageOverSpeedDurationMin?: number | undefined
                ReportDate?: string | undefined
                RushHoursDrivingTime?: number | undefined
                TotalSpeedingKm?: number | undefined
                TotalSpeedingMile?: number | undefined
                TripsCount?: number | undefined
              }[]
            | undefined
          Status?: number | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
