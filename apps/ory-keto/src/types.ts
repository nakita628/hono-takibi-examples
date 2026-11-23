type GenericError = {
  code?: bigint | undefined
  debug?: string | undefined
  details?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  message: string
  reason?: string | undefined
  request?: string | undefined
  status?: string | undefined
}
type ErrorGeneric = { error: GenericError }
type SubjectSet = { namespace: string; object: string; relation: string }
type Relationship = {
  namespace: string
  object: string
  relation: string
  subject_id?: string | undefined
  subject_set?: SubjectSet | undefined
}
type RelationshipPatch = {
  action?: 'insert' | 'delete' | undefined
  relation_tuple?: Relationship | undefined
}
type CreateRelationshipBody = {
  namespace?: string | undefined
  object?: string | undefined
  relation?: string | undefined
  subject_id?: string | undefined
  subject_set?: SubjectSet | undefined
}
type Namespace = { name?: string | undefined }
type RelationshipNamespaces = { namespaces?: Namespace[] | undefined }
type CheckOplSyntaxBody = string
type SourcePosition = { Line?: bigint | undefined; column?: bigint | undefined }
type ParseError = {
  end?: SourcePosition | undefined
  message?: string | undefined
  start?: SourcePosition | undefined
}
type CheckOplSyntaxResult = { errors?: ParseError[] | undefined }
type Relationships = {
  next_page_token?: string | undefined
  relation_tuples?: Relationship[] | undefined
}
type BatchCheckPermissionBody = { tuples?: Relationship[] | undefined }
type CheckPermissionResultWithError = { allowed: boolean; error?: string | undefined }
type BatchCheckPermissionResult = { results: CheckPermissionResultWithError[] }
type CheckPermissionResult = { allowed: boolean }
type PostCheckPermissionOrErrorBody = {
  namespace?: string | undefined
  object?: string | undefined
  relation?: string | undefined
  subject_id?: string | undefined
  subject_set?: SubjectSet | undefined
}
type PostCheckPermissionBody = {
  namespace?: string | undefined
  object?: string | undefined
  relation?: string | undefined
  subject_id?: string | undefined
  subject_set?: SubjectSet | undefined
}
type ExpandedPermissionTree = {
  children?: ExpandedPermissionTree[] | undefined
  tuple?: Relationship | undefined
  type:
    | 'union'
    | 'exclusion'
    | 'intersection'
    | 'leaf'
    | 'tuple_to_subject_set'
    | 'computed_subject_set'
    | 'not'
    | 'unspecified'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin/relation-tuples': {
      $delete:
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | { input: { json: RelationshipPatch[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: RelationshipPatch[] }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RelationshipPatch[] }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RelationshipPatch[] }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: CreateRelationshipBody }
            output: Relationship
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRelationshipBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRelationshipBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/health/alive': {
      $get:
        | { input: {}; output: { status: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/health/ready': {
      $get:
        | { input: {}; output: { status: string }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors: { [x: string]: string } }
            outputFormat: 'json'
            status: 503
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/namespaces': {
      $get:
        | { input: {}; output: RelationshipNamespaces; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorGeneric; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/opl/syntax/check': {
      $post:
        | {
            input: { json: CheckOplSyntaxBody }
            output: CheckOplSyntaxResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckOplSyntaxBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CheckOplSyntaxBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/relation-tuples': {
      $get:
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
              }
            }
            output: Relationships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/relation-tuples/batch/check': {
      $post:
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: BatchCheckPermissionBody
            }
            output: BatchCheckPermissionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: BatchCheckPermissionBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: BatchCheckPermissionBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/relation-tuples/check': {
      $get:
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: CheckPermissionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: CheckPermissionResult
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionOrErrorBody
            }
            output: CheckPermissionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionOrErrorBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionOrErrorBody
            }
            output: CheckPermissionResult
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionOrErrorBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/relation-tuples/check/openapi': {
      $get:
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: CheckPermissionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                namespace?: string | undefined
                object?: string | undefined
                relation?: string | undefined
                subject_id?: string | undefined
                'subject_set.namespace'?: string | undefined
                'subject_set.object'?: string | undefined
                'subject_set.relation'?: string | undefined
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionBody
            }
            output: CheckPermissionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'max-depth'?: bigint | undefined } } & {
              json: PostCheckPermissionBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/relation-tuples/expand': {
      $get:
        | {
            input: {
              query: {
                namespace: string
                object: string
                relation: string
                'max-depth'?: bigint | undefined
              }
            }
            output: ExpandedPermissionTree
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                namespace: string
                object: string
                relation: string
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                namespace: string
                object: string
                relation: string
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                namespace: string
                object: string
                relation: string
                'max-depth'?: bigint | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/version': {
      $get: { input: {}; output: { version: string }; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
