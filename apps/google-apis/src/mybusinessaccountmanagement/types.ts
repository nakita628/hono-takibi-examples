type PostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type OrganizationInfo = {
  address?: PostalAddress | undefined
  phoneNumber?: string | undefined
  registeredDomain?: string | undefined
}
type Account = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  name?: string | undefined
  organizationInfo?: OrganizationInfo | undefined
  permissionLevel?: 'PERMISSION_LEVEL_UNSPECIFIED' | 'OWNER_LEVEL' | 'MEMBER_LEVEL' | undefined
  primaryOwner?: string | undefined
  role?:
    | 'ACCOUNT_ROLE_UNSPECIFIED'
    | 'PRIMARY_OWNER'
    | 'OWNER'
    | 'MANAGER'
    | 'SITE_MANAGER'
    | undefined
  type?:
    | 'ACCOUNT_TYPE_UNSPECIFIED'
    | 'PERSONAL'
    | 'LOCATION_GROUP'
    | 'USER_GROUP'
    | 'ORGANIZATION'
    | undefined
  verificationState?:
    | 'VERIFICATION_STATE_UNSPECIFIED'
    | 'VERIFIED'
    | 'UNVERIFIED'
    | 'VERIFICATION_REQUESTED'
    | undefined
  vettedState?: 'VETTED_STATE_UNSPECIFIED' | 'NOT_VETTED' | 'VETTED' | 'INVALID' | undefined
}
type ListAccountsResponse = { accounts?: Account[] | undefined; nextPageToken?: string | undefined }
type Empty = { [x: string]: unknown }
type Admin = {
  account?: string | undefined
  admin?: string | undefined
  name?: string | undefined
  pendingInvitation?: boolean | undefined
  role?:
    | 'ADMIN_ROLE_UNSPECIFIED'
    | 'PRIMARY_OWNER'
    | 'OWNER'
    | 'MANAGER'
    | 'SITE_MANAGER'
    | undefined
}
type AcceptInvitationRequest = { [x: string]: unknown }
type DeclineInvitationRequest = { [x: string]: unknown }
type TransferLocationRequest = { destinationAccount?: string | undefined }
type ListLocationAdminsResponse = { admins?: Admin[] | undefined }
type TargetLocation = { address?: string | undefined; locationName?: string | undefined }
type Invitation = {
  name?: string | undefined
  role?:
    | 'ADMIN_ROLE_UNSPECIFIED'
    | 'PRIMARY_OWNER'
    | 'OWNER'
    | 'MANAGER'
    | 'SITE_MANAGER'
    | undefined
  targetAccount?: Account | undefined
  targetLocation?: TargetLocation | undefined
  targetType?: 'TARGET_TYPE_UNSPECIFIED' | 'ACCOUNTS_ONLY' | 'LOCATIONS_ONLY' | undefined
}
type ListInvitationsResponse = { invitations?: Invitation[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/accounts': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            parentAccount?: string | undefined
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
        output: ListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
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
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:accept': {
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
        } & { json: AcceptInvitationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:decline': {
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
        } & { json: DeclineInvitationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:transfer': {
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
        } & { json: TransferLocationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/admins': {
      $get: {
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
        }
        output: ListLocationAdminsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/invitations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
