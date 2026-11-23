type GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities = {
  canApply?: boolean | undefined
  canRead?: boolean | undefined
  canRemove?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy = {
  copyMode?: 'COPY_MODE_UNSPECIFIED' | 'DO_NOT_COPY' | 'ALWAYS_COPY' | 'COPY_APPLIABLE' | undefined
}
type GoogleAppsDriveLabelsV2betaUserInfo = { person?: string | undefined }
type GoogleAppsDriveLabelsV2betaLabelDisplayHints = {
  disabled?: boolean | undefined
  hiddenInSearch?: boolean | undefined
  priority?: string | undefined
  shownInApply?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities = {
  canRead?: boolean | undefined
  canSearch?: boolean | undefined
  canWrite?: boolean | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleAppsDriveLabelsV2betaFieldDateOptions = {
  dateFormat?: string | undefined
  dateFormatType?: 'DATE_FORMAT_UNSPECIFIED' | 'LONG_DATE' | 'SHORT_DATE' | undefined
  maxValue?: GoogleTypeDate | undefined
  minValue?: GoogleTypeDate | undefined
}
type GoogleAppsDriveLabelsV2betaFieldDisplayHints = {
  disabled?: boolean | undefined
  hiddenInSearch?: boolean | undefined
  required?: boolean | undefined
  shownInApply?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaFieldIntegerOptions = {
  maxValue?: string | undefined
  minValue?: string | undefined
}
type GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy = {
  hideInSearch?: boolean | undefined
  showInApply?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaLifecycle = {
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy | undefined
  hasUnpublishedChanges?: boolean | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'UNPUBLISHED_DRAFT'
    | 'PUBLISHED'
    | 'DISABLED'
    | 'DELETED'
    | undefined
}
type GoogleAppsDriveLabelsV2betaLockStatus = { locked?: boolean | undefined }
type GoogleAppsDriveLabelsV2betaFieldProperties = {
  displayName?: string | undefined
  insertBeforeField?: string | undefined
  required?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities = {
  canDelete?: boolean | undefined
  canDisable?: boolean | undefined
  canEnable?: boolean | undefined
  canUpdate?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities = {
  canRead?: boolean | undefined
  canSearch?: boolean | undefined
  canSelect?: boolean | undefined
}
type GoogleTypeColor = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type GoogleAppsDriveLabelsV2betaBadgeColors = {
  backgroundColor?: GoogleTypeColor | undefined
  foregroundColor?: GoogleTypeColor | undefined
  soloColor?: GoogleTypeColor | undefined
}
type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints = {
  badgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors | undefined
  badgePriority?: string | undefined
  darkBadgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors | undefined
  disabled?: boolean | undefined
  hiddenInSearch?: boolean | undefined
  shownInApply?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaBadgeConfig = {
  color?: GoogleTypeColor | undefined
  priorityOverride?: string | undefined
}
type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties = {
  badgeConfig?: GoogleAppsDriveLabelsV2betaBadgeConfig | undefined
  description?: string | undefined
  displayName?: string | undefined
  insertBeforeChoice?: string | undefined
}
type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities = {
  canDelete?: boolean | undefined
  canDisable?: boolean | undefined
  canEnable?: boolean | undefined
  canUpdate?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice = {
  appliedCapabilities?:
    | GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities
    | undefined
  createTime?: string | undefined
  creator?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  disableTime?: string | undefined
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints | undefined
  id?: string | undefined
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle | undefined
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus | undefined
  properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties | undefined
  publishTime?: string | undefined
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  schemaCapabilities?:
    | GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities
    | undefined
  updateTime?: string | undefined
  updater?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
}
type GoogleAppsDriveLabelsV2betaFieldListOptions = { maxEntries?: number | undefined }
type GoogleAppsDriveLabelsV2betaFieldSelectionOptions = {
  choices?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice[] | undefined
  listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions | undefined
}
type GoogleAppsDriveLabelsV2betaFieldTextOptions = {
  maxLength?: number | undefined
  minLength?: number | undefined
}
type GoogleAppsDriveLabelsV2betaFieldUserOptions = {
  listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions | undefined
}
type GoogleAppsDriveLabelsV2betaField = {
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities | undefined
  createTime?: string | undefined
  creator?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions | undefined
  disableTime?: string | undefined
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints | undefined
  id?: string | undefined
  integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions | undefined
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle | undefined
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus | undefined
  properties?: GoogleAppsDriveLabelsV2betaFieldProperties | undefined
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  queryKey?: string | undefined
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities | undefined
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions | undefined
  textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions | undefined
  updateTime?: string | undefined
  updater?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions | undefined
}
type GoogleAppsDriveLabelsV2betaLabelProperties = {
  description?: string | undefined
  title?: string | undefined
}
type GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities = {
  canDelete?: boolean | undefined
  canDisable?: boolean | undefined
  canEnable?: boolean | undefined
  canUpdate?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaLabel = {
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities | undefined
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy | undefined
  createTime?: string | undefined
  creator?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  customer?: string | undefined
  disableTime?: string | undefined
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints | undefined
  fields?: GoogleAppsDriveLabelsV2betaField[] | undefined
  id?: string | undefined
  labelType?: 'LABEL_TYPE_UNSPECIFIED' | 'SHARED' | 'ADMIN' | undefined
  learnMoreUri?: string | undefined
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle | undefined
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus | undefined
  name?: string | undefined
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties | undefined
  publishTime?: string | undefined
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  revisionCreateTime?: string | undefined
  revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  revisionId?: string | undefined
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities | undefined
}
type GoogleAppsDriveLabelsV2betaListLabelsResponse = {
  labels?: GoogleAppsDriveLabelsV2betaLabel[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDateLimits = {
  maxValue?: GoogleTypeDate | undefined
  minValue?: GoogleTypeDate | undefined
}
type GoogleAppsDriveLabelsV2betaIntegerLimits = {
  maxValue?: string | undefined
  minValue?: string | undefined
}
type GoogleAppsDriveLabelsV2betaLongTextLimits = {
  maxLength?: number | undefined
  minLength?: number | undefined
}
type GoogleAppsDriveLabelsV2betaListLimits = { maxEntries?: number | undefined }
type GoogleAppsDriveLabelsV2betaSelectionLimits = {
  listLimits?: GoogleAppsDriveLabelsV2betaListLimits | undefined
  maxChoices?: number | undefined
  maxDeletedChoices?: number | undefined
  maxDisplayNameLength?: number | undefined
  maxIdLength?: number | undefined
}
type GoogleAppsDriveLabelsV2betaTextLimits = {
  maxLength?: number | undefined
  minLength?: number | undefined
}
type GoogleAppsDriveLabelsV2betaUserLimits = {
  listLimits?: GoogleAppsDriveLabelsV2betaListLimits | undefined
}
type GoogleAppsDriveLabelsV2betaFieldLimits = {
  dateLimits?: GoogleAppsDriveLabelsV2betaDateLimits | undefined
  integerLimits?: GoogleAppsDriveLabelsV2betaIntegerLimits | undefined
  longTextLimits?: GoogleAppsDriveLabelsV2betaLongTextLimits | undefined
  maxDescriptionLength?: number | undefined
  maxDisplayNameLength?: number | undefined
  maxIdLength?: number | undefined
  selectionLimits?: GoogleAppsDriveLabelsV2betaSelectionLimits | undefined
  textLimits?: GoogleAppsDriveLabelsV2betaTextLimits | undefined
  userLimits?: GoogleAppsDriveLabelsV2betaUserLimits | undefined
}
type GoogleAppsDriveLabelsV2betaLabelLimits = {
  fieldLimits?: GoogleAppsDriveLabelsV2betaFieldLimits | undefined
  maxDeletedFields?: number | undefined
  maxDescriptionLength?: number | undefined
  maxDraftRevisions?: number | undefined
  maxFields?: number | undefined
  maxTitleLength?: number | undefined
  name?: string | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleAppsDriveLabelsV2betaUserCapabilities = {
  canAccessLabelManager?: boolean | undefined
  canAdministrateLabels?: boolean | undefined
  canCreateAdminLabels?: boolean | undefined
  canCreateSharedLabels?: boolean | undefined
  name?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest = {
  field?: GoogleAppsDriveLabelsV2betaField | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest = {
  choice?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice | undefined
  fieldId?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest = {
  id?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest = {
  fieldId?: string | undefined
  id?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest = {
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy | undefined
  id?: string | undefined
  updateMask?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest = {
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy | undefined
  fieldId?: string | undefined
  id?: string | undefined
  updateMask?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest = {
  id?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest = {
  fieldId?: string | undefined
  id?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest = {
  id?: string | undefined
  properties?: GoogleAppsDriveLabelsV2betaFieldProperties | undefined
  updateMask?: string | undefined
}
type GoogleAppsDriveLabelsV2betaFieldLongTextOptions = {
  maxLength?: number | undefined
  minLength?: number | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest = {
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions | undefined
  id?: string | undefined
  integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions | undefined
  longTextOptions?: GoogleAppsDriveLabelsV2betaFieldLongTextOptions | undefined
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions | undefined
  textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions | undefined
  updateMask?: string | undefined
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest = {
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties | undefined
  updateMask?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest = {
  fieldId?: string | undefined
  id?: string | undefined
  properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties | undefined
  updateMask?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest = {
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest | undefined
  createSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest
    | undefined
  deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest | undefined
  deleteSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest
    | undefined
  disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest | undefined
  disableSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest
    | undefined
  enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest | undefined
  enableSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest
    | undefined
  updateField?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest
    | undefined
  updateFieldType?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest
    | undefined
  updateLabel?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest
    | undefined
  updateSelectionChoiceProperties?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest
    | undefined
}
type GoogleAppsDriveLabelsV2betaWriteControl = { requiredRevisionId?: string | undefined }
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest = {
  languageCode?: string | undefined
  requests?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest[] | undefined
  useAdminAccess?: boolean | undefined
  view?: 'LABEL_VIEW_BASIC' | 'LABEL_VIEW_FULL' | undefined
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse = {
  id?: string | undefined
  priority?: number | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse = {
  fieldId?: string | undefined
  id?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse = {
  priority?: number | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse = {
  [x: string]: unknown
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse = {
  priority?: number | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse = {
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse | undefined
  createSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse
    | undefined
  deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse | undefined
  deleteSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse
    | undefined
  disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse | undefined
  disableSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse
    | undefined
  enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse | undefined
  enableSelectionChoice?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse
    | undefined
  updateField?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse
    | undefined
  updateFieldType?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse
    | undefined
  updateLabel?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse
    | undefined
  updateSelectionChoiceProperties?:
    | GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse
    | undefined
}
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse = {
  responses?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse[] | undefined
  updatedLabel?: GoogleAppsDriveLabelsV2betaLabel | undefined
}
type GoogleAppsDriveLabelsV2betaDisableLabelRequest = {
  disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy | undefined
  languageCode?: string | undefined
  updateMask?: string | undefined
  useAdminAccess?: boolean | undefined
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl | undefined
}
type GoogleAppsDriveLabelsV2betaEnableLabelRequest = {
  languageCode?: string | undefined
  useAdminAccess?: boolean | undefined
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl | undefined
}
type GoogleAppsDriveLabelsV2betaPublishLabelRequest = {
  languageCode?: string | undefined
  useAdminAccess?: boolean | undefined
  writeControl?: GoogleAppsDriveLabelsV2betaWriteControl | undefined
}
type GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest = {
  copyMode?: 'COPY_MODE_UNSPECIFIED' | 'DO_NOT_COPY' | 'ALWAYS_COPY' | 'COPY_APPLIABLE' | undefined
  languageCode?: string | undefined
  useAdminAccess?: boolean | undefined
  view?: 'LABEL_VIEW_BASIC' | 'LABEL_VIEW_FULL' | undefined
}
type GoogleAppsDriveLabelsV2betaLabelLockCapabilities = { canViewPolicy?: boolean | undefined }
type GoogleAppsDriveLabelsV2betaLabelLock = {
  capabilities?: GoogleAppsDriveLabelsV2betaLabelLockCapabilities | undefined
  choiceId?: string | undefined
  createTime?: string | undefined
  creator?: GoogleAppsDriveLabelsV2betaUserInfo | undefined
  deleteTime?: string | undefined
  fieldId?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'DELETING' | undefined
}
type GoogleAppsDriveLabelsV2betaListLabelLocksResponse = {
  labelLocks?: GoogleAppsDriveLabelsV2betaLabelLock[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAppsDriveLabelsV2betaLabelPermission = {
  audience?: string | undefined
  email?: string | undefined
  group?: string | undefined
  name?: string | undefined
  person?: string | undefined
  role?: 'LABEL_ROLE_UNSPECIFIED' | 'READER' | 'APPLIER' | 'ORGANIZER' | 'EDITOR' | undefined
}
type GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse = {
  labelPermissions?: GoogleAppsDriveLabelsV2betaLabelPermission[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest = {
  name?: string | undefined
  useAdminAccess?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest = {
  requests?: GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest[] | undefined
  useAdminAccess?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest = {
  labelPermission?: GoogleAppsDriveLabelsV2betaLabelPermission | undefined
  parent?: string | undefined
  useAdminAccess?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest = {
  requests?: GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest[] | undefined
  useAdminAccess?: boolean | undefined
}
type GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse = {
  permissions?: GoogleAppsDriveLabelsV2betaLabelPermission[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2beta/labels': {
      $get: {
        input: {
          query: {
            customer?: string | undefined
            languageCode?: string | undefined
            minimumRole?:
              | 'LABEL_ROLE_UNSPECIFIED'
              | 'READER'
              | 'APPLIER'
              | 'ORGANIZER'
              | 'EDITOR'
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            publishedOnly?: boolean | undefined
            useAdminAccess?: boolean | undefined
            view?: 'LABEL_VIEW_BASIC' | 'LABEL_VIEW_FULL' | undefined
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
        output: GoogleAppsDriveLabelsV2betaListLabelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            languageCode?: string | undefined
            useAdminAccess?: boolean | undefined
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
        } & { json: GoogleAppsDriveLabelsV2betaLabel }
        output: GoogleAppsDriveLabelsV2betaLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/limits/label': {
      $get: {
        input: {
          query: {
            name?: string | undefined
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
        output: GoogleAppsDriveLabelsV2betaLabelLimits
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            useAdminAccess?: boolean | undefined
            'writeControl.requiredRevisionId'?: string | undefined
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            customer?: string | undefined
            useAdminAccess?: boolean | undefined
            view?: 'LABEL_VIEW_BASIC' | 'LABEL_VIEW_FULL' | undefined
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
        output: GoogleAppsDriveLabelsV2betaUserCapabilities
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:delta': {
      $post: {
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
        } & { json: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest }
        output: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:disable': {
      $post: {
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
        } & { json: GoogleAppsDriveLabelsV2betaDisableLabelRequest }
        output: GoogleAppsDriveLabelsV2betaLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:enable': {
      $post: {
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
        } & { json: GoogleAppsDriveLabelsV2betaEnableLabelRequest }
        output: GoogleAppsDriveLabelsV2betaLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:publish': {
      $post: {
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
        } & { json: GoogleAppsDriveLabelsV2betaPublishLabelRequest }
        output: GoogleAppsDriveLabelsV2betaLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:updateLabelCopyMode': {
      $post: {
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
        } & { json: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest }
        output: GoogleAppsDriveLabelsV2betaLabel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/locks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: GoogleAppsDriveLabelsV2betaListLabelLocksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/permissions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            useAdminAccess?: boolean | undefined
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
        output: GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { parent: string } } & {
          query: {
            useAdminAccess?: boolean | undefined
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
        } & { json: GoogleAppsDriveLabelsV2betaLabelPermission }
        output: GoogleAppsDriveLabelsV2betaLabelPermission
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            useAdminAccess?: boolean | undefined
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
        } & { json: GoogleAppsDriveLabelsV2betaLabelPermission }
        output: GoogleAppsDriveLabelsV2betaLabelPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/permissions:batchDelete': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/permissions:batchUpdate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest }
        output: GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
