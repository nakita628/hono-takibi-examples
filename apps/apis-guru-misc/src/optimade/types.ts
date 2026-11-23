type AvailableApiVersion = { url: string; version: string }
type BaseInfoAttributes = {
  api_version: string
  available_api_versions: AvailableApiVersion[]
  available_endpoints: string[]
  entry_types_by_format: { [x: string]: string[] }
  formats?: string[] | undefined
  is_index?: boolean | undefined
}
type Link = { href: string; meta?: {} | undefined }
type Error = {
  code?: string | undefined
  detail?: string | undefined
  id?: string | undefined
  links?: { about?: string | Link | undefined } | undefined
  meta?: {} | undefined
  source?: { parameter?: string | undefined; pointer?: string | undefined } | undefined
  status?: string | undefined
  title?: string | undefined
}
type Resource = {
  attributes?: {} | undefined
  id: string
  links?: { self?: string | Link | undefined } | undefined
  meta?: {} | undefined
  relationships?: {} | undefined
  type: string
}
type Warnings = {
  code?: string | undefined
  detail: string
  id?: string | undefined
  links?: { about?: string | Link | undefined } | undefined
  meta?: {} | undefined
  source?: { parameter?: string | undefined; pointer?: string | undefined } | undefined
  title?: string | undefined
  type: string
}
type InfoResponse = {
  data: {
    attributes: BaseInfoAttributes
    id: string
    links?: { self?: string | Link | undefined } | undefined
    meta?: {} | undefined
    relationships?: {} | undefined
    type: string
  }
  errors?: Error[] | undefined
  included?: Resource[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type OptimadeError = {
  code?: string | undefined
  detail: string
  id?: string | undefined
  links?: { about?: string | Link | undefined } | undefined
  meta?: {} | undefined
  source?: { parameter?: string | undefined; pointer?: string | undefined } | undefined
  status?: string | undefined
  title?: string | undefined
}
type ErrorResponse = {
  data?: Resource | Resource[] | undefined
  errors: OptimadeError[]
  included?: Resource[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type EntryInfoProperty = {
  description: string
  sortable?: boolean | undefined
  type?: {} | undefined
  unit?: string | undefined
}
type EntryInfoResponse = {
  data: {
    description: string
    formats: string[]
    output_fields_by_format: { [x: string]: string[] }
    properties: { [x: string]: EntryInfoProperty }
  }
  errors?: Error[] | undefined
  included?: Resource[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type BaseRelationshipResource = {
  id: string
  meta?: { description: string } | undefined
  type: string
}
type LinksResource = {
  attributes: {
    aggregate?: {} | undefined
    base_url: string | Link
    description: string
    homepage: string | Link
    link_type: {}
    name: string
    no_aggregate_reason?: string | undefined
  }
  id: string
  links?: { self?: string | Link | undefined } | undefined
  meta?: {} | undefined
  relationships?:
    | {
        references?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
        structures?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
      }
    | undefined
  type: string
}
type EntryResource = {
  attributes: { immutable_id?: string | undefined; last_modified: string }
  id: string
  links?: { self?: string | Link | undefined } | undefined
  meta?: {} | undefined
  relationships?:
    | {
        references?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
        structures?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
      }
    | undefined
  type: string
}
type LinksResponse = {
  data: LinksResource[] | { [x: string]: unknown }[]
  errors?: Error[] | undefined
  included?: EntryResource[] | { [x: string]: unknown }[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type Person = { firstname?: string | undefined; lastname?: string | undefined; name: string }
type ReferenceResourceAttributes = {
  address?: string | undefined
  annote?: string | undefined
  authors?: Person[] | undefined
  bib_type?: string | undefined
  booktitle?: string | undefined
  chapter?: string | undefined
  crossref?: string | undefined
  doi?: string | undefined
  edition?: string | undefined
  editors?: Person[] | undefined
  howpublished?: string | undefined
  immutable_id?: string | undefined
  institution?: string | undefined
  journal?: string | undefined
  key?: string | undefined
  last_modified: string
  month?: string | undefined
  note?: string | undefined
  number?: string | undefined
  organization?: string | undefined
  pages?: string | undefined
  publisher?: string | undefined
  school?: string | undefined
  series?: string | undefined
  title?: string | undefined
  url?: string | undefined
  volume?: string | undefined
  year?: string | undefined
}
type ReferenceResource = {
  attributes: ReferenceResourceAttributes
  id: string
  links?: { self?: string | Link | undefined } | undefined
  meta?: {} | undefined
  relationships?:
    | {
        references?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
        structures?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
      }
    | undefined
  type: string
}
type ReferenceResponseMany = {
  data: ReferenceResource[] | { [x: string]: unknown }[]
  errors?: Error[] | undefined
  included?: EntryResource[] | { [x: string]: unknown }[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type ReferenceResponseOne = {
  data: ReferenceResource | { [x: string]: unknown }
  errors?: Error[] | undefined
  included?: EntryResource[] | { [x: string]: unknown }[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type Assembly = { group_probabilities: number[]; sites_in_groups: number[][] }
type Periodicity = 0 | 1
type Species = {
  attached?: string[] | undefined
  chemical_symbols: string[]
  concentration: number[]
  mass?: number[] | undefined
  name: string
  nattached?: number[] | undefined
  original_name?: string | undefined
}
type StructureFeatures = 'disorder' | 'implicit_atoms' | 'site_attachments' | 'assemblies'
type StructureResourceAttributes = {
  assemblies?: Assembly[] | undefined
  cartesian_site_positions: number[][] | null
  chemical_formula_anonymous: string | null
  chemical_formula_descriptive: string | null
  chemical_formula_hill?: string | undefined
  chemical_formula_reduced: string | null
  dimension_types: Periodicity[] | null
  elements: string[] | null
  elements_ratios: number[] | null
  immutable_id?: string | undefined
  last_modified: string | null
  lattice_vectors: number[][] | null
  nelements: number | null
  nperiodic_dimensions: number | null
  nsites: number | null
  species: Species[] | null
  species_at_sites: string[] | null
  structure_features: StructureFeatures[]
}
type StructureResource = {
  attributes: StructureResourceAttributes
  id: string
  links?: { self?: string | Link | undefined } | undefined
  meta?: {} | undefined
  relationships?:
    | {
        references?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
        structures?:
          | {
              data?: BaseRelationshipResource | BaseRelationshipResource[] | undefined
              links?:
                | { related?: string | Link | undefined; self?: string | Link | undefined }
                | undefined
              meta?: {} | undefined
            }
          | undefined
      }
    | undefined
  type: string
}
type StructureResponseMany = {
  data: StructureResource[] | { [x: string]: unknown }[]
  errors?: Error[] | undefined
  included?: EntryResource[] | { [x: string]: unknown }[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
type StructureResponseOne = {
  data: StructureResource | { [x: string]: unknown }
  errors?: Error[] | undefined
  included?: EntryResource[] | { [x: string]: unknown }[] | undefined
  jsonapi?: { meta?: {} | undefined; version?: string | undefined } | undefined
  links?:
    | {
        first?: string | Link | undefined
        last?: string | Link | undefined
        next?: string | Link | undefined
        prev?: string | Link | undefined
        related?: string | Link | undefined
        self?: string | Link | undefined
      }
    | undefined
  meta: {
    api_version: string
    data_available?: number | undefined
    data_returned?: number | undefined
    implementation?:
      | {
          homepage?: string | Link | undefined
          issue_tracker?: string | Link | undefined
          maintainer?: { email: string } | undefined
          name?: string | undefined
          source_url?: string | Link | undefined
          version?: string | undefined
        }
      | undefined
    last_id?: string | undefined
    more_data_available: boolean
    provider?:
      | { description: string; homepage?: string | Link | undefined; name: string; prefix: string }
      | undefined
    query: { representation: string }
    response_message?: string | undefined
    schema?: string | Link | undefined
    time_stamp?: string | undefined
    warnings?: Warnings[] | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/info': {
      $get:
        | { input: {}; output: InfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 422 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 501 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 553 }
    }
  } & {
    '/info/:entry': {
      $get:
        | {
            input: { param: { entry: string } }
            output: EntryInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { entry: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 553
          }
    }
  } & {
    '/links': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: LinksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 553
          }
    }
  } & {
    '/references': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ReferenceResponseMany
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 553
          }
    }
  } & {
    '/references/:entry_id': {
      $get:
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ReferenceResponseOne
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 553
          }
    }
  } & {
    '/structures': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: StructureResponseMany
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                sort?: string | undefined
                page_limit?: number | undefined
                page_offset?: number | undefined
                page_number?: number | undefined
                page_cursor?: number | undefined
                page_above?: number | undefined
                page_below?: number | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 553
          }
    }
  } & {
    '/structures/:entry_id': {
      $get:
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: StructureResponseOne
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { entry_id: string } } & {
              query: {
                response_format?: string | undefined
                email_address?: string | undefined
                response_fields?: string | undefined
                include?: string | undefined
                api_hint?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 553
          }
    }
  } & { '/versions': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } },
  '/'
>
export default routes
