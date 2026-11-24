type StorageConfigInfo = {
  storageType: 'S3' | 'GCS' | 'AZURE' | 'FILE'
  allowedLocations?: string[] | undefined
  storageName?: string | undefined
}
type Catalog = {
  type: 'INTERNAL' | 'EXTERNAL'
  name: string
  properties: { 'default-base-location': string }
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
  storageConfigInfo: StorageConfigInfo
}
type Catalogs = { catalogs: Catalog[] }
type CreateCatalogRequest = { catalog: Catalog }
type UpdateCatalogRequest = {
  currentEntityVersion?: number | undefined
  properties?: { [x: string]: string } | undefined
  storageConfigInfo?: StorageConfigInfo | undefined
}
type Principal = {
  name: string
  clientId?: string | undefined
  properties?: { [x: string]: string } | undefined
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
}
type Principals = { principals: Principal[] }
type CreatePrincipalRequest = {
  principal?: Principal | undefined
  credentialRotationRequired?: boolean | undefined
}
type PrincipalWithCredentials = {
  principal: Principal
  credentials: { clientId?: string | undefined; clientSecret?: string | undefined }
}
type UpdatePrincipalRequest = { currentEntityVersion: number; properties: { [x: string]: string } }
type ResetPrincipalRequest = { clientId?: string | undefined; clientSecret?: string | undefined }
type PrincipalRole = {
  name: string
  federated?: boolean | undefined
  properties?: { [x: string]: string } | undefined
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
}
type PrincipalRoles = { roles: PrincipalRole[] }
type GrantPrincipalRoleRequest = { principalRole?: PrincipalRole | undefined }
type CreatePrincipalRoleRequest = { principalRole?: PrincipalRole | undefined }
type UpdatePrincipalRoleRequest = {
  currentEntityVersion: number
  properties: { [x: string]: string }
}
type CatalogRole = {
  name: string
  properties?: { [x: string]: string } | undefined
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
}
type CatalogRoles = { roles: CatalogRole[] }
type GrantCatalogRoleRequest = { catalogRole?: CatalogRole | undefined }
type CreateCatalogRoleRequest = { catalogRole?: CatalogRole | undefined }
type UpdateCatalogRoleRequest = {
  currentEntityVersion: number
  properties: { [x: string]: string }
}
type GrantResource = {
  type: 'catalog' | 'namespace' | 'table' | 'view' | 'policy' | 'semantic-model'
}
type GrantResources = { grants: GrantResource[] }
type AddGrantRequest = { grant?: GrantResource | undefined }
type RevokeGrantRequest = { grant?: GrantResource | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/catalogs': {
      $get:
        | { input: {}; output: Catalogs; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: CreateCatalogRequest }
            output: Catalog
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateCatalogRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateCatalogRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: CreateCatalogRequest }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: CreateCatalogRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/catalogs/:catalogName': {
      $get:
        | {
            input: { param: { catalogName: string } }
            output: Catalog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequest }
            output: Catalog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequest }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { catalogName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { catalogName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principals': {
      $get:
        | { input: {}; output: Principals; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: CreatePrincipalRequest }
            output: PrincipalWithCredentials
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreatePrincipalRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/principals/:principalName': {
      $get:
        | {
            input: { param: { principalName: string } }
            output: Principal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequest }
            output: Principal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequest }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principals/:principalName/rotate': {
      $post:
        | {
            input: { param: { principalName: string } }
            output: PrincipalWithCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principals/:principalName/reset': {
      $post:
        | {
            input: { param: { principalName: string } } & { json: ResetPrincipalRequest }
            output: PrincipalWithCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } } & { json: ResetPrincipalRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } } & { json: ResetPrincipalRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principals/:principalName/principal-roles': {
      $get:
        | {
            input: { param: { principalName: string } }
            output: PrincipalRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { principalName: string } } & { json: GrantPrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { principalName: string } } & { json: GrantPrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } } & { json: GrantPrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principals/:principalName/principal-roles/:principalRoleName': {
      $delete:
        | {
            input: { param: { principalName: string; principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { principalName: string; principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string; principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principal-roles': {
      $get:
        | { input: {}; output: PrincipalRoles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: CreatePrincipalRoleRequest }
            output: PrincipalRole
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/principal-roles/:principalRoleName': {
      $get:
        | {
            input: { param: { principalRoleName: string } }
            output: PrincipalRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { principalRoleName: string } } & { json: UpdatePrincipalRoleRequest }
            output: PrincipalRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalRoleName: string } } & { json: UpdatePrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalRoleName: string } } & { json: UpdatePrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { principalRoleName: string } } & { json: UpdatePrincipalRoleRequest }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principal-roles/:principalRoleName/principals': {
      $get:
        | {
            input: { param: { principalRoleName: string } }
            output: Principals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName': {
      $get:
        | {
            input: { param: { principalRoleName: string; catalogName: string } }
            output: CatalogRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalRoleName: string; catalogName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalRoleName: string; catalogName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { principalRoleName: string; catalogName: string } } & {
              json: GrantCatalogRoleRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { principalRoleName: string; catalogName: string } } & {
              json: GrantCatalogRoleRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/principal-roles/:principalRoleName/catalog-roles/:catalogName/:catalogRoleName': {
      $delete:
        | {
            input: {
              param: { principalRoleName: string; catalogName: string; catalogRoleName: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { principalRoleName: string; catalogName: string; catalogRoleName: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { principalRoleName: string; catalogName: string; catalogRoleName: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/catalogs/:catalogName/catalog-roles': {
      $get: {
        input: { param: { catalogName: string } }
        output: CatalogRoles
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { catalogName: string } } & { json: CreateCatalogRoleRequest }
            output: CatalogRole
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { catalogName: string } } & { json: CreateCatalogRoleRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string } } & { json: CreateCatalogRoleRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName': {
      $get:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: CatalogRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequest
            }
            output: CatalogRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/principal-roles': {
      $get:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: PrincipalRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/catalogs/:catalogName/catalog-roles/:catalogRoleName/grants': {
      $get: {
        input: { param: { catalogName: string; catalogRoleName: string } }
        output: GrantResources
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: AddGrantRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: AddGrantRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: AddGrantRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              query: { cascade?: boolean | undefined }
            } & { json: RevokeGrantRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              query: { cascade?: boolean | undefined }
            } & { json: RevokeGrantRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              query: { cascade?: boolean | undefined }
            } & { json: RevokeGrantRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
