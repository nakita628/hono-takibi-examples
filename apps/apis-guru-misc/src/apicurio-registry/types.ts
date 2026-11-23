type ArtifactTypeInfo = { name?: string | undefined }
type Error = {
  detail?: string | undefined
  error_code?: number | undefined
  message?: string | undefined
  name?: string | undefined
}
type ConfigurationProperty = {
  description: string
  label: string
  name: string
  type: string
  value: string
}
type UpdateConfigurationProperty = { value: string }
type DownloadRef = { downloadId: string; href?: string | undefined }
type FileContent = File
type LogLevel =
  | 'DEBUG'
  | 'TRACE'
  | 'WARN'
  | 'ERROR'
  | 'SEVERE'
  | 'WARNING'
  | 'INFO'
  | 'CONFIG'
  | 'FINE'
  | 'FINER'
  | 'FINEST'
type NamedLogConfiguration = { name: string; level: LogLevel }
type LogConfiguration = { level: LogLevel }
type RoleType = 'READ_ONLY' | 'DEVELOPER' | 'ADMIN'
type RoleMapping = { principalId: string; principalName?: string | undefined; role: RoleType }
type UpdateRole = { role: RoleType }
type RuleType = 'VALIDITY' | 'COMPATIBILITY'
type Rule = { config: string; type?: RuleType | undefined }
type SortOrder = 'asc' | 'desc'
type SortBy = 'name' | 'createdOn'
type GroupId = string
type SearchedGroup = {
  createdBy: string
  createdOn: string
  description: string
  id: GroupId
  modifiedBy: string
  modifiedOn: string
}
type GroupSearchResults = { count: number; groups: SearchedGroup[] }
type Properties = { [x: string]: string }
type CreateGroupMetaData = {
  description?: string | undefined
  id: string
  properties?: Properties | undefined
}
type GroupMetaData = {
  createdBy: string
  createdOn: string
  description: string
  id: GroupId
  modifiedBy: string
  modifiedOn: string
  properties: Properties
}
type ArtifactId = string
type ArtifactState = 'ENABLED' | 'DISABLED' | 'DEPRECATED'
type ArtifactType = string
type SearchedArtifact = {
  createdBy: string
  createdOn: string
  description?: string | undefined
  groupId?: GroupId | undefined
  id: ArtifactId
  labels?: string[] | undefined
  modifiedBy?: string | undefined
  modifiedOn?: string | undefined
  name?: string | undefined
  state: ArtifactState
  type: ArtifactType
}
type ArtifactSearchResults = { artifacts: SearchedArtifact[]; count: number }
type IfExists = 'FAIL' | 'UPDATE' | 'RETURN' | 'RETURN_OR_UPDATE'
type Version = string
type ArtifactDescription = string
type EncodedArtifactDescription = string
type ArtifactName = string
type EncodedArtifactName = string
type ArtifactReference = {
  artifactId: string
  groupId: string
  name: string
  version?: string | undefined
}
type ContentCreateRequest = { content: string; references: ArtifactReference[] }
type ArtifactMetaData = {
  contentId: bigint
  createdBy: string
  createdOn: string
  description?: string | undefined
  globalId: bigint
  groupId?: GroupId | undefined
  id: ArtifactId
  labels?: string[] | undefined
  modifiedBy: string
  modifiedOn: string
  name?: string | undefined
  properties?: Properties | undefined
  references?: ArtifactReference[] | undefined
  state: ArtifactState
  type: ArtifactType
  version: string
}
type RuleViolationCause = { context?: string | undefined; description?: string | undefined }
type RuleViolationError = {
  causes: RuleViolationCause[]
  detail?: string | undefined
  error_code?: number | undefined
  message?: string | undefined
  name?: string | undefined
}
type VersionMetaData = {
  contentId: bigint
  createdBy: string
  createdOn: string
  description?: string | undefined
  globalId: bigint
  groupId?: GroupId | undefined
  id: ArtifactId
  labels?: string[] | undefined
  name?: string | undefined
  properties?: Properties | undefined
  state?: ArtifactState | undefined
  type: ArtifactType
  version: string
}
type EditableMetaData = {
  description?: string | undefined
  labels?: string[] | undefined
  name?: string | undefined
  properties?: Properties | undefined
}
type ArtifactOwner = { owner?: string | undefined }
type UpdateState = { state: ArtifactState }
type SearchedVersion = {
  contentId: bigint
  createdBy: string
  createdOn: string
  description?: string | undefined
  globalId: bigint
  labels?: string[] | undefined
  name?: string | undefined
  properties?: Properties | undefined
  references: ArtifactReference[]
  state: ArtifactState
  type: ArtifactType
  version: string
}
type VersionSearchResults = { count: number; versions: SearchedVersion[] }
type SystemInfo = {
  builtOn?: string | undefined
  description?: string | undefined
  name?: string | undefined
  version?: string | undefined
}
type Limits = {
  maxArtifactDescriptionLengthChars?: bigint | undefined
  maxArtifactLabelsCount?: bigint | undefined
  maxArtifactNameLengthChars?: bigint | undefined
  maxArtifactPropertiesCount?: bigint | undefined
  maxArtifactsCount?: bigint | undefined
  maxLabelSizeBytes?: bigint | undefined
  maxPropertyKeySizeBytes?: bigint | undefined
  maxPropertyValueSizeBytes?: bigint | undefined
  maxRequestsPerSecondCount?: bigint | undefined
  maxSchemaSizeBytes?: bigint | undefined
  maxTotalSchemasCount?: bigint | undefined
  maxVersionsPerArtifactCount?: bigint | undefined
}
type UserInfo = {
  admin?: boolean | undefined
  developer?: boolean | undefined
  displayName?: string | undefined
  username?: string | undefined
  viewer?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin/artifactTypes': {
      $get:
        | { input: {}; output: ArtifactTypeInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/config/properties': {
      $get:
        | { input: {}; output: ConfigurationProperty[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/config/properties/:propertyName': {
      $delete:
        | {
            input: { param: { propertyName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { propertyName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { propertyName: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { propertyName: string } }
            output: ConfigurationProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { propertyName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { propertyName: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { propertyName: string } } & { json: UpdateConfigurationProperty }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { propertyName: string } } & { json: UpdateConfigurationProperty }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { propertyName: string } } & { json: UpdateConfigurationProperty }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/export': {
      $get:
        | {
            input: { query: { forBrowser?: boolean | undefined } }
            output: DownloadRef
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { forBrowser?: boolean | undefined } }
            output: FileContent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { forBrowser?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/import': {
      $post:
        | {
            input: {
              header: {
                'X-Registry-Preserve-GlobalId'?: boolean | undefined
                'X-Registry-Preserve-ContentId'?: boolean | undefined
              }
            } & { json: FileContent }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              header: {
                'X-Registry-Preserve-GlobalId'?: boolean | undefined
                'X-Registry-Preserve-ContentId'?: boolean | undefined
              }
            } & { json: FileContent }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/loggers': {
      $get:
        | { input: {}; output: NamedLogConfiguration[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/loggers/:logger': {
      $delete:
        | {
            input: { param: { logger: string } }
            output: NamedLogConfiguration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { logger: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $get:
        | {
            input: { param: { logger: string } }
            output: NamedLogConfiguration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { logger: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { param: { logger: string } } & { json: LogConfiguration }
            output: NamedLogConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logger: string } } & { json: LogConfiguration }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/roleMappings': {
      $get:
        | { input: {}; output: RoleMapping[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $post:
        | { input: { json: RoleMapping }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: RoleMapping }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/roleMappings/:principalId': {
      $delete:
        | {
            input: { param: { principalId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { principalId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { principalId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { principalId: string } }
            output: RoleMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { principalId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { principalId: string } } & { json: UpdateRole }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { principalId: string } } & { json: UpdateRole }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { principalId: string } } & { json: UpdateRole }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/rules': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $get:
        | { input: {}; output: RuleType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $post:
        | { input: { json: Rule }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: Rule }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Rule }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: Rule }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/rules/:rule': {
      $delete:
        | { input: { param: { rule: RuleType } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { rule: RuleType } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { rule: RuleType } }; output: Error; outputFormat: 'json'; status: 500 }
      $get:
        | { input: { param: { rule: RuleType } }; output: Rule; outputFormat: 'json'; status: 200 }
        | { input: { param: { rule: RuleType } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { rule: RuleType } }; output: Error; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { param: { rule: RuleType } } & { json: Rule }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rule: RuleType } } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rule: RuleType } } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order?: SortOrder | undefined
                orderby?: SortBy | undefined
              }
            }
            output: GroupSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order?: SortOrder | undefined
                orderby?: SortBy | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateGroupMetaData }
            output: GroupMetaData
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateGroupMetaData }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: CreateGroupMetaData }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/groups/:groupId': {
      $delete:
        | { input: { param: { groupId: GroupId } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { groupId: GroupId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { groupId: GroupId } }
            output: GroupMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts': {
      $delete:
        | { input: { param: { groupId: GroupId } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { groupId: GroupId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { groupId: GroupId } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order?: SortOrder | undefined
                orderby?: SortBy | undefined
              }
            }
            output: ArtifactSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                order?: SortOrder | undefined
                orderby?: SortBy | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { groupId: GroupId } } & {
              query: { ifExists?: IfExists | undefined; canonical?: boolean | undefined }
            } & {
              header: {
                'X-Registry-ArtifactType'?: ArtifactType | undefined
                'X-Registry-ArtifactId'?: string | undefined
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Content-Hash'?: string | undefined
                'X-Registry-Hash-Algorithm'?: 'SHA256' | 'MD5' | undefined
              }
            } & { json: ContentCreateRequest }
            output: ArtifactMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId } } & {
              query: { ifExists?: IfExists | undefined; canonical?: boolean | undefined }
            } & {
              header: {
                'X-Registry-ArtifactType'?: ArtifactType | undefined
                'X-Registry-ArtifactId'?: string | undefined
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Content-Hash'?: string | undefined
                'X-Registry-Hash-Algorithm'?: 'SHA256' | 'MD5' | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { groupId: GroupId } } & {
              query: { ifExists?: IfExists | undefined; canonical?: boolean | undefined }
            } & {
              header: {
                'X-Registry-ArtifactType'?: ArtifactType | undefined
                'X-Registry-ArtifactId'?: string | undefined
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Content-Hash'?: string | undefined
                'X-Registry-Hash-Algorithm'?: 'SHA256' | 'MD5' | undefined
              }
            } & { json: ContentCreateRequest }
            output: RuleViolationError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { groupId: GroupId } } & {
              query: { ifExists?: IfExists | undefined; canonical?: boolean | undefined }
            } & {
              header: {
                'X-Registry-ArtifactType'?: ArtifactType | undefined
                'X-Registry-ArtifactId'?: string | undefined
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Content-Hash'?: string | undefined
                'X-Registry-Hash-Algorithm'?: 'SHA256' | 'MD5' | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId': {
      $delete:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { dereference?: boolean | undefined }
            }
            output: FileContent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { dereference?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { dereference?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
              }
            } & { json: ContentCreateRequest }
            output: ArtifactMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/meta': {
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: ArtifactMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { canonical?: boolean | undefined }
            }
            output: VersionMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { canonical?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { canonical?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              json: EditableMetaData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              json: EditableMetaData
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              json: EditableMetaData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/owner': {
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: ArtifactOwner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: ArtifactOwner }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: ArtifactOwner }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: ArtifactOwner }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/rules': {
      $delete:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: RuleType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: Rule }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/rules/:rule': {
      $delete:
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            } & { json: Rule }
            output: Rule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                groupId: GroupId
                artifactId: ArtifactId
                rule: 'VALIDITY' | 'COMPATIBILITY'
              }
            } & { json: Rule }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/state': {
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: UpdateState }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: UpdateState }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: UpdateState }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & { json: UpdateState }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/test': {
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: RuleViolationError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/versions': {
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: VersionSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
              }
            } & { json: ContentCreateRequest }
            output: VersionMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
              }
            } & { json: ContentCreateRequest }
            output: RuleViolationError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId } } & {
              header: {
                'X-Registry-Version'?: Version | undefined
                'X-Registry-Name'?: ArtifactName | undefined
                'X-Registry-Description'?: ArtifactDescription | undefined
                'X-Registry-Description-Encoded'?: EncodedArtifactDescription | undefined
                'X-Registry-Name-Encoded'?: EncodedArtifactName | undefined
              }
            } & { json: ContentCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/versions/:version': {
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              query: { dereference?: boolean | undefined }
            }
            output: FileContent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              query: { dereference?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              query: { dereference?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/versions/:version/meta': {
      $delete:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: VersionMetaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: EditableMetaData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: EditableMetaData
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: EditableMetaData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/versions/:version/references': {
      $get:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: ArtifactReference[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/groups/:groupId/artifacts/:artifactId/versions/:version/state': {
      $put:
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: UpdateState
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: UpdateState
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: UpdateState
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupId: GroupId; artifactId: ArtifactId; version: Version } } & {
              json: UpdateState
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ids/contentHashes/:contentHash/': {
      $get:
        | {
            input: { param: { contentHash: string } }
            output: FileContent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentHash: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { contentHash: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ids/contentHashes/:contentHash/references': {
      $get: {
        input: { param: { contentHash: string } }
        output: ArtifactReference[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ids/contentIds/:contentId/': {
      $get:
        | {
            input: { param: { contentId: bigint } }
            output: FileContent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { contentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ids/contentIds/:contentId/references': {
      $get: {
        input: { param: { contentId: bigint } }
        output: ArtifactReference[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ids/globalIds/:globalId': {
      $get:
        | {
            input: { param: { globalId: bigint } } & {
              query: { dereference?: boolean | undefined }
            }
            output: FileContent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { globalId: bigint } } & {
              query: { dereference?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { globalId: bigint } } & {
              query: { dereference?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ids/globalIds/:globalId/references': {
      $get: {
        input: { param: { globalId: bigint } }
        output: ArtifactReference[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/artifacts': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: SortOrder | undefined
                orderby?: SortBy | undefined
                labels?: string[] | undefined
                properties?: string[] | undefined
                description?: string | undefined
                group?: string | undefined
                globalId?: bigint | undefined
                contentId?: bigint | undefined
              }
            }
            output: ArtifactSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: SortOrder | undefined
                orderby?: SortBy | undefined
                labels?: string[] | undefined
                properties?: string[] | undefined
                description?: string | undefined
                group?: string | undefined
                globalId?: bigint | undefined
                contentId?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                canonical?: boolean | undefined
                artifactType?: ArtifactType | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                orderby?: 'name' | 'createdOn' | undefined
              }
            }
            output: ArtifactSearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                canonical?: boolean | undefined
                artifactType?: ArtifactType | undefined
                offset?: number | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                orderby?: 'name' | 'createdOn' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/system/info': {
      $get:
        | { input: {}; output: SystemInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/system/limits': {
      $get:
        | { input: {}; output: Limits; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/me': {
      $get:
        | { input: {}; output: UserInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  },
  '/'
>
export default routes
