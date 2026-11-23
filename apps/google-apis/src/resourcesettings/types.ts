type GoogleCloudResourcesettingsV1ValueEnumValue = { value?: string | undefined }
type GoogleCloudResourcesettingsV1ValueStringMap = {
  mappings?: { [x: string]: string } | undefined
}
type GoogleCloudResourcesettingsV1ValueStringSet = { values?: string[] | undefined }
type GoogleCloudResourcesettingsV1Value = {
  booleanValue?: boolean | undefined
  durationValue?: string | undefined
  enumValue?: GoogleCloudResourcesettingsV1ValueEnumValue | undefined
  stringMapValue?: GoogleCloudResourcesettingsV1ValueStringMap | undefined
  stringSetValue?: GoogleCloudResourcesettingsV1ValueStringSet | undefined
  stringValue?: string | undefined
}
type GoogleCloudResourcesettingsV1SettingMetadata = {
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'BOOLEAN'
    | 'STRING'
    | 'STRING_SET'
    | 'ENUM_VALUE'
    | 'DURATION_VALUE'
    | 'STRING_MAP'
    | undefined
  defaultValue?: GoogleCloudResourcesettingsV1Value | undefined
  description?: string | undefined
  displayName?: string | undefined
  readOnly?: boolean | undefined
}
type GoogleCloudResourcesettingsV1Setting = {
  effectiveValue?: GoogleCloudResourcesettingsV1Value | undefined
  etag?: string | undefined
  localValue?: GoogleCloudResourcesettingsV1Value | undefined
  metadata?: GoogleCloudResourcesettingsV1SettingMetadata | undefined
  name?: string | undefined
}
type GoogleCloudResourcesettingsV1ListSettingsResponse = {
  nextPageToken?: string | undefined
  settings?: GoogleCloudResourcesettingsV1Setting[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?:
              | 'SETTING_VIEW_UNSPECIFIED'
              | 'SETTING_VIEW_BASIC'
              | 'SETTING_VIEW_EFFECTIVE_VALUE'
              | 'SETTING_VIEW_LOCAL_VALUE'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudResourcesettingsV1Setting
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudResourcesettingsV1Setting }
        output: GoogleCloudResourcesettingsV1Setting
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/settings': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'SETTING_VIEW_UNSPECIFIED'
              | 'SETTING_VIEW_BASIC'
              | 'SETTING_VIEW_EFFECTIVE_VALUE'
              | 'SETTING_VIEW_LOCAL_VALUE'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudResourcesettingsV1ListSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
