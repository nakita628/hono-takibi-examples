type BulkAgentSessionInvocation = {
  agentId: string
  issueId: string
  requestId: string
  userPrompt?: (string | null) | undefined
}
type BulkStartAgentSessionsBatchRequest = {
  clientMutationId: string
  invocations: BulkAgentSessionInvocation[]
}
type BulkAgentSessionItemError = {
  message?: string | undefined
  statusCode?: number | undefined
  type?:
    | 'AGENT_NOT_ASSIGNABLE'
    | 'AGENT_NOT_FOUND'
    | 'INVALID_REQUEST_ID'
    | 'ISSUE_NOT_FOUND'
    | 'IDEMPOTENCY_CONFLICT'
    | 'ISSUE_VERSION_MISSING'
    | 'ISSUE_ACCESS_DENIED'
    | 'RATE_LIMITED'
    | 'CONCURRENCY_SATURATED'
    | 'AGENT_TRIGGER_FAILED'
    | 'IDEMPOTENCY_ERROR'
    | 'PRIOR_ATTEMPT_FAILED'
    | 'SESSION_NOT_STARTED'
    | 'IN_DOUBT'
    | 'UNEXPECTED_ERROR'
    | undefined
} | null
type BulkAgentSessionOutcome = {
  agentId?: string | undefined
  conversationId?: (string | null) | undefined
  error?: BulkAgentSessionItemError | undefined
  issueId?: string | undefined
  requestId?: string | undefined
  result?: 'STARTED' | 'ALREADY_STARTED' | 'FAILED' | 'RATE_LIMITED' | 'IN_DOUBT' | undefined
}
type BulkAgentSessionsResponse = {
  alreadyStartedCount?: number | undefined
  failedCount?: number | undefined
  rateLimitedCount?: number | undefined
  results?: BulkAgentSessionOutcome[] | undefined
  startedCount?: number | undefined
  success?: boolean | undefined
}
type ErrorCollection = {
  errorMessages?: string[] | undefined
  errors?: { [x: string]: string } | undefined
  status?: number | undefined
}
type BulkStartUniformAgentSessionsRequest = {
  agentId: string
  clientMutationId: string
  issueIds: string[]
  userPrompt?: (string | null) | undefined
}
type AnnouncementBannerConfiguration = {
  hashId?: string | undefined
  isDismissible?: boolean | undefined
  isEnabled?: boolean | undefined
  message?: string | undefined
  visibility?: 'public' | 'private' | undefined
}
type AnnouncementBannerConfigurationUpdate = {
  isDismissible?: boolean | undefined
  isEnabled?: boolean | undefined
  message?: string | undefined
  visibility?: string | undefined
}
type ConfigurationsListParameters = { fieldIdsOrKeys: string[] }
type BulkContextualConfiguration = {
  configuration?: { [x: string]: unknown } | undefined
  customFieldId: string
  fieldContextId: string
  id: string
  schema?: { [x: string]: unknown } | undefined
}
type PageBeanBulkContextualConfiguration = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: BulkContextualConfiguration[] | undefined
}
type MultipleCustomFieldValuesUpdate = {
  customField: string
  issueIds: bigint[]
  value: { [x: string]: unknown }
}
type MultipleCustomFieldValuesUpdateDetails = {
  updates?: MultipleCustomFieldValuesUpdate[] | undefined
}
type ContextualConfiguration = {
  configuration?: { [x: string]: unknown } | undefined
  fieldContextId: string
  id: string
  schema?: { [x: string]: unknown } | undefined
}
type PageBeanContextualConfiguration = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ContextualConfiguration[] | undefined
}
type CustomFieldConfigurations = { configurations: ContextualConfiguration[] }
type CustomFieldValueUpdate = { issueIds: bigint[]; value: { [x: string]: unknown } }
type CustomFieldValueUpdateDetails = { updates?: CustomFieldValueUpdate[] | undefined }
type ApplicationProperty = {
  allowedValues?: string[] | undefined
  defaultValue?: string | undefined
  desc?: string | undefined
  example?: string | undefined
  id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type SimpleApplicationPropertyBean = { id?: string | undefined; value?: string | undefined }
type GroupName = {
  groupId?: (string | null) | undefined
  name?: string | undefined
  self?: string | undefined
}
type ApplicationRole = {
  defaultGroups?: string[] | undefined
  defaultGroupsDetails?: GroupName[] | undefined
  defined?: boolean | undefined
  groupDetails?: GroupName[] | undefined
  groups?: string[] | undefined
  hasUnlimitedSeats?: boolean | undefined
  key?: string | undefined
  name?: string | undefined
  numberOfSeats?: number | undefined
  platform?: boolean | undefined
  remainingSeats?: number | undefined
  selectedByDefault?: boolean | undefined
  userCount?: number | undefined
  userCountDescription?: string | undefined
}
type AttachmentSettings = { enabled?: boolean | undefined; uploadLimit?: bigint | undefined }
type ListWrapperCallbackApplicationRole = {}
type ListWrapperCallbackGroupName = {}
type AttachmentMetadata = {
  author?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  content?: string | undefined
  created?: string | undefined
  filename?: string | undefined
  id?: bigint | undefined
  mimeType?: string | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  self?: string | undefined
  size?: bigint | undefined
  thumbnail?: string | undefined
}
type AttachmentArchiveItemReadable = {
  index?: bigint | undefined
  label?: string | undefined
  mediaType?: string | undefined
  path?: string | undefined
  size?: string | undefined
}
type AttachmentArchiveMetadataReadable = {
  entries?: AttachmentArchiveItemReadable[] | undefined
  id?: bigint | undefined
  mediaType?: string | undefined
  name?: string | undefined
  totalEntryCount?: bigint | undefined
}
type AttachmentArchiveEntry = {
  abbreviatedName?: string | undefined
  entryIndex?: bigint | undefined
  mediaType?: string | undefined
  name?: string | undefined
  size?: bigint | undefined
}
type AttachmentArchiveImpl = {
  entries?: AttachmentArchiveEntry[] | undefined
  totalEntryCount?: number | undefined
}
type AssociatedItemBean = {
  id?: string | undefined
  name?: string | undefined
  parentId?: string | undefined
  parentName?: string | undefined
  typeName?: string | undefined
}
type ChangedValueBean = {
  changedFrom?: string | undefined
  changedTo?: string | undefined
  fieldName?: string | undefined
}
type AuditRecordBean = {
  associatedItems?: AssociatedItemBean[] | undefined
  authorKey?: string | undefined
  category?: string | undefined
  changedValues?: ChangedValueBean[] | undefined
  created?: string | undefined
  description?: string | undefined
  eventSource?: string | undefined
  id?: bigint | undefined
  objectItem?: AssociatedItemBean | undefined
  remoteAddress?: string | undefined
  summary?: string | undefined
}
type AuditRecords = {
  limit?: number | undefined
  offset?: number | undefined
  records?: AuditRecordBean[] | undefined
  total?: bigint | undefined
}
type Avatar = {
  fileName?: string | undefined
  id: string
  isDeletable?: boolean | undefined
  isSelected?: boolean | undefined
  isSystemAvatar?: boolean | undefined
  owner?: string | undefined
  urls?: { [x: string]: string } | undefined
}
type SystemAvatars = { system?: Avatar[] | undefined }
type IssueBulkDeletePayload = {
  selectedIssueIdsOrKeys: string[]
  sendBulkNotification?: (boolean | null) | undefined
}
type SubmittedBulkOperation = { taskId?: string | undefined }
type ErrorMessage = { message?: string | undefined }
type BulkOperationErrorResponse = { errors?: ErrorMessage[] | undefined }
type IssueBulkOperationsFieldOption = {}
type IssueBulkEditField = {
  description?: string | undefined
  fieldOptions?: IssueBulkOperationsFieldOption[] | undefined
  id?: string | undefined
  isRequired?: boolean | undefined
  multiSelectFieldOptions?: ('ADD' | 'REMOVE' | 'REPLACE' | 'REMOVE_ALL')[] | undefined
  name?: string | undefined
  searchUrl?: string | undefined
  type?: string | undefined
  unavailableMessage?: string | undefined
}
type BulkEditGetFields = {
  endingBefore?: string | undefined
  fields?: IssueBulkEditField[] | undefined
  startingAfter?: string | undefined
}
type JiraSelectedOptionField = { optionId?: bigint | undefined }
type JiraCascadingSelectField = {
  childOptionValue?: JiraSelectedOptionField | undefined
  fieldId: string
  parentOptionValue: JiraSelectedOptionField
}
type JiraNumberField = { fieldId: string; value?: number | undefined }
type JiraColorInput = { name: string }
type JiraColorField = { color: JiraColorInput; fieldId: string }
type JiraDateInput = { formattedDate: string }
type JiraDateField = { date?: JiraDateInput | undefined; fieldId: string }
type JiraDateTimeInput = { formattedDateTime: string }
type JiraDateTimeField = { dateTime: JiraDateTimeInput; fieldId: string }
type JiraLabelPropertiesInputJackson1 = {
  color?:
    | 'GREY_LIGHTEST'
    | 'GREY_LIGHTER'
    | 'GREY'
    | 'GREY_DARKER'
    | 'GREY_DARKEST'
    | 'PURPLE_LIGHTEST'
    | 'PURPLE_LIGHTER'
    | 'PURPLE'
    | 'PURPLE_DARKER'
    | 'PURPLE_DARKEST'
    | 'BLUE_LIGHTEST'
    | 'BLUE_LIGHTER'
    | 'BLUE'
    | 'BLUE_DARKER'
    | 'BLUE_DARKEST'
    | 'TEAL_LIGHTEST'
    | 'TEAL_LIGHTER'
    | 'TEAL'
    | 'TEAL_DARKER'
    | 'TEAL_DARKEST'
    | 'GREEN_LIGHTEST'
    | 'GREEN_LIGHTER'
    | 'GREEN'
    | 'GREEN_DARKER'
    | 'GREEN_DARKEST'
    | 'LIME_LIGHTEST'
    | 'LIME_LIGHTER'
    | 'LIME'
    | 'LIME_DARKER'
    | 'LIME_DARKEST'
    | 'YELLOW_LIGHTEST'
    | 'YELLOW_LIGHTER'
    | 'YELLOW'
    | 'YELLOW_DARKER'
    | 'YELLOW_DARKEST'
    | 'ORANGE_LIGHTEST'
    | 'ORANGE_LIGHTER'
    | 'ORANGE'
    | 'ORANGE_DARKER'
    | 'ORANGE_DARKEST'
    | 'RED_LIGHTEST'
    | 'RED_LIGHTER'
    | 'RED'
    | 'RED_DARKER'
    | 'RED_DARKEST'
    | 'MAGENTA_LIGHTEST'
    | 'MAGENTA_LIGHTER'
    | 'MAGENTA'
    | 'MAGENTA_DARKER'
    | 'MAGENTA_DARKEST'
    | undefined
  name?: string | undefined
}
type JiraLabelsInput = { name: string }
type JiraLabelsField = {
  bulkEditMultiSelectFieldOption: 'ADD' | 'REMOVE' | 'REPLACE' | 'REMOVE_ALL'
  fieldId: string
  labelProperties?: JiraLabelPropertiesInputJackson1[] | undefined
  labels: JiraLabelsInput[]
}
type JiraGroupInput = { groupName: string }
type JiraMultipleGroupPickerField = { fieldId: string; groups: JiraGroupInput[] }
type JiraUserField = { accountId: string }
type JiraMultipleSelectUserPickerField = { fieldId: string; users?: JiraUserField[] | undefined }
type JiraMultipleSelectField = { fieldId: string; options: JiraSelectedOptionField[] }
type JiraVersionField = { versionId?: string | undefined }
type JiraMultipleVersionPickerField = {
  bulkEditMultiSelectFieldOption: 'ADD' | 'REMOVE' | 'REPLACE' | 'REMOVE_ALL'
  fieldId: string
  versions: JiraVersionField[]
}
type JiraComponentField = { componentId: bigint }
type JiraRichTextInput = { adfValue?: { [x: string]: { [x: string]: unknown } } | undefined }
type JiraRichTextField = { fieldId: string; richText: JiraRichTextInput }
type JiraSingleGroupPickerField = { fieldId: string; group: JiraGroupInput }
type JiraSingleLineTextField = { fieldId: string; text: string }
type JiraSingleSelectUserPickerField = { fieldId: string; user?: JiraUserField | undefined }
type JiraSingleSelectField = { fieldId: string; option: JiraSelectedOptionField }
type JiraSingleVersionPickerField = { fieldId: string; version: JiraVersionField }
type JiraStatusInput = { statusId: string }
type JiraUrlField = { fieldId: string; url: string }
type IssueBulkEditPayload = {
  editedFieldsInput: {
    cascadingSelectFields?: JiraCascadingSelectField[] | undefined
    clearableNumberFields?: JiraNumberField[] | undefined
    colorFields?: JiraColorField[] | undefined
    datePickerFields?: JiraDateField[] | undefined
    dateTimePickerFields?: JiraDateTimeField[] | undefined
    issueType?: { issueTypeId: string } | undefined
    labelsFields?: JiraLabelsField[] | undefined
    multipleGroupPickerFields?: JiraMultipleGroupPickerField[] | undefined
    multipleSelectClearableUserPickerFields?: JiraMultipleSelectUserPickerField[] | undefined
    multipleSelectFields?: JiraMultipleSelectField[] | undefined
    multipleVersionPickerFields?: JiraMultipleVersionPickerField[] | undefined
    multiselectComponents?:
      | {
          bulkEditMultiSelectFieldOption: 'ADD' | 'REMOVE' | 'REPLACE' | 'REMOVE_ALL'
          components: JiraComponentField[]
          fieldId: string
        }
      | undefined
    originalEstimateField?: { originalEstimateField: string } | undefined
    priority?: { priorityId: string } | undefined
    richTextFields?: JiraRichTextField[] | undefined
    singleGroupPickerFields?: JiraSingleGroupPickerField[] | undefined
    singleLineTextFields?: JiraSingleLineTextField[] | undefined
    singleSelectClearableUserPickerFields?: JiraSingleSelectUserPickerField[] | undefined
    singleSelectFields?: JiraSingleSelectField[] | undefined
    singleVersionPickerFields?: JiraSingleVersionPickerField[] | undefined
    status?: JiraStatusInput | undefined
    timeTrackingField?: { timeRemaining: string } | undefined
    urlFields?: JiraUrlField[] | undefined
  }
  selectedActions: string[]
  selectedIssueIdsOrKeys: string[]
  sendBulkNotification?: (boolean | null) | undefined
}
type TargetClassification = {
  classifications: { [x: string]: string[] }
  issueType?: string | undefined
  projectKeyOrId?: string | undefined
} | null
type MandatoryFieldValue = {
  retain?: (boolean | null) | undefined
  type?: 'adf' | 'raw' | undefined
  value: string[]
}
type MandatoryFieldValueForADF = {
  retain?: (boolean | null) | undefined
  type: 'adf' | 'raw'
  value: { [x: string]: unknown }
}
type Fields2 = MandatoryFieldValue | MandatoryFieldValueForADF
type TargetMandatoryFields = { fields: { [x: string]: Fields2 } } | null
type TargetStatus = { statuses: { [x: string]: string[] } } | null
type TargetToSourcesMapping = {
  inferClassificationDefaults: boolean
  inferFieldDefaults: boolean
  inferStatusDefaults: boolean
  inferSubtaskTypeDefault: boolean
  issueIdsOrKeys?: string[] | undefined
  targetClassification?: (TargetClassification[] | null) | undefined
  targetMandatoryFields?: (TargetMandatoryFields[] | null) | undefined
  targetStatus?: (TargetStatus[] | null) | undefined
}
type IssueBulkMovePayload = {
  sendBulkNotification?: (boolean | null) | undefined
  targetToSourcesMapping?: { [x: string]: TargetToSourcesMapping } | undefined
}
type SimplifiedIssueTransition = {
  to?: { statusId?: number | undefined; statusName?: string | undefined } | undefined
  transitionId?: number | undefined
  transitionName?: string | undefined
}
type IssueBulkTransitionForWorkflow = {
  isTransitionsFiltered?: boolean | undefined
  issues?: string[] | undefined
  transitions?: SimplifiedIssueTransition[] | undefined
}
type BulkTransitionGetAvailableTransitions = {
  availableTransitions?: IssueBulkTransitionForWorkflow[] | undefined
  endingBefore?: string | undefined
  startingAfter?: string | undefined
}
type BulkTransitionSubmitInput = { selectedIssueIdsOrKeys: string[]; transitionId: string }
type IssueBulkTransitionPayload = {
  bulkTransitionInputs: BulkTransitionSubmitInput[]
  sendBulkNotification?: (boolean | null) | undefined
}
type IssueBulkWatchOrUnwatchPayload = { selectedIssueIdsOrKeys: string[] }
type User = {
  accountId?: string | undefined
  accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
  active?: boolean | undefined
  appType?: string | undefined
  applicationRoles?:
    | {
        callback?: ListWrapperCallbackApplicationRole | undefined
        items?: ApplicationRole[] | undefined
        'max-results'?: number | undefined
        pagingCallback?: ListWrapperCallbackApplicationRole | undefined
        size?: number | undefined
      }
    | undefined
  avatarUrls?:
    | {
        '16x16'?: string | undefined
        '24x24'?: string | undefined
        '32x32'?: string | undefined
        '48x48'?: string | undefined
      }
    | undefined
  displayName?: string | undefined
  emailAddress?: string | undefined
  expand?: string | undefined
  groups?:
    | {
        callback?: ListWrapperCallbackGroupName | undefined
        items?: GroupName[] | undefined
        'max-results'?: number | undefined
        pagingCallback?: ListWrapperCallbackGroupName | undefined
        size?: number | undefined
      }
    | undefined
  guest?: boolean | undefined
  key?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  self?: string | undefined
  timeZone?: string | undefined
}
type BulkOperationProgress = {
  created?: string | undefined
  failedAccessibleIssues?: { [x: string]: string[] } | undefined
  invalidOrInaccessibleIssueCount?: number | undefined
  processedAccessibleIssues?: bigint[] | undefined
  progressPercent?: bigint | undefined
  started?: string | undefined
  status?:
    | 'ENQUEUED'
    | 'RUNNING'
    | 'COMPLETE'
    | 'FAILED'
    | 'CANCEL_REQUESTED'
    | 'CANCELLED'
    | 'DEAD'
    | undefined
  submittedBy?: User | undefined
  taskId?: string | undefined
  totalIssueCount?: number | undefined
  updated?: string | undefined
}
type BulkChangelogRequestBean = {
  fieldIds?: string[] | undefined
  issueIdsOrKeys: string[]
  maxResults?: number | undefined
  nextPageToken?: string | undefined
}
type ChangeDetails = {
  field?: string | undefined
  fieldId?: string | undefined
  fieldtype?: string | undefined
  from?: string | undefined
  fromString?: string | undefined
  to?: string | undefined
  toString?: string | undefined
}
type Changelog = {
  author?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  created?: string | undefined
  historyMetadata?:
    | {
        activityDescription?: string | undefined
        activityDescriptionKey?: string | undefined
        actor?:
          | {
              avatarUrl?: string | undefined
              displayName?: string | undefined
              displayNameKey?: string | undefined
              id?: string | undefined
              type?: string | undefined
              url?: string | undefined
            }
          | undefined
        cause?:
          | {
              avatarUrl?: string | undefined
              displayName?: string | undefined
              displayNameKey?: string | undefined
              id?: string | undefined
              type?: string | undefined
              url?: string | undefined
            }
          | undefined
        description?: string | undefined
        descriptionKey?: string | undefined
        emailDescription?: string | undefined
        emailDescriptionKey?: string | undefined
        extraData?: { [x: string]: string } | undefined
        generator?:
          | {
              avatarUrl?: string | undefined
              displayName?: string | undefined
              displayNameKey?: string | undefined
              id?: string | undefined
              type?: string | undefined
              url?: string | undefined
            }
          | undefined
        type?: string | undefined
      }
    | undefined
  id?: string | undefined
  items?: ChangeDetails[] | undefined
}
type IssueChangeLog = { changeHistories?: Changelog[] | undefined; issueId?: string | undefined }
type BulkChangelogResponseBean = {
  issueChangeLogs?: IssueChangeLog[] | undefined
  nextPageToken?: string | undefined
}
type DataClassificationTagBean = {
  color?: string | undefined
  description?: string | undefined
  guideline?: string | undefined
  guidelineADF?: string | undefined
  id: string
  name?: string | undefined
  rank?: number | undefined
  status: string
}
type DataClassificationLevelsBean = { classifications?: DataClassificationTagBean[] | undefined }
type IssueCommentListRequestBean = { ids: bigint[] }
type EntityProperty = { key?: string | undefined; value?: { [x: string]: unknown } | undefined }
type Comment = {
  author?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  body?: { [x: string]: unknown } | undefined
  created?: string | undefined
  id?: string | undefined
  jsdAuthorCanSeeRequest?: boolean | undefined
  jsdPublic?: boolean | undefined
  properties?: EntityProperty[] | undefined
  renderedBody?: string | undefined
  self?: string | undefined
  updateAuthor?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  updated?: string | undefined
  visibility?:
    | {
        identifier?: (string | null) | undefined
        type?: 'group' | 'role' | undefined
        value?: string | undefined
      }
    | undefined
}
type PageBeanComment = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Comment[] | undefined
}
type PropertyKey = { key?: string | undefined; self?: string | undefined }
type PropertyKeys = { keys?: PropertyKey[] | undefined }
type ComponentJsonBean = {
  ari?: string | undefined
  description?: string | undefined
  id?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  self?: string | undefined
}
type PageBean2ComponentJsonBean = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ComponentJsonBean[] | undefined
}
type ProjectComponent = {
  ari?: string | undefined
  assignee?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  assigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
  description?: string | undefined
  id?: string | undefined
  isAssigneeTypeValid?: boolean | undefined
  lead?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  leadAccountId?: string | undefined
  leadUserName?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  project?: string | undefined
  projectId?: bigint | undefined
  realAssignee?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  realAssigneeType?:
    | 'PROJECT_DEFAULT'
    | 'COMPONENT_LEAD'
    | 'PROJECT_LEAD'
    | 'UNASSIGNED'
    | undefined
  self?: string | undefined
}
type LimitExceededResponseBean = {
  current_count?: number | undefined
  entity_type?: string | undefined
  error_code?: string | undefined
  limit_type?: string | undefined
  max_allowed_limit?: number | undefined
  message?: string | undefined
  scope_id?: string | undefined
}
type ComponentIssuesCount = { issueCount?: bigint | undefined; self?: string | undefined }
type FieldAssociationSchemeLinksBean = {
  associations?: string | undefined
  projects?: string | undefined
}
type FieldAssociationSchemeMatchedFilters = {
  projectIds?: bigint[] | undefined
  query?: string | undefined
}
type GetFieldAssociationSchemeResponse = {
  description?: string | undefined
  fieldsCount?: bigint | undefined
  id?: bigint | undefined
  isDefault?: boolean | undefined
  links?: FieldAssociationSchemeLinksBean | undefined
  matchedFilters?: FieldAssociationSchemeMatchedFilters | undefined
  name?: string | undefined
}
type PageBean2GetFieldAssociationSchemeResponse = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: GetFieldAssociationSchemeResponse[] | undefined
}
type ErrorCollections = {}
type CreateFieldAssociationSchemeRequest = { description?: string | undefined; name: string }
type CreateFieldAssociationSchemeLinksBean = {
  associations?: string | undefined
  projects?: string | undefined
}
type CreateFieldAssociationSchemeResponse = {
  description?: string | undefined
  id?: bigint | undefined
  links?: CreateFieldAssociationSchemeLinksBean | undefined
  name?: string | undefined
}
type RemoveFieldAssociationsRequestItem = { schemeIds: bigint[] }
type MinimalFieldSchemeToFieldsPartialFailure = {
  error?: string | undefined
  fieldId: string
  schemeId: bigint
  success: boolean
}
type MinimalFieldSchemeToFieldsResponse = { results: MinimalFieldSchemeToFieldsPartialFailure[] }
type UpdateFieldAssociationsRequestItem = {
  restrictedToWorkTypes?: bigint[] | undefined
  schemeIds: bigint[]
}
type FieldSchemeToFieldsPartialFailure = {
  error?: string | undefined
  fieldId: string
  schemeId: bigint
  success: boolean
  workTypeIds: bigint[]
}
type FieldSchemeToFieldsResponse = { results: FieldSchemeToFieldsPartialFailure[] }
type ParameterRemovalDetails = {
  parameters?: string[] | undefined
  schemeId?: bigint | undefined
  workTypeIds?: bigint[] | undefined
}
type RemoveFieldParametersResultError = { code?: string | undefined; message?: string | undefined }
type SuccessOrErrorResults = {
  error?: RemoveFieldParametersResultError | undefined
  fieldId?: string | undefined
  schemeId?: bigint | undefined
  success?: boolean | undefined
  workTypeIds?: bigint[] | undefined
}
type RemoveFieldParametersResult = { results?: SuccessOrErrorResults[] | undefined }
type FieldsSchemeItemParameter = {
  description?: string | undefined
  isRequired?: boolean | undefined
  rendererType?: 'jira-text-renderer' | 'atlassian-wiki-renderer' | undefined
}
type FieldsSchemeItemWorkTypeParameter = {
  description?: string | undefined
  isRequired?: boolean | undefined
  rendererType?: 'jira-text-renderer' | 'atlassian-wiki-renderer' | undefined
  workTypeId?: bigint | undefined
}
type UpdateFieldSchemeParametersRequest = {
  parameters?: FieldsSchemeItemParameter | undefined
  schemeIds?: bigint[] | undefined
  workTypeParameters?: FieldsSchemeItemWorkTypeParameter[] | undefined
}
type UpdateFieldSchemeParametersPartialFailure = {
  error?: string | undefined
  fieldId: string
  schemeId: bigint
  success: boolean
  workTypeId?: bigint | undefined
}
type UpdateFieldSchemeParametersResponse = { results: UpdateFieldSchemeParametersPartialFailure[] }
type GetProjectsWithFieldSchemesResponse = {
  projectId?: bigint | undefined
  schemeId?: bigint | undefined
}
type PageBean2GetProjectsWithFieldSchemesResponse = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: GetProjectsWithFieldSchemesResponse[] | undefined
}
type FieldSchemeToProjectsRequest = { projectIds: bigint[] }
type FieldSchemeToProjectsPartialFailure = {
  error?: string | undefined
  projectId: bigint
  schemeId: bigint
  success: boolean
}
type FieldSchemeToProjectsResponse = { results: FieldSchemeToProjectsPartialFailure[] }
type DeleteFieldAssociationSchemeResponse = {
  deleted?: boolean | undefined
  id?: string | undefined
}
type FieldAssociationSchemeLinks = {
  associations?: string | undefined
  projects?: string | undefined
}
type GetFieldAssociationSchemeByIdResponse = {
  description?: string | undefined
  fieldsCount?: bigint | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  links?: FieldAssociationSchemeLinks | undefined
  name?: string | undefined
}
type UpdateFieldAssociationSchemeRequest = {
  description?: string | undefined
  name?: string | undefined
}
type UpdateFieldAssociationSchemeLinksBean = {
  associations?: string | undefined
  projects?: string | undefined
}
type UpdateFieldAssociationSchemeResponse = {
  description?: string | undefined
  id?: bigint | undefined
  links?: UpdateFieldAssociationSchemeLinksBean | undefined
  name?: string | undefined
}
type SearchResultFieldParameters = {
  description?: string | undefined
  isRequired?: boolean | undefined
  rendererType?: string | undefined
}
type SearchResultWorkTypeParameters = {
  description?: string | undefined
  isRequired?: boolean | undefined
  rendererType?: string | undefined
  workTypeId?: string | undefined
}
type FieldAssociationSchemeFieldSearchResult = {
  allowedOperations?: string[] | undefined
  fieldId?: string | undefined
  parameters?: SearchResultFieldParameters | undefined
  restrictedToWorkTypes?: string[] | undefined
  workTypeParameters?: SearchResultWorkTypeParameters[] | undefined
}
type PageBean2FieldAssociationSchemeFieldSearchResult = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldAssociationSchemeFieldSearchResult[] | undefined
}
type FieldAssociationParameters = {
  description?: string | undefined
  isRequired: boolean
  rendererType?: string | undefined
}
type WorkTypeParameters = {
  description?: string | undefined
  isRequired: boolean
  rendererType?: string | undefined
  workTypeId: bigint
}
type GetFieldAssociationParametersResponse = {
  fieldId: string
  parameters?: FieldAssociationParameters | undefined
  workTypeParameters?: WorkTypeParameters[] | undefined
}
type FieldAssociationSchemeProjectSearchResult = {
  avatarUrls?: { [x: string]: string } | undefined
  deleted?: boolean | undefined
  id?: string | undefined
  key?: string | undefined
  name?: string | undefined
}
type PageBean2FieldAssociationSchemeProjectSearchResult = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldAssociationSchemeProjectSearchResult[] | undefined
}
type Configuration = {
  attachmentsEnabled?: boolean | undefined
  issueLinkingEnabled?: boolean | undefined
  subTasksEnabled?: boolean | undefined
  timeTrackingConfiguration?:
    | {
        defaultUnit: 'minute' | 'hour' | 'day' | 'week'
        timeFormat: 'pretty' | 'days' | 'hours'
        workingDaysPerWeek: number
        workingHoursPerDay: number
      }
    | undefined
  timeTrackingEnabled?: boolean | undefined
  unassignedIssuesAllowed?: boolean | undefined
  votingEnabled?: boolean | undefined
  watchingEnabled?: boolean | undefined
}
type TimeTrackingProvider = { key: string; name?: string | undefined; url?: string | undefined }
type TimeTrackingConfiguration = {
  defaultUnit: 'minute' | 'hour' | 'day' | 'week'
  timeFormat: 'pretty' | 'days' | 'hours'
  workingDaysPerWeek: number
  workingHoursPerDay: number
}
type CustomFieldOption = { self?: string | undefined; value?: string | undefined }
type SimplifiedHierarchyLevel = {
  aboveLevelId?: bigint | undefined
  belowLevelId?: bigint | undefined
  externalUuid?: string | undefined
  hierarchyLevelNumber?: number | undefined
  id?: bigint | undefined
  issueTypeIds?: bigint[] | undefined
  level?: number | undefined
  name?: string | undefined
  projectConfigurationId?: bigint | undefined
}
type IssueTypeDetails = {
  avatarId?: bigint | undefined
  description?: string | undefined
  entityId?: string | undefined
  hierarchyLevel?: number | undefined
  iconUrl?: string | undefined
  id?: string | undefined
  name?: string | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
  subtask?: boolean | undefined
}
type VersionApprover = {
  accountId?: string | undefined
  declineReason?: string | undefined
  description?: string | undefined
  status?: string | undefined
}
type SimpleLink = {
  href?: string | undefined
  iconClass?: string | undefined
  id?: string | undefined
  label?: string | undefined
  styleClass?: string | undefined
  title?: string | undefined
  weight?: number | undefined
}
type Version = {
  approvers?: VersionApprover[] | undefined
  archived?: boolean | undefined
  description?: string | undefined
  driver?: string | undefined
  expand?: string | undefined
  id?: string | undefined
  issuesStatusForFixVersion?:
    | {
        done?: bigint | undefined
        inProgress?: bigint | undefined
        toDo?: bigint | undefined
        unmapped?: bigint | undefined
      }
    | undefined
  moveUnfixedIssuesTo?: string | undefined
  name?: string | undefined
  operations?: SimpleLink[] | undefined
  overdue?: boolean | undefined
  project?: string | undefined
  projectId?: bigint | undefined
  releaseDate?: string | undefined
  released?: boolean | undefined
  self?: string | undefined
  startDate?: string | undefined
  userReleaseDate?: string | undefined
  userStartDate?: string | undefined
}
type RoleActor = {
  actorGroup?:
    | { displayName?: string | undefined; groupId?: string | undefined; name?: string | undefined }
    | undefined
  actorUser?: { accountId?: string | undefined } | undefined
  avatarUrl?: string | undefined
  displayName?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  type?: 'atlassian-group-role-actor' | 'atlassian-user-role-actor' | undefined
}
type SharePermission = {
  group?:
    | {
        groupId?: (string | null) | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
  id?: bigint | undefined
  project?:
    | {
        archived?: boolean | undefined
        archivedBy?:
          | {
              accountId?: string | undefined
              accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
              active?: boolean | undefined
              appType?: string | undefined
              applicationRoles?:
                | {
                    callback?: ListWrapperCallbackApplicationRole | undefined
                    items?: ApplicationRole[] | undefined
                    'max-results'?: number | undefined
                    pagingCallback?: ListWrapperCallbackApplicationRole | undefined
                    size?: number | undefined
                  }
                | undefined
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              displayName?: string | undefined
              emailAddress?: string | undefined
              expand?: string | undefined
              groups?:
                | {
                    callback?: ListWrapperCallbackGroupName | undefined
                    items?: GroupName[] | undefined
                    'max-results'?: number | undefined
                    pagingCallback?: ListWrapperCallbackGroupName | undefined
                    size?: number | undefined
                  }
                | undefined
              guest?: boolean | undefined
              key?: string | undefined
              locale?: string | undefined
              name?: string | undefined
              self?: string | undefined
              timeZone?: string | undefined
            }
          | undefined
        archivedDate?: string | undefined
        assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        components?: ProjectComponent[] | undefined
        deleted?: boolean | undefined
        deletedBy?:
          | {
              accountId?: string | undefined
              accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
              active?: boolean | undefined
              appType?: string | undefined
              applicationRoles?:
                | {
                    callback?: ListWrapperCallbackApplicationRole | undefined
                    items?: ApplicationRole[] | undefined
                    'max-results'?: number | undefined
                    pagingCallback?: ListWrapperCallbackApplicationRole | undefined
                    size?: number | undefined
                  }
                | undefined
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              displayName?: string | undefined
              emailAddress?: string | undefined
              expand?: string | undefined
              groups?:
                | {
                    callback?: ListWrapperCallbackGroupName | undefined
                    items?: GroupName[] | undefined
                    'max-results'?: number | undefined
                    pagingCallback?: ListWrapperCallbackGroupName | undefined
                    size?: number | undefined
                  }
                | undefined
              guest?: boolean | undefined
              key?: string | undefined
              locale?: string | undefined
              name?: string | undefined
              self?: string | undefined
              timeZone?: string | undefined
            }
          | undefined
        deletedDate?: string | undefined
        description?: string | undefined
        email?: string | undefined
        expand?: string | undefined
        favourite?: boolean | undefined
        id?: string | undefined
        insight?:
          | { lastIssueUpdateTime?: string | undefined; totalIssueCount?: bigint | undefined }
          | undefined
        isPrivate?: boolean | undefined
        issueTypeHierarchy?:
          | { baseLevelId?: bigint | undefined; levels?: SimplifiedHierarchyLevel[] | undefined }
          | undefined
        issueTypes?: IssueTypeDetails[] | undefined
        key?: string | undefined
        landingPageInfo?:
          | {
              attributes?: { [x: string]: string } | undefined
              boardId?: bigint | undefined
              boardName?: string | undefined
              projectKey?: string | undefined
              projectType?: string | undefined
              queueCategory?: string | undefined
              queueId?: bigint | undefined
              queueName?: string | undefined
              simpleBoard?: boolean | undefined
              simplified?: boolean | undefined
              url?: string | undefined
            }
          | undefined
        lead?:
          | {
              accountId?: string | undefined
              accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
              active?: boolean | undefined
              appType?: string | undefined
              applicationRoles?:
                | {
                    callback?: ListWrapperCallbackApplicationRole | undefined
                    items?: ApplicationRole[] | undefined
                    'max-results'?: number | undefined
                    pagingCallback?: ListWrapperCallbackApplicationRole | undefined
                    size?: number | undefined
                  }
                | undefined
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              displayName?: string | undefined
              emailAddress?: string | undefined
              expand?: string | undefined
              groups?:
                | {
                    callback?: ListWrapperCallbackGroupName | undefined
                    items?: GroupName[] | undefined
                    'max-results'?: number | undefined
                    pagingCallback?: ListWrapperCallbackGroupName | undefined
                    size?: number | undefined
                  }
                | undefined
              guest?: boolean | undefined
              key?: string | undefined
              locale?: string | undefined
              name?: string | undefined
              self?: string | undefined
              timeZone?: string | undefined
            }
          | undefined
        name?: string | undefined
        permissions?: { canEdit?: boolean | undefined } | undefined
        projectCategory?:
          | {
              description?: string | undefined
              id?: string | undefined
              name?: string | undefined
              self?: string | undefined
            }
          | undefined
        projectTypeKey?: 'software' | 'service_desk' | 'business' | 'product_discovery' | undefined
        properties?: { [x: string]: { [x: string]: unknown } } | undefined
        retentionTillDate?: string | undefined
        roles?: { [x: string]: string } | undefined
        self?: string | undefined
        simplified?: boolean | undefined
        style?: 'classic' | 'next-gen' | undefined
        url?: string | undefined
        uuid?: string | undefined
        versions?: Version[] | undefined
      }
    | undefined
  role?:
    | {
        actors?: RoleActor[] | undefined
        admin?: boolean | undefined
        currentUserRole?: boolean | undefined
        default?: boolean | undefined
        description?: string | undefined
        id?: bigint | undefined
        name?: string | undefined
        roleConfigurable?: boolean | undefined
        scope?:
          | {
              project?:
                | {
                    avatarUrls?:
                      | {
                          '16x16'?: string | undefined
                          '24x24'?: string | undefined
                          '32x32'?: string | undefined
                          '48x48'?: string | undefined
                        }
                      | undefined
                    id?: string | undefined
                    key?: string | undefined
                    name?: string | undefined
                    projectCategory?:
                      | {
                          description?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          self?: string | undefined
                        }
                      | undefined
                    projectTypeKey?:
                      | 'software'
                      | 'service_desk'
                      | 'business'
                      | 'product_discovery'
                      | undefined
                    self?: string | undefined
                    simplified?: boolean | undefined
                  }
                | undefined
              type?: 'PROJECT' | 'TEMPLATE' | undefined
            }
          | undefined
        self?: string | undefined
        translatedName?: string | undefined
      }
    | undefined
  type:
    | 'user'
    | 'group'
    | 'project'
    | 'projectRole'
    | 'global'
    | 'loggedin'
    | 'authenticated'
    | 'project-unknown'
  user?:
    | {
        accountId?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
}
type Dashboard = {
  automaticRefreshMs?: number | undefined
  description?: string | undefined
  editPermissions?: SharePermission[] | undefined
  id?: string | undefined
  isFavourite?: boolean | undefined
  isWritable?: boolean | undefined
  name?: string | undefined
  owner?:
    | {
        accountId?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
  popularity?: bigint | undefined
  rank?: number | undefined
  self?: string | undefined
  sharePermissions?: SharePermission[] | undefined
  systemDashboard?: boolean | undefined
  view?: string | undefined
}
type PageOfDashboards = {
  dashboards?: Dashboard[] | undefined
  maxResults?: number | undefined
  next?: string | undefined
  prev?: string | undefined
  startAt?: number | undefined
  total?: number | undefined
}
type DashboardDetails = {
  description?: string | undefined
  editPermissions: SharePermission[]
  name: string
  sharePermissions: SharePermission[]
}
type BulkEditShareableEntityRequest = {
  action: 'changeOwner' | 'changePermission' | 'addPermission' | 'removePermission'
  changeOwnerDetails?: { autofixName: boolean; newOwner: string } | undefined
  entityIds: bigint[]
  extendAdminPermissions?: boolean | undefined
  permissionDetails?:
    | { editPermissions: SharePermission[]; sharePermissions: SharePermission[] }
    | undefined
}
type BulkEditActionError = { errorMessages: string[]; errors: { [x: string]: string } }
type BulkEditShareableEntityResponse = {
  action: 'changeOwner' | 'changePermission' | 'addPermission' | 'removePermission'
  entityErrors?: { [x: string]: BulkEditActionError } | undefined
}
type AvailableDashboardGadget = {
  moduleKey?: string | undefined
  title: string
  uri?: string | undefined
}
type AvailableDashboardGadgetsResponse = { gadgets: AvailableDashboardGadget[] }
type PageBeanDashboard = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Dashboard[] | undefined
}
type DashboardGadget = {
  color: 'blue' | 'red' | 'yellow' | 'green' | 'cyan' | 'purple' | 'gray' | 'white'
  id: bigint
  moduleKey?: string | undefined
  position: {
    'The column position of the gadget.': number
    'The row position of the gadget.': number
  }
  title: string
  uri?: string | undefined
}
type DashboardGadgetResponse = { gadgets: DashboardGadget[] }
type DashboardGadgetSettings = {
  color?: string | undefined
  ignoreUriAndModuleKeyValidation?: boolean | undefined
  moduleKey?: string | undefined
  position?:
    | { 'The column position of the gadget.': number; 'The row position of the gadget.': number }
    | undefined
  title?: string | undefined
  uri?: string | undefined
}
type DashboardGadgetUpdateRequest = {
  color?: string | undefined
  position?:
    | { 'The column position of the gadget.': number; 'The row position of the gadget.': number }
    | undefined
  title?: string | undefined
}
type WorkspaceDataPolicy = { anyContentBlocked?: boolean | undefined }
type ProjectWithDataPolicy = {
  dataPolicy?: { anyContentBlocked?: boolean | undefined } | undefined
  id?: bigint | undefined
}
type ProjectDataPolicies = { projectDataPolicies?: ProjectWithDataPolicy[] | undefined }
type IssueEvent = { id?: bigint | undefined; name?: string | undefined }
type JiraExpressionForAnalysis = {
  contextVariables?: { [x: string]: string } | undefined
  expressions: string[]
}
type JiraExpressionComplexity = {
  expensiveOperations: string
  variables?: { [x: string]: string } | undefined
}
type JiraExpressionValidationError = {
  column?: number | undefined
  expression?: string | undefined
  line?: number | undefined
  message: string
  type: 'syntax' | 'type' | 'other'
}
type JiraExpressionAnalysis = {
  complexity?: JiraExpressionComplexity | undefined
  errors?: JiraExpressionValidationError[] | undefined
  expression: string
  type?: string | undefined
  valid: boolean
}
type JiraExpressionsAnalysis = { results: JiraExpressionAnalysis[] }
type UserContextVariable = { accountId: string; type: string }
type IssueContextVariable = { id?: bigint | undefined; key?: string | undefined; type: string }
type JsonContextVariable = { type: string; value?: { [x: string]: unknown } | undefined }
type CustomContextVariable = UserContextVariable | IssueContextVariable | JsonContextVariable
type JiraExpressionEvalRequestBean = {
  context?:
    | {
        board?: bigint | undefined
        custom?: CustomContextVariable[] | undefined
        customerRequest?: bigint | undefined
        issue?: { id?: bigint | undefined; key?: string | undefined } | undefined
        issues?:
          | {
              jql?:
                | {
                    maxResults?: number | undefined
                    query?: string | undefined
                    startAt?: bigint | undefined
                    validation?: 'strict' | 'warn' | 'none' | undefined
                  }
                | undefined
            }
          | undefined
        project?: { id?: bigint | undefined; key?: string | undefined } | undefined
        serviceDesk?: bigint | undefined
        sprint?: bigint | undefined
      }
    | undefined
  expression: string
}
type IssuesJqlMetaDataBean = {
  count: number
  maxResults: number
  startAt: bigint
  totalCount: bigint
  validationWarnings?: string[] | undefined
}
type JiraExpressionResult = {
  meta?:
    | {
        complexity?:
          | {
              beans: { limit: number; value: number }
              expensiveOperations: { limit: number; value: number }
              primitiveValues: { limit: number; value: number }
              steps: { limit: number; value: number }
            }
          | undefined
        issues?: { jql?: IssuesJqlMetaDataBean | undefined } | undefined
      }
    | undefined
  value: { [x: string]: unknown }
}
type JiraExpressionEvaluateRequestBean = {
  context?:
    | {
        board?: bigint | undefined
        custom?: CustomContextVariable[] | undefined
        customerRequest?: bigint | undefined
        issue?: { id?: bigint | undefined; key?: string | undefined } | undefined
        issues?:
          | {
              jql?:
                | {
                    maxResults?: number | undefined
                    nextPageToken?: string | undefined
                    query?: string | undefined
                  }
                | undefined
            }
          | undefined
        project?: { id?: bigint | undefined; key?: string | undefined } | undefined
        serviceDesk?: bigint | undefined
        sprint?: bigint | undefined
      }
    | undefined
  expression: string
}
type JExpEvaluateIssuesJqlMetaDataBean = { isLast?: boolean | undefined; nextPageToken: string }
type JExpEvaluateJiraExpressionResultBean = {
  meta?:
    | {
        complexity?:
          | {
              beans: { limit: number; value: number }
              expensiveOperations: { limit: number; value: number }
              primitiveValues: { limit: number; value: number }
              steps: { limit: number; value: number }
            }
          | undefined
        issues?: { jql?: JExpEvaluateIssuesJqlMetaDataBean | undefined } | undefined
      }
    | undefined
  value: { [x: string]: unknown }
}
type FieldDetails = {
  clauseNames?: string[] | undefined
  custom?: boolean | undefined
  id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  navigable?: boolean | undefined
  orderable?: boolean | undefined
  schema?:
    | {
        configuration?: { [x: string]: { [x: string]: unknown } } | undefined
        custom?: string | undefined
        customId?: bigint | undefined
        items?: string | undefined
        system?: string | undefined
        type: string
      }
    | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  searchable?: boolean | undefined
}
type CustomFieldDefinitionJsonBean = {
  description?: string | undefined
  name: string
  searcherKey?:
    | 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:daterange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher'
    | undefined
  type: string
}
type AssociationContextObject = { identifier?: { [x: string]: unknown } | undefined; type: string }
type FieldIdentifierObject = { identifier?: { [x: string]: unknown } | undefined; type: string }
type FieldAssociationsRequest = {
  associationContexts: AssociationContextObject[]
  fields: FieldIdentifierObject[]
}
type FieldLastUsed = {
  type?: 'TRACKED' | 'NOT_TRACKED' | 'NO_INFORMATION' | undefined
  value?: string | undefined
}
type JsonTypeBean = {
  configuration?: { [x: string]: { [x: string]: unknown } } | undefined
  custom?: string | undefined
  customId?: bigint | undefined
  items?: string | undefined
  system?: string | undefined
  type: string
}
type Field = {
  contextsCount?: bigint | undefined
  description?: string | undefined
  id: string
  isLocked?: boolean | undefined
  isUnscreenable?: boolean | undefined
  key?: string | undefined
  lastUsed?: FieldLastUsed | undefined
  name: string
  projectsCount?: bigint | undefined
  schema: JsonTypeBean
  screensCount?: bigint | undefined
  searcherKey?: string | undefined
  stableId?: string | undefined
  translatedDescription?: string | undefined
  translatedName?: string | undefined
  typeDisplayName?: string | undefined
}
type PageBeanField = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Field[] | undefined
}
type UpdateCustomFieldDetails = {
  description?: string | undefined
  name?: string | undefined
  searcherKey?:
    | 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:daterange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher'
    | undefined
}
type FieldProjectAssociation = { projectId?: string | undefined }
type PageBeanFieldProjectAssociation = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldProjectAssociation[] | undefined
}
type CustomFieldContext = {
  description: string
  id: string
  isAnyIssueType: boolean
  isGlobalContext: boolean
  name: string
}
type PageBeanCustomFieldContext = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: CustomFieldContext[] | undefined
}
type CreateCustomFieldContext = {
  description?: string | undefined
  id?: string | undefined
  issueTypeIds?: string[] | undefined
  name: string
  projectIds?: string[] | undefined
}
type CustomFieldContextDefaultValueCascadingOption = {
  cascadingOptionId?: string | undefined
  contextId: string
  optionId: string
  type: string
}
type CustomFieldContextDefaultValueMultipleOption = {
  contextId: string
  optionIds: string[]
  type: string
}
type CustomFieldContextDefaultValueSingleOption = {
  contextId: string
  optionId: string
  type: string
}
type UserFilter = {
  enabled: boolean
  groups?: string[] | undefined
  roleIds?: bigint[] | undefined
}
type CustomFieldContextSingleUserPickerDefaults = {
  accountId: string
  contextId: string
  type: string
  userFilter: UserFilter
}
type CustomFieldContextDefaultValueMultiUserPicker = {
  accountIds: string[]
  contextId: string
  type: string
}
type CustomFieldContextDefaultValueSingleGroupPicker = {
  contextId: string
  groupId: string
  type: string
}
type CustomFieldContextDefaultValueMultipleGroupPicker = {
  contextId: string
  groupIds: string[]
  type: string
}
type CustomFieldContextDefaultValueDate = {
  contextId: string
  date?: string | undefined
  type: string
  useCurrent?: boolean | undefined
}
type CustomFieldContextDefaultValueDateTime = {
  contextId: string
  dateTime?: string | undefined
  type: string
  useCurrent?: boolean | undefined
}
type CustomFieldContextDefaultValueURL = { contextId: string; type: string; url: string }
type CustomFieldContextDefaultValueProject = { contextId: string; projectId: string; type: string }
type CustomFieldContextDefaultValueFloat = { contextId: string; number: number; type: string }
type CustomFieldContextDefaultValueLabels = { contextId: string; labels: string[]; type: string }
type CustomFieldContextDefaultValueTextField = {
  contextId: string
  text?: string | undefined
  type: string
}
type CustomFieldContextDefaultValueTextArea = {
  contextId: string
  text?: string | undefined
  type: string
}
type CustomFieldContextDefaultValueLongText = {
  contextId: string
  text?: string | undefined
  type: string
}
type CustomFieldContextDefaultValueReadOnly = {
  contextId: string
  text?: string | undefined
  type: string
}
type CustomFieldContextDefaultValueSingleVersionPicker = {
  contextId: string
  type: string
  versionId: string
  versionOrder?: string | undefined
}
type CustomFieldContextDefaultValueMultipleVersionPicker = {
  contextId: string
  type: string
  versionIds: string[]
  versionOrder?: string | undefined
}
type CustomFieldContextDefaultValueForgeStringField = {
  contextId: string
  text?: string | undefined
  type: string
}
type CustomFieldContextDefaultValueForgeMultiStringField = {
  contextId: string
  type: string
  values?: string[] | undefined
}
type CustomFieldContextDefaultValueForgeObjectField = {
  contextId: string
  object?: { [x: string]: unknown } | undefined
  type: string
}
type CustomFieldContextDefaultValueForgeDateTimeField = {
  contextId: string
  dateTime?: string | undefined
  type: string
  useCurrent?: boolean | undefined
}
type CustomFieldContextDefaultValueForgeGroupField = {
  contextId: string
  groupId: string
  type: string
}
type CustomFieldContextDefaultValueForgeMultiGroupField = {
  contextId: string
  groupIds: string[]
  type: string
}
type CustomFieldContextDefaultValueForgeNumberField = {
  contextId: string
  number: number
  type: string
}
type CustomFieldContextDefaultValueForgeUserField = {
  accountId: string
  contextId: string
  type: string
  userFilter: UserFilter
}
type CustomFieldContextDefaultValueForgeMultiUserField = {
  accountIds: string[]
  contextId: string
  type: string
}
type CustomFieldContextDefaultValue =
  | CustomFieldContextDefaultValueCascadingOption
  | CustomFieldContextDefaultValueMultipleOption
  | CustomFieldContextDefaultValueSingleOption
  | CustomFieldContextSingleUserPickerDefaults
  | CustomFieldContextDefaultValueMultiUserPicker
  | CustomFieldContextDefaultValueSingleGroupPicker
  | CustomFieldContextDefaultValueMultipleGroupPicker
  | CustomFieldContextDefaultValueDate
  | CustomFieldContextDefaultValueDateTime
  | CustomFieldContextDefaultValueURL
  | CustomFieldContextDefaultValueProject
  | CustomFieldContextDefaultValueFloat
  | CustomFieldContextDefaultValueLabels
  | CustomFieldContextDefaultValueTextField
  | CustomFieldContextDefaultValueTextArea
  | CustomFieldContextDefaultValueLongText
  | CustomFieldContextDefaultValueReadOnly
  | CustomFieldContextDefaultValueSingleVersionPicker
  | CustomFieldContextDefaultValueMultipleVersionPicker
  | CustomFieldContextDefaultValueForgeStringField
  | CustomFieldContextDefaultValueForgeMultiStringField
  | CustomFieldContextDefaultValueForgeObjectField
  | CustomFieldContextDefaultValueForgeDateTimeField
  | CustomFieldContextDefaultValueForgeGroupField
  | CustomFieldContextDefaultValueForgeMultiGroupField
  | CustomFieldContextDefaultValueForgeNumberField
  | CustomFieldContextDefaultValueForgeUserField
  | CustomFieldContextDefaultValueForgeMultiUserField
type PageBeanCustomFieldContextDefaultValue = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: CustomFieldContextDefaultValue[] | undefined
}
type CustomFieldContextDefaultValueUpdate = {
  defaultValues?: CustomFieldContextDefaultValue[] | undefined
}
type IssueTypeDefaultValue = {
  isAnyIssueType?: (boolean | null) | undefined
  issueTypeId?: (string | null) | undefined
  value?: CustomFieldContextDefaultValue | undefined
}
type ContextDefaultValues = {
  contextId: bigint
  defaultValues?: IssueTypeDefaultValue[] | undefined
}
type PageBeanContextDefaultValues = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ContextDefaultValues[] | undefined
}
type IssueTypeDefaultValueUpdate = {
  contextId: bigint
  isAnyIssueType?: (boolean | null) | undefined
  issueTypeId?: (string | null) | undefined
  value?: CustomFieldContextDefaultValue | undefined
}
type CustomFieldContextDefaultValuesUpdate = {
  defaultValues?: IssueTypeDefaultValueUpdate[] | undefined
}
type IssueTypeToContextMapping = {
  contextId: string
  isAnyIssueType?: boolean | undefined
  issueTypeId?: string | undefined
}
type PageBeanIssueTypeToContextMapping = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeToContextMapping[] | undefined
}
type ProjectIssueTypeMapping = { issueTypeId: string; projectId: string }
type ProjectIssueTypeMappings = { mappings: ProjectIssueTypeMapping[] }
type ContextForProjectAndIssueType = { contextId: string; issueTypeId: string; projectId: string }
type PageBeanContextForProjectAndIssueType = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ContextForProjectAndIssueType[] | undefined
}
type CustomFieldContextProjectMapping = {
  contextId: string
  isGlobalContext?: boolean | undefined
  projectId?: string | undefined
}
type PageBeanCustomFieldContextProjectMapping = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: CustomFieldContextProjectMapping[] | undefined
}
type CustomFieldContextUpdateDetails = {
  description?: string | undefined
  name?: string | undefined
}
type AddIssueTypesToContext = {
  defaultValue?: CustomFieldContextDefaultValue | undefined
  isAnyIssueType?: boolean | undefined
  issueTypeIds?: ((string | null)[] | null) | undefined
}
type IssueTypeIds = { issueTypeIds: string[] }
type CustomFieldContextOption = {
  disabled: boolean
  id: string
  optionId?: string | undefined
  value: string
}
type PageBeanCustomFieldContextOption = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: CustomFieldContextOption[] | undefined
}
type CustomFieldOptionCreate = {
  disabled?: boolean | undefined
  optionId?: string | undefined
  value: string
}
type BulkCustomFieldOptionCreateRequest = { options?: CustomFieldOptionCreate[] | undefined }
type CustomFieldCreatedContextOptionsList = { options?: CustomFieldContextOption[] | undefined }
type CustomFieldOptionUpdate = {
  disabled?: boolean | undefined
  id: string
  value?: string | undefined
}
type BulkCustomFieldOptionUpdateRequest = { options?: CustomFieldOptionUpdate[] | undefined }
type CustomFieldUpdatedContextOptionsList = { options?: CustomFieldOptionUpdate[] | undefined }
type OrderOfCustomFieldOptions = {
  after?: string | undefined
  customFieldOptionIds: string[]
  position?: 'First' | 'Last' | undefined
}
type TaskProgressBeanRemoveOptionFromIssuesResult = {
  description?: string | undefined
  elapsedRuntime: bigint
  finished?: bigint | undefined
  id: string
  lastUpdate: bigint
  message?: string | undefined
  progress: bigint
  result?:
    | {
        errors?:
          | {
              errorMessages?: string[] | undefined
              errors?: { [x: string]: string } | undefined
              httpStatusCode?: number | undefined
            }
          | undefined
        modifiedIssues?: bigint[] | undefined
        unmodifiedIssues?: bigint[] | undefined
      }
    | undefined
  self: string
  started?: bigint | undefined
  status: 'ENQUEUED' | 'RUNNING' | 'COMPLETE' | 'FAILED' | 'CANCEL_REQUESTED' | 'CANCELLED' | 'DEAD'
  submitted: bigint
  submittedBy: bigint
}
type ProjectIds = { projectIds: string[] }
type Context = {
  id?: bigint | undefined
  name?: string | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
}
type PageBeanContext = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Context[] | undefined
}
type ScreenWithTab = {
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  tab?: { id?: bigint | undefined; name: string } | undefined
}
type PageBeanScreenWithTab = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ScreenWithTab[] | undefined
}
type ProjectScopeBean = {
  attributes?: ('notSelectable' | 'defaultValue')[] | undefined
  id?: bigint | undefined
}
type IssueFieldOptionConfiguration = {
  attributes?: ('notSelectable' | 'defaultValue')[] | undefined
  scope?:
    | {
        global?: { attributes?: ('notSelectable' | 'defaultValue')[] | undefined } | undefined
        projects?: bigint[] | undefined
        projects2?: ProjectScopeBean[] | undefined
      }
    | undefined
}
type IssueFieldOption = {
  config?: IssueFieldOptionConfiguration | undefined
  id: bigint
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  value: string
}
type PageBeanIssueFieldOption = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueFieldOption[] | undefined
}
type IssueFieldOptionCreateBean = {
  config?: IssueFieldOptionConfiguration | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  value: string
}
type TaskProgressBeanObject = {
  description?: string | undefined
  elapsedRuntime: bigint
  finished?: bigint | undefined
  id: string
  lastUpdate: bigint
  message?: string | undefined
  progress: bigint
  result?: { [x: string]: unknown } | undefined
  self: string
  started?: bigint | undefined
  status: 'ENQUEUED' | 'RUNNING' | 'COMPLETE' | 'FAILED' | 'CANCEL_REQUESTED' | 'CANCELLED' | 'DEAD'
  submitted: bigint
  submittedBy: bigint
}
type FieldConfigurationDetails = { description?: string | undefined; name: string }
type PageBeanFieldConfigurationDetails = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldConfigurationDetails[] | undefined
}
type FieldConfiguration = {
  description: string
  id: bigint
  isDefault?: boolean | undefined
  name: string
}
type FieldConfigurationItem = {
  description?: string | undefined
  id: string
  isHidden?: boolean | undefined
  isRequired?: boolean | undefined
  renderer?: string | undefined
}
type PageBeanFieldConfigurationItem = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldConfigurationItem[] | undefined
}
type FieldConfigurationItemsDetails = { fieldConfigurationItems: FieldConfigurationItem[] }
type FieldConfigurationScheme = { description?: string | undefined; id: string; name: string }
type PageBeanFieldConfigurationScheme = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldConfigurationScheme[] | undefined
}
type UpdateFieldConfigurationSchemeDetails = { description?: string | undefined; name: string }
type FieldConfigurationIssueTypeItem = {
  fieldConfigurationId: string
  fieldConfigurationSchemeId: string
  issueTypeId: string
}
type PageBeanFieldConfigurationIssueTypeItem = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldConfigurationIssueTypeItem[] | undefined
}
type FieldConfigurationSchemeProjects = {
  fieldConfigurationScheme?: FieldConfigurationScheme | undefined
  projectIds: string[]
}
type PageBeanFieldConfigurationSchemeProjects = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FieldConfigurationSchemeProjects[] | undefined
}
type FieldConfigurationSchemeProjectAssociation = {
  fieldConfigurationSchemeId?: string | undefined
  projectId: string
}
type FieldConfigurationToIssueTypeMapping = { fieldConfigurationId: string; issueTypeId: string }
type AssociateFieldConfigurationsWithIssueTypesRequest = {
  mappings: FieldConfigurationToIssueTypeMapping[]
}
type IssueTypeIdsToRemove = { issueTypeIds: string[] }
type FilterSubscription = {
  group?:
    | {
        groupId?: (string | null) | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
  id?: bigint | undefined
  user?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
}
type Filter = {
  approximateLastUsed?: string | undefined
  description?: string | undefined
  editPermissions?: SharePermission[] | undefined
  favourite?: boolean | undefined
  favouritedCount?: bigint | undefined
  id?: string | undefined
  jql?: string | undefined
  name: string
  owner?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  searchUrl?: string | undefined
  self?: string | undefined
  sharePermissions?: SharePermission[] | undefined
  sharedUsers?:
    | {
        'end-index'?: number | undefined
        items?: User[] | undefined
        'max-results'?: number | undefined
        size?: number | undefined
        'start-index'?: number | undefined
      }
    | undefined
  subscriptions?:
    | {
        'end-index'?: number | undefined
        items?: FilterSubscription[] | undefined
        'max-results'?: number | undefined
        size?: number | undefined
        'start-index'?: number | undefined
      }
    | undefined
  viewUrl?: string | undefined
}
type DefaultShareScope = { scope: 'GLOBAL' | 'AUTHENTICATED' | 'PRIVATE' }
type FilterDetails = {
  approximateLastUsed?: string | undefined
  description?: string | undefined
  editPermissions?: SharePermission[] | undefined
  expand?: string | undefined
  favourite?: boolean | undefined
  favouritedCount?: bigint | undefined
  id?: string | undefined
  jql?: string | undefined
  name: string
  owner?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  searchUrl?: string | undefined
  self?: string | undefined
  sharePermissions?: SharePermission[] | undefined
  subscriptions?: FilterSubscription[] | undefined
  viewUrl?: string | undefined
}
type PageBeanFilterDetails = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: FilterDetails[] | undefined
}
type ColumnItem = { label?: string | undefined; value?: string | undefined }
type ColumnRequestBody = { columns?: string[] | undefined }
type ChangeFilterOwner = { accountId: string }
type SharePermissionInputBean = {
  accountId?: string | undefined
  groupId?: string | undefined
  groupname?: string | undefined
  projectId?: string | undefined
  projectRoleId?: string | undefined
  rights?: number | undefined
  type: 'user' | 'project' | 'group' | 'projectRole' | 'global' | 'authenticated'
}
type ProjectPinAction = { action: 'PIN' | 'UNPIN'; projectIdOrKey: string }
type ForgePanelProjectPinRequest = { moduleId: string; projectList: ProjectPinAction[] }
type ForgePanelProjectPinAsyncResponse = { taskId?: string | undefined }
type ForgePanelProjectPinStatusRequest = { moduleId: string; projectList: string[] }
type ForgePanelProjectPinStatus = {
  error?: string | undefined
  pinned?: boolean | undefined
  pinnedAt?: bigint | undefined
  projectIdOrKey?: string | undefined
}
type ForgePanelProjectPinStatusResponse = {
  moduleId?: string | undefined
  statuses?: ForgePanelProjectPinStatus[] | undefined
}
type UserDetails = {
  accountId?: string | undefined
  accountType?: string | undefined
  active?: boolean | undefined
  avatarUrls?:
    | {
        '16x16'?: string | undefined
        '24x24'?: string | undefined
        '32x32'?: string | undefined
        '48x48'?: string | undefined
      }
    | undefined
  displayName?: string | undefined
  emailAddress?: string | undefined
  key?: string | undefined
  name?: string | undefined
  self?: string | undefined
  timeZone?: string | undefined
}
type Group = {
  expand?: string | undefined
  groupId?: (string | null) | undefined
  name?: string | undefined
  self?: string | undefined
  users?:
    | {
        'end-index'?: number | undefined
        items?: UserDetails[] | undefined
        'max-results'?: number | undefined
        size?: number | undefined
        'start-index'?: number | undefined
      }
    | undefined
}
type AddGroupBean = { name: string }
type GroupDetails = { groupId?: (string | null) | undefined; name?: string | undefined }
type PageBeanGroupDetails = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: GroupDetails[] | undefined
}
type PageBeanUserDetails = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: UserDetails[] | undefined
}
type UpdateUserToGroupBean = { accountId?: string | undefined; name?: string | undefined }
type GroupLabel = {
  text?: string | undefined
  title?: string | undefined
  type?: 'ADMIN' | 'SINGLE' | 'MULTIPLE' | undefined
}
type FoundGroup = {
  avatarUrl?: string | undefined
  groupId?: string | undefined
  html?: string | undefined
  labels?: GroupLabel[] | undefined
  managedBy?: 'EXTERNAL' | 'ADMINS' | 'TEAM_MEMBERS' | 'OPEN' | undefined
  name?: string | undefined
  usageType?: 'USERBASE_GROUP' | 'TEAM_COLLABORATION' | 'ADMIN_OVERSIGHT' | undefined
}
type FoundGroups = {
  groups?: FoundGroup[] | undefined
  header?: string | undefined
  total?: number | undefined
}
type UserPickerUser = {
  accountId?: string | undefined
  accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
  avatarUrl?: string | undefined
  displayName?: string | undefined
  html?: string | undefined
  key?: string | undefined
  name?: string | undefined
}
type FoundUsers = {
  header?: string | undefined
  total?: number | undefined
  users?: UserPickerUser[] | undefined
}
type FoundUsersAndGroups = { groups?: FoundGroups | undefined; users?: FoundUsers | undefined }
type LicensedApplication = { id: string; plan: 'UNLICENSED' | 'FREE' | 'PAID' }
type License = { applications: LicensedApplication[] }
type AuditUserAvatarUrls = {
  '16x16'?: string | undefined
  '24x24'?: string | undefined
  '32x32'?: string | undefined
  '48x48'?: string | undefined
}
type AuditUser = {
  accountId?: string | undefined
  active?: boolean | undefined
  avatarUrls?: AuditUserAvatarUrls | undefined
  displayName?: string | undefined
  key?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type AuditEntry = {
  caller?: string | undefined
  createdAt?: string | undefined
  filterId?: string | undefined
  jql?: string | undefined
  requestUrl?: string | undefined
  user?: AuditUser | undefined
  userAgent?: string | undefined
  validationMessage?: string | undefined
}
type AuditPage = {
  entries?: AuditEntry[] | undefined
  isLast?: boolean | undefined
  nextPageToken?: string | undefined
  nextPageURL?: string | undefined
}
type FieldMetadata = {
  allowedValues?: { [x: string]: unknown }[] | undefined
  autoCompleteUrl?: string | undefined
  configuration?: { [x: string]: { [x: string]: unknown } } | undefined
  defaultValue?: { [x: string]: unknown } | undefined
  hasDefaultValue?: boolean | undefined
  key: string
  name: string
  operations: string[]
  required: boolean
  schema: {
    configuration?: { [x: string]: { [x: string]: unknown } } | undefined
    custom?: string | undefined
    customId?: bigint | undefined
    items?: string | undefined
    system?: string | undefined
    type: string
  }
}
type FieldUpdateOperation = {
  add?: { [x: string]: unknown } | undefined
  copy?: { [x: string]: unknown } | undefined
  edit?: { [x: string]: unknown } | undefined
  remove?: { [x: string]: unknown } | undefined
  set?: { [x: string]: unknown } | undefined
}
type IssueUpdateDetails = {
  fields?: { [x: string]: { [x: string]: unknown } } | undefined
  historyMetadata?:
    | {
        activityDescription?: string | undefined
        activityDescriptionKey?: string | undefined
        actor?:
          | {
              avatarUrl?: string | undefined
              displayName?: string | undefined
              displayNameKey?: string | undefined
              id?: string | undefined
              type?: string | undefined
              url?: string | undefined
            }
          | undefined
        cause?:
          | {
              avatarUrl?: string | undefined
              displayName?: string | undefined
              displayNameKey?: string | undefined
              id?: string | undefined
              type?: string | undefined
              url?: string | undefined
            }
          | undefined
        description?: string | undefined
        descriptionKey?: string | undefined
        emailDescription?: string | undefined
        emailDescriptionKey?: string | undefined
        extraData?: { [x: string]: string } | undefined
        generator?:
          | {
              avatarUrl?: string | undefined
              displayName?: string | undefined
              displayNameKey?: string | undefined
              id?: string | undefined
              type?: string | undefined
              url?: string | undefined
            }
          | undefined
        type?: string | undefined
      }
    | undefined
  properties?: EntityProperty[] | undefined
  transition?:
    | {
        expand?: string | undefined
        fields?: { [x: string]: FieldMetadata } | undefined
        hasScreen?: boolean | undefined
        id?: string | undefined
        isAvailable?: boolean | undefined
        isConditional?: boolean | undefined
        isGlobal?: boolean | undefined
        isInitial?: boolean | undefined
        looped?: boolean | undefined
        name?: string | undefined
        to?:
          | {
              description?: string | undefined
              iconUrl?: string | undefined
              id?: string | undefined
              name?: string | undefined
              scope?:
                | {
                    project?:
                      | {
                          avatarUrls?:
                            | {
                                '16x16'?: string | undefined
                                '24x24'?: string | undefined
                                '32x32'?: string | undefined
                                '48x48'?: string | undefined
                              }
                            | undefined
                          id?: string | undefined
                          key?: string | undefined
                          name?: string | undefined
                          projectCategory?:
                            | {
                                description?: string | undefined
                                id?: string | undefined
                                name?: string | undefined
                                self?: string | undefined
                              }
                            | undefined
                          projectTypeKey?:
                            | 'software'
                            | 'service_desk'
                            | 'business'
                            | 'product_discovery'
                            | undefined
                          self?: string | undefined
                          simplified?: boolean | undefined
                        }
                      | undefined
                    type?: 'PROJECT' | 'TEMPLATE' | undefined
                  }
                | undefined
              self?: string | undefined
              statusCategory?:
                | {
                    colorName?: string | undefined
                    id?: bigint | undefined
                    key?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  update?: { [x: string]: FieldUpdateOperation[] } | undefined
}
type WarningCollection = { warnings?: string[] | undefined }
type CreatedIssue = {
  id?: string | undefined
  key?: string | undefined
  self?: string | undefined
  transition?:
    | {
        errorCollection?: ErrorCollection | undefined
        status?: number | undefined
        warningCollection?: WarningCollection | undefined
      }
    | undefined
  watchers?:
    | {
        errorCollection?: ErrorCollection | undefined
        status?: number | undefined
        warningCollection?: WarningCollection | undefined
      }
    | undefined
}
type ArchiveIssueAsyncRequest = { jql?: string | undefined }
type IssueArchivalSyncRequest = { issueIdsOrKeys?: string[] | undefined }
type Error = {
  count?: bigint | undefined
  issueIdsOrKeys?: string[] | undefined
  message?: string | undefined
}
type Errors = {
  issueIsSubtask?: Error | undefined
  issuesInArchivedProjects?: Error | undefined
  issuesInUnlicensedProjects?: Error | undefined
  issuesNotFound?: Error | undefined
  userDoesNotHavePermission?: Error | undefined
}
type IssueArchivalSyncResponse = {
  errors?: Errors | undefined
  numberOfIssuesUpdated?: bigint | undefined
}
type IssuesUpdateBean = { issueUpdates?: IssueUpdateDetails[] | undefined }
type BulkOperationErrorResult = {
  elementErrors?: ErrorCollection | undefined
  failedElementNumber?: number | undefined
  status?: number | undefined
}
type CreatedIssues = {
  errors?: BulkOperationErrorResult[] | undefined
  issues?: CreatedIssue[] | undefined
}
type BulkFetchIssueRequestBean = {
  expand?: string[] | undefined
  fields?: string[] | undefined
  fieldsByKeys?: boolean | undefined
  issueIdsOrKeys: string[]
  properties?: string[] | undefined
}
type IssueError = { errorMessage?: string | undefined; id?: string | undefined }
type IncludedFields = {
  actuallyIncluded?: string[] | undefined
  excluded?: string[] | undefined
  included?: string[] | undefined
}
type LinkGroup = {
  groups?: LinkGroup[] | undefined
  header?: SimpleLink | undefined
  id?: string | undefined
  links?: SimpleLink[] | undefined
  styleClass?: string | undefined
  weight?: number | undefined
}
type IssueTransition = {
  expand?: string | undefined
  fields?: { [x: string]: FieldMetadata } | undefined
  hasScreen?: boolean | undefined
  id?: string | undefined
  isAvailable?: boolean | undefined
  isConditional?: boolean | undefined
  isGlobal?: boolean | undefined
  isInitial?: boolean | undefined
  looped?: boolean | undefined
  name?: string | undefined
  to?:
    | {
        description?: string | undefined
        iconUrl?: string | undefined
        id?: string | undefined
        name?: string | undefined
        scope?:
          | {
              project?:
                | {
                    avatarUrls?:
                      | {
                          '16x16'?: string | undefined
                          '24x24'?: string | undefined
                          '32x32'?: string | undefined
                          '48x48'?: string | undefined
                        }
                      | undefined
                    id?: string | undefined
                    key?: string | undefined
                    name?: string | undefined
                    projectCategory?:
                      | {
                          description?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          self?: string | undefined
                        }
                      | undefined
                    projectTypeKey?:
                      | 'software'
                      | 'service_desk'
                      | 'business'
                      | 'product_discovery'
                      | undefined
                    self?: string | undefined
                    simplified?: boolean | undefined
                  }
                | undefined
              type?: 'PROJECT' | 'TEMPLATE' | undefined
            }
          | undefined
        self?: string | undefined
        statusCategory?:
          | {
              colorName?: string | undefined
              id?: bigint | undefined
              key?: string | undefined
              name?: string | undefined
              self?: string | undefined
            }
          | undefined
      }
    | undefined
}
type IssueBean = {
  changelog?:
    | {
        histories?: Changelog[] | undefined
        maxResults?: number | undefined
        startAt?: number | undefined
        total?: number | undefined
      }
    | undefined
  editmeta?: { fields?: { [x: string]: FieldMetadata } | undefined } | undefined
  expand?: string | undefined
  fields?: { [x: string]: { [x: string]: unknown } } | undefined
  fieldsToInclude?: IncludedFields | undefined
  id?: string | undefined
  key?: string | undefined
  names?: { [x: string]: string } | undefined
  operations?: { linkGroups?: LinkGroup[] | undefined } | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  renderedFields?: { [x: string]: { [x: string]: unknown } } | undefined
  schema?: { [x: string]: JsonTypeBean } | undefined
  self?: string | undefined
  transitions?: IssueTransition[] | undefined
  versionedRepresentations?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
}
type BulkIssueResults = { issueErrors?: IssueError[] | undefined; issues?: IssueBean[] | undefined }
type IssueTypeIssueCreateMetadata = {
  avatarId?: bigint | undefined
  description?: string | undefined
  entityId?: string | undefined
  expand?: string | undefined
  fields?: { [x: string]: FieldMetadata } | undefined
  hierarchyLevel?: number | undefined
  iconUrl?: string | undefined
  id?: string | undefined
  name?: string | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
  subtask?: boolean | undefined
}
type ProjectIssueCreateMetadata = {
  avatarUrls?:
    | {
        '16x16'?: string | undefined
        '24x24'?: string | undefined
        '32x32'?: string | undefined
        '48x48'?: string | undefined
      }
    | undefined
  expand?: string | undefined
  id?: string | undefined
  issuetypes?: IssueTypeIssueCreateMetadata[] | undefined
  key?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type IssueCreateMetadata = {
  expand?: string | undefined
  projects?: ProjectIssueCreateMetadata[] | undefined
}
type PageOfCreateMetaIssueTypes = {
  createMetaIssueType?: IssueTypeIssueCreateMetadata[] | undefined
  issueTypes?: IssueTypeIssueCreateMetadata[] | undefined
  maxResults?: number | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
}
type FieldCreateMetadata = {
  allowedValues?: { [x: string]: unknown }[] | undefined
  autoCompleteUrl?: string | undefined
  configuration?: { [x: string]: { [x: string]: unknown } } | undefined
  defaultValue?: { [x: string]: unknown } | undefined
  fieldId: string
  hasDefaultValue?: boolean | undefined
  key: string
  name: string
  operations: string[]
  required: boolean
  schema: {
    configuration?: { [x: string]: { [x: string]: unknown } } | undefined
    custom?: string | undefined
    customId?: bigint | undefined
    items?: string | undefined
    system?: string | undefined
    type: string
  }
}
type PageOfCreateMetaIssueTypeWithField = {
  fields?: FieldCreateMetadata[] | undefined
  maxResults?: number | undefined
  results?: FieldCreateMetadata[] | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
}
type IssueLimitReportResponseBean = {
  entitiesBreachingLimit?: { [x: string]: { [x: string]: bigint[] } } | undefined
  issuesApproachingLimit?: { [x: string]: { [x: string]: bigint } } | undefined
  issuesBreachingLimit?: { [x: string]: { [x: string]: bigint } } | undefined
  limits?: { [x: string]: number } | undefined
}
type SuggestedIssue = {
  id?: bigint | undefined
  img?: string | undefined
  key?: string | undefined
  keyHtml?: string | undefined
  summary?: string | undefined
  summaryText?: string | undefined
}
type IssuePickerSuggestionsIssueType = {
  id?: string | undefined
  issues?: SuggestedIssue[] | undefined
  label?: string | undefined
  msg?: string | undefined
  sub?: string | undefined
}
type IssuePickerSuggestions = { sections?: IssuePickerSuggestionsIssueType[] | undefined }
type JsonNode = {
  array?: boolean | undefined
  bigDecimal?: boolean | undefined
  bigInteger?: boolean | undefined
  bigIntegerValue?: number | undefined
  binary?: boolean | undefined
  binaryValue?: string[] | undefined
  boolean?: boolean | undefined
  booleanValue?: boolean | undefined
  containerNode?: boolean | undefined
  decimalValue?: number | undefined
  double?: boolean | undefined
  doubleValue?: number | undefined
  elements?: { [x: string]: unknown } | undefined
  fieldNames?: { [x: string]: unknown } | undefined
  fields?: { [x: string]: unknown } | undefined
  floatingPointNumber?: boolean | undefined
  int?: boolean | undefined
  intValue?: number | undefined
  integralNumber?: boolean | undefined
  long?: boolean | undefined
  longValue?: bigint | undefined
  missingNode?: boolean | undefined
  null?: boolean | undefined
  number?: boolean | undefined
  numberType?: 'INT' | 'LONG' | 'BIG_INTEGER' | 'FLOAT' | 'DOUBLE' | 'BIG_DECIMAL' | undefined
  numberValue?: number | undefined
  object?: boolean | undefined
  pojo?: boolean | undefined
  textValue?: string | undefined
  textual?: boolean | undefined
  valueAsBoolean?: boolean | undefined
  valueAsDouble?: number | undefined
  valueAsInt?: number | undefined
  valueAsLong?: bigint | undefined
  valueAsText?: string | undefined
  valueNode?: boolean | undefined
}
type IssueEntityProperties = {
  entitiesIds?: bigint[] | undefined
  properties?: { [x: string]: JsonNode } | undefined
}
type IssueEntityPropertiesForMultiUpdate = {
  issueID?: bigint | undefined
  properties?: { [x: string]: JsonNode } | undefined
}
type MultiIssueEntityProperties = { issues?: IssueEntityPropertiesForMultiUpdate[] | undefined }
type IssueFilterForBulkPropertyDelete = {
  currentValue?: { [x: string]: unknown } | undefined
  entityIds?: bigint[] | undefined
}
type BulkIssuePropertyUpdateRequest = {
  expression?: string | undefined
  filter?:
    | {
        currentValue?: { [x: string]: unknown } | undefined
        entityIds?: bigint[] | undefined
        hasProperty?: boolean | undefined
      }
    | undefined
  value?: { [x: string]: unknown } | undefined
}
type IssueList = { issueIds: string[] }
type BulkIssueIsWatching = { issuesIsWatching?: { [x: string]: boolean } | undefined }
type Resource = {
  contentAsByteArray?: string[] | undefined
  description?: string | undefined
  file?: File | undefined
  filename?: string | undefined
  inputStream?: { [x: string]: unknown } | undefined
  open?: boolean | undefined
  readable?: boolean | undefined
  uri?: string | undefined
  url?: string | undefined
}
type MultipartFile = {
  bytes?: string[] | undefined
  contentType?: string | undefined
  empty?: boolean | undefined
  inputStream?: { [x: string]: unknown } | undefined
  name?: string | undefined
  originalFilename?: string | undefined
  resource?: Resource | undefined
  size?: bigint | undefined
}
type Attachment = {
  author?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  content?: string | undefined
  created?: string | undefined
  filename?: string | undefined
  id?: string | undefined
  mimeType?: string | undefined
  self?: string | undefined
  size?: bigint | undefined
  thumbnail?: string | undefined
}
type PageBeanChangelog = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Changelog[] | undefined
}
type IssueChangelogIds = { changelogIds: bigint[] }
type PageOfChangelogs = {
  histories?: Changelog[] | undefined
  maxResults?: number | undefined
  startAt?: number | undefined
  total?: number | undefined
}
type PageOfComments = {
  comments?: Comment[] | undefined
  maxResults?: number | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
}
type IssueUpdateMetadata = { fields?: { [x: string]: FieldMetadata } | undefined }
type RestrictedPermission = { id?: string | undefined; key?: string | undefined }
type Notification = {
  htmlBody?: string | undefined
  restrict?:
    | {
        groupIds?: string[] | undefined
        groups?: GroupName[] | undefined
        permissions?: RestrictedPermission[] | undefined
      }
    | undefined
  subject?: string | undefined
  textBody?: string | undefined
  to?:
    | {
        assignee?: boolean | undefined
        groupIds?: string[] | undefined
        groups?: GroupName[] | undefined
        reporter?: boolean | undefined
        users?: UserDetails[] | undefined
        voters?: boolean | undefined
        watchers?: boolean | undefined
      }
    | undefined
}
type RemoteIssueLink = {
  application?: { name?: string | undefined; type?: string | undefined } | undefined
  globalId?: string | undefined
  id?: bigint | undefined
  object?:
    | {
        icon?:
          | { link?: string | undefined; title?: string | undefined; url16x16?: string | undefined }
          | undefined
        status?:
          | {
              icon?:
                | {
                    link?: string | undefined
                    title?: string | undefined
                    url16x16?: string | undefined
                  }
                | undefined
              resolved?: boolean | undefined
            }
          | undefined
        summary?: string | undefined
        title: string
        url: string
      }
    | undefined
  relationship?: string | undefined
  self?: string | undefined
}
type RemoteIssueLinkRequest = {
  application?: { name?: string | undefined; type?: string | undefined } | undefined
  globalId?: string | undefined
  object: {
    icon?:
      | { link?: string | undefined; title?: string | undefined; url16x16?: string | undefined }
      | undefined
    status?:
      | {
          icon?:
            | {
                link?: string | undefined
                title?: string | undefined
                url16x16?: string | undefined
              }
            | undefined
          resolved?: boolean | undefined
        }
      | undefined
    summary?: string | undefined
    title: string
    url: string
  }
  relationship?: string | undefined
}
type RemoteIssueLinkIdentifies = { id?: bigint | undefined; self?: string | undefined }
type Transitions = { expand?: string | undefined; transitions?: IssueTransition[] | undefined }
type Votes = {
  hasVoted?: boolean | undefined
  self?: string | undefined
  voters?: User[] | undefined
  votes?: bigint | undefined
}
type Watchers = {
  isWatching?: boolean | undefined
  self?: string | undefined
  watchCount?: number | undefined
  watchers?: UserDetails[] | undefined
}
type WorklogIdsRequestBean = { ids: bigint[] }
type Worklog = {
  author?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  comment?: { [x: string]: unknown } | undefined
  created?: string | undefined
  id?: string | undefined
  issueId?: string | undefined
  properties?: EntityProperty[] | undefined
  self?: string | undefined
  started?: string | undefined
  timeSpent?: string | undefined
  timeSpentSeconds?: bigint | undefined
  updateAuthor?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  updated?: string | undefined
  visibility?:
    | {
        identifier?: (string | null) | undefined
        type?: 'group' | 'role' | undefined
        value?: string | undefined
      }
    | undefined
}
type PageOfWorklogs = {
  maxResults?: number | undefined
  startAt?: number | undefined
  total?: number | undefined
  worklogs?: Worklog[] | undefined
}
type WorklogsMoveRequestBean = { ids?: bigint[] | undefined; issueIdOrKey?: string | undefined }
type LinkedIssue = {
  fields?:
    | {
        assignee?:
          | {
              accountId?: string | undefined
              accountType?: string | undefined
              active?: boolean | undefined
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              displayName?: string | undefined
              emailAddress?: string | undefined
              key?: string | undefined
              name?: string | undefined
              self?: string | undefined
              timeZone?: string | undefined
            }
          | undefined
        issueType?:
          | {
              avatarId?: bigint | undefined
              description?: string | undefined
              entityId?: string | undefined
              hierarchyLevel?: number | undefined
              iconUrl?: string | undefined
              id?: string | undefined
              name?: string | undefined
              scope?:
                | {
                    project?:
                      | {
                          avatarUrls?:
                            | {
                                '16x16'?: string | undefined
                                '24x24'?: string | undefined
                                '32x32'?: string | undefined
                                '48x48'?: string | undefined
                              }
                            | undefined
                          id?: string | undefined
                          key?: string | undefined
                          name?: string | undefined
                          projectCategory?:
                            | {
                                description?: string | undefined
                                id?: string | undefined
                                name?: string | undefined
                                self?: string | undefined
                              }
                            | undefined
                          projectTypeKey?:
                            | 'software'
                            | 'service_desk'
                            | 'business'
                            | 'product_discovery'
                            | undefined
                          self?: string | undefined
                          simplified?: boolean | undefined
                        }
                      | undefined
                    type?: 'PROJECT' | 'TEMPLATE' | undefined
                  }
                | undefined
              self?: string | undefined
              subtask?: boolean | undefined
            }
          | undefined
        issuetype?: IssueTypeDetails | undefined
        priority?:
          | {
              avatarId?: bigint | undefined
              description?: string | undefined
              iconUrl?: string | undefined
              id?: string | undefined
              isDefault?: boolean | undefined
              name?: string | undefined
              schemes?:
                | {
                    maxResults?: number | undefined
                    startAt?: bigint | undefined
                    total?: bigint | undefined
                  }
                | undefined
              self?: string | undefined
              statusColor?: string | undefined
            }
          | undefined
        status?:
          | {
              description?: string | undefined
              iconUrl?: string | undefined
              id?: string | undefined
              name?: string | undefined
              scope?:
                | {
                    project?:
                      | {
                          avatarUrls?:
                            | {
                                '16x16'?: string | undefined
                                '24x24'?: string | undefined
                                '32x32'?: string | undefined
                                '48x48'?: string | undefined
                              }
                            | undefined
                          id?: string | undefined
                          key?: string | undefined
                          name?: string | undefined
                          projectCategory?:
                            | {
                                description?: string | undefined
                                id?: string | undefined
                                name?: string | undefined
                                self?: string | undefined
                              }
                            | undefined
                          projectTypeKey?:
                            | 'software'
                            | 'service_desk'
                            | 'business'
                            | 'product_discovery'
                            | undefined
                          self?: string | undefined
                          simplified?: boolean | undefined
                        }
                      | undefined
                    type?: 'PROJECT' | 'TEMPLATE' | undefined
                  }
                | undefined
              self?: string | undefined
              statusCategory?:
                | {
                    colorName?: string | undefined
                    id?: bigint | undefined
                    key?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
            }
          | undefined
        summary?: string | undefined
        timetracking?:
          | {
              originalEstimate?: string | undefined
              originalEstimateSeconds?: bigint | undefined
              remainingEstimate?: string | undefined
              remainingEstimateSeconds?: bigint | undefined
              timeSpent?: string | undefined
              timeSpentSeconds?: bigint | undefined
            }
          | undefined
      }
    | undefined
  id?: string | undefined
  key?: string | undefined
  self?: string | undefined
}
type IssueLinkType = {
  id?: string | undefined
  inward?: string | undefined
  name?: string | undefined
  outward?: string | undefined
  self?: string | undefined
}
type LinkIssueRequestJsonBean = {
  comment?: Comment | undefined
  inwardIssue: LinkedIssue
  outwardIssue: LinkedIssue
  type: IssueLinkType
}
type IssueLink = {
  id?: string | undefined
  inwardIssue: {
    fields?:
      | {
          assignee?:
            | {
                accountId?: string | undefined
                accountType?: string | undefined
                active?: boolean | undefined
                avatarUrls?:
                  | {
                      '16x16'?: string | undefined
                      '24x24'?: string | undefined
                      '32x32'?: string | undefined
                      '48x48'?: string | undefined
                    }
                  | undefined
                displayName?: string | undefined
                emailAddress?: string | undefined
                key?: string | undefined
                name?: string | undefined
                self?: string | undefined
                timeZone?: string | undefined
              }
            | undefined
          issueType?:
            | {
                avatarId?: bigint | undefined
                description?: string | undefined
                entityId?: string | undefined
                hierarchyLevel?: number | undefined
                iconUrl?: string | undefined
                id?: string | undefined
                name?: string | undefined
                scope?:
                  | {
                      project?:
                        | {
                            avatarUrls?:
                              | {
                                  '16x16'?: string | undefined
                                  '24x24'?: string | undefined
                                  '32x32'?: string | undefined
                                  '48x48'?: string | undefined
                                }
                              | undefined
                            id?: string | undefined
                            key?: string | undefined
                            name?: string | undefined
                            projectCategory?:
                              | {
                                  description?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                  self?: string | undefined
                                }
                              | undefined
                            projectTypeKey?:
                              | 'software'
                              | 'service_desk'
                              | 'business'
                              | 'product_discovery'
                              | undefined
                            self?: string | undefined
                            simplified?: boolean | undefined
                          }
                        | undefined
                      type?: 'PROJECT' | 'TEMPLATE' | undefined
                    }
                  | undefined
                self?: string | undefined
                subtask?: boolean | undefined
              }
            | undefined
          issuetype?: IssueTypeDetails | undefined
          priority?:
            | {
                avatarId?: bigint | undefined
                description?: string | undefined
                iconUrl?: string | undefined
                id?: string | undefined
                isDefault?: boolean | undefined
                name?: string | undefined
                schemes?:
                  | {
                      maxResults?: number | undefined
                      startAt?: bigint | undefined
                      total?: bigint | undefined
                    }
                  | undefined
                self?: string | undefined
                statusColor?: string | undefined
              }
            | undefined
          status?:
            | {
                description?: string | undefined
                iconUrl?: string | undefined
                id?: string | undefined
                name?: string | undefined
                scope?:
                  | {
                      project?:
                        | {
                            avatarUrls?:
                              | {
                                  '16x16'?: string | undefined
                                  '24x24'?: string | undefined
                                  '32x32'?: string | undefined
                                  '48x48'?: string | undefined
                                }
                              | undefined
                            id?: string | undefined
                            key?: string | undefined
                            name?: string | undefined
                            projectCategory?:
                              | {
                                  description?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                  self?: string | undefined
                                }
                              | undefined
                            projectTypeKey?:
                              | 'software'
                              | 'service_desk'
                              | 'business'
                              | 'product_discovery'
                              | undefined
                            self?: string | undefined
                            simplified?: boolean | undefined
                          }
                        | undefined
                      type?: 'PROJECT' | 'TEMPLATE' | undefined
                    }
                  | undefined
                self?: string | undefined
                statusCategory?:
                  | {
                      colorName?: string | undefined
                      id?: bigint | undefined
                      key?: string | undefined
                      name?: string | undefined
                      self?: string | undefined
                    }
                  | undefined
              }
            | undefined
          summary?: string | undefined
          timetracking?:
            | {
                originalEstimate?: string | undefined
                originalEstimateSeconds?: bigint | undefined
                remainingEstimate?: string | undefined
                remainingEstimateSeconds?: bigint | undefined
                timeSpent?: string | undefined
                timeSpentSeconds?: bigint | undefined
              }
            | undefined
        }
      | undefined
    id?: string | undefined
    key?: string | undefined
    self?: string | undefined
  }
  outwardIssue: {
    fields?:
      | {
          assignee?:
            | {
                accountId?: string | undefined
                accountType?: string | undefined
                active?: boolean | undefined
                avatarUrls?:
                  | {
                      '16x16'?: string | undefined
                      '24x24'?: string | undefined
                      '32x32'?: string | undefined
                      '48x48'?: string | undefined
                    }
                  | undefined
                displayName?: string | undefined
                emailAddress?: string | undefined
                key?: string | undefined
                name?: string | undefined
                self?: string | undefined
                timeZone?: string | undefined
              }
            | undefined
          issueType?:
            | {
                avatarId?: bigint | undefined
                description?: string | undefined
                entityId?: string | undefined
                hierarchyLevel?: number | undefined
                iconUrl?: string | undefined
                id?: string | undefined
                name?: string | undefined
                scope?:
                  | {
                      project?:
                        | {
                            avatarUrls?:
                              | {
                                  '16x16'?: string | undefined
                                  '24x24'?: string | undefined
                                  '32x32'?: string | undefined
                                  '48x48'?: string | undefined
                                }
                              | undefined
                            id?: string | undefined
                            key?: string | undefined
                            name?: string | undefined
                            projectCategory?:
                              | {
                                  description?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                  self?: string | undefined
                                }
                              | undefined
                            projectTypeKey?:
                              | 'software'
                              | 'service_desk'
                              | 'business'
                              | 'product_discovery'
                              | undefined
                            self?: string | undefined
                            simplified?: boolean | undefined
                          }
                        | undefined
                      type?: 'PROJECT' | 'TEMPLATE' | undefined
                    }
                  | undefined
                self?: string | undefined
                subtask?: boolean | undefined
              }
            | undefined
          issuetype?: IssueTypeDetails | undefined
          priority?:
            | {
                avatarId?: bigint | undefined
                description?: string | undefined
                iconUrl?: string | undefined
                id?: string | undefined
                isDefault?: boolean | undefined
                name?: string | undefined
                schemes?:
                  | {
                      maxResults?: number | undefined
                      startAt?: bigint | undefined
                      total?: bigint | undefined
                    }
                  | undefined
                self?: string | undefined
                statusColor?: string | undefined
              }
            | undefined
          status?:
            | {
                description?: string | undefined
                iconUrl?: string | undefined
                id?: string | undefined
                name?: string | undefined
                scope?:
                  | {
                      project?:
                        | {
                            avatarUrls?:
                              | {
                                  '16x16'?: string | undefined
                                  '24x24'?: string | undefined
                                  '32x32'?: string | undefined
                                  '48x48'?: string | undefined
                                }
                              | undefined
                            id?: string | undefined
                            key?: string | undefined
                            name?: string | undefined
                            projectCategory?:
                              | {
                                  description?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                  self?: string | undefined
                                }
                              | undefined
                            projectTypeKey?:
                              | 'software'
                              | 'service_desk'
                              | 'business'
                              | 'product_discovery'
                              | undefined
                            self?: string | undefined
                            simplified?: boolean | undefined
                          }
                        | undefined
                      type?: 'PROJECT' | 'TEMPLATE' | undefined
                    }
                  | undefined
                self?: string | undefined
                statusCategory?:
                  | {
                      colorName?: string | undefined
                      id?: bigint | undefined
                      key?: string | undefined
                      name?: string | undefined
                      self?: string | undefined
                    }
                  | undefined
              }
            | undefined
          summary?: string | undefined
          timetracking?:
            | {
                originalEstimate?: string | undefined
                originalEstimateSeconds?: bigint | undefined
                remainingEstimate?: string | undefined
                remainingEstimateSeconds?: bigint | undefined
                timeSpent?: string | undefined
                timeSpentSeconds?: bigint | undefined
              }
            | undefined
        }
      | undefined
    id?: string | undefined
    key?: string | undefined
    self?: string | undefined
  }
  self?: string | undefined
  type: {
    id?: string | undefined
    inward?: string | undefined
    name?: string | undefined
    outward?: string | undefined
    self?: string | undefined
  }
}
type IssueLinkTypes = { issueLinkTypes?: IssueLinkType[] | undefined }
type DateRangeFilterRequest = { dateAfter: string; dateBefore: string }
type ArchivedIssuesFilterRequest = {
  archivedBy?: string[] | undefined
  archivedDateRange?: DateRangeFilterRequest | undefined
  issueTypes?: string[] | undefined
  projects?: string[] | undefined
  reporters?: string[] | undefined
}
type ExportArchivedIssuesTaskProgressResponse = {
  fileUrl?: string | undefined
  payload?: string | undefined
  progress?: bigint | undefined
  status?: string | undefined
  submittedTime?: string | undefined
  taskId?: string | undefined
}
type SecurityLevel = {
  description?: string | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  issueSecuritySchemeId?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type SecurityScheme = {
  defaultSecurityLevelId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  levels?: SecurityLevel[] | undefined
  name?: string | undefined
  self?: string | undefined
}
type SecuritySchemes = { issueSecuritySchemes?: SecurityScheme[] | undefined }
type SecuritySchemeLevelMemberBean = { parameter?: string | undefined; type: string }
type SecuritySchemeLevelBean = {
  description?: string | undefined
  isDefault?: boolean | undefined
  members?: SecuritySchemeLevelMemberBean[] | undefined
  name: string
}
type CreateIssueSecuritySchemeDetails = {
  description?: string | undefined
  levels?: SecuritySchemeLevelBean[] | undefined
  name: string
}
type SecuritySchemeId = { id: string }
type PageBeanSecurityLevel = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: SecurityLevel[] | undefined
}
type DefaultLevelValue = { defaultLevelId: string; issueSecuritySchemeId: string }
type SetDefaultLevelsRequest = { defaultValues: DefaultLevelValue[] }
type SecurityLevelMember = {
  holder: {
    expand?: string | undefined
    parameter?: string | undefined
    type: string
    value?: string | undefined
  }
  id: string
  issueSecurityLevelId: string
  issueSecuritySchemeId: string
  managed?: boolean | undefined
}
type PageBeanSecurityLevelMember = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: SecurityLevelMember[] | undefined
}
type IssueSecuritySchemeToProjectMapping = {
  issueSecuritySchemeId?: string | undefined
  projectId?: string | undefined
}
type PageBeanIssueSecuritySchemeToProjectMapping = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueSecuritySchemeToProjectMapping[] | undefined
}
type OldToNewSecurityLevelMappingsBean = { newLevelId: string; oldLevelId: string }
type AssociateSecuritySchemeWithProjectDetails = {
  oldToNewSecurityLevelMappings?: OldToNewSecurityLevelMappingsBean[] | undefined
  projectId: string
  schemeId: string
}
type SecuritySchemeWithProjects = {
  defaultLevel?: bigint | undefined
  description?: string | undefined
  id: bigint
  name: string
  projectIds?: bigint[] | undefined
  self: string
}
type PageBeanSecuritySchemeWithProjects = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: SecuritySchemeWithProjects[] | undefined
}
type UpdateIssueSecuritySchemeRequestBean = {
  description?: string | undefined
  name?: string | undefined
}
type IssueSecurityLevelMember = {
  holder: {
    expand?: string | undefined
    parameter?: string | undefined
    type: string
    value?: string | undefined
  }
  id: bigint
  issueSecurityLevelId: bigint
}
type PageBeanIssueSecurityLevelMember = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueSecurityLevelMember[] | undefined
}
type AddSecuritySchemeLevelsRequestBean = { levels?: SecuritySchemeLevelBean[] | undefined }
type UpdateIssueSecurityLevelDetails = {
  description?: string | undefined
  name?: string | undefined
}
type SecuritySchemeMembersRequest = { members?: SecuritySchemeLevelMemberBean[] | undefined }
type IssueTypeCreateBean = {
  description?: string | undefined
  hierarchyLevel?: number | undefined
  name: string
  type?: 'subtask' | 'standard' | undefined
}
type IssueTypeUpdateBean = {
  avatarId?: bigint | undefined
  description?: string | undefined
  name?: string | undefined
}
type IssueTypeScheme = {
  defaultIssueTypeId?: string | undefined
  description?: string | undefined
  id: string
  isDefault?: boolean | undefined
  name: string
}
type PageBeanIssueTypeScheme = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeScheme[] | undefined
}
type IssueTypeSchemeDetails = {
  defaultIssueTypeId?: string | undefined
  description?: string | undefined
  issueTypeIds: string[]
  name: string
}
type IssueTypeSchemeID = { issueTypeSchemeId: string }
type IssueTypeSchemeMapping = { issueTypeId: string; issueTypeSchemeId: string }
type PageBeanIssueTypeSchemeMapping = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeSchemeMapping[] | undefined
}
type IssueTypeSchemeProjects = {
  issueTypeScheme: {
    defaultIssueTypeId?: string | undefined
    description?: string | undefined
    id: string
    isDefault?: boolean | undefined
    name: string
  }
  projectIds: string[]
}
type PageBeanIssueTypeSchemeProjects = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeSchemeProjects[] | undefined
}
type IssueTypeSchemeProjectAssociation = { issueTypeSchemeId: string; projectId: string }
type IssueTypeSchemeUpdateDetails = {
  defaultIssueTypeId?: string | undefined
  description?: string | undefined
  name?: string | undefined
}
type OrderOfIssueTypes = {
  after?: string | undefined
  issueTypeIds: string[]
  position?: 'First' | 'Last' | undefined
}
type IssueTypeScreenScheme = { description?: string | undefined; id: string; name: string }
type PageBeanIssueTypeScreenScheme = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeScreenScheme[] | undefined
}
type IssueTypeScreenSchemeMapping = { issueTypeId: string; screenSchemeId: string }
type IssueTypeScreenSchemeDetails = {
  description?: string | undefined
  issueTypeMappings: IssueTypeScreenSchemeMapping[]
  name: string
}
type IssueTypeScreenSchemeId = { id: string }
type IssueTypeScreenSchemeItem = {
  issueTypeId: string
  issueTypeScreenSchemeId: string
  screenSchemeId: string
}
type PageBeanIssueTypeScreenSchemeItem = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeScreenSchemeItem[] | undefined
}
type IssueTypeScreenSchemesProjects = {
  issueTypeScreenScheme: { description?: string | undefined; id: string; name: string }
  projectIds: string[]
}
type PageBeanIssueTypeScreenSchemesProjects = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: IssueTypeScreenSchemesProjects[] | undefined
}
type IssueTypeScreenSchemeProjectAssociation = {
  issueTypeScreenSchemeId?: string | undefined
  projectId?: string | undefined
}
type IssueTypeScreenSchemeUpdateDetails = {
  description?: string | undefined
  name?: string | undefined
}
type IssueTypeScreenSchemeMappingDetails = { issueTypeMappings: IssueTypeScreenSchemeMapping[] }
type UpdateDefaultScreenScheme = { screenSchemeId: string }
type ProjectDetails = {
  avatarUrls?:
    | {
        '16x16'?: string | undefined
        '24x24'?: string | undefined
        '32x32'?: string | undefined
        '48x48'?: string | undefined
      }
    | undefined
  id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  projectCategory?:
    | {
        description?: string | undefined
        id?: string | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
  projectTypeKey?: 'software' | 'service_desk' | 'business' | 'product_discovery' | undefined
  self?: string | undefined
  simplified?: boolean | undefined
}
type PageBeanProjectDetails = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ProjectDetails[] | undefined
}
type FieldReferenceData = {
  auto?: 'true' | 'false' | undefined
  cfid?: string | undefined
  deprecated?: 'true' | 'false' | undefined
  deprecatedSearcherKey?: string | undefined
  displayName?: string | undefined
  operators?: string[] | undefined
  orderable?: 'true' | 'false' | undefined
  searchable?: 'true' | 'false' | undefined
  types?: string[] | undefined
  value?: string | undefined
}
type FunctionReferenceData = {
  displayName?: string | undefined
  isList?: 'true' | 'false' | undefined
  supportsListAndSingleValueOperators?: 'true' | 'false' | undefined
  types?: string[] | undefined
  value?: string | undefined
}
type JQLReferenceData = {
  jqlReservedWords?: string[] | undefined
  visibleFieldNames?: FieldReferenceData[] | undefined
  visibleFunctionNames?: FunctionReferenceData[] | undefined
}
type SearchAutoCompleteFilter = {
  includeCollapsedFields?: boolean | undefined
  projectIds?: bigint[] | undefined
}
type AutoCompleteSuggestion = { displayName?: string | undefined; value?: string | undefined }
type AutoCompleteSuggestions = { results?: AutoCompleteSuggestion[] | undefined }
type JqlFunctionPrecomputationBean = {
  arguments?: string[] | undefined
  created?: string | undefined
  error?: string | undefined
  field?: string | undefined
  functionKey?: string | undefined
  functionName?: string | undefined
  id?: string | undefined
  operator?: string | undefined
  updated?: string | undefined
  used?: string | undefined
  value?: string | undefined
}
type PageBean2JqlFunctionPrecomputationBean = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: JqlFunctionPrecomputationBean[] | undefined
}
type JqlFunctionPrecomputationUpdateBean = {
  error?: string | undefined
  id: string
  value?: string | undefined
}
type JqlFunctionPrecomputationUpdateRequestBean = {
  values?: JqlFunctionPrecomputationUpdateBean[] | undefined
}
type JqlFunctionPrecomputationUpdateResponse = { notFoundPrecomputationIDs?: string[] | undefined }
type JqlFunctionPrecomputationUpdateErrorResponse = {
  errorMessages?: string[] | undefined
  notFoundPrecomputationIDs?: string[] | undefined
}
type JqlFunctionPrecomputationGetByIdRequest = { precomputationIDs?: string[] | undefined }
type JqlFunctionPrecomputationGetByIdResponse = {
  notFoundPrecomputationIDs?: string[] | undefined
  precomputations?: JqlFunctionPrecomputationBean[] | undefined
}
type IssuesAndJQLQueries = { issueIds: bigint[]; jqls: string[] }
type IssueMatchesForJQL = { errors: string[]; matchedIssues: bigint[] }
type IssueMatches = { matches: IssueMatchesForJQL[] }
type JqlQueriesToParse = { queries: string[] }
type JqlQueryFieldEntityProperty = {
  entity: string
  key: string
  path: string
  type?: 'number' | 'string' | 'text' | 'date' | 'user' | undefined
}
type JqlQueryField = {
  encodedName?: string | undefined
  name: string
  property?: JqlQueryFieldEntityProperty[] | undefined
}
type JqlQueryOrderByClauseElement = { direction?: 'asc' | 'desc' | undefined; field: JqlQueryField }
type JqlQueryOrderByClause = { fields: JqlQueryOrderByClauseElement[] }
type CompoundClause = { clauses: JqlQueryClause[]; operator: 'and' | 'or' | 'not' }
type ValueOperand = { encodedValue?: string | undefined; value: string }
type FunctionOperand = {
  arguments: string[]
  encodedOperand?: string | undefined
  function: string
}
type KeywordOperand = { keyword: 'empty' }
type JqlQueryUnitaryOperand = ValueOperand | FunctionOperand | KeywordOperand
type ListOperand = { encodedOperand?: string | undefined; values: JqlQueryUnitaryOperand[] }
type JqlQueryClauseOperand = ListOperand | ValueOperand | FunctionOperand | KeywordOperand
type FieldValueClause = {
  field: JqlQueryField
  operand: JqlQueryClauseOperand
  operator: '=' | '!=' | '>' | '<' | '>=' | '<=' | 'in' | 'not in' | '~' | '~=' | 'is' | 'is not'
}
type JqlQueryClauseTimePredicate = {
  operand: JqlQueryClauseOperand
  operator: 'before' | 'after' | 'from' | 'to' | 'on' | 'during' | 'by'
}
type FieldWasClause = {
  field: JqlQueryField
  operand: JqlQueryClauseOperand
  operator: 'was' | 'was in' | 'was not in' | 'was not'
  predicates: JqlQueryClauseTimePredicate[]
}
type FieldChangedClause = {
  field: JqlQueryField
  operator: 'changed'
  predicates: JqlQueryClauseTimePredicate[]
}
type JqlQueryClause = CompoundClause | FieldValueClause | FieldWasClause | FieldChangedClause
type ParsedJqlQuery = {
  errors?: string[] | undefined
  query: string
  structure?:
    | { orderBy?: JqlQueryOrderByClause | undefined; where?: JqlQueryClause | undefined }
    | undefined
  warnings?: string[] | undefined
}
type ParsedJqlQueries = { queries: ParsedJqlQuery[] }
type JQLPersonalDataMigrationRequest = { queryStrings?: string[] | undefined }
type JQLQueryWithUnknownUsers = {
  convertedQuery?: string | undefined
  originalQuery?: string | undefined
}
type ConvertedJQLQueries = {
  queriesWithUnknownUsers?: JQLQueryWithUnknownUsers[] | undefined
  queryStrings?: string[] | undefined
}
type JqlQueryToSanitize = { accountId?: (string | null) | undefined; query: string }
type JqlQueriesToSanitize = { queries: JqlQueryToSanitize[] }
type SanitizedJqlQuery = {
  accountId?: (string | null) | undefined
  errors?:
    | {
        errorMessages?: string[] | undefined
        errors?: { [x: string]: string } | undefined
        status?: number | undefined
      }
    | undefined
  initialQuery?: string | undefined
  sanitizedQuery?: (string | null) | undefined
}
type SanitizedJqlQueries = { queries?: SanitizedJqlQuery[] | undefined }
type PageBeanString = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: string[] | undefined
}
type LicenseMetric = { key?: string | undefined; value?: string | undefined }
type UserPermission = {
  deprecatedKey?: boolean | undefined
  description?: string | undefined
  havePermission?: boolean | undefined
  id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  type?: 'GLOBAL' | 'PROJECT' | undefined
}
type Permissions = { permissions?: { [x: string]: UserPermission } | undefined }
type Locale = { locale?: string | undefined }
type NotificationEvent = {
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  templateEvent?: {} | undefined
}
type EventNotification = {
  emailAddress?: string | undefined
  expand?: string | undefined
  field?:
    | {
        clauseNames?: string[] | undefined
        custom?: boolean | undefined
        id?: string | undefined
        key?: string | undefined
        name?: string | undefined
        navigable?: boolean | undefined
        orderable?: boolean | undefined
        schema?:
          | {
              configuration?: { [x: string]: { [x: string]: unknown } } | undefined
              custom?: string | undefined
              customId?: bigint | undefined
              items?: string | undefined
              system?: string | undefined
              type: string
            }
          | undefined
        scope?:
          | {
              project?:
                | {
                    avatarUrls?:
                      | {
                          '16x16'?: string | undefined
                          '24x24'?: string | undefined
                          '32x32'?: string | undefined
                          '48x48'?: string | undefined
                        }
                      | undefined
                    id?: string | undefined
                    key?: string | undefined
                    name?: string | undefined
                    projectCategory?:
                      | {
                          description?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          self?: string | undefined
                        }
                      | undefined
                    projectTypeKey?:
                      | 'software'
                      | 'service_desk'
                      | 'business'
                      | 'product_discovery'
                      | undefined
                    self?: string | undefined
                    simplified?: boolean | undefined
                  }
                | undefined
              type?: 'PROJECT' | 'TEMPLATE' | undefined
            }
          | undefined
        searchable?: boolean | undefined
      }
    | undefined
  group?:
    | {
        groupId?: (string | null) | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
  id?: bigint | undefined
  notificationType?:
    | 'CurrentAssignee'
    | 'Reporter'
    | 'CurrentUser'
    | 'ProjectLead'
    | 'ComponentLead'
    | 'User'
    | 'Group'
    | 'ProjectRole'
    | 'EmailAddress'
    | 'AllWatchers'
    | 'UserCustomField'
    | 'GroupCustomField'
    | undefined
  parameter?: string | undefined
  projectRole?:
    | {
        actors?: RoleActor[] | undefined
        admin?: boolean | undefined
        currentUserRole?: boolean | undefined
        default?: boolean | undefined
        description?: string | undefined
        id?: bigint | undefined
        name?: string | undefined
        roleConfigurable?: boolean | undefined
        scope?:
          | {
              project?:
                | {
                    avatarUrls?:
                      | {
                          '16x16'?: string | undefined
                          '24x24'?: string | undefined
                          '32x32'?: string | undefined
                          '48x48'?: string | undefined
                        }
                      | undefined
                    id?: string | undefined
                    key?: string | undefined
                    name?: string | undefined
                    projectCategory?:
                      | {
                          description?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          self?: string | undefined
                        }
                      | undefined
                    projectTypeKey?:
                      | 'software'
                      | 'service_desk'
                      | 'business'
                      | 'product_discovery'
                      | undefined
                    self?: string | undefined
                    simplified?: boolean | undefined
                  }
                | undefined
              type?: 'PROJECT' | 'TEMPLATE' | undefined
            }
          | undefined
        self?: string | undefined
        translatedName?: string | undefined
      }
    | undefined
  recipient?: string | undefined
  user?:
    | {
        accountId?: string | undefined
        accountType?: string | undefined
        active?: boolean | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
}
type NotificationSchemeEvent = {
  event?: NotificationEvent | undefined
  notifications?: EventNotification[] | undefined
}
type NotificationScheme = {
  description?: string | undefined
  expand?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  notificationSchemeEvents?: NotificationSchemeEvent[] | undefined
  projects?: bigint[] | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
}
type PageBeanNotificationScheme = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: NotificationScheme[] | undefined
}
type NotificationSchemeNotificationDetails = {
  notificationType: string
  parameter?: string | undefined
}
type NotificationSchemeEventDetails = {
  event: { id: string }
  notifications: NotificationSchemeNotificationDetails[]
}
type CreateNotificationSchemeDetails = {
  description?: string | undefined
  name: string
  notificationSchemeEvents?: NotificationSchemeEventDetails[] | undefined
}
type NotificationSchemeId = { id: string }
type NotificationSchemeAndProjectMappingJsonBean = {
  notificationSchemeId?: string | undefined
  projectId?: string | undefined
}
type PageBeanNotificationSchemeAndProjectMappingJsonBean = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: NotificationSchemeAndProjectMappingJsonBean[] | undefined
}
type UpdateNotificationSchemeDetails = {
  description?: string | undefined
  name?: string | undefined
}
type AddNotificationsDetails = { notificationSchemeEvents: NotificationSchemeEventDetails[] }
type BulkProjectPermissions = {
  issues?: bigint[] | undefined
  permissions: string[]
  projects?: bigint[] | undefined
}
type BulkPermissionsRequestBean = {
  accountId?: string | undefined
  globalPermissions?: string[] | undefined
  projectPermissions?: BulkProjectPermissions[] | undefined
}
type BulkProjectPermissionGrants = { issues: bigint[]; permission: string; projects: bigint[] }
type BulkPermissionGrants = {
  globalPermissions: string[]
  projectPermissions: BulkProjectPermissionGrants[]
}
type PermissionsKeysBean = { permissions: string[] }
type ProjectIdentifierBean = { id?: bigint | undefined; key?: string | undefined }
type PermittedProjects = { projects?: ProjectIdentifierBean[] | undefined }
type PermissionGrant = {
  holder?:
    | {
        expand?: string | undefined
        parameter?: string | undefined
        type: string
        value?: string | undefined
      }
    | undefined
  id?: bigint | undefined
  permission?: string | undefined
  self?: string | undefined
}
type PermissionScheme = {
  description?: string | undefined
  expand?: string | undefined
  id?: bigint | undefined
  name: string
  permissions?: PermissionGrant[] | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
}
type PermissionSchemes = { permissionSchemes?: PermissionScheme[] | undefined }
type PermissionGrants = { expand?: string | undefined; permissions?: PermissionGrant[] | undefined }
type GetIssueSourceResponse = { type: 'Board' | 'Project' | 'Filter' | 'Custom'; value: bigint }
type GetPlanResponseForPage = {
  id: string
  issueSources?: GetIssueSourceResponse[] | undefined
  name: string
  scenarioId: string
  status: 'Active' | 'Trashed' | 'Archived'
}
type PageWithCursorGetPlanResponseForPage = {
  cursor?: string | undefined
  last?: boolean | undefined
  nextPageCursor?: string | undefined
  size?: number | undefined
  total?: bigint | undefined
  values?: GetPlanResponseForPage[] | undefined
}
type CreateCrossProjectReleaseRequest = { name: string; releaseIds?: bigint[] | undefined }
type CreateCustomFieldRequest = { customFieldId: bigint; filter?: boolean | undefined }
type CreateIssueSourceRequest = { type: 'Board' | 'Project' | 'Filter'; value: bigint }
type CreatePermissionRequest = {
  holder: { type: 'Group' | 'AccountId'; value: string }
  type: 'View' | 'Edit'
}
type CreatePlanRequest = {
  crossProjectReleases?: CreateCrossProjectReleaseRequest[] | undefined
  customFields?: CreateCustomFieldRequest[] | undefined
  exclusionRules?:
    | {
        issueIds?: bigint[] | undefined
        issueTypeIds?: bigint[] | undefined
        numberOfDaysToShowCompletedIssues?: number | undefined
        releaseIds?: bigint[] | undefined
        workStatusCategoryIds?: bigint[] | undefined
        workStatusIds?: bigint[] | undefined
      }
    | undefined
  issueSources: CreateIssueSourceRequest[]
  leadAccountId?: string | undefined
  name: string
  permissions?: CreatePermissionRequest[] | undefined
  scheduling: {
    dependencies?: 'Sequential' | 'Concurrent' | undefined
    endDate?:
      | {
          dateCustomFieldId?: bigint | undefined
          type: 'DueDate' | 'TargetStartDate' | 'TargetEndDate' | 'DateCustomField'
        }
      | undefined
    estimation: 'StoryPoints' | 'Days' | 'Hours'
    inferredDates?: 'None' | 'SprintDates' | 'ReleaseDates' | 'AnySprintDates' | undefined
    startDate?:
      | {
          dateCustomFieldId?: bigint | undefined
          type: 'DueDate' | 'TargetStartDate' | 'TargetEndDate' | 'DateCustomField'
        }
      | undefined
  }
}
type GetCrossProjectReleaseResponse = {
  name?: string | undefined
  releaseIds?: bigint[] | undefined
}
type GetCustomFieldResponse = { customFieldId: bigint; filter?: boolean | undefined }
type GetPermissionResponse = {
  holder: { type: 'Group' | 'AccountId'; value: string }
  type: 'View' | 'Edit'
}
type GetPlanResponse = {
  crossProjectReleases?: GetCrossProjectReleaseResponse[] | undefined
  customFields?: GetCustomFieldResponse[] | undefined
  exclusionRules?:
    | {
        issueIds?: bigint[] | undefined
        issueTypeIds?: bigint[] | undefined
        numberOfDaysToShowCompletedIssues: number
        releaseIds?: bigint[] | undefined
        workStatusCategoryIds?: bigint[] | undefined
        workStatusIds?: bigint[] | undefined
      }
    | undefined
  id: bigint
  issueSources?: GetIssueSourceResponse[] | undefined
  lastSaved?: string | undefined
  leadAccountId?: string | undefined
  name?: string | undefined
  permissions?: GetPermissionResponse[] | undefined
  scheduling: {
    dependencies: 'Sequential' | 'Concurrent'
    endDate: {
      dateCustomFieldId?: bigint | undefined
      type: 'DueDate' | 'TargetStartDate' | 'TargetEndDate' | 'DateCustomField'
    }
    estimation: 'StoryPoints' | 'Days' | 'Hours'
    inferredDates: 'None' | 'SprintDates' | 'ReleaseDates' | 'AnySprintDates'
    startDate: {
      dateCustomFieldId?: bigint | undefined
      type: 'DueDate' | 'TargetStartDate' | 'TargetEndDate' | 'DateCustomField'
    }
  }
  status: 'Active' | 'Trashed' | 'Archived'
}
type DuplicatePlanRequest = { name: string }
type GetTeamResponseForPage = {
  id: string
  name?: string | undefined
  type: 'PlanOnly' | 'Atlassian'
}
type PageWithCursorGetTeamResponseForPage = {
  cursor?: string | undefined
  last?: boolean | undefined
  nextPageCursor?: string | undefined
  size?: number | undefined
  total?: bigint | undefined
  values?: GetTeamResponseForPage[] | undefined
}
type AddAtlassianTeamRequest = {
  capacity?: number | undefined
  id: string
  issueSourceId?: bigint | undefined
  planningStyle: 'Scrum' | 'Kanban'
  sprintLength?: bigint | undefined
}
type GetAtlassianTeamResponse = {
  capacity?: number | undefined
  id: string
  issueSourceId?: bigint | undefined
  planningStyle: 'Scrum' | 'Kanban'
  sprintLength?: bigint | undefined
}
type CreatePlanOnlyTeamRequest = {
  capacity?: number | undefined
  issueSourceId?: bigint | undefined
  memberAccountIds?: string[] | undefined
  name: string
  planningStyle: 'Scrum' | 'Kanban'
  sprintLength?: bigint | undefined
}
type GetPlanOnlyTeamResponse = {
  capacity?: number | undefined
  id: bigint
  issueSourceId?: bigint | undefined
  memberAccountIds?: string[] | undefined
  name: string
  planningStyle: 'Scrum' | 'Kanban'
  sprintLength?: bigint | undefined
}
type PolicySummary = {
  appliedProjectIds?: bigint[] | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  policyDescription?: string | undefined
  policyName?: string | undefined
  version?: bigint | undefined
}
type PolicySummaryResponse = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPageCursor?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: PolicySummary[] | undefined
}
type ErrorResponse = {
  errorMessages?: string[] | undefined
  errors?: { [x: string]: string } | undefined
}
type StatePolicyRule = {
  description?: string | undefined
  domain?: string | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  ruleId?: string | undefined
  ruleTypeId?: string | undefined
}
type StatePolicyDocument = {
  id?: string | undefined
  isDefault?: boolean | undefined
  policyDescription?: string | undefined
  policyName?: string | undefined
  rulesByDomain?: { [x: string]: StatePolicyRule[] } | undefined
  version?: bigint | undefined
}
type SetProjectPoliciesRequest = { policyIds?: string[] | undefined }
type PolicyApplicationViolation = {
  entityId?: string | undefined
  entityName?: string | undefined
  entityType?: string | undefined
  remediationHint?: string | undefined
  ruleTypeId?: string | undefined
}
type ValidatePolicyRequest = { policyIds?: string[] | undefined }
type BulkProjectPolicyRequest = { projectIds?: bigint[] | undefined }
type ProjectResult = {
  errors?: PolicyApplicationViolation[] | undefined
  message?: string | undefined
  projectId?: bigint | undefined
}
type BulkPolicyOperationResponse = {
  failed?: ProjectResult[] | undefined
  successful?: ProjectResult[] | undefined
}
type Priority = {
  avatarId?: bigint | undefined
  description?: string | undefined
  iconUrl?: string | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
  schemes?:
    | { maxResults?: number | undefined; startAt?: bigint | undefined; total?: bigint | undefined }
    | undefined
  self?: string | undefined
  statusColor?: string | undefined
}
type CreatePriorityDetails = {
  avatarId?: bigint | undefined
  description?: (string | null) | undefined
  iconUrl?:
    | '/images/icons/priorities/blocker.png'
    | '/images/icons/priorities/critical.png'
    | '/images/icons/priorities/high.png'
    | '/images/icons/priorities/highest.png'
    | '/images/icons/priorities/low.png'
    | '/images/icons/priorities/lowest.png'
    | '/images/icons/priorities/major.png'
    | '/images/icons/priorities/medium.png'
    | '/images/icons/priorities/minor.png'
    | '/images/icons/priorities/trivial.png'
    | '/images/icons/priorities/blocker_new.png'
    | '/images/icons/priorities/critical_new.png'
    | '/images/icons/priorities/high_new.png'
    | '/images/icons/priorities/highest_new.png'
    | '/images/icons/priorities/low_new.png'
    | '/images/icons/priorities/lowest_new.png'
    | '/images/icons/priorities/major_new.png'
    | '/images/icons/priorities/medium_new.png'
    | '/images/icons/priorities/minor_new.png'
    | '/images/icons/priorities/trivial_new.png'
    | undefined
  name: string
  statusColor: string
}
type PriorityId = { id: string }
type SetDefaultPriorityRequest = { id: string }
type ReorderIssuePriorities = {
  after?: string | undefined
  ids: string[]
  position?: string | undefined
}
type PageBeanPriority = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Priority[] | undefined
}
type UpdatePriorityDetails = {
  avatarId?: bigint | undefined
  description?: (string | null) | undefined
  iconUrl?:
    | '/images/icons/priorities/blocker.png'
    | '/images/icons/priorities/critical.png'
    | '/images/icons/priorities/high.png'
    | '/images/icons/priorities/highest.png'
    | '/images/icons/priorities/low.png'
    | '/images/icons/priorities/lowest.png'
    | '/images/icons/priorities/major.png'
    | '/images/icons/priorities/medium.png'
    | '/images/icons/priorities/minor.png'
    | '/images/icons/priorities/trivial.png'
    | '/images/icons/priorities/blocker_new.png'
    | '/images/icons/priorities/critical_new.png'
    | '/images/icons/priorities/high_new.png'
    | '/images/icons/priorities/highest_new.png'
    | '/images/icons/priorities/low_new.png'
    | '/images/icons/priorities/lowest_new.png'
    | '/images/icons/priorities/major_new.png'
    | '/images/icons/priorities/medium_new.png'
    | '/images/icons/priorities/minor_new.png'
    | '/images/icons/priorities/trivial_new.png'
    | undefined
  name?: (string | null) | undefined
  statusColor?: (string | null) | undefined
}
type PriorityWithSequence = {
  description?: string | undefined
  iconUrl?: string | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
  self?: string | undefined
  sequence?: string | undefined
  statusColor?: string | undefined
}
type PrioritySchemeWithPaginatedPrioritiesAndProjects = {
  default?: boolean | undefined
  defaultPriorityId?: string | undefined
  description?: string | undefined
  id: string
  isDefault?: boolean | undefined
  name: string
  priorities?:
    | {
        isLast?: boolean | undefined
        maxResults?: number | undefined
        nextPage?: string | undefined
        self?: string | undefined
        startAt?: bigint | undefined
        total?: bigint | undefined
        values?: PriorityWithSequence[] | undefined
      }
    | undefined
  projects?:
    | {
        isLast?: boolean | undefined
        maxResults?: number | undefined
        nextPage?: string | undefined
        self?: string | undefined
        startAt?: bigint | undefined
        total?: bigint | undefined
        values?: ProjectDetails[] | undefined
      }
    | undefined
  self?: string | undefined
}
type PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: PrioritySchemeWithPaginatedPrioritiesAndProjects[] | undefined
}
type CreatePrioritySchemeDetails = {
  defaultPriorityId: bigint
  description?: string | undefined
  mappings?:
    | { in?: { [x: string]: bigint } | undefined; out?: { [x: string]: bigint } | undefined }
    | undefined
  name: string
  priorityIds: bigint[]
  projectIds?: bigint[] | undefined
}
type PrioritySchemeId = {
  id?: string | undefined
  task?:
    | {
        description?: string | undefined
        elapsedRuntime: bigint
        finished?: bigint | undefined
        id: string
        lastUpdate: bigint
        message?: string | undefined
        progress: bigint
        result?:
          | {
              array?: boolean | undefined
              bigDecimal?: boolean | undefined
              bigInteger?: boolean | undefined
              bigIntegerValue?: number | undefined
              binary?: boolean | undefined
              binaryValue?: string[] | undefined
              boolean?: boolean | undefined
              booleanValue?: boolean | undefined
              containerNode?: boolean | undefined
              decimalValue?: number | undefined
              double?: boolean | undefined
              doubleValue?: number | undefined
              elements?: { [x: string]: unknown } | undefined
              fieldNames?: { [x: string]: unknown } | undefined
              fields?: { [x: string]: unknown } | undefined
              floatingPointNumber?: boolean | undefined
              int?: boolean | undefined
              intValue?: number | undefined
              integralNumber?: boolean | undefined
              long?: boolean | undefined
              longValue?: bigint | undefined
              missingNode?: boolean | undefined
              null?: boolean | undefined
              number?: boolean | undefined
              numberType?:
                | 'INT'
                | 'LONG'
                | 'BIG_INTEGER'
                | 'FLOAT'
                | 'DOUBLE'
                | 'BIG_DECIMAL'
                | undefined
              numberValue?: number | undefined
              object?: boolean | undefined
              pojo?: boolean | undefined
              textValue?: string | undefined
              textual?: boolean | undefined
              valueAsBoolean?: boolean | undefined
              valueAsDouble?: number | undefined
              valueAsInt?: number | undefined
              valueAsLong?: bigint | undefined
              valueAsText?: string | undefined
              valueNode?: boolean | undefined
            }
          | undefined
        self: string
        started?: bigint | undefined
        status:
          | 'ENQUEUED'
          | 'RUNNING'
          | 'COMPLETE'
          | 'FAILED'
          | 'CANCEL_REQUESTED'
          | 'CANCELLED'
          | 'DEAD'
        submitted: bigint
        submittedBy: bigint
      }
    | undefined
}
type SuggestedMappingsRequestBean = {
  maxResults?: number | undefined
  priorities?: { add?: bigint[] | undefined; remove?: bigint[] | undefined } | undefined
  projects?: { add?: bigint[] | undefined } | undefined
  schemeId?: bigint | undefined
  startAt?: bigint | undefined
}
type PageBeanPriorityWithSequence = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: PriorityWithSequence[] | undefined
}
type UpdatePrioritySchemeRequestBean = {
  defaultPriorityId?: bigint | undefined
  description?: string | undefined
  mappings?:
    | { in?: { [x: string]: bigint } | undefined; out?: { [x: string]: bigint } | undefined }
    | undefined
  name?: string | undefined
  priorities?:
    | { add?: { ids: bigint[] } | undefined; remove?: { ids: bigint[] } | undefined }
    | undefined
  projects?:
    | { add?: { ids: bigint[] } | undefined; remove?: { ids: bigint[] } | undefined }
    | undefined
}
type UpdatePrioritySchemeResponseBean = {
  priorityScheme?: PrioritySchemeWithPaginatedPrioritiesAndProjects | undefined
  task?:
    | {
        description?: string | undefined
        elapsedRuntime: bigint
        finished?: bigint | undefined
        id: string
        lastUpdate: bigint
        message?: string | undefined
        progress: bigint
        result?:
          | {
              array?: boolean | undefined
              bigDecimal?: boolean | undefined
              bigInteger?: boolean | undefined
              bigIntegerValue?: number | undefined
              binary?: boolean | undefined
              binaryValue?: string[] | undefined
              boolean?: boolean | undefined
              booleanValue?: boolean | undefined
              containerNode?: boolean | undefined
              decimalValue?: number | undefined
              double?: boolean | undefined
              doubleValue?: number | undefined
              elements?: { [x: string]: unknown } | undefined
              fieldNames?: { [x: string]: unknown } | undefined
              fields?: { [x: string]: unknown } | undefined
              floatingPointNumber?: boolean | undefined
              int?: boolean | undefined
              intValue?: number | undefined
              integralNumber?: boolean | undefined
              long?: boolean | undefined
              longValue?: bigint | undefined
              missingNode?: boolean | undefined
              null?: boolean | undefined
              number?: boolean | undefined
              numberType?:
                | 'INT'
                | 'LONG'
                | 'BIG_INTEGER'
                | 'FLOAT'
                | 'DOUBLE'
                | 'BIG_DECIMAL'
                | undefined
              numberValue?: number | undefined
              object?: boolean | undefined
              pojo?: boolean | undefined
              textValue?: string | undefined
              textual?: boolean | undefined
              valueAsBoolean?: boolean | undefined
              valueAsDouble?: number | undefined
              valueAsInt?: number | undefined
              valueAsLong?: bigint | undefined
              valueAsText?: string | undefined
              valueNode?: boolean | undefined
            }
          | undefined
        self: string
        started?: bigint | undefined
        status:
          | 'ENQUEUED'
          | 'RUNNING'
          | 'COMPLETE'
          | 'FAILED'
          | 'CANCEL_REQUESTED'
          | 'CANCELLED'
          | 'DEAD'
        submitted: bigint
        submittedBy: bigint
      }
    | undefined
}
type Project = {
  archived?: boolean | undefined
  archivedBy?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  archivedDate?: string | undefined
  assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
  avatarUrls?:
    | {
        '16x16'?: string | undefined
        '24x24'?: string | undefined
        '32x32'?: string | undefined
        '48x48'?: string | undefined
      }
    | undefined
  components?: ProjectComponent[] | undefined
  deleted?: boolean | undefined
  deletedBy?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  deletedDate?: string | undefined
  description?: string | undefined
  email?: string | undefined
  expand?: string | undefined
  favourite?: boolean | undefined
  id?: string | undefined
  insight?:
    | { lastIssueUpdateTime?: string | undefined; totalIssueCount?: bigint | undefined }
    | undefined
  isPrivate?: boolean | undefined
  issueTypeHierarchy?:
    | { baseLevelId?: bigint | undefined; levels?: SimplifiedHierarchyLevel[] | undefined }
    | undefined
  issueTypes?: IssueTypeDetails[] | undefined
  key?: string | undefined
  landingPageInfo?:
    | {
        attributes?: { [x: string]: string } | undefined
        boardId?: bigint | undefined
        boardName?: string | undefined
        projectKey?: string | undefined
        projectType?: string | undefined
        queueCategory?: string | undefined
        queueId?: bigint | undefined
        queueName?: string | undefined
        simpleBoard?: boolean | undefined
        simplified?: boolean | undefined
        url?: string | undefined
      }
    | undefined
  lead?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  name?: string | undefined
  permissions?: { canEdit?: boolean | undefined } | undefined
  projectCategory?:
    | {
        description?: string | undefined
        id?: string | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
  projectTypeKey?: 'software' | 'service_desk' | 'business' | 'product_discovery' | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  retentionTillDate?: string | undefined
  roles?: { [x: string]: string } | undefined
  self?: string | undefined
  simplified?: boolean | undefined
  style?: 'classic' | 'next-gen' | undefined
  url?: string | undefined
  uuid?: string | undefined
  versions?: Version[] | undefined
}
type PageBeanProject = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Project[] | undefined
}
type CreateProjectDetails = {
  assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
  avatarId?: bigint | undefined
  categoryId?: bigint | undefined
  description?: string | undefined
  fieldConfigurationScheme?: bigint | undefined
  fieldScheme?: bigint | undefined
  issueSecurityScheme?: bigint | undefined
  issueTypeScheme?: bigint | undefined
  issueTypeScreenScheme?: bigint | undefined
  key: string
  lead?: string | undefined
  leadAccountId?: string | undefined
  name: string
  notificationScheme?: bigint | undefined
  permissionScheme?: bigint | undefined
  projectTemplateKey?:
    | 'com.pyxis.greenhopper.jira:gh-simplified-agility-kanban'
    | 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum'
    | 'com.pyxis.greenhopper.jira:gh-simplified-basic'
    | 'com.pyxis.greenhopper.jira:gh-simplified-kanban-classic'
    | 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic'
    | 'com.pyxis.greenhopper.jira:gh-cross-team-template'
    | 'com.pyxis.greenhopper.jira:gh-cross-team-planning-template'
    | 'com.atlassian.servicedesk:simplified-it-service-management'
    | 'com.atlassian.servicedesk:simplified-it-service-management-basic'
    | 'com.atlassian.servicedesk:simplified-it-service-management-operations'
    | 'com.atlassian.servicedesk:simplified-internal-service-desk'
    | 'com.atlassian.servicedesk:simplified-external-service-desk'
    | 'com.atlassian.servicedesk:simplified-hr-service-desk'
    | 'com.atlassian.servicedesk:simplified-facilities-service-desk'
    | 'com.atlassian.servicedesk:simplified-legal-service-desk'
    | 'com.atlassian.servicedesk:simplified-marketing-service-desk'
    | 'com.atlassian.servicedesk:simplified-finance-service-desk'
    | 'com.atlassian.servicedesk:simplified-analytics-service-desk'
    | 'com.atlassian.servicedesk:simplified-design-service-desk'
    | 'com.atlassian.servicedesk:simplified-sales-service-desk'
    | 'com.atlassian.servicedesk:simplified-halp-service-desk'
    | 'com.atlassian.servicedesk:next-gen-it-service-desk'
    | 'com.atlassian.servicedesk:next-gen-hr-service-desk'
    | 'com.atlassian.servicedesk:next-gen-legal-service-desk'
    | 'com.atlassian.servicedesk:next-gen-marketing-service-desk'
    | 'com.atlassian.servicedesk:next-gen-facilities-service-desk'
    | 'com.atlassian.servicedesk:next-gen-analytics-service-desk'
    | 'com.atlassian.servicedesk:next-gen-finance-service-desk'
    | 'com.atlassian.servicedesk:next-gen-design-service-desk'
    | 'com.atlassian.servicedesk:next-gen-sales-service-desk'
    | 'com.atlassian.servicedesk:company-managed-blank-service-project'
    | 'com.atlassian.servicedesk:company-managed-general-service-project'
    | 'com.atlassian.servicedesk:team-managed-general-service-project'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-content-management'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-process-control'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-procurement'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-project-management'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-task-'
    | 'com.atlassian.jcs:customer-service-management'
    | undefined
  projectTypeKey?: 'software' | 'service_desk' | 'business' | 'customer_service' | undefined
  url?: string | undefined
  workflowScheme?: bigint | undefined
}
type ProjectIdentifiers = { id: bigint; key: string; self: string }
type CustomTemplatesProjectDetails = {
  accessLevel?: 'open' | 'limited' | 'private' | 'free' | undefined
  additionalProperties?: { [x: string]: string } | undefined
  assigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
  avatarId?: bigint | undefined
  categoryId?: bigint | undefined
  description?: string | undefined
  enableComponents?: boolean | undefined
  key?: string | undefined
  language?: string | undefined
  leadAccountId?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type BoardFeaturePayload = {
  featureKey?: 'ESTIMATION' | 'SPRINTS' | undefined
  state?: true | false | undefined
}
type BoardFeaturesPayload = {
  boardFeatures?: { [x: string]: BoardFeaturePayload[] } | undefined
} | null
type CardLayout = { showDaysInColumn?: true | false | undefined }
type CardLayoutField = {
  fieldId?: string | undefined
  id?: bigint | undefined
  mode?: 'PLAN' | 'WORK' | undefined
  position?: number | undefined
}
type ProjectCreateResourceIdentifier = {
  anID?: boolean | undefined
  areference?: boolean | undefined
  entityId?: string | undefined
  entityType?: string | undefined
  id?: string | undefined
  type?: 'id' | 'ref' | undefined
}
type BoardColumnPayload = {
  maximumIssueConstraint?: bigint | undefined
  minimumIssueConstraint?: bigint | undefined
  name?: string | undefined
  statusIds?: ProjectCreateResourceIdentifier[] | undefined
}
type QuickFilterPayload = {
  description?: string | undefined
  jqlQuery?: string | undefined
  name?: string | undefined
}
type SwimlanePayload = {
  description?: string | undefined
  jqlQuery?: string | undefined
  name?: string | undefined
}
type SwimlanesPayload = {
  customSwimlanes?: SwimlanePayload[] | undefined
  defaultCustomSwimlaneName?: string | undefined
  swimlaneStrategy?:
    | 'none'
    | 'custom'
    | 'parentChild'
    | 'assignee'
    | 'assigneeUnassignedFirst'
    | 'epic'
    | 'project'
    | 'issueparent'
    | 'issuechildren'
    | 'request_type'
    | undefined
}
type NonWorkingDay = { id?: bigint | undefined; iso8601Date?: string | undefined }
type WorkingDaysConfig = {
  friday?: boolean | undefined
  id?: bigint | undefined
  monday?: boolean | undefined
  nonWorkingDays?: NonWorkingDay[] | undefined
  saturday?: boolean | undefined
  sunday?: boolean | undefined
  thursday?: boolean | undefined
  timezoneId?: string | undefined
  tuesday?: boolean | undefined
  wednesday?: boolean | undefined
}
type BoardPayload = {
  boardFilterJQL?: string | undefined
  cardColorStrategy?:
    | 'ISSUE_TYPE'
    | 'REQUEST_TYPE'
    | 'ASSIGNEE'
    | 'PRIORITY'
    | 'NONE'
    | 'CUSTOM'
    | undefined
  cardLayout?: CardLayout | undefined
  cardLayouts?: CardLayoutField[] | undefined
  columns?: BoardColumnPayload[] | undefined
  enableCardCover?: boolean | undefined
  features?: BoardFeaturePayload[] | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  quickFilters?: QuickFilterPayload[] | undefined
  supportsSprint?: boolean | undefined
  swimlanes?: SwimlanesPayload | undefined
  workingDaysConfig?: WorkingDaysConfig | undefined
}
type BoardsPayload = { boards?: BoardPayload[] | undefined } | null
type CustomFieldPayload = {
  cfType?: string | undefined
  description?: string | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  scope?: 'GLOBAL' | 'TEMPLATE' | 'PROJECT' | undefined
  searcherKey?: string | undefined
} | null
type FieldLayoutSchemePayload = {
  defaultFieldLayout?: ProjectCreateResourceIdentifier | undefined
  description?: string | undefined
  explicitMappings?: { [x: string]: ProjectCreateResourceIdentifier } | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type FieldLayoutConfiguration = {
  field?: boolean | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  required?: boolean | undefined
}
type FieldLayoutPayload = {
  configuration?: FieldLayoutConfiguration[] | undefined
  description?: string | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type FieldAssociationItemPayload = {
  description?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  qualifierId?: ProjectCreateResourceIdentifier | undefined
  qualifierType?: ProjectCreateResourceIdentifier | undefined
  rendererType?: string | undefined
  required?: boolean | undefined
}
type FieldSchemePayload = {
  description?: string | undefined
  items?: FieldAssociationItemPayload[] | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type IssueLayoutItemPayload = {
  itemKey?: ProjectCreateResourceIdentifier | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  sectionType?: 'content' | 'primaryContext' | 'secondaryContext' | undefined
  type?: 'FIELD' | undefined
}
type IssueLayoutPayload = {
  containerId?: ProjectCreateResourceIdentifier | undefined
  issueLayoutType?: 'ISSUE_VIEW' | 'ISSUE_CREATE' | 'REQUEST_FORM' | undefined
  items?: IssueLayoutItemPayload[] | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type IssueTypeScreenSchemePayload = {
  defaultScreenScheme?: ProjectCreateResourceIdentifier | undefined
  description?: string | undefined
  explicitMappings?: { [x: string]: ProjectCreateResourceIdentifier } | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type ScreenSchemePayload = {
  defaultScreen?: ProjectCreateResourceIdentifier | undefined
  description?: string | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  screens?: { [x: string]: ProjectCreateResourceIdentifier } | undefined
} | null
type TabPayload = {
  fields?: ProjectCreateResourceIdentifier[] | undefined
  name?: string | undefined
}
type ScreenPayload = {
  description?: string | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  tabs?: TabPayload[] | undefined
} | null
type FieldCapabilityPayload = {
  customFieldDefinitions?: (CustomFieldPayload[] | null) | undefined
  fieldLayoutScheme?: FieldLayoutSchemePayload | undefined
  fieldLayouts?: (FieldLayoutPayload[] | null) | undefined
  fieldScheme?: FieldSchemePayload | undefined
  issueLayouts?: (IssueLayoutPayload[] | null) | undefined
  issueTypeScreenScheme?: IssueTypeScreenSchemePayload | undefined
  screenScheme?: (ScreenSchemePayload[] | null) | undefined
  screens?: (ScreenPayload[] | null) | undefined
} | null
type IssueTypeHierarchyPayload = {
  hierarchyLevel?: number | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type IssueTypeSchemePayload = {
  defaultIssueTypeId?: ProjectCreateResourceIdentifier | undefined
  description?: (string | null) | undefined
  issueTypeIds?: ProjectCreateResourceIdentifier[] | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
}
type IssueTypePayload = {
  avatarId?: (bigint | null) | undefined
  description?: (string | null) | undefined
  hierarchyLevel?: number | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type IssueTypeProjectCreatePayload = {
  issueTypeHierarchy?: (IssueTypeHierarchyPayload[] | null) | undefined
  issueTypeScheme?: IssueTypeSchemePayload | undefined
  issueTypes?: (IssueTypePayload[] | null) | undefined
} | null
type NotificationSchemeEventIDPayload = { id?: string | undefined }
type NotificationSchemeNotificationDetailsPayload = {
  notificationType?: string | undefined
  parameter?: string | undefined
}
type NotificationSchemeEventPayload = {
  event?: NotificationSchemeEventIDPayload | undefined
  notifications?: NotificationSchemeNotificationDetailsPayload[] | undefined
}
type NotificationSchemePayload = {
  description?: string | undefined
  name?: string | undefined
  notificationSchemeEvents?: NotificationSchemeEventPayload[] | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type PermissionGrantDTO = {
  applicationAccess?: string[] | undefined
  groupCustomFields?: ProjectCreateResourceIdentifier[] | undefined
  groups?: ProjectCreateResourceIdentifier[] | undefined
  permissionKeys?: string[] | undefined
  projectRoles?: ProjectCreateResourceIdentifier[] | undefined
  specialGrants?: string[] | undefined
  userCustomFields?: ProjectCreateResourceIdentifier[] | undefined
  users?: ProjectCreateResourceIdentifier[] | undefined
}
type PermissionPayloadDTO = {
  addAddonRole?: boolean | undefined
  description?: string | undefined
  grants?: PermissionGrantDTO[] | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
} | null
type ProjectPayload = {
  fieldLayoutSchemeId?: ProjectCreateResourceIdentifier | undefined
  issueSecuritySchemeId?: ProjectCreateResourceIdentifier | undefined
  issueTypeSchemeId?: ProjectCreateResourceIdentifier | undefined
  issueTypeScreenSchemeId?: ProjectCreateResourceIdentifier | undefined
  notificationSchemeId?: ProjectCreateResourceIdentifier | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  permissionSchemeId?: ProjectCreateResourceIdentifier | undefined
  projectTypeKey?: 'software' | 'business' | 'service_desk' | 'product_discovery' | undefined
  workflowSchemeId?: ProjectCreateResourceIdentifier | undefined
}
type RolePayload = {
  defaultActors?: ProjectCreateResourceIdentifier[] | undefined
  description?: string | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  type?: 'HIDDEN' | 'VIEWABLE' | 'AI_AGENT' | 'EDITABLE' | 'GUEST' | undefined
}
type RolesCapabilityPayload = {
  roleToProjectActors?: { [x: string]: ProjectCreateResourceIdentifier[] } | undefined
  roles?: RolePayload[] | undefined
} | null
type ScopePayload = { type?: 'GLOBAL' | 'PROJECT' | undefined } | null
type SecurityLevelMemberPayload = {
  parameter?: string | undefined
  type?: 'group' | 'reporter' | 'users' | undefined
}
type SecurityLevelPayload = {
  description?: string | undefined
  isDefault?: true | false | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  securityLevelMembers?: SecurityLevelMemberPayload[] | undefined
}
type SecuritySchemePayload = {
  description?: string | undefined
  name?: string | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  securityLevels?: SecurityLevelPayload[] | undefined
} | null
type StatusPayload = {
  description?: string | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  scope?: 'GLOBAL' | undefined
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE' | undefined
}
type WorkflowSchemePayload = {
  defaultWorkflow?: ProjectCreateResourceIdentifier | undefined
  description?: string | undefined
  explicitMappings?: { [x: string]: ProjectCreateResourceIdentifier } | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
}
type WorkflowStatusLayoutPayload = { x?: number | undefined; y?: number | undefined }
type WorkflowStatusPayload = {
  layout?: WorkflowStatusLayoutPayload | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  properties?: { [x: string]: string } | undefined
}
type RulePayload = {
  parameters?: { [x: string]: string } | undefined
  ruleKey?: string | undefined
}
type ConditionGroupPayload = {
  conditionGroup?: ConditionGroupPayload[] | undefined
  conditions?: RulePayload[] | undefined
  operation?: 'ANY' | 'ALL' | undefined
}
type FromLayoutPayload = {
  fromPort?: number | undefined
  status?: ProjectCreateResourceIdentifier | undefined
  toPortOverride?: number | undefined
}
type ToLayoutPayload = {
  port?: number | undefined
  status?: ProjectCreateResourceIdentifier | undefined
}
type TransitionPayload = {
  actions?: RulePayload[] | undefined
  conditions?: ConditionGroupPayload | undefined
  customIssueEventId?: string | undefined
  description?: string | undefined
  from?: FromLayoutPayload[] | undefined
  id?: number | undefined
  name?: string | undefined
  properties?: { [x: string]: string } | undefined
  to?: ToLayoutPayload | undefined
  transitionScreen?: RulePayload | undefined
  triggers?: RulePayload[] | undefined
  type?: 'global' | 'initial' | 'directed' | undefined
  validators?: RulePayload[] | undefined
}
type WorkflowPayload = {
  description?: string | undefined
  loopedTransitionContainerLayout?: WorkflowStatusLayoutPayload | undefined
  name?: string | undefined
  onConflict?: 'FAIL' | 'USE' | 'NEW' | undefined
  pcri?: ProjectCreateResourceIdentifier | undefined
  startPointLayout?: WorkflowStatusLayoutPayload | undefined
  statuses?: WorkflowStatusPayload[] | undefined
  transitions?: TransitionPayload[] | undefined
}
type WorkflowCapabilityPayload = {
  statuses?: StatusPayload[] | undefined
  workflowScheme?: WorkflowSchemePayload | undefined
  workflows?: WorkflowPayload[] | undefined
} | null
type CustomTemplateRequestDTO = {
  boardFeatures?: BoardFeaturesPayload | undefined
  boards?: BoardsPayload | undefined
  field?: FieldCapabilityPayload | undefined
  issueType?: IssueTypeProjectCreatePayload | undefined
  notification?: NotificationSchemePayload | undefined
  permissionScheme?: PermissionPayloadDTO | undefined
  project?: ProjectPayload | undefined
  role?: RolesCapabilityPayload | undefined
  scope?: ScopePayload | undefined
  security?: SecuritySchemePayload | undefined
  workflow?: WorkflowCapabilityPayload | undefined
}
type ProjectCustomTemplateCreateRequestDTO = {
  details?: CustomTemplatesProjectDetails | undefined
  template?: CustomTemplateRequestDTO | undefined
}
type CustomTemplateOptions = {
  enableScreenDelegatedAdminSupport?: boolean | undefined
  enableWorkflowDelegatedAdminSupport?: boolean | undefined
}
type EditTemplateRequest = {
  templateDescription?: string | undefined
  templateGenerationOptions?: CustomTemplateOptions | undefined
  templateKey?: string | undefined
  templateName?: string | undefined
}
type ProjectArchetype = {
  realType?:
    | 'BUSINESS'
    | 'SOFTWARE'
    | 'PRODUCT_DISCOVERY'
    | 'SERVICE_DESK'
    | 'CUSTOMER_SERVICE'
    | 'OPS'
    | undefined
  style?: 'classic' | 'next-gen' | undefined
  type?:
    | 'BUSINESS'
    | 'SOFTWARE'
    | 'PRODUCT_DISCOVERY'
    | 'SERVICE_DESK'
    | 'CUSTOMER_SERVICE'
    | 'OPS'
    | undefined
}
type ProjectTemplateKey = { key?: string | undefined; uuid?: string | undefined }
type ProjectTemplateModel = {
  archetype?: ProjectArchetype | undefined
  defaultBoardView?: string | undefined
  description?: string | undefined
  liveTemplateProjectIdReference?: bigint | undefined
  name?: string | undefined
  projectTemplateKey?: ProjectTemplateKey | undefined
  snapshotTemplate?: { [x: string]: { [x: string]: unknown } } | undefined
  templateGenerationOptions?: CustomTemplateOptions | undefined
  type?: 'LIVE' | 'SNAPSHOT' | undefined
}
type SaveProjectTemplateRequest = {
  projectId?: bigint | undefined
  templateGenerationOptions?: CustomTemplateOptions | undefined
  templateType?: 'LIVE' | 'SNAPSHOT' | undefined
}
type SaveTemplateRequest = {
  templateDescription?: string | undefined
  templateFromProjectRequest?: SaveProjectTemplateRequest | undefined
  templateName?: string | undefined
}
type SaveTemplateResponse = { projectTemplateKey?: ProjectTemplateKey | undefined }
type StringList = {}
type ProjectType = {
  color?: string | undefined
  descriptionI18nKey?: string | undefined
  formattedKey?: string | undefined
  icon?: string | undefined
  key?: string | undefined
}
type UpdateProjectDetails = {
  assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
  avatarId?: bigint | undefined
  categoryId?: bigint | undefined
  description?: string | undefined
  issueSecurityScheme?: bigint | undefined
  key?: string | undefined
  lead?: string | undefined
  leadAccountId?: string | undefined
  name?: string | undefined
  notificationScheme?: bigint | undefined
  permissionScheme?: bigint | undefined
  releasedProjectKeys?: string[] | undefined
  url?: string | undefined
}
type ProjectAvatars = { custom?: Avatar[] | undefined; system?: Avatar[] | undefined }
type UpdateDefaultProjectClassificationBean = { id: string }
type ComponentWithIssueCount = {
  assignee?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  assigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED' | undefined
  description?: string | undefined
  id?: string | undefined
  isAssigneeTypeValid?: boolean | undefined
  issueCount?: bigint | undefined
  lead?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  name?: string | undefined
  project?: string | undefined
  projectId?: bigint | undefined
  realAssignee?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  realAssigneeType?:
    | 'PROJECT_DEFAULT'
    | 'COMPONENT_LEAD'
    | 'PROJECT_LEAD'
    | 'UNASSIGNED'
    | undefined
  self?: string | undefined
}
type PageBeanComponentWithIssueCount = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ComponentWithIssueCount[] | undefined
}
type ProjectFeature = {
  feature?: string | undefined
  imageUri?: string | undefined
  localisedDescription?: string | undefined
  localisedName?: string | undefined
  prerequisites?: string[] | undefined
  projectId?: bigint | undefined
  state?: 'ENABLED' | 'DISABLED' | 'COMING_SOON' | undefined
  toggleLocked?: boolean | undefined
}
type ContainerForProjectFeatures = { features?: ProjectFeature[] | undefined }
type ProjectFeatureState = { state?: 'ENABLED' | 'DISABLED' | 'COMING_SOON' | undefined }
type ProjectRole = {
  actors?: RoleActor[] | undefined
  admin?: boolean | undefined
  currentUserRole?: boolean | undefined
  default?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  roleConfigurable?: boolean | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
  translatedName?: string | undefined
}
type ActorsMap = {
  group?: string[] | undefined
  groupId?: string[] | undefined
  user?: string[] | undefined
}
type ProjectRoleActorsUpdateBean = {
  categorisedActors?: { [x: string]: string[] } | undefined
  id?: bigint | undefined
}
type ProjectRoleDetails = {
  admin?: boolean | undefined
  default?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  roleConfigurable?: boolean | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
  translatedName?: string | undefined
  type?: 'DEFAULT' | 'GUEST_ROLE' | 'AI_AGENT_ROLE' | undefined
}
type StatusDetails = {
  description?: string | undefined
  iconUrl?: string | undefined
  id?: string | undefined
  name?: string | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
  self?: string | undefined
  statusCategory?:
    | {
        colorName?: string | undefined
        id?: bigint | undefined
        key?: string | undefined
        name?: string | undefined
        self?: string | undefined
      }
    | undefined
}
type IssueTypeWithStatus = {
  id: string
  name: string
  self: string
  statuses: StatusDetails[]
  subtask: boolean
}
type PageBeanVersion = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Version[] | undefined
}
type ProjectEmailAddress = {
  emailAddress?: string | undefined
  emailAddressStatus?: string[] | undefined
}
type IssueTypeInfo = {
  avatarId?: bigint | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type ProjectIssueTypesHierarchyLevel = {
  entityId?: string | undefined
  issueTypes?: IssueTypeInfo[] | undefined
  level?: number | undefined
  name?: string | undefined
}
type ProjectIssueTypeHierarchy = {
  hierarchy?: ProjectIssueTypesHierarchyLevel[] | undefined
  projectId?: bigint | undefined
}
type IdBean = { id: bigint }
type ProjectIssueSecurityLevels = { levels: SecurityLevel[] }
type ProjectCategory = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type UpdatedProjectCategory = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type ProjectFieldBean = {
  description?: string | undefined
  fieldId?: string | undefined
  isRequired?: boolean | undefined
  projectId?: bigint | undefined
  workTypeId?: bigint | undefined
}
type PageBean2ProjectFieldBean = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ProjectFieldBean[] | undefined
}
type ContentItem = {
  entityId: string
  entityType: 'issuefieldvalue' | 'issue-comment' | 'issue-worklog'
  id: string
}
type RedactionPosition = {
  adfPointer?: string | undefined
  expectedText: string
  from: number
  to: number
}
type SingleRedactionRequest = {
  contentItem: ContentItem
  externalId: string
  reason: string
  redactionPosition: RedactionPosition
}
type BulkRedactionRequest = { redactions?: SingleRedactionRequest[] | undefined }
type SingleRedactionResponse = { externalId: string; successful: boolean }
type BulkRedactionResponse = { results: SingleRedactionResponse[] }
type RedactionJobStatusResponse = {
  bulkRedactionResponse?: BulkRedactionResponse | undefined
  jobStatus?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | undefined
}
type Resolution = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type CreateResolutionDetails = { description?: string | undefined; name: string }
type ResolutionId = { id: string }
type SetDefaultResolutionRequest = { id: string }
type ReorderIssueResolutionsRequest = {
  after?: string | undefined
  ids: string[]
  position?: string | undefined
}
type ResolutionJsonBean = {
  default?: boolean | undefined
  description?: string | undefined
  iconUrl?: string | undefined
  id?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type PageBeanResolutionJsonBean = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ResolutionJsonBean[] | undefined
}
type UpdateResolutionDetails = { description?: string | undefined; name: string }
type CreateUpdateRoleRequestBean = { description?: string | undefined; name?: string | undefined }
type ActorInputBean = {
  group?: string[] | undefined
  groupId?: string[] | undefined
  user?: string[] | undefined
}
type Screen = {
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  scope?:
    | {
        project?:
          | {
              avatarUrls?:
                | {
                    '16x16'?: string | undefined
                    '24x24'?: string | undefined
                    '32x32'?: string | undefined
                    '48x48'?: string | undefined
                  }
                | undefined
              id?: string | undefined
              key?: string | undefined
              name?: string | undefined
              projectCategory?:
                | {
                    description?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              projectTypeKey?:
                | 'software'
                | 'service_desk'
                | 'business'
                | 'product_discovery'
                | undefined
              self?: string | undefined
              simplified?: boolean | undefined
            }
          | undefined
        type?: 'PROJECT' | 'TEMPLATE' | undefined
      }
    | undefined
}
type PageBeanScreen = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Screen[] | undefined
}
type ScreenDetails = { description?: string | undefined; name: string }
type UpdateScreenDetails = { description?: string | undefined; name?: string | undefined }
type ScreenableField = { id?: string | undefined; name?: string | undefined }
type ScreenableTab = { id?: bigint | undefined; name: string }
type AddFieldBean = { fieldId: string }
type MoveFieldBean = {
  after?: string | undefined
  position?: 'Earlier' | 'Later' | 'First' | 'Last' | undefined
}
type ScreenScheme = {
  description?: string | undefined
  id?: bigint | undefined
  issueTypeScreenSchemes?:
    | {
        isLast?: boolean | undefined
        maxResults?: number | undefined
        nextPage?: string | undefined
        self?: string | undefined
        startAt?: bigint | undefined
        total?: bigint | undefined
        values?: IssueTypeScreenScheme[] | undefined
      }
    | undefined
  name?: string | undefined
  screens?:
    | {
        create?: bigint | undefined
        default: bigint
        edit?: bigint | undefined
        view?: bigint | undefined
      }
    | undefined
}
type PageBeanScreenScheme = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: ScreenScheme[] | undefined
}
type ScreenSchemeDetails = {
  description?: string | undefined
  name: string
  screens: {
    create?: bigint | undefined
    default: bigint
    edit?: bigint | undefined
    view?: bigint | undefined
  }
}
type ScreenSchemeId = { id: bigint }
type UpdateScreenSchemeDetails = {
  description?: string | undefined
  name?: string | undefined
  screens?:
    | {
        create?: string | undefined
        default?: string | undefined
        edit?: string | undefined
        view?: string | undefined
      }
    | undefined
}
type SearchResults = {
  expand?: string | undefined
  issues?: IssueBean[] | undefined
  maxResults?: number | undefined
  names?: { [x: string]: string } | undefined
  schema?: { [x: string]: JsonTypeBean } | undefined
  startAt?: number | undefined
  total?: number | undefined
  warningMessages?: string[] | undefined
}
type SearchRequestBean = {
  expand?: string[] | undefined
  fields?: string[] | undefined
  fieldsByKeys?: boolean | undefined
  jql?: string | undefined
  maxResults?: number | undefined
  properties?: string[] | undefined
  startAt?: number | undefined
  validateQuery?: 'strict' | 'warn' | 'none' | 'true' | 'false' | undefined
}
type JQLCountRequestBean = { jql?: string | undefined }
type JQLCountResultsBean = { count?: bigint | undefined }
type SearchWarning = {
  details?:
    | {
        actual?: bigint | undefined
        arguments?: string | undefined
        clause?: string | undefined
        limit?: bigint | undefined
      }
    | undefined
  message?: string | undefined
  type?: string | undefined
}
type SearchAndReconcileResults = {
  isLast?: boolean | undefined
  issues?: IssueBean[] | undefined
  names?: { [x: string]: string } | undefined
  nextPageToken?: string | undefined
  schema?: { [x: string]: JsonTypeBean } | undefined
  warnings?: SearchWarning[] | undefined
}
type SearchAndReconcileRequestBean = {
  expand?: string | undefined
  fields?: string[] | undefined
  fieldsByKeys?: boolean | undefined
  includeArchivedProjects?: boolean | undefined
  jql?: string | undefined
  maxResults?: number | undefined
  nextPageToken?: string | undefined
  properties?: string[] | undefined
  reconcileIssues?: bigint[] | undefined
}
type HealthCheckResult = {
  description?: string | undefined
  name?: string | undefined
  passed?: boolean | undefined
}
type ServerInformation = {
  baseUrl?: string | undefined
  buildDate?: string | undefined
  buildNumber?: number | undefined
  deploymentType?: string | undefined
  displayUrl?: string | undefined
  displayUrlConfluence?: string | undefined
  displayUrlServicedeskHelpCenter?: string | undefined
  healthChecks?: HealthCheckResult[] | undefined
  scmInfo?: string | undefined
  serverTime?: string | undefined
  serverTimeZone?: string | undefined
  serverTitle?: string | undefined
  version?: string | undefined
  versionNumbers?: number[] | undefined
}
type StatusCategory = {
  colorName?: string | undefined
  id?: bigint | undefined
  key?: string | undefined
  name?: string | undefined
  self?: string | undefined
}
type ProjectId = { id: string } | null
type StatusScope = { project?: ProjectId | undefined; type: 'PROJECT' | 'GLOBAL' }
type JiraStatus = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  scope?: StatusScope | undefined
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE' | undefined
}
type StatusCreate = {
  description?: string | undefined
  name: string
  statusCategory: 'TODO' | 'IN_PROGRESS' | 'DONE'
}
type StatusCreateRequest = { scope: StatusScope; statuses: StatusCreate[] }
type StatusUpdate = {
  description?: string | undefined
  id: string
  name: string
  statusCategory: 'TODO' | 'IN_PROGRESS' | 'DONE'
}
type StatusUpdateRequest = { statuses: StatusUpdate[] }
type PageOfStatuses = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: JiraStatus[] | undefined
}
type StatusProjectIssueTypeUsage = { id?: string | undefined }
type StatusProjectIssueTypeUsagePage = {
  nextPageToken?: string | undefined
  values?: StatusProjectIssueTypeUsage[] | undefined
}
type StatusProjectIssueTypeUsageDTO = {
  issueTypes?: StatusProjectIssueTypeUsagePage | undefined
  projectId?: string | undefined
  statusId?: string | undefined
}
type StatusProjectUsage = { id?: string | undefined }
type StatusProjectUsagePage = {
  nextPageToken?: string | undefined
  values?: StatusProjectUsage[] | undefined
}
type StatusProjectUsageDTO = {
  projects?: StatusProjectUsagePage | undefined
  statusId?: string | undefined
}
type StatusWorkflowUsageWorkflow = { id?: string | undefined }
type StatusWorkflowUsagePage = {
  nextPageToken?: string | undefined
  values?: StatusWorkflowUsageWorkflow[] | undefined
}
type StatusWorkflowUsageDTO = {
  statusId?: string | undefined
  workflows?: StatusWorkflowUsagePage | undefined
}
type UiModificationContextDetails = {
  id?: string | undefined
  isAvailable?: boolean | undefined
  issueTypeId?: string | undefined
  portalId?: string | undefined
  projectId?: string | undefined
  requestTypeId?: string | undefined
  viewType?:
    | 'GIC'
    | 'IssueView'
    | 'IssueTransition'
    | 'JSMRequestCreate'
    | 'GICAgentView'
    | 'IssueViewAgentView'
    | 'IssueTransitionAgentView'
    | undefined
}
type UiModificationDetails = {
  contexts?: UiModificationContextDetails[] | undefined
  data?: string | undefined
  description?: string | undefined
  id: string
  name: string
  self: string
}
type PageBeanUiModificationDetails = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: UiModificationDetails[] | undefined
}
type CreateUiModificationDetails = {
  contexts?: UiModificationContextDetails[] | undefined
  data?: string | undefined
  description?: string | undefined
  name: string
}
type UiModificationIdentifiers = { id: string; self: string }
type DetailedErrorCollection = {
  details?: { [x: string]: { [x: string]: unknown } } | undefined
  errorMessages?: string[] | undefined
  errors?: { [x: string]: string } | undefined
}
type UpdateUiModificationDetails = {
  contexts?: UiModificationContextDetails[] | undefined
  data?: string | undefined
  description?: string | undefined
  name?: string | undefined
}
type Avatars = { custom?: Avatar[] | undefined; system?: Avatar[] | undefined }
type StreamingResponseBody = {}
type NewUserDetails = {
  applicationKeys?: string[] | undefined
  displayName?: string | undefined
  emailAddress: string
  key?: string | undefined
  name?: string | undefined
  password?: string | undefined
  products: string[]
  self?: string | undefined
}
type PageBeanUser = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: User[] | undefined
}
type UserMigrationBean = {
  accountId?: string | undefined
  key?: string | undefined
  username?: string | undefined
}
type UserColumnRequestBody = { columns?: string[] | undefined }
type UnrestrictedUserEmail = { accountId?: string | undefined; email?: string | undefined }
type UserKey = { accountId?: string | undefined; key?: string | undefined }
type PageBeanUserKey = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: UserKey[] | undefined
}
type VersionMoveBean = {
  after?: string | undefined
  position?: 'Earlier' | 'Later' | 'First' | 'Last' | undefined
}
type VersionUsageInCustomField = {
  customFieldId?: bigint | undefined
  fieldName?: string | undefined
  issueCountWithVersionInCustomField?: bigint | undefined
}
type VersionIssueCounts = {
  customFieldUsage?: VersionUsageInCustomField[] | undefined
  issueCountWithCustomFieldsShowingVersion?: bigint | undefined
  issuesAffectedCount?: bigint | undefined
  issuesFixedCount?: bigint | undefined
  self?: string | undefined
}
type VersionRelatedWork = {
  category: string
  issueId?: bigint | undefined
  relatedWorkId?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type CustomFieldReplacement = { customFieldId?: bigint | undefined; moveTo?: bigint | undefined }
type DeleteAndReplaceVersionBean = {
  customFieldReplacementList?: CustomFieldReplacement[] | undefined
  moveAffectedIssuesTo?: bigint | undefined
  moveFixIssuesTo?: bigint | undefined
}
type VersionUnresolvedIssuesCount = {
  issuesCount?: bigint | undefined
  issuesUnresolvedCount?: bigint | undefined
  self?: string | undefined
}
type ContainerForWebhookIDs = { webhookIds: bigint[] }
type Webhook = {
  events: (
    | 'jira:issue_created'
    | 'jira:issue_updated'
    | 'jira:issue_deleted'
    | 'comment_created'
    | 'comment_updated'
    | 'comment_deleted'
    | 'issue_property_set'
    | 'issue_property_deleted'
    | 'sprint_created'
    | 'sprint_updated'
    | 'sprint_closed'
    | 'sprint_deleted'
    | 'sprint_started'
    | 'jira:version_released'
    | 'jira:version_unreleased'
    | 'jira:version_created'
    | 'jira:version_moved'
    | 'jira:version_updated'
    | 'jira:version_merged'
    | 'jira:version_deleted'
  )[]
  expirationDate?: bigint | undefined
  fieldIdsFilter?: string[] | undefined
  id: bigint
  issuePropertyKeysFilter?: string[] | undefined
  jqlFilter: string
  url: string
}
type PageBeanWebhook = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Webhook[] | undefined
}
type WebhookDetails = {
  events: (
    | 'jira:issue_created'
    | 'jira:issue_updated'
    | 'jira:issue_deleted'
    | 'comment_created'
    | 'comment_updated'
    | 'comment_deleted'
    | 'issue_property_set'
    | 'issue_property_deleted'
    | 'sprint_created'
    | 'sprint_updated'
    | 'sprint_closed'
    | 'sprint_deleted'
    | 'sprint_started'
    | 'jira:version_released'
    | 'jira:version_unreleased'
    | 'jira:version_created'
    | 'jira:version_moved'
    | 'jira:version_updated'
    | 'jira:version_merged'
    | 'jira:version_deleted'
  )[]
  fieldIdsFilter?: string[] | undefined
  issuePropertyKeysFilter?: string[] | undefined
  jqlFilter: string
}
type WebhookRegistrationDetails = { url: string; webhooks: WebhookDetails[] }
type RegisteredWebhook = { createdWebhookId?: bigint | undefined; errors?: string[] | undefined }
type ContainerForRegisteredWebhooks = {
  webhookRegistrationResult?: RegisteredWebhook[] | undefined
}
type FailedWebhook = { body?: string | undefined; failureTime: bigint; id: string; url: string }
type FailedWebhooks = { maxResults: number; next?: string | undefined; values: FailedWebhook[] }
type WebhooksExpirationDate = { expirationDate: bigint }
type WorkflowHistoryReadRequest = { version?: bigint | undefined; workflowId?: string | undefined }
type WorkflowScope = { project?: ProjectId | undefined; type?: 'PROJECT' | 'GLOBAL' | undefined }
type WorkflowDocumentStatusDTO = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  scope?: WorkflowScope | undefined
  statusCategory?: string | undefined
  statusReference?: string | undefined
}
type WorkflowLayout = { x?: number | undefined; y?: number | undefined } | null
type ApprovalConfiguration = {
  active: 'true' | 'false'
  conditionType: 'number' | 'percent' | 'numberPerPrincipal'
  conditionValue: string
  exclude?: (('assignee' | 'reporter')[] | null) | undefined
  fieldId: string
  prePopulatedFieldId?: (string | null) | undefined
  transitionApproved: string
  transitionRejected: string
} | null
type WorkflowStatusLayout = {
  x?: (number | null) | undefined
  y?: (number | null) | undefined
} | null
type WorkflowReferenceStatus = {
  approvalConfiguration?: ApprovalConfiguration | undefined
  deprecated?: boolean | undefined
  layout?: WorkflowStatusLayout | undefined
  properties?: { [x: string]: string } | undefined
  statusReference?: string | undefined
}
type WorkflowRuleConfiguration = {
  id?: (string | null) | undefined
  parameters?: { [x: string]: string } | undefined
  ruleKey: string
} | null
type ConditionGroupConfiguration = {
  conditionGroups?: ConditionGroupConfiguration[] | undefined
  conditions?: WorkflowRuleConfiguration[] | undefined
  operation?: 'ANY' | 'ALL' | undefined
} | null
type WorkflowTransitionLinks = {
  fromPort?: (number | null) | undefined
  fromStatusReference?: (string | null) | undefined
  toPort?: (number | null) | undefined
} | null
type WorkflowTrigger = {
  id?: string | undefined
  parameters: { [x: string]: string }
  ruleKey: string
}
type WorkflowTransitions = {
  actions?: WorkflowRuleConfiguration[] | undefined
  conditions?: ConditionGroupConfiguration | undefined
  customIssueEventId?: (string | null) | undefined
  description?: string | undefined
  id?: string | undefined
  links?: WorkflowTransitionLinks[] | undefined
  name?: string | undefined
  properties?: { [x: string]: string } | undefined
  toStatusReference?: string | undefined
  transitionScreen?: WorkflowRuleConfiguration | undefined
  triggers?: WorkflowTrigger[] | undefined
  type?: 'INITIAL' | 'GLOBAL' | 'DIRECTED' | undefined
  validators?: WorkflowRuleConfiguration[] | undefined
}
type DocumentVersion = { id?: string | undefined; versionNumber?: bigint | undefined }
type WorkflowDocumentDTO = {
  created?: string | undefined
  description?: string | undefined
  id?: string | undefined
  lastUpdateAuthorAAID?: string | undefined
  loopedTransitionContainerLayout?: WorkflowLayout | undefined
  name?: string | undefined
  scope?: WorkflowScope | undefined
  startPointLayout?: WorkflowLayout | undefined
  statuses?: WorkflowReferenceStatus[] | undefined
  transitions?: WorkflowTransitions[] | undefined
  updated?: string | undefined
  version?: DocumentVersion | undefined
}
type WorkflowHistoryReadResponseDTO = {
  statuses?: WorkflowDocumentStatusDTO[] | undefined
  workflows?: WorkflowDocumentDTO[] | undefined
}
type WorkflowHistoryListRequest = { workflowId?: string | undefined }
type WorkflowHistoryItemDTO = {
  isIntermediate?: boolean | undefined
  workflowId?: string | undefined
  workflowVersion?: bigint | undefined
  writtenAt?: string | undefined
}
type WorkflowHistoryListResponseDTO = { entries?: WorkflowHistoryItemDTO[] | undefined }
type RuleConfiguration = { disabled?: boolean | undefined; tag?: string | undefined; value: string }
type AppWorkflowTransitionRule = {
  configuration: RuleConfiguration
  id: string
  key: string
  transition?: { id: number; name: string } | undefined
}
type WorkflowId = { draft?: boolean | undefined; name: string }
type WorkflowTransitionRules = {
  conditions?: AppWorkflowTransitionRule[] | undefined
  postFunctions?: AppWorkflowTransitionRule[] | undefined
  validators?: AppWorkflowTransitionRule[] | undefined
  workflowId: WorkflowId
}
type PageBeanWorkflowTransitionRules = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: WorkflowTransitionRules[] | undefined
}
type WorkflowTransitionRulesUpdate = { workflows: WorkflowTransitionRules[] }
type WorkflowTransitionRulesUpdateErrorDetails = {
  ruleUpdateErrors: { [x: string]: string[] }
  updateErrors: string[]
  workflowId: WorkflowId
}
type WorkflowTransitionRulesUpdateErrors = {
  updateResults: WorkflowTransitionRulesUpdateErrorDetails[]
}
type WorkflowTransitionRulesDetails = { workflowId: WorkflowId; workflowRuleIds: string[] }
type WorkflowsWithTransitionRulesDetails = { workflows: WorkflowTransitionRulesDetails[] }
type PublishedWorkflowId = { entityId?: string | undefined; name: string }
type WorkflowOperations = { canDelete: boolean; canEdit: boolean }
type WorkflowSchemeIdName = { id: string; name: string }
type WorkflowStatus = {
  id: string
  name: string
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
}
type WorkflowSimpleCondition = {
  configuration?: { [x: string]: unknown } | undefined
  nodeType: string
  type: string
}
type WorkflowCompoundCondition = {
  conditions: WorkflowCondition[]
  nodeType: string
  operator: 'AND' | 'OR'
}
type WorkflowCondition = WorkflowSimpleCondition | WorkflowCompoundCondition
type WorkflowTransitionRule = { configuration?: { [x: string]: unknown } | undefined; type: string }
type WorkflowRules = {
  conditionsTree?: WorkflowCondition | undefined
  postFunctions?: WorkflowTransitionRule[] | undefined
  validators?: WorkflowTransitionRule[] | undefined
}
type TransitionScreenDetails = { id: string; name?: string | undefined }
type Transition = {
  description: string
  from: string[]
  id: string
  name: string
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  rules?: WorkflowRules | undefined
  screen?: TransitionScreenDetails | undefined
  to: string
  type: 'global' | 'initial' | 'directed'
}
type Workflow = {
  created?: string | undefined
  description: string
  hasDraftWorkflow?: boolean | undefined
  id: PublishedWorkflowId
  isDefault?: boolean | undefined
  operations?: WorkflowOperations | undefined
  projects?: ProjectDetails[] | undefined
  schemes?: WorkflowSchemeIdName[] | undefined
  statuses?: WorkflowStatus[] | undefined
  transitions?: Transition[] | undefined
  updated?: string | undefined
}
type PageBeanWorkflow = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: Workflow[] | undefined
}
type WorkflowProjectIssueTypeUsage = { id?: string | undefined }
type WorkflowProjectIssueTypeUsagePage = {
  nextPageToken?: string | undefined
  values?: WorkflowProjectIssueTypeUsage[] | undefined
}
type WorkflowProjectIssueTypeUsageDTO = {
  issueTypes?: WorkflowProjectIssueTypeUsagePage | undefined
  projectId?: string | undefined
  workflowId?: string | undefined
}
type ProjectUsage = { id?: string | undefined }
type ProjectUsagePage = { nextPageToken?: string | undefined; values?: ProjectUsage[] | undefined }
type WorkflowProjectUsageDTO = {
  projects?: ProjectUsagePage | undefined
  workflowId?: string | undefined
}
type WorkflowSchemeUsage = { id?: string | undefined }
type WorkflowSchemeUsagePage = {
  nextPageToken?: string | undefined
  values?: WorkflowSchemeUsage[] | undefined
}
type WorkflowSchemeUsageDTO = {
  workflowId?: string | undefined
  workflowSchemes?: WorkflowSchemeUsagePage | undefined
}
type ProjectAndIssueTypePair = { issueTypeId: string; projectId: string }
type WorkflowReadRequest = {
  projectAndIssueTypes?: ProjectAndIssueTypePair[] | undefined
  workflowIds?: string[] | undefined
  workflowNames?: string[] | undefined
}
type JiraWorkflowStatus = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  scope?: WorkflowScope | undefined
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE' | undefined
  statusReference?: string | undefined
}
type JiraWorkflow = {
  created?: (string | null) | undefined
  description?: string | undefined
  id?: string | undefined
  isEditable?: boolean | undefined
  loopedTransitionContainerLayout?: WorkflowLayout | undefined
  name?: string | undefined
  scope?: WorkflowScope | undefined
  startPointLayout?: WorkflowLayout | undefined
  statuses?: WorkflowReferenceStatus[] | undefined
  taskId?: (string | null) | undefined
  transitions?: WorkflowTransitions[] | undefined
  updated?: (string | null) | undefined
  version?: DocumentVersion | undefined
}
type WorkflowReadResponse = {
  statuses?: JiraWorkflowStatus[] | undefined
  workflows?: JiraWorkflow[] | undefined
}
type AvailableWorkflowConnectRule = {
  addonKey?: string | undefined
  createUrl?: string | undefined
  description?: string | undefined
  editUrl?: string | undefined
  moduleKey?: string | undefined
  name?: string | undefined
  ruleKey?: string | undefined
  ruleType?: 'Condition' | 'Validator' | 'Function' | 'Screen' | undefined
  viewUrl?: string | undefined
}
type AvailableWorkflowForgeRule = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  ruleKey?: string | undefined
  ruleType?: 'Condition' | 'Validator' | 'Function' | 'Screen' | undefined
}
type AvailableWorkflowSystemRule = {
  description: string
  incompatibleRuleKeys: string[]
  isAvailableForInitialTransition: boolean
  isVisible: boolean
  name: string
  ruleKey: string
  ruleType: 'Condition' | 'Validator' | 'Function' | 'Screen'
}
type AvailableWorkflowTriggerTypes = {
  description?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
type AvailableWorkflowTriggers = {
  availableTypes: AvailableWorkflowTriggerTypes[]
  ruleKey: string
}
type WorkflowCapabilities = {
  connectRules?: AvailableWorkflowConnectRule[] | undefined
  editorScope?: 'PROJECT' | 'GLOBAL' | undefined
  forgeRules?: AvailableWorkflowForgeRule[] | undefined
  projectTypes?:
    | ('software' | 'service_desk' | 'product_discovery' | 'business' | 'unknown')[]
    | undefined
  systemRules?: AvailableWorkflowSystemRule[] | undefined
  triggerRules?: AvailableWorkflowTriggers[] | undefined
}
type WorkflowCopyRequest = {
  description?: string | undefined
  workflowId: string
  workflowName: string
}
type WorkflowCreateResponse = {
  statuses?: JiraWorkflowStatus[] | undefined
  workflows?: JiraWorkflow[] | undefined
}
type WorkflowStatusUpdate = {
  description?: string | undefined
  id?: string | undefined
  name: string
  statusCategory: 'TODO' | 'IN_PROGRESS' | 'DONE'
  statusReference: string
}
type StatusLayoutUpdate = {
  approvalConfiguration?: ApprovalConfiguration | undefined
  layout?: WorkflowLayout | undefined
  properties: { [x: string]: string }
  statusReference: string
}
type ConditionGroupUpdate = {
  conditionGroups?: ConditionGroupUpdate[] | undefined
  conditions?: WorkflowRuleConfiguration[] | undefined
  operation: 'ANY' | 'ALL'
} | null
type TransitionUpdateDTO = {
  actions?: WorkflowRuleConfiguration[] | undefined
  conditions?: ConditionGroupUpdate | undefined
  customIssueEventId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  links?: WorkflowTransitionLinks[] | undefined
  name?: string | undefined
  properties?: { [x: string]: string } | undefined
  toStatusReference?: string | undefined
  transitionScreen?: WorkflowRuleConfiguration | undefined
  triggers?: WorkflowTrigger[] | undefined
  type?: 'INITIAL' | 'GLOBAL' | 'DIRECTED' | undefined
  validators?: WorkflowRuleConfiguration[] | undefined
}
type WorkflowCreate = {
  description?: string | undefined
  loopedTransitionContainerLayout?: WorkflowLayout | undefined
  name: string
  startPointLayout?: WorkflowLayout | undefined
  statuses: StatusLayoutUpdate[]
  transitions: TransitionUpdateDTO[]
}
type WorkflowCreateRequest = {
  scope?: WorkflowScope | undefined
  statuses?: WorkflowStatusUpdate[] | undefined
  workflows?: WorkflowCreate[] | undefined
}
type ValidationOptionsForCreate = { levels?: ('WARNING' | 'ERROR')[] | undefined }
type WorkflowCreateValidateRequest = {
  payload: WorkflowCreateRequest
  validationOptions?: ValidationOptionsForCreate | undefined
}
type WorkflowElementReference = {
  propertyKey?: string | undefined
  ruleId?: string | undefined
  statusMappingReference?: ProjectAndIssueTypePair | undefined
  statusReference?: string | undefined
  transitionId?: string | undefined
}
type WorkflowValidationError = {
  additionalDetails?: string | undefined
  code?: string | undefined
  elementReference?: WorkflowElementReference | undefined
  level?: 'WARNING' | 'ERROR' | undefined
  message?: string | undefined
  type?:
    | 'RULE'
    | 'STATUS'
    | 'STATUS_LAYOUT'
    | 'STATUS_PROPERTY'
    | 'WORKFLOW'
    | 'TRANSITION'
    | 'TRANSITION_PROPERTY'
    | 'SCOPE'
    | 'STATUS_MAPPING'
    | 'TRIGGER'
    | undefined
}
type WorkflowValidationErrorList = { errors?: WorkflowValidationError[] | undefined }
type DefaultWorkflowEditorResponse = { value?: 'NEW' | 'LEGACY' | undefined }
type WorkflowPreviewRequest = {
  issueTypeIds?: string[] | undefined
  projectId: string
  workflowIds?: string[] | undefined
  workflowNames?: string[] | undefined
}
type WorkflowProjectIdScope = { id?: string | undefined } | null
type WorkflowPreviewScope = {
  project?: WorkflowProjectIdScope | undefined
  type?: 'PROJECT' | 'GLOBAL' | undefined
}
type JiraWorkflowPreviewStatus = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  rawName?: string | undefined
  scope?: WorkflowPreviewScope | undefined
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE' | undefined
  statusReference?: string | undefined
}
type WorkflowPreviewLayout = { x?: number | undefined; y?: number | undefined }
type ProjectIssueTypeQueryContext = {
  issueTypes?: string[] | undefined
  project?: string | undefined
}
type ApprovalConfigurationPreview = {
  active?: string | undefined
  transitionApproved?: string | undefined
  transitionRejected?: string | undefined
}
type WorkflowPreviewStatus = {
  approvalConfiguration?: ApprovalConfigurationPreview | undefined
  deprecated?: boolean | undefined
  layout?: WorkflowPreviewLayout | undefined
  statusReference?: string | undefined
}
type PreviewRuleConfiguration = {
  id?: string | undefined
  parameters?: { [x: string]: string } | undefined
  ruleKey?: string | undefined
} | null
type PreviewConditionGroupConfiguration = {
  conditionGroups?: PreviewConditionGroupConfiguration[] | undefined
  conditions?: PreviewRuleConfiguration[] | undefined
  operation?: 'ANY' | 'ALL' | undefined
} | null
type TransitionLink = {
  fromPort?: number | undefined
  fromStatusReference?: string | undefined
  toPort?: number | undefined
}
type PreviewTrigger = { id?: string | undefined; ruleKey?: string | undefined }
type TransitionPreview = {
  actions?: PreviewRuleConfiguration[] | undefined
  conditions?: PreviewConditionGroupConfiguration | undefined
  customIssueEventId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  links?: TransitionLink[] | undefined
  name?: string | undefined
  toStatusReference?: string | undefined
  transitionScreen?: PreviewRuleConfiguration | undefined
  triggers?: PreviewTrigger[] | undefined
  type?: 'INITIAL' | 'GLOBAL' | 'DIRECTED' | undefined
  validators?: PreviewRuleConfiguration[] | undefined
}
type WorkflowDocumentVersionBean = { id?: string | undefined; versionNumber?: bigint | undefined }
type WorkflowPreview = {
  description?: string | undefined
  id?: string | undefined
  loopedTransitionContainerLayout?: WorkflowPreviewLayout | undefined
  name?: string | undefined
  queryContext?: ProjectIssueTypeQueryContext[] | undefined
  scope?: WorkflowPreviewScope | undefined
  startPointLayout?: WorkflowPreviewLayout | undefined
  statuses?: WorkflowPreviewStatus[] | undefined
  transitions?: TransitionPreview[] | undefined
  version?: WorkflowDocumentVersionBean | undefined
}
type WorkflowPreviewResponse = {
  statuses?: JiraWorkflowPreviewStatus[] | undefined
  workflows?: WorkflowPreview[] | undefined
}
type WorkflowSearchResponse = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  statuses?: JiraWorkflowStatus[] | undefined
  total?: bigint | undefined
  values?: JiraWorkflow[] | undefined
}
type StatusMigration = { newStatusReference: string; oldStatusReference: string }
type StatusMappingDTO = {
  issueTypeId: string
  projectId: string
  statusMigrations: StatusMigration[]
}
type WorkflowUpdate = {
  defaultStatusMappings?: StatusMigration[] | undefined
  description?: string | undefined
  id: string
  loopedTransitionContainerLayout?: WorkflowLayout | undefined
  startPointLayout?: WorkflowLayout | undefined
  statusMappings?: StatusMappingDTO[] | undefined
  statuses: StatusLayoutUpdate[]
  transitions: TransitionUpdateDTO[]
  version: DocumentVersion
}
type WorkflowUpdateRequest = {
  statuses?: WorkflowStatusUpdate[] | undefined
  workflows?: WorkflowUpdate[] | undefined
}
type WorkflowUpdateResponse = {
  statuses?: JiraWorkflowStatus[] | undefined
  taskId?: (string | null) | undefined
  workflows?: JiraWorkflow[] | undefined
}
type ValidationOptionsForUpdate = { levels?: ('WARNING' | 'ERROR')[] | undefined }
type WorkflowUpdateValidateRequestBean = {
  payload: WorkflowUpdateRequest
  validationOptions?: ValidationOptionsForUpdate | undefined
}
type WorkflowScheme = {
  defaultWorkflow?: string | undefined
  description?: string | undefined
  draft?: boolean | undefined
  id?: bigint | undefined
  issueTypeMappings?: { [x: string]: string } | undefined
  issueTypes?: { [x: string]: IssueTypeDetails } | undefined
  lastModified?: string | undefined
  lastModifiedUser?:
    | {
        accountId?: string | undefined
        accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
        active?: boolean | undefined
        appType?: string | undefined
        applicationRoles?:
          | {
              callback?: ListWrapperCallbackApplicationRole | undefined
              items?: ApplicationRole[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackApplicationRole | undefined
              size?: number | undefined
            }
          | undefined
        avatarUrls?:
          | {
              '16x16'?: string | undefined
              '24x24'?: string | undefined
              '32x32'?: string | undefined
              '48x48'?: string | undefined
            }
          | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        expand?: string | undefined
        groups?:
          | {
              callback?: ListWrapperCallbackGroupName | undefined
              items?: GroupName[] | undefined
              'max-results'?: number | undefined
              pagingCallback?: ListWrapperCallbackGroupName | undefined
              size?: number | undefined
            }
          | undefined
        guest?: boolean | undefined
        key?: string | undefined
        locale?: string | undefined
        name?: string | undefined
        self?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  name?: string | undefined
  originalDefaultWorkflow?: string | undefined
  originalIssueTypeMappings?: { [x: string]: string } | undefined
  self?: string | undefined
  updateDraftIfNeeded?: boolean | undefined
}
type PageBeanWorkflowScheme = {
  isLast?: boolean | undefined
  maxResults?: number | undefined
  nextPage?: string | undefined
  self?: string | undefined
  startAt?: bigint | undefined
  total?: bigint | undefined
  values?: WorkflowScheme[] | undefined
}
type WorkflowSchemeAssociations = {
  projectIds: string[]
  workflowScheme: {
    defaultWorkflow?: string | undefined
    description?: string | undefined
    draft?: boolean | undefined
    id?: bigint | undefined
    issueTypeMappings?: { [x: string]: string } | undefined
    issueTypes?: { [x: string]: IssueTypeDetails } | undefined
    lastModified?: string | undefined
    lastModifiedUser?:
      | {
          accountId?: string | undefined
          accountType?: 'atlassian' | 'app' | 'customer' | 'unknown' | undefined
          active?: boolean | undefined
          appType?: string | undefined
          applicationRoles?:
            | {
                callback?: ListWrapperCallbackApplicationRole | undefined
                items?: ApplicationRole[] | undefined
                'max-results'?: number | undefined
                pagingCallback?: ListWrapperCallbackApplicationRole | undefined
                size?: number | undefined
              }
            | undefined
          avatarUrls?:
            | {
                '16x16'?: string | undefined
                '24x24'?: string | undefined
                '32x32'?: string | undefined
                '48x48'?: string | undefined
              }
            | undefined
          displayName?: string | undefined
          emailAddress?: string | undefined
          expand?: string | undefined
          groups?:
            | {
                callback?: ListWrapperCallbackGroupName | undefined
                items?: GroupName[] | undefined
                'max-results'?: number | undefined
                pagingCallback?: ListWrapperCallbackGroupName | undefined
                size?: number | undefined
              }
            | undefined
          guest?: boolean | undefined
          key?: string | undefined
          locale?: string | undefined
          name?: string | undefined
          self?: string | undefined
          timeZone?: string | undefined
        }
      | undefined
    name?: string | undefined
    originalDefaultWorkflow?: string | undefined
    originalIssueTypeMappings?: { [x: string]: string } | undefined
    self?: string | undefined
    updateDraftIfNeeded?: boolean | undefined
  }
}
type ContainerOfWorkflowSchemeAssociations = { values: WorkflowSchemeAssociations[] }
type WorkflowSchemeProjectAssociation = { projectId: string; workflowSchemeId?: string | undefined }
type WorkflowAssociationStatusMapping = {
  newStatusId?: string | undefined
  oldStatusId?: string | undefined
}
type MappingsByIssueTypeOverride = {
  issueTypeId?: string | undefined
  statusMappings?: WorkflowAssociationStatusMapping[] | undefined
}
type WorkflowSchemeProjectSwitchBean = {
  mappingsByIssueTypeOverride?: MappingsByIssueTypeOverride[] | undefined
  projectId?: string | undefined
  targetSchemeId?: string | undefined
}
type WorkflowSchemeReadRequest = {
  projectIds?: ((string | null)[] | null) | undefined
  workflowSchemeIds?: ((string | null)[] | null) | undefined
}
type WorkflowMetadataRestModel = {
  description: string
  id: string
  name: string
  version: DocumentVersion
}
type WorkflowMetadataAndIssueTypeRestModel = {
  issueTypeIds: string[]
  workflow: WorkflowMetadataRestModel
}
type WorkflowSchemeReadResponse = {
  defaultWorkflow?: WorkflowMetadataRestModel | undefined
  description?: (string | null) | undefined
  id: string
  name: string
  scope: WorkflowScope
  taskId?: (string | null) | undefined
  version: DocumentVersion
  workflowsForIssueTypes: WorkflowMetadataAndIssueTypeRestModel[]
}
type MappingsByWorkflow = {
  newWorkflowId: string
  oldWorkflowId: string
  statusMappings: WorkflowAssociationStatusMapping[]
}
type WorkflowSchemeAssociation = { issueTypeIds: string[]; workflowId: string }
type WorkflowSchemeUpdateRequest = {
  defaultWorkflowId?: string | undefined
  description: string
  id: string
  name: string
  statusMappingsByIssueTypeOverride?: MappingsByIssueTypeOverride[] | undefined
  statusMappingsByWorkflows?: MappingsByWorkflow[] | undefined
  version: DocumentVersion
  workflowsForIssueTypes?: WorkflowSchemeAssociation[] | undefined
}
type WorkflowSchemeUpdateRequiredMappingsRequest = {
  defaultWorkflowId?: (string | null) | undefined
  id: string
  workflowsForIssueTypes: WorkflowSchemeAssociation[]
}
type RequiredMappingByIssueType = {
  issueTypeId?: string | undefined
  statusIds?: string[] | undefined
}
type RequiredMappingByWorkflows = {
  sourceWorkflowId?: string | undefined
  statusIds?: string[] | undefined
  targetWorkflowId?: string | undefined
}
type StatusMetadata = {
  category?: 'TODO' | 'IN_PROGRESS' | 'DONE' | undefined
  id?: string | undefined
  name?: string | undefined
}
type StatusesPerWorkflow = {
  initialStatusId?: string | undefined
  statuses?: string[] | undefined
  workflowId?: string | undefined
}
type WorkflowSchemeUpdateRequiredMappingsResponse = {
  statusMappingsByIssueTypes?: RequiredMappingByIssueType[] | undefined
  statusMappingsByWorkflows?: RequiredMappingByWorkflows[] | undefined
  statuses?: StatusMetadata[] | undefined
  statusesPerWorkflow?: StatusesPerWorkflow[] | undefined
}
type DefaultWorkflow = { updateDraftIfNeeded?: boolean | undefined; workflow: string }
type IssueTypeWorkflowMapping = {
  issueType?: string | undefined
  updateDraftIfNeeded?: boolean | undefined
  workflow?: string | undefined
}
type StatusMapping = { issueTypeId: string; newStatusId: string; statusId: string }
type PublishDraftWorkflowScheme = { statusMappings?: StatusMapping[] | undefined }
type IssueTypesWorkflowMapping = {
  defaultMapping?: boolean | undefined
  issueTypes?: string[] | undefined
  updateDraftIfNeeded?: boolean | undefined
  workflow?: string | undefined
}
type WorkflowSchemeProjectUsageDTO = {
  projects?: ProjectUsagePage | undefined
  workflowSchemeId?: string | undefined
}
type ChangedWorklog = {
  properties?: EntityProperty[] | undefined
  updatedTime?: bigint | undefined
  worklogId?: bigint | undefined
}
type ChangedWorklogs = {
  lastPage?: boolean | undefined
  nextPage?: string | undefined
  self?: string | undefined
  since?: bigint | undefined
  until?: bigint | undefined
  values?: ChangedWorklog[] | undefined
}
type OperationMessage = { message: string; statusCode: number }
type ConnectModule = { [x: string]: unknown }
type ConnectModules = { modules: ConnectModule[] }
type ConnectCustomFieldValue = {
  _type:
    | 'StringIssueField'
    | 'NumberIssueField'
    | 'RichTextIssueField'
    | 'SingleSelectIssueField'
    | 'MultiSelectIssueField'
    | 'TextIssueField'
  fieldID: number
  issueID: number
  number?: number | undefined
  optionID?: string | undefined
  richText?: string | undefined
  string?: string | undefined
  text?: string | undefined
}
type ConnectCustomFieldValues = { updateValueList?: ConnectCustomFieldValue[] | undefined }
type EntityPropertyDetails = { entityId: number; key: string; value: string }
type WorkflowRulesSearch = {
  expand?: string | undefined
  ruleIds: string[]
  workflowEntityId: string
}
type WorkflowRulesSearchDetails = {
  invalidRules?: string[] | undefined
  validRules?: WorkflowTransitionRules[] | undefined
  workflowEntityId?: string | undefined
}
type TaskProgress = {
  description?: string | undefined
  elapsedRuntime: bigint
  finished?: string | undefined
  id: string
  lastUpdate: string
  message?: string | undefined
  progress: bigint
  result?: { [x: string]: unknown } | undefined
  self: string
  started?: string | undefined
  status: 'ENQUEUED' | 'RUNNING' | 'COMPLETE' | 'FAILED' | 'CANCEL_REQUESTED' | 'CANCELLED' | 'DEAD'
  submitted?: string | undefined
  submittedBy: bigint
}
type ServiceRegistryTier = {
  description?: (string | null) | undefined
  id?: string | undefined
  level?: number | undefined
  name?: (string | null) | undefined
  nameKey?: string | undefined
}
type ServiceRegistry = {
  description?: (string | null) | undefined
  id?: string | undefined
  name?: string | undefined
  organizationId?: string | undefined
  revision?: string | undefined
  serviceTier?: ServiceRegistryTier | undefined
}
type WorklogCompositeKey = { issueId?: bigint | undefined; worklogId?: bigint | undefined }
type BulkWorklogKeyRequestBean = { requests?: WorklogCompositeKey[] | undefined }
type WorklogKeyResult = { issueId?: bigint | undefined; worklogId?: bigint | undefined }
type BulkWorklogKeyResponseBean = { worklogs?: WorklogKeyResult[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/rest/api/3/agents/bulk/invoke/batch': {
      $post:
        | {
            input: { json: BulkStartAgentSessionsBatchRequest }
            output: BulkAgentSessionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkStartAgentSessionsBatchRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkStartAgentSessionsBatchRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkStartAgentSessionsBatchRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkStartAgentSessionsBatchRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/rest/api/3/agents/bulk/invoke/uniform': {
      $post:
        | {
            input: { json: BulkStartUniformAgentSessionsRequest }
            output: BulkAgentSessionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkStartUniformAgentSessionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkStartUniformAgentSessionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkStartUniformAgentSessionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkStartUniformAgentSessionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/rest/api/3/announcementBanner': {
      $get:
        | { input: {}; output: AnnouncementBannerConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 403 }
      $put:
        | {
            input: { json: AnnouncementBannerConfigurationUpdate }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: AnnouncementBannerConfigurationUpdate }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AnnouncementBannerConfigurationUpdate }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AnnouncementBannerConfigurationUpdate }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/app/field/context/configuration/list': {
      $post:
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            } & { json: ConfigurationsListParameters }
            output: PageBeanBulkContextualConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            } & { json: ConfigurationsListParameters }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            } & { json: ConfigurationsListParameters }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            } & { json: ConfigurationsListParameters }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            } & { json: ConfigurationsListParameters }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/app/field/value': {
      $post:
        | {
            input: {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: MultipleCustomFieldValuesUpdateDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: MultipleCustomFieldValuesUpdateDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: MultipleCustomFieldValuesUpdateDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: MultipleCustomFieldValuesUpdateDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/app/field/:fieldIdOrKey/context/configuration': {
      $get:
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanContextualConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                id?: bigint[] | undefined
                fieldContextId?: bigint[] | undefined
                issueId?: bigint | undefined
                projectKeyOrId?: string | undefined
                issueTypeId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { fieldIdOrKey: string } } & { json: CustomFieldConfigurations }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldIdOrKey: string } } & { json: CustomFieldConfigurations }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldIdOrKey: string } } & { json: CustomFieldConfigurations }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldIdOrKey: string } } & { json: CustomFieldConfigurations }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldIdOrKey: string } } & { json: CustomFieldConfigurations }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/app/field/:fieldIdOrKey/value': {
      $put:
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: CustomFieldValueUpdateDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: CustomFieldValueUpdateDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: CustomFieldValueUpdateDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldIdOrKey: string } } & {
              query: {
                generateChangelog?: boolean | undefined
                generateAppEvents?: boolean | undefined
              }
            } & { json: CustomFieldValueUpdateDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/application-properties': {
      $get:
        | {
            input: {
              query: {
                key?: string | undefined
                permissionLevel?: string | undefined
                keyFilter?: string | undefined
              }
            }
            output: ApplicationProperty[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                key?: string | undefined
                permissionLevel?: string | undefined
                keyFilter?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                key?: string | undefined
                permissionLevel?: string | undefined
                keyFilter?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/application-properties/advanced-settings': {
      $get:
        | { input: {}; output: ApplicationProperty[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/application-properties/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: SimpleApplicationPropertyBean }
            output: ApplicationProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SimpleApplicationPropertyBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SimpleApplicationPropertyBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SimpleApplicationPropertyBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SimpleApplicationPropertyBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/applicationrole': {
      $get:
        | { input: {}; output: ApplicationRole[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/applicationrole/:key': {
      $get:
        | {
            input: { param: { key: string } }
            output: ApplicationRole
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/attachment/content/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { redirect?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 416
          }
    }
  } & {
    '/rest/api/3/attachment/meta': {
      $get:
        | { input: {}; output: AttachmentSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/attachment/thumbnail/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                redirect?: boolean | undefined
                fallbackToDefault?: boolean | undefined
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                redirect?: boolean | undefined
                fallbackToDefault?: boolean | undefined
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { id: string } } & {
              query: {
                redirect?: boolean | undefined
                fallbackToDefault?: boolean | undefined
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                redirect?: boolean | undefined
                fallbackToDefault?: boolean | undefined
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                redirect?: boolean | undefined
                fallbackToDefault?: boolean | undefined
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                redirect?: boolean | undefined
                fallbackToDefault?: boolean | undefined
                width?: number | undefined
                height?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/attachment/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: AttachmentMetadata
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/attachment/:id/expand/human': {
      $get:
        | {
            input: { param: { id: string } }
            output: AttachmentArchiveMetadataReadable
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/attachment/:id/expand/raw': {
      $get:
        | {
            input: { param: { id: string } }
            output: AttachmentArchiveImpl
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/auditing/record': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: AuditRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                filter?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/avatar/:type/system': {
      $get:
        | {
            input: { param: { type: 'issuetype' | 'project' | 'user' | 'priority' } }
            output: SystemAvatars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'user' | 'priority' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'user' | 'priority' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/rest/api/3/bulk/issues/delete': {
      $post:
        | {
            input: { json: IssueBulkDeletePayload }
            output: SubmittedBulkOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueBulkDeletePayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueBulkDeletePayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IssueBulkDeletePayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/bulk/issues/fields': {
      $get:
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                searchText?: string | undefined
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkEditGetFields
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                searchText?: string | undefined
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                searchText?: string | undefined
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                searchText?: string | undefined
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                searchText?: string | undefined
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: IssueBulkEditPayload }
            output: SubmittedBulkOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueBulkEditPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueBulkEditPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/bulk/issues/move': {
      $post:
        | {
            input: { json: IssueBulkMovePayload }
            output: SubmittedBulkOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueBulkMovePayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueBulkMovePayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/bulk/issues/transition': {
      $get:
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkTransitionGetAvailableTransitions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                issueIdsOrKeys: string
                endingBefore?: string | undefined
                startingAfter?: string | undefined
              }
            }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: IssueBulkTransitionPayload }
            output: SubmittedBulkOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueBulkTransitionPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueBulkTransitionPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IssueBulkTransitionPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/bulk/issues/unwatch': {
      $post:
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: SubmittedBulkOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/bulk/issues/watch': {
      $post:
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: SubmittedBulkOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IssueBulkWatchOrUnwatchPayload }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/bulk/queue/:taskId': {
      $get:
        | {
            input: { param: { taskId: string } }
            output: BulkOperationProgress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: string } }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskId: string } }
            output: BulkOperationErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/changelog/bulkfetch': {
      $post:
        | {
            input: { json: BulkChangelogRequestBean }
            output: BulkChangelogResponseBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkChangelogRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/rest/api/3/classification-levels': {
      $get:
        | {
            input: {
              query: {
                status?: ('PUBLISHED' | 'ARCHIVED' | 'DRAFT')[] | undefined
                orderBy?: 'rank' | '-rank' | '+rank' | undefined
              }
            }
            output: DataClassificationLevelsBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: ('PUBLISHED' | 'ARCHIVED' | 'DRAFT')[] | undefined
                orderBy?: 'rank' | '-rank' | '+rank' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/comment/list': {
      $post:
        | {
            input: { query: { expand?: string | undefined } } & {
              json: IssueCommentListRequestBean
            }
            output: PageBeanComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: IssueCommentListRequestBean
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/rest/api/3/comment/:commentId/properties': {
      $get:
        | {
            input: { param: { commentId: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { commentId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { commentId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { commentId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { commentId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/comment/:commentId/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { commentId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { commentId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { commentId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { commentId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { commentId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { commentId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/component': {
      $get:
        | {
            input: {
              query: {
                projectIdsOrKeys?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'name'
                  | '-name'
                  | '+name'
                  | undefined
                query?: string | undefined
              }
            }
            output: PageBean2ComponentJsonBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectIdsOrKeys?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'name'
                  | '-name'
                  | '+name'
                  | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                projectIdsOrKeys?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'name'
                  | '-name'
                  | '+name'
                  | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: ProjectComponent }
            output: ProjectComponent
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ProjectComponent }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ProjectComponent }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ProjectComponent }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ProjectComponent }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { json: ProjectComponent }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/component/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { moveIssuesTo?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { moveIssuesTo?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { moveIssuesTo?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { moveIssuesTo?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ProjectComponent
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: ProjectComponent }
            output: ProjectComponent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ProjectComponent }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ProjectComponent }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ProjectComponent }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ProjectComponent }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/component/:id/relatedIssueCounts': {
      $get:
        | {
            input: { param: { id: string } }
            output: ComponentIssuesCount
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/config/fieldschemes': {
      $get:
        | {
            input: {
              query: {
                projectId?: bigint[] | undefined
                query?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBean2GetFieldAssociationSchemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId?: bigint[] | undefined
                query?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectId?: bigint[] | undefined
                query?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectId?: bigint[] | undefined
                query?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectId?: bigint[] | undefined
                query?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateFieldAssociationSchemeRequest }
            output: CreateFieldAssociationSchemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateFieldAssociationSchemeRequest }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/fields': {
      $delete:
        | {
            input: { json: { [x: string]: RemoveFieldAssociationsRequestItem } }
            output: MinimalFieldSchemeToFieldsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: RemoveFieldAssociationsRequestItem } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: { [x: string]: RemoveFieldAssociationsRequestItem } }
            output: MinimalFieldSchemeToFieldsResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { [x: string]: RemoveFieldAssociationsRequestItem } }
            output: MinimalFieldSchemeToFieldsResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: RemoveFieldAssociationsRequestItem } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: RemoveFieldAssociationsRequestItem } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { json: { [x: string]: UpdateFieldAssociationsRequestItem[] } }
            output: FieldSchemeToFieldsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: UpdateFieldAssociationsRequestItem[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: { [x: string]: UpdateFieldAssociationsRequestItem[] } }
            output: FieldSchemeToFieldsResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { [x: string]: UpdateFieldAssociationsRequestItem[] } }
            output: FieldSchemeToFieldsResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: UpdateFieldAssociationsRequestItem[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: UpdateFieldAssociationsRequestItem[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/fields/parameters': {
      $delete:
        | {
            input: { json: { [x: string]: ParameterRemovalDetails[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { [x: string]: ParameterRemovalDetails[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: { [x: string]: ParameterRemovalDetails[] } }
            output: RemoveFieldParametersResult
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { [x: string]: ParameterRemovalDetails[] } }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: ParameterRemovalDetails[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: ParameterRemovalDetails[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { json: { [x: string]: UpdateFieldSchemeParametersRequest[] } }
            output: UpdateFieldSchemeParametersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: UpdateFieldSchemeParametersRequest[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: { [x: string]: UpdateFieldSchemeParametersRequest[] } }
            output: UpdateFieldSchemeParametersResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { [x: string]: UpdateFieldSchemeParametersRequest[] } }
            output: UpdateFieldSchemeParametersResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: UpdateFieldSchemeParametersRequest[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: UpdateFieldSchemeParametersRequest[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/projects': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: PageBean2GetProjectsWithFieldSchemesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { json: { [x: string]: FieldSchemeToProjectsRequest } }
            output: FieldSchemeToProjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: FieldSchemeToProjectsRequest } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: { [x: string]: FieldSchemeToProjectsRequest } }
            output: FieldSchemeToProjectsResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { [x: string]: FieldSchemeToProjectsRequest } }
            output: FieldSchemeToProjectsResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: FieldSchemeToProjectsRequest } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: FieldSchemeToProjectsRequest } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: DeleteFieldAssociationSchemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: bigint } }
            output: GetFieldAssociationSchemeByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldAssociationSchemeRequest }
            output: UpdateFieldAssociationSchemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldAssociationSchemeRequest }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/:id/clone': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: CreateFieldAssociationSchemeRequest }
            output: CreateFieldAssociationSchemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CreateFieldAssociationSchemeRequest }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: CreateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: CreateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: CreateFieldAssociationSchemeRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/:id/fields': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldId?: string[] | undefined
              }
            }
            output: PageBean2FieldAssociationSchemeFieldSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldId?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldId?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldId?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldId?: string[] | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/:id/fields/:fieldId/parameters': {
      $get:
        | {
            input: { param: { id: bigint; fieldId: string } }
            output: GetFieldAssociationParametersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; fieldId: string } }
            output: ErrorCollections
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; fieldId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint; fieldId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/config/fieldschemes/:id/projects': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: PageBean2FieldAssociationSchemeProjectSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/configuration': {
      $get:
        | { input: {}; output: Configuration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/configuration/timetracking': {
      $get:
        | { input: {}; output: TimeTrackingProvider; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { json: TimeTrackingProvider }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { json: TimeTrackingProvider }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: TimeTrackingProvider }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: TimeTrackingProvider }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/configuration/timetracking/list': {
      $get:
        | { input: {}; output: TimeTrackingProvider[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/configuration/timetracking/options': {
      $get:
        | { input: {}; output: TimeTrackingConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { json: TimeTrackingConfiguration }
            output: TimeTrackingConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TimeTrackingConfiguration }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TimeTrackingConfiguration }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TimeTrackingConfiguration }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/customFieldOption/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: CustomFieldOption
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/dashboard': {
      $get:
        | {
            input: {
              query: {
                filter?: 'my' | 'favourite' | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: PageOfDashboards
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: 'my' | 'favourite' | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: 'my' | 'favourite' | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { extendAdminPermissions?: boolean | undefined } } & {
              json: DashboardDetails
            }
            output: Dashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { extendAdminPermissions?: boolean | undefined } } & {
              json: DashboardDetails
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { extendAdminPermissions?: boolean | undefined } } & {
              json: DashboardDetails
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/dashboard/bulk/edit': {
      $put:
        | {
            input: { json: BulkEditShareableEntityRequest }
            output: BulkEditShareableEntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkEditShareableEntityRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkEditShareableEntityRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/dashboard/gadgets': {
      $get:
        | {
            input: {}
            output: AvailableDashboardGadgetsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/rest/api/3/dashboard/search': {
      $get:
        | {
            input: {
              query: {
                dashboardName?: string | undefined
                accountId?: string | undefined
                owner?: string | undefined
                groupname?: string | undefined
                groupId?: string | undefined
                projectId?: bigint | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'favorite_count'
                  | '-favorite_count'
                  | '+favorite_count'
                  | 'id'
                  | '-id'
                  | '+id'
                  | 'is_favorite'
                  | '-is_favorite'
                  | '+is_favorite'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                status?: 'active' | 'archived' | 'deleted' | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dashboardName?: string | undefined
                accountId?: string | undefined
                owner?: string | undefined
                groupname?: string | undefined
                groupId?: string | undefined
                projectId?: bigint | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'favorite_count'
                  | '-favorite_count'
                  | '+favorite_count'
                  | 'id'
                  | '-id'
                  | '+id'
                  | 'is_favorite'
                  | '-is_favorite'
                  | '+is_favorite'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                status?: 'active' | 'archived' | 'deleted' | undefined
                expand?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                dashboardName?: string | undefined
                accountId?: string | undefined
                owner?: string | undefined
                groupname?: string | undefined
                groupId?: string | undefined
                projectId?: bigint | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'favorite_count'
                  | '-favorite_count'
                  | '+favorite_count'
                  | 'id'
                  | '-id'
                  | '+id'
                  | 'is_favorite'
                  | '-is_favorite'
                  | '+is_favorite'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                status?: 'active' | 'archived' | 'deleted' | undefined
                expand?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/dashboard/:dashboardId/gadget': {
      $get:
        | {
            input: { param: { dashboardId: bigint } } & {
              query: {
                moduleKey?: string[] | undefined
                uri?: string[] | undefined
                gadgetId?: bigint[] | undefined
              }
            }
            output: DashboardGadgetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: bigint } } & {
              query: {
                moduleKey?: string[] | undefined
                uri?: string[] | undefined
                gadgetId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dashboardId: bigint } } & {
              query: {
                moduleKey?: string[] | undefined
                uri?: string[] | undefined
                gadgetId?: bigint[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { dashboardId: bigint } } & { json: DashboardGadgetSettings }
            output: DashboardGadget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: bigint } } & { json: DashboardGadgetSettings }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: bigint } } & { json: DashboardGadgetSettings }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dashboardId: bigint } } & { json: DashboardGadgetSettings }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/dashboard/:dashboardId/gadget/:gadgetId': {
      $delete:
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } } & {
              json: DashboardGadgetUpdateRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } } & {
              json: DashboardGadgetUpdateRequest
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } } & {
              json: DashboardGadgetUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dashboardId: bigint; gadgetId: bigint } } & {
              json: DashboardGadgetUpdateRequest
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/dashboard/:dashboardId/items/:itemId/properties': {
      $get:
        | {
            input: { param: { dashboardId: string; itemId: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; itemId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; itemId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string; itemId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/dashboard/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
      $get:
        | { input: { param: { id: string } }; output: Dashboard; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: Dashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/dashboard/:id/copy': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: Dashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { extendAdminPermissions?: boolean | undefined }
            } & { json: DashboardDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/data-policy': {
      $get:
        | { input: {}; output: WorkspaceDataPolicy; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/rest/api/3/data-policy/project': {
      $get:
        | {
            input: { query: { ids?: string | undefined } }
            output: ProjectDataPolicies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/events': {
      $get:
        | { input: {}; output: IssueEvent[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/expression/analyse': {
      $post:
        | {
            input: { query: { check?: 'syntax' | 'type' | 'complexity' | undefined } } & {
              json: JiraExpressionForAnalysis
            }
            output: JiraExpressionsAnalysis
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { check?: 'syntax' | 'type' | 'complexity' | undefined } } & {
              json: JiraExpressionForAnalysis
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { check?: 'syntax' | 'type' | 'complexity' | undefined } } & {
              json: JiraExpressionForAnalysis
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { check?: 'syntax' | 'type' | 'complexity' | undefined } } & {
              json: JiraExpressionForAnalysis
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/expression/eval': {
      $post:
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvalRequestBean
            }
            output: JiraExpressionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvalRequestBean
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvalRequestBean
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvalRequestBean
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/expression/evaluate': {
      $post:
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvaluateRequestBean
            }
            output: JExpEvaluateJiraExpressionResultBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvaluateRequestBean
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvaluateRequestBean
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } } & {
              json: JiraExpressionEvaluateRequestBean
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/field': {
      $get:
        | { input: {}; output: FieldDetails[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: CustomFieldDefinitionJsonBean }
            output: FieldDetails
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CustomFieldDefinitionJsonBean }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/rest/api/3/field/association': {
      $delete:
        | {
            input: { json: FieldAssociationsRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: FieldAssociationsRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: FieldAssociationsRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: FieldAssociationsRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { json: FieldAssociationsRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: FieldAssociationsRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: FieldAssociationsRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: FieldAssociationsRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                type?: ('custom' | 'system')[] | undefined
                id?: string[] | undefined
                query?: string | undefined
                orderBy?:
                  | 'contextsCount'
                  | '-contextsCount'
                  | '+contextsCount'
                  | 'lastUsed'
                  | '-lastUsed'
                  | '+lastUsed'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'screensCount'
                  | '-screensCount'
                  | '+screensCount'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                expand?: string | undefined
                projectIds?: bigint[] | undefined
              }
            }
            output: PageBeanField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                type?: ('custom' | 'system')[] | undefined
                id?: string[] | undefined
                query?: string | undefined
                orderBy?:
                  | 'contextsCount'
                  | '-contextsCount'
                  | '+contextsCount'
                  | 'lastUsed'
                  | '-lastUsed'
                  | '+lastUsed'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'screensCount'
                  | '-screensCount'
                  | '+screensCount'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                expand?: string | undefined
                projectIds?: bigint[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                type?: ('custom' | 'system')[] | undefined
                id?: string[] | undefined
                query?: string | undefined
                orderBy?:
                  | 'contextsCount'
                  | '-contextsCount'
                  | '+contextsCount'
                  | 'lastUsed'
                  | '-lastUsed'
                  | '+lastUsed'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'screensCount'
                  | '-screensCount'
                  | '+screensCount'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                expand?: string | undefined
                projectIds?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                type?: ('custom' | 'system')[] | undefined
                id?: string[] | undefined
                query?: string | undefined
                orderBy?:
                  | 'contextsCount'
                  | '-contextsCount'
                  | '+contextsCount'
                  | 'lastUsed'
                  | '-lastUsed'
                  | '+lastUsed'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'screensCount'
                  | '-screensCount'
                  | '+screensCount'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                expand?: string | undefined
                projectIds?: bigint[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/field/search/trashed': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: string[] | undefined
                query?: string | undefined
                expand?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'trashDate'
                  | '-trashDate'
                  | '+trashDate'
                  | 'plannedDeletionDate'
                  | '-plannedDeletionDate'
                  | '+plannedDeletionDate'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                orderBy?: string | undefined
              }
            }
            output: PageBeanField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: string[] | undefined
                query?: string | undefined
                expand?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'trashDate'
                  | '-trashDate'
                  | '+trashDate'
                  | 'plannedDeletionDate'
                  | '-plannedDeletionDate'
                  | '+plannedDeletionDate'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                orderBy?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: string[] | undefined
                query?: string | undefined
                expand?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'trashDate'
                  | '-trashDate'
                  | '+trashDate'
                  | 'plannedDeletionDate'
                  | '-plannedDeletionDate'
                  | '+plannedDeletionDate'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                orderBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: string[] | undefined
                query?: string | undefined
                expand?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'trashDate'
                  | '-trashDate'
                  | '+trashDate'
                  | 'plannedDeletionDate'
                  | '-plannedDeletionDate'
                  | '+plannedDeletionDate'
                  | 'projectsCount'
                  | '-projectsCount'
                  | '+projectsCount'
                  | undefined
                orderBy?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/field/:fieldId': {
      $put:
        | {
            input: { param: { fieldId: string } } & { json: UpdateCustomFieldDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string } } & { json: UpdateCustomFieldDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & { json: UpdateCustomFieldDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & { json: UpdateCustomFieldDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & { json: UpdateCustomFieldDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/association/project': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: PageBeanFieldProjectAssociation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: {
                isAnyIssueType?: boolean | undefined
                isGlobalContext?: boolean | undefined
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanCustomFieldContext
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                isAnyIssueType?: boolean | undefined
                isGlobalContext?: boolean | undefined
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                isAnyIssueType?: boolean | undefined
                isGlobalContext?: boolean | undefined
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                isAnyIssueType?: boolean | undefined
                isGlobalContext?: boolean | undefined
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { fieldId: string } } & { json: CreateCustomFieldContext }
            output: CreateCustomFieldContext
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { fieldId: string } } & { json: CreateCustomFieldContext }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & { json: CreateCustomFieldContext }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & { json: CreateCustomFieldContext }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fieldId: string } } & { json: CreateCustomFieldContext }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/defaultValue': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanCustomFieldContextDefaultValue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValueUpdate }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValueUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValueUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValueUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValueUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/defaultValues': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                issueTypeId?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanContextDefaultValues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                issueTypeId?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                issueTypeId?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                issueTypeId?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValuesUpdate }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValuesUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValuesUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValuesUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & { json: CustomFieldContextDefaultValuesUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/issuetypemapping': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanIssueTypeToContextMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/mapping': {
      $post:
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            } & { json: ProjectIssueTypeMappings }
            output: PageBeanContextForProjectAndIssueType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            } & { json: ProjectIssueTypeMappings }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            } & { json: ProjectIssueTypeMappings }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            } & { json: ProjectIssueTypeMappings }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            } & { json: ProjectIssueTypeMappings }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/projectmapping': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanCustomFieldContextProjectMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                contextId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId': {
      $delete:
        | {
            input: { param: { fieldId: string; contextId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: CustomFieldContextUpdateDetails
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: CustomFieldContextUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: CustomFieldContextUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: CustomFieldContextUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: CustomFieldContextUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/issuetype': {
      $put:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: AddIssueTypesToContext
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: AddIssueTypesToContext
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: AddIssueTypesToContext
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: AddIssueTypesToContext
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: AddIssueTypesToContext
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: AddIssueTypesToContext
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/issuetype/remove': {
      $post:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: IssueTypeIds }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/option': {
      $get:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              query: {
                optionId?: bigint | undefined
                query?: string | undefined
                onlyOptions?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanCustomFieldContextOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              query: {
                optionId?: bigint | undefined
                query?: string | undefined
                onlyOptions?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              query: {
                optionId?: bigint | undefined
                query?: string | undefined
                onlyOptions?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              query: {
                optionId?: bigint | undefined
                query?: string | undefined
                onlyOptions?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              query: {
                optionId?: bigint | undefined
                query?: string | undefined
                onlyOptions?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionCreateRequest
            }
            output: CustomFieldCreatedContextOptionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionCreateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionCreateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionCreateRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionCreateRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionCreateRequest
            }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionUpdateRequest
            }
            output: CustomFieldUpdatedContextOptionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: BulkCustomFieldOptionUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/option/move': {
      $put:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: OrderOfCustomFieldOptions
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: OrderOfCustomFieldOptions
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: OrderOfCustomFieldOptions
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: OrderOfCustomFieldOptions
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & {
              json: OrderOfCustomFieldOptions
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/option/:optionId': {
      $delete:
        | {
            input: { param: { fieldId: string; contextId: bigint; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/option/:optionId/issue': {
      $delete:
        | {
            input: { param: { fieldId: string; optionId: bigint; contextId: bigint } } & {
              query: { replaceWith?: bigint | undefined; jql?: string | undefined }
            }
            output: TaskProgressBeanRemoveOptionFromIssuesResult
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { fieldId: string; optionId: bigint; contextId: bigint } } & {
              query: { replaceWith?: bigint | undefined; jql?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; optionId: bigint; contextId: bigint } } & {
              query: { replaceWith?: bigint | undefined; jql?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; optionId: bigint; contextId: bigint } } & {
              query: { replaceWith?: bigint | undefined; jql?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/project': {
      $put:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/context/:contextId/project/remove': {
      $post:
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldId: string; contextId: bigint } } & { json: ProjectIds }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/contexts': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: PageBeanContext
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/field/:fieldId/screens': {
      $get:
        | {
            input: { param: { fieldId: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanScreenWithTab
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldId: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/field/:fieldKey/option': {
      $get:
        | {
            input: { param: { fieldKey: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: PageBeanIssueFieldOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldKey: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldKey: string } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { fieldKey: string } } & { json: IssueFieldOptionCreateBean }
            output: IssueFieldOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldKey: string } } & { json: IssueFieldOptionCreateBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldKey: string } } & { json: IssueFieldOptionCreateBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldKey: string } } & { json: IssueFieldOptionCreateBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldKey/option/suggestions/edit': {
      $get:
        | {
            input: { param: { fieldKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint | undefined
              }
            }
            output: PageBeanIssueFieldOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldKey/option/suggestions/search': {
      $get:
        | {
            input: { param: { fieldKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint | undefined
              }
            }
            output: PageBeanIssueFieldOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fieldKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldKey/option/:optionId': {
      $delete:
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: IssueFieldOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & { json: IssueFieldOption }
            output: IssueFieldOption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & { json: IssueFieldOption }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & { json: IssueFieldOption }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & { json: IssueFieldOption }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:fieldKey/option/:optionId/issue': {
      $delete:
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & {
              query: {
                replaceWith?: bigint | undefined
                jql?: string | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: TaskProgressBeanRemoveOptionFromIssuesResult
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & {
              query: {
                replaceWith?: bigint | undefined
                jql?: string | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & {
              query: {
                replaceWith?: bigint | undefined
                jql?: string | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { fieldKey: string; optionId: bigint } } & {
              query: {
                replaceWith?: bigint | undefined
                jql?: string | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/field/:id/restore': {
      $post:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/field/:id/trash': {
      $post:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfiguration': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                isDefault?: boolean | undefined
                query?: string | undefined
              }
            }
            output: PageBeanFieldConfigurationDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                isDefault?: boolean | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                isDefault?: boolean | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: FieldConfigurationDetails }
            output: FieldConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/fieldconfiguration/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfiguration/:id/fields': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: PageBeanFieldConfigurationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: { startAt?: bigint | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationItemsDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationItemsDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationItemsDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationItemsDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: FieldConfigurationItemsDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfigurationscheme': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
              }
            }
            output: PageBeanFieldConfigurationScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: UpdateFieldConfigurationSchemeDetails }
            output: FieldConfigurationScheme
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/fieldconfigurationscheme/mapping': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldConfigurationSchemeId?: bigint[] | undefined
              }
            }
            output: PageBeanFieldConfigurationIssueTypeItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldConfigurationSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldConfigurationSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldConfigurationSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                fieldConfigurationSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfigurationscheme/project': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: PageBeanFieldConfigurationSchemeProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { json: FieldConfigurationSchemeProjectAssociation }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: FieldConfigurationSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: FieldConfigurationSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: FieldConfigurationSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: FieldConfigurationSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfigurationscheme/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldConfigurationSchemeDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateFieldConfigurationSchemeDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfigurationscheme/:id/mapping': {
      $put:
        | {
            input: { param: { id: bigint } } & {
              json: AssociateFieldConfigurationsWithIssueTypesRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: bigint } } & {
              json: AssociateFieldConfigurationsWithIssueTypesRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              json: AssociateFieldConfigurationsWithIssueTypesRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              json: AssociateFieldConfigurationsWithIssueTypesRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              json: AssociateFieldConfigurationsWithIssueTypesRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/fieldconfigurationscheme/:id/mapping/delete': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: IssueTypeIdsToRemove }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { json: IssueTypeIdsToRemove }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: IssueTypeIdsToRemove }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: IssueTypeIdsToRemove }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: IssueTypeIdsToRemove }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/filter': {
      $post:
        | {
            input: {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            } & { json: Filter }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            } & { json: Filter }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/filter/defaultShareScope': {
      $get:
        | { input: {}; output: DefaultShareScope; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $put:
        | {
            input: { json: DefaultShareScope }
            output: DefaultShareScope
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DefaultShareScope }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DefaultShareScope }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/filter/favourite': {
      $get:
        | {
            input: { query: { expand?: string | undefined } }
            output: Filter[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/filter/my': {
      $get:
        | {
            input: {
              query: { expand?: string | undefined; includeFavourites?: boolean | undefined }
            }
            output: Filter[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { expand?: string | undefined; includeFavourites?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/filter/search': {
      $get:
        | {
            input: {
              query: {
                filterName?: string | undefined
                accountId?: string | undefined
                owner?: string | undefined
                groupname?: string | undefined
                groupId?: string | undefined
                projectId?: bigint | undefined
                id?: bigint[] | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'favourite_count'
                  | '-favourite_count'
                  | '+favourite_count'
                  | 'id'
                  | '-id'
                  | '+id'
                  | 'is_favourite'
                  | '-is_favourite'
                  | '+is_favourite'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'is_shared'
                  | '-is_shared'
                  | '+is_shared'
                  | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
                overrideSharePermissions?: boolean | undefined
                isSubstringMatch?: boolean | undefined
              }
            }
            output: PageBeanFilterDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filterName?: string | undefined
                accountId?: string | undefined
                owner?: string | undefined
                groupname?: string | undefined
                groupId?: string | undefined
                projectId?: bigint | undefined
                id?: bigint[] | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'favourite_count'
                  | '-favourite_count'
                  | '+favourite_count'
                  | 'id'
                  | '-id'
                  | '+id'
                  | 'is_favourite'
                  | '-is_favourite'
                  | '+is_favourite'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'is_shared'
                  | '-is_shared'
                  | '+is_shared'
                  | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
                overrideSharePermissions?: boolean | undefined
                isSubstringMatch?: boolean | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filterName?: string | undefined
                accountId?: string | undefined
                owner?: string | undefined
                groupname?: string | undefined
                groupId?: string | undefined
                projectId?: bigint | undefined
                id?: bigint[] | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'favourite_count'
                  | '-favourite_count'
                  | '+favourite_count'
                  | 'id'
                  | '-id'
                  | '+id'
                  | 'is_favourite'
                  | '-is_favourite'
                  | '+is_favourite'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'is_shared'
                  | '-is_shared'
                  | '+is_shared'
                  | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
                overrideSharePermissions?: boolean | undefined
                isSubstringMatch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/filter/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { id: bigint } } & {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            } & { json: Filter }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: { expand?: string | undefined; overrideSharePermissions?: boolean | undefined }
            } & { json: Filter }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/filter/:id/columns': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ColumnItem[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ColumnRequestBody } & {
              form: ColumnRequestBody
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ColumnRequestBody } & {
              form: ColumnRequestBody
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ColumnRequestBody } & {
              form: ColumnRequestBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/filter/:id/favourite': {
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/rest/api/3/filter/:id/owner': {
      $put:
        | {
            input: { param: { id: bigint } } & { json: ChangeFilterOwner }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { json: ChangeFilterOwner }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ChangeFilterOwner }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ChangeFilterOwner }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/filter/:id/permission': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: SharePermission[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: SharePermissionInputBean }
            output: SharePermission[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: bigint } } & { json: SharePermissionInputBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: SharePermissionInputBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: SharePermissionInputBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/filter/:id/permission/:permissionId': {
      $delete:
        | {
            input: { param: { id: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint; permissionId: bigint } }
            output: SharePermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/forge/panel/action/bulk/async': {
      $post:
        | {
            input: { json: ForgePanelProjectPinRequest }
            output: ForgePanelProjectPinAsyncResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ForgePanelProjectPinRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ForgePanelProjectPinRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ForgePanelProjectPinRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/api/3/forge/panel/action/bulk/status': {
      $post:
        | {
            input: { json: ForgePanelProjectPinStatusRequest }
            output: ForgePanelProjectPinStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ForgePanelProjectPinStatusRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ForgePanelProjectPinStatusRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ForgePanelProjectPinStatusRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/api/3/group': {
      $delete:
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                swapGroup?: string | undefined
                swapGroupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                swapGroup?: string | undefined
                swapGroupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                swapGroup?: string | undefined
                swapGroupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                swapGroup?: string | undefined
                swapGroupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                swapGroup?: string | undefined
                swapGroupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                expand?: string | undefined
              }
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | { input: { json: AddGroupBean }; output: Group; outputFormat: 'json'; status: 201 }
        | { input: { json: AddGroupBean }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: AddGroupBean }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: AddGroupBean }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/group/bulk': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                groupId?: string[] | undefined
                groupName?: string[] | undefined
                accessType?: string | undefined
                applicationKey?: string | undefined
              }
            }
            output: PageBeanGroupDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                groupId?: string[] | undefined
                groupName?: string[] | undefined
                accessType?: string | undefined
                applicationKey?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                groupId?: string[] | undefined
                groupName?: string[] | undefined
                accessType?: string | undefined
                applicationKey?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                groupId?: string[] | undefined
                groupName?: string[] | undefined
                accessType?: string | undefined
                applicationKey?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                groupId?: string[] | undefined
                groupName?: string[] | undefined
                accessType?: string | undefined
                applicationKey?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/rest/api/3/group/member': {
      $get:
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                includeInactiveUsers?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanUserDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                includeInactiveUsers?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                includeInactiveUsers?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                includeInactiveUsers?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                includeInactiveUsers?: boolean | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/group/user': {
      $delete:
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                username?: string | undefined
                accountId: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                username?: string | undefined
                accountId: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                username?: string | undefined
                accountId: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                username?: string | undefined
                accountId: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                username?: string | undefined
                accountId: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                groupname?: string | undefined
                groupId?: string | undefined
                username?: string | undefined
                accountId: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { query: { groupname?: string | undefined; groupId?: string | undefined } } & {
              json: UpdateUserToGroupBean
            }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { groupname?: string | undefined; groupId?: string | undefined } } & {
              json: UpdateUserToGroupBean
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { groupname?: string | undefined; groupId?: string | undefined } } & {
              json: UpdateUserToGroupBean
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { groupname?: string | undefined; groupId?: string | undefined } } & {
              json: UpdateUserToGroupBean
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { groupname?: string | undefined; groupId?: string | undefined } } & {
              json: UpdateUserToGroupBean
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { groupname?: string | undefined; groupId?: string | undefined } } & {
              json: UpdateUserToGroupBean
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/groups/picker': {
      $get: {
        input: {
          query: {
            accountId?: string | undefined
            query?: string | undefined
            exclude?: string[] | undefined
            excludeId?: string[] | undefined
            maxResults?: number | undefined
            caseInsensitive?: boolean | undefined
            userName?: string | undefined
          }
        }
        output: FoundGroups
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/api/3/groupuserpicker': {
      $get:
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                fieldId?: string | undefined
                projectId?: string[] | undefined
                issueTypeId?: string[] | undefined
                avatarSize?:
                  | 'xsmall'
                  | 'xsmall@2x'
                  | 'xsmall@3x'
                  | 'small'
                  | 'small@2x'
                  | 'small@3x'
                  | 'medium'
                  | 'medium@2x'
                  | 'medium@3x'
                  | 'large'
                  | 'large@2x'
                  | 'large@3x'
                  | 'xlarge'
                  | 'xlarge@2x'
                  | 'xlarge@3x'
                  | 'xxlarge'
                  | 'xxlarge@2x'
                  | 'xxlarge@3x'
                  | 'xxxlarge'
                  | 'xxxlarge@2x'
                  | 'xxxlarge@3x'
                  | undefined
                caseInsensitive?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                includeAiAgents?: boolean | undefined
              }
            }
            output: FoundUsersAndGroups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                fieldId?: string | undefined
                projectId?: string[] | undefined
                issueTypeId?: string[] | undefined
                avatarSize?:
                  | 'xsmall'
                  | 'xsmall@2x'
                  | 'xsmall@3x'
                  | 'small'
                  | 'small@2x'
                  | 'small@3x'
                  | 'medium'
                  | 'medium@2x'
                  | 'medium@3x'
                  | 'large'
                  | 'large@2x'
                  | 'large@3x'
                  | 'xlarge'
                  | 'xlarge@2x'
                  | 'xlarge@3x'
                  | 'xxlarge'
                  | 'xxlarge@2x'
                  | 'xxlarge@3x'
                  | 'xxxlarge'
                  | 'xxxlarge@2x'
                  | 'xxxlarge@3x'
                  | undefined
                caseInsensitive?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                includeAiAgents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                fieldId?: string | undefined
                projectId?: string[] | undefined
                issueTypeId?: string[] | undefined
                avatarSize?:
                  | 'xsmall'
                  | 'xsmall@2x'
                  | 'xsmall@3x'
                  | 'small'
                  | 'small@2x'
                  | 'small@3x'
                  | 'medium'
                  | 'medium@2x'
                  | 'medium@3x'
                  | 'large'
                  | 'large@2x'
                  | 'large@3x'
                  | 'xlarge'
                  | 'xlarge@2x'
                  | 'xlarge@3x'
                  | 'xxlarge'
                  | 'xxlarge@2x'
                  | 'xxlarge@3x'
                  | 'xxxlarge'
                  | 'xxxlarge@2x'
                  | 'xxxlarge@3x'
                  | undefined
                caseInsensitive?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                includeAiAgents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                fieldId?: string | undefined
                projectId?: string[] | undefined
                issueTypeId?: string[] | undefined
                avatarSize?:
                  | 'xsmall'
                  | 'xsmall@2x'
                  | 'xsmall@3x'
                  | 'small'
                  | 'small@2x'
                  | 'small@3x'
                  | 'medium'
                  | 'medium@2x'
                  | 'medium@3x'
                  | 'large'
                  | 'large@2x'
                  | 'large@3x'
                  | 'xlarge'
                  | 'xlarge@2x'
                  | 'xlarge@3x'
                  | 'xxlarge'
                  | 'xxlarge@2x'
                  | 'xxlarge@3x'
                  | 'xxxlarge'
                  | 'xxxlarge@2x'
                  | 'xxxlarge@3x'
                  | undefined
                caseInsensitive?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                includeAiAgents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                fieldId?: string | undefined
                projectId?: string[] | undefined
                issueTypeId?: string[] | undefined
                avatarSize?:
                  | 'xsmall'
                  | 'xsmall@2x'
                  | 'xsmall@3x'
                  | 'small'
                  | 'small@2x'
                  | 'small@3x'
                  | 'medium'
                  | 'medium@2x'
                  | 'medium@3x'
                  | 'large'
                  | 'large@2x'
                  | 'large@3x'
                  | 'xlarge'
                  | 'xlarge@2x'
                  | 'xlarge@3x'
                  | 'xxlarge'
                  | 'xxlarge@2x'
                  | 'xxlarge@3x'
                  | 'xxxlarge'
                  | 'xxxlarge@2x'
                  | 'xxxlarge@3x'
                  | undefined
                caseInsensitive?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                includeAiAgents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/instance/license': {
      $get:
        | { input: {}; output: License; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/invalid-jqls-access-log': {
      $get:
        | {
            input: {
              query: {
                userAccountId?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: AuditPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userAccountId?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                userAccountId?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                userAccountId?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                userAccountId?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue': {
      $post:
        | {
            input: {
              query: {
                updateHistory?: boolean | undefined
                preferFieldAssociatedErrors?: boolean | undefined
              }
            } & { json: IssueUpdateDetails }
            output: CreatedIssue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                updateHistory?: boolean | undefined
                preferFieldAssociatedErrors?: boolean | undefined
              }
            } & { json: IssueUpdateDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                updateHistory?: boolean | undefined
                preferFieldAssociatedErrors?: boolean | undefined
              }
            } & { json: IssueUpdateDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                updateHistory?: boolean | undefined
                preferFieldAssociatedErrors?: boolean | undefined
              }
            } & { json: IssueUpdateDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                updateHistory?: boolean | undefined
                preferFieldAssociatedErrors?: boolean | undefined
              }
            } & { json: IssueUpdateDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/issue/archive': {
      $post:
        | {
            input: { json: ArchiveIssueAsyncRequest }
            output: string
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ArchiveIssueAsyncRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ArchiveIssueAsyncRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ArchiveIssueAsyncRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: ArchiveIssueAsyncRequest }
            output: {}
            outputFormat: string
            status: 412
          }
      $put:
        | {
            input: { json: IssueArchivalSyncRequest }
            output: IssueArchivalSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/rest/api/3/issue/bulk': {
      $post:
        | {
            input: { json: IssuesUpdateBean }
            output: CreatedIssues
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssuesUpdateBean }
            output: CreatedIssues
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: IssuesUpdateBean }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/issue/bulkfetch': {
      $post:
        | {
            input: { json: BulkFetchIssueRequestBean }
            output: BulkIssueResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkFetchIssueRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BulkFetchIssueRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/issue/createmeta': {
      $get:
        | {
            input: {
              query: {
                projectIds?: string[] | undefined
                projectKeys?: string[] | undefined
                issuetypeIds?: string[] | undefined
                issuetypeNames?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: IssueCreateMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectIds?: string[] | undefined
                projectKeys?: string[] | undefined
                issuetypeIds?: string[] | undefined
                issuetypeNames?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/issue/createmeta/:projectIdOrKey/issuetypes': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: PageOfCreateMetaIssueTypes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/issue/createmeta/:projectIdOrKey/issuetypes/:issueTypeId': {
      $get:
        | {
            input: { param: { projectIdOrKey: string; issueTypeId: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: PageOfCreateMetaIssueTypeWithField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; issueTypeId: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; issueTypeId: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/issue/limit/adf/report': {
      $get:
        | {
            input: {
              query: { isReturningKeys?: boolean | undefined; fieldType?: string[] | undefined }
            }
            output: IssueLimitReportResponseBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { isReturningKeys?: boolean | undefined; fieldType?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { isReturningKeys?: boolean | undefined; fieldType?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { isReturningKeys?: boolean | undefined; fieldType?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/issue/limit/report': {
      $get:
        | {
            input: { query: { isReturningKeys?: boolean | undefined } }
            output: IssueLimitReportResponseBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { isReturningKeys?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { isReturningKeys?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/issue/picker': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                currentJQL?: string | undefined
                currentIssueKey?: string | undefined
                currentProjectId?: string | undefined
                showSubTasks?: boolean | undefined
                showSubTaskParent?: boolean | undefined
              }
            }
            output: IssuePickerSuggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                currentJQL?: string | undefined
                currentIssueKey?: string | undefined
                currentProjectId?: string | undefined
                showSubTasks?: boolean | undefined
                showSubTaskParent?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/issue/properties': {
      $post:
        | { input: { json: IssueEntityProperties }; output: {}; outputFormat: string; status: 303 }
        | {
            input: { json: IssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/issue/properties/multi': {
      $post:
        | {
            input: { json: MultiIssueEntityProperties }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { json: MultiIssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MultiIssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MultiIssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MultiIssueEntityProperties }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/issue/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { propertyKey: string } } & { json: IssueFilterForBulkPropertyDelete }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { propertyKey: string } } & { json: IssueFilterForBulkPropertyDelete }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { propertyKey: string } } & { json: IssueFilterForBulkPropertyDelete }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { propertyKey: string } } & { json: BulkIssuePropertyUpdateRequest }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { propertyKey: string } } & { json: BulkIssuePropertyUpdateRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { propertyKey: string } } & { json: BulkIssuePropertyUpdateRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/issue/unarchive': {
      $put:
        | {
            input: { json: IssueArchivalSyncRequest }
            output: IssueArchivalSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: IssueArchivalSyncRequest }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/rest/api/3/issue/watching': {
      $post:
        | {
            input: { json: IssueList }
            output: BulkIssueIsWatching
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IssueList }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { deleteSubtasks?: 'true' | 'false' | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { deleteSubtasks?: 'true' | 'false' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { deleteSubtasks?: 'true' | 'false' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { deleteSubtasks?: 'true' | 'false' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { deleteSubtasks?: 'true' | 'false' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                fields?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                updateHistory?: boolean | undefined
                failFast?: boolean | undefined
              }
            }
            output: IssueBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                fields?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                updateHistory?: boolean | undefined
                failFast?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                fields?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                updateHistory?: boolean | undefined
                failFast?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                returnIssue?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/assignee': {
      $put:
        | {
            input: { param: { issueIdOrKey: string } } & { json: User }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: User }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: User }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: User }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/attachments': {
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { form: MultipartFile[] }
            output: Attachment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & { form: MultipartFile[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { form: MultipartFile[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { form: MultipartFile[] }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/changelog': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: PageBeanChangelog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { startAt?: number | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/changelog/list': {
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: IssueChangelogIds }
            output: PageOfChangelogs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: IssueChangelogIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: IssueChangelogIds }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/comment': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: 'created' | '-created' | '+created' | undefined
                expand?: string | undefined
              }
            }
            output: PageOfComments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: 'created' | '-created' | '+created' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: 'created' | '-created' | '+created' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: 'created' | '-created' | '+created' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: Comment }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/comment/:id': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 405
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: { expand?: string | undefined }
            }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: Comment }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
                expand?: string | undefined
              }
            } & { json: Comment }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/editmeta': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: IssueUpdateMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                overrideScreenSecurity?: boolean | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/notify': {
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: Notification }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: Notification }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: Notification }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: Notification }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/properties': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/remotelink': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } } & { query: { globalId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { globalId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { globalId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { globalId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { globalId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { globalId?: string | undefined }
            }
            output: RemoteIssueLink[] | RemoteIssueLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { globalId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { globalId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { globalId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { globalId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { globalId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 413
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: RemoteIssueLinkRequest }
            output: RemoteIssueLinkIdentifies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RemoteIssueLinkRequest }
            output: RemoteIssueLinkIdentifies
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RemoteIssueLinkRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RemoteIssueLinkRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RemoteIssueLinkRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RemoteIssueLinkRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/remotelink/:linkId': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: RemoteIssueLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string; linkId: string } } & {
              json: RemoteIssueLinkRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } } & {
              json: RemoteIssueLinkRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } } & {
              json: RemoteIssueLinkRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } } & {
              json: RemoteIssueLinkRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; linkId: string } } & {
              json: RemoteIssueLinkRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/transitions': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                expand?: string | undefined
                transitionId?: string | undefined
                skipRemoteOnlyCondition?: boolean | undefined
                includeUnavailableTransitions?: boolean | undefined
                sortByOpsBarAndStatus?: boolean | undefined
              }
            }
            output: Transitions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                expand?: string | undefined
                transitionId?: string | undefined
                skipRemoteOnlyCondition?: boolean | undefined
                includeUnavailableTransitions?: boolean | undefined
                sortByOpsBarAndStatus?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                expand?: string | undefined
                transitionId?: string | undefined
                skipRemoteOnlyCondition?: boolean | undefined
                includeUnavailableTransitions?: boolean | undefined
                sortByOpsBarAndStatus?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { preferFieldAssociatedErrors?: boolean | undefined }
            } & { json: IssueUpdateDetails }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/votes': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } }
            output: Votes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/watchers': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { username?: string | undefined; accountId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { username?: string | undefined; accountId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { username?: string | undefined; accountId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { username?: string | undefined; accountId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { username?: string | undefined; accountId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } }
            output: Watchers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: string }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/worklog': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                startedAfter?: bigint | undefined
                startedBefore?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: PageOfWorklogs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                startedAfter?: bigint | undefined
                startedBefore?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                startedAfter?: bigint | undefined
                startedBefore?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                reduceBy?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: Worklog
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                reduceBy?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                reduceBy?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                reduceBy?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                reduceBy?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/worklog/move': {
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogsMoveRequestBean }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogsMoveRequestBean }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogsMoveRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogsMoveRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                adjustEstimate?: 'leave' | 'auto' | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: WorklogsMoveRequestBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/worklog/:id': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                increaseBy?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                increaseBy?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                increaseBy?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                increaseBy?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: { expand?: string | undefined }
            }
            output: Worklog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: Worklog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; id: string } } & {
              query: {
                notifyUsers?: boolean | undefined
                adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto' | undefined
                newEstimate?: string | undefined
                expand?: string | undefined
                overrideEditableFlag?: boolean | undefined
              }
            } & { json: Worklog }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; worklogId: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; worklogId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issueLink': {
      $post:
        | {
            input: { json: LinkIssueRequestJsonBean }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: LinkIssueRequestJsonBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: LinkIssueRequestJsonBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: LinkIssueRequestJsonBean }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: LinkIssueRequestJsonBean }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/rest/api/3/issueLink/:linkId': {
      $delete:
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { linkId: string } }
            output: IssueLink
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { linkId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/issueLinkType': {
      $get:
        | { input: {}; output: IssueLinkTypes; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: IssueLinkType }
            output: IssueLinkType
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: IssueLinkType }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: IssueLinkType }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: IssueLinkType }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/issueLinkType/:issueLinkTypeId': {
      $delete:
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueLinkTypeId: string } }
            output: IssueLinkType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueLinkTypeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueLinkTypeId: string } } & { json: IssueLinkType }
            output: IssueLinkType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueLinkTypeId: string } } & { json: IssueLinkType }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueLinkTypeId: string } } & { json: IssueLinkType }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueLinkTypeId: string } } & { json: IssueLinkType }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issues/archive/export': {
      $put:
        | {
            input: { json: ArchivedIssuesFilterRequest }
            output: ExportArchivedIssuesTaskProgressResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ArchivedIssuesFilterRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ArchivedIssuesFilterRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ArchivedIssuesFilterRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: ArchivedIssuesFilterRequest }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes': {
      $get:
        | { input: {}; output: SecuritySchemes; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: CreateIssueSecuritySchemeDetails }
            output: SecuritySchemeId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIssueSecuritySchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIssueSecuritySchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateIssueSecuritySchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateIssueSecuritySchemeDetails }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/level': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                onlyDefault?: boolean | undefined
              }
            }
            output: PageBeanSecurityLevel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                onlyDefault?: boolean | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                onlyDefault?: boolean | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                onlyDefault?: boolean | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/level/default': {
      $put:
        | {
            input: { json: SetDefaultLevelsRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: SetDefaultLevelsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetDefaultLevelsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SetDefaultLevelsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SetDefaultLevelsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/level/member': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                levelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanSecurityLevelMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                levelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                levelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                schemeId?: string[] | undefined
                levelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/project': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                issueSecuritySchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: PageBeanIssueSecuritySchemeToProjectMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                issueSecuritySchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                issueSecuritySchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                issueSecuritySchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { json: AssociateSecuritySchemeWithProjectDetails }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { json: AssociateSecuritySchemeWithProjectDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AssociateSecuritySchemeWithProjectDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AssociateSecuritySchemeWithProjectDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AssociateSecuritySchemeWithProjectDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AssociateSecuritySchemeWithProjectDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: PageBeanSecuritySchemeWithProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:id': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: SecurityScheme
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateIssueSecuritySchemeRequestBean }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UpdateIssueSecuritySchemeRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateIssueSecuritySchemeRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateIssueSecuritySchemeRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateIssueSecuritySchemeRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:issueSecuritySchemeId/members': {
      $get:
        | {
            input: { param: { issueSecuritySchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueSecurityLevelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanIssueSecurityLevelMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueSecuritySchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueSecurityLevelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueSecuritySchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueSecurityLevelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueSecuritySchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueSecurityLevelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueSecuritySchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueSecurityLevelId?: string[] | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:schemeId': {
      $delete:
        | {
            input: { param: { schemeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { schemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { schemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { schemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { schemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:schemeId/level': {
      $put:
        | {
            input: { param: { schemeId: string } } & { json: AddSecuritySchemeLevelsRequestBean }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { schemeId: string } } & { json: AddSecuritySchemeLevelsRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { schemeId: string } } & { json: AddSecuritySchemeLevelsRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { schemeId: string } } & { json: AddSecuritySchemeLevelsRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { schemeId: string } } & { json: AddSecuritySchemeLevelsRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { schemeId: string } } & { json: AddSecuritySchemeLevelsRequestBean }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:schemeId/level/:levelId': {
      $delete:
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              query: { replaceWith?: string | undefined }
            }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              query: { replaceWith?: string | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              query: { replaceWith?: string | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              query: { replaceWith?: string | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              query: { replaceWith?: string | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              query: { replaceWith?: string | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: UpdateIssueSecurityLevelDetails
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: UpdateIssueSecurityLevelDetails
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: UpdateIssueSecurityLevelDetails
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: UpdateIssueSecurityLevelDetails
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: UpdateIssueSecurityLevelDetails
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:schemeId/level/:levelId/member': {
      $put:
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: SecuritySchemeMembersRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: SecuritySchemeMembersRequest
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: SecuritySchemeMembersRequest
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: SecuritySchemeMembersRequest
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { schemeId: string; levelId: string } } & {
              json: SecuritySchemeMembersRequest
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuesecurityschemes/:schemeId/level/:levelId/member/:memberId': {
      $delete:
        | {
            input: { param: { schemeId: string; levelId: string; memberId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { schemeId: string; levelId: string; memberId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { schemeId: string; levelId: string; memberId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { schemeId: string; levelId: string; memberId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { schemeId: string; levelId: string; memberId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetype': {
      $get: { input: {}; output: IssueTypeDetails[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: IssueTypeCreateBean }
            output: IssueTypeDetails
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: IssueTypeCreateBean }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: IssueTypeCreateBean }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: IssueTypeCreateBean }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: IssueTypeCreateBean }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/issuetype/project': {
      $get:
        | {
            input: { query: { projectId: bigint; level?: number | undefined } }
            output: IssueTypeDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { projectId: bigint; level?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { projectId: bigint; level?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetype/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { alternativeIssueTypeId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 423
          }
      $get:
        | {
            input: { param: { id: string } }
            output: IssueTypeDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: IssueTypeUpdateBean }
            output: IssueTypeDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IssueTypeUpdateBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IssueTypeUpdateBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IssueTypeUpdateBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IssueTypeUpdateBean }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IssueTypeUpdateBean }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/issuetype/:id/alternatives': {
      $get:
        | {
            input: { param: { id: string } }
            output: IssueTypeDetails[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/issuetype/:id/avatar2': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: Avatar
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetype/:issueTypeId/properties': {
      $get:
        | {
            input: { param: { issueTypeId: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueTypeId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetype/:issueTypeId/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueTypeId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescheme': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
                queryString?: string | undefined
              }
            }
            output: PageBeanIssueTypeScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
                queryString?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
                queryString?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
                queryString?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: IssueTypeSchemeDetails }
            output: IssueTypeSchemeID
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: IssueTypeSchemeDetails }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: IssueTypeSchemeDetails }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: IssueTypeSchemeDetails }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: IssueTypeSchemeDetails }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/issuetypescheme/mapping': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeSchemeId?: bigint[] | undefined
              }
            }
            output: PageBeanIssueTypeSchemeMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/issuetypescheme/project': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: PageBeanIssueTypeSchemeProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { json: IssueTypeSchemeProjectAssociation }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: IssueTypeSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: IssueTypeSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: IssueTypeSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: IssueTypeSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescheme/:issueTypeSchemeId': {
      $delete:
        | {
            input: { param: { issueTypeSchemeId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeSchemeUpdateDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeSchemeUpdateDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeSchemeUpdateDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeSchemeUpdateDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeSchemeUpdateDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype': {
      $put:
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeIds }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype/move': {
      $put:
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: OrderOfIssueTypes }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: OrderOfIssueTypes }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: OrderOfIssueTypes }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: OrderOfIssueTypes }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeSchemeId: bigint } } & { json: OrderOfIssueTypes }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype/:issueTypeId': {
      $delete:
        | {
            input: { param: { issueTypeSchemeId: bigint; issueTypeId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeSchemeId: bigint; issueTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeSchemeId: bigint; issueTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeSchemeId: bigint; issueTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeSchemeId: bigint; issueTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanIssueTypeScreenScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: IssueTypeScreenSchemeDetails }
            output: IssueTypeScreenSchemeId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IssueTypeScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: IssueTypeScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: IssueTypeScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: IssueTypeScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: IssueTypeScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/mapping': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeScreenSchemeId?: bigint[] | undefined
              }
            }
            output: PageBeanIssueTypeScreenSchemeItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeScreenSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeScreenSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                issueTypeScreenSchemeId?: bigint[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/project': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: PageBeanIssueTypeScreenSchemesProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { json: IssueTypeScreenSchemeProjectAssociation }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: IssueTypeScreenSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: IssueTypeScreenSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: IssueTypeScreenSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: IssueTypeScreenSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId': {
      $delete:
        | {
            input: { param: { issueTypeScreenSchemeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeUpdateDetails
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeUpdateDetails
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping': {
      $put:
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeMappingDetails
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeMappingDetails
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeMappingDetails
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeMappingDetails
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeMappingDetails
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: IssueTypeScreenSchemeMappingDetails
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping/default': {
      $put:
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: UpdateDefaultScreenScheme
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: UpdateDefaultScreenScheme
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: UpdateDefaultScreenScheme
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: UpdateDefaultScreenScheme
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & {
              json: UpdateDefaultScreenScheme
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping/remove': {
      $post:
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & { json: IssueTypeIds }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { issueTypeScreenSchemeId: string } } & { json: IssueTypeIds }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/project': {
      $get:
        | {
            input: { param: { issueTypeScreenSchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                query?: string | undefined
              }
            }
            output: PageBeanProjectDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueTypeScreenSchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { issueTypeScreenSchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { issueTypeScreenSchemeId: bigint } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/jql/autocompletedata': {
      $get:
        | { input: {}; output: JQLReferenceData; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: SearchAutoCompleteFilter }
            output: JQLReferenceData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SearchAutoCompleteFilter }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SearchAutoCompleteFilter }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/jql/autocompletedata/suggestions': {
      $get:
        | {
            input: {
              query: {
                fieldName?: string | undefined
                fieldValue?: string | undefined
                predicateName?: string | undefined
                predicateValue?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: AutoCompleteSuggestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fieldName?: string | undefined
                fieldValue?: string | undefined
                predicateName?: string | undefined
                predicateValue?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                fieldName?: string | undefined
                fieldValue?: string | undefined
                predicateName?: string | undefined
                predicateValue?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/jql/function/computation': {
      $get:
        | {
            input: {
              query: {
                functionKey?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: string | undefined
              }
            }
            output: PageBean2JqlFunctionPrecomputationBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                functionKey?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                functionKey?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                functionKey?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                functionKey?: string[] | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { query: { skipNotFoundPrecomputations?: boolean | undefined } } & {
              json: JqlFunctionPrecomputationUpdateRequestBean
            }
            output: JqlFunctionPrecomputationUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { skipNotFoundPrecomputations?: boolean | undefined } } & {
              json: JqlFunctionPrecomputationUpdateRequestBean
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { query: { skipNotFoundPrecomputations?: boolean | undefined } } & {
              json: JqlFunctionPrecomputationUpdateRequestBean
            }
            output: JqlFunctionPrecomputationUpdateErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { skipNotFoundPrecomputations?: boolean | undefined } } & {
              json: JqlFunctionPrecomputationUpdateRequestBean
            }
            output: JqlFunctionPrecomputationUpdateErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { skipNotFoundPrecomputations?: boolean | undefined } } & {
              json: JqlFunctionPrecomputationUpdateRequestBean
            }
            output: JqlFunctionPrecomputationUpdateErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/jql/function/computation/search': {
      $post:
        | {
            input: { query: { orderBy?: string | undefined } } & {
              json: JqlFunctionPrecomputationGetByIdRequest
            }
            output: JqlFunctionPrecomputationGetByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { orderBy?: string | undefined } } & {
              json: JqlFunctionPrecomputationGetByIdRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { orderBy?: string | undefined } } & {
              json: JqlFunctionPrecomputationGetByIdRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { orderBy?: string | undefined } } & {
              json: JqlFunctionPrecomputationGetByIdRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { orderBy?: string | undefined } } & {
              json: JqlFunctionPrecomputationGetByIdRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/jql/match': {
      $post:
        | {
            input: { json: IssuesAndJQLQueries }
            output: IssueMatches
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IssuesAndJQLQueries }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/rest/api/3/jql/parse': {
      $post:
        | {
            input: { query: { validation: 'strict' | 'warn' | 'none' } } & {
              json: JqlQueriesToParse
            }
            output: ParsedJqlQueries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { validation: 'strict' | 'warn' | 'none' } } & {
              json: JqlQueriesToParse
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { validation: 'strict' | 'warn' | 'none' } } & {
              json: JqlQueriesToParse
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/jql/pdcleaner': {
      $post:
        | {
            input: { json: JQLPersonalDataMigrationRequest }
            output: ConvertedJQLQueries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JQLPersonalDataMigrationRequest }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: JQLPersonalDataMigrationRequest }
            output: string
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/jql/sanitize': {
      $post:
        | {
            input: { json: JqlQueriesToSanitize }
            output: SanitizedJqlQueries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JqlQueriesToSanitize }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: JqlQueriesToSanitize }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: JqlQueriesToSanitize }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/label': {
      $get: {
        input: {
          query: {
            startAt?: bigint | undefined
            maxResults?: number | undefined
            query?: string | undefined
            scope?: string | undefined
          }
        }
        output: PageBeanString
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/api/3/license/approximateLicenseCount': {
      $get:
        | { input: {}; output: LicenseMetric; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorCollections; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorCollections; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/rest/api/3/license/approximateLicenseCount/product/:applicationKey': {
      $get:
        | {
            input: {
              param: {
                applicationKey:
                  | 'jira-core'
                  | 'jira-product-discovery'
                  | 'jira-software'
                  | 'jira-servicedesk'
              }
            }
            output: LicenseMetric
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                applicationKey:
                  | 'jira-core'
                  | 'jira-product-discovery'
                  | 'jira-software'
                  | 'jira-servicedesk'
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                applicationKey:
                  | 'jira-core'
                  | 'jira-product-discovery'
                  | 'jira-software'
                  | 'jira-servicedesk'
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/mypermissions': {
      $get:
        | {
            input: {
              query: {
                projectKey?: string | undefined
                projectId?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                permissions?: string | undefined
                projectUuid?: string | undefined
                projectConfigurationUuid?: string | undefined
                commentId?: string | undefined
              }
            }
            output: Permissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                projectId?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                permissions?: string | undefined
                projectUuid?: string | undefined
                projectConfigurationUuid?: string | undefined
                commentId?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                projectId?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                permissions?: string | undefined
                projectUuid?: string | undefined
                projectConfigurationUuid?: string | undefined
                commentId?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                projectId?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                permissions?: string | undefined
                projectUuid?: string | undefined
                projectConfigurationUuid?: string | undefined
                commentId?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/mypreferences': {
      $delete:
        | { input: { query: { key: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { key: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { query: { key: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { query: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { key: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { query: { key: string } } & { json: string }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { query: { key: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { key: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/mypreferences/locale': {
      $get:
        | { input: {}; output: Locale; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $put:
        | {
            input: { json: Locale }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { json: Locale }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Locale }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/myself': {
      $get:
        | {
            input: { query: { expand?: string | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/notificationscheme': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
                onlyDefault?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanNotificationScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
                onlyDefault?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
                onlyDefault?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreateNotificationSchemeDetails }
            output: NotificationSchemeId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/notificationscheme/project': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                notificationSchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: PageBeanNotificationSchemeAndProjectMappingJsonBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                notificationSchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                notificationSchemeId?: string[] | undefined
                projectId?: string[] | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/notificationscheme/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: NotificationScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateNotificationSchemeDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UpdateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateNotificationSchemeDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/notificationscheme/:id/notification': {
      $put:
        | {
            input: { param: { id: string } } & { json: AddNotificationsDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AddNotificationsDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AddNotificationsDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AddNotificationsDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AddNotificationsDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/notificationscheme/:notificationSchemeId': {
      $delete:
        | {
            input: { param: { notificationSchemeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { notificationSchemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { notificationSchemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { notificationSchemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { notificationSchemeId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/notificationscheme/:notificationSchemeId/notification/:notificationId': {
      $delete:
        | {
            input: { param: { notificationSchemeId: string; notificationId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { notificationSchemeId: string; notificationId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { notificationSchemeId: string; notificationId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { notificationSchemeId: string; notificationId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { notificationSchemeId: string; notificationId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/permissions': {
      $get:
        | { input: {}; output: Permissions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/permissions/check': {
      $post:
        | {
            input: { json: BulkPermissionsRequestBean }
            output: BulkPermissionGrants
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkPermissionsRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkPermissionsRequestBean }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/permissions/project': {
      $post:
        | {
            input: { json: PermissionsKeysBean }
            output: PermittedProjects
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PermissionsKeysBean }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PermissionsKeysBean }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/permissionscheme': {
      $get:
        | {
            input: { query: { expand?: string | undefined } }
            output: PermissionSchemes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { expand?: string | undefined } } & { json: PermissionScheme }
            output: PermissionScheme
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: PermissionScheme }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: PermissionScheme }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: PermissionScheme }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: PermissionScheme }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/permissionscheme/:schemeId': {
      $delete:
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } }
            output: PermissionScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionScheme
            }
            output: PermissionScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionScheme
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionScheme
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionScheme
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionScheme
            }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/permissionscheme/:schemeId/permission': {
      $get:
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } }
            output: PermissionGrants
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionGrant
            }
            output: PermissionGrant
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionGrant
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionGrant
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionGrant
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { schemeId: bigint } } & { query: { expand?: string | undefined } } & {
              json: PermissionGrant
            }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/permissionscheme/:schemeId/permission/:permissionId': {
      $delete:
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } } & {
              query: { expand?: string | undefined }
            }
            output: PermissionGrant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint; permissionId: bigint } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/plans/plan': {
      $get:
        | {
            input: {
              query: {
                includeTrashed?: boolean | undefined
                includeArchived?: boolean | undefined
                cursor?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: PageWithCursorGetPlanResponseForPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeTrashed?: boolean | undefined
                includeArchived?: boolean | undefined
                cursor?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeTrashed?: boolean | undefined
                includeArchived?: boolean | undefined
                cursor?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { query: { useGroupId?: boolean | undefined } } & { json: CreatePlanRequest }
            output: bigint
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { useGroupId?: boolean | undefined } } & { json: CreatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { useGroupId?: boolean | undefined } } & { json: CreatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { useGroupId?: boolean | undefined } } & { json: CreatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId': {
      $get:
        | {
            input: { param: { planId: bigint } } & { query: { useGroupId?: boolean | undefined } }
            output: GetPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: bigint } } & { query: { useGroupId?: boolean | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } } & { query: { useGroupId?: boolean | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } } & { query: { useGroupId?: boolean | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { planId: bigint } } & {
              query: { useGroupId?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { useGroupId?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { useGroupId?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { useGroupId?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { useGroupId?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { useGroupId?: boolean | undefined }
            } & { json: { [x: string]: unknown } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/archive': {
      $put:
        | {
            input: { param: { planId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/duplicate': {
      $post:
        | {
            input: { param: { planId: bigint } } & { json: DuplicatePlanRequest }
            output: bigint
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { planId: bigint } } & { json: DuplicatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: bigint } } & { json: DuplicatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } } & { json: DuplicatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } } & { json: DuplicatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint } } & { json: DuplicatePlanRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/team': {
      $get:
        | {
            input: { param: { planId: bigint } } & {
              query: { cursor?: string | undefined; maxResults?: number | undefined }
            }
            output: PageWithCursorGetTeamResponseForPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { cursor?: string | undefined; maxResults?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { cursor?: string | undefined; maxResults?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } } & {
              query: { cursor?: string | undefined; maxResults?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/team/atlassian': {
      $post:
        | {
            input: { param: { planId: bigint } } & { json: AddAtlassianTeamRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint } } & { json: AddAtlassianTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: bigint } } & { json: AddAtlassianTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } } & { json: AddAtlassianTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } } & { json: AddAtlassianTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint } } & { json: AddAtlassianTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/team/atlassian/:atlassianTeamId': {
      $delete:
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: GetAtlassianTeamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint; atlassianTeamId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/team/planonly': {
      $post:
        | {
            input: { param: { planId: bigint } } & { json: CreatePlanOnlyTeamRequest }
            output: bigint
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { planId: bigint } } & { json: CreatePlanOnlyTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: bigint } } & { json: CreatePlanOnlyTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } } & { json: CreatePlanOnlyTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } } & { json: CreatePlanOnlyTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint } } & { json: CreatePlanOnlyTeamRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/team/planonly/:planOnlyTeamId': {
      $delete:
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: GetPlanOnlyTeamResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint; planOnlyTeamId: bigint } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/plans/plan/:planId/trash': {
      $put:
        | {
            input: { param: { planId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { planId: bigint } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/policies': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                cursor?: string | undefined
              }
            }
            output: PolicySummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/api/3/policies/project/:projectIdOrKey': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: StatePolicyDocument[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/policies/project/:projectIdOrKey/policies': {
      $put:
        | {
            input: { param: { projectIdOrKey: string } } & { json: SetProjectPoliciesRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: SetProjectPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: SetProjectPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: SetProjectPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: SetProjectPoliciesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: SetProjectPoliciesRequest }
            output: PolicyApplicationViolation[]
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/policies/project/:projectIdOrKey/rules': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { ruleTypeIds?: string[] | undefined }
            }
            output: StatePolicyRule[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { ruleTypeIds?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { ruleTypeIds?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { ruleTypeIds?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/policies/project/:projectIdOrKey/validate': {
      $post:
        | {
            input: { param: { projectIdOrKey: string } } & { json: ValidatePolicyRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: ValidatePolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: ValidatePolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: ValidatePolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: ValidatePolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: ValidatePolicyRequest }
            output: PolicyApplicationViolation[]
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/policies/:policyId/apply': {
      $post:
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: BulkPolicyOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: BulkPolicyOperationResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/policies/:policyId/remove': {
      $post:
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: BulkPolicyOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & { json: BulkProjectPolicyRequest }
            output: BulkPolicyOperationResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/api/3/priority': {
      $get:
        | { input: {}; output: Priority[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: CreatePriorityDetails }
            output: PriorityId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePriorityDetails }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/priority/default': {
      $put:
        | {
            input: { json: SetDefaultPriorityRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: SetDefaultPriorityRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetDefaultPriorityRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SetDefaultPriorityRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SetDefaultPriorityRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/priority/move': {
      $put:
        | {
            input: { json: ReorderIssuePriorities }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: ReorderIssuePriorities }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReorderIssuePriorities }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReorderIssuePriorities }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReorderIssuePriorities }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/priority/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
                priorityName?: string | undefined
                onlyDefault?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanPriority
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                projectId?: string[] | undefined
                priorityName?: string | undefined
                onlyDefault?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/priority/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 503
          }
      $get:
        | { input: { param: { id: string } }; output: Priority; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdatePriorityDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UpdatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdatePriorityDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/priorityscheme': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                priorityId?: bigint[] | undefined
                schemeId?: bigint[] | undefined
                schemeName?: string | undefined
                onlyDefault?: boolean | undefined
                orderBy?: 'name' | '+name' | '-name' | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                priorityId?: bigint[] | undefined
                schemeId?: bigint[] | undefined
                schemeName?: string | undefined
                onlyDefault?: boolean | undefined
                orderBy?: 'name' | '+name' | '-name' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                priorityId?: bigint[] | undefined
                schemeId?: bigint[] | undefined
                schemeName?: string | undefined
                onlyDefault?: boolean | undefined
                orderBy?: 'name' | '+name' | '-name' | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: PrioritySchemeId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: PrioritySchemeId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreatePrioritySchemeDetails }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/priorityscheme/mappings': {
      $post:
        | {
            input: { json: SuggestedMappingsRequestBean }
            output: PageBeanPriorityWithSequence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SuggestedMappingsRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SuggestedMappingsRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/priorityscheme/priorities/available': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                query?: string | undefined
                schemeId: string
                exclude?: string[] | undefined
              }
            }
            output: PageBeanPriorityWithSequence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                query?: string | undefined
                schemeId: string
                exclude?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                query?: string | undefined
                schemeId: string
                exclude?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/priorityscheme/:schemeId': {
      $delete:
        | {
            input: { param: { schemeId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { schemeId: bigint } }; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { param: { schemeId: bigint } } & { json: UpdatePrioritySchemeRequestBean }
            output: UpdatePrioritySchemeResponseBean
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { schemeId: bigint } } & { json: UpdatePrioritySchemeRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schemeId: bigint } } & { json: UpdatePrioritySchemeRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { schemeId: bigint } } & { json: UpdatePrioritySchemeRequestBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { schemeId: bigint } } & { json: UpdatePrioritySchemeRequestBean }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { schemeId: bigint } } & { json: UpdatePrioritySchemeRequestBean }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/priorityscheme/:schemeId/priorities': {
      $get:
        | {
            input: { param: { schemeId: string } } & {
              query: { startAt?: string | undefined; maxResults?: string | undefined }
            }
            output: PageBeanPriorityWithSequence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schemeId: string } } & {
              query: { startAt?: string | undefined; maxResults?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schemeId: string } } & {
              query: { startAt?: string | undefined; maxResults?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/priorityscheme/:schemeId/projects': {
      $get:
        | {
            input: { param: { schemeId: string } } & {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: PageBeanProject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schemeId: string } } & {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schemeId: string } } & {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                projectId?: bigint[] | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/project': {
      $get:
        | {
            input: {
              query: {
                expand?: string | undefined
                recent?: number | undefined
                properties?: string[] | undefined
              }
            }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                expand?: string | undefined
                recent?: number | undefined
                properties?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: CreateProjectDetails }
            output: ProjectIdentifiers
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateProjectDetails }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateProjectDetails }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateProjectDetails }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/project-template': {
      $post:
        | {
            input: { json: ProjectCustomTemplateCreateRequestDTO }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { json: ProjectCustomTemplateCreateRequestDTO }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/project-template/edit-template': {
      $put: {
        input: { json: EditTemplateRequest }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/api/3/project-template/live-template': {
      $get: {
        input: { query: { projectId?: string | undefined; templateKey?: string | undefined } }
        output: ProjectTemplateModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/api/3/project-template/remove-template': {
      $delete: {
        input: { query: { templateKey: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/api/3/project-template/save-template': {
      $post: {
        input: { json: SaveTemplateRequest }
        output: SaveTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/api/3/project/recent': {
      $get:
        | {
            input: { query: { expand?: string | undefined; properties?: StringList[] | undefined } }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined; properties?: StringList[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined; properties?: StringList[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/project/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'category'
                  | '-category'
                  | '+category'
                  | 'key'
                  | '-key'
                  | '+key'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lastIssueUpdatedDate'
                  | '-lastIssueUpdatedDate'
                  | '+lastIssueUpdatedDate'
                  | 'archivedDate'
                  | '+archivedDate'
                  | '-archivedDate'
                  | 'deletedDate'
                  | '+deletedDate'
                  | '-deletedDate'
                  | undefined
                id?: bigint[] | undefined
                keys?: string[] | undefined
                query?: string | undefined
                typeKey?: string | undefined
                categoryId?: bigint | undefined
                action?: 'view' | 'browse' | 'edit' | 'create' | undefined
                expand?: string | undefined
                status?: ('live' | 'archived' | 'deleted')[] | undefined
                properties?: StringList[] | undefined
                propertyQuery?: string | undefined
              }
            }
            output: PageBeanProject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'category'
                  | '-category'
                  | '+category'
                  | 'key'
                  | '-key'
                  | '+key'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lastIssueUpdatedDate'
                  | '-lastIssueUpdatedDate'
                  | '+lastIssueUpdatedDate'
                  | 'archivedDate'
                  | '+archivedDate'
                  | '-archivedDate'
                  | 'deletedDate'
                  | '+deletedDate'
                  | '-deletedDate'
                  | undefined
                id?: bigint[] | undefined
                keys?: string[] | undefined
                query?: string | undefined
                typeKey?: string | undefined
                categoryId?: bigint | undefined
                action?: 'view' | 'browse' | 'edit' | 'create' | undefined
                expand?: string | undefined
                status?: ('live' | 'archived' | 'deleted')[] | undefined
                properties?: StringList[] | undefined
                propertyQuery?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'category'
                  | '-category'
                  | '+category'
                  | 'key'
                  | '-key'
                  | '+key'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lastIssueUpdatedDate'
                  | '-lastIssueUpdatedDate'
                  | '+lastIssueUpdatedDate'
                  | 'archivedDate'
                  | '+archivedDate'
                  | '-archivedDate'
                  | 'deletedDate'
                  | '+deletedDate'
                  | '-deletedDate'
                  | undefined
                id?: bigint[] | undefined
                keys?: string[] | undefined
                query?: string | undefined
                typeKey?: string | undefined
                categoryId?: bigint | undefined
                action?: 'view' | 'browse' | 'edit' | 'create' | undefined
                expand?: string | undefined
                status?: ('live' | 'archived' | 'deleted')[] | undefined
                properties?: StringList[] | undefined
                propertyQuery?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'category'
                  | '-category'
                  | '+category'
                  | 'key'
                  | '-key'
                  | '+key'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'owner'
                  | '-owner'
                  | '+owner'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lastIssueUpdatedDate'
                  | '-lastIssueUpdatedDate'
                  | '+lastIssueUpdatedDate'
                  | 'archivedDate'
                  | '+archivedDate'
                  | '-archivedDate'
                  | 'deletedDate'
                  | '+deletedDate'
                  | '-deletedDate'
                  | undefined
                id?: bigint[] | undefined
                keys?: string[] | undefined
                query?: string | undefined
                typeKey?: string | undefined
                categoryId?: bigint | undefined
                action?: 'view' | 'browse' | 'edit' | 'create' | undefined
                expand?: string | undefined
                status?: ('live' | 'archived' | 'deleted')[] | undefined
                properties?: StringList[] | undefined
                propertyQuery?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/type': {
      $get:
        | { input: {}; output: ProjectType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/project/type/accessible': {
      $get: { input: {}; output: ProjectType[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/rest/api/3/project/type/:projectTypeKey': {
      $get:
        | {
            input: {
              param: {
                projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery'
              }
            }
            output: ProjectType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/type/:projectTypeKey/accessible': {
      $get:
        | {
            input: {
              param: {
                projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery'
              }
            }
            output: ProjectType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey': {
      $delete:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { enableUndo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { enableUndo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { enableUndo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined; properties?: string[] | undefined }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined; properties?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined; properties?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: UpdateProjectDetails }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: UpdateProjectDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: UpdateProjectDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: UpdateProjectDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            } & { json: UpdateProjectDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/archive': {
      $post:
        | {
            input: { param: { projectIdOrKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/avatar': {
      $put:
        | {
            input: { param: { projectIdOrKey: string } } & { json: Avatar }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: Avatar }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: Avatar }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } } & { json: Avatar }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/avatar/:id': {
      $delete:
        | {
            input: { param: { projectIdOrKey: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/avatar2': {
      $post:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size?: number | undefined }
            }
            output: Avatar
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/avatars': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: ProjectAvatars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/classification-config': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/classification-level/default': {
      $delete:
        | {
            input: { param: { projectIdOrKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { projectIdOrKey: string } } & {
              json: UpdateDefaultProjectClassificationBean
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              json: UpdateDefaultProjectClassificationBean
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              json: UpdateDefaultProjectClassificationBean
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              json: UpdateDefaultProjectClassificationBean
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/component': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lead'
                  | '-lead'
                  | '+lead'
                  | 'name'
                  | '-name'
                  | '+name'
                  | undefined
                componentSource?: 'jira' | 'compass' | 'auto' | undefined
                query?: string | undefined
              }
            }
            output: PageBeanComponentWithIssueCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lead'
                  | '-lead'
                  | '+lead'
                  | 'name'
                  | '-name'
                  | '+name'
                  | undefined
                componentSource?: 'jira' | 'compass' | 'auto' | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'issueCount'
                  | '-issueCount'
                  | '+issueCount'
                  | 'lead'
                  | '-lead'
                  | '+lead'
                  | 'name'
                  | '-name'
                  | '+name'
                  | undefined
                componentSource?: 'jira' | 'compass' | 'auto' | undefined
                query?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/components': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { componentSource?: 'jira' | 'compass' | 'auto' | undefined }
            }
            output: ProjectComponent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { componentSource?: 'jira' | 'compass' | 'auto' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { componentSource?: 'jira' | 'compass' | 'auto' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/delete': {
      $post:
        | {
            input: { param: { projectIdOrKey: string } }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/features': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: ContainerForProjectFeatures
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/features/:featureKey': {
      $put:
        | {
            input: { param: { projectIdOrKey: string; featureKey: string } } & {
              json: ProjectFeatureState
            }
            output: ContainerForProjectFeatures
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; featureKey: string } } & {
              json: ProjectFeatureState
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; featureKey: string } } & {
              json: ProjectFeatureState
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; featureKey: string } } & {
              json: ProjectFeatureState
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string; featureKey: string } } & {
              json: ProjectFeatureState
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/properties': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectIdOrKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/restore': {
      $post:
        | {
            input: { param: { projectIdOrKey: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/role': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/role/:id': {
      $delete:
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: {
                user?: string | undefined
                group?: string | undefined
                groupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: {
                user?: string | undefined
                group?: string | undefined
                groupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: {
                user?: string | undefined
                group?: string | undefined
                groupId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: { excludeInactiveUsers?: boolean | undefined }
            }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: { excludeInactiveUsers?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: { excludeInactiveUsers?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              query: { excludeInactiveUsers?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & { json: ActorsMap }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & { json: ActorsMap }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & { json: ActorsMap }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & { json: ActorsMap }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              json: ProjectRoleActorsUpdateBean
            }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              json: ProjectRoleActorsUpdateBean
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              json: ProjectRoleActorsUpdateBean
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string; id: bigint } } & {
              json: ProjectRoleActorsUpdateBean
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/roledetails': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                currentMember?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                excludeOtherServiceRoles?: boolean | undefined
              }
            }
            output: ProjectRoleDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                currentMember?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                excludeOtherServiceRoles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                currentMember?: boolean | undefined
                excludeConnectAddons?: boolean | undefined
                excludeOtherServiceRoles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/statuses': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } }
            output: IssueTypeWithStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/version': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'releaseDate'
                  | '-releaseDate'
                  | '+releaseDate'
                  | 'sequence'
                  | '-sequence'
                  | '+sequence'
                  | 'startDate'
                  | '-startDate'
                  | '+startDate'
                  | undefined
                query?: string | undefined
                status?: string | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                orderBy?:
                  | 'description'
                  | '-description'
                  | '+description'
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'releaseDate'
                  | '-releaseDate'
                  | '+releaseDate'
                  | 'sequence'
                  | '-sequence'
                  | '+sequence'
                  | 'startDate'
                  | '-startDate'
                  | '+startDate'
                  | undefined
                query?: string | undefined
                status?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectIdOrKey/versions': {
      $get:
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: Version[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectIdOrKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectId/email': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: ProjectEmailAddress
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { projectId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { projectId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { projectId: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { projectId: bigint } } & { json: ProjectEmailAddress }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { projectId: bigint } } & { json: ProjectEmailAddress }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectId: bigint } } & { json: ProjectEmailAddress }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectId: bigint } } & { json: ProjectEmailAddress }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectId: bigint } } & { json: ProjectEmailAddress }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectId/hierarchy': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: ProjectIssueTypeHierarchy
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { projectId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { projectId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { projectId: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/project/:projectKeyOrId/issuesecuritylevelscheme': {
      $get:
        | {
            input: { param: { projectKeyOrId: string } }
            output: SecurityScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKeyOrId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectKeyOrId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectKeyOrId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectKeyOrId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectKeyOrId/notificationscheme': {
      $get:
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: NotificationScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectKeyOrId/permissionscheme': {
      $get:
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: PermissionScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            } & { json: IdBean }
            output: PermissionScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            } & { json: IdBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            } & { json: IdBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { projectKeyOrId: string } } & {
              query: { expand?: string | undefined }
            } & { json: IdBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/project/:projectKeyOrId/securitylevel': {
      $get:
        | {
            input: { param: { projectKeyOrId: string } }
            output: ProjectIssueSecurityLevels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKeyOrId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/projectCategory': {
      $get:
        | { input: {}; output: ProjectCategory[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: ProjectCategory }
            output: ProjectCategory
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ProjectCategory }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ProjectCategory }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ProjectCategory }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ProjectCategory }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/projectCategory/:id': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ProjectCategory
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ProjectCategory }
            output: UpdatedProjectCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectCategory }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectCategory }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectCategory }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectCategory }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/projects/fields': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
                workTypeId: bigint[]
                fieldId?: string[] | undefined
              }
            }
            output: PageBean2ProjectFieldBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
                workTypeId: bigint[]
                fieldId?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
                workTypeId: bigint[]
                fieldId?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                projectId: bigint[]
                workTypeId: bigint[]
                fieldId?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/projectvalidate/key': {
      $get:
        | {
            input: { query: { key?: string | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/projectvalidate/validProjectKey': {
      $get:
        | {
            input: { query: { key?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/projectvalidate/validProjectName': {
      $get:
        | { input: { query: { name: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/redact': {
      $post:
        | {
            input: { json: BulkRedactionRequest }
            output: string
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: BulkRedactionRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: BulkRedactionRequest }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { json: BulkRedactionRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/redact/status/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: RedactionJobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { jobId: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/resolution': {
      $get:
        | { input: {}; output: Resolution[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: CreateResolutionDetails }
            output: ResolutionId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/resolution/default': {
      $put:
        | {
            input: { json: SetDefaultResolutionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: SetDefaultResolutionRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetDefaultResolutionRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SetDefaultResolutionRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SetDefaultResolutionRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/resolution/move': {
      $put:
        | {
            input: { json: ReorderIssueResolutionsRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: ReorderIssueResolutionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReorderIssueResolutionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReorderIssueResolutionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReorderIssueResolutionsRequest }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/resolution/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                onlyDefault?: boolean | undefined
              }
            }
            output: PageBeanResolutionJsonBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: string | undefined
                maxResults?: string | undefined
                id?: string[] | undefined
                onlyDefault?: boolean | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/api/3/resolution/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { replaceWith: string } }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { id: string } } & { query: { replaceWith: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { replaceWith: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { replaceWith: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { replaceWith: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { replaceWith: string } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } }
            output: Resolution
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateResolutionDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UpdateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateResolutionDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/role': {
      $get:
        | { input: {}; output: ProjectRole[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: CreateUpdateRoleRequestBean }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/role/:id': {
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { swap?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { swap?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { swap?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { swap?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { swap?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { query: { swap?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: CreateUpdateRoleRequestBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/role/:id/actors': {
      $delete:
        | {
            input: { param: { id: bigint } } & {
              query: {
                user?: string | undefined
                groupId?: string | undefined
                group?: string | undefined
              }
            }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                user?: string | undefined
                groupId?: string | undefined
                group?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                user?: string | undefined
                groupId?: string | undefined
                group?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                user?: string | undefined
                groupId?: string | undefined
                group?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                user?: string | undefined
                groupId?: string | undefined
                group?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ActorInputBean }
            output: ProjectRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ActorInputBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ActorInputBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ActorInputBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ActorInputBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                scope?: ('GLOBAL' | 'TEMPLATE' | 'PROJECT')[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
              }
            }
            output: PageBeanScreen
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                scope?: ('GLOBAL' | 'TEMPLATE' | 'PROJECT')[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                queryString?: string | undefined
                scope?: ('GLOBAL' | 'TEMPLATE' | 'PROJECT')[] | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | { input: { json: ScreenDetails }; output: Screen; outputFormat: 'json'; status: 201 }
        | { input: { json: ScreenDetails }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ScreenDetails }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ScreenDetails }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/screens/addToDefault/:fieldId': {
      $post:
        | {
            input: { param: { fieldId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { fieldId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { fieldId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { fieldId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { fieldId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/screens/tabs': {
      $get:
        | {
            input: {
              query: {
                screenId?: bigint[] | undefined
                tabId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResult?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                screenId?: bigint[] | undefined
                tabId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResult?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                screenId?: bigint[] | undefined
                tabId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResult?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                screenId?: bigint[] | undefined
                tabId?: bigint[] | undefined
                startAt?: bigint | undefined
                maxResult?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/api/3/screens/:screenId': {
      $delete:
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { screenId: bigint } } & { json: UpdateScreenDetails }
            output: Screen
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { screenId: bigint } } & { json: UpdateScreenDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint } } & { json: UpdateScreenDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint } } & { json: UpdateScreenDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint } } & { json: UpdateScreenDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens/:screenId/availableFields': {
      $get:
        | {
            input: { param: { screenId: bigint } }
            output: ScreenableField[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { screenId: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/screens/:screenId/tabs': {
      $get:
        | {
            input: { param: { screenId: bigint } } & { query: { projectKey?: string | undefined } }
            output: ScreenableTab[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { screenId: bigint } } & { query: { projectKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint } } & { query: { projectKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint } } & { query: { projectKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint } } & { query: { projectKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { screenId: bigint } } & { json: ScreenableTab }
            output: ScreenableTab
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { screenId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens/:screenId/tabs/:tabId': {
      $delete:
        | {
            input: { param: { screenId: bigint; tabId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & { json: ScreenableTab }
            output: ScreenableTab
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & { json: ScreenableTab }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens/:screenId/tabs/:tabId/fields': {
      $get:
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { projectKey?: string | undefined }
            }
            output: ScreenableField[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { projectKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { projectKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { projectKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { skipFieldAssociation?: boolean | undefined }
            } & { json: AddFieldBean }
            output: ScreenableField
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { skipFieldAssociation?: boolean | undefined }
            } & { json: AddFieldBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { skipFieldAssociation?: boolean | undefined }
            } & { json: AddFieldBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { skipFieldAssociation?: boolean | undefined }
            } & { json: AddFieldBean }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint } } & {
              query: { skipFieldAssociation?: boolean | undefined }
            } & { json: AddFieldBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens/:screenId/tabs/:tabId/fields/:id': {
      $delete:
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens/:screenId/tabs/:tabId/fields/:id/move': {
      $post:
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } } & {
              json: MoveFieldBean
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } } & {
              json: MoveFieldBean
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } } & {
              json: MoveFieldBean
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } } & {
              json: MoveFieldBean
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; id: string } } & {
              json: MoveFieldBean
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screens/:screenId/tabs/:tabId/move/:pos': {
      $post:
        | {
            input: { param: { screenId: bigint; tabId: bigint; pos: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; pos: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; pos: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; pos: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenId: bigint; tabId: bigint; pos: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/screenscheme': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
              }
            }
            output: PageBeanScreenScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                id?: bigint[] | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: ScreenSchemeDetails }
            output: ScreenSchemeId
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ScreenSchemeDetails }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ScreenSchemeDetails }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ScreenSchemeDetails }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ScreenSchemeDetails }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/screenscheme/:screenSchemeId': {
      $delete:
        | {
            input: { param: { screenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { screenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenSchemeId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { screenSchemeId: string } } & { json: UpdateScreenSchemeDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { screenSchemeId: string } } & { json: UpdateScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { screenSchemeId: string } } & { json: UpdateScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { screenSchemeId: string } } & { json: UpdateScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { screenSchemeId: string } } & { json: UpdateScreenSchemeDetails }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/search': {
      $get:
        | {
            input: {
              query: {
                jql?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                validateQuery?: 'strict' | 'warn' | 'none' | 'true' | 'false' | undefined
                fields?: string[] | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                failFast?: boolean | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jql?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                validateQuery?: 'strict' | 'warn' | 'none' | 'true' | 'false' | undefined
                fields?: string[] | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                failFast?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                jql?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                validateQuery?: 'strict' | 'warn' | 'none' | 'true' | 'false' | undefined
                fields?: string[] | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                failFast?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: SearchRequestBean }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SearchRequestBean }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SearchRequestBean }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/search/approximate-count': {
      $post:
        | {
            input: { json: JQLCountRequestBean }
            output: JQLCountResultsBean
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: JQLCountRequestBean }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: JQLCountRequestBean }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/search/jql': {
      $get:
        | {
            input: {
              query: {
                jql?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
                fields?: string[] | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                failFast?: boolean | undefined
                reconcileIssues?: bigint[] | undefined
                includeArchivedProjects?: boolean | undefined
              }
            }
            output: SearchAndReconcileResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                jql?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
                fields?: string[] | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                failFast?: boolean | undefined
                reconcileIssues?: bigint[] | undefined
                includeArchivedProjects?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                jql?: string | undefined
                nextPageToken?: string | undefined
                maxResults?: number | undefined
                fields?: string[] | undefined
                expand?: string | undefined
                properties?: string[] | undefined
                fieldsByKeys?: boolean | undefined
                failFast?: boolean | undefined
                reconcileIssues?: bigint[] | undefined
                includeArchivedProjects?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: SearchAndReconcileRequestBean }
            output: SearchAndReconcileResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SearchAndReconcileRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SearchAndReconcileRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/securitylevel/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SecurityLevel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/serverInfo': {
      $get:
        | { input: {}; output: ServerInformation; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/settings/columns': {
      $get:
        | { input: {}; output: ColumnItem[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorCollection; outputFormat: 'json'; status: 403 }
      $put:
        | { input: { form: ColumnRequestBody }; output: {}; outputFormat: string; status: 200 }
        | { input: { form: ColumnRequestBody }; output: {}; outputFormat: string; status: 400 }
        | { input: { form: ColumnRequestBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { form: ColumnRequestBody }; output: {}; outputFormat: string; status: 403 }
        | { input: { form: ColumnRequestBody }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/status': {
      $get:
        | { input: {}; output: StatusDetails[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/status/:idOrName': {
      $get:
        | {
            input: { param: { idOrName: string } }
            output: StatusDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { idOrName: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { idOrName: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/statuscategory': {
      $get:
        | { input: {}; output: StatusCategory[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/statuscategory/:idOrKey': {
      $get:
        | {
            input: { param: { idOrKey: string } }
            output: StatusCategory
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { idOrKey: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { idOrKey: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/statuses': {
      $delete:
        | {
            input: { query: { id: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { query: { id: string[] } }
            output: JiraStatus[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 401 }
      $post:
        | {
            input: { json: StatusCreateRequest }
            output: JiraStatus[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: StatusCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: StatusCreateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: StatusCreateRequest }; output: {}; outputFormat: string; status: 409 }
      $put:
        | {
            input: { json: StatusUpdateRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { json: StatusUpdateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: StatusUpdateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: StatusUpdateRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/statuses/byNames': {
      $get:
        | {
            input: { query: { name: string[]; projectId?: string | undefined } }
            output: JiraStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string[]; projectId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { name: string[]; projectId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/statuses/search': {
      $get:
        | {
            input: {
              query: {
                projectId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                searchString?: string | undefined
                statusCategory?: string | undefined
                includeGlobalStatuses?: boolean | undefined
              }
            }
            output: PageOfStatuses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                searchString?: string | undefined
                statusCategory?: string | undefined
                includeGlobalStatuses?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                projectId?: string | undefined
                startAt?: bigint | undefined
                maxResults?: number | undefined
                searchString?: string | undefined
                statusCategory?: string | undefined
                includeGlobalStatuses?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/statuses/:statusId/project/:projectId/issueTypeUsages': {
      $get:
        | {
            input: { param: { statusId: string; projectId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: StatusProjectIssueTypeUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { statusId: string; projectId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { statusId: string; projectId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { statusId: string; projectId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/statuses/:statusId/projectUsages': {
      $get:
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: StatusProjectUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/statuses/:statusId/workflowUsages': {
      $get:
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: StatusWorkflowUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { statusId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/task/:taskId': {
      $get:
        | {
            input: { param: { taskId: string } }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/task/:taskId/cancel': {
      $post:
        | {
            input: { param: { taskId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { taskId: string } }
            output: string[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskId: string } }
            output: string[]
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskId: string } }
            output: string[]
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskId: string } }
            output: string[]
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/uiModifications': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanUiModificationDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: CreateUiModificationDetails }
            output: UiModificationIdentifiers
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUiModificationDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateUiModificationDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateUiModificationDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateUiModificationDetails }
            output: DetailedErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/uiModifications/:uiModificationId': {
      $delete:
        | {
            input: { param: { uiModificationId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { uiModificationId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { uiModificationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { uiModificationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { uiModificationId: string } } & { json: UpdateUiModificationDetails }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { uiModificationId: string } } & { json: UpdateUiModificationDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { uiModificationId: string } } & { json: UpdateUiModificationDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { uiModificationId: string } } & { json: UpdateUiModificationDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { uiModificationId: string } } & { json: UpdateUiModificationDetails }
            output: DetailedErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/universal_avatar/type/:type/owner/:entityId': {
      $get:
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } }
            output: Avatars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: Avatar
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { type: 'project' | 'issuetype' | 'priority'; entityId: string } } & {
              query: { x?: number | undefined; y?: number | undefined; size: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/universal_avatar/type/:type/owner/:owningObjectId/avatar/:id': {
      $delete:
        | {
            input: {
              param: {
                type: 'project' | 'issuetype' | 'priority'
                owningObjectId: string
                id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                type: 'project' | 'issuetype' | 'priority'
                owningObjectId: string
                id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                type: 'project' | 'issuetype' | 'priority'
                owningObjectId: string
                id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                type: 'project' | 'issuetype' | 'priority'
                owningObjectId: string
                id: bigint
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/universal_avatar/view/type/:type': {
      $get:
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority' } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority' } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority' } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority' } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/universal_avatar/view/type/:type/avatar/:id': {
      $get:
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; id: bigint } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; id: bigint } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; id: bigint } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; id: bigint } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; id: bigint } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/universal_avatar/view/type/:type/owner/:entityId': {
      $get:
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; entityId: string } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; entityId: string } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; entityId: string } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; entityId: string } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: 'issuetype' | 'project' | 'priority'; entityId: string } } & {
              query: {
                size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
                format?: 'png' | 'svg' | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/rest/api/3/user': {
      $delete:
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                username?: string | undefined
                key?: string | undefined
                expand?: string | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                username?: string | undefined
                key?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                username?: string | undefined
                key?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                username?: string | undefined
                key?: string | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | { input: { json: NewUserDetails }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: NewUserDetails }; output: User; outputFormat: 'json'; status: 201 }
        | { input: { json: NewUserDetails }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: NewUserDetails }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: NewUserDetails }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/user/assignable/multiProjectSearch': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                projectKeys: string
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                projectKeys: string
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                projectKeys: string
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                projectKeys: string
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                projectKeys: string
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/user/assignable/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sessionId?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                project?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                actionDescriptorId?: number | undefined
                recommend?: boolean | undefined
                accountType?: string[] | undefined
                appType?: string[] | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sessionId?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                project?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                actionDescriptorId?: number | undefined
                recommend?: boolean | undefined
                accountType?: string[] | undefined
                appType?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sessionId?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                project?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                actionDescriptorId?: number | undefined
                recommend?: boolean | undefined
                accountType?: string[] | undefined
                appType?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sessionId?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                project?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                actionDescriptorId?: number | undefined
                recommend?: boolean | undefined
                accountType?: string[] | undefined
                appType?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sessionId?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                project?: string | undefined
                issueKey?: string | undefined
                issueId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                actionDescriptorId?: number | undefined
                recommend?: boolean | undefined
                accountType?: string[] | undefined
                appType?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/user/bulk': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                username?: string[] | undefined
                key?: string[] | undefined
                accountId: string[]
              }
            }
            output: PageBeanUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                username?: string[] | undefined
                key?: string[] | undefined
                accountId: string[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                username?: string[] | undefined
                key?: string[] | undefined
                accountId: string[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/user/bulk/migration': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                username?: string[] | undefined
                key?: string[] | undefined
              }
            }
            output: UserMigrationBean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                username?: string[] | undefined
                key?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                username?: string[] | undefined
                key?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/user/columns': {
      $delete:
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: ColumnItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { accountId?: string | undefined; username?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { query: { accountId?: string | undefined } } & { form: UserColumnRequestBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId?: string | undefined } } & { form: UserColumnRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { accountId?: string | undefined } } & { form: UserColumnRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { accountId?: string | undefined } } & { form: UserColumnRequestBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { accountId?: string | undefined } } & { form: UserColumnRequestBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { accountId?: string | undefined } } & { form: UserColumnRequestBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/rest/api/3/user/email': {
      $get:
        | {
            input: { query: { accountId: string } }
            output: UnrestrictedUserEmail
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { accountId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/rest/api/3/user/email/bulk': {
      $get:
        | {
            input: { query: { accountId: string[] } }
            output: UnrestrictedUserEmail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { accountId: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { accountId: string[] } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/rest/api/3/user/groups': {
      $get:
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: GroupName[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { accountId: string; username?: string | undefined; key?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/user/permission/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                permissions: string
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                permissions: string
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                permissions: string
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                permissions: string
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                permissions: string
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                permissions: string
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/user/picker': {
      $get:
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                exclude?: string[] | undefined
                excludeAccountIds?: string[] | undefined
                avatarSize?: string | undefined
                excludeConnectUsers?: boolean | undefined
              }
            }
            output: FoundUsers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                exclude?: string[] | undefined
                excludeAccountIds?: string[] | undefined
                avatarSize?: string | undefined
                excludeConnectUsers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                exclude?: string[] | undefined
                excludeAccountIds?: string[] | undefined
                avatarSize?: string | undefined
                excludeConnectUsers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                maxResults?: number | undefined
                showAvatar?: boolean | undefined
                exclude?: string[] | undefined
                excludeAccountIds?: string[] | undefined
                avatarSize?: string | undefined
                excludeConnectUsers?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/user/properties': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/user/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { propertyKey: string } } & {
              query: {
                accountId?: string | undefined
                userKey?: string | undefined
                username?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/rest/api/3/user/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                property?: string | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                property?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                property?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
                property?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/user/search/query': {
      $get:
        | {
            input: {
              query: {
                query: string
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: PageBeanUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                query: string
                startAt?: bigint | undefined
                maxResults?: number | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 408
          }
    }
  } & {
    '/rest/api/3/user/search/query/key': {
      $get:
        | {
            input: {
              query: { query: string; startAt?: bigint | undefined; maxResult?: number | undefined }
            }
            output: PageBeanUserKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; startAt?: bigint | undefined; maxResult?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { query: string; startAt?: bigint | undefined; maxResult?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { query: string; startAt?: bigint | undefined; maxResult?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { query: string; startAt?: bigint | undefined; maxResult?: number | undefined }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 408
          }
    }
  } & {
    '/rest/api/3/user/viewissue/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username?: string | undefined
                accountId?: string | undefined
                issueKey?: string | undefined
                projectKey?: string | undefined
                startAt?: number | undefined
                maxResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/rest/api/3/users': {
      $get:
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/users/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: number | undefined
                maxResults?: number | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/version': {
      $post:
        | { input: { json: Version }; output: Version; outputFormat: 'json'; status: 201 }
        | { input: { json: Version }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Version }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Version }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { json: Version }
            output: LimitExceededResponseBean
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rest/api/3/version/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: {
                moveFixIssuesTo?: string | undefined
                moveAffectedIssuesTo?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: {
                moveFixIssuesTo?: string | undefined
                moveAffectedIssuesTo?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                moveFixIssuesTo?: string | undefined
                moveAffectedIssuesTo?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                moveFixIssuesTo?: string | undefined
                moveAffectedIssuesTo?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: Version
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: Version }
            output: Version
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/version/:id/mergeto/:moveIssuesTo': {
      $put:
        | {
            input: { param: { id: string; moveIssuesTo: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string; moveIssuesTo: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; moveIssuesTo: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; moveIssuesTo: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/version/:id/move': {
      $post:
        | {
            input: { param: { id: string } } & { json: VersionMoveBean }
            output: Version
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VersionMoveBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VersionMoveBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: VersionMoveBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/version/:id/relatedIssueCounts': {
      $get:
        | {
            input: { param: { id: string } }
            output: VersionIssueCounts
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/version/:id/relatedwork': {
      $get:
        | {
            input: { param: { id: string } }
            output: VersionRelatedWork[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: VersionRelatedWork
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: VersionRelatedWork
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: VersionRelatedWork }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/version/:id/removeAndSwap': {
      $post:
        | {
            input: { param: { id: string } } & { json: DeleteAndReplaceVersionBean }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: DeleteAndReplaceVersionBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DeleteAndReplaceVersionBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: DeleteAndReplaceVersionBean }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/version/:id/unresolvedIssueCount': {
      $get:
        | {
            input: { param: { id: string } }
            output: VersionUnresolvedIssuesCount
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/version/:versionId/relatedwork/:relatedWorkId': {
      $delete:
        | {
            input: { param: { versionId: string; relatedWorkId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { versionId: string; relatedWorkId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionId: string; relatedWorkId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { versionId: string; relatedWorkId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { versionId: string; relatedWorkId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/webhook': {
      $delete:
        | { input: { json: ContainerForWebhookIDs }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: ContainerForWebhookIDs }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ContainerForWebhookIDs }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { query: { startAt?: bigint | undefined; maxResults?: number | undefined } }
            output: PageBeanWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { startAt?: bigint | undefined; maxResults?: number | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { startAt?: bigint | undefined; maxResults?: number | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: WebhookRegistrationDetails }
            output: ContainerForRegisteredWebhooks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhookRegistrationDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebhookRegistrationDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/webhook/failed': {
      $get:
        | {
            input: { query: { maxResults?: number | undefined; after?: bigint | undefined } }
            output: FailedWebhooks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined; after?: bigint | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined; after?: bigint | undefined } }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/webhook/refresh': {
      $put:
        | {
            input: { json: ContainerForWebhookIDs }
            output: WebhooksExpirationDate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContainerForWebhookIDs }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ContainerForWebhookIDs }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/workflow/history': {
      $post:
        | {
            input: { json: WorkflowHistoryReadRequest }
            output: WorkflowHistoryReadResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowHistoryReadRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowHistoryReadRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflow/history/list': {
      $post:
        | {
            input: { query: { expand?: string | undefined } } & { json: WorkflowHistoryListRequest }
            output: WorkflowHistoryListResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: WorkflowHistoryListRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: WorkflowHistoryListRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflow/rule/config': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                types: ('postfunction' | 'condition' | 'validator')[]
                keys?: string[] | undefined
                workflowNames?: string[] | undefined
                withTags?: string[] | undefined
                draft?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: PageBeanWorkflowTransitionRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                types: ('postfunction' | 'condition' | 'validator')[]
                keys?: string[] | undefined
                workflowNames?: string[] | undefined
                withTags?: string[] | undefined
                draft?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                types: ('postfunction' | 'condition' | 'validator')[]
                keys?: string[] | undefined
                workflowNames?: string[] | undefined
                withTags?: string[] | undefined
                draft?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                types: ('postfunction' | 'condition' | 'validator')[]
                keys?: string[] | undefined
                workflowNames?: string[] | undefined
                withTags?: string[] | undefined
                draft?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                types: ('postfunction' | 'condition' | 'validator')[]
                keys?: string[] | undefined
                workflowNames?: string[] | undefined
                withTags?: string[] | undefined
                draft?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { json: WorkflowTransitionRulesUpdate }
            output: WorkflowTransitionRulesUpdateErrors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowTransitionRulesUpdate }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WorkflowTransitionRulesUpdate }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WorkflowTransitionRulesUpdate }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/rest/api/3/workflow/rule/config/delete': {
      $put:
        | {
            input: { json: WorkflowsWithTransitionRulesDetails }
            output: WorkflowTransitionRulesUpdateErrors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowsWithTransitionRulesDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WorkflowsWithTransitionRulesDetails }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/workflow/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                workflowName?: string[] | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'created'
                  | '-created'
                  | '+created'
                  | 'updated'
                  | '+updated'
                  | '-updated'
                  | undefined
                isActive?: boolean | undefined
              }
            }
            output: PageBeanWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                workflowName?: string[] | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'created'
                  | '-created'
                  | '+created'
                  | 'updated'
                  | '+updated'
                  | '-updated'
                  | undefined
                isActive?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                workflowName?: string[] | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?:
                  | 'name'
                  | '-name'
                  | '+name'
                  | 'created'
                  | '-created'
                  | '+created'
                  | 'updated'
                  | '+updated'
                  | '-updated'
                  | undefined
                isActive?: boolean | undefined
              }
            }
            output: ErrorCollection
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/api/3/workflow/:entityId': {
      $delete:
        | { input: { param: { entityId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { entityId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { entityId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { entityId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { entityId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/workflow/:workflowId/project/:projectId/issueTypeUsages': {
      $get:
        | {
            input: { param: { workflowId: string; projectId: bigint } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: WorkflowProjectIssueTypeUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string; projectId: bigint } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workflowId: string; projectId: bigint } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { workflowId: string; projectId: bigint } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflow/:workflowId/projectUsages': {
      $get:
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: WorkflowProjectUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflow/:workflowId/workflowSchemes': {
      $get:
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: WorkflowSchemeUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflows': {
      $post:
        | {
            input: { json: WorkflowReadRequest }
            output: WorkflowReadResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WorkflowReadRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkflowReadRequest }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/rest/api/3/workflows/capabilities': {
      $get:
        | {
            input: {
              query: {
                workflowId?: string | undefined
                projectId?: string | undefined
                issueTypeId?: string | undefined
              }
            }
            output: WorkflowCapabilities
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                projectId?: string | undefined
                issueTypeId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                projectId?: string | undefined
                issueTypeId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflows/copy': {
      $post:
        | {
            input: { json: WorkflowCopyRequest }
            output: WorkflowCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WorkflowCopyRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkflowCopyRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: WorkflowCopyRequest }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: WorkflowCopyRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/workflows/create': {
      $post:
        | {
            input: { json: WorkflowCreateRequest }
            output: WorkflowCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WorkflowCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkflowCreateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: WorkflowCreateRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/workflows/create/validation': {
      $post:
        | {
            input: { json: WorkflowCreateValidateRequest }
            output: WorkflowValidationErrorList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowCreateValidateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowCreateValidateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflows/defaultEditor': {
      $get: { input: {}; output: DefaultWorkflowEditorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/rest/api/3/workflows/preview': {
      $post:
        | {
            input: { json: WorkflowPreviewRequest }
            output: WorkflowPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WorkflowPreviewRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkflowPreviewRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: WorkflowPreviewRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/rest/api/3/workflows/search': {
      $get:
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?: string | undefined
                scope?: string | undefined
                isActive?: boolean | undefined
                projectId?: bigint | undefined
              }
            }
            output: WorkflowSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?: string | undefined
                scope?: string | undefined
                isActive?: boolean | undefined
                projectId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                startAt?: bigint | undefined
                maxResults?: number | undefined
                expand?: string | undefined
                queryString?: string | undefined
                orderBy?: string | undefined
                scope?: string | undefined
                isActive?: boolean | undefined
                projectId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflows/update': {
      $post:
        | {
            input: { json: WorkflowUpdateRequest }
            output: WorkflowUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WorkflowUpdateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkflowUpdateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: WorkflowUpdateRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/rest/api/3/workflows/update/validation': {
      $post:
        | {
            input: { json: WorkflowUpdateValidateRequestBean }
            output: WorkflowValidationErrorList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowUpdateValidateRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowUpdateValidateRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflowscheme': {
      $get:
        | {
            input: { query: { startAt?: bigint | undefined; maxResults?: number | undefined } }
            output: PageBeanWorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { startAt?: bigint | undefined; maxResults?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { startAt?: bigint | undefined; maxResults?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: WorkflowScheme }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: WorkflowScheme }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkflowScheme }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: WorkflowScheme }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/workflowscheme/project': {
      $get:
        | {
            input: { query: { projectId: bigint[] } }
            output: ContainerOfWorkflowSchemeAssociations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { projectId: bigint[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { projectId: bigint[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { projectId: bigint[] } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { json: WorkflowSchemeProjectAssociation }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: WorkflowSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: WorkflowSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: WorkflowSchemeProjectAssociation }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/project/switch': {
      $post:
        | {
            input: { json: WorkflowSchemeProjectSwitchBean }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { json: WorkflowSchemeProjectSwitchBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowSchemeProjectSwitchBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: WorkflowSchemeProjectSwitchBean }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/workflowscheme/read': {
      $post:
        | {
            input: { json: WorkflowSchemeReadRequest }
            output: WorkflowSchemeReadResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowSchemeReadRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowSchemeReadRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflowscheme/update': {
      $post:
        | {
            input: { json: WorkflowSchemeUpdateRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowSchemeUpdateRequest }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { json: WorkflowSchemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowSchemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: WorkflowSchemeUpdateRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/rest/api/3/workflowscheme/update/mappings': {
      $post:
        | {
            input: { json: WorkflowSchemeUpdateRequiredMappingsRequest }
            output: WorkflowSchemeUpdateRequiredMappingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowSchemeUpdateRequiredMappingsRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WorkflowSchemeUpdateRequiredMappingsRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/createdraft': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/default': {
      $delete:
        | {
            input: { param: { id: bigint } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: DefaultWorkflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/draft': {
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: WorkflowScheme }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/draft/default': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: DefaultWorkflow
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: DefaultWorkflow }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/draft/issuetype/:issueType': {
      $delete:
        | {
            input: { param: { id: bigint; issueType: string } }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; issueType: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; issueType: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint; issueType: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint; issueType: string } }
            output: IssueTypeWorkflowMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; issueType: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; issueType: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint; issueType: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/draft/publish': {
      $post:
        | {
            input: { param: { id: bigint } } & { query: { validateOnly?: boolean | undefined } } & {
              json: PublishDraftWorkflowScheme
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: bigint } } & { query: { validateOnly?: boolean | undefined } } & {
              json: PublishDraftWorkflowScheme
            }
            output: TaskProgressBeanObject
            outputFormat: 'json'
            status: 303
          }
        | {
            input: { param: { id: bigint } } & { query: { validateOnly?: boolean | undefined } } & {
              json: PublishDraftWorkflowScheme
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { validateOnly?: boolean | undefined } } & {
              json: PublishDraftWorkflowScheme
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { validateOnly?: boolean | undefined } } & {
              json: PublishDraftWorkflowScheme
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { validateOnly?: boolean | undefined } } & {
              json: PublishDraftWorkflowScheme
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/draft/workflow': {
      $delete:
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint } } & { query: { workflowName?: string | undefined } }
            output: IssueTypesWorkflowMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/issuetype/:issueType': {
      $delete:
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: IssueTypeWorkflowMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint; issueType: string } } & {
              query: { returnDraftIfExists?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint; issueType: string } } & { json: IssueTypeWorkflowMapping }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:id/workflow': {
      $delete:
        | {
            input: { param: { id: bigint } } & {
              query: { workflowName: string; updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { workflowName: string; updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: { workflowName: string; updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: { workflowName: string; updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: { workflowName: string; updateDraftIfNeeded?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                workflowName?: string | undefined
                returnDraftIfExists?: boolean | undefined
              }
            }
            output: IssueTypesWorkflowMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                workflowName?: string | undefined
                returnDraftIfExists?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                workflowName?: string | undefined
                returnDraftIfExists?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                workflowName?: string | undefined
                returnDraftIfExists?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: WorkflowScheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { query: { workflowName: string } } & {
              json: IssueTypesWorkflowMapping
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/workflowscheme/:workflowSchemeId/projectUsages': {
      $get:
        | {
            input: { param: { workflowSchemeId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: WorkflowSchemeProjectUsageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowSchemeId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workflowSchemeId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { workflowSchemeId: string } } & {
              query: { nextPageToken?: string | undefined; maxResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rest/api/3/worklog/deleted': {
      $get:
        | {
            input: { query: { since?: bigint | undefined } }
            output: ChangedWorklogs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { since?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/worklog/list': {
      $post:
        | {
            input: { query: { expand?: string | undefined } } & { json: WorklogIdsRequestBean }
            output: Worklog[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: WorklogIdsRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/api/3/worklog/updated': {
      $get:
        | {
            input: { query: { since?: bigint | undefined; expand?: string | undefined } }
            output: ChangedWorklogs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { since?: bigint | undefined; expand?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/rest/atlassian-connect/1/addons/:addonKey/properties': {
      $get:
        | {
            input: { param: { addonKey: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { addonKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { addonKey: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/rest/atlassian-connect/1/app/module/dynamic': {
      $delete:
        | {
            input: { query: { moduleKey?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { moduleKey?: string[] | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
      $get:
        | { input: {}; output: ConnectModules; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 401 }
      $post:
        | { input: { json: ConnectModules }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ConnectModules }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectModules }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/rest/atlassian-connect/1/migration/field': {
      $put:
        | {
            input: { header: { 'Atlassian-Transfer-Id': string } } & {
              json: ConnectCustomFieldValues
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Atlassian-Transfer-Id': string } } & {
              json: ConnectCustomFieldValues
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Atlassian-Transfer-Id': string } } & {
              json: ConnectCustomFieldValues
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/atlassian-connect/1/migration/properties/:entityType': {
      $put:
        | {
            input: {
              param: {
                entityType:
                  | 'IssueProperty'
                  | 'CommentProperty'
                  | 'DashboardItemProperty'
                  | 'IssueTypeProperty'
                  | 'ProjectProperty'
                  | 'UserProperty'
                  | 'WorklogProperty'
                  | 'BoardProperty'
                  | 'SprintProperty'
              }
            } & { header: { 'Atlassian-Transfer-Id': string } } & { json: EntityPropertyDetails[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                entityType:
                  | 'IssueProperty'
                  | 'CommentProperty'
                  | 'DashboardItemProperty'
                  | 'IssueTypeProperty'
                  | 'ProjectProperty'
                  | 'UserProperty'
                  | 'WorklogProperty'
                  | 'BoardProperty'
                  | 'SprintProperty'
              }
            } & { header: { 'Atlassian-Transfer-Id': string } } & { json: EntityPropertyDetails[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                entityType:
                  | 'IssueProperty'
                  | 'CommentProperty'
                  | 'DashboardItemProperty'
                  | 'IssueTypeProperty'
                  | 'ProjectProperty'
                  | 'UserProperty'
                  | 'WorklogProperty'
                  | 'BoardProperty'
                  | 'SprintProperty'
              }
            } & { header: { 'Atlassian-Transfer-Id': string } } & { json: EntityPropertyDetails[] }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/atlassian-connect/1/migration/workflow/rule/search': {
      $post:
        | {
            input: { header: { 'Atlassian-Transfer-Id': string } } & { json: WorkflowRulesSearch }
            output: WorkflowRulesSearchDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Atlassian-Transfer-Id': string } } & { json: WorkflowRulesSearch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Atlassian-Transfer-Id': string } } & { json: WorkflowRulesSearch }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/atlassian-connect/1/migration/:connectKey/:jiraIssueFieldsKey/task': {
      $get:
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } }
            output: TaskProgress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } } & {
              query: { retriggerCompletedMigration?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } } & {
              query: { retriggerCompletedMigration?: boolean | undefined }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } } & {
              query: { retriggerCompletedMigration?: boolean | undefined }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectKey: string; jiraIssueFieldsKey: string } } & {
              query: { retriggerCompletedMigration?: boolean | undefined }
            }
            output: OperationMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/rest/atlassian-connect/1/service-registry': {
      $get:
        | {
            input: { query: { serviceIds: string[] } }
            output: ServiceRegistry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { serviceIds: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { serviceIds: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { serviceIds: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { serviceIds: string[] } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { serviceIds: string[] } }
            output: {}
            outputFormat: string
            status: 501
          }
        | {
            input: { query: { serviceIds: string[] } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/rest/forge/1/app/properties': {
      $get:
        | {
            input: {}
            output: { keys?: { key?: string | undefined; self?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/rest/forge/1/app/properties/:propertyKey': {
      $delete:
        | {
            input: { param: { propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { propertyKey: string } }
            output: { key?: string | undefined; value?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { propertyKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { propertyKey: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { propertyKey: string } }
            output: OperationMessage
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { propertyKey: string } } & { json: { [x: string]: unknown } }
            output: OperationMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { propertyKey: string } } & { json: { [x: string]: unknown } }
            output: OperationMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { propertyKey: string } } & { json: { [x: string]: unknown } }
            output: OperationMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { propertyKey: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { propertyKey: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/rest/internal/api/latest/worklog/bulk': {
      $post:
        | {
            input: { json: BulkWorklogKeyRequestBean }
            output: BulkWorklogKeyResponseBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkWorklogKeyRequestBean }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BulkWorklogKeyRequestBean }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BulkWorklogKeyRequestBean }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
