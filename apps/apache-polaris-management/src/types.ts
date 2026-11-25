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
type StorageConfigInfoInput = {
  storageType: 'S3' | 'GCS' | 'AZURE' | 'FILE'
  allowedLocations?: string[]
  storageName?: string
}
type CatalogInput = {
  type: 'INTERNAL' | 'EXTERNAL'
  name: string
  properties: { 'default-base-location': string }
  createTimestamp?: bigint
  lastUpdateTimestamp?: bigint
  entityVersion?: number
  storageConfigInfo: StorageConfigInfoInput
}
type CreateCatalogRequestInput = { catalog: CatalogInput }
type UpdateCatalogRequestInput = {
  currentEntityVersion?: number
  properties?: { [key: string]: string }
  storageConfigInfo?: StorageConfigInfoInput
}
type Principal = {
  name: string
  clientId?: string | undefined
  properties?: { [key: string]: string } | undefined
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
}
type Principals = { principals: Principal[] }
type PrincipalInput = {
  name: string
  clientId?: string
  properties?: { [key: string]: string }
  createTimestamp?: bigint
  lastUpdateTimestamp?: bigint
  entityVersion?: number
}
type CreatePrincipalRequestInput = {
  principal?: PrincipalInput
  credentialRotationRequired?: boolean
}
type PrincipalWithCredentials = {
  principal: Principal
  credentials: { clientId?: string | undefined; clientSecret?: string | undefined }
}
type UpdatePrincipalRequestInput = {
  currentEntityVersion: number
  properties: { [key: string]: string }
}
type ResetPrincipalRequestInput = { clientId?: string; clientSecret?: string }
type PrincipalRole = {
  name: string
  federated?: boolean | undefined
  properties?: { [key: string]: string } | undefined
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
}
type PrincipalRoles = { roles: PrincipalRole[] }
type PrincipalRoleInput = {
  name: string
  federated?: boolean
  properties?: { [key: string]: string }
  createTimestamp?: bigint
  lastUpdateTimestamp?: bigint
  entityVersion?: number
}
type GrantPrincipalRoleRequestInput = { principalRole?: PrincipalRoleInput }
type CreatePrincipalRoleRequestInput = { principalRole?: PrincipalRoleInput }
type UpdatePrincipalRoleRequestInput = {
  currentEntityVersion: number
  properties: { [key: string]: string }
}
type CatalogRole = {
  name: string
  properties?: { [key: string]: string } | undefined
  createTimestamp?: bigint | undefined
  lastUpdateTimestamp?: bigint | undefined
  entityVersion?: number | undefined
}
type CatalogRoles = { roles: CatalogRole[] }
type CatalogRoleInput = {
  name: string
  properties?: { [key: string]: string }
  createTimestamp?: bigint
  lastUpdateTimestamp?: bigint
  entityVersion?: number
}
type GrantCatalogRoleRequestInput = { catalogRole?: CatalogRoleInput }
type CreateCatalogRoleRequestInput = { catalogRole?: CatalogRoleInput }
type UpdateCatalogRoleRequestInput = {
  currentEntityVersion: number
  properties: { [key: string]: string }
}
type GrantResource = {
  type: 'catalog' | 'namespace' | 'table' | 'view' | 'policy' | 'semantic-model'
}
type GrantResources = { grants: GrantResource[] }
type GrantResourceInput = {
  type: 'catalog' | 'namespace' | 'table' | 'view' | 'policy' | 'semantic-model'
}
type AddGrantRequestInput = { grant?: GrantResourceInput }
type RevokeGrantRequestInput = { grant?: GrantResourceInput }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/catalogs': {
      $get:
        | { input: {}; output: Catalogs; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: CreateCatalogRequestInput }
            output: Catalog
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCatalogRequestInput }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateCatalogRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateCatalogRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: CreateCatalogRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
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
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequestInput }
            output: Catalog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { catalogName: string } } & { json: UpdateCatalogRequestInput }
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
            input: { json: CreatePrincipalRequestInput }
            output: PrincipalWithCredentials
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePrincipalRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
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
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequestInput }
            output: Principal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { principalName: string } } & { json: UpdatePrincipalRequestInput }
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
            input: { param: { principalName: string } } & { json: ResetPrincipalRequestInput }
            output: PrincipalWithCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalName: string } } & { json: ResetPrincipalRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } } & { json: ResetPrincipalRequestInput }
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
            input: { param: { principalName: string } } & { json: GrantPrincipalRoleRequestInput }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { principalName: string } } & { json: GrantPrincipalRoleRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalName: string } } & { json: GrantPrincipalRoleRequestInput }
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
            input: { json: CreatePrincipalRoleRequestInput }
            output: PrincipalRole
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePrincipalRoleRequestInput }
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
            input: { param: { principalRoleName: string } } & {
              json: UpdatePrincipalRoleRequestInput
            }
            output: PrincipalRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { principalRoleName: string } } & {
              json: UpdatePrincipalRoleRequestInput
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { principalRoleName: string } } & {
              json: UpdatePrincipalRoleRequestInput
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { principalRoleName: string } } & {
              json: UpdatePrincipalRoleRequestInput
            }
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
              json: GrantCatalogRoleRequestInput
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { principalRoleName: string; catalogName: string } } & {
              json: GrantCatalogRoleRequestInput
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
            input: { param: { catalogName: string } } & { json: CreateCatalogRoleRequestInput }
            output: CatalogRole
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { catalogName: string } } & { json: CreateCatalogRoleRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string } } & { json: CreateCatalogRoleRequestInput }
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
              json: UpdateCatalogRoleRequestInput
            }
            output: CatalogRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequestInput
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequestInput
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: UpdateCatalogRoleRequestInput
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
              json: AddGrantRequestInput
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: AddGrantRequestInput
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              json: AddGrantRequestInput
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              query: { cascade?: string }
            } & { json: RevokeGrantRequestInput }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              query: { cascade?: string }
            } & { json: RevokeGrantRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { catalogName: string; catalogRoleName: string } } & {
              query: { cascade?: string }
            } & { json: RevokeGrantRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
