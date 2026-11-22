type FlagsForAppResponse = { flagsForApp: string[] }
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type FlagResponse = {
  appId: number
  defaultState: 'ABSENT' | 'OFF' | 'ON'
  flagName: string
  overrideState?: 'ABSENT' | 'OFF' | 'ON' | undefined
}
type FlagPutRequest = {
  defaultState: 'ABSENT' | 'OFF' | 'ON'
  overrideState?: 'ABSENT' | 'OFF' | 'ON' | undefined
}
type PortalFlagStateResponse = {
  appId: number
  flagName: string
  flagState: 'ABSENT' | 'OFF' | 'ON'
  portalId: number
}
type PortalFlagStateBatchResponse = { portalFlagStates: PortalFlagStateResponse[] }
type PortalFlagStateBatchDeleteRequest = { portalIds: number[] }
type BatchPortalEntry = { flagState: 'ABSENT' | 'OFF' | 'ON'; portalId: number }
type PortalFlagStateBatchPutRequest = { portalStates: BatchPortalEntry[] }
type PortalFlagStatePutRequest = { flagState: 'ABSENT' | 'OFF' | 'ON' }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/feature-flags/2026-09/:appId/flags/all': {
      $get:
        | {
            input: { param: { appId: number } }
            output: FlagsForAppResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/feature-flags/2026-09/:appId/flags/:flagName': {
      $get:
        | {
            input: { param: { appId: number; flagName: string } }
            output: FlagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { appId: number; flagName: string } } & { json: FlagPutRequest }
            output: FlagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string } } & { json: FlagPutRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { appId: number; flagName: string } }
            output: FlagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/feature-flags/2026-09/:appId/flags/:flagName/portals': {
      $get:
        | {
            input: { param: { appId: number; flagName: string } } & {
              query: { limit?: number | undefined; startPortalId?: number | undefined }
            }
            output: PortalFlagStateBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string } } & {
              query: { limit?: number | undefined; startPortalId?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/batch/delete': {
      $post:
        | {
            input: { param: { appId: number; flagName: string } } & {
              json: PortalFlagStateBatchDeleteRequest
            }
            output: PortalFlagStateBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string } } & {
              json: PortalFlagStateBatchDeleteRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/batch/upsert': {
      $post:
        | {
            input: { param: { appId: number; flagName: string } } & {
              json: PortalFlagStateBatchPutRequest
            }
            output: PortalFlagStateBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string } } & {
              json: PortalFlagStateBatchPutRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId': {
      $get:
        | {
            input: { param: { appId: number; flagName: string; portalId: number } }
            output: PortalFlagStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string; portalId: number } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { appId: number; flagName: string; portalId: number } } & {
              json: PortalFlagStatePutRequest
            }
            output: PortalFlagStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string; portalId: number } } & {
              json: PortalFlagStatePutRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { appId: number; flagName: string; portalId: number } }
            output: PortalFlagStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; flagName: string; portalId: number } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
