type Error = {
  error: { name: string; message: string; stack?: string | undefined; code?: string | undefined }
  request?: { method: string; url: string } | undefined
  response: { statusCode: number }
}
type EntityRelation = { targetRef: string; type: string }
type JsonObject = { [x: string]: { [x: string]: unknown } }
type EntityLink = {
  type?: string | undefined
  icon?: string | undefined
  title?: string | undefined
  url: string
}
type MapStringString = { [x: string]: string }
type EntityMeta = {
  links?: EntityLink[] | undefined
  tags?: string[] | undefined
  annotations?: MapStringString | undefined
  labels?: MapStringString | undefined
  description?: string | undefined
  title?: string | undefined
  namespace?: string | undefined
  name: string
  etag?: string | undefined
  uid?: string | undefined
}
type Entity = {
  relations?: EntityRelation[] | undefined
  spec?: JsonObject | undefined
  metadata: EntityMeta
  kind: string
  apiVersion: string
}
type EntityAncestryResponse = {
  items: { parentEntityRefs: string[]; entity: Entity }[]
  rootEntityRef: string
}
type NullableEntity =
  | {
      relations?: EntityRelation[] | undefined
      spec?: JsonObject | undefined
      metadata: EntityMeta
      kind: string
      apiVersion: string
    }
  | ({ [x: string]: unknown } | null)
