type AssetsWorkspaceDTO = { workspaceId?: string | undefined }
type PagedDTOAssetsWorkspaceDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: AssetsWorkspaceDTO[] | undefined
}
type I18nErrorMessage = { i18nKey?: string | undefined; parameters?: string[] | undefined }
type ErrorResponse = {
  errorMessage?: string | undefined
  i18nErrorMessage?: I18nErrorMessage | undefined
}
type CustomerCreateDTO = {
  displayName?: string | undefined
  email?: string | undefined
  fullName?: string | undefined
}
type UserDTO = {
  _links?:
    | {
        avatarUrls?: { [x: string]: string } | undefined
        jiraRest?: string | undefined
        self?: string | undefined
      }
    | undefined
  accountId?: string | undefined
  active?: boolean | undefined
  displayName?: string | undefined
  emailAddress?: string | undefined
  key?: string | undefined
  name?: string | undefined
  timeZone?: string | undefined
}
type SoftwareInfoDTO = {
  _links?: { self?: string | undefined } | undefined
  buildChangeSet?: string | undefined
  buildDate?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  isLicensedForUse?: boolean | undefined
  platformVersion?: string | undefined
  version?: string | undefined
}
type InsightWorkspaceDTO = { workspaceId?: string | undefined }
type PagedDTOInsightWorkspaceDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: InsightWorkspaceDTO[] | undefined
}
type ContentDTO = { iframeSrc?: string | undefined }
type ArticleDTO = {
  content?: ContentDTO | undefined
  excerpt?: string | undefined
  source?: { type?: 'confluence' | undefined } | undefined
  title?: string | undefined
}
type PagedDTOArticleDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: ArticleDTO[] | undefined
}
type OrganizationDTO = {
  _links?: { self?: string | undefined } | undefined
  created?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  id?: string | undefined
  name?: string | undefined
  scimManaged?: boolean | undefined
  uuid?: string | undefined
}
type PagedDTOOrganizationDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: OrganizationDTO[] | undefined
}
type OrganizationCreateDTO = { name: string }
type PropertyKey = { key?: string | undefined; self?: string | undefined }
type PropertyKeys = { keys?: PropertyKey[] | undefined }
type EntityProperty = { key?: string | undefined; value?: { [x: string]: unknown } | undefined }
type UsersOrganizationUpdateDTO = {
  accountIds?: string[] | undefined
  organizationId?: number | undefined
  usernames?: string[] | undefined
}
type PagedDTOUserDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: UserDTO[] | undefined
}
type AttachmentDTO = {
  _links?:
    | {
        content?: string | undefined
        jiraRest?: string | undefined
        self?: string | undefined
        thumbnail?: string | undefined
      }
    | undefined
  author?:
    | {
        _links?:
          | {
              avatarUrls?: { [x: string]: string } | undefined
              jiraRest?: string | undefined
              self?: string | undefined
            }
          | undefined
        accountId?: string | undefined
        active?: boolean | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  created?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  filename?: string | undefined
  mimeType?: string | undefined
  size?: bigint | undefined
}
type CommentDTO = {
  _expands?: string[] | undefined
  _links?: { self?: string | undefined } | undefined
  attachments?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: AttachmentDTO[] | undefined
      }
    | undefined
  author?:
    | {
        _links?:
          | {
              avatarUrls?: { [x: string]: string } | undefined
              jiraRest?: string | undefined
              self?: string | undefined
            }
          | undefined
        accountId?: string | undefined
        active?: boolean | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  body?: string | undefined
  created?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  id?: string | undefined
  public?: boolean | undefined
  renderedBody?: { html?: string | undefined } | undefined
}
type CustomerRequestFieldValueDTO = {
  fieldId?: string | undefined
  label?: string | undefined
  renderedValue?: { [x: string]: unknown } | undefined
  value?: { [x: string]: unknown } | undefined
}
type RequestTypeFieldValueDTO = {
  children?: RequestTypeFieldValueDTO[] | undefined
  label?: string | undefined
  value?: string | undefined
}
type RequestTypeFieldDTO = {
  defaultValues?: RequestTypeFieldValueDTO[] | undefined
  description?: string | undefined
  fieldId?: string | undefined
  jiraSchema?:
    | {
        configuration?: { [x: string]: { [x: string]: unknown } } | undefined
        custom?: string | undefined
        customId?: bigint | undefined
        items?: string | undefined
        system?: string | undefined
        type: string
      }
    | undefined
  name?: string | undefined
  presetValues?: string[] | undefined
  required?: boolean | undefined
  validValues?: RequestTypeFieldValueDTO[] | undefined
  visible?: boolean | undefined
}
type SlaInformationCompletedCycleDTO = {
  breachTime?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  breached?: boolean | undefined
  elapsedTime?: { friendly?: string | undefined; millis?: bigint | undefined } | undefined
  goalDuration?: { friendly?: string | undefined; millis?: bigint | undefined } | undefined
  remainingTime?: { friendly?: string | undefined; millis?: bigint | undefined } | undefined
  startTime?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  stopTime?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
}
type SlaInformationDTO = {
  _links?: { self?: string | undefined } | undefined
  completedCycles?: SlaInformationCompletedCycleDTO[] | undefined
  id?: string | undefined
  name?: string | undefined
  ongoingCycle?:
    | {
        breachTime?:
          | {
              epochMillis?: bigint | undefined
              friendly?: string | undefined
              iso8601?: string | undefined
              jira?: string | undefined
            }
          | undefined
        breached?: boolean | undefined
        elapsedTime?: { friendly?: string | undefined; millis?: bigint | undefined } | undefined
        goalDuration?: { friendly?: string | undefined; millis?: bigint | undefined } | undefined
        paused?: boolean | undefined
        remainingTime?: { friendly?: string | undefined; millis?: bigint | undefined } | undefined
        startTime?:
          | {
              epochMillis?: bigint | undefined
              friendly?: string | undefined
              iso8601?: string | undefined
              jira?: string | undefined
            }
          | undefined
        withinCalendarHours?: boolean | undefined
      }
    | undefined
  slaDisplayFormat?: string | undefined
}
type CustomerRequestStatusDTO = {
  status?: string | undefined
  statusCategory?: 'UNDEFINED' | 'NEW' | 'INDETERMINATE' | 'DONE' | undefined
  statusDate?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
}
type CustomerRequestDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        agent?: string | undefined
        jiraRest?: string | undefined
        self?: string | undefined
        web?: string | undefined
      }
    | undefined
  actions?:
    | {
        addAttachment?: { allowed?: boolean | undefined } | undefined
        addComment?: { allowed?: boolean | undefined } | undefined
        addParticipant?: { allowed?: boolean | undefined } | undefined
        removeParticipant?: { allowed?: boolean | undefined } | undefined
      }
    | undefined
  attachments?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: AttachmentDTO[] | undefined
      }
    | undefined
  comments?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: CommentDTO[] | undefined
      }
    | undefined
  createdDate?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  currentStatus?:
    | {
        status?: string | undefined
        statusCategory?: 'UNDEFINED' | 'NEW' | 'INDETERMINATE' | 'DONE' | undefined
        statusDate?:
          | {
              epochMillis?: bigint | undefined
              friendly?: string | undefined
              iso8601?: string | undefined
              jira?: string | undefined
            }
          | undefined
      }
    | undefined
  issueId?: string | undefined
  issueKey?: string | undefined
  participants?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: UserDTO[] | undefined
      }
    | undefined
  reporter?:
    | {
        _links?:
          | {
              avatarUrls?: { [x: string]: string } | undefined
              jiraRest?: string | undefined
              self?: string | undefined
            }
          | undefined
        accountId?: string | undefined
        active?: boolean | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  requestFieldValues?: CustomerRequestFieldValueDTO[] | undefined
  requestType?:
    | {
        _expands?: string[] | undefined
        _links?: { self?: string | undefined } | undefined
        canCreateRequest?: boolean | undefined
        description?: string | undefined
        fields?:
          | {
              canAddRequestParticipants?: boolean | undefined
              canRaiseOnBehalfOf?: boolean | undefined
              requestTypeFields?: RequestTypeFieldDTO[] | undefined
            }
          | undefined
        groupIds?: string[] | undefined
        helpText?: string | undefined
        icon?:
          | {
              _links?: { iconUrls?: { [x: string]: string } | undefined } | undefined
              id?: string | undefined
            }
          | undefined
        id?: string | undefined
        issueTypeId?: string | undefined
        name?: string | undefined
        portalId?: string | undefined
        practice?: string | undefined
        restrictionStatus?: 'OPEN' | 'RESTRICTED' | undefined
        serviceDeskId?: string | undefined
      }
    | undefined
  requestTypeId?: string | undefined
  serviceDesk?:
    | {
        _links?: { self?: string | undefined } | undefined
        id?: string | undefined
        projectId?: string | undefined
        projectKey?: string | undefined
        projectName?: string | undefined
        projectTypeKey?: string | undefined
      }
    | undefined
  serviceDeskId?: string | undefined
  sla?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: SlaInformationDTO[] | undefined
      }
    | undefined
  status?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: CustomerRequestStatusDTO[] | undefined
      }
    | undefined
  summary?: string | undefined
}
type PagedDTOCustomerRequestDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: CustomerRequestDTO[] | undefined
}
type FormAnswer = {
  adf?:
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
    | undefined
  choices?: string[] | undefined
  date?: string | undefined
  files?: string[] | undefined
  text?: string | undefined
  time?: string | undefined
  users?: string[] | undefined
}
type RequestCreateDTO = {
  channel?: string | undefined
  form?: { answers?: { [x: string]: FormAnswer } | undefined } | undefined
  isAdfRequest?: boolean | undefined
  raiseOnBehalfOf?: string | undefined
  requestFieldValues?: { [x: string]: { [x: string]: unknown } } | undefined
  requestParticipants?: string[] | undefined
  requestTypeId?: string | undefined
  serviceDeskId?: string | undefined
}
type FormValidationErrorContextDTO = { id?: string | undefined; type?: string | undefined }
type FormValidationErrorDTO = {
  code?: string | undefined
  context?: FormValidationErrorContextDTO[] | undefined
  detail?: string | undefined
  status?: number | undefined
  title?: string | undefined
}
type FormValidationErrorResponseDTO = {
  errorMessage?: string | undefined
  errors?: FormValidationErrorDTO[] | undefined
  i18nErrorMessage?: { i18nKey?: string | undefined; parameters?: string[] | undefined } | undefined
}
type RequestFieldValidationErrorDTO = { field?: string | undefined; message?: string | undefined }
type RequestValidationResultDTO = {
  errorMessage?: string | undefined
  errorMessages?: string[] | undefined
  fieldErrors?: RequestFieldValidationErrorDTO[] | undefined
  formErrors?: FormValidationErrorDTO[] | undefined
  reasonKey?: string | undefined
  valid?: boolean | undefined
}
type ApproverDTO = {
  approver?:
    | {
        _links?:
          | {
              avatarUrls?: { [x: string]: string } | undefined
              jiraRest?: string | undefined
              self?: string | undefined
            }
          | undefined
        accountId?: string | undefined
        active?: boolean | undefined
        displayName?: string | undefined
        emailAddress?: string | undefined
        key?: string | undefined
        name?: string | undefined
        timeZone?: string | undefined
      }
    | undefined
  approverDecision?: 'approved' | 'declined' | 'pending' | undefined
}
type ApprovalDTO = {
  _links?: { self?: string | undefined } | undefined
  approvers?: ApproverDTO[] | undefined
  canAnswerApproval?: boolean | undefined
  completedDate?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  createdDate?:
    | {
        epochMillis?: bigint | undefined
        friendly?: string | undefined
        iso8601?: string | undefined
        jira?: string | undefined
      }
    | undefined
  finalDecision?: 'approved' | 'declined' | 'pending' | undefined
  id?: string | undefined
  name?: string | undefined
}
type PagedDTOApprovalDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: ApprovalDTO[] | undefined
}
type ApprovalDecisionRequestDTO = { decision?: 'approve' | 'decline' | undefined }
type PagedDTOAttachmentDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: AttachmentDTO[] | undefined
}
type AttachmentCreateDTO = {
  additionalComment?: { body?: string | undefined } | undefined
  public?: boolean | undefined
  temporaryAttachmentIds?: string[] | undefined
}
type AttachmentCreateResultDTO = {
  attachments?:
    | {
        _expands?: string[] | undefined
        _links?:
          | {
              base?: string | undefined
              context?: string | undefined
              next?: string | undefined
              prev?: string | undefined
              self?: string | undefined
            }
          | undefined
        isLastPage?: boolean | undefined
        limit?: number | undefined
        size?: number | undefined
        start?: number | undefined
        values?: AttachmentDTO[] | undefined
      }
    | undefined
  comment?:
    | {
        _expands?: string[] | undefined
        _links?: { self?: string | undefined } | undefined
        attachments?:
          | {
              _expands?: string[] | undefined
              _links?:
                | {
                    base?: string | undefined
                    context?: string | undefined
                    next?: string | undefined
                    prev?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              isLastPage?: boolean | undefined
              limit?: number | undefined
              size?: number | undefined
              start?: number | undefined
              values?: AttachmentDTO[] | undefined
            }
          | undefined
        author?:
          | {
              _links?:
                | {
                    avatarUrls?: { [x: string]: string } | undefined
                    jiraRest?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              accountId?: string | undefined
              active?: boolean | undefined
              displayName?: string | undefined
              emailAddress?: string | undefined
              key?: string | undefined
              name?: string | undefined
              timeZone?: string | undefined
            }
          | undefined
        body?: string | undefined
        created?:
          | {
              epochMillis?: bigint | undefined
              friendly?: string | undefined
              iso8601?: string | undefined
              jira?: string | undefined
            }
          | undefined
        id?: string | undefined
        public?: boolean | undefined
        renderedBody?: { html?: string | undefined } | undefined
      }
    | undefined
}
type PagedDTOCommentDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: CommentDTO[] | undefined
}
type CommentCreateDTO = { body?: string | undefined; public?: boolean | undefined }
type RequestNotificationSubscriptionDTO = { subscribed?: boolean | undefined }
type RequestParticipantUpdateDTO = {
  accountIds?: string[] | undefined
  usernames?: string[] | undefined
}
type PagedDTOSlaInformationDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: SlaInformationDTO[] | undefined
}
type PagedDTOCustomerRequestStatusDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: CustomerRequestStatusDTO[] | undefined
}
type CustomerTransitionDTO = { id?: string | undefined; name?: string | undefined }
type PagedDTOCustomerTransitionDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: CustomerTransitionDTO[] | undefined
}
type CustomerTransitionExecutionDTO = {
  additionalComment?: { body?: string | undefined } | undefined
  id?: string | undefined
}
type CSATFeedbackFullDTO = {
  comment?: { body?: string | undefined } | undefined
  rating?: number | undefined
  type?: string | undefined
}
type RequestTypeDTO = {
  _expands?: string[] | undefined
  _links?: { self?: string | undefined } | undefined
  canCreateRequest?: boolean | undefined
  description?: string | undefined
  fields?:
    | {
        canAddRequestParticipants?: boolean | undefined
        canRaiseOnBehalfOf?: boolean | undefined
        requestTypeFields?: RequestTypeFieldDTO[] | undefined
      }
    | undefined
  groupIds?: string[] | undefined
  helpText?: string | undefined
  icon?:
    | {
        _links?: { iconUrls?: { [x: string]: string } | undefined } | undefined
        id?: string | undefined
      }
    | undefined
  id?: string | undefined
  issueTypeId?: string | undefined
  name?: string | undefined
  portalId?: string | undefined
  practice?: string | undefined
  restrictionStatus?: 'OPEN' | 'RESTRICTED' | undefined
  serviceDeskId?: string | undefined
}
type PagedDTORequestTypeDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: RequestTypeDTO[] | undefined
}
type ServiceDeskDTO = {
  _links?: { self?: string | undefined } | undefined
  id?: string | undefined
  projectId?: string | undefined
  projectKey?: string | undefined
  projectName?: string | undefined
  projectTypeKey?: string | undefined
}
type PagedDTOServiceDeskDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: ServiceDeskDTO[] | undefined
}
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
type ServiceDeskCustomerDTO = {
  accountIds?: string[] | undefined
  usernames?: string[] | undefined
}
type ServiceDeskCustomerInviteDTO = { displayName?: string | undefined; email?: string | undefined }
type OrganizationServiceDeskUpdateDTO = {
  organizationId: number
  serviceDeskId?: string | undefined
}
type QueueDTO = {
  _links?: { self?: string | undefined } | undefined
  fields?: string[] | undefined
  id?: string | undefined
  issueCount?: bigint | undefined
  jql?: string | undefined
  name?: string | undefined
}
type PagedDTOQueueDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: QueueDTO[] | undefined
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
type IncludedFields = {
  actuallyIncluded?: string[] | undefined
  excluded?: string[] | undefined
  included?: string[] | undefined
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
type LinkGroup = {
  groups?: LinkGroup[] | undefined
  header?: SimpleLink | undefined
  id?: string | undefined
  links?: SimpleLink[] | undefined
  styleClass?: string | undefined
  weight?: number | undefined
}
type JsonTypeBean = {
  configuration?: { [x: string]: { [x: string]: unknown } } | undefined
  custom?: string | undefined
  customId?: bigint | undefined
  items?: string | undefined
  system?: string | undefined
  type: string
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
type PagedDTOIssueBean = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: IssueBean[] | undefined
}
type RequestTypeCreateDTO = {
  description?: string | undefined
  helpText?: string | undefined
  issueTypeId?: string | undefined
  name?: string | undefined
}
type RequestTypePermissionCheckRequestDTO = {
  accountId?: string | undefined
  permissions?: ('canCreateRequest' | 'canAdminister')[] | undefined
  requestTypeIds?: number[] | undefined
}
type RequestTypePermissionCheckResponse = {
  canAdminister?: number[] | undefined
  canCreateRequest?: number[] | undefined
}
type CustomerRequestCreateMetaDTO = {
  canAddRequestParticipants?: boolean | undefined
  canRaiseOnBehalfOf?: boolean | undefined
  requestTypeFields?: RequestTypeFieldDTO[] | undefined
}
type RequestTypeGroupDTO = { id?: string | undefined; name?: string | undefined }
type PagedDTORequestTypeGroupDTO = {
  _expands?: string[] | undefined
  _links?:
    | {
        base?: string | undefined
        context?: string | undefined
        next?: string | undefined
        prev?: string | undefined
        self?: string | undefined
      }
    | undefined
  isLastPage?: boolean | undefined
  limit?: number | undefined
  size?: number | undefined
  start?: number | undefined
  values?: RequestTypeGroupDTO[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/rest/servicedeskapi/assets/workspace': {
      $get:
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: PagedDTOAssetsWorkspaceDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/customer': {
      $post:
        | {
            input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
              json: CustomerCreateDTO
            }
            output: UserDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
              json: CustomerCreateDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
              json: CustomerCreateDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
              json: CustomerCreateDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
              json: CustomerCreateDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
              json: CustomerCreateDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/customer/skip-permission-check': {
      $post: {
        input: { query: { strictConflictStatusCode?: boolean | undefined } } & {
          json: CustomerCreateDTO
        }
        output: UserDTO
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/rest/servicedeskapi/customer/user/:accountId/revoke-portal-only-access': {
      $put:
        | {
            input: { param: { accountId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/info': {
      $get:
        | { input: {}; output: SoftwareInfoDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/rest/servicedeskapi/insight/workspace': {
      $get:
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: PagedDTOInsightWorkspaceDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/knowledgebase/article': {
      $get:
        | {
            input: {
              query: {
                query: string
                highlight: boolean
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: PagedDTOArticleDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                highlight: boolean
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query: string
                highlight: boolean
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                query: string
                highlight: boolean
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                query: string
                highlight: boolean
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/knowledgebase/article/view/:pageId': {
      $get: {
        input: { param: { pageId: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rest/servicedeskapi/organization': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: PagedDTOOrganizationDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: OrganizationCreateDTO }
            output: OrganizationDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: OrganizationCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrganizationCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: OrganizationCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrganizationCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/organization/:organizationId': {
      $delete:
        | {
            input: { param: { organizationId: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: number } }
            output: OrganizationDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/organization/:organizationId/property': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/organization/:organizationId/property/:propertyKey': {
      $delete:
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; propertyKey: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/organization/:organizationId/user': {
      $delete:
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: number } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOUserDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: number } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: number } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: number } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: number } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: number } } & { json: UsersOrganizationUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request': {
      $get:
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                requestOwnership?: string[] | undefined
                requestStatus?: string | undefined
                approvalStatus?: string | undefined
                organizationId?: number | undefined
                serviceDeskId?: number | undefined
                requestTypeId?: number | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: PagedDTOCustomerRequestDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                requestOwnership?: string[] | undefined
                requestStatus?: string | undefined
                approvalStatus?: string | undefined
                organizationId?: number | undefined
                serviceDeskId?: number | undefined
                requestTypeId?: number | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                requestOwnership?: string[] | undefined
                requestStatus?: string | undefined
                approvalStatus?: string | undefined
                organizationId?: number | undefined
                serviceDeskId?: number | undefined
                requestTypeId?: number | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                requestOwnership?: string[] | undefined
                requestStatus?: string | undefined
                approvalStatus?: string | undefined
                organizationId?: number | undefined
                serviceDeskId?: number | undefined
                requestTypeId?: number | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: RequestCreateDTO }
            output: CustomerRequestDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RequestCreateDTO }
            output: FormValidationErrorResponseDTO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/validate': {
      $post:
        | {
            input: { json: RequestCreateDTO }
            output: RequestValidationResultDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RequestCreateDTO }
            output: RequestValidationResultDTO
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RequestCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: CustomerRequestDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/approval': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOApprovalDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/approval/:approvalId': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } }
            output: ApprovalDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ApprovalDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { issueIdOrKey: string; approvalId: number } } & {
              json: ApprovalDecisionRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & { query: { start: number; limit: number } }
            output: PagedDTOAttachmentDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { start: number; limit: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { start: number; limit: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { start: number; limit: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { query: { start: number; limit: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: AttachmentCreateDTO }
            output: AttachmentCreateResultDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: AttachmentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: AttachmentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: AttachmentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: AttachmentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: AttachmentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment/:attachmentId': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/attachment/:attachmentId/thumbnail': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; attachmentId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/comment': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                public?: boolean | undefined
                internal?: boolean | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: PagedDTOCommentDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                public?: boolean | undefined
                internal?: boolean | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                public?: boolean | undefined
                internal?: boolean | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: {
                public?: boolean | undefined
                internal?: boolean | undefined
                expand?: string[] | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: CommentCreateDTO }
            output: CommentDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CommentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CommentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CommentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CommentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CommentCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { expand?: string[] | undefined }
            }
            output: CommentDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/comment/:commentId/attachment': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOAttachmentDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; commentId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/notification': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } }
            output: RequestNotificationSubscriptionDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { issueIdOrKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/participant': {
      $delete:
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: PagedDTOUserDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOUserDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: PagedDTOUserDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: RequestParticipantUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/sla': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOSlaInformationDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/sla/:slaMetricId': {
      $get:
        | {
            input: { param: { issueIdOrKey: string; slaMetricId: bigint } }
            output: SlaInformationDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string; slaMetricId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string; slaMetricId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string; slaMetricId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string; slaMetricId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/status': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOCustomerRequestStatusDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:issueIdOrKey/transition': {
      $get:
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOCustomerTransitionDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { issueIdOrKey: string } } & { json: CustomerTransitionExecutionDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CustomerTransitionExecutionDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CustomerTransitionExecutionDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CustomerTransitionExecutionDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CustomerTransitionExecutionDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issueIdOrKey: string } } & { json: CustomerTransitionExecutionDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/request/:requestIdOrKey/feedback': {
      $delete:
        | {
            input: { param: { requestIdOrKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { requestIdOrKey: string } }
            output: CSATFeedbackFullDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { requestIdOrKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { requestIdOrKey: string } } & { json: CSATFeedbackFullDTO }
            output: CSATFeedbackFullDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { requestIdOrKey: string } } & { json: CSATFeedbackFullDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { requestIdOrKey: string } } & { json: CSATFeedbackFullDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestIdOrKey: string } } & { json: CSATFeedbackFullDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { requestIdOrKey: string } } & { json: CSATFeedbackFullDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { requestIdOrKey: string } } & { json: CSATFeedbackFullDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/requesttype': {
      $get:
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                serviceDeskId?: number[] | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: string[] | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: PagedDTORequestTypeDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                serviceDeskId?: number[] | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: string[] | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                searchQuery?: string | undefined
                serviceDeskId?: number[] | undefined
                start?: number | undefined
                limit?: number | undefined
                expand?: string[] | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk': {
      $get:
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: PagedDTOServiceDeskDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId': {
      $get:
        | {
            input: { param: { serviceDeskId: string } }
            output: ServiceDeskDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/attachTemporaryFile': {
      $post:
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { serviceDeskId: string } } & { form: MultipartFile[] }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer': {
      $delete:
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: PagedDTOUserDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer/invite': {
      $post:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { strictConflictStatusCode?: boolean | undefined }
            } & { json: ServiceDeskCustomerInviteDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/customer/skip-permission-check': {
      $post: {
        input: { param: { serviceDeskId: string } } & { json: ServiceDeskCustomerDTO }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/knowledgebase/article': {
      $get:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query: string
                highlight?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: PagedDTOArticleDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query: string
                highlight?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query: string
                highlight?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query: string
                highlight?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                query: string
                highlight?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
                cursor?: string | undefined
                prev?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/organization': {
      $delete:
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: PagedDTOOrganizationDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                start?: number | undefined
                limit?: number | undefined
                accountId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: OrganizationServiceDeskUpdateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue': {
      $get:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                includeCount?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: PagedDTOQueueDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                includeCount?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                includeCount?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                includeCount?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                includeCount?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId': {
      $get:
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { includeCount?: boolean | undefined }
            }
            output: QueueDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { includeCount?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { includeCount?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { includeCount?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { includeCount?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/queue/:queueId/issue': {
      $get:
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTOIssueBean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; queueId: bigint } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype': {
      $get:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                groupId?: number | undefined
                expand?: string[] | undefined
                searchQuery?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: PagedDTORequestTypeDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                groupId?: number | undefined
                expand?: string[] | undefined
                searchQuery?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                groupId?: number | undefined
                expand?: string[] | undefined
                searchQuery?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                groupId?: number | undefined
                expand?: string[] | undefined
                searchQuery?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: {
                groupId?: number | undefined
                expand?: string[] | undefined
                searchQuery?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                includeHiddenRequestTypesInSearch?: boolean | undefined
                restrictionStatus?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { serviceDeskId: string } } & { json: RequestTypeCreateDTO }
            output: RequestTypeDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: RequestTypeCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: RequestTypeCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: RequestTypeCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: RequestTypeCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & { json: RequestTypeCreateDTO }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/permissions/check': {
      $post:
        | {
            input: { param: { serviceDeskId: string } } & {
              json: RequestTypePermissionCheckRequestDTO
            }
            output: RequestTypePermissionCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              json: RequestTypePermissionCheckRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              json: RequestTypePermissionCheckRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              json: RequestTypePermissionCheckRequestDTO
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId': {
      $delete:
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { serviceDeskId: string; requestTypeId: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: RequestTypeDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: string } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/field': {
      $get:
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } } & {
              query: { expand?: string[] | undefined }
            }
            output: CustomerRequestCreateMetaDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number } } & {
              query: { expand?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property': {
      $get:
        | {
            input: { param: { requestTypeId: number; serviceDeskId: string } }
            output: PropertyKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requestTypeId: number; serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { requestTypeId: number; serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestTypeId: number; serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { requestTypeId: number; serviceDeskId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttype/:requestTypeId/property/:propertyKey': {
      $delete:
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: EntityProperty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string; requestTypeId: number; propertyKey: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rest/servicedeskapi/servicedesk/:serviceDeskId/requesttypegroup': {
      $get:
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: PagedDTORequestTypeGroupDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceDeskId: string } } & {
              query: { start?: number | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
