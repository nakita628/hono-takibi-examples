type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type AutocompleteResult = {
  id: string
  label: string
  icon: string
  source: string
  status:
    | { status: string; message: string | null; icon: string | null; clearAt: bigint | null }
    | string
  subline: string
  shareWithDisplayNameUnique: string
}
type OpenGraphObject = {
  id: string
  name: string
  description: string | null
  thumb: string | null
  link: string
}
type Resource = {
  richObjectType: string
  richObject: { [x: string]: { [x: string]: unknown } | null }
  openGraphObject: OpenGraphObject
  accessible: boolean
}
type Collection = { id: bigint; name: string; resources: Resource[] }
type ContactsAction = { title: string; icon: string; hyperlink: string; appId: string }
type NavigationEntry = {
  id: string
  order?: bigint | undefined
  href: string
  icon: string
  type: 'link'
  name: string
  app?: string | undefined
  default?: boolean | undefined
  active: boolean
  classes: string
  unread: bigint
}
type NavigationSettingsEntry = {
  id: string
  order?: bigint | undefined
  href: string
  icon: string
  type: 'settings'
  name: string
  app?: string | undefined
  default?: boolean | undefined
  active: boolean
  classes: string
  unread: bigint
}
type ProfileAction = { id: string; icon: string; title: string; target: string | null }
type ProfileData = {
  userId: string
  address?: (string | null) | undefined
  biography?: (string | null) | undefined
  displayname?: (string | null) | undefined
  headline?: (string | null) | undefined
  isUserAvatarVisible?: boolean | undefined
  organisation?: (string | null) | undefined
  pronouns?: (string | null) | undefined
  role?: (string | null) | undefined
  actions: ProfileAction[]
  timezone: string
  timezoneOffset: bigint
}
type ReferenceProvider = {
  id: string
  title: string
  icon_url: string
  order: bigint
  search_providers_ids: string[] | null
}
type TaskProcessingShape = {
  name: string
  description: string
  type:
    | 'Number'
    | 'Text'
    | 'Audio'
    | 'Image'
    | 'Video'
    | 'File'
    | 'Enum'
    | 'ListOfNumbers'
    | 'ListOfTexts'
    | 'ListOfImages'
    | 'ListOfAudios'
    | 'ListOfVideos'
    | 'ListOfFiles'
}
type TaskProcessingTaskType = {
  name: string
  description: string
  inputShape: { [x: string]: TaskProcessingShape }
  inputShapeEnumValues: { [x: string]: { name: string; value: string }[] }
  inputShapeDefaults: { [x: string]: number | string }
  optionalInputShape: { [x: string]: TaskProcessingShape }
  optionalInputShapeEnumValues: { [x: string]: { name: string; value: string }[] }
  optionalInputShapeDefaults: { [x: string]: number | string }
  outputShape: { [x: string]: TaskProcessingShape }
  outputShapeEnumValues: { [x: string]: { name: string; value: string }[] }
  optionalOutputShape: { [x: string]: TaskProcessingShape }
  optionalOutputShapeEnumValues: { [x: string]: { name: string; value: string }[] }
}
type TaskProcessingIO = { [x: string]: number | number[] | string | string[] }
type TaskProcessingTask = {
  id: bigint
  lastUpdated: bigint
  type: string
  status:
    | 'STATUS_CANCELLED'
    | 'STATUS_FAILED'
    | 'STATUS_SUCCESSFUL'
    | 'STATUS_RUNNING'
    | 'STATUS_SCHEDULED'
    | 'STATUS_UNKNOWN'
  userId: string | null
  appId: string
  input: TaskProcessingIO
  output: {}
  customId: string | null
  completionExpectedAt: bigint | null
  progress: number | null
  scheduledAt: bigint | null
  startedAt: bigint | null
  endedAt: bigint | null
  allowCleanup: boolean
  includeWatermark: boolean
  userFacingErrorMessage: string | null
  preferStreaming: boolean
}
type TeamResource = {
  id: string
  label: string
  url: string
  iconSvg: string | null
  iconURL: string | null
  iconEmoji: string | null
  provider: { id: string; name: string; icon: string }
}
type TeamWithResources = {
  teamId: string
  displayName: string
  link: string | null
  resources: TeamResource[]
}
type TextProcessingTask = {
  id: bigint | null
  type: string
  status: 0n | 1n | 2n | 3n | 4n
  userId: string | null
  appId: string
  input: string
  output: string | null
  identifier: string
  completionExpectedAt: bigint | null
}
type TextToImageTask = {
  id: bigint | null
  status: 0n | 1n | 2n | 3n | 4n
  userId: string | null
  appId: string
  input: string
  identifier: string | null
  numberOfImages: bigint
  completionExpectedAt: bigint | null
}
type UnifiedSearchProvider = {
  id: string
  appId: string
  name: string
  icon: string
  order: bigint
  isExternalProvider: boolean
  triggers: string[]
  filters: { [x: string]: string }
  inAppSearch: boolean
}
type UnifiedSearchResultEntry = {
  thumbnailUrl: string
  title: string
  subline: string
  resourceUrl: string
  icon: string
  rounded: boolean
  attributes: string[]
}
type UnifiedSearchResult = {
  name: string
  isPaginated: boolean
  entries: UnifiedSearchResultEntry[]
  cursor: bigint | string
}
type LoginFlowV2Credentials = { server: string; loginName: string; appPassword: string }
type LoginFlowV2 = { poll: { token: string; endpoint: string }; login: string }
type Status = {
  installed: boolean
  maintenance: boolean
  needsDbUpgrade: boolean
  version: string
  versionstring: string
  edition: string
  productname: string
  extendedSupport: boolean
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/core/getapppassword': {
      $get:
        | {
            input: { header: { 'user-agent'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { apppassword: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'user-agent'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'user-agent'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/core/apppassword': {
      $delete:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/core/apppassword/rotate': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { apppassword: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/core/apppassword/confirm': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { password: string } }
            output: { ocs: { meta: OCSMeta; data: { lastLogin: bigint } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { password: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { password: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/core/getapppassword-onetime': {
      $get:
        | {
            input: { header: { 'user-agent'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { apppassword: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'user-agent'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'user-agent'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/core/autocomplete/get': {
      $get:
        | {
            input: {
              query: {
                search: string
                itemType?: (string | null) | undefined
                itemId?: (string | null) | undefined
                sorter?: (string | null) | undefined
                'shareTypes[]'?: bigint[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: AutocompleteResult[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                itemType?: (string | null) | undefined
                itemId?: (string | null) | undefined
                sorter?: (string | null) | undefined
                'shareTypes[]'?: bigint[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/collaboration/resources/collections/:collectionId': {
      $get:
        | {
            input: { param: { collectionId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Collection } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collectionId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { resourceType: string; resourceId: string } }
            output: { ocs: { meta: OCSMeta; data: Collection } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { resourceType: string; resourceId: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { resourceType: string; resourceId: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { resourceType: string; resourceId: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { collectionId: bigint } } & {
              query: { resourceType: string; resourceId: string }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Collection } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: bigint } } & {
              query: { resourceType: string; resourceId: string }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collectionId: bigint } } & {
              query: { resourceType: string; resourceId: string }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: bigint } } & {
              query: { resourceType: string; resourceId: string }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collectionName: string } }
            output: { ocs: { meta: OCSMeta; data: Collection } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collectionName: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collectionName: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { collectionName: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/collaboration/resources/collections/search/:filter': {
      $get:
        | {
            input: { param: { filter: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Collection[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { filter: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { filter: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/collaboration/resources/:resourceType/:resourceId': {
      $get:
        | {
            input: { param: { resourceType: string; resourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Collection[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceType: string; resourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resourceType: string; resourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/collaboration/resources/:baseResourceType/:baseResourceId': {
      $post:
        | {
            input: { param: { baseResourceType: string; baseResourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: Collection } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { baseResourceType: string; baseResourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { baseResourceType: string; baseResourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { baseResourceType: string; baseResourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { baseResourceType: string; baseResourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { name: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/hovercard/v1/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { userId: string; displayName: string; actions: ContactsAction[] }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/core/navigation/apps': {
      $get:
        | {
            input: { query: { absolute?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: NavigationEntry[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { absolute?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { absolute?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/core/navigation/settings': {
      $get:
        | {
            input: { query: { absolute?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: NavigationSettingsEntry[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { absolute?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { absolute?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/capabilities': {
      $get: {
        input: { header: { 'OCS-APIRequest': boolean } }
        output: {
          ocs: {
            meta: OCSMeta
            data: {
              version: {
                major: bigint
                minor: bigint
                micro: bigint
                string: string
                edition: string
                extendedSupport: boolean
              }
              capabilities: { [x: string]: { [x: string]: unknown } }
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/profile/:targetUserId': {
      $put:
        | {
            input: { param: { targetUserId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { paramId: string; visibility: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { targetUserId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { paramId: string; visibility: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { targetUserId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { paramId: string; visibility: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { targetUserId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { paramId: string; visibility: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { targetUserId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { paramId: string; visibility: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { targetUserId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ProfileData } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { targetUserId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { targetUserId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { targetUserId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/references/extract': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { text: string; resolve?: boolean | undefined; limit?: bigint | undefined }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  references: {
                    [x: string]: {
                      richObjectType: string
                      richObject: { [x: string]: { [x: string]: unknown } | null }
                      openGraphObject: OpenGraphObject
                      accessible: boolean
                    }
                  }
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { text: string; resolve?: boolean | undefined; limit?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/references/extractPublic': {
      $post: {
        input: { header: { 'OCS-APIRequest': boolean } } & {
          json: {
            text: string
            sharingToken: string
            resolve?: boolean | undefined
            limit?: bigint | undefined
          }
        }
        output: {
          ocs: {
            meta: OCSMeta
            data: {
              references: {
                [x: string]: {
                  richObjectType: string
                  richObject: { [x: string]: { [x: string]: unknown } | null }
                  openGraphObject: OpenGraphObject
                  accessible: boolean
                }
              }
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/references/resolve': {
      $get:
        | {
            input: { query: { reference: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  references: {
                    [x: string]: {
                      richObjectType: string
                      richObject: { [x: string]: { [x: string]: unknown } | null }
                      openGraphObject: OpenGraphObject
                      accessible: boolean
                    }
                  }
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { reference: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { references: string[]; limit?: bigint | undefined }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  references: {
                    [x: string]: {
                      richObjectType: string
                      richObject: { [x: string]: { [x: string]: unknown } | null }
                      openGraphObject: OpenGraphObject
                      accessible: boolean
                    }
                  }
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { references: string[]; limit?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/references/resolvePublic': {
      $get: {
        input: { query: { reference: string; sharingToken: string } } & {
          header: { 'OCS-APIRequest': boolean }
        }
        output: {
          ocs: {
            meta: OCSMeta
            data: {
              references: {
                [x: string]: {
                  richObjectType: string
                  richObject: { [x: string]: { [x: string]: unknown } | null }
                  openGraphObject: OpenGraphObject
                  accessible: boolean
                }
              }
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'OCS-APIRequest': boolean } } & {
          json: { references: string[]; sharingToken: string; limit?: bigint | undefined }
        }
        output: {
          ocs: {
            meta: OCSMeta
            data: {
              references: {
                [x: string]: {
                  richObjectType: string
                  richObject: { [x: string]: { [x: string]: unknown } | null }
                  openGraphObject: OpenGraphObject
                  accessible: boolean
                }
              }
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/references/providers': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ReferenceProvider[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/references/provider/:providerId': {
      $put:
        | {
            input: { param: { providerId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { timestamp?: (bigint | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { success: boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { providerId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { timestamp?: (bigint | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasktypes': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { types: { [x: string]: TaskProcessingTaskType } } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/schedule': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { message: string } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/task/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks/app/:appId': {
      $get:
        | {
            input: { param: { appId: string } } & {
              query: { customId?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { tasks: TaskProcessingTask[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              query: { customId?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appId: string } } & {
              query: { customId?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks': {
      $get:
        | {
            input: {
              query: {
                taskType?: (string | null) | undefined
                customId?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { tasks: TaskProcessingTask[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                taskType?: (string | null) | undefined
                customId?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                taskType?: (string | null) | undefined
                customId?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks/:taskId/file/:fileId': {
      $get:
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks/:taskId/cancel': {
      $post:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks/:taskId/queue_position': {
      $get:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: bigint } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/teams/:teamId/resources': {
      $get:
        | {
            input: { param: { teamId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { resources: TeamResource[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/teams/resources/:providerId/:resourceId': {
      $get:
        | {
            input: { param: { providerId: string; resourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { teams: TeamWithResources[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { providerId: string; resourceId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/textprocessing/tasktypes': {
      $get: {
        input: { header: { 'OCS-APIRequest': boolean } }
        output: {
          ocs: {
            meta: OCSMeta
            data: { types: { id: string; name: string; description: string }[] }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/textprocessing/schedule': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { input: string; type: string; appId: string; identifier?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TextProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { input: string; type: string; appId: string; identifier?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { input: string; type: string; appId: string; identifier?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { input: string; type: string; appId: string; identifier?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { input: string; type: string; appId: string; identifier?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/textprocessing/task/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TextProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TextProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/textprocessing/tasks/app/:appId': {
      $get:
        | {
            input: { param: { appId: string } } & {
              query: { identifier?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { tasks: TextProcessingTask[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              query: { identifier?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appId: string } } & {
              query: { identifier?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/text2image/is_available': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { isAvailable: boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/text2image/schedule': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: string
                appId: string
                identifier?: string | undefined
                numberOfImages?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TextToImageTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: string
                appId: string
                identifier?: string | undefined
                numberOfImages?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: string
                appId: string
                identifier?: string | undefined
                numberOfImages?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: string
                appId: string
                identifier?: string | undefined
                numberOfImages?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/text2image/task/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TextToImageTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TextToImageTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/text2image/task/:id/image/:index': {
      $get:
        | {
            input: { param: { id: bigint; index: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint; index: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; index: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint; index: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/text2image/tasks/app/:appId': {
      $get:
        | {
            input: { param: { appId: string } } & {
              query: { identifier?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { tasks: TextToImageTask[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              query: { identifier?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appId: string } } & {
              query: { identifier?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/translation/languages': {
      $get: {
        input: { header: { 'OCS-APIRequest': boolean } }
        output: {
          ocs: {
            meta: OCSMeta
            data: {
              languages: { from: string; fromLabel: string; to: string; toLabel: string }[]
              languageDetection: boolean
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/translation/translate': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { text: string; fromLanguage?: (string | null) | undefined; toLanguage: string }
            }
            output: { ocs: { meta: OCSMeta; data: { text: string; from: string | null } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { text: string; fromLanguage?: (string | null) | undefined; toLanguage: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { message: string; from?: (string | null) | undefined } }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { text: string; fromLanguage?: (string | null) | undefined; toLanguage: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { message: string; from?: (string | null) | undefined } }
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { text: string; fromLanguage?: (string | null) | undefined; toLanguage: string }
            }
            output: {
              ocs: { meta: OCSMeta; data: { message: string; from?: (string | null) | undefined } }
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/search/providers': {
      $get:
        | {
            input: { query: { from?: string | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: UnifiedSearchProvider[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: string | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/search/providers/:providerId/search': {
      $get:
        | {
            input: { param: { providerId: string } } & {
              query: {
                term?: string | undefined
                sortOrder?: (bigint | null) | undefined
                limit?: (bigint | null) | undefined
                cursor?: bigint | string | undefined
                from?: string | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: UnifiedSearchResult } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { providerId: string } } & {
              query: {
                term?: string | undefined
                sortOrder?: (bigint | null) | undefined
                limit?: (bigint | null) | undefined
                cursor?: bigint | string | undefined
                from?: string | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { providerId: string } } & {
              query: {
                term?: string | undefined
                sortOrder?: (bigint | null) | undefined
                limit?: (bigint | null) | undefined
                cursor?: bigint | string | undefined
                from?: string | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/index.php/avatar/:userId/:size/dark': {
      $get:
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/index.php/avatar/:userId/:size': {
      $get:
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; size: 64n | 512n } } & {
              query: { guestFallback?: boolean | undefined; v?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/index.php/csrftoken': {
      $get:
        | { input: {}; output: { token: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/index.php/login/v2/poll': {
      $post:
        | {
            input: { json: { token: string } }
            output: LoginFlowV2Credentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/login/v2': {
      $post: {
        input: { header: { 'user-agent'?: string | undefined } }
        output: LoginFlowV2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/index.php/avatar/guest/:guestName/:size': {
      $get:
        | {
            input: { param: { guestName: string; size: 64n | 512n } } & {
              query: { darkTheme?: (boolean | null) | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestName: string; size: 64n | 512n } } & {
              query: { darkTheme?: (boolean | null) | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { guestName: string; size: 64n | 512n } } & {
              query: { darkTheme?: (boolean | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/index.php/avatar/guest/:guestName/:size/dark': {
      $get:
        | {
            input: { param: { guestName: string; size: 64n | 512n } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestName: string; size: 64n | 512n } }
            output: File
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { guestName: string; size: 64n | 512n } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/index.php/login/confirm': {
      $post:
        | {
            input: { json: { password: string } }
            output: { lastLogin: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password: string } }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { password: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/index.php/ocm-provider': {
      $get:
        | {
            input: {}
            output: {
              enabled: boolean
              apiVersion: string
              endPoint: string
              resourceTypes: { name: string; shareTypes: string[]; protocols: { webdav: string } }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { message: string }; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/index.php/core/preview.png': {
      $get:
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/core/preview': {
      $get:
        | {
            input: {
              query: {
                fileId: bigint
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fileId: bigint
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                fileId: bigint
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fileId: bigint
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fileId: bigint
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fileId: bigint
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                forceIcon?: boolean | undefined
                mode?: 'fill' | 'cover' | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/core/mimeicon': {
      $get: {
        input: { query: { mime?: string | undefined } }
        output: {}
        outputFormat: string
        status: 303
      }
    }
  } & {
    '/index.php/core/references/preview/:referenceId': {
      $get:
        | {
            input: { param: { referenceId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { referenceId: string } }
            output: string
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/core/wipe/check': {
      $post:
        | {
            input: { json: { token: string } }
            output: { wipe: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/core/wipe/success': {
      $post:
        | {
            input: { json: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/status.php': { $get: { input: {}; output: Status; outputFormat: 'json'; status: 200 } }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_consumer/tasktypes': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { types: { [x: string]: TaskProcessingTaskType } } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_consumer/schedule': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { message: string } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                input: { [x: string]: { [x: string]: unknown } }
                type: string
                appId: string
                customId?: string | undefined
                webhookUri?: (string | null) | undefined
                webhookMethod?: (string | null) | undefined
                includeWatermark?: boolean | undefined
                preferStreaming?: boolean | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_consumer/task/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/file/:fileId': {
      $get:
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/file': {
      $post:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { fileId: bigint } } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/progress': {
      $post:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: number }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: number }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: number }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: number }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: number }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/result': {
      $post:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                output?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                errorMessage?: (string | null) | undefined
                userFacingErrorMessage?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                output?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                errorMessage?: (string | null) | undefined
                userFacingErrorMessage?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                output?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                errorMessage?: (string | null) | undefined
                userFacingErrorMessage?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                output?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                errorMessage?: (string | null) | undefined
                userFacingErrorMessage?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                output?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                errorMessage?: (string | null) | undefined
                userFacingErrorMessage?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/stream-result': {
      $post:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { output: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { output: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { output: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { output: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { output: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_consumer/tasks/:taskId/cancel': {
      $post:
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { task: TaskProcessingTask } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/next': {
      $get:
        | {
            input: { query: { 'providerIds[]': string[]; 'taskTypeIds[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { task: TaskProcessingTask; provider: { name: string } } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'providerIds[]': string[]; 'taskTypeIds[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { 'providerIds[]': string[]; 'taskTypeIds[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { 'providerIds[]': string[]; 'taskTypeIds[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { 'providerIds[]': string[]; 'taskTypeIds[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/tasks_provider/next_batch': {
      $get:
        | {
            input: {
              query: {
                'providerIds[]': string[]
                'taskTypeIds[]': string[]
                numberOfTasks?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: { tasks: { task: TaskProcessingTask; provider: string }[]; has_more: boolean }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'providerIds[]': string[]
                'taskTypeIds[]': string[]
                numberOfTasks?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'providerIds[]': string[]
                'taskTypeIds[]': string[]
                numberOfTasks?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                'providerIds[]': string[]
                'taskTypeIds[]': string[]
                numberOfTasks?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/taskprocessing/queue_stats': {
      $get:
        | {
            input: { query: { 'taskTypeIds[]'?: string[] | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: { meta: OCSMeta; data: { scheduled_count: bigint; running_count: bigint } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'taskTypeIds[]'?: string[] | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { 'taskTypeIds[]'?: string[] | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { 'taskTypeIds[]'?: string[] | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/twofactor/state': {
      $get:
        | {
            input: { query: { user: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { user: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { user: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/twofactor/enable': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/twofactor/disable': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { user: string; providers?: string[] | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
