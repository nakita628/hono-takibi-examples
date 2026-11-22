type ControllersAdvisoryItemAttributes = {
  advisory_type?: number | undefined
  applicable_systems?: number | undefined
  cve_count?: number | undefined
  description?: string | undefined
  public_date?: string | undefined
  severity?: number | undefined
  synopsis?: string | undefined
}
type ControllersAdvisoryItem = {
  attributes?: ControllersAdvisoryItemAttributes | undefined
  id?: string | undefined
  type?: string | undefined
}
type ControllersLinks = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  previous?: string | undefined
}
type ControllersFilterData = { op?: string | undefined; values?: string[] | undefined }
type ControllersListMeta = {
  filter?: { [x: string]: ControllersFilterData } | undefined
  limit?: number | undefined
  offset?: number | undefined
  search?: string | undefined
  sort?: string[] | undefined
  subtotals?: { [x: string]: number } | undefined
  total_items?: number | undefined
}
type ControllersAdvisoriesResponse = {
  data?: ControllersAdvisoryItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersAdvisoryDetailAttributes = {
  cves?: string[] | undefined
  description?: string | undefined
  fixes?: string | undefined
  modified_date?: string | undefined
  packages?: { [x: string]: string } | undefined
  public_date?: string | undefined
  references?: string[] | undefined
  severity?: number | undefined
  solution?: string | undefined
  synopsis?: string | undefined
  topic?: string | undefined
}
type ControllersAdvisoryDetailItem = {
  attributes?: ControllersAdvisoryDetailAttributes | undefined
  id?: string | undefined
  type?: string | undefined
}
type ControllersAdvisoryDetailResponse = { data?: ControllersAdvisoryDetailItem | undefined }
type ControllersSystemItemAttributes = {
  created?: string | undefined
  culled_timestamp?: string | undefined
  display_name?: string | undefined
  insights_id?: string | undefined
  last_evaluation?: string | undefined
  last_upload?: string | undefined
  os_major?: string | undefined
  os_minor?: string | undefined
  os_name?: string | undefined
  other_count?: number | undefined
  packages_installed?: number | undefined
  packages_updatable?: number | undefined
  rhba_count?: number | undefined
  rhea_count?: number | undefined
  rhsa_count?: number | undefined
  rhsm?: string | undefined
  stale?: boolean | undefined
  stale_timestamp?: string | undefined
  stale_warning_timestamp?: string | undefined
  third_party?: boolean | undefined
}
type ControllersSystemItem = {
  attributes?: ControllersSystemItemAttributes | undefined
  id?: string | undefined
  type?: string | undefined
}
type ControllersAdvisorySystemsResponse = {
  data?: ControllersSystemItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersAdvisoryInlineItem = {
  advisory_type?: number | undefined
  applicable_systems?: number | undefined
  cve_count?: number | undefined
  description?: string | undefined
  id?: string | undefined
  public_date?: string | undefined
  severity?: number | undefined
  synopsis?: string | undefined
}
type ControllersSystemInlineItem = {
  created?: string | undefined
  culled_timestamp?: string | undefined
  display_name?: string | undefined
  id?: string | undefined
  insights_id?: string | undefined
  last_evaluation?: string | undefined
  last_upload?: string | undefined
  os_major?: string | undefined
  os_minor?: string | undefined
  os_name?: string | undefined
  other_count?: number | undefined
  packages_installed?: number | undefined
  packages_updatable?: number | undefined
  rhba_count?: number | undefined
  rhea_count?: number | undefined
  rhsa_count?: number | undefined
  rhsm?: string | undefined
  stale?: boolean | undefined
  stale_timestamp?: string | undefined
  stale_warning_timestamp?: string | undefined
  third_party?: boolean | undefined
}
type ControllersPackageItem = {
  name?: string | undefined
  summary?: string | undefined
  systems_installed?: number | undefined
  systems_updatable?: number | undefined
}
type ControllersPackageSystemItem = {
  available_evra?: string | undefined
  display_name?: string | undefined
  id?: string | undefined
  installed_evra?: string | undefined
  updatable?: boolean | undefined
}
type ControllersSystemAdvisoriesDBLookup = {
  advisory_type?: number | undefined
  cve_count?: number | undefined
  description?: string | undefined
  id?: string | undefined
  public_date?: string | undefined
  severity?: number | undefined
  synopsis?: string | undefined
}
type ControllersSystemPackageInline = {
  description?: string | undefined
  evra?: string | undefined
  latest_evra?: string | undefined
  name?: string | undefined
  summary?: string | undefined
  updatable?: boolean | undefined
}
type ControllersPackagesResponse = {
  data?: ControllersPackageItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersPackageDetailAttributes = {
  advisory_id?: string | undefined
  description?: string | undefined
  name?: string | undefined
  summary?: string | undefined
  version?: string | undefined
}
type ControllersPackageDetailItem = {
  attributes?: ControllersPackageDetailAttributes | undefined
  id?: string | undefined
  type?: string | undefined
}
type ControllersPackageDetailResponse = { data?: ControllersPackageDetailItem | undefined }
type ControllersPackageSystemsResponse = {
  data?: ControllersPackageSystemItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersPackageVersionItem = { evra?: string | undefined }
type ControllersPackageVersionsResponse = {
  data?: ControllersPackageVersionItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersSystemsResponse = {
  data?: ControllersSystemItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersSystemDetailResponse = { data?: ControllersSystemItem | undefined }
type ControllersSystemAdvisoryItemAttributes = {
  advisory_type?: number | undefined
  cve_count?: number | undefined
  description?: string | undefined
  public_date?: string | undefined
  severity?: number | undefined
  synopsis?: string | undefined
}
type ControllersSystemAdvisoryItem = {
  attributes?: ControllersSystemAdvisoryItemAttributes | undefined
  id?: string | undefined
  type?: string | undefined
}
type ControllersSystemAdvisoriesResponse = {
  data?: ControllersSystemAdvisoryItem[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ModelsPackageUpdate = { advisory?: string | undefined; evra?: string | undefined }
type ControllersSystemPackageData = {
  description?: string | undefined
  evra?: string | undefined
  name?: string | undefined
  summary?: string | undefined
  updatable?: boolean | undefined
  updates?: ModelsPackageUpdate[] | undefined
}
type ControllersSystemPackageResponse = {
  data?: ControllersSystemPackageData[] | undefined
  links?: ControllersLinks | undefined
  meta?: ControllersListMeta | undefined
}
type ControllersSystemsAdvisoriesRequest = {
  advisories?: string[] | undefined
  systems?: string[] | undefined
}
type ControllersAdvisoriesSystemsResponse = { data?: { [x: string]: string[] } | undefined }
type ControllersSystemsAdvisoriesResponse = { data?: { [x: string]: string[] } | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/patch/v1/advisories': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            sort?:
              | 'id'
              | 'name'
              | 'advisory_type'
              | 'synopsis'
              | 'public_date'
              | 'applicable_systems'
              | undefined
            search?: string | undefined
            'filter[id]'?: string | undefined
            'filter[description]'?: string | undefined
            'filter[public_date]'?: string | undefined
            'filter[synopsis]'?: string | undefined
            'filter[advisory_type]'?: string | undefined
            'filter[severity]'?: string | undefined
            'filter[applicable_systems]'?: string | undefined
            tags?: string[] | undefined
            'filter[system_profile][sap_system]'?: string | undefined
            'filter[system_profile][sap_sids][in]'?: string[] | undefined
          }
        }
        output: ControllersAdvisoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/advisories/:advisory_id': {
      $get: {
        input: { param: { advisory_id: string } }
        output: ControllersAdvisoryDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/advisories/:advisory_id/systems': {
      $get: {
        input: { param: { advisory_id: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            sort?:
              | 'id'
              | 'display_name'
              | 'last_evaluation'
              | 'last_upload'
              | 'rhsa_count'
              | 'rhba_count'
              | 'rhea_count'
              | 'other_count'
              | 'stale'
              | undefined
            search?: string | undefined
            'filter[id]'?: string | undefined
            'filter[insights_id]'?: string | undefined
            'filter[display_name]'?: string | undefined
            'filter[last_evaluation]'?: string | undefined
            'filter[last_upload]'?: string | undefined
            'filter[rhsa_count]'?: string | undefined
            'filter[rhba_count]'?: string | undefined
            'filter[rhea_count]'?: string | undefined
            'filter[other_count]'?: string | undefined
            'filter[stale]'?: string | undefined
            'filter[stale_timestamp]'?: string | undefined
            'filter[stale_warning_timestamp]'?: string | undefined
            'filter[culled_timestamp]'?: string | undefined
            'filter[created]'?: string | undefined
            tags?: string[] | undefined
            'filter[system_profile][sap_system]'?: string | undefined
            'filter[system_profile][sap_sids][in]'?: string[] | undefined
          }
        }
        output: ControllersAdvisorySystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/export/advisories': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[description]'?: string | undefined
                'filter[public_date]'?: string | undefined
                'filter[synopsis]'?: string | undefined
                'filter[advisory_type]'?: string | undefined
                'filter[severity]'?: string | undefined
                'filter[applicable_systems]'?: string | undefined
              }
            }
            output: ControllersAdvisoryInlineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[description]'?: string | undefined
                'filter[public_date]'?: string | undefined
                'filter[synopsis]'?: string | undefined
                'filter[advisory_type]'?: string | undefined
                'filter[severity]'?: string | undefined
                'filter[applicable_systems]'?: string | undefined
              }
            }
            output: ControllersAdvisoryInlineItem[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/patch/v1/export/advisories/:advisory_id/systems': {
      $get:
        | {
            input: { param: { advisory_id: string } } & {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[display_name]'?: string | undefined
                'filter[last_evaluation]'?: string | undefined
                'filter[last_upload]'?: string | undefined
                'filter[rhsa_count]'?: string | undefined
                'filter[rhba_count]'?: string | undefined
                'filter[rhea_count]'?: string | undefined
                'filter[other_count]'?: string | undefined
                'filter[stale]'?: string | undefined
                'filter[packages_installed]'?: string | undefined
                'filter[packages_updatable]'?: string | undefined
                'filter[system_profile][sap_system]'?: string | undefined
                'filter[system_profile][sap_sids][in]'?: string[] | undefined
                tags?: string[] | undefined
              }
            }
            output: ControllersSystemInlineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { advisory_id: string } } & {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[display_name]'?: string | undefined
                'filter[last_evaluation]'?: string | undefined
                'filter[last_upload]'?: string | undefined
                'filter[rhsa_count]'?: string | undefined
                'filter[rhba_count]'?: string | undefined
                'filter[rhea_count]'?: string | undefined
                'filter[other_count]'?: string | undefined
                'filter[stale]'?: string | undefined
                'filter[packages_installed]'?: string | undefined
                'filter[packages_updatable]'?: string | undefined
                'filter[system_profile][sap_system]'?: string | undefined
                'filter[system_profile][sap_sids][in]'?: string[] | undefined
                tags?: string[] | undefined
              }
            }
            output: ControllersSystemInlineItem[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/patch/v1/export/packages': {
      $get:
        | {
            input: {
              query: {
                sort?: 'id' | 'name' | 'systems_installed' | 'systems_updatable' | undefined
                search?: string | undefined
                'filter[name]'?: string | undefined
                'filter[systems_installed]'?: string | undefined
                'filter[systems_updatable]'?: string | undefined
                'filter[summary]'?: string | undefined
              }
            }
            output: ControllersPackageItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'id' | 'name' | 'systems_installed' | 'systems_updatable' | undefined
                search?: string | undefined
                'filter[name]'?: string | undefined
                'filter[systems_installed]'?: string | undefined
                'filter[systems_updatable]'?: string | undefined
                'filter[summary]'?: string | undefined
              }
            }
            output: ControllersPackageItem[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/patch/v1/export/packages/:package_name/systems': {
      $get: {
        input: { param: { package_name: string } } & {
          query: {
            'filter[system_profile][sap_system]'?: string | undefined
            'filter[system_profile][sap_sids][in]'?: string[] | undefined
            tags?: string[] | undefined
          }
        }
        output: ControllersPackageSystemItem[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/export/systems': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[display_name]'?: string | undefined
                'filter[last_evaluation]'?: string | undefined
                'filter[last_upload]'?: string | undefined
                'filter[rhsa_count]'?: string | undefined
                'filter[rhba_count]'?: string | undefined
                'filter[rhea_count]'?: string | undefined
                'filter[other_count]'?: string | undefined
                'filter[stale]'?: string | undefined
                'filter[packages_installed]'?: string | undefined
                'filter[packages_updatable]'?: string | undefined
                'filter[system_profile][sap_system]'?: string | undefined
                'filter[system_profile][sap_sids][in]'?: string[] | undefined
                tags?: string[] | undefined
              }
            }
            output: ControllersSystemInlineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[display_name]'?: string | undefined
                'filter[last_evaluation]'?: string | undefined
                'filter[last_upload]'?: string | undefined
                'filter[rhsa_count]'?: string | undefined
                'filter[rhba_count]'?: string | undefined
                'filter[rhea_count]'?: string | undefined
                'filter[other_count]'?: string | undefined
                'filter[stale]'?: string | undefined
                'filter[packages_installed]'?: string | undefined
                'filter[packages_updatable]'?: string | undefined
                'filter[system_profile][sap_system]'?: string | undefined
                'filter[system_profile][sap_sids][in]'?: string[] | undefined
                tags?: string[] | undefined
              }
            }
            output: ControllersSystemInlineItem[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/patch/v1/export/systems/:inventory_id/advisories': {
      $get:
        | {
            input: { param: { inventory_id: string } } & {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[description]'?: string | undefined
                'filter[public_date]'?: string | undefined
                'filter[synopsis]'?: string | undefined
                'filter[advisory_type]'?: string | undefined
                'filter[severity]'?: string | undefined
              }
            }
            output: ControllersSystemAdvisoriesDBLookup[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inventory_id: string } } & {
              query: {
                search?: string | undefined
                'filter[id]'?: string | undefined
                'filter[description]'?: string | undefined
                'filter[public_date]'?: string | undefined
                'filter[synopsis]'?: string | undefined
                'filter[advisory_type]'?: string | undefined
                'filter[severity]'?: string | undefined
              }
            }
            output: ControllersSystemAdvisoriesDBLookup[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/patch/v1/export/systems/:inventory_id/packages': {
      $get: {
        input: { param: { inventory_id: string } } & {
          query: {
            search?: string | undefined
            'filter[name]'?: string | undefined
            'filter[description]'?: string | undefined
            'filter[evra]'?: string | undefined
            'filter[summary]'?: string | undefined
            'filter[updatable]'?: boolean | undefined
          }
        }
        output: ControllersSystemPackageInline[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/packages/': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            sort?: 'id' | 'name' | 'systems_installed' | 'systems_updatable' | undefined
            search?: string | undefined
            'filter[name]'?: string | undefined
            'filter[systems_installed]'?: string | undefined
            'filter[systems_updatable]'?: string | undefined
            'filter[summary]'?: string | undefined
            tags?: string[] | undefined
            'filter[system_profile][sap_system]'?: string | undefined
            'filter[system_profile][sap_sids][in]'?: string[] | undefined
          }
        }
        output: ControllersPackagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/packages/:package_name': {
      $get: {
        input: { param: { package_name: string } }
        output: ControllersPackageDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/packages/:package_name/systems': {
      $get: {
        input: { param: { package_name: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            tags?: string[] | undefined
            'filter[system_profile][sap_system]'?: string | undefined
            'filter[system_profile][sap_sids][in]'?: string[] | undefined
          }
        }
        output: ControllersPackageSystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/packages/:package_name/versions': {
      $get: {
        input: { param: { package_name: string } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        }
        output: ControllersPackageVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/systems': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            sort?:
              | 'id'
              | 'display_name'
              | 'last_evaluation'
              | 'last_upload'
              | 'rhsa_count'
              | 'rhba_count'
              | 'rhea_count'
              | 'other_count'
              | 'stale'
              | 'packages_installed'
              | 'packages_updatable'
              | undefined
            search?: string | undefined
            'filter[insights_id]'?: string | undefined
            'filter[id]'?: string | undefined
            'filter[display_name]'?: string | undefined
            'filter[last_evaluation]'?: string | undefined
            'filter[last_upload]'?: string | undefined
            'filter[rhsa_count]'?: string | undefined
            'filter[rhba_count]'?: string | undefined
            'filter[rhea_count]'?: string | undefined
            'filter[other_count]'?: string | undefined
            'filter[stale]'?: string | undefined
            'filter[packages_installed]'?: string | undefined
            'filter[packages_updatable]'?: string | undefined
            'filter[stale_timestamp]'?: string | undefined
            'filter[stale_warning_timestamp]'?: string | undefined
            'filter[culled_timestamp]'?: string | undefined
            'filter[created]'?: string | undefined
            tags?: string[] | undefined
            'filter[system_profile][sap_system]'?: string | undefined
            'filter[system_profile][sap_sids][in]'?: string[] | undefined
          }
        }
        output: ControllersSystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/systems/:inventory_id': {
      $delete: {
        input: { param: { inventory_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { inventory_id: string } }
        output: ControllersSystemDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/systems/:inventory_id/advisories': {
      $get: {
        input: { param: { inventory_id: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            sort?: 'id' | 'name' | 'type' | 'synopsis' | 'public_date' | undefined
            search?: string | undefined
            'filter[id]'?: string | undefined
            'filter[description]'?: string | undefined
            'filter[public_date]'?: string | undefined
            'filter[synopsis]'?: string | undefined
            'filter[advisory_type]'?: string | undefined
            'filter[severity]'?: string | undefined
          }
        }
        output: ControllersSystemAdvisoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/systems/:inventory_id/packages': {
      $get: {
        input: { param: { inventory_id: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            search?: string | undefined
            'filter[name]'?: string | undefined
            'filter[description]'?: string | undefined
            'filter[evra]'?: string | undefined
            'filter[summary]'?: string | undefined
            'filter[updatable]'?: boolean | undefined
          }
        }
        output: ControllersSystemPackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/views/advisories/systems': {
      $post: {
        input: { json: ControllersSystemsAdvisoriesRequest }
        output: ControllersAdvisoriesSystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patch/v1/views/systems/advisories': {
      $post: {
        input: { json: ControllersSystemsAdvisoriesRequest }
        output: ControllersSystemsAdvisoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
