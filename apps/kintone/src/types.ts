type KintoneError = { id: string; code: string; message: string }
type AppAclGetRight = {
  recordImportable?: boolean | undefined
  appEditable?: boolean | undefined
  recordExportable?: boolean | undefined
  recordAddable?: boolean | undefined
  recordViewable?: boolean | undefined
  recordEditable?: boolean | undefined
  includeSubs?: boolean | undefined
  recordDeletable?: boolean | undefined
  entity?:
    | {
        code?: (string | null) | undefined
        type?: 'USER' | 'ORGANIZATION' | 'GROUP' | 'CREATOR' | undefined
      }
    | undefined
}
type AppAclPutRight = {
  recordImportable?: boolean | undefined
  appEditable?: boolean | undefined
  recordExportable?: boolean | undefined
  recordAddable?: boolean | undefined
  recordViewable?: boolean | undefined
  recordEditable?: boolean | undefined
  recordDeletable?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'ORGANIZATION' | 'GROUP' | 'CREATOR' }
}
type AppActionsGetUrlMapping = {
  destField?: string | undefined
  srcType?: 'RECORD_URL' | undefined
}
type AppActionsGetFieldMapping = {
  destField?: string | undefined
  srcType?: 'FIELD' | undefined
  srcField?: string | undefined
}
type AppActionsGetEntity = {
  code?: string | undefined
  type?: 'USER' | 'GROUP' | 'ORGANIZATION' | undefined
}
type AppActionsGetAction = {
  mappings?: (AppActionsGetUrlMapping | AppActionsGetFieldMapping)[] | undefined
  entities?: AppActionsGetEntity[] | undefined
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  filterCond?: string | undefined
  destApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
}
type AppCustomizeGetUrlContentForm = { type: 'URL' | 'FILE'; url: string }
type AppCustomizeGetFileContentForm = {
  file: {
    size?: string | undefined
    name?: string | undefined
    fileKey: string
    contentType?: string | undefined
  }
  type: 'URL' | 'FILE'
}
type AppFormFieldsGetCalcFieldForm = {
  noLabel?: boolean | undefined
  unit?: string | undefined
  expression?: string | undefined
  code?: string | undefined
  format?:
    | 'NUMBER'
    | 'NUMBER_DIGIT'
    | 'DATETIME'
    | 'DATE'
    | 'TIME'
    | 'HOUR_MINUTE'
    | 'DAY_HOUR_MINUTE'
    | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  displayScale?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type AppFormFieldsGetCategoryFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type AppFormFieldsGetDateFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetDatetimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetDecimalFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  maxValue?: bigint | undefined
  defaultValue?: string | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
  minValue?: bigint | undefined
  unit?: string | undefined
  unique?: boolean | undefined
  displayScale?: bigint | undefined
  digit?: boolean | undefined
}
type AppFormFieldsGetEditorFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetFileFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  thumbnailSize?: bigint | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetGroupFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  openGroup?: boolean | undefined
}
type AppFormFieldsGetEntityForm = {
  code: string
  type: 'USER' | 'ORGANIZATION' | 'GROUP' | 'FUNCTION'
}
type AppFormFieldsGetGroupSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: AppFormFieldsGetEntityForm[] | undefined
  defaultValue?: AppFormFieldsGetEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetLinkFieldForm = {
  noLabel?: boolean | undefined
  protocol?: 'WEB' | 'CALL' | 'MAIL' | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  required?: boolean | undefined
}
type AppFormFieldsGetFieldMappingForm = {
  relatedField?: string | undefined
  field?: string | undefined
}
type AppFormFieldsGetLookupFieldForm = {
  noLabel?: boolean | undefined
  lookup?:
    | ({
        lookupPickerFields?: string[] | undefined
        relatedKeyField?: string | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        fieldMappings?: AppFormFieldsGetFieldMappingForm[] | undefined
        sort?: string | undefined
        filterCond?: string | undefined
      } | null)
    | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetModifiedAtFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type AppFormFieldsGetModifierFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type AppFormFieldsGetOptionForm = { index: bigint; label?: string | undefined }
type AppFormFieldsGetMultipleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: AppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetMultipleLineTextFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetMultipleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: AppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetOrganizationSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: AppFormFieldsGetEntityForm[] | undefined
  defaultValue?: AppFormFieldsGetEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetRecordIdFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type AppFormFieldsGetReferenceTableFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  referenceTable?:
    | ({
        condition?: { relatedField?: string | undefined; field?: string | undefined } | undefined
        size?: bigint | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        sort?: string | undefined
        filterCond?: string | undefined
        displayFields?: string[] | undefined
      } | null)
    | undefined
}
type AppFormFieldsGetSingleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: AppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetSingleLineTextFieldForm = {
  noLabel?: boolean | undefined
  expression?: string | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type AppFormFieldsGetSingleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: AppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetStatusAssigneeFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type AppFormFieldsGetStatusFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type AppFormFieldsGetTimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetUserSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: AppFormFieldsGetEntityForm[] | undefined
  defaultValue?: AppFormFieldsGetEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type AppFormFieldsGetTableForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  fields?:
    | {
        [x: string]:
          | AppFormFieldsGetCalcFieldForm
          | AppFormFieldsGetCategoryFieldForm
          | AppFormFieldsGetDateFieldForm
          | AppFormFieldsGetDatetimeFieldForm
          | AppFormFieldsGetDecimalFieldForm
          | AppFormFieldsGetEditorFieldForm
          | AppFormFieldsGetFileFieldForm
          | AppFormFieldsGetGroupFieldForm
          | AppFormFieldsGetGroupSelectFieldForm
          | AppFormFieldsGetLinkFieldForm
          | AppFormFieldsGetLookupFieldForm
          | AppFormFieldsGetModifiedAtFieldForm
          | AppFormFieldsGetModifierFieldForm
          | AppFormFieldsGetMultipleCheckFieldForm
          | AppFormFieldsGetMultipleLineTextFieldForm
          | AppFormFieldsGetMultipleSelectFieldForm
          | AppFormFieldsGetOrganizationSelectFieldForm
          | AppFormFieldsGetRecordIdFieldForm
          | AppFormFieldsGetReferenceTableFieldForm
          | AppFormFieldsGetSingleCheckFieldForm
          | AppFormFieldsGetSingleLineTextFieldForm
          | AppFormFieldsGetSingleSelectFieldForm
          | AppFormFieldsGetStatusAssigneeFieldForm
          | AppFormFieldsGetStatusFieldForm
          | AppFormFieldsGetTableForm
          | AppFormFieldsGetTimeFieldForm
          | AppFormFieldsGetUserSelectFieldForm
      }
    | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type AppFormLayoutGetLabelField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetSingleLineTextField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetMultipleLineTextField = {
  code: string
  size?: { innerHeight?: bigint | undefined; width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetEditorField = {
  code: string
  size?: { innerHeight?: bigint | undefined; width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetDecimalField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetCalcField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetMultipleCheckField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetSingleCheckField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetSingleSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetMultipleSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetFileField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetDateField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetDatetimeField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetTimeField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetUserSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetLinkField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetLookupField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetReferenceTableField = {
  code: string
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetSpacerField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined; height?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetHrField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetRecordIdField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetCreatorField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetCreatedAtField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetModifierField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetModifiedAtField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type AppFormLayoutGetRow = {
  fields: (
    | AppFormLayoutGetLabelField
    | AppFormLayoutGetSingleLineTextField
    | AppFormLayoutGetMultipleLineTextField
    | AppFormLayoutGetEditorField
    | AppFormLayoutGetDecimalField
    | AppFormLayoutGetCalcField
    | AppFormLayoutGetMultipleCheckField
    | AppFormLayoutGetSingleCheckField
    | AppFormLayoutGetSingleSelectField
    | AppFormLayoutGetMultipleSelectField
    | AppFormLayoutGetFileField
    | AppFormLayoutGetDateField
    | AppFormLayoutGetDatetimeField
    | AppFormLayoutGetTimeField
    | AppFormLayoutGetUserSelectField
    | AppFormLayoutGetLinkField
    | AppFormLayoutGetLookupField
    | AppFormLayoutGetReferenceTableField
    | AppFormLayoutGetSpacerField
    | AppFormLayoutGetHrField
    | AppFormLayoutGetRecordIdField
    | AppFormLayoutGetCreatorField
    | AppFormLayoutGetCreatedAtField
    | AppFormLayoutGetModifierField
    | AppFormLayoutGetModifiedAtField
  )[]
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type AppFormLayoutGetGroupRow = {
  layout?: AppFormLayoutGetRow[] | undefined
  code: string
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type AppFormLayoutGetSubtableRow = {
  code: string
  fields: (
    | AppFormLayoutGetLabelField
    | AppFormLayoutGetSingleLineTextField
    | AppFormLayoutGetMultipleLineTextField
    | AppFormLayoutGetEditorField
    | AppFormLayoutGetDecimalField
    | AppFormLayoutGetCalcField
    | AppFormLayoutGetMultipleCheckField
    | AppFormLayoutGetSingleCheckField
    | AppFormLayoutGetSingleSelectField
    | AppFormLayoutGetMultipleSelectField
    | AppFormLayoutGetFileField
    | AppFormLayoutGetDateField
    | AppFormLayoutGetDatetimeField
    | AppFormLayoutGetTimeField
    | AppFormLayoutGetUserSelectField
    | AppFormLayoutGetLinkField
    | AppFormLayoutGetLookupField
    | AppFormLayoutGetReferenceTableField
    | AppFormLayoutGetSpacerField
    | AppFormLayoutGetHrField
    | AppFormLayoutGetRecordIdField
    | AppFormLayoutGetCreatorField
    | AppFormLayoutGetCreatedAtField
    | AppFormLayoutGetModifierField
    | AppFormLayoutGetModifiedAtField
  )[]
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type AppNotificationsGeneralGetNotification = {
  recordEdited?: boolean | undefined
  recordAdded?: boolean | undefined
  statusChanged?: boolean | undefined
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
  fileImported?: boolean | undefined
  commentAdded?: boolean | undefined
}
type AppNotificationsPerRecordGetTarget = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type AppNotificationsPerRecordGetNotification = {
  filterCond?: string | undefined
  title?: string | undefined
  targets?: AppNotificationsPerRecordGetTarget[] | undefined
}
type AppNotificationsReminderGetTimingRelative = {
  hoursLater?: bigint | undefined
  code?: string | undefined
  daysLater?: bigint | undefined
}
type AppNotificationsReminderGetTimingAbsolute = {
  code?: string | undefined
  time?: string | undefined
  daysLater?: bigint | undefined
}
type AppNotificationsReminderGetTarget = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type AppNotificationsReminderGetNotification = {
  timing?:
    | AppNotificationsReminderGetTimingRelative
    | AppNotificationsReminderGetTimingAbsolute
    | undefined
  filterCond?: string | undefined
  title?: string | undefined
  targets?: AppNotificationsReminderGetTarget[] | undefined
}
type AppPluginsGetPluginForm = {
  name?: string | undefined
  id?: string | undefined
  enabled?: boolean | undefined
}
type AppReportsGetPeriodYear = {
  month?: bigint | undefined
  dayOfMonth?: bigint | undefined
  time?: string | undefined
  every?: 'YEAR' | undefined
}
type AppReportsGetPeriodQuarter = {
  dayOfMonth?: string | undefined
  pattern?: 'JAN_APR_JUL_OCT' | 'FEB_MAY_AUG_NOV' | 'MAR_JUN_SEP_DEC' | undefined
  time?: string | undefined
  every?: 'QUARTER' | undefined
}
type AppReportsGetPeriodMonth = {
  dayOfMonth?: string | undefined
  time?: string | undefined
  every?: 'MONTH' | undefined
}
type AppReportsGetPeriodWeek = {
  dayOfWeek?:
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  time?: string | undefined
  every?: 'WEEK' | undefined
}
type AppReportsGetPeriodDay = { time?: string | undefined; every?: 'DAY' | undefined }
type AppReportsGetPeriodHour = { every?: 'HOUR' | undefined; minute?: bigint | undefined }
type AppReportsGetGroup = { code?: string | undefined }
type AppReportsGetGroupDateTime = {
  code?: string | undefined
  per?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'MINUTE' | undefined
}
type AppReportsGetGroupDate = {
  code?: string | undefined
  per?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | undefined
}
type AppReportsGetGroupTime = { code?: string | undefined; per?: 'HOUR' | 'MINUTE' | undefined }
type AppReportsGetRecordAggregation = { type?: 'COUNT' | undefined }
type AppReportsGetFieldAggregation = {
  code?: string | undefined
  type?: 'SUM' | 'AVERAGE' | 'MAX' | 'MIN' | undefined
}
type AppReportsGetSort = {
  by?: 'TOTAL' | 'GROUP1' | 'GROUP2' | 'GROUP3' | undefined
  order?: 'ASC' | 'DESC' | undefined
}
type AppReportsGetReport = {
  periodicReport?:
    | ({
        period?:
          | AppReportsGetPeriodYear
          | AppReportsGetPeriodQuarter
          | AppReportsGetPeriodMonth
          | AppReportsGetPeriodWeek
          | AppReportsGetPeriodDay
          | AppReportsGetPeriodHour
          | undefined
        active?: boolean | undefined
      } | null)
    | undefined
  chartType?:
    | 'PIE'
    | 'LINE'
    | 'SPLINE'
    | 'TABLE'
    | 'PIVOT_TABLE'
    | 'BAR'
    | 'COLUMN'
    | 'AREA'
    | 'SPLINE_AREA'
    | undefined
  name?: string | undefined
  index?: bigint | undefined
  groups?:
    | (
        | AppReportsGetGroup
        | AppReportsGetGroupDateTime
        | AppReportsGetGroupDate
        | AppReportsGetGroupTime
      )[]
    | undefined
  id?: bigint | undefined
  filterCond?: string | undefined
  aggregations?: (AppReportsGetRecordAggregation | AppReportsGetFieldAggregation)[] | undefined
  sorts?: AppReportsGetSort[] | undefined
}
type AppReportsGetReportWithChartMode = {
  periodicReport?:
    | ({
        period?:
          | AppReportsGetPeriodYear
          | AppReportsGetPeriodQuarter
          | AppReportsGetPeriodMonth
          | AppReportsGetPeriodWeek
          | AppReportsGetPeriodDay
          | AppReportsGetPeriodHour
          | undefined
        active?: boolean | undefined
      } | null)
    | undefined
  chartType?:
    | 'PIE'
    | 'LINE'
    | 'SPLINE'
    | 'TABLE'
    | 'PIVOT_TABLE'
    | 'BAR'
    | 'COLUMN'
    | 'AREA'
    | 'SPLINE_AREA'
    | undefined
  name?: string | undefined
  index?: bigint | undefined
  groups?:
    | (
        | AppReportsGetGroup
        | AppReportsGetGroupDateTime
        | AppReportsGetGroupDate
        | AppReportsGetGroupTime
      )[]
    | undefined
  id?: bigint | undefined
  chartMode?: 'NORMAL' | 'STACKED' | 'PERCENTAGE' | undefined
  filterCond?: string | undefined
  aggregations?: (AppReportsGetRecordAggregation | AppReportsGetFieldAggregation)[] | undefined
  sorts?: AppReportsGetSort[] | undefined
}
type AppSettingsGetTitleField = { code?: string | undefined; selectionMode: 'AUTO' | 'MANUAL' }
type AppSettingsGetIconPresetForm = {
  type: 'FILE' | 'PRESET'
  key:
    | 'APP1'
    | 'APP2'
    | 'APP3'
    | 'APP4'
    | 'APP5'
    | 'APP6'
    | 'APP7'
    | 'APP8'
    | 'APP9'
    | 'APP10'
    | 'APP11'
    | 'APP12'
    | 'APP13'
    | 'APP14'
    | 'APP15'
    | 'APP16'
    | 'APP17'
    | 'APP18'
    | 'APP19'
    | 'APP20'
    | 'APP21'
    | 'APP22'
    | 'APP23'
    | 'APP24'
    | 'APP25'
    | 'APP26'
    | 'APP27'
    | 'APP28'
    | 'APP29'
    | 'APP30'
    | 'APP31'
    | 'APP32'
    | 'APP33'
    | 'APP34'
    | 'APP35'
    | 'APP36'
    | 'APP37'
    | 'APP38'
    | 'APP39'
    | 'APP40'
    | 'APP41'
    | 'APP42'
    | 'APP43'
    | 'APP44'
    | 'APP45'
    | 'APP46'
    | 'APP47'
    | 'APP48'
    | 'APP49'
    | 'APP50'
    | 'APP51'
    | 'APP52'
    | 'APP53'
    | 'APP54'
    | 'APP55'
    | 'APP56'
    | 'APP57'
    | 'APP58'
    | 'APP59'
    | 'APP60'
    | 'APP61'
    | 'APP62'
    | 'APP63'
    | 'APP64'
    | 'APP65'
    | 'APP66'
    | 'APP67'
    | 'APP68'
    | 'APP69'
    | 'APP70'
    | 'APP71'
    | 'APP72'
    | 'APP73'
    | 'APP74'
    | 'APP75'
    | 'APP76'
    | 'APP77'
    | 'APP78'
    | 'APP79'
    | 'APP80'
    | 'APP81'
    | 'APP82'
    | 'APP83'
    | 'APP84'
    | 'APP85'
    | 'APP86'
    | 'APP87'
    | 'APP88'
    | 'APP89'
    | 'APP90'
}
type AppSettingsGetIconFileForm = {
  file: {
    size?: string | undefined
    name?: string | undefined
    fileKey: string
    contentType?: string | undefined
  }
  type: 'FILE' | 'PRESET'
}
type AppSettingsGetNumberPrecision = {
  roundingMode?: 'HALF_EVEN' | 'UP' | 'DOWN' | undefined
  decimalPlaces?: string | undefined
  digits?: string | undefined
}
type AppStatusGetExecutableUserEntityForm = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type AppStatusGetActionForm = {
  name?: string | undefined
  executableUser?: { entities?: AppStatusGetExecutableUserEntityForm[] | undefined } | undefined
  from?: string | undefined
  to?: string | undefined
  filterCond?: string | undefined
  type?: string | undefined
}
type AppStatusGetAssigneeEntityForm = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: (string | null) | undefined
        type?:
          | 'USER'
          | 'GROUP'
          | 'ORGANIZATION'
          | 'FIELD_ENTITY'
          | 'CREATOR'
          | 'CUSTOM_FIELD'
          | undefined
      }
    | undefined
}
type AppStatusGetStateForm = {
  instructions?: string | undefined
  name?: string | undefined
  index?: bigint | undefined
  assignee?:
    | {
        entities?: AppStatusGetAssigneeEntityForm[] | undefined
        type?: 'ONE' | 'ALL' | 'ANY' | undefined
      }
    | undefined
}
type AppViewsGetBuiltinListViewOutputForm = {
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  fields?: string[] | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type AppViewsGetBuiltinCalendarViewOutputForm = {
  date?: string | undefined
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  title?: string | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type AppViewsGetListViewOutputForm = {
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  fields?: string[] | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
}
type AppViewsGetCalendarViewOutputForm = {
  date?: string | undefined
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  title?: string | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
}
type AppViewsGetCustomViewOutputForm = {
  pager?: boolean | undefined
  name?: string | undefined
  index?: bigint | undefined
  html?: string | undefined
  id?: bigint | undefined
  sort?: string | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
  device?: 'DESKTOP' | 'ANY' | undefined
}
type AppsGetAppWithSpaceIdForm = {
  threadId?: (string | null) | undefined
  spaceId?: (string | null) | undefined
  createdAt?: string | undefined
  creator?: { code?: string | undefined; name?: string | undefined } | undefined
  code?: string | undefined
  modifiedAt?: string | undefined
  appId?: string | undefined
  modifier?: { code?: string | undefined; name?: string | undefined } | undefined
  name?: string | undefined
  description?: string | undefined
}
type AppsStatisticsGetAppForm = {
  fieldCount?: bigint | undefined
  creator?: { code?: string | undefined; name?: string | undefined } | undefined
  customized?: boolean | undefined
  modifiedAt?: string | undefined
  recordCount?: bigint | undefined
  modifier?: { code?: string | undefined; name?: string | undefined } | undefined
  apiTokenCount?: bigint | undefined
  space?: { name?: string | undefined; id?: bigint | undefined } | undefined
  recordUpdatedAt?: string | undefined
  createdAt?: string | undefined
  webhookCount?: bigint | undefined
  dailyRequestCount?: bigint | undefined
  appGroup?: string | undefined
  storageUsage?: bigint | undefined
  name?: string | undefined
  id?: bigint | undefined
  status?: 'NOT_ACTIVATED' | 'ACTIVATED' | 'CHANGED' | undefined
}
type SingleFileSimpleValue = {
  size?: string | undefined
  name?: string | undefined
  fileKey: string
  contentType?: string | undefined
}
type GroupEntitySimpleValue = { code: string; name?: string | undefined }
type OrganizationEntitySimpleValue = { code: string; name?: string | undefined }
type SimpleRowWritableValue = {
  id?: string | undefined
  value?: { [x: string]: RecordWritableObject } | undefined
}
type UserEntitySimpleValue = { code: string; name?: string | undefined }
type RecordWritableObject =
  | { type?: 'CHECK_BOX' | undefined; value: string[] }
  | { type?: 'DATE' | undefined; value?: (string | null) | undefined }
  | { type?: 'DATETIME' | undefined; value?: (string | null) | undefined }
  | { type?: 'NUMBER' | undefined; value?: string | undefined }
  | { type?: 'RICH_TEXT' | undefined; value?: string | undefined }
  | { type?: 'FILE' | undefined; value: SingleFileSimpleValue[] }
  | { type?: 'GROUP_SELECT' | undefined; value: GroupEntitySimpleValue[] }
  | { type?: 'LINK' | undefined; value?: string | undefined }
  | { type?: 'MULTI_LINE_TEXT' | undefined; value?: string | undefined }
  | { type?: 'MULTI_SELECT' | undefined; value: string[] }
  | { type?: 'ORGANIZATION_SELECT' | undefined; value: OrganizationEntitySimpleValue[] }
  | { type?: 'RADIO_BUTTON' | undefined; value?: string | undefined }
  | { type?: 'SUBTABLE' | undefined; value?: SimpleRowWritableValue[] | undefined }
  | { type?: 'SINGLE_LINE_TEXT' | undefined; value?: string | undefined }
  | { type?: 'DROP_DOWN' | undefined; value?: (string | null) | undefined }
  | { type?: 'TIME' | undefined; value?: (string | null) | undefined }
  | { type?: 'USER_SELECT' | undefined; value: UserEntitySimpleValue[] }
type BulkRequestPostRecordPostForm = { app: bigint; record: { [x: string]: RecordWritableObject } }
type BulkRequestPostUpdateKey = { field: string; value: string }
type BulkRequestPostRecordPutForm = {
  app: bigint
  updateKey?: BulkRequestPostUpdateKey | undefined
  record?: { [x: string]: RecordWritableObject } | undefined
  id?: bigint | undefined
  revision?: bigint | undefined
}
type BulkRequestPostRecordStatusPutForm = {
  app: bigint
  action: string
  id: bigint
  assignee?: string | undefined
  revision?: bigint | undefined
}
type BulkRequestPostRecordAssigneesPutForm = {
  app: bigint
  assignees: string[]
  id: bigint
  revision?: bigint | undefined
}
type BulkRequestPostRecordsDeleteForm = {
  app: bigint
  ids: bigint[]
  revisions?: bigint[] | undefined
}
type BulkRequestPostRecordsPostForm = {
  app: bigint
  records: { [x: string]: RecordWritableObject }[]
}
type BulkRequestPostRecordForm = {
  updateKey?: BulkRequestPostUpdateKey | undefined
  record?: { [x: string]: RecordWritableObject } | undefined
  id?: bigint | undefined
  revision?: bigint | undefined
}
type BulkRequestPostRecordsPutForm = {
  app: bigint
  records: BulkRequestPostRecordForm[]
  upsert?: boolean | undefined
}
type BulkRequestPostRecordsStatusPutFormRecord = {
  action: string
  id: bigint
  assignee?: string | undefined
  revision?: bigint | undefined
}
type BulkRequestPostRecordsStatusPutForm = {
  app: bigint
  records: BulkRequestPostRecordsStatusPutFormRecord[]
}
type BulkRequestPostRequestForm = {
  method: string
  payload:
    | BulkRequestPostRecordPostForm
    | BulkRequestPostRecordPutForm
    | BulkRequestPostRecordStatusPutForm
    | BulkRequestPostRecordAssigneesPutForm
    | BulkRequestPostRecordsDeleteForm
    | BulkRequestPostRecordsPostForm
    | BulkRequestPostRecordsPutForm
    | BulkRequestPostRecordsStatusPutForm
  api: string
}
type BulkRequestPostRecordPostOutputForm = {
  id?: bigint | undefined
  revision?: string | undefined
}
type BulkRequestPostRecordPutOutputForm = { revision?: string | undefined }
type BulkRequestPostRecordStatusPutOutputForm = { revision?: string | undefined }
type BulkRequestPostRecordAssigneesPutOutputForm = { revision?: string | undefined }
type BulkRequestPostRecordsDeleteOutputForm = { [x: string]: unknown }
type BulkRequestPostRecordsPostOutputForm = {
  ids?: bigint[] | undefined
  revisions?: bigint[] | undefined
}
type BulkRequestPostRecordBean = { id?: bigint | undefined; revision?: string | undefined }
type BulkRequestPostUpsertRecordBean = {
  id?: bigint | undefined
  operation?: 'INSERT' | 'UPDATE' | undefined
  revision?: string | undefined
}
type BulkRequestPostRecordsPutOutputForm = {
  records?: BulkRequestPostRecordBean[] | BulkRequestPostUpsertRecordBean[] | undefined
}
type BulkRequestPostRecordsStatusPutOutputFormRecord = {
  id?: bigint | undefined
  revision?: string | undefined
}
type BulkRequestPostRecordsStatusPutOutputForm = {
  records?: BulkRequestPostRecordsStatusPutOutputFormRecord[] | undefined
}
type FieldAclGetEntityRight = {
  accessibility?: 'WRITE' | 'READ' | 'NONE' | undefined
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type FieldAclGetRight = {
  code?: string | undefined
  entities?: FieldAclGetEntityRight[] | undefined
}
type FieldAclPutFieldRightEntity = {
  accessibility: 'WRITE' | 'READ' | 'NONE'
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type FieldAclPutRight = { code: string; entities: FieldAclPutFieldRightEntity[] }
type FormGetLayoutProperties = {
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type FormGetLabelProperties = {
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type FormGetBultinProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type FormGetCalcSimpleProperties = {
  noLabel?: boolean | undefined
  unit?: (string | null) | undefined
  expression?: string | undefined
  code?: string | undefined
  format?:
    | 'NUMBER'
    | 'NUMBER_DIGIT'
    | 'DATETIME'
    | 'DATE'
    | 'TIME'
    | 'HOUR_MINUTE'
    | 'DAY_HOUR_MINUTE'
    | undefined
  unitPosition?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  displayScale?: (bigint | null) | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type FormGetDateSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  defaultExpression?: (string | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetDatetimeSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  defaultExpression?: (string | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetDecimalSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  maxValue?: (bigint | null) | undefined
  defaultValue?: (string | null) | undefined
  unitPosition?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
  minValue?: (bigint | null) | undefined
  unit?: (string | null) | undefined
  unique?: boolean | undefined
  displayScale?: (bigint | null) | undefined
  digit?: boolean | undefined
}
type FormGetEditorSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetFileSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetLinkSimpleProperties = {
  noLabel?: boolean | undefined
  protocol?: 'WEB' | 'CALL' | 'MAIL' | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  minLength?: (bigint | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  maxLength?: (bigint | null) | undefined
  required?: boolean | undefined
}
type FormGetMultipleLineTextSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetMultipleSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string[] | null) | undefined
  options?: string[] | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetSingleLineTextSimpleProperties = {
  noLabel?: boolean | undefined
  expression?: string | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  minLength?: (bigint | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  maxLength?: (bigint | null) | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type FormGetSingleSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  options?: string[] | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetTimeSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  defaultExpression?: (string | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetUserSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetOrganizationSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetGroupSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetLookupSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  relatedApp?: (bigint | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type FormGetReferenceTableLayoutProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  relatedApp?: (bigint | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type FormGetSpacerProperties = {
  elementId?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type FormGetSubTableLayoutProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  fields?:
    | (
        | FormGetLayoutProperties
        | FormGetLabelProperties
        | FormGetBultinProperties
        | FormGetCalcSimpleProperties
        | FormGetDateSimpleProperties
        | FormGetDatetimeSimpleProperties
        | FormGetDecimalSimpleProperties
        | FormGetEditorSimpleProperties
        | FormGetFileSimpleProperties
        | FormGetLinkSimpleProperties
        | FormGetMultipleLineTextSimpleProperties
        | FormGetMultipleSelectSimpleProperties
        | FormGetSingleLineTextSimpleProperties
        | FormGetSingleSelectSimpleProperties
        | FormGetTimeSimpleProperties
        | FormGetUserSelectSimpleProperties
        | FormGetOrganizationSelectSimpleProperties
        | FormGetGroupSelectSimpleProperties
        | FormGetLookupSimpleProperties
        | FormGetReferenceTableLayoutProperties
        | FormGetSubTableLayoutProperties
        | FormGetSpacerProperties
      )[]
    | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type GuestsPostGuestUserForm = {
  division?: string | undefined
  callto?: string | undefined
  image?: string | undefined
  password: string
  code: string
  phone?: string | undefined
  timezone: string
  name: string
  surNameReading?: string | undefined
  company?: string | undefined
  locale?: string | undefined
  givenNameReading?: string | undefined
}
type PluginAppsGetAppDto = { name?: string | undefined; id?: string | undefined }
type PluginsGetPluginDto = {
  isMarketPlugin?: boolean | undefined
  name?: string | undefined
  description?: string | undefined
  id?: string | undefined
  version?: string | undefined
}
type PluginsRequiredGetPluginDto = {
  isMarketPlugin?: boolean | undefined
  name?: string | undefined
  id?: string | undefined
}
type PreviewAppAclGetRight = {
  recordImportable?: boolean | undefined
  appEditable?: boolean | undefined
  recordExportable?: boolean | undefined
  recordAddable?: boolean | undefined
  recordViewable?: boolean | undefined
  recordEditable?: boolean | undefined
  includeSubs?: boolean | undefined
  recordDeletable?: boolean | undefined
  entity?:
    | {
        code?: (string | null) | undefined
        type?: 'USER' | 'ORGANIZATION' | 'GROUP' | 'CREATOR' | undefined
      }
    | undefined
}
type PreviewAppAclPutRight = {
  recordImportable?: boolean | undefined
  appEditable?: boolean | undefined
  recordExportable?: boolean | undefined
  recordAddable?: boolean | undefined
  recordViewable?: boolean | undefined
  recordEditable?: boolean | undefined
  recordDeletable?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'ORGANIZATION' | 'GROUP' | 'CREATOR' }
}
type PreviewAppActionsGetUrlMapping = {
  destField?: string | undefined
  srcType?: 'RECORD_URL' | undefined
}
type PreviewAppActionsGetFieldMapping = {
  destField?: string | undefined
  srcType?: 'FIELD' | undefined
  srcField?: string | undefined
}
type PreviewAppActionsGetEntity = {
  code?: string | undefined
  type?: 'USER' | 'GROUP' | 'ORGANIZATION' | undefined
}
type PreviewAppActionsGetAction = {
  mappings?: (PreviewAppActionsGetUrlMapping | PreviewAppActionsGetFieldMapping)[] | undefined
  entities?: PreviewAppActionsGetEntity[] | undefined
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  filterCond?: string | undefined
  destApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
}
type PreviewAppActionsPutFieldMapping = { destField: string; srcType: 'FIELD'; srcField: string }
type PreviewAppActionsPutUrlMapping = { destField: string; srcType: 'RECORD_URL' }
type PreviewAppActionsPutEntity = { code: string; type: 'USER' | 'GROUP' | 'ORGANIZATION' }
type PreviewAppActionsPutAction = {
  mappings?: (PreviewAppActionsPutFieldMapping | PreviewAppActionsPutUrlMapping)[] | undefined
  entities?: PreviewAppActionsPutEntity[] | undefined
  name?: string | undefined
  index: bigint
  filterCond?: string | undefined
  destApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
}
type PreviewAppActionsPutActionResult = { id?: bigint | undefined }
type PreviewAppCustomizeGetUrlContentForm = { type: 'URL' | 'FILE'; url: string }
type PreviewAppCustomizeGetFileContentForm = {
  file: {
    size?: string | undefined
    name?: string | undefined
    fileKey: string
    contentType?: string | undefined
  }
  type: 'URL' | 'FILE'
}
type PreviewAppCustomizePutUrlContentForm = { type: 'URL' | 'FILE'; url: string }
type PreviewAppCustomizePutFileContentForm = {
  file: {
    size?: string | undefined
    name?: string | undefined
    fileKey: string
    contentType?: string | undefined
  }
  type: 'URL' | 'FILE'
}
type PreviewAppDeployGetAppForm = {
  app?: bigint | undefined
  status?: 'PROCESSING' | 'SUCCESS' | 'FAIL' | 'CANCEL' | undefined
}
type PreviewAppDeployPostAppForm = { app: bigint; revision?: bigint | undefined }
type PreviewAppFormFieldsGetCalcFieldForm = {
  noLabel?: boolean | undefined
  unit?: string | undefined
  expression?: string | undefined
  code?: string | undefined
  format?:
    | 'NUMBER'
    | 'NUMBER_DIGIT'
    | 'DATETIME'
    | 'DATE'
    | 'TIME'
    | 'HOUR_MINUTE'
    | 'DAY_HOUR_MINUTE'
    | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  displayScale?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetCategoryFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsGetDateFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetDatetimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetDecimalFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  maxValue?: bigint | undefined
  defaultValue?: string | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
  minValue?: bigint | undefined
  unit?: string | undefined
  unique?: boolean | undefined
  displayScale?: bigint | undefined
  digit?: boolean | undefined
}
type PreviewAppFormFieldsGetEditorFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetFileFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  thumbnailSize?: bigint | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetGroupFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  openGroup?: boolean | undefined
}
type PreviewAppFormFieldsGetEntityForm = {
  code: string
  type: 'USER' | 'ORGANIZATION' | 'GROUP' | 'FUNCTION'
}
type PreviewAppFormFieldsGetGroupSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsGetEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsGetEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetLinkFieldForm = {
  noLabel?: boolean | undefined
  protocol?: 'WEB' | 'CALL' | 'MAIL' | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetFieldMappingForm = {
  relatedField?: string | undefined
  field?: string | undefined
}
type PreviewAppFormFieldsGetLookupFieldForm = {
  noLabel?: boolean | undefined
  lookup?:
    | ({
        lookupPickerFields?: string[] | undefined
        relatedKeyField?: string | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        fieldMappings?: PreviewAppFormFieldsGetFieldMappingForm[] | undefined
        sort?: string | undefined
        filterCond?: string | undefined
      } | null)
    | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetModifiedAtFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsGetModifierFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsGetOptionForm = { index: bigint; label?: string | undefined }
type PreviewAppFormFieldsGetMultipleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: PreviewAppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetMultipleLineTextFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetMultipleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: PreviewAppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetOrganizationSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsGetEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsGetEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetRecordIdFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsGetReferenceTableFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  referenceTable?:
    | ({
        condition?: { relatedField?: string | undefined; field?: string | undefined } | undefined
        size?: bigint | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        sort?: string | undefined
        filterCond?: string | undefined
        displayFields?: string[] | undefined
      } | null)
    | undefined
}
type PreviewAppFormFieldsGetSingleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: PreviewAppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetSingleLineTextFieldForm = {
  noLabel?: boolean | undefined
  expression?: string | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetSingleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: PreviewAppFormFieldsGetOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetStatusAssigneeFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsGetStatusFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsGetTimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetUserSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsGetEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsGetEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsGetTableForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  fields?:
    | {
        [x: string]:
          | PreviewAppFormFieldsGetCalcFieldForm
          | PreviewAppFormFieldsGetCategoryFieldForm
          | PreviewAppFormFieldsGetDateFieldForm
          | PreviewAppFormFieldsGetDatetimeFieldForm
          | PreviewAppFormFieldsGetDecimalFieldForm
          | PreviewAppFormFieldsGetEditorFieldForm
          | PreviewAppFormFieldsGetFileFieldForm
          | PreviewAppFormFieldsGetGroupFieldForm
          | PreviewAppFormFieldsGetGroupSelectFieldForm
          | PreviewAppFormFieldsGetLinkFieldForm
          | PreviewAppFormFieldsGetLookupFieldForm
          | PreviewAppFormFieldsGetModifiedAtFieldForm
          | PreviewAppFormFieldsGetModifierFieldForm
          | PreviewAppFormFieldsGetMultipleCheckFieldForm
          | PreviewAppFormFieldsGetMultipleLineTextFieldForm
          | PreviewAppFormFieldsGetMultipleSelectFieldForm
          | PreviewAppFormFieldsGetOrganizationSelectFieldForm
          | PreviewAppFormFieldsGetRecordIdFieldForm
          | PreviewAppFormFieldsGetReferenceTableFieldForm
          | PreviewAppFormFieldsGetSingleCheckFieldForm
          | PreviewAppFormFieldsGetSingleLineTextFieldForm
          | PreviewAppFormFieldsGetSingleSelectFieldForm
          | PreviewAppFormFieldsGetStatusAssigneeFieldForm
          | PreviewAppFormFieldsGetStatusFieldForm
          | PreviewAppFormFieldsGetTableForm
          | PreviewAppFormFieldsGetTimeFieldForm
          | PreviewAppFormFieldsGetUserSelectFieldForm
      }
    | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPostCalcFieldForm = {
  noLabel?: boolean | undefined
  unit?: string | undefined
  expression?: string | undefined
  code?: string | undefined
  format?:
    | 'NUMBER'
    | 'NUMBER_DIGIT'
    | 'DATETIME'
    | 'DATE'
    | 'TIME'
    | 'HOUR_MINUTE'
    | 'DAY_HOUR_MINUTE'
    | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  displayScale?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostCategoryFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsPostDateFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostDatetimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostDecimalFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  maxValue?: bigint | undefined
  defaultValue?: string | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
  minValue?: bigint | undefined
  unit?: string | undefined
  unique?: boolean | undefined
  displayScale?: bigint | undefined
  digit?: boolean | undefined
}
type PreviewAppFormFieldsPostEditorFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostFileFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  thumbnailSize?: bigint | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostGroupFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  openGroup?: boolean | undefined
}
type PreviewAppFormFieldsPostEntityForm = {
  code: string
  type: 'USER' | 'ORGANIZATION' | 'GROUP' | 'FUNCTION'
}
type PreviewAppFormFieldsPostGroupSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsPostEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsPostEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostLinkFieldForm = {
  noLabel?: boolean | undefined
  protocol?: 'WEB' | 'CALL' | 'MAIL' | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostFieldMappingForm = {
  relatedField?: string | undefined
  field?: string | undefined
}
type PreviewAppFormFieldsPostLookupFieldForm = {
  noLabel?: boolean | undefined
  lookup?:
    | {
        lookupPickerFields?: string[] | undefined
        relatedKeyField?: string | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        fieldMappings?: PreviewAppFormFieldsPostFieldMappingForm[] | undefined
        sort?: string | undefined
        filterCond?: string | undefined
      }
    | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostModifiedAtFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPostModifierFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPostOptionForm = { index: bigint; label?: string | undefined }
type PreviewAppFormFieldsPostMultipleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: PreviewAppFormFieldsPostOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostMultipleLineTextFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostMultipleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: PreviewAppFormFieldsPostOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostOrganizationSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsPostEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsPostEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostRecordIdFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPostReferenceTableFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  referenceTable?:
    | {
        condition?: { relatedField?: string | undefined; field?: string | undefined } | undefined
        size?: bigint | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        sort?: string | undefined
        filterCond?: string | undefined
        displayFields?: string[] | undefined
      }
    | undefined
}
type PreviewAppFormFieldsPostSingleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: PreviewAppFormFieldsPostOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostSingleLineTextFieldForm = {
  noLabel?: boolean | undefined
  expression?: string | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostSingleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: PreviewAppFormFieldsPostOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostStatusAssigneeFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsPostStatusFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsPostTimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostUserSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsPostEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsPostEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPostTableForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  fields?:
    | {
        [x: string]:
          | PreviewAppFormFieldsPostCalcFieldForm
          | PreviewAppFormFieldsPostCategoryFieldForm
          | PreviewAppFormFieldsPostDateFieldForm
          | PreviewAppFormFieldsPostDatetimeFieldForm
          | PreviewAppFormFieldsPostDecimalFieldForm
          | PreviewAppFormFieldsPostEditorFieldForm
          | PreviewAppFormFieldsPostFileFieldForm
          | PreviewAppFormFieldsPostGroupFieldForm
          | PreviewAppFormFieldsPostGroupSelectFieldForm
          | PreviewAppFormFieldsPostLinkFieldForm
          | PreviewAppFormFieldsPostLookupFieldForm
          | PreviewAppFormFieldsPostModifiedAtFieldForm
          | PreviewAppFormFieldsPostModifierFieldForm
          | PreviewAppFormFieldsPostMultipleCheckFieldForm
          | PreviewAppFormFieldsPostMultipleLineTextFieldForm
          | PreviewAppFormFieldsPostMultipleSelectFieldForm
          | PreviewAppFormFieldsPostOrganizationSelectFieldForm
          | PreviewAppFormFieldsPostRecordIdFieldForm
          | PreviewAppFormFieldsPostReferenceTableFieldForm
          | PreviewAppFormFieldsPostSingleCheckFieldForm
          | PreviewAppFormFieldsPostSingleLineTextFieldForm
          | PreviewAppFormFieldsPostSingleSelectFieldForm
          | PreviewAppFormFieldsPostStatusAssigneeFieldForm
          | PreviewAppFormFieldsPostStatusFieldForm
          | PreviewAppFormFieldsPostTableForm
          | PreviewAppFormFieldsPostTimeFieldForm
          | PreviewAppFormFieldsPostUserSelectFieldForm
      }
    | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPutCalcFieldForm = {
  noLabel?: boolean | undefined
  unit?: string | undefined
  expression?: string | undefined
  code?: string | undefined
  format?:
    | 'NUMBER'
    | 'NUMBER_DIGIT'
    | 'DATETIME'
    | 'DATE'
    | 'TIME'
    | 'HOUR_MINUTE'
    | 'DAY_HOUR_MINUTE'
    | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  displayScale?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutCategoryFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsPutDateFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutDatetimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  unique?: boolean | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutDecimalFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  maxValue?: bigint | undefined
  defaultValue?: string | undefined
  unitPosition?: 'BEFORE' | 'AFTER' | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
  minValue?: bigint | undefined
  unit?: string | undefined
  unique?: boolean | undefined
  displayScale?: bigint | undefined
  digit?: boolean | undefined
}
type PreviewAppFormFieldsPutEditorFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutFileFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  thumbnailSize?: bigint | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutGroupFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  openGroup?: boolean | undefined
}
type PreviewAppFormFieldsPutEntityForm = {
  code: string
  type: 'USER' | 'ORGANIZATION' | 'GROUP' | 'FUNCTION'
}
type PreviewAppFormFieldsPutGroupSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsPutEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsPutEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutLinkFieldForm = {
  noLabel?: boolean | undefined
  protocol?: 'WEB' | 'CALL' | 'MAIL' | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutFieldMappingForm = {
  relatedField?: string | undefined
  field?: string | undefined
}
type PreviewAppFormFieldsPutLookupFieldForm = {
  noLabel?: boolean | undefined
  lookup?:
    | {
        lookupPickerFields?: string[] | undefined
        relatedKeyField?: string | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        fieldMappings?: PreviewAppFormFieldsPutFieldMappingForm[] | undefined
        sort?: string | undefined
        filterCond?: string | undefined
      }
    | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutModifiedAtFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPutModifierFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPutOptionForm = { index: bigint; label?: string | undefined }
type PreviewAppFormFieldsPutMultipleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: PreviewAppFormFieldsPutOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutMultipleLineTextFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutMultipleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string[] | undefined
  options?: { [x: string]: PreviewAppFormFieldsPutOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutOrganizationSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsPutEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsPutEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutRecordIdFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormFieldsPutReferenceTableFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  referenceTable?:
    | {
        condition?: { relatedField?: string | undefined; field?: string | undefined } | undefined
        size?: bigint | undefined
        relatedApp?: { app?: bigint | undefined; code?: string | undefined } | undefined
        sort?: string | undefined
        filterCond?: string | undefined
        displayFields?: string[] | undefined
      }
    | undefined
}
type PreviewAppFormFieldsPutSingleCheckFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: PreviewAppFormFieldsPutOptionForm } | undefined
  label?: string | undefined
  align?: 'HORIZONTAL' | 'VERTICAL' | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutSingleLineTextFieldForm = {
  noLabel?: boolean | undefined
  expression?: string | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  minLength?: bigint | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  maxLength?: bigint | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutSingleSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  options?: { [x: string]: PreviewAppFormFieldsPutOptionForm } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutStatusAssigneeFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsPutStatusFieldForm = {
  code?: string | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  enabled?: boolean | undefined
}
type PreviewAppFormFieldsPutTimeFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: string | undefined
  defaultNowValue?: boolean | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutUserSelectFieldForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  entities?: PreviewAppFormFieldsPutEntityForm[] | undefined
  defaultValue?: PreviewAppFormFieldsPutEntityForm[] | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
  required?: boolean | undefined
}
type PreviewAppFormFieldsPutTableForm = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  fields?:
    | {
        [x: string]:
          | PreviewAppFormFieldsPutCalcFieldForm
          | PreviewAppFormFieldsPutCategoryFieldForm
          | PreviewAppFormFieldsPutDateFieldForm
          | PreviewAppFormFieldsPutDatetimeFieldForm
          | PreviewAppFormFieldsPutDecimalFieldForm
          | PreviewAppFormFieldsPutEditorFieldForm
          | PreviewAppFormFieldsPutFileFieldForm
          | PreviewAppFormFieldsPutGroupFieldForm
          | PreviewAppFormFieldsPutGroupSelectFieldForm
          | PreviewAppFormFieldsPutLinkFieldForm
          | PreviewAppFormFieldsPutLookupFieldForm
          | PreviewAppFormFieldsPutModifiedAtFieldForm
          | PreviewAppFormFieldsPutModifierFieldForm
          | PreviewAppFormFieldsPutMultipleCheckFieldForm
          | PreviewAppFormFieldsPutMultipleLineTextFieldForm
          | PreviewAppFormFieldsPutMultipleSelectFieldForm
          | PreviewAppFormFieldsPutOrganizationSelectFieldForm
          | PreviewAppFormFieldsPutRecordIdFieldForm
          | PreviewAppFormFieldsPutReferenceTableFieldForm
          | PreviewAppFormFieldsPutSingleCheckFieldForm
          | PreviewAppFormFieldsPutSingleLineTextFieldForm
          | PreviewAppFormFieldsPutSingleSelectFieldForm
          | PreviewAppFormFieldsPutStatusAssigneeFieldForm
          | PreviewAppFormFieldsPutStatusFieldForm
          | PreviewAppFormFieldsPutTableForm
          | PreviewAppFormFieldsPutTimeFieldForm
          | PreviewAppFormFieldsPutUserSelectFieldForm
      }
    | undefined
  type:
    | 'CALC'
    | 'CATEGORY'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'GROUP'
    | 'GROUP_SELECT'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'ORGANIZATION_SELECT'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'STATUS'
    | 'STATUS_ASSIGNEE'
    | 'SUBTABLE'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
}
type PreviewAppFormLayoutGetLabelField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetSingleLineTextField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetMultipleLineTextField = {
  code: string
  size?: { innerHeight?: bigint | undefined; width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetEditorField = {
  code: string
  size?: { innerHeight?: bigint | undefined; width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetDecimalField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetCalcField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetMultipleCheckField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetSingleCheckField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetSingleSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetMultipleSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetFileField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetDateField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetDatetimeField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetTimeField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetUserSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetLinkField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetLookupField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetReferenceTableField = {
  code: string
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetSpacerField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined; height?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetHrField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetRecordIdField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetCreatorField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetCreatedAtField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetModifierField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetModifiedAtField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutGetRow = {
  fields: (
    | PreviewAppFormLayoutGetLabelField
    | PreviewAppFormLayoutGetSingleLineTextField
    | PreviewAppFormLayoutGetMultipleLineTextField
    | PreviewAppFormLayoutGetEditorField
    | PreviewAppFormLayoutGetDecimalField
    | PreviewAppFormLayoutGetCalcField
    | PreviewAppFormLayoutGetMultipleCheckField
    | PreviewAppFormLayoutGetSingleCheckField
    | PreviewAppFormLayoutGetSingleSelectField
    | PreviewAppFormLayoutGetMultipleSelectField
    | PreviewAppFormLayoutGetFileField
    | PreviewAppFormLayoutGetDateField
    | PreviewAppFormLayoutGetDatetimeField
    | PreviewAppFormLayoutGetTimeField
    | PreviewAppFormLayoutGetUserSelectField
    | PreviewAppFormLayoutGetLinkField
    | PreviewAppFormLayoutGetLookupField
    | PreviewAppFormLayoutGetReferenceTableField
    | PreviewAppFormLayoutGetSpacerField
    | PreviewAppFormLayoutGetHrField
    | PreviewAppFormLayoutGetRecordIdField
    | PreviewAppFormLayoutGetCreatorField
    | PreviewAppFormLayoutGetCreatedAtField
    | PreviewAppFormLayoutGetModifierField
    | PreviewAppFormLayoutGetModifiedAtField
  )[]
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type PreviewAppFormLayoutGetGroupRow = {
  layout?: PreviewAppFormLayoutGetRow[] | undefined
  code: string
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type PreviewAppFormLayoutGetSubtableRow = {
  code: string
  fields: (
    | PreviewAppFormLayoutGetLabelField
    | PreviewAppFormLayoutGetSingleLineTextField
    | PreviewAppFormLayoutGetMultipleLineTextField
    | PreviewAppFormLayoutGetEditorField
    | PreviewAppFormLayoutGetDecimalField
    | PreviewAppFormLayoutGetCalcField
    | PreviewAppFormLayoutGetMultipleCheckField
    | PreviewAppFormLayoutGetSingleCheckField
    | PreviewAppFormLayoutGetSingleSelectField
    | PreviewAppFormLayoutGetMultipleSelectField
    | PreviewAppFormLayoutGetFileField
    | PreviewAppFormLayoutGetDateField
    | PreviewAppFormLayoutGetDatetimeField
    | PreviewAppFormLayoutGetTimeField
    | PreviewAppFormLayoutGetUserSelectField
    | PreviewAppFormLayoutGetLinkField
    | PreviewAppFormLayoutGetLookupField
    | PreviewAppFormLayoutGetReferenceTableField
    | PreviewAppFormLayoutGetSpacerField
    | PreviewAppFormLayoutGetHrField
    | PreviewAppFormLayoutGetRecordIdField
    | PreviewAppFormLayoutGetCreatorField
    | PreviewAppFormLayoutGetCreatedAtField
    | PreviewAppFormLayoutGetModifierField
    | PreviewAppFormLayoutGetModifiedAtField
  )[]
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type PreviewAppFormLayoutPutLabelField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined } | undefined
  label?: string | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutSingleLineTextField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutMultipleLineTextField = {
  code: string
  size?: { innerHeight?: bigint | undefined; width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutEditorField = {
  code: string
  size?: { innerHeight?: bigint | undefined; width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutDecimalField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutCalcField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutMultipleCheckField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutSingleCheckField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutSingleSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutMultipleSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutFileField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutDateField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutDatetimeField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutTimeField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutUserSelectField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutLinkField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutLookupField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutReferenceTableField = {
  code: string
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutSpacerField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined; height?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutHrField = {
  elementId?: string | undefined
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutRecordIdField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutCreatorField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutCreatedAtField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutModifierField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutModifiedAtField = {
  code: string
  size?: { width?: bigint | undefined } | undefined
  type:
    | 'CALC'
    | 'CHECK_BOX'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'DROP_DOWN'
    | 'FILE'
    | 'HR'
    | 'LABEL'
    | 'LINK'
    | 'MODIFIER'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'NUMBER'
    | 'RADIO_BUTTON'
    | 'RECORD_NUMBER'
    | 'REFERENCE_TABLE'
    | 'RICH_TEXT'
    | 'SINGLE_LINE_TEXT'
    | 'SPACER'
    | 'TIME'
    | 'UPDATED_TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
}
type PreviewAppFormLayoutPutRow = {
  fields: (
    | PreviewAppFormLayoutPutLabelField
    | PreviewAppFormLayoutPutSingleLineTextField
    | PreviewAppFormLayoutPutMultipleLineTextField
    | PreviewAppFormLayoutPutEditorField
    | PreviewAppFormLayoutPutDecimalField
    | PreviewAppFormLayoutPutCalcField
    | PreviewAppFormLayoutPutMultipleCheckField
    | PreviewAppFormLayoutPutSingleCheckField
    | PreviewAppFormLayoutPutSingleSelectField
    | PreviewAppFormLayoutPutMultipleSelectField
    | PreviewAppFormLayoutPutFileField
    | PreviewAppFormLayoutPutDateField
    | PreviewAppFormLayoutPutDatetimeField
    | PreviewAppFormLayoutPutTimeField
    | PreviewAppFormLayoutPutUserSelectField
    | PreviewAppFormLayoutPutLinkField
    | PreviewAppFormLayoutPutLookupField
    | PreviewAppFormLayoutPutReferenceTableField
    | PreviewAppFormLayoutPutSpacerField
    | PreviewAppFormLayoutPutHrField
    | PreviewAppFormLayoutPutRecordIdField
    | PreviewAppFormLayoutPutCreatorField
    | PreviewAppFormLayoutPutCreatedAtField
    | PreviewAppFormLayoutPutModifierField
    | PreviewAppFormLayoutPutModifiedAtField
  )[]
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type PreviewAppFormLayoutPutGroupRow = {
  layout?: PreviewAppFormLayoutPutRow[] | undefined
  code: string
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type PreviewAppFormLayoutPutSubtableRow = {
  code: string
  fields: (
    | PreviewAppFormLayoutPutLabelField
    | PreviewAppFormLayoutPutSingleLineTextField
    | PreviewAppFormLayoutPutMultipleLineTextField
    | PreviewAppFormLayoutPutEditorField
    | PreviewAppFormLayoutPutDecimalField
    | PreviewAppFormLayoutPutCalcField
    | PreviewAppFormLayoutPutMultipleCheckField
    | PreviewAppFormLayoutPutSingleCheckField
    | PreviewAppFormLayoutPutSingleSelectField
    | PreviewAppFormLayoutPutMultipleSelectField
    | PreviewAppFormLayoutPutFileField
    | PreviewAppFormLayoutPutDateField
    | PreviewAppFormLayoutPutDatetimeField
    | PreviewAppFormLayoutPutTimeField
    | PreviewAppFormLayoutPutUserSelectField
    | PreviewAppFormLayoutPutLinkField
    | PreviewAppFormLayoutPutLookupField
    | PreviewAppFormLayoutPutReferenceTableField
    | PreviewAppFormLayoutPutSpacerField
    | PreviewAppFormLayoutPutHrField
    | PreviewAppFormLayoutPutRecordIdField
    | PreviewAppFormLayoutPutCreatorField
    | PreviewAppFormLayoutPutCreatedAtField
    | PreviewAppFormLayoutPutModifierField
    | PreviewAppFormLayoutPutModifiedAtField
  )[]
  type: 'ROW' | 'SUBTABLE' | 'GROUP'
}
type PreviewAppNotificationsGeneralGetNotification = {
  recordEdited?: boolean | undefined
  recordAdded?: boolean | undefined
  statusChanged?: boolean | undefined
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
  fileImported?: boolean | undefined
  commentAdded?: boolean | undefined
}
type PreviewAppNotificationsGeneralPutNotification = {
  recordEdited?: boolean | undefined
  recordAdded?: boolean | undefined
  statusChanged?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code: string; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
  fileImported?: boolean | undefined
  commentAdded?: boolean | undefined
}
type PreviewAppNotificationsPerRecordGetTarget = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type PreviewAppNotificationsPerRecordGetNotification = {
  filterCond?: string | undefined
  title?: string | undefined
  targets?: PreviewAppNotificationsPerRecordGetTarget[] | undefined
}
type PreviewAppNotificationsPerRecordPutTarget = {
  includeSubs?: boolean | undefined
  entity: { code: string; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type PreviewAppNotificationsPerRecordPutNotification = {
  filterCond: string
  title?: string | undefined
  targets: PreviewAppNotificationsPerRecordPutTarget[]
}
type PreviewAppNotificationsReminderGetTimingRelative = {
  hoursLater?: bigint | undefined
  code?: string | undefined
  daysLater?: bigint | undefined
}
type PreviewAppNotificationsReminderGetTimingAbsolute = {
  code?: string | undefined
  time?: string | undefined
  daysLater?: bigint | undefined
}
type PreviewAppNotificationsReminderGetTarget = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type PreviewAppNotificationsReminderGetNotification = {
  timing?:
    | PreviewAppNotificationsReminderGetTimingRelative
    | PreviewAppNotificationsReminderGetTimingAbsolute
    | undefined
  filterCond?: string | undefined
  title?: string | undefined
  targets?: PreviewAppNotificationsReminderGetTarget[] | undefined
}
type PreviewAppNotificationsReminderPutTimingRelative = {
  hoursLater: bigint
  code: string
  daysLater: bigint
}
type PreviewAppNotificationsReminderPutTimingAbsolute = {
  code: string
  time: string
  daysLater: bigint
}
type PreviewAppNotificationsReminderPutTarget = {
  includeSubs?: boolean | undefined
  entity: { code: string; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type PreviewAppNotificationsReminderPutNotification = {
  timing:
    | PreviewAppNotificationsReminderPutTimingRelative
    | PreviewAppNotificationsReminderPutTimingAbsolute
  filterCond?: string | undefined
  title?: string | undefined
  targets: PreviewAppNotificationsReminderPutTarget[]
}
type PreviewAppPluginsGetPluginForm = {
  name?: string | undefined
  id?: string | undefined
  enabled?: boolean | undefined
}
type PreviewAppReportsGetPeriodYear = {
  month?: bigint | undefined
  dayOfMonth?: bigint | undefined
  time?: string | undefined
  every?: 'YEAR' | undefined
}
type PreviewAppReportsGetPeriodQuarter = {
  dayOfMonth?: string | undefined
  pattern?: 'JAN_APR_JUL_OCT' | 'FEB_MAY_AUG_NOV' | 'MAR_JUN_SEP_DEC' | undefined
  time?: string | undefined
  every?: 'QUARTER' | undefined
}
type PreviewAppReportsGetPeriodMonth = {
  dayOfMonth?: string | undefined
  time?: string | undefined
  every?: 'MONTH' | undefined
}
type PreviewAppReportsGetPeriodWeek = {
  dayOfWeek?:
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  time?: string | undefined
  every?: 'WEEK' | undefined
}
type PreviewAppReportsGetPeriodDay = { time?: string | undefined; every?: 'DAY' | undefined }
type PreviewAppReportsGetPeriodHour = { every?: 'HOUR' | undefined; minute?: bigint | undefined }
type PreviewAppReportsGetGroup = { code?: string | undefined }
type PreviewAppReportsGetGroupDateTime = {
  code?: string | undefined
  per?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'MINUTE' | undefined
}
type PreviewAppReportsGetGroupDate = {
  code?: string | undefined
  per?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | undefined
}
type PreviewAppReportsGetGroupTime = {
  code?: string | undefined
  per?: 'HOUR' | 'MINUTE' | undefined
}
type PreviewAppReportsGetRecordAggregation = { type?: 'COUNT' | undefined }
type PreviewAppReportsGetFieldAggregation = {
  code?: string | undefined
  type?: 'SUM' | 'AVERAGE' | 'MAX' | 'MIN' | undefined
}
type PreviewAppReportsGetSort = {
  by?: 'TOTAL' | 'GROUP1' | 'GROUP2' | 'GROUP3' | undefined
  order?: 'ASC' | 'DESC' | undefined
}
type PreviewAppReportsGetReport = {
  periodicReport?:
    | ({
        period?:
          | PreviewAppReportsGetPeriodYear
          | PreviewAppReportsGetPeriodQuarter
          | PreviewAppReportsGetPeriodMonth
          | PreviewAppReportsGetPeriodWeek
          | PreviewAppReportsGetPeriodDay
          | PreviewAppReportsGetPeriodHour
          | undefined
        active?: boolean | undefined
      } | null)
    | undefined
  chartType?:
    | 'PIE'
    | 'LINE'
    | 'SPLINE'
    | 'TABLE'
    | 'PIVOT_TABLE'
    | 'BAR'
    | 'COLUMN'
    | 'AREA'
    | 'SPLINE_AREA'
    | undefined
  name?: string | undefined
  index?: bigint | undefined
  groups?:
    | (
        | PreviewAppReportsGetGroup
        | PreviewAppReportsGetGroupDateTime
        | PreviewAppReportsGetGroupDate
        | PreviewAppReportsGetGroupTime
      )[]
    | undefined
  id?: bigint | undefined
  filterCond?: string | undefined
  aggregations?:
    | (PreviewAppReportsGetRecordAggregation | PreviewAppReportsGetFieldAggregation)[]
    | undefined
  sorts?: PreviewAppReportsGetSort[] | undefined
}
type PreviewAppReportsGetReportWithChartMode = {
  periodicReport?:
    | ({
        period?:
          | PreviewAppReportsGetPeriodYear
          | PreviewAppReportsGetPeriodQuarter
          | PreviewAppReportsGetPeriodMonth
          | PreviewAppReportsGetPeriodWeek
          | PreviewAppReportsGetPeriodDay
          | PreviewAppReportsGetPeriodHour
          | undefined
        active?: boolean | undefined
      } | null)
    | undefined
  chartType?:
    | 'PIE'
    | 'LINE'
    | 'SPLINE'
    | 'TABLE'
    | 'PIVOT_TABLE'
    | 'BAR'
    | 'COLUMN'
    | 'AREA'
    | 'SPLINE_AREA'
    | undefined
  name?: string | undefined
  index?: bigint | undefined
  groups?:
    | (
        | PreviewAppReportsGetGroup
        | PreviewAppReportsGetGroupDateTime
        | PreviewAppReportsGetGroupDate
        | PreviewAppReportsGetGroupTime
      )[]
    | undefined
  id?: bigint | undefined
  chartMode?: 'NORMAL' | 'STACKED' | 'PERCENTAGE' | undefined
  filterCond?: string | undefined
  aggregations?:
    | (PreviewAppReportsGetRecordAggregation | PreviewAppReportsGetFieldAggregation)[]
    | undefined
  sorts?: PreviewAppReportsGetSort[] | undefined
}
type PreviewAppReportsPutPeriodYear = {
  month: bigint
  dayOfMonth: bigint
  time: string
  every: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'
}
type PreviewAppReportsPutPeriodQuarter = {
  dayOfMonth: string
  pattern: 'JAN_APR_JUL_OCT' | 'FEB_MAY_AUG_NOV' | 'MAR_JUN_SEP_DEC'
  time: string
  every: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'
}
type PreviewAppReportsPutPeriodMonth = {
  dayOfMonth: string
  time: string
  every: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'
}
type PreviewAppReportsPutPeriodWeek = {
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
  time: string
  every: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'
}
type PreviewAppReportsPutPeriodDay = {
  time: string
  every: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'
}
type PreviewAppReportsPutPeriodHour = {
  every: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR'
  minute: bigint
}
type PreviewAppReportsPutPeriodicReport = {
  period?:
    | PreviewAppReportsPutPeriodYear
    | PreviewAppReportsPutPeriodQuarter
    | PreviewAppReportsPutPeriodMonth
    | PreviewAppReportsPutPeriodWeek
    | PreviewAppReportsPutPeriodDay
    | PreviewAppReportsPutPeriodHour
    | undefined
  active?: boolean | undefined
}
type PreviewAppReportsPutGroup = {
  code: string
  per?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'MINUTE' | undefined
}
type PreviewAppReportsPutRecordAggregation = { type: 'COUNT' }
type PreviewAppReportsPutFieldAggregation = {
  code: string
  type: 'SUM' | 'AVERAGE' | 'MAX' | 'MIN'
}
type PreviewAppReportsPutSort = {
  by: 'TOTAL' | 'GROUP1' | 'GROUP2' | 'GROUP3'
  order: 'ASC' | 'DESC'
}
type PreviewAppReportsPutReport = {
  periodicReport?: PreviewAppReportsPutPeriodicReport | undefined
  chartType:
    | 'PIE'
    | 'LINE'
    | 'SPLINE'
    | 'TABLE'
    | 'PIVOT_TABLE'
    | 'BAR'
    | 'COLUMN'
    | 'AREA'
    | 'SPLINE_AREA'
  name?: string | undefined
  index: bigint
  groups?: PreviewAppReportsPutGroup[] | undefined
  filterCond?: string | undefined
  aggregations?:
    | (PreviewAppReportsPutRecordAggregation | PreviewAppReportsPutFieldAggregation)[]
    | undefined
  sorts?: PreviewAppReportsPutSort[] | undefined
}
type PreviewAppReportsPutReportWithChartMode = {
  periodicReport?: PreviewAppReportsPutPeriodicReport | undefined
  chartType:
    | 'PIE'
    | 'LINE'
    | 'SPLINE'
    | 'TABLE'
    | 'PIVOT_TABLE'
    | 'BAR'
    | 'COLUMN'
    | 'AREA'
    | 'SPLINE_AREA'
  name?: string | undefined
  index: bigint
  groups?: PreviewAppReportsPutGroup[] | undefined
  chartMode: 'NORMAL' | 'STACKED' | 'PERCENTAGE'
  filterCond?: string | undefined
  aggregations?:
    | (PreviewAppReportsPutRecordAggregation | PreviewAppReportsPutFieldAggregation)[]
    | undefined
  sorts?: PreviewAppReportsPutSort[] | undefined
}
type PreviewAppReportsPutReportResult = { id?: bigint | undefined }
type PreviewAppSettingsGetTitleField = {
  code?: string | undefined
  selectionMode: 'AUTO' | 'MANUAL'
}
type PreviewAppSettingsGetIconPresetForm = {
  type: 'FILE' | 'PRESET'
  key:
    | 'APP1'
    | 'APP2'
    | 'APP3'
    | 'APP4'
    | 'APP5'
    | 'APP6'
    | 'APP7'
    | 'APP8'
    | 'APP9'
    | 'APP10'
    | 'APP11'
    | 'APP12'
    | 'APP13'
    | 'APP14'
    | 'APP15'
    | 'APP16'
    | 'APP17'
    | 'APP18'
    | 'APP19'
    | 'APP20'
    | 'APP21'
    | 'APP22'
    | 'APP23'
    | 'APP24'
    | 'APP25'
    | 'APP26'
    | 'APP27'
    | 'APP28'
    | 'APP29'
    | 'APP30'
    | 'APP31'
    | 'APP32'
    | 'APP33'
    | 'APP34'
    | 'APP35'
    | 'APP36'
    | 'APP37'
    | 'APP38'
    | 'APP39'
    | 'APP40'
    | 'APP41'
    | 'APP42'
    | 'APP43'
    | 'APP44'
    | 'APP45'
    | 'APP46'
    | 'APP47'
    | 'APP48'
    | 'APP49'
    | 'APP50'
    | 'APP51'
    | 'APP52'
    | 'APP53'
    | 'APP54'
    | 'APP55'
    | 'APP56'
    | 'APP57'
    | 'APP58'
    | 'APP59'
    | 'APP60'
    | 'APP61'
    | 'APP62'
    | 'APP63'
    | 'APP64'
    | 'APP65'
    | 'APP66'
    | 'APP67'
    | 'APP68'
    | 'APP69'
    | 'APP70'
    | 'APP71'
    | 'APP72'
    | 'APP73'
    | 'APP74'
    | 'APP75'
    | 'APP76'
    | 'APP77'
    | 'APP78'
    | 'APP79'
    | 'APP80'
    | 'APP81'
    | 'APP82'
    | 'APP83'
    | 'APP84'
    | 'APP85'
    | 'APP86'
    | 'APP87'
    | 'APP88'
    | 'APP89'
    | 'APP90'
}
type PreviewAppSettingsGetIconFileForm = {
  file: {
    size?: string | undefined
    name?: string | undefined
    fileKey: string
    contentType?: string | undefined
  }
  type: 'FILE' | 'PRESET'
}
type PreviewAppSettingsGetNumberPrecision = {
  roundingMode?: 'HALF_EVEN' | 'UP' | 'DOWN' | undefined
  decimalPlaces?: string | undefined
  digits?: string | undefined
}
type PreviewAppSettingsPutIconPresetForm = {
  type: 'FILE' | 'PRESET'
  key:
    | 'APP1'
    | 'APP2'
    | 'APP3'
    | 'APP4'
    | 'APP5'
    | 'APP6'
    | 'APP7'
    | 'APP8'
    | 'APP9'
    | 'APP10'
    | 'APP11'
    | 'APP12'
    | 'APP13'
    | 'APP14'
    | 'APP15'
    | 'APP16'
    | 'APP17'
    | 'APP18'
    | 'APP19'
    | 'APP20'
    | 'APP21'
    | 'APP22'
    | 'APP23'
    | 'APP24'
    | 'APP25'
    | 'APP26'
    | 'APP27'
    | 'APP28'
    | 'APP29'
    | 'APP30'
    | 'APP31'
    | 'APP32'
    | 'APP33'
    | 'APP34'
    | 'APP35'
    | 'APP36'
    | 'APP37'
    | 'APP38'
    | 'APP39'
    | 'APP40'
    | 'APP41'
    | 'APP42'
    | 'APP43'
    | 'APP44'
    | 'APP45'
    | 'APP46'
    | 'APP47'
    | 'APP48'
    | 'APP49'
    | 'APP50'
    | 'APP51'
    | 'APP52'
    | 'APP53'
    | 'APP54'
    | 'APP55'
    | 'APP56'
    | 'APP57'
    | 'APP58'
    | 'APP59'
    | 'APP60'
    | 'APP61'
    | 'APP62'
    | 'APP63'
    | 'APP64'
    | 'APP65'
    | 'APP66'
    | 'APP67'
    | 'APP68'
    | 'APP69'
    | 'APP70'
    | 'APP71'
    | 'APP72'
    | 'APP73'
    | 'APP74'
    | 'APP75'
    | 'APP76'
    | 'APP77'
    | 'APP78'
    | 'APP79'
    | 'APP80'
    | 'APP81'
    | 'APP82'
    | 'APP83'
    | 'APP84'
    | 'APP85'
    | 'APP86'
    | 'APP87'
    | 'APP88'
    | 'APP89'
    | 'APP90'
}
type PreviewAppSettingsPutIconFileForm = {
  file: {
    size?: string | undefined
    name?: string | undefined
    fileKey: string
    contentType?: string | undefined
  }
  type: 'FILE' | 'PRESET'
}
type PreviewAppStatusGetExecutableUserEntityForm = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type PreviewAppStatusGetActionForm = {
  name?: string | undefined
  executableUser?:
    | { entities?: PreviewAppStatusGetExecutableUserEntityForm[] | undefined }
    | undefined
  from?: string | undefined
  to?: string | undefined
  filterCond?: string | undefined
  type?: string | undefined
}
type PreviewAppStatusGetAssigneeEntityForm = {
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: (string | null) | undefined
        type?:
          | 'USER'
          | 'GROUP'
          | 'ORGANIZATION'
          | 'FIELD_ENTITY'
          | 'CREATOR'
          | 'CUSTOM_FIELD'
          | undefined
      }
    | undefined
}
type PreviewAppStatusGetStateForm = {
  instructions?: string | undefined
  name?: string | undefined
  index?: bigint | undefined
  assignee?:
    | {
        entities?: PreviewAppStatusGetAssigneeEntityForm[] | undefined
        type?: 'ONE' | 'ALL' | 'ANY' | undefined
      }
    | undefined
}
type PreviewAppStatusPutExecutableUserEntityForm = {
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type PreviewAppStatusPutActionForm = {
  name: string
  executableUser?: { entities: PreviewAppStatusPutExecutableUserEntityForm[] } | undefined
  from: string
  to: string
  filterCond?: string | undefined
  type?: 'PRIMARY' | 'SECONDARY' | undefined
}
type PreviewAppStatusPutAssigneeEntityForm = {
  includeSubs?: boolean | undefined
  entity: {
    code?: string | undefined
    type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | 'CREATOR' | 'CUSTOM_FIELD'
  }
}
type PreviewAppStatusPutStateForm = {
  instructions?: string | undefined
  name?: string | undefined
  index: bigint
  assignee?:
    | { entities: PreviewAppStatusPutAssigneeEntityForm[]; type: 'ONE' | 'ALL' | 'ANY' }
    | undefined
}
type PreviewAppViewsGetBuiltinListViewOutputForm = {
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  fields?: string[] | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type PreviewAppViewsGetBuiltinCalendarViewOutputForm = {
  date?: string | undefined
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  title?: string | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type PreviewAppViewsGetListViewOutputForm = {
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  fields?: string[] | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
}
type PreviewAppViewsGetCalendarViewOutputForm = {
  date?: string | undefined
  name?: string | undefined
  index?: bigint | undefined
  id?: bigint | undefined
  sort?: string | undefined
  title?: string | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
}
type PreviewAppViewsGetCustomViewOutputForm = {
  pager?: boolean | undefined
  name?: string | undefined
  index?: bigint | undefined
  html?: string | undefined
  id?: bigint | undefined
  sort?: string | undefined
  type?: 'LIST' | 'CALENDAR' | 'CUSTOM' | undefined
  filterCond?: string | undefined
  device?: 'DESKTOP' | 'ANY' | undefined
}
type PreviewAppViewsPutListViewForm = {
  name?: string | undefined
  index: bigint
  sort?: string | undefined
  fields?: string[] | undefined
  type: 'LIST' | 'CALENDAR' | 'CUSTOM'
  filterCond?: string | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type PreviewAppViewsPutCalendarViewForm = {
  date?: string | undefined
  name?: string | undefined
  index: bigint
  sort?: string | undefined
  title?: string | undefined
  type: 'LIST' | 'CALENDAR' | 'CUSTOM'
  filterCond?: string | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type PreviewAppViewsPutCustomViewForm = {
  pager?: boolean | undefined
  name?: string | undefined
  index: bigint
  html?: string | undefined
  sort?: string | undefined
  type: 'LIST' | 'CALENDAR' | 'CUSTOM'
  filterCond?: string | undefined
  device?: 'DESKTOP' | 'ANY' | undefined
  builtinType?: 'ASSIGNEE' | undefined
}
type PreviewAppViewsPutResult = { id?: bigint | undefined }
type PreviewFieldAclGetEntityRight = {
  accessibility?: 'WRITE' | 'READ' | 'NONE' | undefined
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type PreviewFieldAclGetRight = {
  code?: string | undefined
  entities?: PreviewFieldAclGetEntityRight[] | undefined
}
type PreviewFieldAclPutFieldRightEntity = {
  accessibility: 'WRITE' | 'READ' | 'NONE'
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type PreviewFieldAclPutRight = { code: string; entities: PreviewFieldAclPutFieldRightEntity[] }
type PreviewFormGetLayoutProperties = {
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type PreviewFormGetLabelProperties = {
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type PreviewFormGetBultinProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type PreviewFormGetCalcSimpleProperties = {
  noLabel?: boolean | undefined
  unit?: (string | null) | undefined
  expression?: string | undefined
  code?: string | undefined
  format?:
    | 'NUMBER'
    | 'NUMBER_DIGIT'
    | 'DATETIME'
    | 'DATE'
    | 'TIME'
    | 'HOUR_MINUTE'
    | 'DAY_HOUR_MINUTE'
    | undefined
  unitPosition?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  displayScale?: (bigint | null) | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewFormGetDateSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  defaultExpression?: (string | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetDatetimeSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  defaultExpression?: (string | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetDecimalSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  maxValue?: (bigint | null) | undefined
  defaultValue?: (string | null) | undefined
  unitPosition?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
  minValue?: (bigint | null) | undefined
  unit?: (string | null) | undefined
  unique?: boolean | undefined
  displayScale?: (bigint | null) | undefined
  digit?: boolean | undefined
}
type PreviewFormGetEditorSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetFileSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetLinkSimpleProperties = {
  noLabel?: boolean | undefined
  protocol?: 'WEB' | 'CALL' | 'MAIL' | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  minLength?: (bigint | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  maxLength?: (bigint | null) | undefined
  required?: boolean | undefined
}
type PreviewFormGetMultipleLineTextSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetMultipleSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string[] | null) | undefined
  options?: string[] | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetSingleLineTextSimpleProperties = {
  noLabel?: boolean | undefined
  expression?: string | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  minLength?: (bigint | null) | undefined
  unique?: boolean | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  maxLength?: (bigint | null) | undefined
  hideExpression?: boolean | undefined
  required?: boolean | undefined
}
type PreviewFormGetSingleSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  options?: string[] | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetTimeSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  defaultValue?: (string | null) | undefined
  defaultExpression?: (string | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetUserSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetOrganizationSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetGroupSelectSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetLookupSimpleProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  relatedApp?: (bigint | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
  required?: boolean | undefined
}
type PreviewFormGetReferenceTableLayoutProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  relatedApp?: (bigint | null) | undefined
  label?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type PreviewFormGetSpacerProperties = {
  elementId?: string | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type PreviewFormGetSubTableLayoutProperties = {
  noLabel?: boolean | undefined
  code?: string | undefined
  label?: string | undefined
  fields?:
    | (
        | PreviewFormGetLayoutProperties
        | PreviewFormGetLabelProperties
        | PreviewFormGetBultinProperties
        | PreviewFormGetCalcSimpleProperties
        | PreviewFormGetDateSimpleProperties
        | PreviewFormGetDatetimeSimpleProperties
        | PreviewFormGetDecimalSimpleProperties
        | PreviewFormGetEditorSimpleProperties
        | PreviewFormGetFileSimpleProperties
        | PreviewFormGetLinkSimpleProperties
        | PreviewFormGetMultipleLineTextSimpleProperties
        | PreviewFormGetMultipleSelectSimpleProperties
        | PreviewFormGetSingleLineTextSimpleProperties
        | PreviewFormGetSingleSelectSimpleProperties
        | PreviewFormGetTimeSimpleProperties
        | PreviewFormGetUserSelectSimpleProperties
        | PreviewFormGetOrganizationSelectSimpleProperties
        | PreviewFormGetGroupSelectSimpleProperties
        | PreviewFormGetLookupSimpleProperties
        | PreviewFormGetReferenceTableLayoutProperties
        | PreviewFormGetSubTableLayoutProperties
        | PreviewFormGetSpacerProperties
      )[]
    | undefined
  type?:
    | 'LABEL'
    | 'SPACER'
    | 'HR'
    | 'CREATED_TIME'
    | 'CREATOR'
    | 'DATE'
    | 'DATETIME'
    | 'NUMBER'
    | 'CALC'
    | 'RICH_TEXT'
    | 'FILE'
    | 'UPDATED_TIME'
    | 'MODIFIER'
    | 'CHECK_BOX'
    | 'MULTI_LINE_TEXT'
    | 'MULTI_SELECT'
    | 'RECORD_NUMBER'
    | 'RADIO_BUTTON'
    | 'SINGLE_LINE_TEXT'
    | 'DROP_DOWN'
    | 'SUBTABLE'
    | 'TIME'
    | 'USER_SELECT'
    | 'ORGANIZATION_SELECT'
    | 'GROUP_SELECT'
    | 'REFERENCE_TABLE'
    | 'LINK'
    | undefined
}
type PreviewRecordAclGetEntityRight = {
  viewable?: boolean | undefined
  editable?: boolean | undefined
  deletable?: boolean | undefined
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type PreviewRecordAclGetRight = {
  entities?: PreviewRecordAclGetEntityRight[] | undefined
  filterCond?: string | undefined
}
type PreviewRecordAclPutEntityRightForm = {
  viewable?: boolean | undefined
  editable?: boolean | undefined
  deletable?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type PreviewRecordAclPutRightForm = {
  entities: PreviewRecordAclPutEntityRightForm[]
  filterCond?: string | undefined
}
type CalcSimpleValue = { type: 'CALC'; value?: string | undefined }
type CategorySimpleValue = { type: 'CATEGORY'; value?: string[] | undefined }
type CheckBoxSimpleValue = { type: 'CHECK_BOX'; value: string[] }
type CreatedTimeSimpleValue = { type: 'CREATED_TIME'; value: string }
type CreatorSimpleValue = { type: 'CREATOR'; value: UserEntitySimpleValue }
type DateSimpleValue = { type: 'DATE'; value?: (string | null) | undefined }
type DatetimeSimpleValue = { type: 'DATETIME'; value?: (string | null) | undefined }
type DecimalSimpleValue = { type: 'NUMBER'; value?: string | undefined }
type EditorSimpleValue = { type: 'RICH_TEXT'; value?: string | undefined }
type FileSimpleValue = { type: 'FILE'; value: SingleFileSimpleValue[] }
type GroupSelectSimpleValue = { type: 'GROUP_SELECT'; value: GroupEntitySimpleValue[] }
type LinkSimpleValue = { type: 'LINK'; value?: string | undefined }
type ModifiedAtSimpleValue = { type: 'UPDATED_TIME'; value?: string | undefined }
type ModifierSimpleValue = { type: 'MODIFIER'; value: { code: string; name?: string | undefined } }
type MultipleLineTextSimpleValue = { type: 'MULTI_LINE_TEXT'; value?: string | undefined }
type MultipleSelectSimpleValue = { type: 'MULTI_SELECT'; value: string[] }
type OrganizationSelectSimpleValue = {
  type: 'ORGANIZATION_SELECT'
  value: OrganizationEntitySimpleValue[]
}
type RadioButtonSimpleValue = { type: 'RADIO_BUTTON'; value?: string | undefined }
type RawRecordIdSimpleValue = { type: '__ID__'; value?: string | undefined }
type RecordIdSimpleValue = { type: 'RECORD_NUMBER'; value?: string | undefined }
type RevisionSimpleValue = { type: '__REVISION__'; value?: string | undefined }
type SimpleRowValue = { id?: string | undefined; value?: { [x: string]: RecordObject } | undefined }
type SimpleTableValue = { type: 'SUBTABLE'; value?: SimpleRowValue[] | undefined }
type SingleLineTextSimpleValue = { type: 'SINGLE_LINE_TEXT'; value?: string | undefined }
type SingleSelectSimpleValue = { type: 'DROP_DOWN'; value?: (string | null) | undefined }
type StatusAssigneeSimpleValue = { type: 'STATUS_ASSIGNEE'; value: UserEntitySimpleValue[] }
type StatusSimpleValue = { type: 'STATUS'; value?: string | undefined }
type TimeSimpleValue = { type: 'TIME'; value?: (string | null) | undefined }
type UserSelectSimpleValue = { type: 'USER_SELECT'; value: UserEntitySimpleValue[] }
type RecordObject =
  | CalcSimpleValue
  | CategorySimpleValue
  | CheckBoxSimpleValue
  | CreatedTimeSimpleValue
  | CreatorSimpleValue
  | DateSimpleValue
  | DatetimeSimpleValue
  | DecimalSimpleValue
  | EditorSimpleValue
  | FileSimpleValue
  | GroupSelectSimpleValue
  | LinkSimpleValue
  | ModifiedAtSimpleValue
  | ModifierSimpleValue
  | MultipleLineTextSimpleValue
  | MultipleSelectSimpleValue
  | OrganizationSelectSimpleValue
  | RadioButtonSimpleValue
  | RawRecordIdSimpleValue
  | RecordIdSimpleValue
  | RevisionSimpleValue
  | SimpleTableValue
  | SingleLineTextSimpleValue
  | SingleSelectSimpleValue
  | StatusAssigneeSimpleValue
  | StatusSimpleValue
  | TimeSimpleValue
  | UserSelectSimpleValue
type RecordAclGetEntityRight = {
  viewable?: boolean | undefined
  editable?: boolean | undefined
  deletable?: boolean | undefined
  includeSubs?: boolean | undefined
  entity?:
    | {
        code?: string | undefined
        type?: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' | undefined
      }
    | undefined
}
type RecordAclGetRight = {
  entities?: RecordAclGetEntityRight[] | undefined
  filterCond?: string | undefined
}
type RecordAclPutEntityRightForm = {
  viewable?: boolean | undefined
  editable?: boolean | undefined
  deletable?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code?: string | undefined; type: 'USER' | 'GROUP' | 'ORGANIZATION' | 'FIELD_ENTITY' }
}
type RecordAclPutRightForm = {
  entities: RecordAclPutEntityRightForm[]
  filterCond?: string | undefined
}
type RecordCommentPostMentionForm = { code: string; type: 'USER' | 'ORGANIZATION' | 'GROUP' }
type RecordCommentsGetMentionOutputForm = {
  code?: string | undefined
  type?: 'USER' | 'ORGANIZATION' | 'GROUP' | undefined
}
type RecordCommentsGetCommentOutputForm = {
  createdAt?: string | undefined
  creator?: { code?: string | undefined; name?: string | undefined } | undefined
  mentions?: RecordCommentsGetMentionOutputForm[] | undefined
  id?: bigint | undefined
  text?: string | undefined
}
type RecordsPutUpdateKey = { field: string; value: string }
type RecordsPutRecordForm = {
  updateKey?: RecordsPutUpdateKey | undefined
  record?: { [x: string]: RecordWritableObject } | undefined
  id?: bigint | undefined
  revision?: bigint | undefined
}
type RecordsPutRecordBean = { id?: bigint | undefined; revision?: string | undefined }
type RecordsPutUpsertRecordBean = {
  id?: bigint | undefined
  operation?: 'INSERT' | 'UPDATE' | undefined
  revision?: string | undefined
}
type RecordsAclEvaluateGetField = { viewable?: boolean | undefined; editable?: boolean | undefined }
type RecordsAclEvaluateGetRight = {
  record?:
    | {
        viewable?: boolean | undefined
        editable?: boolean | undefined
        deletable?: boolean | undefined
      }
    | undefined
  id?: bigint | undefined
  fields?: { [x: string]: RecordsAclEvaluateGetField } | undefined
}
type RecordsStatusPutRecordsStatusPutFormRecord = {
  action: string
  id: bigint
  assignee?: string | undefined
  revision?: bigint | undefined
}
type RecordsStatusPutRecordsStatusPutOutputFormRecord = {
  id?: bigint | undefined
  revision?: string | undefined
}
type SearchPostScopeForm = {
  codes?: string[] | undefined
  scope: 'SPACE' | 'APP' | 'PEOPLE' | 'MESSAGE'
  ids?: bigint[] | undefined
}
type SearchPostQueryForm = { keywords: string[]; operator: 'AND' | 'OR' | 'NOT' }
type SearchPostField = { code?: string | undefined; label?: string | undefined }
type SearchPostHit = {
  messageComment?:
    | {
        createdAt?: string | undefined
        creator?: { code?: string | undefined; name?: string | undefined } | undefined
        recipient?: { code?: string | undefined; name?: string | undefined } | undefined
        commentId?: string | undefined
      }
    | undefined
  attachment?:
    | {
        createdAt?: (string | null) | undefined
        creator?: ({ code?: string | undefined; name?: string | undefined } | null) | undefined
        name?: string | undefined
        fileKey?: string | undefined
        attachedTo?:
          | 'RECORD'
          | 'SPACE'
          | 'THREAD'
          | 'THREAD_COMMENT'
          | 'PEOPLE_COMMENT'
          | 'MESSAGE_COMMENT'
          | undefined
      }
    | undefined
  snippets?: string[] | undefined
  record?:
    | {
        recordId?: string | undefined
        spaceName?: (string | null) | undefined
        recordTitle?: string | undefined
        createdAt?: (string | null) | undefined
        spaceId?: (string | null) | undefined
        creator?: ({ code?: string | undefined; name?: string | undefined } | null) | undefined
        matchedFields?: SearchPostField[] | undefined
        appName?: string | undefined
        appId?: string | undefined
      }
    | undefined
  threadComment?:
    | {
        spaceName?: string | undefined
        threadId?: string | undefined
        spaceId?: string | undefined
        createdAt?: string | undefined
        creator?: { code?: string | undefined; name?: string | undefined } | undefined
        replyId?: (string | null) | undefined
        commentId?: string | undefined
        threadName?: string | undefined
      }
    | undefined
  peopleComment?:
    | {
        owner?: { code?: string | undefined; name?: string | undefined } | undefined
        createdAt?: string | undefined
        creator?: { code?: string | undefined; name?: string | undefined } | undefined
        replyId?: (string | null) | undefined
        commentId?: string | undefined
      }
    | undefined
  recordComment?:
    | {
        recordId?: string | undefined
        spaceName?: (string | null) | undefined
        recordTitle?: string | undefined
        createdAt?: string | undefined
        spaceId?: (string | null) | undefined
        creator?: { code?: string | undefined; name?: string | undefined } | undefined
        appName?: string | undefined
        appId?: string | undefined
        commentId?: string | undefined
      }
    | undefined
  thread?:
    | {
        spaceName?: string | undefined
        threadId?: string | undefined
        spaceId?: string | undefined
        createdAt?: string | undefined
        creator?: { code?: string | undefined; name?: string | undefined } | undefined
        threadName?: string | undefined
      }
    | undefined
  type?:
    | 'RECORD'
    | 'RECORD_COMMENT'
    | 'SPACE'
    | 'THREAD'
    | 'THREAD_COMMENT'
    | 'PEOPLE_COMMENT'
    | 'MESSAGE_COMMENT'
    | 'ATTACHMENT'
    | undefined
  url?: string | undefined
  space?:
    | {
        spaceName?: string | undefined
        spaceId?: string | undefined
        createdAt?: string | undefined
        creator?: { code?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
}
type SpaceGetAttachedApp = {
  threadId?: string | undefined
  createdAt?: string | undefined
  creator?: { code?: string | undefined; name?: string | undefined } | undefined
  code?: string | undefined
  modifiedAt?: string | undefined
  appId?: string | undefined
  modifier?: { code?: string | undefined; name?: string | undefined } | undefined
  name?: string | undefined
  description?: string | undefined
}
type SpaceMembersGetUserBean = {
  isImplicit?: boolean | undefined
  isAdmin?: boolean | undefined
  entity?: { code?: string | undefined; type?: string | undefined } | undefined
}
type SpaceMembersGetOrganizationBean = {
  isAdmin?: boolean | undefined
  includeSubs?: boolean | undefined
  entity?: { code?: string | undefined; type?: string | undefined } | undefined
}
type SpaceMembersGetGroupBean = {
  isAdmin?: boolean | undefined
  entity?: { code?: string | undefined; type?: string | undefined } | undefined
}
type SpaceMembersPutMemberForm = {
  isAdmin?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code: string; type: 'USER' | 'GROUP' | 'ORGANIZATION' }
}
type SpaceThreadCommentPostMentionForm = { code: string; type: 'USER' | 'ORGANIZATION' | 'GROUP' }
type SpaceThreadCommentPostFileForm = { width?: string | undefined; fileKey: string }
type SpacesStatisticsGetSpaceForm = {
  createdAt?: string | undefined
  creator?: { code?: string | undefined; name?: string | undefined } | undefined
  isGuest?: boolean | undefined
  modifiedAt?: string | undefined
  memberCount?: bigint | undefined
  modifier?: { code?: string | undefined; name?: string | undefined } | undefined
  name?: string | undefined
  id?: bigint | undefined
  isPrivate?: boolean | undefined
  administratorCount?: bigint | undefined
}
type TemplateSpacePostMemberForm = {
  isAdmin?: boolean | undefined
  includeSubs?: boolean | undefined
  entity: { code: string; type: 'USER' | 'GROUP' | 'ORGANIZATION' }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/k/guest/:guestSpaceId/v1/app.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: bigint } }
            output: {
              threadId: string | null
              spaceId: string | null
              createdAt: string
              creator: { code?: string | undefined; name?: string | undefined }
              code: string
              modifiedAt: string
              appId: string
              modifier: { code?: string | undefined; name?: string | undefined }
              name: string
              description: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/acl.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: { rights: AppAclGetRight[]; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; rights: AppAclPutRight[]; revision?: bigint | undefined }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; rights: AppAclPutRight[]; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/actions.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: { actions: { [x: string]: AppActionsGetAction }; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/adminNotes.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: string } }
            output: {
              content: string
              includeInTemplateAndDuplicates?: boolean | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/customize.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              desktop?:
                | {
                    css?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                    js?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                  }
                | undefined
              scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
              mobile?:
                | {
                    css?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                    js?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                  }
                | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/form/fields.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              properties: {
                [x: string]:
                  | AppFormFieldsGetCalcFieldForm
                  | AppFormFieldsGetCategoryFieldForm
                  | AppFormFieldsGetDateFieldForm
                  | AppFormFieldsGetDatetimeFieldForm
                  | AppFormFieldsGetDecimalFieldForm
                  | AppFormFieldsGetEditorFieldForm
                  | AppFormFieldsGetFileFieldForm
                  | AppFormFieldsGetGroupFieldForm
                  | AppFormFieldsGetGroupSelectFieldForm
                  | AppFormFieldsGetLinkFieldForm
                  | AppFormFieldsGetLookupFieldForm
                  | AppFormFieldsGetModifiedAtFieldForm
                  | AppFormFieldsGetModifierFieldForm
                  | AppFormFieldsGetMultipleCheckFieldForm
                  | AppFormFieldsGetMultipleLineTextFieldForm
                  | AppFormFieldsGetMultipleSelectFieldForm
                  | AppFormFieldsGetOrganizationSelectFieldForm
                  | AppFormFieldsGetRecordIdFieldForm
                  | AppFormFieldsGetReferenceTableFieldForm
                  | AppFormFieldsGetSingleCheckFieldForm
                  | AppFormFieldsGetSingleLineTextFieldForm
                  | AppFormFieldsGetSingleSelectFieldForm
                  | AppFormFieldsGetStatusAssigneeFieldForm
                  | AppFormFieldsGetStatusFieldForm
                  | AppFormFieldsGetTableForm
                  | AppFormFieldsGetTimeFieldForm
                  | AppFormFieldsGetUserSelectFieldForm
              }
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/form/layout.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              layout: (
                | AppFormLayoutGetRow
                | AppFormLayoutGetGroupRow
                | AppFormLayoutGetSubtableRow
              )[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/move.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; space?: bigint | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; space?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/notifications/general.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              notifyToCommenter?: boolean | undefined
              notifications: AppNotificationsGeneralGetNotification[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/notifications/perRecord.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              notifications: AppNotificationsPerRecordGetNotification[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/notifications/reminder.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              timezone?: (string | null) | undefined
              notifications: AppNotificationsReminderGetNotification[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/plugins.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined }
            }
            output: {
              plugins?: AppPluginsGetPluginForm[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/reports.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              reports: { [x: string]: AppReportsGetReport | AppReportsGetReportWithChartMode }
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/settings.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enableComments: boolean
              titleField: AppSettingsGetTitleField
              icon: AppSettingsGetIconPresetForm | AppSettingsGetIconFileForm
              description: string
              enableThumbnails: boolean
              enableDuplicateRecord: boolean
              revision: string
              enableInlineRecordEditing: boolean
              enableBulkDeletion: boolean
              name: string
              theme:
                | 'WHITE'
                | 'CLIPBOARD'
                | 'BINDER'
                | 'PENCIL'
                | 'CLIPS'
                | 'RED'
                | 'GREEN'
                | 'BLUE'
                | 'YELLOW'
                | 'BLACK'
              numberPrecision: AppSettingsGetNumberPrecision
              firstMonthOfFiscalYear: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/status.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enable?: boolean | undefined
              actions?: (AppStatusGetActionForm[] | null) | undefined
              states?: ({ [x: string]: AppStatusGetStateForm } | null) | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/app/views.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              views: {
                [x: string]:
                  | AppViewsGetBuiltinListViewOutputForm
                  | AppViewsGetBuiltinCalendarViewOutputForm
                  | AppViewsGetListViewOutputForm
                  | AppViewsGetCalendarViewOutputForm
                  | AppViewsGetCustomViewOutputForm
              }
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/apps.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                codes?: string[] | undefined
                offset?: bigint | undefined
                name?: string | undefined
                limit?: bigint | undefined
                ids?: string[] | undefined
                spaceIds?: string[] | undefined
              }
            }
            output: { apps: AppsGetAppWithSpaceIdForm[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                codes?: string[] | undefined
                offset?: bigint | undefined
                name?: string | undefined
                limit?: bigint | undefined
                ids?: string[] | undefined
                spaceIds?: string[] | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/apps/statistics.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined }
            }
            output: { apps?: AppsStatisticsGetAppForm[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/bulkRequest.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { requests: BulkRequestPostRequestForm[] }
            }
            output: {
              results: (
                | BulkRequestPostRecordPostOutputForm
                | BulkRequestPostRecordPutOutputForm
                | BulkRequestPostRecordStatusPutOutputForm
                | BulkRequestPostRecordAssigneesPutOutputForm
                | BulkRequestPostRecordsDeleteOutputForm
                | BulkRequestPostRecordsPostOutputForm
                | BulkRequestPostRecordsPutOutputForm
                | BulkRequestPostRecordsStatusPutOutputForm
              )[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { requests: BulkRequestPostRequestForm[] }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/field/acl.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: { rights: FieldAclGetRight[]; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: FieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: FieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/file.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { fileKey: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { fileKey: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & { form: { file: File } }
            output: { fileKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { form: { file: File } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/form.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              properties?:
                | (
                    | FormGetLayoutProperties
                    | FormGetLabelProperties
                    | FormGetBultinProperties
                    | FormGetCalcSimpleProperties
                    | FormGetDateSimpleProperties
                    | FormGetDatetimeSimpleProperties
                    | FormGetDecimalSimpleProperties
                    | FormGetEditorSimpleProperties
                    | FormGetFileSimpleProperties
                    | FormGetLinkSimpleProperties
                    | FormGetMultipleLineTextSimpleProperties
                    | FormGetMultipleSelectSimpleProperties
                    | FormGetSingleLineTextSimpleProperties
                    | FormGetSingleSelectSimpleProperties
                    | FormGetTimeSimpleProperties
                    | FormGetUserSelectSimpleProperties
                    | FormGetOrganizationSelectSimpleProperties
                    | FormGetGroupSelectSimpleProperties
                    | FormGetLookupSimpleProperties
                    | FormGetReferenceTableLayoutProperties
                    | FormGetSubTableLayoutProperties
                    | FormGetSpacerProperties
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/guests.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { guests: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { guests: string[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { guests: GuestsPostGuestUserForm[] }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { guests: GuestsPostGuestUserForm[] }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/plugin.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { fileKey: string } }
            output: { id?: string | undefined; version?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { fileKey: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { fileKey: string; id: string } }
            output: { id?: string | undefined; version?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { fileKey: string; id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/plugin/apps.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined; id: string }
            }
            output: { apps?: PluginAppsGetAppDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined; id: string }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/plugins.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                offset?: string | undefined
                limit?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: { plugins?: PluginsGetPluginDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                offset?: string | undefined
                limit?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/plugins/required.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined }
            }
            output: { plugins?: PluginsRequiredGetPluginDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { name: string; thread?: bigint | undefined; space?: bigint | undefined }
            }
            output: { app?: string | undefined; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { name: string; thread?: bigint | undefined; space?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/acl.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: { rights?: PreviewAppAclGetRight[] | undefined; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; rights: PreviewAppAclPutRight[]; revision?: bigint | undefined }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; rights: PreviewAppAclPutRight[]; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/actions.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              actions?: { [x: string]: PreviewAppActionsGetAction } | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                actions: { [x: string]: PreviewAppActionsPutAction }
                revision?: bigint | undefined
              }
            }
            output: {
              actions?: { [x: string]: PreviewAppActionsPutActionResult } | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                actions: { [x: string]: PreviewAppActionsPutAction }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/adminNotes.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: string } }
            output: {
              content?: string | undefined
              includeInTemplateAndDuplicates?: boolean | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                content?: string | undefined
                revision?: bigint | undefined
                includeInTemplateAndDuplicates?: string | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                content?: string | undefined
                revision?: bigint | undefined
                includeInTemplateAndDuplicates?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/customize.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              desktop?:
                | {
                    css?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                    js?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                  }
                | undefined
              scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
              mobile?:
                | {
                    css?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                    js?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                desktop?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
                mobile?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                desktop?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
                mobile?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/deploy.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { apps: string[] } }
            output: { apps: PreviewAppDeployGetAppForm[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { apps: string[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { revert?: boolean | undefined; apps: PreviewAppDeployPostAppForm[] }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { revert?: boolean | undefined; apps: PreviewAppDeployPostAppForm[] }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/form/fields.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; fields: string[]; revision?: bigint | undefined }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; fields: string[]; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              properties?:
                | {
                    [x: string]:
                      | PreviewAppFormFieldsGetCalcFieldForm
                      | PreviewAppFormFieldsGetCategoryFieldForm
                      | PreviewAppFormFieldsGetDateFieldForm
                      | PreviewAppFormFieldsGetDatetimeFieldForm
                      | PreviewAppFormFieldsGetDecimalFieldForm
                      | PreviewAppFormFieldsGetEditorFieldForm
                      | PreviewAppFormFieldsGetFileFieldForm
                      | PreviewAppFormFieldsGetGroupFieldForm
                      | PreviewAppFormFieldsGetGroupSelectFieldForm
                      | PreviewAppFormFieldsGetLinkFieldForm
                      | PreviewAppFormFieldsGetLookupFieldForm
                      | PreviewAppFormFieldsGetModifiedAtFieldForm
                      | PreviewAppFormFieldsGetModifierFieldForm
                      | PreviewAppFormFieldsGetMultipleCheckFieldForm
                      | PreviewAppFormFieldsGetMultipleLineTextFieldForm
                      | PreviewAppFormFieldsGetMultipleSelectFieldForm
                      | PreviewAppFormFieldsGetOrganizationSelectFieldForm
                      | PreviewAppFormFieldsGetRecordIdFieldForm
                      | PreviewAppFormFieldsGetReferenceTableFieldForm
                      | PreviewAppFormFieldsGetSingleCheckFieldForm
                      | PreviewAppFormFieldsGetSingleLineTextFieldForm
                      | PreviewAppFormFieldsGetSingleSelectFieldForm
                      | PreviewAppFormFieldsGetStatusAssigneeFieldForm
                      | PreviewAppFormFieldsGetStatusFieldForm
                      | PreviewAppFormFieldsGetTableForm
                      | PreviewAppFormFieldsGetTimeFieldForm
                      | PreviewAppFormFieldsGetUserSelectFieldForm
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPostCalcFieldForm
                    | PreviewAppFormFieldsPostCategoryFieldForm
                    | PreviewAppFormFieldsPostDateFieldForm
                    | PreviewAppFormFieldsPostDatetimeFieldForm
                    | PreviewAppFormFieldsPostDecimalFieldForm
                    | PreviewAppFormFieldsPostEditorFieldForm
                    | PreviewAppFormFieldsPostFileFieldForm
                    | PreviewAppFormFieldsPostGroupFieldForm
                    | PreviewAppFormFieldsPostGroupSelectFieldForm
                    | PreviewAppFormFieldsPostLinkFieldForm
                    | PreviewAppFormFieldsPostLookupFieldForm
                    | PreviewAppFormFieldsPostModifiedAtFieldForm
                    | PreviewAppFormFieldsPostModifierFieldForm
                    | PreviewAppFormFieldsPostMultipleCheckFieldForm
                    | PreviewAppFormFieldsPostMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPostMultipleSelectFieldForm
                    | PreviewAppFormFieldsPostOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPostRecordIdFieldForm
                    | PreviewAppFormFieldsPostReferenceTableFieldForm
                    | PreviewAppFormFieldsPostSingleCheckFieldForm
                    | PreviewAppFormFieldsPostSingleLineTextFieldForm
                    | PreviewAppFormFieldsPostSingleSelectFieldForm
                    | PreviewAppFormFieldsPostStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPostStatusFieldForm
                    | PreviewAppFormFieldsPostTableForm
                    | PreviewAppFormFieldsPostTimeFieldForm
                    | PreviewAppFormFieldsPostUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPostCalcFieldForm
                    | PreviewAppFormFieldsPostCategoryFieldForm
                    | PreviewAppFormFieldsPostDateFieldForm
                    | PreviewAppFormFieldsPostDatetimeFieldForm
                    | PreviewAppFormFieldsPostDecimalFieldForm
                    | PreviewAppFormFieldsPostEditorFieldForm
                    | PreviewAppFormFieldsPostFileFieldForm
                    | PreviewAppFormFieldsPostGroupFieldForm
                    | PreviewAppFormFieldsPostGroupSelectFieldForm
                    | PreviewAppFormFieldsPostLinkFieldForm
                    | PreviewAppFormFieldsPostLookupFieldForm
                    | PreviewAppFormFieldsPostModifiedAtFieldForm
                    | PreviewAppFormFieldsPostModifierFieldForm
                    | PreviewAppFormFieldsPostMultipleCheckFieldForm
                    | PreviewAppFormFieldsPostMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPostMultipleSelectFieldForm
                    | PreviewAppFormFieldsPostOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPostRecordIdFieldForm
                    | PreviewAppFormFieldsPostReferenceTableFieldForm
                    | PreviewAppFormFieldsPostSingleCheckFieldForm
                    | PreviewAppFormFieldsPostSingleLineTextFieldForm
                    | PreviewAppFormFieldsPostSingleSelectFieldForm
                    | PreviewAppFormFieldsPostStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPostStatusFieldForm
                    | PreviewAppFormFieldsPostTableForm
                    | PreviewAppFormFieldsPostTimeFieldForm
                    | PreviewAppFormFieldsPostUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPutCalcFieldForm
                    | PreviewAppFormFieldsPutCategoryFieldForm
                    | PreviewAppFormFieldsPutDateFieldForm
                    | PreviewAppFormFieldsPutDatetimeFieldForm
                    | PreviewAppFormFieldsPutDecimalFieldForm
                    | PreviewAppFormFieldsPutEditorFieldForm
                    | PreviewAppFormFieldsPutFileFieldForm
                    | PreviewAppFormFieldsPutGroupFieldForm
                    | PreviewAppFormFieldsPutGroupSelectFieldForm
                    | PreviewAppFormFieldsPutLinkFieldForm
                    | PreviewAppFormFieldsPutLookupFieldForm
                    | PreviewAppFormFieldsPutModifiedAtFieldForm
                    | PreviewAppFormFieldsPutModifierFieldForm
                    | PreviewAppFormFieldsPutMultipleCheckFieldForm
                    | PreviewAppFormFieldsPutMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPutMultipleSelectFieldForm
                    | PreviewAppFormFieldsPutOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPutRecordIdFieldForm
                    | PreviewAppFormFieldsPutReferenceTableFieldForm
                    | PreviewAppFormFieldsPutSingleCheckFieldForm
                    | PreviewAppFormFieldsPutSingleLineTextFieldForm
                    | PreviewAppFormFieldsPutSingleSelectFieldForm
                    | PreviewAppFormFieldsPutStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPutStatusFieldForm
                    | PreviewAppFormFieldsPutTableForm
                    | PreviewAppFormFieldsPutTimeFieldForm
                    | PreviewAppFormFieldsPutUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPutCalcFieldForm
                    | PreviewAppFormFieldsPutCategoryFieldForm
                    | PreviewAppFormFieldsPutDateFieldForm
                    | PreviewAppFormFieldsPutDatetimeFieldForm
                    | PreviewAppFormFieldsPutDecimalFieldForm
                    | PreviewAppFormFieldsPutEditorFieldForm
                    | PreviewAppFormFieldsPutFileFieldForm
                    | PreviewAppFormFieldsPutGroupFieldForm
                    | PreviewAppFormFieldsPutGroupSelectFieldForm
                    | PreviewAppFormFieldsPutLinkFieldForm
                    | PreviewAppFormFieldsPutLookupFieldForm
                    | PreviewAppFormFieldsPutModifiedAtFieldForm
                    | PreviewAppFormFieldsPutModifierFieldForm
                    | PreviewAppFormFieldsPutMultipleCheckFieldForm
                    | PreviewAppFormFieldsPutMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPutMultipleSelectFieldForm
                    | PreviewAppFormFieldsPutOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPutRecordIdFieldForm
                    | PreviewAppFormFieldsPutReferenceTableFieldForm
                    | PreviewAppFormFieldsPutSingleCheckFieldForm
                    | PreviewAppFormFieldsPutSingleLineTextFieldForm
                    | PreviewAppFormFieldsPutSingleSelectFieldForm
                    | PreviewAppFormFieldsPutStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPutStatusFieldForm
                    | PreviewAppFormFieldsPutTableForm
                    | PreviewAppFormFieldsPutTimeFieldForm
                    | PreviewAppFormFieldsPutUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/form/layout.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              layout?:
                | (
                    | PreviewAppFormLayoutGetRow
                    | PreviewAppFormLayoutGetGroupRow
                    | PreviewAppFormLayoutGetSubtableRow
                  )[]
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                layout: (
                  | PreviewAppFormLayoutPutRow
                  | PreviewAppFormLayoutPutGroupRow
                  | PreviewAppFormLayoutPutSubtableRow
                )[]
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                layout: (
                  | PreviewAppFormLayoutPutRow
                  | PreviewAppFormLayoutPutGroupRow
                  | PreviewAppFormLayoutPutSubtableRow
                )[]
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/notifications/general.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              notifyToCommenter?: boolean | undefined
              notifications?: PreviewAppNotificationsGeneralGetNotification[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                notifyToCommenter?: boolean | undefined
                notifications?: PreviewAppNotificationsGeneralPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                notifyToCommenter?: boolean | undefined
                notifications?: PreviewAppNotificationsGeneralPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/notifications/perRecord.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              notifications?: PreviewAppNotificationsPerRecordGetNotification[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                notifications: PreviewAppNotificationsPerRecordPutNotification[]
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                notifications: PreviewAppNotificationsPerRecordPutNotification[]
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/notifications/reminder.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              timezone?: (string | null) | undefined
              notifications?: PreviewAppNotificationsReminderGetNotification[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                timezone?: string | undefined
                notifications?: PreviewAppNotificationsReminderPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                timezone?: string | undefined
                notifications?: PreviewAppNotificationsReminderPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/plugins.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined }
            }
            output: {
              plugins?: PreviewAppPluginsGetPluginForm[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; ids: string[]; revision?: bigint | undefined }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; ids: string[]; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/reports.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              reports?:
                | {
                    [x: string]:
                      | PreviewAppReportsGetReport
                      | PreviewAppReportsGetReportWithChartMode
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                reports: {
                  [x: string]: PreviewAppReportsPutReport | PreviewAppReportsPutReportWithChartMode
                }
                revision?: bigint | undefined
              }
            }
            output: {
              reports?: { [x: string]: PreviewAppReportsPutReportResult } | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                reports: {
                  [x: string]: PreviewAppReportsPutReport | PreviewAppReportsPutReportWithChartMode
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/settings.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enableComments?: boolean | undefined
              titleField?: PreviewAppSettingsGetTitleField | undefined
              icon?:
                | PreviewAppSettingsGetIconPresetForm
                | PreviewAppSettingsGetIconFileForm
                | undefined
              description?: string | undefined
              enableThumbnails?: boolean | undefined
              enableDuplicateRecord?: boolean | undefined
              revision?: string | undefined
              enableInlineRecordEditing?: boolean | undefined
              enableBulkDeletion?: boolean | undefined
              name?: string | undefined
              theme?:
                | 'WHITE'
                | 'CLIPBOARD'
                | 'BINDER'
                | 'PENCIL'
                | 'CLIPS'
                | 'RED'
                | 'GREEN'
                | 'BLUE'
                | 'YELLOW'
                | 'BLACK'
                | undefined
              numberPrecision?: PreviewAppSettingsGetNumberPrecision | undefined
              firstMonthOfFiscalYear?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                enableComments?: string | undefined
                titleField?:
                  | { code?: string | undefined; selectionMode: 'AUTO' | 'MANUAL' }
                  | undefined
                icon?:
                  | PreviewAppSettingsPutIconPresetForm
                  | PreviewAppSettingsPutIconFileForm
                  | undefined
                description?: string | undefined
                enableThumbnails?: string | undefined
                enableDuplicateRecord?: string | undefined
                revision?: bigint | undefined
                enableInlineRecordEditing?: string | undefined
                enableBulkDeletion?: string | undefined
                name?: string | undefined
                theme?:
                  | 'WHITE'
                  | 'CLIPBOARD'
                  | 'BINDER'
                  | 'PENCIL'
                  | 'CLIPS'
                  | 'RED'
                  | 'GREEN'
                  | 'BLUE'
                  | 'YELLOW'
                  | 'BLACK'
                  | undefined
                numberPrecision?:
                  | {
                      roundingMode?: 'HALF_EVEN' | 'UP' | 'DOWN' | undefined
                      decimalPlaces?: number | undefined
                      digits?: number | undefined
                    }
                  | undefined
                firstMonthOfFiscalYear?: string | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                enableComments?: string | undefined
                titleField?:
                  | { code?: string | undefined; selectionMode: 'AUTO' | 'MANUAL' }
                  | undefined
                icon?:
                  | PreviewAppSettingsPutIconPresetForm
                  | PreviewAppSettingsPutIconFileForm
                  | undefined
                description?: string | undefined
                enableThumbnails?: string | undefined
                enableDuplicateRecord?: string | undefined
                revision?: bigint | undefined
                enableInlineRecordEditing?: string | undefined
                enableBulkDeletion?: string | undefined
                name?: string | undefined
                theme?:
                  | 'WHITE'
                  | 'CLIPBOARD'
                  | 'BINDER'
                  | 'PENCIL'
                  | 'CLIPS'
                  | 'RED'
                  | 'GREEN'
                  | 'BLUE'
                  | 'YELLOW'
                  | 'BLACK'
                  | undefined
                numberPrecision?:
                  | {
                      roundingMode?: 'HALF_EVEN' | 'UP' | 'DOWN' | undefined
                      decimalPlaces?: number | undefined
                      digits?: number | undefined
                    }
                  | undefined
                firstMonthOfFiscalYear?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/status.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enable?: boolean | undefined
              actions?: (PreviewAppStatusGetActionForm[] | null) | undefined
              states?: ({ [x: string]: PreviewAppStatusGetStateForm } | null) | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                enable?: boolean | undefined
                actions?: PreviewAppStatusPutActionForm[] | undefined
                revision?: bigint | undefined
                states?: { [x: string]: PreviewAppStatusPutStateForm } | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                enable?: boolean | undefined
                actions?: PreviewAppStatusPutActionForm[] | undefined
                revision?: bigint | undefined
                states?: { [x: string]: PreviewAppStatusPutStateForm } | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/app/views.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              views?:
                | {
                    [x: string]:
                      | PreviewAppViewsGetBuiltinListViewOutputForm
                      | PreviewAppViewsGetBuiltinCalendarViewOutputForm
                      | PreviewAppViewsGetListViewOutputForm
                      | PreviewAppViewsGetCalendarViewOutputForm
                      | PreviewAppViewsGetCustomViewOutputForm
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                views: {
                  [x: string]:
                    | PreviewAppViewsPutListViewForm
                    | PreviewAppViewsPutCalendarViewForm
                    | PreviewAppViewsPutCustomViewForm
                }
                revision?: bigint | undefined
              }
            }
            output: {
              views?: { [x: string]: PreviewAppViewsPutResult } | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                views: {
                  [x: string]:
                    | PreviewAppViewsPutListViewForm
                    | PreviewAppViewsPutCalendarViewForm
                    | PreviewAppViewsPutCustomViewForm
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/field/acl.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              rights?: PreviewFieldAclGetRight[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: PreviewFieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: PreviewFieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/form.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: {
              properties?:
                | (
                    | PreviewFormGetLayoutProperties
                    | PreviewFormGetLabelProperties
                    | PreviewFormGetBultinProperties
                    | PreviewFormGetCalcSimpleProperties
                    | PreviewFormGetDateSimpleProperties
                    | PreviewFormGetDatetimeSimpleProperties
                    | PreviewFormGetDecimalSimpleProperties
                    | PreviewFormGetEditorSimpleProperties
                    | PreviewFormGetFileSimpleProperties
                    | PreviewFormGetLinkSimpleProperties
                    | PreviewFormGetMultipleLineTextSimpleProperties
                    | PreviewFormGetMultipleSelectSimpleProperties
                    | PreviewFormGetSingleLineTextSimpleProperties
                    | PreviewFormGetSingleSelectSimpleProperties
                    | PreviewFormGetTimeSimpleProperties
                    | PreviewFormGetUserSelectSimpleProperties
                    | PreviewFormGetOrganizationSelectSimpleProperties
                    | PreviewFormGetGroupSelectSimpleProperties
                    | PreviewFormGetLookupSimpleProperties
                    | PreviewFormGetReferenceTableLayoutProperties
                    | PreviewFormGetSubTableLayoutProperties
                    | PreviewFormGetSpacerProperties
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/preview/record/acl.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              rights?: PreviewRecordAclGetRight[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: PreviewRecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: PreviewRecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/record.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint; id: bigint } }
            output: { record: { [x: string]: RecordObject } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint; id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; record: { [x: string]: RecordWritableObject } }
            }
            output: { id: string; revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; record: { [x: string]: RecordWritableObject } }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                updateKey?: { field: string; value: string } | undefined
                record?: { [x: string]: RecordWritableObject } | undefined
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                updateKey?: { field: string; value: string } | undefined
                record?: { [x: string]: RecordWritableObject } | undefined
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/record/acl.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: { rights: RecordAclGetRight[]; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: RecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app?: bigint | undefined
                rights: RecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/record/assignees.json': {
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; assignees: string[]; id: bigint; revision?: bigint | undefined }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; assignees: string[]; id: bigint; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/record/comment.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; record: bigint; comment: bigint }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; record: bigint; comment: bigint }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                record: bigint
                comment: { mentions?: RecordCommentPostMentionForm[] | undefined; text: string }
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                record: bigint
                comment: { mentions?: RecordCommentPostMentionForm[] | undefined; text: string }
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/record/comments.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                app: bigint
                offset?: bigint | undefined
                record: bigint
                limit?: bigint | undefined
                order?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              newer: boolean
              comments: RecordCommentsGetCommentOutputForm[]
              older: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                app: bigint
                offset?: bigint | undefined
                record: bigint
                limit?: bigint | undefined
                order?: 'ASC' | 'DESC' | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/record/status.json': {
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                action: string
                id: bigint
                assignee?: string | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                action: string
                id: bigint
                assignee?: string | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/records.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; ids: bigint[]; revisions?: bigint[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; ids: bigint[]; revisions?: bigint[] | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                app: bigint
                query?: string | undefined
                fields?: string[] | undefined
                totalCount?: string | undefined
              }
            }
            output: {
              records: { [x: string]: RecordObject }[]
              totalCount?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: {
                app: bigint
                query?: string | undefined
                fields?: string[] | undefined
                totalCount?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; records: { [x: string]: RecordWritableObject }[] }
            }
            output: { ids: string[]; revisions: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; records: { [x: string]: RecordWritableObject }[] }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; records: RecordsPutRecordForm[]; upsert?: boolean | undefined }
            }
            output: { records: RecordsPutRecordBean[] | RecordsPutUpsertRecordBean[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; records: RecordsPutRecordForm[]; upsert?: boolean | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/records/acl/evaluate.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint; ids: string[] } }
            output: { rights?: RecordsAclEvaluateGetRight[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { app: bigint; ids: string[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/records/cursor.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: string } }
            output: { next: boolean; records: { [x: string]: RecordObject }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                size?: bigint | undefined
                query?: string | undefined
                fields?: string[] | undefined
              }
            }
            output: { id: string; totalCount: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                app: bigint
                size?: bigint | undefined
                query?: string | undefined
                fields?: string[] | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/records/status.json': {
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; records: RecordsStatusPutRecordsStatusPutFormRecord[] }
            }
            output: { records?: RecordsStatusPutRecordsStatusPutOutputFormRecord[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { app: bigint; records: RecordsStatusPutRecordsStatusPutFormRecord[] }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/search.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                types?:
                  | (
                      | 'RECORD'
                      | 'RECORD_COMMENT'
                      | 'SPACE'
                      | 'THREAD'
                      | 'THREAD_COMMENT'
                      | 'PEOPLE_COMMENT'
                      | 'MESSAGE_COMMENT'
                      | 'ATTACHMENT'
                    )[]
                  | undefined
                excludeScopes?: SearchPostScopeForm[] | undefined
                creators?: string[] | undefined
                includeSynonyms?: boolean | undefined
                query: SearchPostQueryForm[]
                limit?: bigint | undefined
                scopes?: SearchPostScopeForm[] | undefined
                createdBefore?: string | undefined
                sort?:
                  | {
                      by?: 'RELEVANCE' | 'CREATED_AT' | undefined
                      order?: 'ASC' | 'DESC' | undefined
                    }
                  | undefined
                pageToken?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: {
              hits?: SearchPostHit[] | undefined
              nextPageToken?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                types?:
                  | (
                      | 'RECORD'
                      | 'RECORD_COMMENT'
                      | 'SPACE'
                      | 'THREAD'
                      | 'THREAD_COMMENT'
                      | 'PEOPLE_COMMENT'
                      | 'MESSAGE_COMMENT'
                      | 'ATTACHMENT'
                    )[]
                  | undefined
                excludeScopes?: SearchPostScopeForm[] | undefined
                creators?: string[] | undefined
                includeSynonyms?: boolean | undefined
                query: SearchPostQueryForm[]
                limit?: bigint | undefined
                scopes?: SearchPostScopeForm[] | undefined
                createdBefore?: string | undefined
                sort?:
                  | {
                      by?: 'RELEVANCE' | 'CREATED_AT' | undefined
                      order?: 'ASC' | 'DESC' | undefined
                    }
                  | undefined
                pageToken?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/space.json': {
      $delete:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: bigint } }
            output: {
              coverKey?: string | undefined
              creator?: { code?: string | undefined; name?: string | undefined } | undefined
              isGuest?: boolean | undefined
              modifier?: { code?: string | undefined; name?: string | undefined } | undefined
              memberCount?: string | undefined
              attachedApps?: SpaceGetAttachedApp[] | undefined
              isPrivate?: boolean | undefined
              body?: (string | null) | undefined
              showAppList?: (boolean | null) | undefined
              coverUrl?: string | undefined
              coverType?: 'BLOB' | 'PRESET' | undefined
              fixedMember?: boolean | undefined
              permissions?: { createApp?: 'EVERYONE' | 'ADMIN' | undefined } | undefined
              name?: string | undefined
              useMultiThread?: boolean | undefined
              showMemberList?: (boolean | null) | undefined
              showRelatedLinkList?: (boolean | null) | undefined
              id?: string | undefined
              showAnnouncement?: (boolean | null) | undefined
              showThreadList?: (boolean | null) | undefined
              defaultThread?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                fixedMember?: boolean | undefined
                permissions?: { createApp?: 'EVERYONE' | 'ADMIN' | undefined } | undefined
                name?: string | undefined
                useMultiThread?: boolean | undefined
                showMemberList?: boolean | undefined
                showRelatedLinkList?: boolean | undefined
                id: bigint
                isPrivate?: boolean | undefined
                showAnnouncement?: boolean | undefined
                showThreadList?: boolean | undefined
                showAppList?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                fixedMember?: boolean | undefined
                permissions?: { createApp?: 'EVERYONE' | 'ADMIN' | undefined } | undefined
                name?: string | undefined
                useMultiThread?: boolean | undefined
                showMemberList?: boolean | undefined
                showRelatedLinkList?: boolean | undefined
                id: bigint
                isPrivate?: boolean | undefined
                showAnnouncement?: boolean | undefined
                showThreadList?: boolean | undefined
                showAppList?: boolean | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/space/body.json': {
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: bigint; body: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { id: bigint; body: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/space/guests.json': {
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { guests: string[]; id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { guests: string[]; id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/space/members.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: bigint } }
            output: {
              members?:
                | (
                    | SpaceMembersGetUserBean
                    | SpaceMembersGetOrganizationBean
                    | SpaceMembersGetGroupBean
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { query: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { members?: SpaceMembersPutMemberForm[] | undefined; id: bigint }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { members?: SpaceMembersPutMemberForm[] | undefined; id: bigint }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/space/thread.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { name: string; space: bigint } }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & { json: { name: string; space: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { name?: string | undefined; id: bigint; body?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: { name?: string | undefined; id: bigint; body?: string | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/space/thread/comment.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                comment: {
                  mentions?: SpaceThreadCommentPostMentionForm[] | undefined
                  files?: SpaceThreadCommentPostFileForm[] | undefined
                  text?: string | undefined
                }
                thread: bigint
                space: bigint
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                comment: {
                  mentions?: SpaceThreadCommentPostMentionForm[] | undefined
                  files?: SpaceThreadCommentPostFileForm[] | undefined
                  text?: string | undefined
                }
                thread: bigint
                space: bigint
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/spaces/statistics.json': {
      $get:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined }
            }
            output: { spaces?: SpacesStatisticsGetSpaceForm[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              query: { offset?: string | undefined; limit?: string | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/:guestSpaceId/v1/template/space.json': {
      $post:
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                fixedMember?: boolean | undefined
                isGuest?: boolean | undefined
                members?: TemplateSpacePostMemberForm[] | undefined
                name: string
                id: bigint
                isPrivate?: boolean | undefined
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestSpaceId: bigint } } & {
              json: {
                fixedMember?: boolean | undefined
                isGuest?: boolean | undefined
                members?: TemplateSpacePostMemberForm[] | undefined
                name: string
                id: bigint
                isPrivate?: boolean | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/guest/v1/search.json': {
      $post:
        | {
            input: {
              json: {
                types?:
                  | (
                      | 'RECORD'
                      | 'RECORD_COMMENT'
                      | 'SPACE'
                      | 'THREAD'
                      | 'THREAD_COMMENT'
                      | 'PEOPLE_COMMENT'
                      | 'MESSAGE_COMMENT'
                      | 'ATTACHMENT'
                    )[]
                  | undefined
                excludeScopes?: SearchPostScopeForm[] | undefined
                creators?: string[] | undefined
                includeSynonyms?: boolean | undefined
                query: SearchPostQueryForm[]
                limit?: bigint | undefined
                scopes?: SearchPostScopeForm[] | undefined
                createdBefore?: string | undefined
                sort?:
                  | {
                      by?: 'RELEVANCE' | 'CREATED_AT' | undefined
                      order?: 'ASC' | 'DESC' | undefined
                    }
                  | undefined
                pageToken?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: {
              hits?: SearchPostHit[] | undefined
              nextPageToken?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                types?:
                  | (
                      | 'RECORD'
                      | 'RECORD_COMMENT'
                      | 'SPACE'
                      | 'THREAD'
                      | 'THREAD_COMMENT'
                      | 'PEOPLE_COMMENT'
                      | 'MESSAGE_COMMENT'
                      | 'ATTACHMENT'
                    )[]
                  | undefined
                excludeScopes?: SearchPostScopeForm[] | undefined
                creators?: string[] | undefined
                includeSynonyms?: boolean | undefined
                query: SearchPostQueryForm[]
                limit?: bigint | undefined
                scopes?: SearchPostScopeForm[] | undefined
                createdBefore?: string | undefined
                sort?:
                  | {
                      by?: 'RELEVANCE' | 'CREATED_AT' | undefined
                      order?: 'ASC' | 'DESC' | undefined
                    }
                  | undefined
                pageToken?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app.json': {
      $get:
        | {
            input: { query: { id: bigint } }
            output: {
              threadId: string | null
              spaceId: string | null
              createdAt: string
              creator: { code?: string | undefined; name?: string | undefined }
              code: string
              modifiedAt: string
              appId: string
              modifier: { code?: string | undefined; name?: string | undefined }
              name: string
              description: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/acl.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: { rights: AppAclGetRight[]; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: { app: bigint; rights: AppAclPutRight[]; revision?: bigint | undefined }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { app: bigint; rights: AppAclPutRight[]; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/actions.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: { actions: { [x: string]: AppActionsGetAction }; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/adminNotes.json': {
      $get:
        | {
            input: { query: { app: string } }
            output: {
              content: string
              includeInTemplateAndDuplicates?: boolean | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/customize.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              desktop?:
                | {
                    css?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                    js?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                  }
                | undefined
              scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
              mobile?:
                | {
                    css?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                    js?:
                      | (AppCustomizeGetUrlContentForm | AppCustomizeGetFileContentForm)[]
                      | undefined
                  }
                | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/form/fields.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              properties: {
                [x: string]:
                  | AppFormFieldsGetCalcFieldForm
                  | AppFormFieldsGetCategoryFieldForm
                  | AppFormFieldsGetDateFieldForm
                  | AppFormFieldsGetDatetimeFieldForm
                  | AppFormFieldsGetDecimalFieldForm
                  | AppFormFieldsGetEditorFieldForm
                  | AppFormFieldsGetFileFieldForm
                  | AppFormFieldsGetGroupFieldForm
                  | AppFormFieldsGetGroupSelectFieldForm
                  | AppFormFieldsGetLinkFieldForm
                  | AppFormFieldsGetLookupFieldForm
                  | AppFormFieldsGetModifiedAtFieldForm
                  | AppFormFieldsGetModifierFieldForm
                  | AppFormFieldsGetMultipleCheckFieldForm
                  | AppFormFieldsGetMultipleLineTextFieldForm
                  | AppFormFieldsGetMultipleSelectFieldForm
                  | AppFormFieldsGetOrganizationSelectFieldForm
                  | AppFormFieldsGetRecordIdFieldForm
                  | AppFormFieldsGetReferenceTableFieldForm
                  | AppFormFieldsGetSingleCheckFieldForm
                  | AppFormFieldsGetSingleLineTextFieldForm
                  | AppFormFieldsGetSingleSelectFieldForm
                  | AppFormFieldsGetStatusAssigneeFieldForm
                  | AppFormFieldsGetStatusFieldForm
                  | AppFormFieldsGetTableForm
                  | AppFormFieldsGetTimeFieldForm
                  | AppFormFieldsGetUserSelectFieldForm
              }
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/form/layout.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              layout: (
                | AppFormLayoutGetRow
                | AppFormLayoutGetGroupRow
                | AppFormLayoutGetSubtableRow
              )[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/move.json': {
      $post:
        | {
            input: { json: { app: bigint; space?: bigint | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; space?: bigint | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/notifications/general.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              notifyToCommenter?: boolean | undefined
              notifications: AppNotificationsGeneralGetNotification[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/notifications/perRecord.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              notifications: AppNotificationsPerRecordGetNotification[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/notifications/reminder.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              timezone?: (string | null) | undefined
              notifications: AppNotificationsReminderGetNotification[]
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/plugins.json': {
      $get:
        | {
            input: { query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined } }
            output: {
              plugins?: AppPluginsGetPluginForm[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/reports.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              reports: { [x: string]: AppReportsGetReport | AppReportsGetReportWithChartMode }
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/settings.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enableComments: boolean
              titleField: AppSettingsGetTitleField
              icon: AppSettingsGetIconPresetForm | AppSettingsGetIconFileForm
              description: string
              enableThumbnails: boolean
              enableDuplicateRecord: boolean
              revision: string
              enableInlineRecordEditing: boolean
              enableBulkDeletion: boolean
              name: string
              theme:
                | 'WHITE'
                | 'CLIPBOARD'
                | 'BINDER'
                | 'PENCIL'
                | 'CLIPS'
                | 'RED'
                | 'GREEN'
                | 'BLUE'
                | 'YELLOW'
                | 'BLACK'
              numberPrecision: AppSettingsGetNumberPrecision
              firstMonthOfFiscalYear: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/status.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enable?: boolean | undefined
              actions?: (AppStatusGetActionForm[] | null) | undefined
              states?: ({ [x: string]: AppStatusGetStateForm } | null) | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/app/views.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              views: {
                [x: string]:
                  | AppViewsGetBuiltinListViewOutputForm
                  | AppViewsGetBuiltinCalendarViewOutputForm
                  | AppViewsGetListViewOutputForm
                  | AppViewsGetCalendarViewOutputForm
                  | AppViewsGetCustomViewOutputForm
              }
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/apps.json': {
      $get:
        | {
            input: {
              query: {
                codes?: string[] | undefined
                offset?: bigint | undefined
                name?: string | undefined
                limit?: bigint | undefined
                ids?: string[] | undefined
                spaceIds?: string[] | undefined
              }
            }
            output: { apps: AppsGetAppWithSpaceIdForm[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                codes?: string[] | undefined
                offset?: bigint | undefined
                name?: string | undefined
                limit?: bigint | undefined
                ids?: string[] | undefined
                spaceIds?: string[] | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/apps/statistics.json': {
      $get:
        | {
            input: { query: { offset?: string | undefined; limit?: string | undefined } }
            output: { apps?: AppsStatisticsGetAppForm[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: string | undefined; limit?: string | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/bulkRequest.json': {
      $post:
        | {
            input: { json: { requests: BulkRequestPostRequestForm[] } }
            output: {
              results: (
                | BulkRequestPostRecordPostOutputForm
                | BulkRequestPostRecordPutOutputForm
                | BulkRequestPostRecordStatusPutOutputForm
                | BulkRequestPostRecordAssigneesPutOutputForm
                | BulkRequestPostRecordsDeleteOutputForm
                | BulkRequestPostRecordsPostOutputForm
                | BulkRequestPostRecordsPutOutputForm
                | BulkRequestPostRecordsStatusPutOutputForm
              )[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { requests: BulkRequestPostRequestForm[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/field/acl.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: { rights: FieldAclGetRight[]; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: FieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: FieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/file.json': {
      $get:
        | { input: { query: { fileKey: string } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { query: { fileKey: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { form: { file: File } }
            output: { fileKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file: File } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/form.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              properties?:
                | (
                    | FormGetLayoutProperties
                    | FormGetLabelProperties
                    | FormGetBultinProperties
                    | FormGetCalcSimpleProperties
                    | FormGetDateSimpleProperties
                    | FormGetDatetimeSimpleProperties
                    | FormGetDecimalSimpleProperties
                    | FormGetEditorSimpleProperties
                    | FormGetFileSimpleProperties
                    | FormGetLinkSimpleProperties
                    | FormGetMultipleLineTextSimpleProperties
                    | FormGetMultipleSelectSimpleProperties
                    | FormGetSingleLineTextSimpleProperties
                    | FormGetSingleSelectSimpleProperties
                    | FormGetTimeSimpleProperties
                    | FormGetUserSelectSimpleProperties
                    | FormGetOrganizationSelectSimpleProperties
                    | FormGetGroupSelectSimpleProperties
                    | FormGetLookupSimpleProperties
                    | FormGetReferenceTableLayoutProperties
                    | FormGetSubTableLayoutProperties
                    | FormGetSpacerProperties
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/guests.json': {
      $delete:
        | {
            input: { json: { guests: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { guests: string[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { guests: GuestsPostGuestUserForm[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { guests: GuestsPostGuestUserForm[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/plugin.json': {
      $delete:
        | {
            input: { json: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { fileKey: string } }
            output: { id?: string | undefined; version?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { fileKey: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: { fileKey: string; id: string } }
            output: { id?: string | undefined; version?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { fileKey: string; id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/plugin/apps.json': {
      $get:
        | {
            input: {
              query: { offset?: string | undefined; limit?: string | undefined; id: string }
            }
            output: { apps?: PluginAppsGetAppDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { offset?: string | undefined; limit?: string | undefined; id: string }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/plugins.json': {
      $get:
        | {
            input: {
              query: {
                offset?: string | undefined
                limit?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: { plugins?: PluginsGetPluginDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: string | undefined
                limit?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/plugins/required.json': {
      $get:
        | {
            input: { query: { offset?: string | undefined; limit?: string | undefined } }
            output: { plugins?: PluginsRequiredGetPluginDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: string | undefined; limit?: string | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app.json': {
      $post:
        | {
            input: {
              json: { name: string; thread?: bigint | undefined; space?: bigint | undefined }
            }
            output: { app?: string | undefined; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { name: string; thread?: bigint | undefined; space?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/acl.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: { rights?: PreviewAppAclGetRight[] | undefined; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: { app: bigint; rights: PreviewAppAclPutRight[]; revision?: bigint | undefined }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { app: bigint; rights: PreviewAppAclPutRight[]; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/actions.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              actions?: { [x: string]: PreviewAppActionsGetAction } | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                actions: { [x: string]: PreviewAppActionsPutAction }
                revision?: bigint | undefined
              }
            }
            output: {
              actions?: { [x: string]: PreviewAppActionsPutActionResult } | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                actions: { [x: string]: PreviewAppActionsPutAction }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/adminNotes.json': {
      $get:
        | {
            input: { query: { app: string } }
            output: {
              content?: string | undefined
              includeInTemplateAndDuplicates?: boolean | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                content?: string | undefined
                revision?: bigint | undefined
                includeInTemplateAndDuplicates?: string | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                content?: string | undefined
                revision?: bigint | undefined
                includeInTemplateAndDuplicates?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/customize.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              desktop?:
                | {
                    css?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                    js?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                  }
                | undefined
              scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
              mobile?:
                | {
                    css?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                    js?:
                      | (
                          | PreviewAppCustomizeGetUrlContentForm
                          | PreviewAppCustomizeGetFileContentForm
                        )[]
                      | undefined
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                desktop?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
                mobile?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                desktop?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                scope?: 'ALL' | 'ADMIN' | 'NONE' | undefined
                mobile?:
                  | {
                      css?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                      js?:
                        | (
                            | PreviewAppCustomizePutUrlContentForm
                            | PreviewAppCustomizePutFileContentForm
                          )[]
                        | undefined
                    }
                  | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/deploy.json': {
      $get:
        | {
            input: { query: { apps: string[] } }
            output: { apps: PreviewAppDeployGetAppForm[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apps: string[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { revert?: boolean | undefined; apps: PreviewAppDeployPostAppForm[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { revert?: boolean | undefined; apps: PreviewAppDeployPostAppForm[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/form/fields.json': {
      $delete:
        | {
            input: { json: { app: bigint; fields: string[]; revision?: bigint | undefined } }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; fields: string[]; revision?: bigint | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              properties?:
                | {
                    [x: string]:
                      | PreviewAppFormFieldsGetCalcFieldForm
                      | PreviewAppFormFieldsGetCategoryFieldForm
                      | PreviewAppFormFieldsGetDateFieldForm
                      | PreviewAppFormFieldsGetDatetimeFieldForm
                      | PreviewAppFormFieldsGetDecimalFieldForm
                      | PreviewAppFormFieldsGetEditorFieldForm
                      | PreviewAppFormFieldsGetFileFieldForm
                      | PreviewAppFormFieldsGetGroupFieldForm
                      | PreviewAppFormFieldsGetGroupSelectFieldForm
                      | PreviewAppFormFieldsGetLinkFieldForm
                      | PreviewAppFormFieldsGetLookupFieldForm
                      | PreviewAppFormFieldsGetModifiedAtFieldForm
                      | PreviewAppFormFieldsGetModifierFieldForm
                      | PreviewAppFormFieldsGetMultipleCheckFieldForm
                      | PreviewAppFormFieldsGetMultipleLineTextFieldForm
                      | PreviewAppFormFieldsGetMultipleSelectFieldForm
                      | PreviewAppFormFieldsGetOrganizationSelectFieldForm
                      | PreviewAppFormFieldsGetRecordIdFieldForm
                      | PreviewAppFormFieldsGetReferenceTableFieldForm
                      | PreviewAppFormFieldsGetSingleCheckFieldForm
                      | PreviewAppFormFieldsGetSingleLineTextFieldForm
                      | PreviewAppFormFieldsGetSingleSelectFieldForm
                      | PreviewAppFormFieldsGetStatusAssigneeFieldForm
                      | PreviewAppFormFieldsGetStatusFieldForm
                      | PreviewAppFormFieldsGetTableForm
                      | PreviewAppFormFieldsGetTimeFieldForm
                      | PreviewAppFormFieldsGetUserSelectFieldForm
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPostCalcFieldForm
                    | PreviewAppFormFieldsPostCategoryFieldForm
                    | PreviewAppFormFieldsPostDateFieldForm
                    | PreviewAppFormFieldsPostDatetimeFieldForm
                    | PreviewAppFormFieldsPostDecimalFieldForm
                    | PreviewAppFormFieldsPostEditorFieldForm
                    | PreviewAppFormFieldsPostFileFieldForm
                    | PreviewAppFormFieldsPostGroupFieldForm
                    | PreviewAppFormFieldsPostGroupSelectFieldForm
                    | PreviewAppFormFieldsPostLinkFieldForm
                    | PreviewAppFormFieldsPostLookupFieldForm
                    | PreviewAppFormFieldsPostModifiedAtFieldForm
                    | PreviewAppFormFieldsPostModifierFieldForm
                    | PreviewAppFormFieldsPostMultipleCheckFieldForm
                    | PreviewAppFormFieldsPostMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPostMultipleSelectFieldForm
                    | PreviewAppFormFieldsPostOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPostRecordIdFieldForm
                    | PreviewAppFormFieldsPostReferenceTableFieldForm
                    | PreviewAppFormFieldsPostSingleCheckFieldForm
                    | PreviewAppFormFieldsPostSingleLineTextFieldForm
                    | PreviewAppFormFieldsPostSingleSelectFieldForm
                    | PreviewAppFormFieldsPostStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPostStatusFieldForm
                    | PreviewAppFormFieldsPostTableForm
                    | PreviewAppFormFieldsPostTimeFieldForm
                    | PreviewAppFormFieldsPostUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPostCalcFieldForm
                    | PreviewAppFormFieldsPostCategoryFieldForm
                    | PreviewAppFormFieldsPostDateFieldForm
                    | PreviewAppFormFieldsPostDatetimeFieldForm
                    | PreviewAppFormFieldsPostDecimalFieldForm
                    | PreviewAppFormFieldsPostEditorFieldForm
                    | PreviewAppFormFieldsPostFileFieldForm
                    | PreviewAppFormFieldsPostGroupFieldForm
                    | PreviewAppFormFieldsPostGroupSelectFieldForm
                    | PreviewAppFormFieldsPostLinkFieldForm
                    | PreviewAppFormFieldsPostLookupFieldForm
                    | PreviewAppFormFieldsPostModifiedAtFieldForm
                    | PreviewAppFormFieldsPostModifierFieldForm
                    | PreviewAppFormFieldsPostMultipleCheckFieldForm
                    | PreviewAppFormFieldsPostMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPostMultipleSelectFieldForm
                    | PreviewAppFormFieldsPostOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPostRecordIdFieldForm
                    | PreviewAppFormFieldsPostReferenceTableFieldForm
                    | PreviewAppFormFieldsPostSingleCheckFieldForm
                    | PreviewAppFormFieldsPostSingleLineTextFieldForm
                    | PreviewAppFormFieldsPostSingleSelectFieldForm
                    | PreviewAppFormFieldsPostStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPostStatusFieldForm
                    | PreviewAppFormFieldsPostTableForm
                    | PreviewAppFormFieldsPostTimeFieldForm
                    | PreviewAppFormFieldsPostUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPutCalcFieldForm
                    | PreviewAppFormFieldsPutCategoryFieldForm
                    | PreviewAppFormFieldsPutDateFieldForm
                    | PreviewAppFormFieldsPutDatetimeFieldForm
                    | PreviewAppFormFieldsPutDecimalFieldForm
                    | PreviewAppFormFieldsPutEditorFieldForm
                    | PreviewAppFormFieldsPutFileFieldForm
                    | PreviewAppFormFieldsPutGroupFieldForm
                    | PreviewAppFormFieldsPutGroupSelectFieldForm
                    | PreviewAppFormFieldsPutLinkFieldForm
                    | PreviewAppFormFieldsPutLookupFieldForm
                    | PreviewAppFormFieldsPutModifiedAtFieldForm
                    | PreviewAppFormFieldsPutModifierFieldForm
                    | PreviewAppFormFieldsPutMultipleCheckFieldForm
                    | PreviewAppFormFieldsPutMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPutMultipleSelectFieldForm
                    | PreviewAppFormFieldsPutOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPutRecordIdFieldForm
                    | PreviewAppFormFieldsPutReferenceTableFieldForm
                    | PreviewAppFormFieldsPutSingleCheckFieldForm
                    | PreviewAppFormFieldsPutSingleLineTextFieldForm
                    | PreviewAppFormFieldsPutSingleSelectFieldForm
                    | PreviewAppFormFieldsPutStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPutStatusFieldForm
                    | PreviewAppFormFieldsPutTableForm
                    | PreviewAppFormFieldsPutTimeFieldForm
                    | PreviewAppFormFieldsPutUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                properties: {
                  [x: string]:
                    | PreviewAppFormFieldsPutCalcFieldForm
                    | PreviewAppFormFieldsPutCategoryFieldForm
                    | PreviewAppFormFieldsPutDateFieldForm
                    | PreviewAppFormFieldsPutDatetimeFieldForm
                    | PreviewAppFormFieldsPutDecimalFieldForm
                    | PreviewAppFormFieldsPutEditorFieldForm
                    | PreviewAppFormFieldsPutFileFieldForm
                    | PreviewAppFormFieldsPutGroupFieldForm
                    | PreviewAppFormFieldsPutGroupSelectFieldForm
                    | PreviewAppFormFieldsPutLinkFieldForm
                    | PreviewAppFormFieldsPutLookupFieldForm
                    | PreviewAppFormFieldsPutModifiedAtFieldForm
                    | PreviewAppFormFieldsPutModifierFieldForm
                    | PreviewAppFormFieldsPutMultipleCheckFieldForm
                    | PreviewAppFormFieldsPutMultipleLineTextFieldForm
                    | PreviewAppFormFieldsPutMultipleSelectFieldForm
                    | PreviewAppFormFieldsPutOrganizationSelectFieldForm
                    | PreviewAppFormFieldsPutRecordIdFieldForm
                    | PreviewAppFormFieldsPutReferenceTableFieldForm
                    | PreviewAppFormFieldsPutSingleCheckFieldForm
                    | PreviewAppFormFieldsPutSingleLineTextFieldForm
                    | PreviewAppFormFieldsPutSingleSelectFieldForm
                    | PreviewAppFormFieldsPutStatusAssigneeFieldForm
                    | PreviewAppFormFieldsPutStatusFieldForm
                    | PreviewAppFormFieldsPutTableForm
                    | PreviewAppFormFieldsPutTimeFieldForm
                    | PreviewAppFormFieldsPutUserSelectFieldForm
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/form/layout.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              layout?:
                | (
                    | PreviewAppFormLayoutGetRow
                    | PreviewAppFormLayoutGetGroupRow
                    | PreviewAppFormLayoutGetSubtableRow
                  )[]
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                layout: (
                  | PreviewAppFormLayoutPutRow
                  | PreviewAppFormLayoutPutGroupRow
                  | PreviewAppFormLayoutPutSubtableRow
                )[]
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                layout: (
                  | PreviewAppFormLayoutPutRow
                  | PreviewAppFormLayoutPutGroupRow
                  | PreviewAppFormLayoutPutSubtableRow
                )[]
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/notifications/general.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              notifyToCommenter?: boolean | undefined
              notifications?: PreviewAppNotificationsGeneralGetNotification[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                notifyToCommenter?: boolean | undefined
                notifications?: PreviewAppNotificationsGeneralPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                notifyToCommenter?: boolean | undefined
                notifications?: PreviewAppNotificationsGeneralPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/notifications/perRecord.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              notifications?: PreviewAppNotificationsPerRecordGetNotification[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                notifications: PreviewAppNotificationsPerRecordPutNotification[]
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                notifications: PreviewAppNotificationsPerRecordPutNotification[]
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/notifications/reminder.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              timezone?: (string | null) | undefined
              notifications?: PreviewAppNotificationsReminderGetNotification[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                timezone?: string | undefined
                notifications?: PreviewAppNotificationsReminderPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                timezone?: string | undefined
                notifications?: PreviewAppNotificationsReminderPutNotification[] | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/plugins.json': {
      $get:
        | {
            input: { query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined } }
            output: {
              plugins?: PreviewAppPluginsGetPluginForm[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint; lang?: 'JA' | 'EN' | 'ZH' | 'ES' | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { app: bigint; ids: string[]; revision?: bigint | undefined } }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; ids: string[]; revision?: bigint | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/reports.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              reports?:
                | {
                    [x: string]:
                      | PreviewAppReportsGetReport
                      | PreviewAppReportsGetReportWithChartMode
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                reports: {
                  [x: string]: PreviewAppReportsPutReport | PreviewAppReportsPutReportWithChartMode
                }
                revision?: bigint | undefined
              }
            }
            output: {
              reports?: { [x: string]: PreviewAppReportsPutReportResult } | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                reports: {
                  [x: string]: PreviewAppReportsPutReport | PreviewAppReportsPutReportWithChartMode
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/settings.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enableComments?: boolean | undefined
              titleField?: PreviewAppSettingsGetTitleField | undefined
              icon?:
                | PreviewAppSettingsGetIconPresetForm
                | PreviewAppSettingsGetIconFileForm
                | undefined
              description?: string | undefined
              enableThumbnails?: boolean | undefined
              enableDuplicateRecord?: boolean | undefined
              revision?: string | undefined
              enableInlineRecordEditing?: boolean | undefined
              enableBulkDeletion?: boolean | undefined
              name?: string | undefined
              theme?:
                | 'WHITE'
                | 'CLIPBOARD'
                | 'BINDER'
                | 'PENCIL'
                | 'CLIPS'
                | 'RED'
                | 'GREEN'
                | 'BLUE'
                | 'YELLOW'
                | 'BLACK'
                | undefined
              numberPrecision?: PreviewAppSettingsGetNumberPrecision | undefined
              firstMonthOfFiscalYear?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                enableComments?: string | undefined
                titleField?:
                  | { code?: string | undefined; selectionMode: 'AUTO' | 'MANUAL' }
                  | undefined
                icon?:
                  | PreviewAppSettingsPutIconPresetForm
                  | PreviewAppSettingsPutIconFileForm
                  | undefined
                description?: string | undefined
                enableThumbnails?: string | undefined
                enableDuplicateRecord?: string | undefined
                revision?: bigint | undefined
                enableInlineRecordEditing?: string | undefined
                enableBulkDeletion?: string | undefined
                name?: string | undefined
                theme?:
                  | 'WHITE'
                  | 'CLIPBOARD'
                  | 'BINDER'
                  | 'PENCIL'
                  | 'CLIPS'
                  | 'RED'
                  | 'GREEN'
                  | 'BLUE'
                  | 'YELLOW'
                  | 'BLACK'
                  | undefined
                numberPrecision?:
                  | {
                      roundingMode?: 'HALF_EVEN' | 'UP' | 'DOWN' | undefined
                      decimalPlaces?: number | undefined
                      digits?: number | undefined
                    }
                  | undefined
                firstMonthOfFiscalYear?: string | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                enableComments?: string | undefined
                titleField?:
                  | { code?: string | undefined; selectionMode: 'AUTO' | 'MANUAL' }
                  | undefined
                icon?:
                  | PreviewAppSettingsPutIconPresetForm
                  | PreviewAppSettingsPutIconFileForm
                  | undefined
                description?: string | undefined
                enableThumbnails?: string | undefined
                enableDuplicateRecord?: string | undefined
                revision?: bigint | undefined
                enableInlineRecordEditing?: string | undefined
                enableBulkDeletion?: string | undefined
                name?: string | undefined
                theme?:
                  | 'WHITE'
                  | 'CLIPBOARD'
                  | 'BINDER'
                  | 'PENCIL'
                  | 'CLIPS'
                  | 'RED'
                  | 'GREEN'
                  | 'BLUE'
                  | 'YELLOW'
                  | 'BLACK'
                  | undefined
                numberPrecision?:
                  | {
                      roundingMode?: 'HALF_EVEN' | 'UP' | 'DOWN' | undefined
                      decimalPlaces?: number | undefined
                      digits?: number | undefined
                    }
                  | undefined
                firstMonthOfFiscalYear?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/status.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              enable?: boolean | undefined
              actions?: (PreviewAppStatusGetActionForm[] | null) | undefined
              states?: ({ [x: string]: PreviewAppStatusGetStateForm } | null) | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                enable?: boolean | undefined
                actions?: PreviewAppStatusPutActionForm[] | undefined
                revision?: bigint | undefined
                states?: { [x: string]: PreviewAppStatusPutStateForm } | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                enable?: boolean | undefined
                actions?: PreviewAppStatusPutActionForm[] | undefined
                revision?: bigint | undefined
                states?: { [x: string]: PreviewAppStatusPutStateForm } | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/app/views.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              views?:
                | {
                    [x: string]:
                      | PreviewAppViewsGetBuiltinListViewOutputForm
                      | PreviewAppViewsGetBuiltinCalendarViewOutputForm
                      | PreviewAppViewsGetListViewOutputForm
                      | PreviewAppViewsGetCalendarViewOutputForm
                      | PreviewAppViewsGetCustomViewOutputForm
                  }
                | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                views: {
                  [x: string]:
                    | PreviewAppViewsPutListViewForm
                    | PreviewAppViewsPutCalendarViewForm
                    | PreviewAppViewsPutCustomViewForm
                }
                revision?: bigint | undefined
              }
            }
            output: {
              views?: { [x: string]: PreviewAppViewsPutResult } | undefined
              revision: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                views: {
                  [x: string]:
                    | PreviewAppViewsPutListViewForm
                    | PreviewAppViewsPutCalendarViewForm
                    | PreviewAppViewsPutCustomViewForm
                }
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/field/acl.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              rights?: PreviewFieldAclGetRight[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: PreviewFieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: PreviewFieldAclPutRight[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/form.json': {
      $get:
        | {
            input: { query: { app: bigint } }
            output: {
              properties?:
                | (
                    | PreviewFormGetLayoutProperties
                    | PreviewFormGetLabelProperties
                    | PreviewFormGetBultinProperties
                    | PreviewFormGetCalcSimpleProperties
                    | PreviewFormGetDateSimpleProperties
                    | PreviewFormGetDatetimeSimpleProperties
                    | PreviewFormGetDecimalSimpleProperties
                    | PreviewFormGetEditorSimpleProperties
                    | PreviewFormGetFileSimpleProperties
                    | PreviewFormGetLinkSimpleProperties
                    | PreviewFormGetMultipleLineTextSimpleProperties
                    | PreviewFormGetMultipleSelectSimpleProperties
                    | PreviewFormGetSingleLineTextSimpleProperties
                    | PreviewFormGetSingleSelectSimpleProperties
                    | PreviewFormGetTimeSimpleProperties
                    | PreviewFormGetUserSelectSimpleProperties
                    | PreviewFormGetOrganizationSelectSimpleProperties
                    | PreviewFormGetGroupSelectSimpleProperties
                    | PreviewFormGetLookupSimpleProperties
                    | PreviewFormGetReferenceTableLayoutProperties
                    | PreviewFormGetSubTableLayoutProperties
                    | PreviewFormGetSpacerProperties
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/preview/record/acl.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: {
              rights?: PreviewRecordAclGetRight[] | undefined
              revision?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: PreviewRecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: PreviewRecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record.json': {
      $get:
        | {
            input: { query: { app: bigint; id: bigint } }
            output: { record: { [x: string]: RecordObject } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint; id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { app: bigint; record: { [x: string]: RecordWritableObject } } }
            output: { id: string; revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; record: { [x: string]: RecordWritableObject } } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app: bigint
                updateKey?: { field: string; value: string } | undefined
                record?: { [x: string]: RecordWritableObject } | undefined
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                updateKey?: { field: string; value: string } | undefined
                record?: { [x: string]: RecordWritableObject } | undefined
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record/acl.json': {
      $get:
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: { rights: RecordAclGetRight[]; revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { app: bigint; lang?: 'default' | 'user' | 'ja' | 'en' | 'zh' | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: RecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app?: bigint | undefined
                rights: RecordAclPutRightForm[]
                id?: bigint | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record/assignees.json': {
      $put:
        | {
            input: {
              json: { app: bigint; assignees: string[]; id: bigint; revision?: bigint | undefined }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { app: bigint; assignees: string[]; id: bigint; revision?: bigint | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record/async/token.json': {
      $post:
        | {
            input: { json: { app: string } }
            output: { expiresIn?: bigint | undefined; token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record/comment.json': {
      $delete:
        | {
            input: { json: { app: bigint; record: bigint; comment: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; record: bigint; comment: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                app: bigint
                record: bigint
                comment: { mentions?: RecordCommentPostMentionForm[] | undefined; text: string }
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                record: bigint
                comment: { mentions?: RecordCommentPostMentionForm[] | undefined; text: string }
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record/comments.json': {
      $get:
        | {
            input: {
              query: {
                app: bigint
                offset?: bigint | undefined
                record: bigint
                limit?: bigint | undefined
                order?: 'ASC' | 'DESC' | undefined
              }
            }
            output: {
              newer: boolean
              comments: RecordCommentsGetCommentOutputForm[]
              older: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                app: bigint
                offset?: bigint | undefined
                record: bigint
                limit?: bigint | undefined
                order?: 'ASC' | 'DESC' | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/record/status.json': {
      $put:
        | {
            input: {
              json: {
                app: bigint
                action: string
                id: bigint
                assignee?: string | undefined
                revision?: bigint | undefined
              }
            }
            output: { revision?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                action: string
                id: bigint
                assignee?: string | undefined
                revision?: bigint | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/records.json': {
      $delete:
        | {
            input: { json: { app: bigint; ids: bigint[]; revisions?: bigint[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; ids: bigint[]; revisions?: bigint[] | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              query: {
                app: bigint
                query?: string | undefined
                fields?: string[] | undefined
                totalCount?: string | undefined
              }
            }
            output: {
              records: { [x: string]: RecordObject }[]
              totalCount?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                app: bigint
                query?: string | undefined
                fields?: string[] | undefined
                totalCount?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: { app: bigint; records: { [x: string]: RecordWritableObject }[] } }
            output: { ids: string[]; revisions: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; records: { [x: string]: RecordWritableObject }[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: { app: bigint; records: RecordsPutRecordForm[]; upsert?: boolean | undefined }
            }
            output: { records: RecordsPutRecordBean[] | RecordsPutUpsertRecordBean[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { app: bigint; records: RecordsPutRecordForm[]; upsert?: boolean | undefined }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/records/acl/evaluate.json': {
      $get:
        | {
            input: { query: { app: bigint; ids: string[] } }
            output: { rights?: RecordsAclEvaluateGetRight[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { app: bigint; ids: string[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/records/cursor.json': {
      $delete:
        | {
            input: { json: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { query: { id: string } }
            output: { next: boolean; records: { [x: string]: RecordObject }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                app: bigint
                size?: bigint | undefined
                query?: string | undefined
                fields?: string[] | undefined
              }
            }
            output: { id: string; totalCount: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                app: bigint
                size?: bigint | undefined
                query?: string | undefined
                fields?: string[] | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/records/status.json': {
      $put:
        | {
            input: { json: { app: bigint; records: RecordsStatusPutRecordsStatusPutFormRecord[] } }
            output: { records?: RecordsStatusPutRecordsStatusPutOutputFormRecord[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { app: bigint; records: RecordsStatusPutRecordsStatusPutFormRecord[] } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/search.json': {
      $post:
        | {
            input: {
              json: {
                types?:
                  | (
                      | 'RECORD'
                      | 'RECORD_COMMENT'
                      | 'SPACE'
                      | 'THREAD'
                      | 'THREAD_COMMENT'
                      | 'PEOPLE_COMMENT'
                      | 'MESSAGE_COMMENT'
                      | 'ATTACHMENT'
                    )[]
                  | undefined
                excludeScopes?: SearchPostScopeForm[] | undefined
                creators?: string[] | undefined
                includeSynonyms?: boolean | undefined
                query: SearchPostQueryForm[]
                limit?: bigint | undefined
                scopes?: SearchPostScopeForm[] | undefined
                createdBefore?: string | undefined
                sort?:
                  | {
                      by?: 'RELEVANCE' | 'CREATED_AT' | undefined
                      order?: 'ASC' | 'DESC' | undefined
                    }
                  | undefined
                pageToken?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: {
              hits?: SearchPostHit[] | undefined
              nextPageToken?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                types?:
                  | (
                      | 'RECORD'
                      | 'RECORD_COMMENT'
                      | 'SPACE'
                      | 'THREAD'
                      | 'THREAD_COMMENT'
                      | 'PEOPLE_COMMENT'
                      | 'MESSAGE_COMMENT'
                      | 'ATTACHMENT'
                    )[]
                  | undefined
                excludeScopes?: SearchPostScopeForm[] | undefined
                creators?: string[] | undefined
                includeSynonyms?: boolean | undefined
                query: SearchPostQueryForm[]
                limit?: bigint | undefined
                scopes?: SearchPostScopeForm[] | undefined
                createdBefore?: string | undefined
                sort?:
                  | {
                      by?: 'RELEVANCE' | 'CREATED_AT' | undefined
                      order?: 'ASC' | 'DESC' | undefined
                    }
                  | undefined
                pageToken?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/space.json': {
      $delete:
        | {
            input: { json: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { query: { id: bigint } }
            output: {
              coverKey?: string | undefined
              creator?: { code?: string | undefined; name?: string | undefined } | undefined
              isGuest?: boolean | undefined
              modifier?: { code?: string | undefined; name?: string | undefined } | undefined
              memberCount?: string | undefined
              attachedApps?: SpaceGetAttachedApp[] | undefined
              isPrivate?: boolean | undefined
              body?: (string | null) | undefined
              showAppList?: (boolean | null) | undefined
              coverUrl?: string | undefined
              coverType?: 'BLOB' | 'PRESET' | undefined
              fixedMember?: boolean | undefined
              permissions?: { createApp?: 'EVERYONE' | 'ADMIN' | undefined } | undefined
              name?: string | undefined
              useMultiThread?: boolean | undefined
              showMemberList?: (boolean | null) | undefined
              showRelatedLinkList?: (boolean | null) | undefined
              id?: string | undefined
              showAnnouncement?: (boolean | null) | undefined
              showThreadList?: (boolean | null) | undefined
              defaultThread?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: {
              json: {
                fixedMember?: boolean | undefined
                permissions?: { createApp?: 'EVERYONE' | 'ADMIN' | undefined } | undefined
                name?: string | undefined
                useMultiThread?: boolean | undefined
                showMemberList?: boolean | undefined
                showRelatedLinkList?: boolean | undefined
                id: bigint
                isPrivate?: boolean | undefined
                showAnnouncement?: boolean | undefined
                showThreadList?: boolean | undefined
                showAppList?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                fixedMember?: boolean | undefined
                permissions?: { createApp?: 'EVERYONE' | 'ADMIN' | undefined } | undefined
                name?: string | undefined
                useMultiThread?: boolean | undefined
                showMemberList?: boolean | undefined
                showRelatedLinkList?: boolean | undefined
                id: bigint
                isPrivate?: boolean | undefined
                showAnnouncement?: boolean | undefined
                showThreadList?: boolean | undefined
                showAppList?: boolean | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/space/body.json': {
      $put:
        | {
            input: { json: { id: bigint; body: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: bigint; body: string } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/space/members.json': {
      $get:
        | {
            input: { query: { id: bigint } }
            output: {
              members?:
                | (
                    | SpaceMembersGetUserBean
                    | SpaceMembersGetOrganizationBean
                    | SpaceMembersGetGroupBean
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: { members?: SpaceMembersPutMemberForm[] | undefined; id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { members?: SpaceMembersPutMemberForm[] | undefined; id: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/space/thread.json': {
      $post:
        | {
            input: { json: { name: string; space: bigint } }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; space: bigint } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: { name?: string | undefined; id: bigint; body?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined; id: bigint; body?: string | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/space/thread/comment.json': {
      $post:
        | {
            input: {
              json: {
                comment: {
                  mentions?: SpaceThreadCommentPostMentionForm[] | undefined
                  files?: SpaceThreadCommentPostFileForm[] | undefined
                  text?: string | undefined
                }
                thread: bigint
                space: bigint
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                comment: {
                  mentions?: SpaceThreadCommentPostMentionForm[] | undefined
                  files?: SpaceThreadCommentPostFileForm[] | undefined
                  text?: string | undefined
                }
                thread: bigint
                space: bigint
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/spaces/statistics.json': {
      $get:
        | {
            input: { query: { offset?: string | undefined; limit?: string | undefined } }
            output: { spaces?: SpacesStatisticsGetSpaceForm[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: string | undefined; limit?: string | undefined } }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/k/v1/template/space.json': {
      $post:
        | {
            input: {
              json: {
                fixedMember?: boolean | undefined
                isGuest?: boolean | undefined
                members?: TemplateSpacePostMemberForm[] | undefined
                name: string
                id: bigint
                isPrivate?: boolean | undefined
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                fixedMember?: boolean | undefined
                isGuest?: boolean | undefined
                members?: TemplateSpacePostMemberForm[] | undefined
                name: string
                id: bigint
                isPrivate?: boolean | undefined
              }
            }
            output: KintoneError
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
