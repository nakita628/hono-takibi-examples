type PasswordResetRequest = { username: string }
type SimpleMessageResponse = { message: string }
type ApiError = {
  code:
    | 'ERR_REGISTRATION_VERIFICATION_NO_TOKEN'
    | 'ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN'
    | 'ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN'
    | 'ERR_AUTHENTICATION_NO_TOKEN'
    | 'ERR_AUTHENTICATION_INVALID_TOKEN'
    | 'ERR_AUTHENTICATION_EXPIRED_TOKEN'
    | 'ERR_AUTHENTICATION_FAILED'
    | 'ERR_AUTHORIZATION_MISSING_PRIVILEGES'
    | 'ERR_AUTHORIZATION_FORBIDDEN'
    | 'ERR_AUTHORIZATION_REQUIRE_USER'
    | 'ERR_INPUT_VALIDATION_FAILED'
    | 'ERR_FIELD_INPUT_VALIDATION_FAILED'
    | 'ERR_VALIDATION_CONSTRAINT_FAILED'
    | 'ERR_INPUT_NOT_READABLE'
    | 'ERR_INVALID_INPUT_PARAMETER'
    | 'ERR_GUID_CREATION'
    | 'ERR_INVALID_ID4N_OBJECT_TYPE'
    | 'ERR_MISSING_BILLING_INFORMATION'
    | 'ERR_COLLECTION_UPDATE_DENIED'
    | 'ERR_ENTITY_NOT_FOUND'
    | 'ERR_ENTITY_TOO_BIG'
    | 'ERR_DUPLICATE'
    | 'ERR_INTERNAL'
    | 'ERR_UNKNOWN'
    | 'ERR_INVALID_ORGANIZATION_USERROLE'
    | 'ERR_ORGANIZATION_ROLE_INCONSISTENCY'
    | 'ERR_ORGANIZATION_NOT_DELETABLE'
    | 'ERR_USER_ALREADY_IN_ORGANIZATION'
    | 'ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE'
    | 'ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME'
    | 'ERR_USER_DEACTIVATED'
    | 'ERR_LANGUAGE_NOT_SUPPORTED'
    | 'ERR_EMAIL_MISSING_TEMPLATE_PARAM'
    | 'ERR_EMAIL_TEMPLATE_NOT_AVAILABLE'
    | 'ERR_EMAIL_PREPARATION_FAILED'
    | 'ERR_IMAGE_CONVERSION'
    | 'ERR_UPLOAD_TOO_LARGE'
    | 'ERR_INVALID_ALIAS_TYPE'
    | 'ERR_INVALID_URI_TEMPLATE'
    | 'ERR_INVALID_URI_TEMPLATE_VARIABLE'
    | 'ERR_INVALID_NAMESPACE'
    | 'ERR_INVALID_PROPERTY_KEY'
    | 'ERR_INVALID_FILTER'
    | 'ERR_NAMESPACE_ALREADY_EXISTS'
    | 'ERR_INSECURE_PASSWORD'
    | 'ERR_TRANSFER_DENIED'
    | 'ERR_INVALID_PHYSICAL_STATE'
    | 'ERR_INVALID_HISTORY_PROPERTY_NAMESPACE'
    | 'ERR_INVALID_HISTORY_PROPERTY_VALUE'
    | 'ERR_ORGA_CANNOT_BE_OWN_PARTNER'
    | 'ERR_INVALID_GS1_CODE'
    | 'ERR_INVALID_GS1_CHAR_IN_CODE'
    | 'ERR_INVALID_GS1_CODE_NOT_UNIQUE'
    | 'ERR_INVALID_GS1_GTIN'
    | 'ERR_GS1_CODE_CURRENTLY_UNSUPPORTED'
  errorId: string
  errorList: ApiError[]
  message: string
}
type PasswordResetVerificationRequest = { password: string; token: string }
type UserRegistrationRequest = { email: string; password: string; username: string }
type UserRegistrationResponse = {
  email?: string | undefined
  id: bigint
  message?: string | undefined
  username?: string | undefined
}
type CompleteUserRegistrationRequest = {
  password: string
  username: string
  verificationToken: string
}
type RegistrationVerificationTokenPresentation = { token: string }
type ApiKeyPresentation = {
  active: boolean
  createdAt: bigint
  createdBy: string
  key: string
  label: string
  organizationId: string
}
type PaginatedResponseOfApiKeyPresentation = {
  elements: ApiKeyPresentation[]
  limit: number
  offset: number
  total?: number | undefined
}
type ApiKeyCreationRequest = { label: string; organizationId: string; secret: string }
type ApiKeyPrivilegeInfo = {
  allowsBillableOperations?: boolean | undefined
  helpText?: string | undefined
  id4nAssociated: boolean
  name: string
}
type PaginatedResponseOfApiKeyPrivilegeInfo = {
  elements: ApiKeyPrivilegeInfo[]
  limit: number
  offset: number
  total?: number | undefined
}
type ApiKeyChangeRequest = { active?: boolean | undefined; newLabel: string }
type RemoveApiKeyPrivilegeRequest = { privilege: string }
type ApiKeyPrivilege = { id4nAssociated: boolean; privilege: string }
type PaginatedResponseOfApiKeyPrivilege = {
  elements: ApiKeyPrivilege[]
  limit: number
  offset: number
  total?: number | undefined
}
type AddApiKeyPrivilegeRequest = { privilege: string }
type ListOfId4ns = { id4ns?: string[] | undefined }
type Id4nPresentation = {
  createdTimestamp?: bigint | undefined
  holderOrganizationId?: string | undefined
  id4n?: string | undefined
  label?: string | undefined
  ownerOrganizationId?: string | undefined
  properties?: { [x: string]: string } | undefined
  type?: 'GUID' | 'ROUTING_COLLECTION' | 'LOGISTIC_COLLECTION' | 'LABELLED_COLLECTION' | undefined
}
type PaginatedResponseOfId4nPresentation = {
  elements: Id4nPresentation[]
  limit: number
  offset: number
  total?: number | undefined
}
type ServiceCosts = { listing: { [x: string]: number } }
type BillingPosition = {
  amount: bigint
  count: number
  description: string
  service: string
  singlePrice: number
  sum: number
  unit: string
}
type ChangeLogEntry = {
  id?: string | undefined
  message?: string | undefined
  messageProperties?: { [x: string]: { [x: string]: unknown } } | undefined
  timestamp?: bigint | undefined
}
type PaginatedResponseOfChangeLogEntry = {
  elements: ChangeLogEntry[]
  limit: number
  offset: number
  total?: number | undefined
}
type CreateCollectionRequest = {
  label?: string | undefined
  length: number
  organizationId: string
  type: 'ROUTING_COLLECTION' | 'LOGISTIC_COLLECTION' | 'LABELLED_COLLECTION'
}
type Id4n = { id4n?: string | undefined }
type GuidCollection = {
  createdTimestamp?: bigint | undefined
  holderOrganizationId?: string | undefined
  id4n?: string | undefined
  label?: string | undefined
  ownerOrganizationId?: string | undefined
  physicalState?: 'UNATTACHED' | 'ATTACHED' | 'DETACHED' | undefined
  type?: 'ROUTING_COLLECTION' | 'LOGISTIC_COLLECTION' | 'LABELLED_COLLECTION' | undefined
}
type Guid = {
  createdTimestamp?: bigint | undefined
  holderOrganizationId?: string | undefined
  id4n?: string | undefined
  ownerOrganizationId?: string | undefined
  physicalState?: 'UNATTACHED' | 'ATTACHED' | 'DETACHED' | undefined
  properties?: { [x: string]: string } | undefined
}
type PaginatedResponseOfGuid = {
  elements: Guid[]
  limit: number
  offset: number
  total?: number | undefined
}
type Country = { code: string; name: string }
type PaginatedResponseOfCountry = {
  elements: Country[]
  limit: number
  offset: number
  total?: number | undefined
}
type Visibility = { public?: boolean | undefined; sharedOrganizationIds?: string[] | undefined }
type Document = {
  filename?: string | undefined
  mimeType?: string | undefined
  ownerOrganizationId?: string | undefined
  visibility?: Visibility | undefined
}
type PaginatedResponseOfDocument = {
  elements: Document[]
  limit: number
  offset: number
  total?: number | undefined
}
type VisibilityUpdate = {
  public?: boolean | undefined
  sharedWithOrganizationIds?: string[] | undefined
}
type DocumentUpdate = {
  filename?: string | undefined
  mimeType?: string | undefined
  visibility?: VisibilityUpdate | undefined
}
type CreateGuidRequest = { count: number; length: number; organizationId: string }
type HistoryItem = {
  additionalProperties?: { [x: string]: string } | undefined
  organizationId: string
  ownerOrganizationId?: string | undefined
  sequenceId?: number | undefined
  timestamp?: bigint | undefined
  type:
    | 'CREATED'
    | 'DESTROYED'
    | 'RECYCLED'
    | 'SHIPMENT_PREPARED'
    | 'STORED'
    | 'RETRIEVED_FROM_STORAGE'
    | 'PACKAGED'
    | 'DISPATCHED'
    | 'RECEIVED'
    | 'DELIVERY_REFUSED'
    | 'REPROCESSING_STARTED'
    | 'REPROCESSING_STEP_STARTED'
    | 'REPROCESSING_STEP_CANCELLED'
    | 'REPROCESSING_STEP_FINISHED'
    | 'REPROCESSING_CANCELLED'
    | 'REPROCESSING_FINISHED'
    | 'DISASSEMBLED'
    | 'MAINTENANCE_STARTED'
    | 'MAINTENANCE_STEP_STARTED'
    | 'MAINTENANCE_STEP_CANCELLED'
    | 'MAINTENANCE_STEP_FINISHED'
    | 'MAINTENANCE_CANCELLED'
    | 'MAINTENANCE_FINISHED'
    | 'PRODUCTION_STARTED'
    | 'PRODUCTION_CANCELLED'
    | 'PRODUCTION_FINISHED'
    | 'PRODUCTION_STEP_STARTED'
    | 'PRODUCTION_STEP_CANCELLED'
    | 'PRODUCTION_STEP_FINISHED'
    | 'QUALITY_CHECK_PERFORMED'
  visibility?: Visibility | undefined
}
type PaginatedResponseOfHistoryItem = {
  elements: HistoryItem[]
  limit: number
  offset: number
  total?: number | undefined
}
type HistoryItemUpdate = {
  organizationId?: string | undefined
  visibility?: Visibility | undefined
}
type GuidAlias = { alias: string }
type PaginatedResponseOfGuidCollection = {
  elements: GuidCollection[]
  limit: number
  offset: number
  total?: number | undefined
}
type ListOfGS1s = { codes?: string[] | undefined }
type ImportGS1CodesRequest = { listOfGS1s: ListOfGS1s; organizationId: string }
type AppInfoPresentation = {
  branch?: string | undefined
  commitTime?: string | undefined
  name?: string | undefined
  productionMode?: boolean | undefined
  revision?: string | undefined
  version?: string | undefined
}
type Id4nProperties = {
  id4n?: string | undefined
  properties?: { [x: string]: string } | undefined
}
type ListOfId4nProperties = { list?: Id4nProperties[] | undefined }
type Organization = {
  id?: bigint | undefined
  logoURL?: string | undefined
  name: string
  namespace: string
}
type OrganizationUpdate = { name?: string | undefined }
type OrganizationAddress = {
  city: string
  companyName?: string | undefined
  countryCode: string
  countryName?: string | undefined
  firstname: string
  lastname: string
  postCode: string
  street: string
  telephone?: string | undefined
}
type PublicImagePresentation = { uri?: string | undefined }
type QueuePresentation = { active: boolean; id: string; waitingMessages?: bigint | undefined }
type QueueUpdateRequest = {
  active?: boolean | undefined
  id?: string | undefined
  purgeQueue?: boolean | undefined
}
type SendCustomMessage = { data: { [x: string]: string }; name: string }
type RemovePartnerRequest = { organizationId: string }
type PartnerOrganization = {
  logoURL?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
}
type PaginatedResponseOfPartnerOrganization = {
  elements: PartnerOrganization[]
  limit: number
  offset: number
  total?: number | undefined
}
type AddPartnerRequest = { organizationId: string }
type UserPresentation = { id?: string | undefined; name?: string | undefined }
type UserRoles = { roles?: string[] | undefined; user?: UserPresentation | undefined }
type PaginatedResponseOfUserRoles = {
  elements: UserRoles[]
  limit: number
  offset: number
  total?: number | undefined
}
type PaginatedResponseOfUserPresentation = {
  elements: UserPresentation[]
  limit: number
  offset: number
  total?: number | undefined
}
type OrganizationUserInvitation = {
  email?: string | undefined
  roles: string[]
  userName?: string | undefined
}
type OrganizationUserInvitationListRequest = { invitations: OrganizationUserInvitation[] }
type ChangeRoleRequest = { roles?: string[] | undefined }
type PaginatedResponseOfstring = {
  elements: string[]
  limit: number
  offset: number
  total?: number | undefined
}
type Route = {
  params: { [x: string]: string }
  priority?: number | undefined
  public: boolean
  type: string
  validUntil?: bigint | undefined
}
type Role = { name?: string | undefined; privileges?: string[] | undefined }
type PaginatedResponseOfRole = {
  elements: Role[]
  limit: number
  offset: number
  total?: number | undefined
}
type RoutingOptions = { deleteOutdatedRoutes?: boolean | undefined }
type RoutingFile = { options?: RoutingOptions | undefined; routes: Route[] }
type RoutingFileRequest = { organizationId?: string | undefined; routing: RoutingFile }
type TransferReceiveInfo = { organizationId: string }
type TransferSendInfo = {
  holderOrganizationId?: string | undefined
  keepOwnership: boolean
  openForClaims: boolean
  ownerOrganizationId?: string | undefined
  recipientOrganizationIds: string[]
}
type PaginatedResponseOfOrganization = {
  elements: Organization[]
  limit: number
  offset: number
  total?: number | undefined
}
type AccountCredentials = { login?: string | undefined; password?: string | undefined }
type WhoIsResponse = {
  aliases?: { [x: string]: string } | undefined
  organization?: Organization | undefined
  organizationAddress?: OrganizationAddress | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account/password': {
      $post:
        | {
            input: { json: PasswordResetRequest }
            output: SimpleMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordResetRequest }
            output: SimpleMessageResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: PasswordResetRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: PasswordResetRequest }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: PasswordResetRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { json: PasswordResetVerificationRequest }
            output: SimpleMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: SimpleMessageResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: PasswordResetVerificationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/account/registration': {
      $post:
        | {
            input: { json: UserRegistrationRequest }
            output: UserRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserRegistrationRequest }
            output: UserRegistrationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: UserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: UserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CompleteUserRegistrationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/account/verification': {
      $post:
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: RegistrationVerificationTokenPresentation }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/apikeys': {
      $get:
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfApiKeyPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfApiKeyPresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiKeyPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiKeyPresentation
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: ApiKeyCreationRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: ApiKeyCreationRequest }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ApiKeyCreationRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/apikeys/privileges': {
      $get:
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfApiKeyPrivilegeInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfApiKeyPrivilegeInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                id4nConcerning?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/apikeys/:key': {
      $delete:
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 400 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 400 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 401 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 401 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 403 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 403 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 404 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 404 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 500 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 500 }
      $get:
        | {
            input: { param: { key: string } }
            output: ApiKeyPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ApiKeyPresentation
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 401 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 401 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 403 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 403 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 404 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 404 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 405 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 405 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 406 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 406 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 415 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 415 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'json'; status: 500 }
        | { input: { param: { key: string } }; output: ApiError; outputFormat: 'text'; status: 500 }
      $put:
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string } } & { json: ApiKeyChangeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/apikeys/:key/privileges': {
      $delete:
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string } } & { json: RemoveApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfApiKeyPrivilege
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfApiKeyPrivilege
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string } } & { json: AddApiKeyPrivilegeRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/apikeys/:key/privileges/:privilege/id4ns': {
      $delete:
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfId4nPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfId4nPresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string; privilege: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { key: string; privilege: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/billing/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ServiceCosts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ServiceCosts
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/billing/:organizationId/positions': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: BillingPosition[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: BillingPosition[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { fromDate?: string | undefined; toDate?: string | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/changelog/organization/:organizationId/': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfChangeLogEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfChangeLogEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                messageMimeType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/collections': {
      $post:
        | {
            input: { json: CreateCollectionRequest }
            output: Id4n
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateCollectionRequest }
            output: Id4n
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateCollectionRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: CreateCollectionRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateCollectionRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/collections/:id4n': {
      $delete:
        | { input: { param: { id4n: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id4n: string } }
            output: GuidCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } }
            output: GuidCollection
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id4n: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { id4n: string } } & { json: GuidCollection }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: GuidCollection }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: GuidCollection }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id4n: string } } & { json: GuidCollection }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: GuidCollection }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/collections/:id4n/elements': {
      $delete:
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: PaginatedResponseOfGuid
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: PaginatedResponseOfGuid
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                organizationId?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { json: ListOfId4ns }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/countries': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: PaginatedResponseOfCountry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: PaginatedResponseOfCountry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/documents/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/documents/:id4n/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & {
              query: {
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string } } & { form: { content: File } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/documents/:id4n/:organizationId/:fileName': {
      $delete:
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/documents/:id4n/:organizationId/:fileName/metadata': {
      $get:
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } } & {
              json: DocumentUpdate
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } } & {
              json: DocumentUpdate
            }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } } & {
              json: DocumentUpdate
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } } & {
              json: DocumentUpdate
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } } & {
              json: DocumentUpdate
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/guids': {
      $post:
        | {
            input: { json: CreateGuidRequest }
            output: ListOfId4ns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateGuidRequest }
            output: ListOfId4ns
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: CreateGuidRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: CreateGuidRequest }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateGuidRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/guids/withoutCollection': {
      $get:
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfGuid
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfGuid
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                organizationId: string
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/guids/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: Guid
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: Guid
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { id4n: string } } & { json: Guid }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: Guid }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: Guid }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id4n: string } } & { json: Guid }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: Guid }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/history/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfHistoryItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfHistoryItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                includePrivate?: boolean | undefined
                organization?: string | undefined
                type?:
                  | 'CREATED'
                  | 'DESTROYED'
                  | 'RECYCLED'
                  | 'SHIPMENT_PREPARED'
                  | 'STORED'
                  | 'RETRIEVED_FROM_STORAGE'
                  | 'PACKAGED'
                  | 'DISPATCHED'
                  | 'RECEIVED'
                  | 'DELIVERY_REFUSED'
                  | 'REPROCESSING_STARTED'
                  | 'REPROCESSING_STEP_STARTED'
                  | 'REPROCESSING_STEP_CANCELLED'
                  | 'REPROCESSING_STEP_FINISHED'
                  | 'REPROCESSING_CANCELLED'
                  | 'REPROCESSING_FINISHED'
                  | 'DISASSEMBLED'
                  | 'MAINTENANCE_STARTED'
                  | 'MAINTENANCE_STEP_STARTED'
                  | 'MAINTENANCE_STEP_CANCELLED'
                  | 'MAINTENANCE_STEP_FINISHED'
                  | 'MAINTENANCE_CANCELLED'
                  | 'MAINTENANCE_FINISHED'
                  | 'PRODUCTION_STARTED'
                  | 'PRODUCTION_CANCELLED'
                  | 'PRODUCTION_FINISHED'
                  | 'PRODUCTION_STEP_STARTED'
                  | 'PRODUCTION_STEP_CANCELLED'
                  | 'PRODUCTION_STEP_FINISHED'
                  | 'QUALITY_CHECK_PERFORMED'
                  | undefined
                qualifier?: string[] | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { json: HistoryItem }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/history/:id4n/:organizationId': {
      $get:
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfHistoryItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfHistoryItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string; organizationId: string } } & {
              query: {
                includePrivate?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/history/:id4n/:organizationId/:sequenceId': {
      $get:
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: HistoryItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: HistoryItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: HistoryItemUpdate
            }
            output: HistoryItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: HistoryItemUpdate
            }
            output: HistoryItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: HistoryItemUpdate
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: HistoryItemUpdate
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: HistoryItemUpdate
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/history/:id4n/:organizationId/:sequenceId/visibility': {
      $put:
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: HistoryItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: HistoryItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string; organizationId: string; sequenceId: number } } & {
              json: Visibility
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/id4ns/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: Id4nPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: Id4nPresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/id4ns/:id4n/alias': {
      $get:
        | {
            input: { param: { id4n: string } }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id4n: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/id4ns/:id4n/alias/:aliasType': {
      $delete:
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                id4n: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
              }
            } & { json: GuidAlias }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/id4ns/:id4n/collections': {
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfGuidCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfGuidCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/id4ns/:id4n/properties': {
      $delete:
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: string[]
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId: string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/import/gs1': {
      $post:
        | { input: { json: ImportGS1CodesRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ImportGS1CodesRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: ImportGS1CodesRequest }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ImportGS1CodesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/info': {
      $get:
        | { input: {}; output: AppInfoPresentation; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AppInfoPresentation; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 202 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 405 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 406 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 406 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 415 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/api/v1/microstorage/:id4n/:organization': {
      $get:
        | {
            input: { param: { organization: string; id4n: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organization: string; id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organization: string; id4n: string } } & {
              header: { 'Content-Type'?: string | undefined; 'Content-Length'?: bigint | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/multiple/id4ns/properties': {
      $get:
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ListOfId4nProperties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ListOfId4nProperties
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { id4ns: string[]; organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations': {
      $post:
        | { input: { json: Organization }; output: Organization; outputFormat: 'json'; status: 200 }
        | { input: { json: Organization }; output: Organization; outputFormat: 'text'; status: 200 }
        | { input: { json: Organization }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: Organization }; output: {}; outputFormat: string; status: 202 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 400 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 400 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 401 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 401 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 403 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 403 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 404 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 404 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 405 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 405 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 406 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 406 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 409 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 409 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 415 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 415 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'json'; status: 500 }
        | { input: { json: Organization }; output: ApiError; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/api/v1/organizations/:organizationId': {
      $delete:
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: Organization
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: Organization
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationUpdate }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/addresses/billing': {
      $delete:
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string } }
            output: OrganizationAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: OrganizationAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: OrganizationAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: OrganizationAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/addresses/default': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: OrganizationAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: OrganizationAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: OrganizationAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: OrganizationAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationAddress }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/collections': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: PaginatedResponseOfGuidCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: PaginatedResponseOfGuidCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?:
                  | 'ROUTING_COLLECTION'
                  | 'LOGISTIC_COLLECTION'
                  | 'LABELLED_COLLECTION'
                  | undefined
                label?: string | undefined
                labelPrefix?: string | undefined
                property?: string[] | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/logo': {
      $delete:
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: PublicImagePresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: PublicImagePresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { form: { file: File } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/messaging': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: QueuePresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: QueuePresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string } } & { json: QueueUpdateRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: QueueUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string } } & { json: QueueUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: QueueUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/messaging/enqueueCustomMessage': {
      $post:
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { json: SendCustomMessage }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/partner': {
      $delete:
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { json: RemovePartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfPartnerOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfPartnerOrganization
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & { json: AddPartnerRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/privileges': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/roles': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfUserRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfUserRoles
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/users': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfUserPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfUserPresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/users/invite': {
      $post:
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationUserInvitationListRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/organizations/:organizationId/users/:username/roles': {
      $delete:
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfstring
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfstring
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; username: string } } & {
              json: ChangeRoleRequest
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/documents/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: {
                organizationId?: string | undefined
                owner?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/documents/:id4n/:organizationId/:fileName': {
      $get:
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/documents/:id4n/:organizationId/:fileName/metadata': {
      $get:
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string; id4n: string; fileName: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/history/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfHistoryItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedResponseOfHistoryItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/image/:imageID': {
      $get:
        | {
            input: { param: { imageID: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageID: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { imageID: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { imageID: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/organizations/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: Organization
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organizationId: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/public/routes/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: Route[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: Route[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & {
              query: { type: string; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/roles': {
      $get:
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                privilege?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/routingfiles/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: RoutingFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: RoutingFile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { query: { organizationId?: string | undefined } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { json: RoutingFileRequest }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/routingfiles/:id4n/route/:type': {
      $get:
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: Route
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: Route
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: {
                privateRoutes?: boolean | undefined
                publicRoutes?: boolean | undefined
                interpolate?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/routingfiles/:id4n/routes/:type': {
      $get:
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: Route[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: Route[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string; type: string } } & {
              query: { organizationId?: string | undefined; interpolate?: boolean | undefined }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/search/guids': {
      $get:
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfGuid
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfGuid
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                alias: string
                aliasType:
                  | 'gtin'
                  | 'article'
                  | 'mapp'
                  | 'item'
                  | 'rfid'
                  | 'tracking'
                  | 'eclass'
                  | 'unspsc'
                  | 'product'
                  | 'material'
                  | 'reference'
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/search/guids/aliases/types': {
      $get:
        | {
            input: {}
            output: (
              | 'gtin'
              | 'article'
              | 'mapp'
              | 'item'
              | 'rfid'
              | 'tracking'
              | 'eclass'
              | 'unspsc'
              | 'product'
              | 'material'
              | 'reference'
            )[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: (
              | 'gtin'
              | 'article'
              | 'mapp'
              | 'item'
              | 'rfid'
              | 'tracking'
              | 'eclass'
              | 'unspsc'
              | 'product'
              | 'material'
              | 'reference'
            )[]
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 202 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 405 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 406 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 406 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 415 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ApiError; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/api/v1/transfers/:id4n/receiveInfo': {
      $put:
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { json: TransferReceiveInfo }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/transfers/:id4n/sendInfo': {
      $get:
        | {
            input: { param: { id4n: string } }
            output: TransferSendInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } }
            output: TransferSendInfo
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id4n: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } } & { json: TransferSendInfo }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/user/organizations': {
      $get:
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfOrganization
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                role?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/users': {
      $get:
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfUserPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedResponseOfUserPresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                usernamePrefix?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/v1/users/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: UserPresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: UserPresentation
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { username: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/go/:guid': {
      $get:
        | { input: { param: { guid: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { guid: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { guid: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/login': {
      $post:
        | { input: { json: AccountCredentials }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: AccountCredentials }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountCredentials }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/whois/:id4n': {
      $get:
        | {
            input: { param: { id4n: string } }
            output: WhoIsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id4n: string } }
            output: WhoIsResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id4n: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id4n: string } }
            output: ApiError
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
