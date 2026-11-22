type HashMapStringListNearEarthObject = { [x: string]: unknown }
type NearEarthObjectList = {
  element_count?: number | undefined
  links?: { [x: string]: unknown } | undefined
  near_earth_objects?: HashMapStringListNearEarthObject | undefined
}
type MissDistance = {
  astronomical?: string | undefined
  kilometers?: string | undefined
  lunar?: string | undefined
  miles?: string | undefined
}
type RelVelocity = { kilometers_per_hour?: string | undefined; miles_per_hour?: string | undefined }
type CloseApproachData = {
  close_approach_date?: string | undefined
  close_approach_date_full?: string | undefined
  epoch_date_close_approach?: bigint | undefined
  miss_distance?: MissDistance | undefined
  orbiting_body?: string | undefined
  relative_velocity?: RelVelocity | undefined
}
type EstimatedDiameter = {
  estimated_diameter_max?: number | undefined
  estimated_diameter_min?: number | undefined
}
type EstimatedDiameterContainer = {
  feet?: EstimatedDiameter | undefined
  kilometers?: EstimatedDiameter | undefined
  meters?: EstimatedDiameter | undefined
  miles?: EstimatedDiameter | undefined
}
type OrbitClass = {
  orbit_class_description?: string | undefined
  orbit_class_range?: string | undefined
  orbit_class_type?:
    | 'IEO'
    | 'ATE'
    | 'APO'
    | 'AMO'
    | 'MCA'
    | 'IMB'
    | 'MBA'
    | 'OMB'
    | 'TJN'
    | 'CEN'
    | 'TNO'
    | 'PAA'
    | 'HYA'
    | 'HYP'
    | 'PAR'
    | 'COM'
    | 'JFC'
    | 'HTC'
    | 'ETC'
    | 'CTC'
    | 'JFc'
    | undefined
}
type OrbitalData = {
  aphelion_distance?: string | undefined
  ascending_node_longitude?: string | undefined
  data_arc_in_days?: bigint | undefined
  eccentricity?: string | undefined
  epoch_osculation?: string | undefined
  equinox?: string | undefined
  first_observation_date?: string | undefined
  inclination?: string | undefined
  jupiter_tisserand_invariant?: string | undefined
  last_observation_date?: string | undefined
  mean_anomaly?: string | undefined
  mean_motion?: string | undefined
  minimum_orbit_intersection?: string | undefined
  observations_used?: bigint | undefined
  orbit_class?: OrbitClass | undefined
  orbit_determination_date?: string | undefined
  orbit_id?: string | undefined
  orbit_uncertainty?: string | undefined
  orbital_period?: string | undefined
  perihelion_argument?: string | undefined
  perihelion_distance?: string | undefined
  perihelion_time?: string | undefined
  semi_major_axis?: string | undefined
}
type NearEarthObject = {
  absolute_magnitude_h?: number | undefined
  close_approach_data?: CloseApproachData[] | undefined
  designation?: string | undefined
  estimated_diameter?: EstimatedDiameterContainer | undefined
  is_potentially_hazardous_asteroid?: boolean | undefined
  is_sentry_object?: boolean | undefined
  name?: string | undefined
  name_limited?: string | undefined
  nasa_jpl_url?: string | undefined
  neo_reference_id?: string | undefined
  orbital_data?: OrbitalData | undefined
  sentry_data?: string | undefined
}
type PageMetaData = {
  number?: bigint | undefined
  size?: bigint | undefined
  total_elements?: bigint | undefined
  total_pages?: bigint | undefined
}
type SentryImpactRiskObject = {
  Palermo_scale_max?: string | undefined
  absolute_magnitude?: string | undefined
  average_lunar_distance?: number | undefined
  designation?: string | undefined
  estimated_diameter?: string | undefined
  fullname?: string | undefined
  impact_probability?: string | undefined
  is_active_sentry_object?: boolean | undefined
  last_obs?: string | undefined
  last_obs_jd?: string | undefined
  palermo_scale_ave?: string | undefined
  potential_impacts?: string | undefined
  removal_date?: string | undefined
  sentryId?: string | undefined
  torino_scale?: string | undefined
  v_infinity?: string | undefined
  year_range_max?: string | undefined
  year_range_min?: string | undefined
}
type SentryObjectPagingDto = {
  links?: { [x: string]: unknown } | undefined
  page?: PageMetaData | undefined
  sentry_objects?: SentryImpactRiskObject[] | undefined
}
type URL = {
  authority?: string | undefined
  content?: { [x: string]: unknown } | undefined
  defaultPort?: number | undefined
  file?: string | undefined
  host?: string | undefined
  path?: string | undefined
  port?: number | undefined
  protocol?: string | undefined
  query?: string | undefined
  ref?: string | undefined
  userInfo?: string | undefined
}
type Statistics = {
  close_approach_count?: bigint | undefined
  last_updated?: string | undefined
  nasa_jpl_url?: URL | undefined
  near_earth_object_count?: bigint | undefined
  source?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/rest/v1/feed': {
      $get:
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                detailed?: boolean | undefined
              }
            }
            output: NearEarthObjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                detailed?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                detailed?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                start_date?: string | undefined
                end_date?: string | undefined
                detailed?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/v1/feed/today': {
      $get:
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: NearEarthObjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { detailed?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/v1/neo/browse': {
      $get:
        | {
            input: { query: { page?: number | undefined; size?: number | undefined } }
            output: NearEarthObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { page?: number | undefined; size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/v1/neo/sentry': {
      $get:
        | {
            input: {
              query: {
                is_active?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: SentryObjectPagingDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                is_active?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                is_active?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                is_active?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/v1/neo/sentry/:asteroid_id': {
      $get:
        | {
            input: { param: { asteroid_id: string } }
            output: SentryImpactRiskObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asteroid_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { asteroid_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { asteroid_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/v1/neo/:asteroid_id': {
      $get:
        | {
            input: { param: { asteroid_id: string } }
            output: NearEarthObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asteroid_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { asteroid_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { asteroid_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/v1/stats': {
      $get:
        | { input: {}; output: Statistics; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
