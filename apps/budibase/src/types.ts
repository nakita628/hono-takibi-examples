type Application = { name: string; url?: string | undefined }
type ApplicationOutput = {
  data: {
    name: string
    url: string
    _id: string
    status: 'development' | 'published'
    createdAt: string
    updatedAt: string
    version: string
    tenantId?: string | undefined
    lockedBy?: { [x: string]: unknown } | undefined
  }
}
type DeploymentOutput = { data: { _id: string; status: 'SUCCESS' | 'FAILURE'; appUrl: string } }
type AppExport = { encryptPassword: string; excludeRows: boolean }
type NameSearch = { name: string }
type ApplicationSearch = {
  data: {
    name: string
    url: string
    _id: string
    status: 'development' | 'published'
    createdAt: string
    updatedAt: string
    version: string
    tenantId?: string | undefined
    lockedBy?: { [x: string]: unknown } | undefined
  }[]
}
type ExecuteQuery = {
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  pagination?: { page?: string | undefined; limit?: number | undefined } | undefined
}
type ExecuteQueryOutput = {
  data: { [x: string]: unknown }[]
  extra?: { headers?: { [x: string]: unknown } | undefined; raw?: string | undefined } | undefined
  pagination?: { [x: string]: unknown } | undefined
}
type QuerySearch = {
  data: {
    _id: string
    datasourceId?: string | undefined
    parameters?: string[] | undefined
    fields?: { [x: string]: unknown } | undefined
    queryVerb?: 'create' | 'read' | 'update' | 'delete' | undefined
    name: string
    schema: { [x: string]: unknown }
    transformer?: string | undefined
    readable?: boolean | undefined
  }[]
}
type RolesAssign = {
  appBuilder?: { appId: string } | undefined
  builder?: boolean | undefined
  admin?: boolean | undefined
  role?: { roleId: string; appId: string } | undefined
  userIds: string[]
}
type RolesOutput = { data: { userIds: string[] } }
type RolesUnAssign = {
  appBuilder?: { appId: string } | undefined
  builder?: boolean | undefined
  admin?: boolean | undefined
  role?: { roleId: string; appId: string } | undefined
  userIds: string[]
}
type Row = { [x: string]: { [x: string]: unknown } }
type RowOutput = { data: { _id: string; tableId: string } }
type RowSearch = {
  query: {
    allOr?: boolean | undefined
    string?: { [x: string]: string } | undefined
    fuzzy?: { [x: string]: unknown } | undefined
    range?: { [x: string]: unknown } | undefined
    equal?: { [x: string]: unknown } | undefined
    notEqual?: { [x: string]: unknown } | undefined
    empty?: { [x: string]: unknown } | undefined
    notEmpty?: { [x: string]: unknown } | undefined
    oneOf?: { [x: string]: unknown } | undefined
    contains?: { [x: string]: unknown } | undefined
    notContains?: { [x: string]: unknown } | undefined
    containsAny?: { [x: string]: unknown } | undefined
  }
  paginate?: boolean | undefined
  bookmark?: string | number | undefined
  limit?: number | undefined
  sort?:
    | {
        order?: 'ascending' | 'descending' | undefined
        column?: string | undefined
        type?: 'string' | 'number' | undefined
      }
    | undefined
}
type SearchOutput = {
  data: { [x: string]: unknown }[]
  bookmark?: string | number | undefined
  hasNextPage?: boolean | undefined
}
type Table = {
  name: string
  primaryDisplay?: string | undefined
  schema: {
    [x: string]:
      | {
          type?: 'link' | undefined
          constraints?:
            | {
                type?: string | undefined
                presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                inclusion?: unknown[] | undefined
              }
            | undefined
          name?: string | undefined
          autocolumn?: boolean | undefined
          width?: number | undefined
          fieldName?: string | undefined
          tableId?: string | undefined
          relationshipType?: 'one-to-many' | 'many-to-one' | 'many-to-many' | undefined
          through?: string | undefined
          foreignKey?: string | undefined
          throughFrom?: string | undefined
          throughTo?: string | undefined
        }
      | {
          type?: 'formula' | undefined
          constraints?:
            | {
                type?: string | undefined
                presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                inclusion?: unknown[] | undefined
              }
            | undefined
          name?: string | undefined
          autocolumn?: boolean | undefined
          width?: number | undefined
          formula?: string | undefined
          formulaType?: 'static' | 'dynamic' | undefined
        }
      | {
          type?:
            | 'string'
            | 'longform'
            | 'options'
            | 'number'
            | 'boolean'
            | 'array'
            | 'datetime'
            | 'attachment'
            | 'attachment_single'
            | 'auto'
            | 'ai'
            | 'json'
            | 'internal'
            | 'barcodeqr'
            | 'signature_single'
            | 'bigint'
            | 'bb_reference'
            | 'bb_reference_single'
            | undefined
          constraints?:
            | {
                type?: string | undefined
                presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                inclusion?: unknown[] | undefined
              }
            | undefined
          name?: string | undefined
          autocolumn?: boolean | undefined
          width?: number | undefined
        }
  }
}
type TableOutput = {
  data: {
    name: string
    primaryDisplay?: string | undefined
    schema: {
      [x: string]:
        | {
            type?: 'link' | undefined
            constraints?:
              | {
                  type?: string | undefined
                  presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                  inclusion?: unknown[] | undefined
                }
              | undefined
            name?: string | undefined
            autocolumn?: boolean | undefined
            width?: number | undefined
            fieldName?: string | undefined
            tableId?: string | undefined
            relationshipType?: 'one-to-many' | 'many-to-one' | 'many-to-many' | undefined
            through?: string | undefined
            foreignKey?: string | undefined
            throughFrom?: string | undefined
            throughTo?: string | undefined
          }
        | {
            type?: 'formula' | undefined
            constraints?:
              | {
                  type?: string | undefined
                  presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                  inclusion?: unknown[] | undefined
                }
              | undefined
            name?: string | undefined
            autocolumn?: boolean | undefined
            width?: number | undefined
            formula?: string | undefined
            formulaType?: 'static' | 'dynamic' | undefined
          }
        | {
            type?:
              | 'string'
              | 'longform'
              | 'options'
              | 'number'
              | 'boolean'
              | 'array'
              | 'datetime'
              | 'attachment'
              | 'attachment_single'
              | 'auto'
              | 'ai'
              | 'json'
              | 'internal'
              | 'barcodeqr'
              | 'signature_single'
              | 'bigint'
              | 'bb_reference'
              | 'bb_reference_single'
              | undefined
            constraints?:
              | {
                  type?: string | undefined
                  presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                  inclusion?: unknown[] | undefined
                }
              | undefined
            name?: string | undefined
            autocolumn?: boolean | undefined
            width?: number | undefined
          }
    }
    _id: string
  }
}
type TableSearch = {
  data: {
    name: string
    primaryDisplay?: string | undefined
    schema: {
      [x: string]:
        | {
            type?: 'link' | undefined
            constraints?:
              | {
                  type?: string | undefined
                  presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                  inclusion?: unknown[] | undefined
                }
              | undefined
            name?: string | undefined
            autocolumn?: boolean | undefined
            width?: number | undefined
            fieldName?: string | undefined
            tableId?: string | undefined
            relationshipType?: 'one-to-many' | 'many-to-one' | 'many-to-many' | undefined
            through?: string | undefined
            foreignKey?: string | undefined
            throughFrom?: string | undefined
            throughTo?: string | undefined
          }
        | {
            type?: 'formula' | undefined
            constraints?:
              | {
                  type?: string | undefined
                  presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                  inclusion?: unknown[] | undefined
                }
              | undefined
            name?: string | undefined
            autocolumn?: boolean | undefined
            width?: number | undefined
            formula?: string | undefined
            formulaType?: 'static' | 'dynamic' | undefined
          }
        | {
            type?:
              | 'string'
              | 'longform'
              | 'options'
              | 'number'
              | 'boolean'
              | 'array'
              | 'datetime'
              | 'attachment'
              | 'attachment_single'
              | 'auto'
              | 'ai'
              | 'json'
              | 'internal'
              | 'barcodeqr'
              | 'signature_single'
              | 'bigint'
              | 'bb_reference'
              | 'bb_reference_single'
              | undefined
            constraints?:
              | {
                  type?: string | undefined
                  presence?: boolean | { allowEmpty?: boolean | undefined } | undefined
                  inclusion?: unknown[] | undefined
                }
              | undefined
            name?: string | undefined
            autocolumn?: boolean | undefined
            width?: number | undefined
          }
    }
    _id: string
  }[]
}
type User = {
  email: string
  password?: string | undefined
  status?: 'active' | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  forceResetPassword?: boolean | undefined
  builder?: { global?: boolean | undefined } | undefined
  admin?: { global?: boolean | undefined } | undefined
  roles?: { [x: string]: string } | undefined
  userGroups?: string[] | undefined
}
type UserOutput = {
  data: {
    email: string
    password?: string | undefined
    status?: 'active' | undefined
    firstName?: string | undefined
    lastName?: string | undefined
    forceResetPassword?: boolean | undefined
    builder?: { global?: boolean | undefined } | undefined
    admin?: { global?: boolean | undefined } | undefined
    roles?: { [x: string]: string } | undefined
    userGroups?: string[] | undefined
    _id: string
  }
}
type UserSearch = {
  data: {
    email: string
    password?: string | undefined
    status?: 'active' | undefined
    firstName?: string | undefined
    lastName?: string | undefined
    forceResetPassword?: boolean | undefined
    builder?: { global?: boolean | undefined } | undefined
    admin?: { global?: boolean | undefined } | undefined
    roles?: { [x: string]: string } | undefined
    userGroups?: string[] | undefined
    _id: string
  }[]
}
type View = {
  name: string
  tableId: string
  type?: 'calculation' | undefined
  primaryDisplay?: string | undefined
  query?:
    | {
        logicalOperator?: 'all' | 'any' | undefined
        onEmptyFilter?: 'all' | 'none' | undefined
        groups?:
          | {
              logicalOperator?: 'all' | 'any' | undefined
              filters?:
                | {
                    operator?:
                      | 'equal'
                      | 'notEqual'
                      | 'empty'
                      | 'notEmpty'
                      | 'fuzzy'
                      | 'string'
                      | 'contains'
                      | 'notContains'
                      | 'containsAny'
                      | 'oneOf'
                      | 'notOneOf'
                      | 'range'
                      | undefined
                    field?: string | undefined
                    value?:
                      | string
                      | number
                      | boolean
                      | { [x: string]: unknown }
                      | unknown[]
                      | undefined
                  }[]
                | undefined
              groups?:
                | {
                    logicalOperator?: 'all' | 'any' | undefined
                    filters?:
                      | {
                          operator?:
                            | 'equal'
                            | 'notEqual'
                            | 'empty'
                            | 'notEmpty'
                            | 'fuzzy'
                            | 'string'
                            | 'contains'
                            | 'notContains'
                            | 'containsAny'
                            | 'oneOf'
                            | 'notOneOf'
                            | 'range'
                            | undefined
                          field?: string | undefined
                          value?:
                            | string
                            | number
                            | boolean
                            | { [x: string]: unknown }
                            | unknown[]
                            | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
            }[]
          | undefined
      }
    | undefined
  sort?:
    | {
        field: string
        order?: 'ascending' | 'descending' | undefined
        type?: 'string' | 'number' | undefined
      }
    | {
        field: string
        order?: 'ascending' | 'descending' | undefined
        type?: 'string' | 'number' | undefined
      }[]
    | undefined
  schema: {
    [x: string]:
      | {
          visible?: boolean | undefined
          readonly?: boolean | undefined
          order?: number | undefined
          width?: number | undefined
          column?: { readonly?: boolean | undefined }[] | undefined
        }
      | {
          calculationType?: 'sum' | 'avg' | 'count' | 'min' | 'max' | undefined
          field?: string | undefined
          distinct?: boolean | undefined
        }
  }
}
type ViewOutput = {
  data: {
    name: string
    tableId: string
    type?: 'calculation' | undefined
    primaryDisplay?: string | undefined
    query?:
      | {
          logicalOperator?: 'all' | 'any' | undefined
          onEmptyFilter?: 'all' | 'none' | undefined
          groups?:
            | {
                logicalOperator?: 'all' | 'any' | undefined
                filters?:
                  | {
                      operator?:
                        | 'equal'
                        | 'notEqual'
                        | 'empty'
                        | 'notEmpty'
                        | 'fuzzy'
                        | 'string'
                        | 'contains'
                        | 'notContains'
                        | 'containsAny'
                        | 'oneOf'
                        | 'notOneOf'
                        | 'range'
                        | undefined
                      field?: string | undefined
                      value?:
                        | string
                        | number
                        | boolean
                        | { [x: string]: unknown }
                        | unknown[]
                        | undefined
                    }[]
                  | undefined
                groups?:
                  | {
                      logicalOperator?: 'all' | 'any' | undefined
                      filters?:
                        | {
                            operator?:
                              | 'equal'
                              | 'notEqual'
                              | 'empty'
                              | 'notEmpty'
                              | 'fuzzy'
                              | 'string'
                              | 'contains'
                              | 'notContains'
                              | 'containsAny'
                              | 'oneOf'
                              | 'notOneOf'
                              | 'range'
                              | undefined
                            field?: string | undefined
                            value?:
                              | string
                              | number
                              | boolean
                              | { [x: string]: unknown }
                              | unknown[]
                              | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
      | undefined
    sort?:
      | {
          field: string
          order?: 'ascending' | 'descending' | undefined
          type?: 'string' | 'number' | undefined
        }
      | {
          field: string
          order?: 'ascending' | 'descending' | undefined
          type?: 'string' | 'number' | undefined
        }[]
      | undefined
    schema: {
      [x: string]:
        | {
            visible?: boolean | undefined
            readonly?: boolean | undefined
            order?: number | undefined
            width?: number | undefined
            column?: { readonly?: boolean | undefined }[] | undefined
          }
        | {
            calculationType?: 'sum' | 'avg' | 'count' | 'min' | 'max' | undefined
            field?: string | undefined
            distinct?: boolean | undefined
          }
    }
    id: string
  }
}
type ViewSearch = {
  data: {
    name: string
    tableId: string
    type?: 'calculation' | undefined
    primaryDisplay?: string | undefined
    query?:
      | {
          logicalOperator?: 'all' | 'any' | undefined
          onEmptyFilter?: 'all' | 'none' | undefined
          groups?:
            | {
                logicalOperator?: 'all' | 'any' | undefined
                filters?:
                  | {
                      operator?:
                        | 'equal'
                        | 'notEqual'
                        | 'empty'
                        | 'notEmpty'
                        | 'fuzzy'
                        | 'string'
                        | 'contains'
                        | 'notContains'
                        | 'containsAny'
                        | 'oneOf'
                        | 'notOneOf'
                        | 'range'
                        | undefined
                      field?: string | undefined
                      value?:
                        | string
                        | number
                        | boolean
                        | { [x: string]: unknown }
                        | unknown[]
                        | undefined
                    }[]
                  | undefined
                groups?:
                  | {
                      logicalOperator?: 'all' | 'any' | undefined
                      filters?:
                        | {
                            operator?:
                              | 'equal'
                              | 'notEqual'
                              | 'empty'
                              | 'notEmpty'
                              | 'fuzzy'
                              | 'string'
                              | 'contains'
                              | 'notContains'
                              | 'containsAny'
                              | 'oneOf'
                              | 'notOneOf'
                              | 'range'
                              | undefined
                            field?: string | undefined
                            value?:
                              | string
                              | number
                              | boolean
                              | { [x: string]: unknown }
                              | unknown[]
                              | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
      | undefined
    sort?:
      | {
          field: string
          order?: 'ascending' | 'descending' | undefined
          type?: 'string' | 'number' | undefined
        }
      | {
          field: string
          order?: 'ascending' | 'descending' | undefined
          type?: 'string' | 'number' | undefined
        }[]
      | undefined
    schema: {
      [x: string]:
        | {
            visible?: boolean | undefined
            readonly?: boolean | undefined
            order?: number | undefined
            width?: number | undefined
            column?: { readonly?: boolean | undefined }[] | undefined
          }
        | {
            calculationType?: 'sum' | 'avg' | 'count' | 'min' | 'max' | undefined
            field?: string | undefined
            distinct?: boolean | undefined
          }
    }
    id: string
  }[]
}
type Workspace = { name: string; url?: string | undefined }
type WorkspaceOutput = {
  data: {
    name: string
    url: string
    _id: string
    status: 'development' | 'published'
    createdAt: string
    updatedAt: string
    version: string
    tenantId?: string | undefined
    lockedBy?: { [x: string]: unknown } | undefined
  }
}
type WorkspaceExport = { encryptPassword: string; excludeRows: boolean }
type UserGroupList = {
  data: { _id: string; name: string; isDefault: boolean; managedByScim: boolean }[]
}
type WorkspaceSearch = {
  data: {
    name: string
    url: string
    _id: string
    status: 'development' | 'published'
    createdAt: string
    updatedAt: string
    version: string
    tenantId?: string | undefined
    lockedBy?: { [x: string]: unknown } | undefined
  }[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applications': {
      $post: {
        input: { header: { 'x-budibase-app-id': string } } & { json: Application }
        output: ApplicationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:appId': {
      $put: {
        input: { param: { appId: string } } & { json: Application }
        output: ApplicationOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { appId: string } }
        output: ApplicationOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { appId: string } }
        output: ApplicationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:appId/unpublish': {
      $post: { input: { param: { appId: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/applications/:appId/publish': {
      $post: {
        input: { param: { appId: string } }
        output: DeploymentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:appId/import': {
      $post: {
        input: { param: { appId: string } } & {
          form: { encryptedPassword?: string | undefined; appExport: File }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/applications/:appId/export': {
      $post: {
        input: { param: { appId: string } } & { json: AppExport }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/applications/search': {
      $post: {
        input: { json: NameSearch }
        output: ApplicationSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/queries/:queryId': {
      $post: {
        input: { param: { queryId: string } } & { header: { 'x-budibase-app-id': string } } & {
          json: ExecuteQuery
        }
        output: ExecuteQueryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/search': {
      $post: {
        input: { header: { 'x-budibase-app-id': string } } & { json: NameSearch }
        output: QuerySearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/roles/assign': {
      $post: {
        input: { json: RolesAssign }
        output: RolesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/roles/unassign': {
      $post: {
        input: { json: RolesUnAssign }
        output: RolesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables/:tableId/rows': {
      $post: {
        input: { param: { tableId: string } } & { header: { 'x-budibase-app-id': string } } & {
          json: Row
        }
        output: RowOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables/:tableId/rows/:rowId': {
      $put: {
        input: { param: { tableId: string; rowId: string } } & {
          header: { 'x-budibase-app-id': string }
        } & { json: Row }
        output: RowOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { tableId: string; rowId: string } } & {
          header: { 'x-budibase-app-id': string }
        }
        output: RowOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { tableId: string; rowId: string } } & {
          header: { 'x-budibase-app-id': string }
        }
        output: RowOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables/:tableId/rows/search': {
      $post: {
        input: { param: { tableId: string } } & { header: { 'x-budibase-app-id': string } } & {
          json: RowSearch
        }
        output: SearchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables': {
      $post: {
        input: { header: { 'x-budibase-app-id': string } } & { json: Table }
        output: TableOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables/:tableId': {
      $put: {
        input: { param: { tableId: string } } & { header: { 'x-budibase-app-id': string } } & {
          json: Table
        }
        output: TableOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { tableId: string } } & { header: { 'x-budibase-app-id': string } }
        output: TableOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { tableId: string } } & { header: { 'x-budibase-app-id': string } }
        output: TableOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables/search': {
      $post: {
        input: { header: { 'x-budibase-app-id': string } } & { json: NameSearch }
        output: TableSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $post: { input: { json: User }; output: UserOutput; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/:userId': {
      $put: {
        input: { param: { userId: string } } & { json: User }
        output: UserOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: string } }
        output: UserOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { userId: string } }
        output: UserOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/search': {
      $post: { input: { json: NameSearch }; output: UserSearch; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/views': {
      $post: {
        input: { header: { 'x-budibase-app-id': string } } & { json: View }
        output: ViewOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/views/:viewId': {
      $put: {
        input: { param: { viewId: string } } & { header: { 'x-budibase-app-id': string } } & {
          json: View
        }
        output: ViewOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { viewId: string } } & { header: { 'x-budibase-app-id': string } }
        output: ViewOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { viewId: string } } & { header: { 'x-budibase-app-id': string } }
        output: ViewOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/views/search': {
      $post: {
        input: { header: { 'x-budibase-app-id': string } } & { json: NameSearch }
        output: ViewSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/views/:viewId/rows/search': {
      $post: {
        input: { param: { viewId: string } } & { header: { 'x-budibase-app-id': string } } & {
          json: RowSearch
        }
        output: SearchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces': {
      $post: {
        input: { json: Workspace }
        output: WorkspaceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/:workspaceId': {
      $put: {
        input: { param: { workspaceId: string } } & { json: Workspace }
        output: WorkspaceOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { workspaceId: string } }
        output: WorkspaceOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { workspaceId: string } }
        output: WorkspaceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/:workspaceId/publish': {
      $post: {
        input: { param: { workspaceId: string } }
        output: DeploymentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/:workspaceId/unpublish': {
      $post: {
        input: { param: { workspaceId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/workspaces/:workspaceId/import': {
      $post: {
        input: { param: { workspaceId: string } } & {
          form: { encryptedPassword?: string | undefined; file: File }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/workspaces/:workspaceId/export': {
      $post: {
        input: { param: { workspaceId: string } } & { json: WorkspaceExport }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workspaces/:workspaceId/groups': {
      $get: {
        input: { param: { workspaceId: string } }
        output: UserGroupList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/search': {
      $post: {
        input: { json: NameSearch }
        output: WorkspaceSearch
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
