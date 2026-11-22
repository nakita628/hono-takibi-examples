declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/actions/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/addons/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                categories?:
                  | (
                      | 'documentation'
                      | 'storage'
                      | 'bibliography'
                      | 'other'
                      | 'security'
                      | 'citations'
                    )[]
                  | undefined
                description?: string | undefined
                name?: string | undefined
                url?: string | undefined
              }
            | undefined
          id?: string | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/citations/styles/': {
      $get: {
        input: {}
        output: {
          attributes: {
            date_parsed: string
            short_title?: string | undefined
            summary?: string | undefined
            title: string
          }
          id: string
          links?: { [x: string]: unknown } | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/citations/styles/:style_id/': {
      $get: {
        input: { param: { style_id: string } }
        output: {
          attributes: {
            date_parsed: string
            short_title?: string | undefined
            summary?: string | undefined
            title: string
          }
          id: string
          links?: { [x: string]: unknown } | undefined
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/collections/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                bookmarks?: boolean | undefined
                collected_type_choices?: string[] | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                is_promoted?: boolean | undefined
                is_public?: boolean | undefined
                issue_choices?: string[] | undefined
                program_area_choices?: string[] | undefined
                status_choices?: string[] | undefined
                title?: string | undefined
                volume_choices?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                collected_metadata?: string | undefined
                linked_nodes?: string | undefined
                linked_preprints?: string | undefined
                linked_registrations?: string | undefined
                node_links?: string | undefined
                provider?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/': {
      $delete: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { collection_id: string } }
        output: {
          attributes?:
            | {
                bookmarks?: boolean | undefined
                collected_type_choices?: string[] | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                is_promoted?: boolean | undefined
                is_public?: boolean | undefined
                issue_choices?: string[] | undefined
                program_area_choices?: string[] | undefined
                status_choices?: string[] | undefined
                title?: string | undefined
                volume_choices?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                collected_metadata?: string | undefined
                linked_nodes?: string | undefined
                linked_preprints?: string | undefined
                linked_registrations?: string | undefined
                node_links?: string | undefined
                provider?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/collected_metadata/': {
      $get: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { collection_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/collections/:collection_id/collected_metadata/:cgm_id': {
      $delete: {
        input: { param: { collection_id: string; cgm_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { collection_id: string; cgm_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { collection_id: string; cgm_id: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/collections/:collection_id/collected_metadata/:cgm_id/relationships/subjects/': {
      $get: {
        input: { param: { collection_id: string; cgm_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { collection_id: string; cgm_id: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/collections/:collection_id/collected_metadata/:cgm_id/subjects/': {
      $get: {
        input: { param: { collection_id: string; cgm_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/linked_nodes': {
      $get: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/linked_nodes/relationships/': {
      $delete: {
        input: { param: { collection_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { collection_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/linked_preprints/': {
      $get: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/linked_registrations/': {
      $get: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_id/linked_registrations/relationships/': {
      $delete: {
        input: { param: { collection_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { collection_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { collection_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/:comment_id/': {
      $delete: {
        input: { param: { comment_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { comment_id: string } }
        output: {
          attributes?:
            | {
                can_edit?: boolean | undefined
                content?: string | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                deleted?: boolean | undefined
                has_children?: boolean | undefined
                has_report?: boolean | undefined
                is_abuse?: boolean | undefined
                is_ham?: boolean | undefined
                modified?: boolean | undefined
                page?: string | undefined
              }
            | undefined
          id: string
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                node?: string | undefined
                replies?: string | undefined
                reports?: string | undefined
                target?: string | undefined
                user?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { comment_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/draft_registrations/': {
      $get: {
        input: {}
        output: {
          attributes: {
            category?: string | undefined
            current_user_permissions?: string[] | undefined
            datetime_initiated?: string | undefined
            datetime_updated?: string | undefined
            description?: string | undefined
            has_project?: boolean | undefined
            node_license?:
              | { copyright_holders?: string[] | undefined; year?: number | undefined }
              | undefined
            registration_metadata?: { [x: string]: unknown } | undefined
            registration_responses?: { [x: string]: unknown } | undefined
            tags?: string[] | undefined
            title?: string | undefined
          }
          id: string
          links: { html: string }
          relationships: {
            branched_from?: string | undefined
            initiator?: string | undefined
            registration_schema?: string | undefined
          }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          json: {
            attributes: {
              category?: string | undefined
              current_user_permissions?: string[] | undefined
              datetime_initiated?: string | undefined
              datetime_updated?: string | undefined
              description?: string | undefined
              has_project?: boolean | undefined
              node_license?:
                | { copyright_holders?: string[] | undefined; year?: number | undefined }
                | undefined
              registration_metadata?: { [x: string]: unknown } | undefined
              registration_responses?: { [x: string]: unknown } | undefined
              tags?: string[] | undefined
              title?: string | undefined
            }
            id: string
            links: { html: string }
            relationships: {
              branched_from?: string | undefined
              initiator?: string | undefined
              registration_schema?: string | undefined
            }
            type: string
          }
        }
        output: {
          attributes: {
            category?: string | undefined
            current_user_permissions?: string[] | undefined
            datetime_initiated?: string | undefined
            datetime_updated?: string | undefined
            description?: string | undefined
            has_project?: boolean | undefined
            node_license?:
              | { copyright_holders?: string[] | undefined; year?: number | undefined }
              | undefined
            registration_metadata?: { [x: string]: unknown } | undefined
            registration_responses?: { [x: string]: unknown } | undefined
            tags?: string[] | undefined
            title?: string | undefined
          }
          id: string
          links: { html: string }
          relationships: {
            branched_from?: string | undefined
            initiator?: string | undefined
            registration_schema?: string | undefined
          }
          type: string
        }
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/draft_registrations/:draft_id/': {
      $delete: {
        input: { param: { draft_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { draft_id: string } }
        output: {
          attributes: {
            category?: string | undefined
            current_user_permissions?: string[] | undefined
            datetime_initiated?: string | undefined
            datetime_updated?: string | undefined
            description?: string | undefined
            has_project?: boolean | undefined
            node_license?:
              | { copyright_holders?: string[] | undefined; year?: number | undefined }
              | undefined
            registration_metadata?: { [x: string]: unknown } | undefined
            registration_responses?: { [x: string]: unknown } | undefined
            tags?: string[] | undefined
            title?: string | undefined
          }
          id: string
          links: { html: string }
          relationships: {
            branched_from?: string | undefined
            initiator?: string | undefined
            registration_schema?: string | undefined
          }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { draft_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/draft_registrations/:draft_id/contributors/': {
      $get: {
        input: { param: { draft_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { draft_id: string } } & {
          json: {
            attributes?:
              | {
                  bibliographic?: boolean | undefined
                  index?: number | undefined
                  permission?: 'read' | 'write' | 'admin' | undefined
                  unregistered_contributor?: string | undefined
                }
              | undefined
            id?: string | undefined
            links?: { self?: string | undefined } | undefined
            relationships: { node: string; user: string }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/draft_registrations/:draft_id/contributors/:user_id/': {
      $get: {
        input: { param: { draft_id: string; user_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/draft_registrations/:draft_id/institutions/': {
      $get: {
        input: { param: { draft_id: string } }
        output: {
          attributes?:
            | {
                auth_url?: string | undefined
                description?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                nodes?: string | undefined
                registrations?: string | undefined
                users?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/draft_registrations/:draft_id/subjects/': {
      $get: {
        input: { param: { draft_id: string } }
        output: {
          attributes?: { taxonomy_name?: string | undefined; text?: string | undefined } | undefined
          embeds?:
            | {
                parent?:
                  | {
                      data?:
                        | {
                            attributes?:
                              | { taxonomy_name?: string | undefined; text?: string | undefined }
                              | undefined
                            data?: { [x: string]: unknown } | undefined
                            id?: string | undefined
                            relationships?:
                              | { children?: string | undefined; parent?: string | undefined }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { children?: string | undefined; parent?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/files/:file_id/': {
      $get: {
        input: { param: { file_id: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { file_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/files/:file_id/versions/': {
      $get: {
        input: { param: { file_id: string } }
        output: {
          attributes?:
            | {
                content_type?: { [x: string]: unknown } | undefined
                date_created?: string | undefined
                size?: number | undefined
              }
            | undefined
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/files/:file_id/versions/:version_id/': {
      $get: {
        input: { param: { file_id: string; version_id: string } }
        output: {
          attributes?:
            | {
                content_type?: { [x: string]: unknown } | undefined
                date_created?: string | undefined
                size?: number | undefined
              }
            | undefined
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/institutions/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                auth_url?: string | undefined
                description?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                nodes?: string | undefined
                registrations?: string | undefined
                users?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/institutions/:institution_id/': {
      $get: {
        input: { param: { institution_id: string } }
        output: {
          attributes?:
            | {
                auth_url?: string | undefined
                description?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                nodes?: string | undefined
                registrations?: string | undefined
                users?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/institutions/:institution_id/nodes/': {
      $get: {
        input: { param: { institution_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/institutions/:institution_id/registrations/': {
      $get: {
        input: { param: { institution_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/institutions/:institution_id/users/': {
      $get: {
        input: { param: { institution_id: string } }
        output: {
          attributes: {
            active: boolean
            date_registered: string
            family_name?: string | undefined
            full_name: string
            given_name?: string | undefined
            locale?: string | undefined
            middle_names?: string | undefined
            suffix?: string | undefined
            timezone?: string | undefined
          }
          id: string
          links: { html?: string | undefined; profile_image?: string | undefined }
          relationships: { institutions?: string | undefined; nodes?: string | undefined }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/license/:license_id/': {
      $get: {
        input: { param: { license_id: string } }
        output: {
          attributes?:
            | {
                name?: string | undefined
                required_fields?: string[] | undefined
                text?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/licenses/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                name?: string | undefined
                required_fields?: string[] | undefined
                text?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/logs/:log_id/': {
      $get: {
        input: { param: { log_id: string } }
        output: {
          attributes: {
            action: string
            date: string
            params?:
              | {
                  addon?: string | undefined
                  anonymous_link?: boolean | undefined
                  bucket?: string | undefined
                  citation_name?: string | undefined
                  contributors?: string | undefined
                  data_set?: string | undefined
                  destination?: string | undefined
                  figshare_title?: string | undefined
                  file?: string | undefined
                  filename?: string | undefined
                  folder?: string | undefined
                  folder_name?: string | undefined
                  forward_url?: string | undefined
                  github_repo?: string | undefined
                  github_user?: string | undefined
                  identifiers?: string | undefined
                  institution?: string | undefined
                  kind?: string | undefined
                  license?: string | undefined
                  old_page?: string | undefined
                  page?: string | undefined
                  page_id?: string | undefined
                  params_node?: string | undefined
                  params_project?: string | undefined
                  path?: string | undefined
                  pointer?: string | undefined
                  preprint?: string | undefined
                  preprint_provider?: string | undefined
                  previous_institution?: string | undefined
                  source?: string | undefined
                  study?: string | undefined
                  tag?: string | undefined
                  tags?: string | undefined
                  target?: string | undefined
                  template_node?: string | undefined
                  title_new?: string | undefined
                  title_original?: string | undefined
                  updated_fields?: string | undefined
                  urls?: string | undefined
                  version?: string | undefined
                  wiki?: string | undefined
                }
              | undefined
          }
          id: string
          links: { self: string }
          relationships: {
            linked_node?: string | undefined
            node: string
            original_node?: string | undefined
            template_node?: string | undefined
            user?: string | undefined
          }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/': {
      $get: {
        input: {}
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          json: {
            attributes: {
              category:
                | 'analysis'
                | 'communication'
                | 'data'
                | 'hypothesis'
                | 'instrumentation'
                | 'methods and measures'
                | 'procedure'
                | 'project'
                | 'software'
                | 'other'
              collection?: boolean | undefined
              current_user_can_comment?: boolean | undefined
              current_user_permissions?: string[] | undefined
              date_created?: string | undefined
              date_modified?: string | undefined
              description?: string | undefined
              fork?: boolean | undefined
              forked_date?: string | undefined
              node_license?: string | undefined
              preprint?: boolean | undefined
              public?: boolean | undefined
              registration?: boolean | undefined
              tags?: string[] | undefined
              template_from?: string | undefined
              title: string
            }
            id?: string | undefined
            links?: { html?: string | undefined; self?: string | undefined } | undefined
            relationships?:
              | {
                  affiliated_institutions?: string | undefined
                  children?: string | undefined
                  citation?: string | undefined
                  comments?: string | undefined
                  contributors?: string | undefined
                  draft_registrations?: string | undefined
                  files?: string | undefined
                  forked_from?: string | undefined
                  forks?: string | undefined
                  identifiers?: string | undefined
                  license?: string | undefined
                  linked_nodes?: string | undefined
                  logs?: string | undefined
                  node_links?: string | undefined
                  parent?: string | undefined
                  preprints?: string | undefined
                  registrations?: string | undefined
                  root?: string | undefined
                  template_node?: string | undefined
                  view_only_links?: string | undefined
                  wikis?: string | undefined
                }
              | undefined
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/nodes/:node_id/': {
      $delete: {
        input: { param: { node_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { node_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/addons/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                categories?:
                  | (
                      | 'documentation'
                      | 'storage'
                      | 'bibliography'
                      | 'other'
                      | 'security'
                      | 'citations'
                    )[]
                  | undefined
                description?: string | undefined
                name?: string | undefined
                url?: string | undefined
              }
            | undefined
          id?: string | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/addons/:provider/': {
      $get: {
        input: { param: { node_id: string; provider: string } }
        output: {
          attributes?:
            | {
                configured?: boolean | undefined
                enabled?: boolean | undefined
                external_account_id?: string | undefined
                folder_id?: string | undefined
                folder_path?: string | undefined
                label?: string | undefined
                node_has_auth?: boolean | undefined
                url?: string | undefined
              }
            | undefined
          id: string
          links?: { self: string } | undefined
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { node_id: string; provider: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/addons/:provider/folders/': {
      $get: {
        input: { param: { node_id: string; provider: string } }
        output: {
          attributes?:
            | {
                categories?:
                  | (
                      | 'documentation'
                      | 'storage'
                      | 'bibliography'
                      | 'other'
                      | 'security'
                      | 'citations'
                    )[]
                  | undefined
                description?: string | undefined
                name?: string | undefined
                url?: string | undefined
              }
            | undefined
          id?: string | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/children/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { node_id: string } } & {
          json: {
            attributes: {
              category:
                | 'analysis'
                | 'communication'
                | 'data'
                | 'hypothesis'
                | 'instrumentation'
                | 'methods and measures'
                | 'procedure'
                | 'project'
                | 'software'
                | 'other'
              collection?: boolean | undefined
              current_user_can_comment?: boolean | undefined
              current_user_permissions?: string[] | undefined
              date_created?: string | undefined
              date_modified?: string | undefined
              description?: string | undefined
              fork?: boolean | undefined
              forked_date?: string | undefined
              node_license?: string | undefined
              preprint?: boolean | undefined
              public?: boolean | undefined
              registration?: boolean | undefined
              tags?: string[] | undefined
              template_from?: string | undefined
              title: string
            }
            id?: string | undefined
            links?: { html?: string | undefined; self?: string | undefined } | undefined
            relationships?:
              | {
                  affiliated_institutions?: string | undefined
                  children?: string | undefined
                  citation?: string | undefined
                  comments?: string | undefined
                  contributors?: string | undefined
                  draft_registrations?: string | undefined
                  files?: string | undefined
                  forked_from?: string | undefined
                  forks?: string | undefined
                  identifiers?: string | undefined
                  license?: string | undefined
                  linked_nodes?: string | undefined
                  logs?: string | undefined
                  node_links?: string | undefined
                  parent?: string | undefined
                  preprints?: string | undefined
                  registrations?: string | undefined
                  root?: string | undefined
                  template_node?: string | undefined
                  view_only_links?: string | undefined
                  wikis?: string | undefined
                }
              | undefined
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/nodes/:node_id/citation/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                author?: string | undefined
                doi?: string | undefined
                publisher?: string | undefined
                title?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/citation/:style_id/': {
      $get: {
        input: { param: { style_id: string; node_id: string } }
        output: {
          attributes?: { citation?: string | undefined } | undefined
          id?: string | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/comments/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                can_edit?: boolean | undefined
                content?: string | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                deleted?: boolean | undefined
                has_children?: boolean | undefined
                has_report?: boolean | undefined
                is_abuse?: boolean | undefined
                is_ham?: boolean | undefined
                modified?: boolean | undefined
                page?: string | undefined
              }
            | undefined
          id: string
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                node?: string | undefined
                replies?: string | undefined
                reports?: string | undefined
                target?: string | undefined
                user?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { node_id: string } } & {
          json: {
            attributes?:
              | {
                  can_edit?: boolean | undefined
                  content?: string | undefined
                  date_created?: string | undefined
                  date_modified?: string | undefined
                  deleted?: boolean | undefined
                  has_children?: boolean | undefined
                  has_report?: boolean | undefined
                  is_abuse?: boolean | undefined
                  is_ham?: boolean | undefined
                  modified?: boolean | undefined
                  page?: string | undefined
                }
              | undefined
            id: string
            links?: { self?: string | undefined } | undefined
            relationships?:
              | {
                  node?: string | undefined
                  replies?: string | undefined
                  reports?: string | undefined
                  target?: string | undefined
                  user?: string | undefined
                }
              | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/nodes/:node_id/contributors/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                bibliographic?: boolean | undefined
                index?: number | undefined
                permission?: 'read' | 'write' | 'admin' | undefined
                unregistered_contributor?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships: { node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { node_id: string } } & {
          json: {
            attributes?:
              | {
                  bibliographic?: boolean | undefined
                  index?: number | undefined
                  permission?: 'read' | 'write' | 'admin' | undefined
                  unregistered_contributor?: string | undefined
                }
              | undefined
            id?: string | undefined
            links?: { self?: string | undefined } | undefined
            relationships: { node: string; user: string }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/nodes/:node_id/contributors/:user_id/': {
      $delete: {
        input: { param: { node_id: string; user_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { node_id: string; user_id: string } }
        output: {
          attributes?:
            | {
                bibliographic?: boolean | undefined
                index?: number | undefined
                permission?: 'read' | 'write' | 'admin' | undefined
                unregistered_contributor?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships: { node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { node_id: string; user_id: string } } & {
          json: {
            attributes?:
              | {
                  bibliographic?: boolean | undefined
                  index?: number | undefined
                  permission?: 'read' | 'write' | 'admin' | undefined
                  unregistered_contributor?: string | undefined
                }
              | undefined
            id?: string | undefined
            links?: { self?: string | undefined } | undefined
            relationships: { node: string; user: string }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/draft_registrations/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            category?: string | undefined
            current_user_permissions?: string[] | undefined
            datetime_initiated?: string | undefined
            datetime_updated?: string | undefined
            description?: string | undefined
            has_project?: boolean | undefined
            node_license?:
              | { copyright_holders?: string[] | undefined; year?: number | undefined }
              | undefined
            registration_metadata?: { [x: string]: unknown } | undefined
            registration_responses?: { [x: string]: unknown } | undefined
            tags?: string[] | undefined
            title?: string | undefined
          }
          id: string
          links: { html: string }
          relationships: {
            branched_from?: string | undefined
            initiator?: string | undefined
            registration_schema?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { node_id: string } } & {
          json: {
            attributes: {
              category?: string | undefined
              current_user_permissions?: string[] | undefined
              datetime_initiated?: string | undefined
              datetime_updated?: string | undefined
              description?: string | undefined
              has_project?: boolean | undefined
              node_license?:
                | { copyright_holders?: string[] | undefined; year?: number | undefined }
                | undefined
              registration_metadata?: { [x: string]: unknown } | undefined
              registration_responses?: { [x: string]: unknown } | undefined
              tags?: string[] | undefined
              title?: string | undefined
            }
            id: string
            links: { html: string }
            relationships: {
              branched_from?: string | undefined
              initiator?: string | undefined
              registration_schema?: string | undefined
            }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/nodes/:node_id/draft_registrations/:draft_id/': {
      $delete: {
        input: { param: { node_id: string; draft_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { node_id: string; draft_id: string } }
        output: {
          attributes: {
            category?: string | undefined
            current_user_permissions?: string[] | undefined
            datetime_initiated?: string | undefined
            datetime_updated?: string | undefined
            description?: string | undefined
            has_project?: boolean | undefined
            node_license?:
              | { copyright_holders?: string[] | undefined; year?: number | undefined }
              | undefined
            registration_metadata?: { [x: string]: unknown } | undefined
            registration_responses?: { [x: string]: unknown } | undefined
            tags?: string[] | undefined
            title?: string | undefined
          }
          id: string
          links: { html: string }
          relationships: {
            branched_from?: string | undefined
            initiator?: string | undefined
            registration_schema?: string | undefined
          }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { node_id: string; draft_id: string } } & {
          json: {
            attributes: {
              category?: string | undefined
              current_user_permissions?: string[] | undefined
              datetime_initiated?: string | undefined
              datetime_updated?: string | undefined
              description?: string | undefined
              has_project?: boolean | undefined
              node_license?:
                | { copyright_holders?: string[] | undefined; year?: number | undefined }
                | undefined
              registration_metadata?: { [x: string]: unknown } | undefined
              registration_responses?: { [x: string]: unknown } | undefined
              tags?: string[] | undefined
              title?: string | undefined
            }
            id: string
            links: { html: string }
            relationships: {
              branched_from?: string | undefined
              initiator?: string | undefined
              registration_schema?: string | undefined
            }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/files/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/files/providers/:provider/': {
      $get: {
        input: { param: { node_id: string; provider: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/files/:provider/': {
      $get: {
        input: { param: { node_id: string; provider: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/files/:provider/:path/': {
      $get: {
        input: { param: { node_id: string; provider: string; path: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/forks/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { node_id: string } } & {
          json: {
            attributes: {
              category:
                | 'analysis'
                | 'communication'
                | 'data'
                | 'hypothesis'
                | 'instrumentation'
                | 'methods and measures'
                | 'procedure'
                | 'project'
                | 'software'
                | 'other'
              collection?: boolean | undefined
              current_user_can_comment?: boolean | undefined
              current_user_permissions?: string[] | undefined
              date_created?: string | undefined
              date_modified?: string | undefined
              description?: string | undefined
              fork?: boolean | undefined
              forked_date?: string | undefined
              node_license?: string | undefined
              preprint?: boolean | undefined
              public?: boolean | undefined
              registration?: boolean | undefined
              tags?: string[] | undefined
              template_from?: string | undefined
              title: string
            }
            id?: string | undefined
            links?: { html?: string | undefined; self?: string | undefined } | undefined
            relationships?:
              | {
                  affiliated_institutions?: string | undefined
                  children?: string | undefined
                  citation?: string | undefined
                  comments?: string | undefined
                  contributors?: string | undefined
                  draft_registrations?: string | undefined
                  files?: string | undefined
                  forked_from?: string | undefined
                  forks?: string | undefined
                  identifiers?: string | undefined
                  license?: string | undefined
                  linked_nodes?: string | undefined
                  logs?: string | undefined
                  node_links?: string | undefined
                  parent?: string | undefined
                  preprints?: string | undefined
                  registrations?: string | undefined
                  root?: string | undefined
                  template_node?: string | undefined
                  view_only_links?: string | undefined
                  wikis?: string | undefined
                }
              | undefined
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/nodes/:node_id/identifiers/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | { category?: 'ark' | 'doi' | undefined; value?: string | undefined }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { referent?: string | undefined } | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/institutions/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                auth_url?: string | undefined
                description?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                nodes?: string | undefined
                registrations?: string | undefined
                users?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/linked_nodes/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/logs/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            action: string
            date: string
            params?:
              | {
                  addon?: string | undefined
                  anonymous_link?: boolean | undefined
                  bucket?: string | undefined
                  citation_name?: string | undefined
                  contributors?: string | undefined
                  data_set?: string | undefined
                  destination?: string | undefined
                  figshare_title?: string | undefined
                  file?: string | undefined
                  filename?: string | undefined
                  folder?: string | undefined
                  folder_name?: string | undefined
                  forward_url?: string | undefined
                  github_repo?: string | undefined
                  github_user?: string | undefined
                  identifiers?: string | undefined
                  institution?: string | undefined
                  kind?: string | undefined
                  license?: string | undefined
                  old_page?: string | undefined
                  page?: string | undefined
                  page_id?: string | undefined
                  params_node?: string | undefined
                  params_project?: string | undefined
                  path?: string | undefined
                  pointer?: string | undefined
                  preprint?: string | undefined
                  preprint_provider?: string | undefined
                  previous_institution?: string | undefined
                  source?: string | undefined
                  study?: string | undefined
                  tag?: string | undefined
                  tags?: string | undefined
                  target?: string | undefined
                  template_node?: string | undefined
                  title_new?: string | undefined
                  title_original?: string | undefined
                  updated_fields?: string | undefined
                  urls?: string | undefined
                  version?: string | undefined
                  wiki?: string | undefined
                }
              | undefined
          }
          id: string
          links: { self: string }
          relationships: {
            linked_node?: string | undefined
            node: string
            original_node?: string | undefined
            template_node?: string | undefined
            user?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/preprints/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                date_created?: string | undefined
                date_modified?: string | undefined
                date_published?: string | undefined
                doi?: string | undefined
                is_preprint_orphan?: boolean | undefined
                license_record?: string | undefined
                subjects?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                doi?: string | undefined
                html?: string | undefined
                preprint_doi?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: {
            bibliographic_contributors?: string | undefined
            citation?: string | undefined
            identifiers?: string | undefined
            license?: string | undefined
            node: string
            primary_file: string
            provider: string
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/registrations/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            category?:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
              | undefined
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            date_registered?: string | undefined
            date_withdrawn?: string | undefined
            description?: string | undefined
            embargo_end_date?: string | undefined
            fork?: boolean | undefined
            node_license?: string | undefined
            pending_embargo_approval?: boolean | undefined
            pending_registration_approval?: boolean | undefined
            pending_withdrawal?: boolean | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registered_meta?: string | undefined
            registration?: boolean | undefined
            registration_supplement?: string | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title?: string | undefined
            withdrawal_justification?: string | undefined
            withdrawn?: boolean | undefined
          }
          id: string
          links: { html?: string | undefined; self?: string | undefined }
          relationships: {
            affiliated_institutions?: string | undefined
            children?: string | undefined
            citation?: string | undefined
            comments?: string | undefined
            contributors?: string | undefined
            files?: string | undefined
            forks?: string | undefined
            identifiers?: string | undefined
            linked_nodes?: string | undefined
            logs?: string | undefined
            node_links?: string | undefined
            parent?: string | undefined
            registered_by?: string | undefined
            registered_from?: string | undefined
            registration_schema?: string | undefined
            root?: string | undefined
            view_only_links?: string | undefined
            wikis?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/view_only_links/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes: {
            anonymous?: boolean | undefined
            date_created?: string | undefined
            key?: string | undefined
            name?: string | undefined
          }
          id: string
          relationships: { creator: string; nodes: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/view_only_links/:link_id/': {
      $get: {
        input: { param: { node_id: string; link_id: string } }
        output: {
          attributes: {
            anonymous?: boolean | undefined
            date_created?: string | undefined
            key?: string | undefined
            name?: string | undefined
          }
          id: string
          relationships: { creator: string; nodes: string }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:node_id/wikis/': {
      $get: {
        input: { param: { node_id: string } }
        output: {
          attributes?:
            | {
                content_type: string
                current_user_can_comment: string
                date_modified: string
                extra: string
                kind: string
                materialized_path: string
                name: string
                path: string
                size: string
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                download?: string | undefined
                info?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: { comments: string; node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprint_providers/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                advisory_board?: string | undefined
                banner_path?: string | undefined
                description?: string | undefined
                domain?: string | undefined
                domain_redirect_enabled?: boolean | undefined
                email_contact?: string | undefined
                email_support?: string | undefined
                example?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
                social_facebook?: string | undefined
                social_instagram?: string | undefined
                subjects_acceptable?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                external_url?: string | undefined
                preprints?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships?:
            | {
                licenses_acceptable?: string | undefined
                preprints?: string | undefined
                taxonomies?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprint_providers/:preprint_provider_id/': {
      $get: {
        input: { param: { preprint_provider_id: string } }
        output: {
          attributes?:
            | {
                advisory_board?: string | undefined
                banner_path?: string | undefined
                description?: string | undefined
                domain?: string | undefined
                domain_redirect_enabled?: boolean | undefined
                email_contact?: string | undefined
                email_support?: string | undefined
                example?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
                social_facebook?: string | undefined
                social_instagram?: string | undefined
                subjects_acceptable?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                external_url?: string | undefined
                preprints?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships?:
            | {
                licenses_acceptable?: string | undefined
                preprints?: string | undefined
                taxonomies?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprint_providers/:preprint_provider_id/licenses/': {
      $get: {
        input: { param: { preprint_provider_id: string } }
        output: {
          attributes?:
            | {
                name?: string | undefined
                required_fields?: string[] | undefined
                text?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprint_providers/:preprint_provider_id/preprints/': {
      $get: {
        input: { param: { preprint_provider_id: string } }
        output: {
          attributes?:
            | {
                date_created?: string | undefined
                date_modified?: string | undefined
                date_published?: string | undefined
                doi?: string | undefined
                is_preprint_orphan?: boolean | undefined
                license_record?: string | undefined
                subjects?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                doi?: string | undefined
                html?: string | undefined
                preprint_doi?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: {
            bibliographic_contributors?: string | undefined
            citation?: string | undefined
            identifiers?: string | undefined
            license?: string | undefined
            node: string
            primary_file: string
            provider: string
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprint_providers/:preprint_provider_id/taxonomies/': {
      $get: {
        input: { param: { preprint_provider_id: string } }
        output: {
          attributes?:
            | {
                child_count?: number | undefined
                parents?: string[] | undefined
                text?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { parents?: string[] | undefined; self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprints/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                date_created?: string | undefined
                date_modified?: string | undefined
                date_published?: string | undefined
                doi?: string | undefined
                is_preprint_orphan?: boolean | undefined
                license_record?: string | undefined
                subjects?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                doi?: string | undefined
                html?: string | undefined
                preprint_doi?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: {
            bibliographic_contributors?: string | undefined
            citation?: string | undefined
            identifiers?: string | undefined
            license?: string | undefined
            node: string
            primary_file: string
            provider: string
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          json: {
            attributes?:
              | {
                  date_created?: string | undefined
                  date_modified?: string | undefined
                  date_published?: string | undefined
                  doi?: string | undefined
                  is_preprint_orphan?: boolean | undefined
                  license_record?: string | undefined
                  subjects?: string[] | undefined
                }
              | undefined
            id?: string | undefined
            links?:
              | {
                  doi?: string | undefined
                  html?: string | undefined
                  preprint_doi?: string | undefined
                  self?: string | undefined
                }
              | undefined
            relationships: {
              bibliographic_contributors?: string | undefined
              citation?: string | undefined
              identifiers?: string | undefined
              license?: string | undefined
              node: string
              primary_file: string
              provider: string
            }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/preprints/:preprint_id/': {
      $get: {
        input: { param: { preprint_id: string } }
        output: {
          attributes?:
            | {
                date_created?: string | undefined
                date_modified?: string | undefined
                date_published?: string | undefined
                doi?: string | undefined
                is_preprint_orphan?: boolean | undefined
                license_record?: string | undefined
                subjects?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                doi?: string | undefined
                html?: string | undefined
                preprint_doi?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: {
            bibliographic_contributors?: string | undefined
            citation?: string | undefined
            identifiers?: string | undefined
            license?: string | undefined
            node: string
            primary_file: string
            provider: string
          }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { preprint_id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/preprints/:preprint_id/bibliographic_contributors/': {
      $get: {
        input: { param: { preprint_id: string } }
        output: {
          attributes?:
            | {
                bibliographic?: boolean | undefined
                index?: number | undefined
                permission?: 'read' | 'write' | 'admin' | undefined
                unregistered_contributor?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships: { node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprints/:preprint_id/citation/': {
      $get: {
        input: { param: { preprint_id: string } }
        output: {
          attributes?:
            | {
                author?: string | undefined
                doi?: string | undefined
                publisher?: string | undefined
                title?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprints/:preprint_id/citation/:style_id/': {
      $get: {
        input: { param: { style_id: string; preprint_id: string } }
        output: {
          attributes?: { citation?: string | undefined } | undefined
          id?: string | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/preprints/:preprint_id/contributors/': {
      $get: {
        input: { param: { preprint_id: string } }
        output: {
          attributes?:
            | {
                bibliographic?: boolean | undefined
                index?: number | undefined
                permission?: 'read' | 'write' | 'admin' | undefined
                unregistered_contributor?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships: { node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { preprint_id: string } } & {
          json: {
            attributes?:
              | {
                  bibliographic?: boolean | undefined
                  index?: number | undefined
                  permission?: 'read' | 'write' | 'admin' | undefined
                  unregistered_contributor?: string | undefined
                }
              | undefined
            id?: string | undefined
            links?: { self?: string | undefined } | undefined
            relationships: { node: string; user: string }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/preprints/:preprint_id/contributors/:user_id/': {
      $get: {
        input: { param: { preprint_id: string; user_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/registrations/': {
      $get: {
        input: {}
        output: {
          attributes: {
            category?:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
              | undefined
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            date_registered?: string | undefined
            date_withdrawn?: string | undefined
            description?: string | undefined
            embargo_end_date?: string | undefined
            fork?: boolean | undefined
            node_license?: string | undefined
            pending_embargo_approval?: boolean | undefined
            pending_registration_approval?: boolean | undefined
            pending_withdrawal?: boolean | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registered_meta?: string | undefined
            registration?: boolean | undefined
            registration_supplement?: string | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title?: string | undefined
            withdrawal_justification?: string | undefined
            withdrawn?: boolean | undefined
          }
          id: string
          links: { html?: string | undefined; self?: string | undefined }
          relationships: {
            affiliated_institutions?: string | undefined
            children?: string | undefined
            citation?: string | undefined
            comments?: string | undefined
            contributors?: string | undefined
            files?: string | undefined
            forks?: string | undefined
            identifiers?: string | undefined
            linked_nodes?: string | undefined
            logs?: string | undefined
            node_links?: string | undefined
            parent?: string | undefined
            registered_by?: string | undefined
            registered_from?: string | undefined
            registration_schema?: string | undefined
            root?: string | undefined
            view_only_links?: string | undefined
            wikis?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            category?:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
              | undefined
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            date_registered?: string | undefined
            date_withdrawn?: string | undefined
            description?: string | undefined
            embargo_end_date?: string | undefined
            fork?: boolean | undefined
            node_license?: string | undefined
            pending_embargo_approval?: boolean | undefined
            pending_registration_approval?: boolean | undefined
            pending_withdrawal?: boolean | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registered_meta?: string | undefined
            registration?: boolean | undefined
            registration_supplement?: string | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title?: string | undefined
            withdrawal_justification?: string | undefined
            withdrawn?: boolean | undefined
          }
          id: string
          links: { html?: string | undefined; self?: string | undefined }
          relationships: {
            affiliated_institutions?: string | undefined
            children?: string | undefined
            citation?: string | undefined
            comments?: string | undefined
            contributors?: string | undefined
            files?: string | undefined
            forks?: string | undefined
            identifiers?: string | undefined
            linked_nodes?: string | undefined
            logs?: string | undefined
            node_links?: string | undefined
            parent?: string | undefined
            registered_by?: string | undefined
            registered_from?: string | undefined
            registration_schema?: string | undefined
            root?: string | undefined
            view_only_links?: string | undefined
            wikis?: string | undefined
          }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { registration_id: string } } & {
          json: {
            attributes: {
              category?:
                | 'analysis'
                | 'communication'
                | 'data'
                | 'hypothesis'
                | 'instrumentation'
                | 'methods and measures'
                | 'procedure'
                | 'project'
                | 'software'
                | 'other'
                | undefined
              collection?: boolean | undefined
              current_user_can_comment?: boolean | undefined
              current_user_permissions?: string[] | undefined
              date_created?: string | undefined
              date_modified?: string | undefined
              date_registered?: string | undefined
              date_withdrawn?: string | undefined
              description?: string | undefined
              embargo_end_date?: string | undefined
              fork?: boolean | undefined
              node_license?: string | undefined
              pending_embargo_approval?: boolean | undefined
              pending_registration_approval?: boolean | undefined
              pending_withdrawal?: boolean | undefined
              preprint?: boolean | undefined
              public?: boolean | undefined
              registered_meta?: string | undefined
              registration?: boolean | undefined
              registration_supplement?: string | undefined
              tags?: string[] | undefined
              template_from?: string | undefined
              title?: string | undefined
              withdrawal_justification?: string | undefined
              withdrawn?: boolean | undefined
            }
            id: string
            links: { html?: string | undefined; self?: string | undefined }
            relationships: {
              affiliated_institutions?: string | undefined
              children?: string | undefined
              citation?: string | undefined
              comments?: string | undefined
              contributors?: string | undefined
              files?: string | undefined
              forks?: string | undefined
              identifiers?: string | undefined
              linked_nodes?: string | undefined
              logs?: string | undefined
              node_links?: string | undefined
              parent?: string | undefined
              registered_by?: string | undefined
              registered_from?: string | undefined
              registration_schema?: string | undefined
              root?: string | undefined
              view_only_links?: string | undefined
              wikis?: string | undefined
            }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/children/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            category?:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
              | undefined
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            date_registered?: string | undefined
            date_withdrawn?: string | undefined
            description?: string | undefined
            embargo_end_date?: string | undefined
            fork?: boolean | undefined
            node_license?: string | undefined
            pending_embargo_approval?: boolean | undefined
            pending_registration_approval?: boolean | undefined
            pending_withdrawal?: boolean | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registered_meta?: string | undefined
            registration?: boolean | undefined
            registration_supplement?: string | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title?: string | undefined
            withdrawal_justification?: string | undefined
            withdrawn?: boolean | undefined
          }
          id: string
          links: { html?: string | undefined; self?: string | undefined }
          relationships: {
            affiliated_institutions?: string | undefined
            children?: string | undefined
            citation?: string | undefined
            comments?: string | undefined
            contributors?: string | undefined
            files?: string | undefined
            forks?: string | undefined
            identifiers?: string | undefined
            linked_nodes?: string | undefined
            logs?: string | undefined
            node_links?: string | undefined
            parent?: string | undefined
            registered_by?: string | undefined
            registered_from?: string | undefined
            registration_schema?: string | undefined
            root?: string | undefined
            view_only_links?: string | undefined
            wikis?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/citations/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            date_parsed: string
            short_title?: string | undefined
            summary?: string | undefined
            title: string
          }
          id: string
          links?: { [x: string]: unknown } | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/citations/:citation_id/': {
      $get: {
        input: { param: { registration_id: string; citation_id: string } }
        output: {
          attributes?:
            | {
                author?: string | undefined
                doi?: string | undefined
                publisher?: string | undefined
                title?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/comments/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes?:
            | {
                can_edit?: boolean | undefined
                content?: string | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                deleted?: boolean | undefined
                has_children?: boolean | undefined
                has_report?: boolean | undefined
                is_abuse?: boolean | undefined
                is_ham?: boolean | undefined
                modified?: boolean | undefined
                page?: string | undefined
              }
            | undefined
          id: string
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                node?: string | undefined
                replies?: string | undefined
                reports?: string | undefined
                target?: string | undefined
                user?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/contributors/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes?:
            | {
                bibliographic?: boolean | undefined
                index?: number | undefined
                permission?: 'read' | 'write' | 'admin' | undefined
                unregistered_contributor?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships: { node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/contributors/:user_id/': {
      $get: {
        input: { param: { registration_id: string; user_id: string } }
        output: {
          attributes?:
            | {
                bibliographic?: boolean | undefined
                index?: number | undefined
                permission?: 'read' | 'write' | 'admin' | undefined
                unregistered_contributor?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships: { node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/files/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/files/:provider/': {
      $get: {
        input: { param: { registration_id: string; provider: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/files/:provider/:path/': {
      $get: {
        input: { param: { registration_id: string; provider: string; path: string } }
        output: {
          attributes?:
            | {
                checkout?: string | undefined
                current_user_can_comment?: boolean | undefined
                current_version?: number | undefined
                date_created?: string | undefined
                date_modified?: string | undefined
                delete_allowed?: boolean | undefined
                extra?: { [x: string]: unknown } | undefined
                guid?: string | undefined
                kind?: string | undefined
                last_touched?: string | undefined
                materialized_path?: string | undefined
                name?: string | undefined
                path?: string | undefined
                provider?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                delete?: string | undefined
                download?: string | undefined
                info?: string | undefined
                move?: string | undefined
                new_folder?: string | undefined
                self?: string | undefined
                upload?: string | undefined
              }
            | undefined
          relationships?:
            | {
                checkout?: string | undefined
                comments?: string | undefined
                node?: string | undefined
                versions?: string | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/forks/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            category?:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
              | undefined
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            date_registered?: string | undefined
            date_withdrawn?: string | undefined
            description?: string | undefined
            embargo_end_date?: string | undefined
            fork?: boolean | undefined
            node_license?: string | undefined
            pending_embargo_approval?: boolean | undefined
            pending_registration_approval?: boolean | undefined
            pending_withdrawal?: boolean | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registered_meta?: string | undefined
            registration?: boolean | undefined
            registration_supplement?: string | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title?: string | undefined
            withdrawal_justification?: string | undefined
            withdrawn?: boolean | undefined
          }
          id: string
          links: { html?: string | undefined; self?: string | undefined }
          relationships: {
            affiliated_institutions?: string | undefined
            children?: string | undefined
            citation?: string | undefined
            comments?: string | undefined
            contributors?: string | undefined
            files?: string | undefined
            forks?: string | undefined
            identifiers?: string | undefined
            linked_nodes?: string | undefined
            logs?: string | undefined
            node_links?: string | undefined
            parent?: string | undefined
            registered_by?: string | undefined
            registered_from?: string | undefined
            registration_schema?: string | undefined
            root?: string | undefined
            view_only_links?: string | undefined
            wikis?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { registration_id: string } } & {
          json: {
            attributes: {
              category?:
                | 'analysis'
                | 'communication'
                | 'data'
                | 'hypothesis'
                | 'instrumentation'
                | 'methods and measures'
                | 'procedure'
                | 'project'
                | 'software'
                | 'other'
                | undefined
              collection?: boolean | undefined
              current_user_can_comment?: boolean | undefined
              current_user_permissions?: string[] | undefined
              date_created?: string | undefined
              date_modified?: string | undefined
              date_registered?: string | undefined
              date_withdrawn?: string | undefined
              description?: string | undefined
              embargo_end_date?: string | undefined
              fork?: boolean | undefined
              node_license?: string | undefined
              pending_embargo_approval?: boolean | undefined
              pending_registration_approval?: boolean | undefined
              pending_withdrawal?: boolean | undefined
              preprint?: boolean | undefined
              public?: boolean | undefined
              registered_meta?: string | undefined
              registration?: boolean | undefined
              registration_supplement?: string | undefined
              tags?: string[] | undefined
              template_from?: string | undefined
              title?: string | undefined
              withdrawal_justification?: string | undefined
              withdrawn?: boolean | undefined
            }
            id: string
            links: { html?: string | undefined; self?: string | undefined }
            relationships: {
              affiliated_institutions?: string | undefined
              children?: string | undefined
              citation?: string | undefined
              comments?: string | undefined
              contributors?: string | undefined
              files?: string | undefined
              forks?: string | undefined
              identifiers?: string | undefined
              linked_nodes?: string | undefined
              logs?: string | undefined
              node_links?: string | undefined
              parent?: string | undefined
              registered_by?: string | undefined
              registered_from?: string | undefined
              registration_schema?: string | undefined
              root?: string | undefined
              view_only_links?: string | undefined
              wikis?: string | undefined
            }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/registrations/:registration_id/identifiers/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes?:
            | { category?: 'ark' | 'doi' | undefined; value?: string | undefined }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { referent?: string | undefined } | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/institutions/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes?:
            | {
                auth_url?: string | undefined
                description?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                nodes?: string | undefined
                registrations?: string | undefined
                users?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/linked_nodes/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/logs/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            action: string
            date: string
            params?:
              | {
                  addon?: string | undefined
                  anonymous_link?: boolean | undefined
                  bucket?: string | undefined
                  citation_name?: string | undefined
                  contributors?: string | undefined
                  data_set?: string | undefined
                  destination?: string | undefined
                  figshare_title?: string | undefined
                  file?: string | undefined
                  filename?: string | undefined
                  folder?: string | undefined
                  folder_name?: string | undefined
                  forward_url?: string | undefined
                  github_repo?: string | undefined
                  github_user?: string | undefined
                  identifiers?: string | undefined
                  institution?: string | undefined
                  kind?: string | undefined
                  license?: string | undefined
                  old_page?: string | undefined
                  page?: string | undefined
                  page_id?: string | undefined
                  params_node?: string | undefined
                  params_project?: string | undefined
                  path?: string | undefined
                  pointer?: string | undefined
                  preprint?: string | undefined
                  preprint_provider?: string | undefined
                  previous_institution?: string | undefined
                  source?: string | undefined
                  study?: string | undefined
                  tag?: string | undefined
                  tags?: string | undefined
                  target?: string | undefined
                  template_node?: string | undefined
                  title_new?: string | undefined
                  title_original?: string | undefined
                  updated_fields?: string | undefined
                  urls?: string | undefined
                  version?: string | undefined
                  wiki?: string | undefined
                }
              | undefined
          }
          id: string
          links: { self: string }
          relationships: {
            linked_node?: string | undefined
            node: string
            original_node?: string | undefined
            template_node?: string | undefined
            user?: string | undefined
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/view_only_links/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes: {
            anonymous?: boolean | undefined
            date_created?: string | undefined
            key?: string | undefined
            name?: string | undefined
          }
          id: string
          relationships: { creator: string; nodes: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/view_only_links/:link_id/': {
      $get: {
        input: { param: { registration_id: string; link_id: string } }
        output: {
          attributes: {
            anonymous?: boolean | undefined
            date_created?: string | undefined
            key?: string | undefined
            name?: string | undefined
          }
          id: string
          relationships: { creator: string; nodes: string }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/registrations/:registration_id/wikis/': {
      $get: {
        input: { param: { registration_id: string } }
        output: {
          attributes?:
            | {
                content_type: string
                current_user_can_comment: string
                date_modified: string
                extra: string
                kind: string
                materialized_path: string
                name: string
                path: string
                size: string
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                download?: string | undefined
                info?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: { comments: string; node: string; user: string }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/schema_responses/': {
      $get: {
        input: {}
        output: {
          attributes: {
            date_created?: number | undefined
            date_modified?: number | undefined
            date_submitted?: number | undefined
            is_original_response?: boolean | undefined
            is_pending_current_user_approval?: boolean | undefined
            reviews_state?:
              | 'initial'
              | 'in_progress'
              | 'approved'
              | 'pending_moderation'
              | undefined
            revision_justification?: string | undefined
            revision_responses?: { [x: string]: unknown } | undefined
            updated_response_keys?: { [x: string]: unknown }[] | undefined
          }
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                actions?: string | undefined
                initiated_by?: string | undefined
                registration?: string | undefined
                registration_schema?: string | undefined
              }
            | undefined
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          json: {
            attributes: {
              date_created?: number | undefined
              date_modified?: number | undefined
              date_submitted?: number | undefined
              is_original_response?: boolean | undefined
              is_pending_current_user_approval?: boolean | undefined
              reviews_state?:
                | 'initial'
                | 'in_progress'
                | 'approved'
                | 'pending_moderation'
                | undefined
              revision_justification?: string | undefined
              revision_responses?: { [x: string]: unknown } | undefined
              updated_response_keys?: { [x: string]: unknown }[] | undefined
            }
            id?: string | undefined
            links?: { self?: string | undefined } | undefined
            relationships?:
              | {
                  actions?: string | undefined
                  initiated_by?: string | undefined
                  registration?: string | undefined
                  registration_schema?: string | undefined
                }
              | undefined
            type: string
          }
        }
        output: {
          attributes: {
            date_created?: number | undefined
            date_modified?: number | undefined
            date_submitted?: number | undefined
            is_original_response?: boolean | undefined
            is_pending_current_user_approval?: boolean | undefined
            reviews_state?:
              | 'initial'
              | 'in_progress'
              | 'approved'
              | 'pending_moderation'
              | undefined
            revision_justification?: string | undefined
            revision_responses?: { [x: string]: unknown } | undefined
            updated_response_keys?: { [x: string]: unknown }[] | undefined
          }
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                actions?: string | undefined
                initiated_by?: string | undefined
                registration?: string | undefined
                registration_schema?: string | undefined
              }
            | undefined
          type: string
        }
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/schema_responses/:schema_response_id': {
      $delete: {
        input: { param: { schema_response_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { schema_response_id: string } }
        output: {
          attributes: {
            date_created?: number | undefined
            date_modified?: number | undefined
            date_submitted?: number | undefined
            is_original_response?: boolean | undefined
            is_pending_current_user_approval?: boolean | undefined
            reviews_state?:
              | 'initial'
              | 'in_progress'
              | 'approved'
              | 'pending_moderation'
              | undefined
            revision_justification?: string | undefined
            revision_responses?: { [x: string]: unknown } | undefined
            updated_response_keys?: { [x: string]: unknown }[] | undefined
          }
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                actions?: string | undefined
                initiated_by?: string | undefined
                registration?: string | undefined
                registration_schema?: string | undefined
              }
            | undefined
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { schema_response_id: string } } & {
          json: {
            attributes: {
              date_created?: number | undefined
              date_modified?: number | undefined
              date_submitted?: number | undefined
              is_original_response?: boolean | undefined
              is_pending_current_user_approval?: boolean | undefined
              reviews_state?:
                | 'initial'
                | 'in_progress'
                | 'approved'
                | 'pending_moderation'
                | undefined
              revision_justification?: string | undefined
              revision_responses?: { [x: string]: unknown } | undefined
              updated_response_keys?: { [x: string]: unknown }[] | undefined
            }
            id?: string | undefined
            links?: { self?: string | undefined } | undefined
            relationships?:
              | {
                  actions?: string | undefined
                  initiated_by?: string | undefined
                  registration?: string | undefined
                  registration_schema?: string | undefined
                }
              | undefined
            type: string
          }
        }
        output: {
          attributes: {
            date_created?: number | undefined
            date_modified?: number | undefined
            date_submitted?: number | undefined
            is_original_response?: boolean | undefined
            is_pending_current_user_approval?: boolean | undefined
            reviews_state?:
              | 'initial'
              | 'in_progress'
              | 'approved'
              | 'pending_moderation'
              | undefined
            revision_justification?: string | undefined
            revision_responses?: { [x: string]: unknown } | undefined
            updated_response_keys?: { [x: string]: unknown }[] | undefined
          }
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                actions?: string | undefined
                initiated_by?: string | undefined
                registration?: string | undefined
                registration_schema?: string | undefined
              }
            | undefined
          type: string
        }
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/schema_responses/:schema_response_id/actions/': {
      $get: {
        input: { param: { schema_response_id: string } }
        output: {
          attributes?:
            | {
                auto?: boolean | undefined
                comment?: string | undefined
                date_created?: string | undefined
                from_state?:
                  | 'initial'
                  | 'in_progress'
                  | 'approved'
                  | 'pending_moderation'
                  | undefined
                to_state?: 'in_progress' | 'approved' | 'pending_moderation' | undefined
                trigger?:
                  | 'submit'
                  | 'approve'
                  | 'accept'
                  | 'admin_reject'
                  | 'moderator_reject'
                  | undefined
                visible?: boolean | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { creator?: string | undefined; target?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { schema_response_id: string } }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/schema_responses/:schema_response_id/actions/:schema_response_action_id': {
      $get: {
        input: { param: { schema_response_id: string; schema_response_action_id: string } }
        output: {
          attributes?:
            | {
                auto?: boolean | undefined
                comment?: string | undefined
                date_created?: string | undefined
                from_state?:
                  | 'initial'
                  | 'in_progress'
                  | 'approved'
                  | 'pending_moderation'
                  | undefined
                to_state?: 'in_progress' | 'approved' | 'pending_moderation' | undefined
                trigger?:
                  | 'submit'
                  | 'approve'
                  | 'accept'
                  | 'admin_reject'
                  | 'moderator_reject'
                  | undefined
                visible?: boolean | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { creator?: string | undefined; target?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/schema_responses/:schema_response_id/schema_blocks/': {
      $get: {
        input: { param: { schema_response_id: string } }
        output: {
          attributes?:
            | {
                block_type?:
                  | 'page-heading'
                  | 'section-heading'
                  | 'subsection-heading'
                  | 'paragraph'
                  | 'question-label'
                  | 'short-text-input'
                  | 'long-text-input'
                  | 'file-input'
                  | 'contributors-input'
                  | 'single-select-input'
                  | 'multi-select-input'
                  | 'select-input-option'
                  | 'select-other-option'
                  | undefined
                display_text?: string | undefined
                example_text?: string | undefined
                index?: number | undefined
                registration_response_key?: string | undefined
                required?: boolean | undefined
                schema_block_group_key?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { schema?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/schema_responses/:schema_response_id/schema_blocks/:schema_response_block_id': {
      $get: {
        input: { param: { schema_response_id: string; schema_response_block_id: string } }
        output: {
          attributes?:
            | {
                block_type?:
                  | 'page-heading'
                  | 'section-heading'
                  | 'subsection-heading'
                  | 'paragraph'
                  | 'question-label'
                  | 'short-text-input'
                  | 'long-text-input'
                  | 'file-input'
                  | 'contributors-input'
                  | 'single-select-input'
                  | 'multi-select-input'
                  | 'select-input-option'
                  | 'select-other-option'
                  | undefined
                display_text?: string | undefined
                example_text?: string | undefined
                index?: number | undefined
                registration_response_key?: string | undefined
                required?: boolean | undefined
                schema_block_group_key?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { schema?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/schemas/registrations/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                active?: boolean | undefined
                name?: string | undefined
                schema?: { [x: string]: { [x: string]: unknown } } | undefined
                schema_version?: number | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { schema_blocks?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/schemas/registrations/:registration_schema_id': {
      $get: {
        input: { param: { registration_schema_id: string } }
        output: {
          attributes?:
            | {
                active?: boolean | undefined
                name?: string | undefined
                schema?: { [x: string]: { [x: string]: unknown } } | undefined
                schema_version?: number | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?: { schema_blocks?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/taxonomies/': {
      $get: {
        input: {}
        output: {
          attributes?:
            | {
                child_count?: number | undefined
                parents?: string[] | undefined
                text?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { parents?: string[] | undefined; self?: string | undefined } | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/taxonomies/:taxonomy_id/': {
      $get: {
        input: { param: { taxonomy_id: string } }
        output: {
          attributes?:
            | {
                child_count?: number | undefined
                parents?: string[] | undefined
                text?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { parents?: string[] | undefined; self?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/': {
      $get: {
        input: {}
        output: {
          attributes: {
            active: boolean
            date_registered: string
            family_name?: string | undefined
            full_name: string
            given_name?: string | undefined
            locale?: string | undefined
            middle_names?: string | undefined
            suffix?: string | undefined
            timezone?: string | undefined
          }
          id: string
          links: { html?: string | undefined; profile_image?: string | undefined }
          relationships: { institutions?: string | undefined; nodes?: string | undefined }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          attributes: {
            active: boolean
            date_registered: string
            family_name?: string | undefined
            full_name: string
            given_name?: string | undefined
            locale?: string | undefined
            middle_names?: string | undefined
            suffix?: string | undefined
            timezone?: string | undefined
          }
          id: string
          links: { html?: string | undefined; profile_image?: string | undefined }
          relationships: { institutions?: string | undefined; nodes?: string | undefined }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { user_id: string } } & {
          json: {
            attributes: {
              active: boolean
              date_registered: string
              family_name?: string | undefined
              full_name: string
              given_name?: string | undefined
              locale?: string | undefined
              middle_names?: string | undefined
              suffix?: string | undefined
              timezone?: string | undefined
            }
            id: string
            links: { html?: string | undefined; profile_image?: string | undefined }
            relationships: { institutions?: string | undefined; nodes?: string | undefined }
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:user_id/addons/': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          attributes: { user_has_auth: boolean }
          id: string
          links: { accounts?: { [x: string]: unknown } | undefined; self?: string | undefined }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/addons/:provider/': {
      $get: {
        input: { param: { user_id: string; provider: string } }
        output: {
          attributes: { user_has_auth: boolean }
          id: string
          links: { accounts?: { [x: string]: unknown } | undefined; self?: string | undefined }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/addons/:provider/accounts/': {
      $get: {
        input: { param: { user_id: string; provider: string } }
        output: {
          attributes: { display_name: string; profile_url?: string | undefined; provider: string }
          id: string
          links: { self?: string | undefined }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/addons/:provider/accounts/:account_id/': {
      $get: {
        input: { param: { user_id: string; provider: string; account_id: string } }
        output: {
          attributes: { display_name: string; profile_url?: string | undefined; provider: string }
          id: string
          links: { self?: string | undefined }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/institutions/': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          attributes?:
            | {
                auth_url?: string | undefined
                description?: string | undefined
                logo_path?: string | undefined
                name?: string | undefined
              }
            | undefined
          id?: string | undefined
          links?: { self?: string | undefined } | undefined
          relationships?:
            | {
                nodes?: string | undefined
                registrations?: string | undefined
                users?: string | undefined
              }
            | undefined
          type?: string | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/nodes/': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/preprints/': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          attributes?:
            | {
                date_created?: string | undefined
                date_modified?: string | undefined
                date_published?: string | undefined
                doi?: string | undefined
                is_preprint_orphan?: boolean | undefined
                license_record?: string | undefined
                subjects?: string[] | undefined
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                doi?: string | undefined
                html?: string | undefined
                preprint_doi?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: {
            bibliographic_contributors?: string | undefined
            citation?: string | undefined
            identifiers?: string | undefined
            license?: string | undefined
            node: string
            primary_file: string
            provider: string
          }
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:user_id/registrations/': {
      $get: { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/view_only_links/:link_id/': {
      $get: {
        input: { param: { link_id: string } }
        output: {
          attributes: {
            anonymous?: boolean | undefined
            date_created?: string | undefined
            key?: string | undefined
            name?: string | undefined
          }
          id: string
          relationships: { creator: string; nodes: string }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/view_only_links/:link_id/nodes/': {
      $get: {
        input: { param: { link_id: string } }
        output: {
          attributes: {
            category:
              | 'analysis'
              | 'communication'
              | 'data'
              | 'hypothesis'
              | 'instrumentation'
              | 'methods and measures'
              | 'procedure'
              | 'project'
              | 'software'
              | 'other'
            collection?: boolean | undefined
            current_user_can_comment?: boolean | undefined
            current_user_permissions?: string[] | undefined
            date_created?: string | undefined
            date_modified?: string | undefined
            description?: string | undefined
            fork?: boolean | undefined
            forked_date?: string | undefined
            node_license?: string | undefined
            preprint?: boolean | undefined
            public?: boolean | undefined
            registration?: boolean | undefined
            tags?: string[] | undefined
            template_from?: string | undefined
            title: string
          }
          id?: string | undefined
          links?: { html?: string | undefined; self?: string | undefined } | undefined
          relationships?:
            | {
                affiliated_institutions?: string | undefined
                children?: string | undefined
                citation?: string | undefined
                comments?: string | undefined
                contributors?: string | undefined
                draft_registrations?: string | undefined
                files?: string | undefined
                forked_from?: string | undefined
                forks?: string | undefined
                identifiers?: string | undefined
                license?: string | undefined
                linked_nodes?: string | undefined
                logs?: string | undefined
                node_links?: string | undefined
                parent?: string | undefined
                preprints?: string | undefined
                registrations?: string | undefined
                root?: string | undefined
                template_node?: string | undefined
                view_only_links?: string | undefined
                wikis?: string | undefined
              }
            | undefined
          type: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/wikis/:wiki_id/': {
      $get: {
        input: { param: { wiki_id: string } }
        output: {
          attributes?:
            | {
                content_type: string
                current_user_can_comment: string
                date_modified: string
                extra: string
                kind: string
                materialized_path: string
                name: string
                path: string
                size: string
              }
            | undefined
          id?: string | undefined
          links?:
            | {
                download?: string | undefined
                info?: string | undefined
                self?: string | undefined
              }
            | undefined
          relationships: { comments: string; node: string; user: string }
          type: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/wikis/:wiki_id/content/': {
      $get: { input: { param: { wiki_id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