type EntitiesBatchResponse = { items: NullableEntity[] }
type EntitiesQueryResponse = {
  items: Entity[]
  totalItems: number
  pageInfo: { nextCursor?: string | undefined; prevCursor?: string | undefined }
}
type EntityFacet = { value: string; count: number }
type EntityFacetsResponse = { facets: { [x: string]: EntityFacet[] } }
type Location = { target: string; type: string; id: string; entityRef: string }
type LocationsQueryResponse = {
  items: Location[]
  totalItems: number
  pageInfo: { nextCursor?: string | undefined }
}
type LocationInput = { type: string; target: string }
type AnalyzeLocationEntityField = {
  description: string
  value: string | ({ [x: string]: unknown } | null)
  state: 'analysisSuggestedValue' | 'analysisSuggestedNoValue' | 'needsUserInput'
  field: string
}
type RecursivePartialEntityMeta = {
  links?: EntityLink[] | undefined
  tags?: string[] | undefined
  annotations?: MapStringString | undefined
  labels?: MapStringString | undefined
  description?: string | undefined
  title?: string | undefined
  namespace?: string | undefined
  name?: string | undefined
  etag?: string | undefined
  uid?: string | undefined
}
type RecursivePartialEntityRelation = { targetRef?: string | undefined; type?: string | undefined }
type RecursivePartialEntity = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: RecursivePartialEntityMeta | undefined
  spec?: JsonObject | undefined
  relations?: RecursivePartialEntityRelation[] | undefined
}
type AnalyzeLocationGenerateEntity = {
  fields: AnalyzeLocationEntityField[]
  entity: RecursivePartialEntity
}
type LocationSpec = { target: string; type: string }
type AnalyzeLocationExistingEntity = {
  entity: Entity
  isRegistered: boolean
  location: LocationSpec
}
type AnalyzeLocationResponse = {
  generateEntities: AnalyzeLocationGenerateEntity[]
  existingEntityFiles: AnalyzeLocationExistingEntity[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/refresh': {
      $post:
        | {
            input: { json: { authorizationToken?: string | undefined; entityRef: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { authorizationToken?: string | undefined; entityRef: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { authorizationToken?: string | undefined; entityRef: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: number | undefined
                filter?: string[] | undefined
                offset?: number | undefined
                after?: string | undefined
                order?: string[] | undefined
              }
            }
            output: Entity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: number | undefined
                filter?: string[] | undefined
                offset?: number | undefined
                after?: string | undefined
                order?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: number | undefined
                filter?: string[] | undefined
                offset?: number | undefined
                after?: string | undefined
                order?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities/by-uid/:uid': {
      $get:
        | { input: { param: { uid: string } }; output: Entity; outputFormat: 'json'; status: 200 }
        | { input: { param: { uid: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { uid: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: { param: { uid: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { uid: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { uid: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/entities/by-name/:kind/:namespace/:name': {
      $get:
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Entity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities/by-name/:kind/:namespace/:name/ancestry': {
      $get:
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: EntityAncestryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities/by-refs': {
      $post:
        | {
            input: { query: { filter?: string[] | undefined } } & {
              json: {
                entityRefs: string[]
                fields?: string[] | undefined
                query?: JsonObject | undefined
              }
            }
            output: EntitiesBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string[] | undefined } } & {
              json: {
                entityRefs: string[]
                fields?: string[] | undefined
                query?: JsonObject | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { filter?: string[] | undefined } } & {
              json: {
                entityRefs: string[]
                fields?: string[] | undefined
                query?: JsonObject | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entities/by-query': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                orderField?: string[] | undefined
                cursor?: string | undefined
                filter?: string[] | undefined
                totalItems?: 'include' | 'exclude' | undefined
                fullTextFilterTerm?: string | undefined
                fullTextFilterFields?: string[] | undefined
              }
            }
            output: EntitiesQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                orderField?: string[] | undefined
                cursor?: string | undefined
                filter?: string[] | undefined
                totalItems?: 'include' | 'exclude' | undefined
                fullTextFilterTerm?: string | undefined
                fullTextFilterFields?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                orderField?: string[] | undefined
                cursor?: string | undefined
                filter?: string[] | undefined
                totalItems?: 'include' | 'exclude' | undefined
                fullTextFilterTerm?: string | undefined
                fullTextFilterFields?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                cursor?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                orderBy?: { field: string; order: 'asc' | 'desc' }[] | undefined
                fullTextFilter?:
                  | { term?: string | undefined; fields?: string[] | undefined }
                  | undefined
                fields?: string[] | undefined
                totalItems?: 'include' | 'exclude' | undefined
                query?: JsonObject | undefined
              }
            }
            output: EntitiesQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cursor?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                orderBy?: { field: string; order: 'asc' | 'desc' }[] | undefined
                fullTextFilter?:
                  | { term?: string | undefined; fields?: string[] | undefined }
                  | undefined
                fields?: string[] | undefined
                totalItems?: 'include' | 'exclude' | undefined
                query?: JsonObject | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                cursor?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                orderBy?: { field: string; order: 'asc' | 'desc' }[] | undefined
                fullTextFilter?:
                  | { term?: string | undefined; fields?: string[] | undefined }
                  | undefined
                fields?: string[] | undefined
                totalItems?: 'include' | 'exclude' | undefined
                query?: JsonObject | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/entity-facets': {
      $get:
        | {
            input: { query: { facet: string[]; filter?: string[] | undefined } }
            output: EntityFacetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { facet: string[]; filter?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { facet: string[]; filter?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { facets: string[]; query?: JsonObject | undefined } }
            output: EntityFacetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { facets: string[]; query?: JsonObject | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { facets: string[]; query?: JsonObject | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/locations': {
      $post:
        | {
            input: {
              query: { dryRun?: string | undefined; onConflict?: 'refresh' | 'reject' | undefined }
            } & { json: { target: string; type: string } }
            output: { exists?: boolean | undefined; entities: Entity[]; location: Location }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { dryRun?: string | undefined; onConflict?: 'refresh' | 'reject' | undefined }
            } & { json: { target: string; type: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { dryRun?: string | undefined; onConflict?: 'refresh' | 'reject' | undefined }
            } & { json: { target: string; type: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: {}; output: { data: Location }[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locations/by-query': {
      $post:
        | {
            input: {
              json: {
                cursor?: string | undefined
                limit?: number | undefined
                query?: JsonObject | undefined
              }
            }
            output: LocationsQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cursor?: string | undefined
                limit?: number | undefined
                query?: JsonObject | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/locations/:id': {
      $get:
        | { input: { param: { id: string } }; output: Location; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: LocationInput }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LocationInput }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locations/by-entity/:kind/:namespace/:name': {
      $get:
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { kind: string; namespace: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyze-location': {
      $post:
        | {
            input: { json: { catalogFileName?: string | undefined; location: LocationInput } }
            output: AnalyzeLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { catalogFileName?: string | undefined; location: LocationInput } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { catalogFileName?: string | undefined; location: LocationInput } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/validate-entity': {
      $post:
        | {
            input: { json: { location: string; entity: { [x: string]: { [x: string]: unknown } } } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { location: string; entity: { [x: string]: { [x: string]: unknown } } } }
            output: { errors: { name: string; message: string }[] }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
