type UserItems = {
  accountNames?: string[] | undefined
  email?: string | undefined
  id?: string | undefined
  isAdmin?: boolean | undefined
  isBlocked?: boolean | undefined
  isReliable?: boolean | undefined
  name?: string | undefined
  roles?: string[] | undefined
}
type Paging = { page: number; pages: number; perPage: number; total: number }
type ListUsersResponse = { items?: UserItems[] | undefined; paging?: Paging | undefined }
type ProductItems = {
  categoryId?: (string | null) | undefined
  categoryName?: (string | null) | undefined
  consoleUrlMask?: (string | null) | undefined
  description?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: string | undefined
  productResources?: (string | null) | undefined
  url?: (string | null) | undefined
  urlConfiguration?: (string | null) | undefined
  webApiUrlMask?: (string | null) | undefined
}
type RoleItems = {
  id?: number | undefined
  isAdmin?: boolean | undefined
  logins?: (string | null) | undefined
  name?: string | undefined
  products?: ProductItems[] | undefined
  resources?: (string | null) | undefined
  roleType?: number | undefined
}
type ListRolesResponse = { items?: RoleItems[] | undefined; paging?: Paging | undefined }
type CreateUserRequest = { email: string; name: string }
type AppKeyItems = {
  appKey?: string | undefined
  appToken?: (string | null) | undefined
  createdIn?: string | undefined
  id?: string | undefined
  isActive?: boolean | undefined
  isBlocked?: boolean | undefined
  label?: string | undefined
}
type LicenseItems = {
  expiration?: (string | null) | undefined
  id?: number | undefined
  isPurchased?: boolean | undefined
  name?: string | undefined
  products?:
    | {
        domains?: string[] | undefined
        endpoints?:
          | { consoleUrl?: (string | null) | undefined; webApiUrl?: (string | null) | undefined }
          | undefined
        id?: number | undefined
        name?: string | undefined
      }[]
    | undefined
}
type SiteItems = {
  LV?: (string | null) | undefined
  aliases?: string[] | undefined
  domains?: (string[] | null) | undefined
  hosts?: string[] | undefined
  id?: number | undefined
  logo?: (string | null) | undefined
  monetaryUnitId?: number | undefined
  name?: string | undefined
  tradingName?: string | undefined
}
type AccountResponse = {
  accountName?: string | undefined
  address?: (string | null) | undefined
  appKey?: { name?: (string | null) | undefined; token?: (string | null) | undefined } | undefined
  appKeys?: AppKeyItems[] | undefined
  city?: (string | null) | undefined
  cnpj?: (string | null) | undefined
  companyName?: string | undefined
  complement?: (string | null) | undefined
  contact?:
    | { email?: string | undefined; name?: string | undefined; phone?: string | undefined }
    | undefined
  country?: (string | null) | undefined
  creationDate?: string | undefined
  defaultUrl?: (string | null) | undefined
  district?: (string | null) | undefined
  hasLogo?: boolean | undefined
  haveParentAccount?: boolean | undefined
  hosts?: string[] | undefined
  id?: string | undefined
  inactivationDate?: (string | null) | undefined
  isActive?: boolean | undefined
  isOperating?: boolean | undefined
  licenses?: LicenseItems[] | undefined
  logo?: (string | null) | undefined
  lv?: (string | null) | undefined
  name?: string | undefined
  number?: (string | null) | undefined
  operationDate?: (string | null) | undefined
  parentAccountId?: (string | null) | undefined
  parentAccountName?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  sites?: SiteItems[] | undefined
  sponsor?:
    | { email?: string | undefined; name?: string | undefined; phone?: string | undefined }
    | undefined
  state?: (string | null) | undefined
  telephone?: string | undefined
  tradingName?: string | undefined
}
type StoreItems = {
  hosts?: string[] | undefined
  id?: number | undefined
  name?: string | undefined
}
type Getappkeysfromaccount = {
  appKey: string
  createdIn: string
  id: string
  isActive: boolean
  label: string
}
type CreatenewappkeyRequest = { label: string }
type CreatenewappkeyResponse = {
  appKey: string
  appToken: string
  createdIn: string
  id: string
  isActive: boolean
  label: string
}
type UpdateappkeyRequest = { isActive: boolean }
type VLMError = {
  Detais?: (string | null) | undefined
  HttpStatusCode?: number | undefined
  Message?: string | undefined
  VLMErrorCode?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/license-manager/site/pvt/logins/list/paged': {
      $get: {
        input: {
          query: {
            numItems?: number | undefined
            pageNumber?: number | undefined
            sort?: string | undefined
            sortType?: string | undefined
          }
        } & { header: { 'Content-Type': string } }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/license-manager/site/pvt/roles/list/paged': {
      $get: {
        input: {
          query: {
            numItems?: number | undefined
            pageNumber?: number | undefined
            sort?: string | undefined
            sortType?: string | undefined
          }
        } & { header: { 'Content-Type': string } }
        output: ListRolesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/license-manager/users': {
      $post:
        | {
            input: { json: CreateUserRequest }
            output: {
              email?: string | undefined
              id?: string | undefined
              name?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateUserRequest }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/license-manager/users/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } }
            output: {
              email?: string | undefined
              id?: string | undefined
              name?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/license-manager/users/:userId/roles': {
      $get: {
        input: { param: { userId: string } } & { header: { 'Content-Type': string } }
        output: { id?: number | undefined; name?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { userId: string } } & { json: number[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: number[] }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: number[] }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/license-manager/users/:userId/roles/:roleId': {
      $delete:
        | {
            input: { param: { userId: string; roleId: string } } & {
              header: { 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; roleId: string } } & {
              header: { 'Content-Type': string }
            }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; roleId: string } } & {
              header: { 'Content-Type': string }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/vlm/account': {
      $get: { input: {}; output: AccountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/vlm/account/stores': {
      $get: { input: {}; output: StoreItems[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/vlm/appkeys': {
      $get: {
        input: { header: { 'Content-Type': string } }
        output: Getappkeysfromaccount[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreatenewappkeyRequest }
        output: CreatenewappkeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/vlm/appkeys/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateappkeyRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateappkeyRequest }
            output: VLMError
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
