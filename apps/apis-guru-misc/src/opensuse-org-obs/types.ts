declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/about': {
      $get: {
        input: {}
        output: {
          commit?: string | undefined
          description: string
          last_deployment?: string | undefined
          revision: string
          title: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/architectures': {
      $get:
        | {
            input: {}
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/architectures/:architecture_name': {
      $get:
        | {
            input: { param: { architecture_name: string } }
            output: { name?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { architecture_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { architecture_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/attribute': {
      $get:
        | {
            input: {}
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/attribute/:namespace': {
      $delete:
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { namespace: string } }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/attribute/:namespace/_meta': {
      $delete:
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { namespace: string } }
            output: {
              modifiable_by?: { user?: string | undefined }[] | undefined
              name?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string } } & {
              json: {
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/attribute/:namespace/:attribute_name': {
      $delete:
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/attribute/:namespace/:attribute_name/_meta': {
      $delete:
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              allowed?: { value?: string[] | undefined } | undefined
              count?: number | undefined
              description?: string | undefined
              modifiable_by?: { user?: string | undefined }[] | undefined
              name?: string | undefined
              namespace?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string; attribute_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { namespace: string; attribute_name: string } } & {
              json: {
                allowed?: { value?: string[] | undefined } | undefined
                count?: number | undefined
                description?: string | undefined
                modifiable_by?: { user?: string | undefined }[] | undefined
                name?: string | undefined
                namespace?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build': {
      $get:
        | {
            input: {}
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/build/:project_name': {
      $get:
        | {
            input: { param: { project_name: string } }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { project_name: string } } & {
              query: {
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                cmd:
                  | 'wipe'
                  | 'restartbuild'
                  | 'killbuild'
                  | 'abortbuild'
                  | 'rebuild'
                  | 'unpublish'
                  | 'sendsysrq'
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string } } & {
              query: {
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                cmd:
                  | 'wipe'
                  | 'restartbuild'
                  | 'killbuild'
                  | 'abortbuild'
                  | 'rebuild'
                  | 'unpublish'
                  | 'sendsysrq'
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { project_name: string } } & {
              query: {
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                cmd:
                  | 'wipe'
                  | 'restartbuild'
                  | 'killbuild'
                  | 'abortbuild'
                  | 'rebuild'
                  | 'unpublish'
                  | 'sendsysrq'
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_name: string } } & {
              query: {
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                cmd:
                  | 'wipe'
                  | 'restartbuild'
                  | 'killbuild'
                  | 'abortbuild'
                  | 'rebuild'
                  | 'unpublish'
                  | 'sendsysrq'
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/_result': {
      $get:
        | {
            input: { param: { project_name: string } } & {
              query: {
                view?: 'summary' | 'status' | 'binarylist' | undefined
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                lastbuild?: boolean | undefined
                locallink?: boolean | undefined
                multibuild?: boolean | undefined
              }
            }
            output: {
              result?:
                | {
                    arch?: string | undefined
                    binarylist?:
                      | {
                          binary?:
                            | {
                                filename?: string | undefined
                                mtime?: string | undefined
                                size?: string | undefined
                              }[]
                            | undefined
                          package?: string | undefined
                        }[]
                      | undefined
                    code?: string | undefined
                    project?: string | undefined
                    repository?: string | undefined
                    state?: string | undefined
                    status?:
                      | {
                          code?: string | undefined
                          details?: string | undefined
                          package?: string | undefined
                        }[]
                      | undefined
                    summary?:
                      | {
                          statuscount?:
                            | { code?: string | undefined; count?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              state?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string } } & {
              query: {
                view?: 'summary' | 'status' | 'binarylist' | undefined
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                lastbuild?: boolean | undefined
                locallink?: boolean | undefined
                multibuild?: boolean | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string } } & {
              query: {
                view?: 'summary' | 'status' | 'binarylist' | undefined
                package?: string | undefined
                arch?: string | undefined
                repository?: string | undefined
                lastbuild?: boolean | undefined
                locallink?: boolean | undefined
                multibuild?: boolean | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name': {
      $get:
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/_buildconfig': {
      $get:
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/_builddepinfo': {
      $get:
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            } & {
              query: {
                package?: string | undefined
                view?: 'pkgnames' | 'revpkgnames' | 'order' | undefined
              }
            }
            output: {
              package?:
                | {
                    name?: string | undefined
                    pkgdep?: string[] | undefined
                    source?: string | undefined
                    subpkg?: string[] | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            } & {
              query: {
                package?: string | undefined
                view?: 'pkgnames' | 'revpkgnames' | 'order' | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            } & {
              query: {
                package?: string | undefined
                view?: 'pkgnames' | 'revpkgnames' | 'order' | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/_repository': {
      $get:
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              binary?:
                | {
                    filename?: string | undefined
                    mtime?: string | undefined
                    size?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              binary?:
                | {
                    filename?: string | undefined
                    mtime?: string | undefined
                    size?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_buildinfo': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              arch?: string | undefined
              bcnt?: string | undefined
              bdep?:
                | {
                    arch?: string | undefined
                    name?: string | undefined
                    notmeta?: string | undefined
                    preinstall?: string | undefined
                    project?: string | undefined
                    release?: string | undefined
                    repository?: string | undefined
                    version?: string | undefined
                  }
                | undefined
              debuginfo?: number | undefined
              file?: string | undefined
              package?: string | undefined
              path?: { [x: string]: unknown } | undefined
              project?: string | undefined
              release?: string | undefined
              repository?: string | undefined
              rev?: number | undefined
              specfile?: string | undefined
              srcmd5?: string | undefined
              subpack?: string | undefined
              verifymd5?: string | undefined
              versrel?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_history': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              entry?:
                | {
                    bcnt?: string | undefined
                    duration?: string | undefined
                    rev?: string | undefined
                    srcmd5?: string | undefined
                    time?: string | undefined
                    versrel?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_jobstatus': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              hostarch?: string | undefined
              jobid?: string | undefined
              lastduration?: string | undefined
              starttime?: string | undefined
              uri?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_log': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_reason': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              explain?: string | undefined
              oldsource?: string | undefined
              time?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_status': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: { code?: string | undefined; package?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
                file_name: string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
                file_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
                file_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: '_repository'[]
                file_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: '_repository'[]
                file_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: '_repository'[]
                file_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: '_repository'[]
                file_name: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name?view=fileinfo': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
                file_name: string
              }
            } & { query: { view: ('fileinfo' | 'fileinfo_ext')[] } }
            output: {
              arch?: string | undefined
              description?: string | undefined
              filename?: string | undefined
              mtime?: string | undefined
              name?: string | undefined
              provides?: string[] | undefined
              provides_ext?: { dep?: string | undefined }[] | undefined
              release?: string | undefined
              requires?: string[] | undefined
              requires_ext?:
                | {
                    dep?: string | undefined
                    provided_by?:
                      | {
                          arch?: string | undefined
                          name?: string | undefined
                          project?: string | undefined
                          release?: string | undefined
                          repository?: string | undefined
                          version?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              size?: string | undefined
              source?: string | undefined
              summary?: string | undefined
              version?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
                file_name: string
              }
            } & { query: { view: ('fileinfo' | 'fileinfo_ext')[] } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                package_name: string
                file_name: string
              }
            } & { query: { view: ('fileinfo' | 'fileinfo_ext')[] } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/configuration': {
      $get:
        | {
            input: {}
            output: {
              admin_email?: string | undefined
              allow_user_to_create_home_project?: string | undefined
              anonymous?: string | undefined
              change_password?: string | undefined
              cleanup_empty_projects?: string | undefined
              default_access_disabled?: string | undefined
              description?: string | undefined
              disable_publish_for_branches?: string | undefined
              disallow_group_creation?: string | undefined
              download_on_demand?: string | undefined
              enforce_project_keys?: string | undefined
              gravatar?: string | undefined
              hide_private_options?: string | undefined
              name?: string | undefined
              obs_url?: string | undefined
              registration?: string | undefined
              schedulers?: { arch?: string[] | undefined } | undefined
              title?: string | undefined
              tos_url?: string | undefined
              unlisted_projects_filter?: string | undefined
              unlisted_projects_filter_description?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
      $put:
        | {
            input: {
              json: {
                admin_email?: string | undefined
                allow_user_to_create_home_project?: string | undefined
                anonymous?: string | undefined
                change_password?: string | undefined
                cleanup_empty_projects?: string | undefined
                default_access_disabled?: string | undefined
                description?: string | undefined
                disable_publish_for_branches?: string | undefined
                disallow_group_creation?: string | undefined
                download_on_demand?: string | undefined
                enforce_project_keys?: string | undefined
                gravatar?: string | undefined
                hide_private_options?: string | undefined
                name?: string | undefined
                obs_url?: string | undefined
                registration?: string | undefined
                schedulers?: { arch?: string[] | undefined } | undefined
                title?: string | undefined
                tos_url?: string | undefined
                unlisted_projects_filter?: string | undefined
                unlisted_projects_filter_description?: string | undefined
              }
            }
            output: {
              admin_email?: string | undefined
              allow_user_to_create_home_project?: string | undefined
              anonymous?: string | undefined
              change_password?: string | undefined
              cleanup_empty_projects?: string | undefined
              default_access_disabled?: string | undefined
              description?: string | undefined
              disable_publish_for_branches?: string | undefined
              disallow_group_creation?: string | undefined
              download_on_demand?: string | undefined
              enforce_project_keys?: string | undefined
              gravatar?: string | undefined
              hide_private_options?: string | undefined
              name?: string | undefined
              obs_url?: string | undefined
              registration?: string | undefined
              schedulers?: { arch?: string[] | undefined } | undefined
              title?: string | undefined
              tos_url?: string | undefined
              unlisted_projects_filter?: string | undefined
              unlisted_projects_filter_description?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                admin_email?: string | undefined
                allow_user_to_create_home_project?: string | undefined
                anonymous?: string | undefined
                change_password?: string | undefined
                cleanup_empty_projects?: string | undefined
                default_access_disabled?: string | undefined
                description?: string | undefined
                disable_publish_for_branches?: string | undefined
                disallow_group_creation?: string | undefined
                download_on_demand?: string | undefined
                enforce_project_keys?: string | undefined
                gravatar?: string | undefined
                hide_private_options?: string | undefined
                name?: string | undefined
                obs_url?: string | undefined
                registration?: string | undefined
                schedulers?: { arch?: string[] | undefined } | undefined
                title?: string | undefined
                tos_url?: string | undefined
                unlisted_projects_filter?: string | undefined
                unlisted_projects_filter_description?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                admin_email?: string | undefined
                allow_user_to_create_home_project?: string | undefined
                anonymous?: string | undefined
                change_password?: string | undefined
                cleanup_empty_projects?: string | undefined
                default_access_disabled?: string | undefined
                description?: string | undefined
                disable_publish_for_branches?: string | undefined
                disallow_group_creation?: string | undefined
                download_on_demand?: string | undefined
                enforce_project_keys?: string | undefined
                gravatar?: string | undefined
                hide_private_options?: string | undefined
                name?: string | undefined
                obs_url?: string | undefined
                registration?: string | undefined
                schedulers?: { arch?: string[] | undefined } | undefined
                title?: string | undefined
                tos_url?: string | undefined
                unlisted_projects_filter?: string | undefined
                unlisted_projects_filter_description?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/distributions': {
      $get:
        | {
            input: {}
            output: {
              distribution?:
                | {
                    architecture?: string[] | undefined
                    icon?:
                      | {
                          height?: number | undefined
                          url?: string | undefined
                          width?: number | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    link?: string | undefined
                    name?: string | undefined
                    project?: string | undefined
                    reponame?: string | undefined
                    repository?: string | undefined
                    vendor?: string | undefined
                    version?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                architecture?: string[] | undefined
                icon?:
                  | {
                      height?: number | undefined
                      url?: string | undefined
                      width?: number | undefined
                    }[]
                  | undefined
                id?: number | undefined
                link?: string | undefined
                name?: string | undefined
                project?: string | undefined
                reponame?: string | undefined
                repository?: string | undefined
                vendor?: string | undefined
                version?: string | undefined
              }
            }
            output: {
              architecture?: string[] | undefined
              icon?:
                | {
                    height?: number | undefined
                    url?: string | undefined
                    width?: number | undefined
                  }[]
                | undefined
              id?: number | undefined
              link?: string | undefined
              name?: string | undefined
              project?: string | undefined
              reponame?: string | undefined
              repository?: string | undefined
              vendor?: string | undefined
              version?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                architecture?: string[] | undefined
                icon?:
                  | {
                      height?: number | undefined
                      url?: string | undefined
                      width?: number | undefined
                    }[]
                  | undefined
                id?: number | undefined
                link?: string | undefined
                name?: string | undefined
                project?: string | undefined
                reponame?: string | undefined
                repository?: string | undefined
                vendor?: string | undefined
                version?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/distributions/bulk_replace': {
      $put:
        | {
            input: {
              json: {
                distribution?:
                  | {
                      architecture?: string[] | undefined
                      icon?:
                        | {
                            height?: number | undefined
                            url?: string | undefined
                            width?: number | undefined
                          }[]
                        | undefined
                      id?: number | undefined
                      link?: string | undefined
                      name?: string | undefined
                      project?: string | undefined
                      reponame?: string | undefined
                      repository?: string | undefined
                      vendor?: string | undefined
                      version?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                distribution?:
                  | {
                      architecture?: string[] | undefined
                      icon?:
                        | {
                            height?: number | undefined
                            url?: string | undefined
                            width?: number | undefined
                          }[]
                        | undefined
                      id?: number | undefined
                      link?: string | undefined
                      name?: string | undefined
                      project?: string | undefined
                      reponame?: string | undefined
                      repository?: string | undefined
                      vendor?: string | undefined
                      version?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: {
                distribution?:
                  | {
                      architecture?: string[] | undefined
                      icon?:
                        | {
                            height?: number | undefined
                            url?: string | undefined
                            width?: number | undefined
                          }[]
                        | undefined
                      id?: number | undefined
                      link?: string | undefined
                      name?: string | undefined
                      project?: string | undefined
                      reponame?: string | undefined
                      repository?: string | undefined
                      vendor?: string | undefined
                      version?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/distributions/include_remotes': {
      $get:
        | {
            input: {}
            output: {
              distribution?:
                | {
                    architecture?: string[] | undefined
                    icon?:
                      | {
                          height?: number | undefined
                          url?: string | undefined
                          width?: number | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    link?: string | undefined
                    name?: string | undefined
                    project?: string | undefined
                    reponame?: string | undefined
                    repository?: string | undefined
                    vendor?: string | undefined
                    version?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/distributions/:distribution_id': {
      $delete:
        | {
            input: { param: { distribution_id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { distribution_id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { distribution_id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { distribution_id: number } }
            output: {
              architecture?: string[] | undefined
              icon?:
                | {
                    height?: number | undefined
                    url?: string | undefined
                    width?: number | undefined
                  }[]
                | undefined
              id?: number | undefined
              link?: string | undefined
              name?: string | undefined
              project?: string | undefined
              reponame?: string | undefined
              repository?: string | undefined
              vendor?: string | undefined
              version?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { distribution_id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { distribution_id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { distribution_id: number } } & {
              json: {
                architecture?: string[] | undefined
                icon?:
                  | {
                      height?: number | undefined
                      url?: string | undefined
                      width?: number | undefined
                    }[]
                  | undefined
                id?: number | undefined
                link?: string | undefined
                name?: string | undefined
                project?: string | undefined
                reponame?: string | undefined
                repository?: string | undefined
                vendor?: string | undefined
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { distribution_id: number } } & {
              json: {
                architecture?: string[] | undefined
                icon?:
                  | {
                      height?: number | undefined
                      url?: string | undefined
                      width?: number | undefined
                    }[]
                  | undefined
                id?: number | undefined
                link?: string | undefined
                name?: string | undefined
                project?: string | undefined
                reponame?: string | undefined
                repository?: string | undefined
                vendor?: string | undefined
                version?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { distribution_id: number } } & {
              json: {
                architecture?: string[] | undefined
                icon?:
                  | {
                      height?: number | undefined
                      url?: string | undefined
                      width?: number | undefined
                    }[]
                  | undefined
                id?: number | undefined
                link?: string | undefined
                name?: string | undefined
                project?: string | undefined
                reponame?: string | undefined
                repository?: string | undefined
                vendor?: string | undefined
                version?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/group': {
      $get:
        | {
            input: {}
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/group/:group_title': {
      $delete:
        | {
            input: { param: { group_title: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { group_title: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { group_title: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { group_title: string } }
            output: {
              maintainer?: { userid?: string | undefined }[] | undefined
              person?: { userid?: string | undefined }[] | undefined
              title?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { group_title: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { group_title: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { group_title: string } } & {
              query: {
                cmd?: 'add_user' | 'remove_user' | 'set_email' | undefined
                userid?: string | undefined
                email?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { group_title: string } } & {
              query: {
                cmd?: 'add_user' | 'remove_user' | 'set_email' | undefined
                userid?: string | undefined
                email?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { group_title: string } } & {
              query: {
                cmd?: 'add_user' | 'remove_user' | 'set_email' | undefined
                userid?: string | undefined
                email?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { group_title: string } } & {
              query: {
                cmd?: 'add_user' | 'remove_user' | 'set_email' | undefined
                userid?: string | undefined
                email?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { group_title: string } } & {
              json: {
                maintainer?: { userid?: string | undefined }[] | undefined
                person?: { userid?: string | undefined }[] | undefined
                title?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { group_title: string } } & {
              json: {
                maintainer?: { userid?: string | undefined }[] | undefined
                person?: { userid?: string | undefined }[] | undefined
                title?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { group_title: string } } & {
              json: {
                maintainer?: { userid?: string | undefined }[] | undefined
                person?: { userid?: string | undefined }[] | undefined
                title?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/issue_trackers': {
      $get:
        | {
            input: {}
            output: {
              description?: string | undefined
              'enable-fetch'?: string | undefined
              kind?: string | undefined
              label?: string | undefined
              name?: string | undefined
              regex?: string | undefined
              'show-url'?: string | undefined
              url?: string | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                'enable-fetch'?: string | undefined
                kind?: string | undefined
                label?: string | undefined
                name?: string | undefined
                regex?: string | undefined
                'show-url'?: string | undefined
                url?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                'enable-fetch'?: string | undefined
                kind?: string | undefined
                label?: string | undefined
                name?: string | undefined
                regex?: string | undefined
                'show-url'?: string | undefined
                url?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: {
                description?: string | undefined
                'enable-fetch'?: string | undefined
                kind?: string | undefined
                label?: string | undefined
                name?: string | undefined
                regex?: string | undefined
                'show-url'?: string | undefined
                url?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/issue_trackers/:issue_tracker_name': {
      $delete:
        | {
            input: { param: { issue_tracker_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { issue_tracker_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { issue_tracker_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { issue_tracker_name: string } }
            output: {
              description?: string | undefined
              'enable-fetch'?: string | undefined
              kind?: string | undefined
              label?: string | undefined
              name?: string | undefined
              regex?: string | undefined
              'show-url'?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { issue_tracker_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { issue_tracker_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { issue_tracker_name: string } } & {
              json: {
                description?: string | undefined
                'enable-fetch'?: string | undefined
                kind?: string | undefined
                label?: string | undefined
                name?: string | undefined
                regex?: string | undefined
                'show-url'?: string | undefined
                url?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { issue_tracker_name: string } } & {
              json: {
                description?: string | undefined
                'enable-fetch'?: string | undefined
                kind?: string | undefined
                label?: string | undefined
                name?: string | undefined
                regex?: string | undefined
                'show-url'?: string | undefined
                url?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { issue_tracker_name: string } } & {
              json: {
                description?: string | undefined
                'enable-fetch'?: string | undefined
                kind?: string | undefined
                label?: string | undefined
                name?: string | undefined
                regex?: string | undefined
                'show-url'?: string | undefined
                url?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/issue_trackers/:issue_tracker_name/issues/:issue_name': {
      $get:
        | {
            input: { param: { issue_tracker_name: string; issue_name: string } }
            output: {
              created_at?: string | undefined
              label?: string | undefined
              name?: string | undefined
              tracker?: string | undefined
              updated_at?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { issue_tracker_name: string; issue_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { issue_tracker_name: string; issue_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/person': {
      $get: {
        input: { query: { prefix?: string | undefined } }
        output: { count?: number | undefined; entry?: { name?: string | undefined }[] | undefined }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { query: { cmd: 'register' } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { cmd: 'register' } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/person/register': {
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/person/:login': {
      $get:
        | {
            input: { param: { login: string } }
            output: {
              email?: string | undefined
              globalrole?: string | undefined
              ignore_auth_services?: boolean | undefined
              login?: string | undefined
              realname?: string | undefined
              state?: string | undefined
              watchlist?: { project?: { name?: string | undefined } | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { login: string } } & {
              query: { cmd: 'change_password' | 'lock' | 'delete' }
            } & { json: string }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string } } & {
              query: { cmd: 'change_password' | 'lock' | 'delete' }
            } & { json: string }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { login: string } } & {
              query: { cmd: 'change_password' | 'lock' | 'delete' }
            } & { json: string }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string } } & {
              query: { cmd: 'change_password' | 'lock' | 'delete' }
            } & { json: string }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { login: string } } & {
              query: { cmd: 'change_password' | 'lock' | 'delete' }
            } & { json: string }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { login: string } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { login: string } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { login: string } } & {
              json: {
                email?: string | undefined
                login?: string | undefined
                note?: string | undefined
                password?: string | undefined
                realname?: string | undefined
                state?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/person/:login/group': {
      $get:
        | {
            input: { param: { login: string } }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/person/:login/token': {
      $get:
        | {
            input: { param: { login: string } }
            output: {
              count?: number | undefined
              entry?:
                | {
                    id?: string | undefined
                    kind?: string | undefined
                    package?: string | undefined
                    project?: string | undefined
                    string?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
      $post:
        | {
            input: { param: { login: string } } & {
              query: {
                project?: string | undefined
                package?: string | undefined
                operation?: 'runservice' | 'rebuild' | 'release' | undefined
                scm_token?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string } } & {
              query: {
                project?: string | undefined
                package?: string | undefined
                operation?: 'runservice' | 'rebuild' | 'release' | undefined
                scm_token?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string } } & {
              query: {
                project?: string | undefined
                package?: string | undefined
                operation?: 'runservice' | 'rebuild' | 'release' | undefined
                scm_token?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/person/:login/token/:id': {
      $delete:
        | {
            input: { param: { login: string; id: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { login: string; id: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { login: string; id: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { login: string; id: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/published': {
      $get:
        | {
            input: {}
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/published/:project_name': {
      $get:
        | {
            input: { param: { project_name: string } }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/published/:project_name/:repository_name': {
      $get:
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_name: string; repository_name: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/published/:project_name/:repository_name/:architecture_name': {
      $get:
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: { project_name: string; repository_name: string; architecture_name: string }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename?view=ymp': {
      $get:
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              group?:
                | {
                    distversion?: string | undefined
                    repositories?:
                      | {
                          repository?:
                            | {
                                description?: string | undefined
                                name?: string | undefined
                                recommended?: string | undefined
                                summary?: string | undefined
                                url?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    software?:
                      | {
                          item?:
                            | {
                                description?: string | undefined
                                name?: string | undefined
                                summary?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              xmlns?: string | undefined
              'xmlns:os'?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                project_name: string
                repository_name: string
                architecture_name: string
                binary_filename: string
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/published/:project_name/:repository_name?view=status': {
      $get:
        | {
            input: { param: { project_name: string; repository_name: string } } & {
              query: { view?: 'status' | undefined }
            }
            output: {
              buildid?: number | undefined
              code?: string | undefined
              endtime?: number | undefined
              starttime?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project_name: string; repository_name: string } } & {
              query: { view?: 'status' | undefined }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { project_name: string; repository_name: string } } & {
              query: { view?: 'status' | undefined }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_name: string; repository_name: string } } & {
              query: { view?: 'status' | undefined }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/request': {
      $get:
        | {
            input: {}
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                cmd: 'create'
                addrevision?: 1 | undefined
                ignore_delegate?: 1 | undefined
                ignore_build_state?: 1 | undefined
              }
            } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              action?:
                | {
                    options?: { sourceupdate?: string | undefined } | undefined
                    source?:
                      | {
                          package?: string | undefined
                          project?: string | undefined
                          rev?: number | undefined
                        }
                      | undefined
                    target?:
                      | { package?: string | undefined; project?: string | undefined }
                      | undefined
                    type?: string | undefined
                  }
                | undefined
              creator?: string | undefined
              description?: string | undefined
              history?:
                | {
                    comment?: string | undefined
                    description?: string | undefined
                    when?: string | undefined
                    who?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              review?:
                | (
                    | {
                        by_user?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_group?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_project?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_package?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                  )[]
                | undefined
              state?:
                | {
                    comment?: string | undefined
                    name?: string | undefined
                    when?: string | undefined
                    who?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cmd: 'create'
                addrevision?: 1 | undefined
                ignore_delegate?: 1 | undefined
                ignore_build_state?: 1 | undefined
              }
            } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                cmd: 'create'
                addrevision?: 1 | undefined
                ignore_delegate?: 1 | undefined
                ignore_build_state?: 1 | undefined
              }
            } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                cmd: 'create'
                addrevision?: 1 | undefined
                ignore_delegate?: 1 | undefined
                ignore_build_state?: 1 | undefined
              }
            } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/request/:id': {
      $delete:
        | {
            input: { param: { id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { id: number } } & {
              query: { withhistory?: string | undefined; withfullhistory?: string | undefined }
            }
            output: {
              action?:
                | {
                    options?: { sourceupdate?: string | undefined } | undefined
                    source?:
                      | {
                          package?: string | undefined
                          project?: string | undefined
                          rev?: number | undefined
                        }
                      | undefined
                    target?:
                      | { package?: string | undefined; project?: string | undefined }
                      | undefined
                    type?: string | undefined
                  }
                | undefined
              creator?: string | undefined
              description?: string | undefined
              history?:
                | {
                    comment?: string | undefined
                    description?: string | undefined
                    when?: string | undefined
                    who?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              review?:
                | (
                    | {
                        by_user?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_group?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_project?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_package?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                  )[]
                | undefined
              state?:
                | {
                    comment?: string | undefined
                    name?: string | undefined
                    when?: string | undefined
                    who?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { withhistory?: string | undefined; withfullhistory?: string | undefined }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { withhistory?: string | undefined; withfullhistory?: string | undefined }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cmd?: string | undefined
                newstate?: string | undefined
                priority?: string | undefined
                by_user?: string | undefined
                by_group?: string | undefined
                by_project?: string | undefined
                by_package?: string | undefined
                incident?: string | undefined
                time?: string | undefined
                comment?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cmd?: string | undefined
                newstate?: string | undefined
                priority?: string | undefined
                by_user?: string | undefined
                by_group?: string | undefined
                by_project?: string | undefined
                by_package?: string | undefined
                incident?: string | undefined
                time?: string | undefined
                comment?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cmd?: string | undefined
                newstate?: string | undefined
                priority?: string | undefined
                by_user?: string | undefined
                by_group?: string | undefined
                by_project?: string | undefined
                by_package?: string | undefined
                incident?: string | undefined
                time?: string | undefined
                comment?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cmd?: string | undefined
                newstate?: string | undefined
                priority?: string | undefined
                by_user?: string | undefined
                by_group?: string | undefined
                by_project?: string | undefined
                by_package?: string | undefined
                incident?: string | undefined
                time?: string | undefined
                comment?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              action?:
                | {
                    options?: { sourceupdate?: string | undefined } | undefined
                    source?:
                      | {
                          package?: string | undefined
                          project?: string | undefined
                          rev?: number | undefined
                        }
                      | undefined
                    target?:
                      | { package?: string | undefined; project?: string | undefined }
                      | undefined
                    type?: string | undefined
                  }
                | undefined
              creator?: string | undefined
              description?: string | undefined
              history?:
                | {
                    comment?: string | undefined
                    description?: string | undefined
                    when?: string | undefined
                    who?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              review?:
                | (
                    | {
                        by_user?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_group?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_project?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                    | {
                        by_package?: string | undefined
                        state?: string | undefined
                        when?: string | undefined
                        who?: string | undefined
                      }
                  )[]
                | undefined
              state?:
                | {
                    comment?: string | undefined
                    name?: string | undefined
                    when?: string | undefined
                    who?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: {
                action?:
                  | {
                      options?: { sourceupdate?: string | undefined } | undefined
                      source?:
                        | {
                            package?: string | undefined
                            project?: string | undefined
                            rev?: number | undefined
                          }
                        | undefined
                      target?:
                        | { package?: string | undefined; project?: string | undefined }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                creator?: string | undefined
                description?: string | undefined
                history?:
                  | {
                      comment?: string | undefined
                      description?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                review?:
                  | (
                      | {
                          by_user?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_group?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_project?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | {
                          by_package?: string | undefined
                          state?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                    )[]
                  | undefined
                state?:
                  | {
                      comment?: string | undefined
                      name?: string | undefined
                      when?: string | undefined
                      who?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/request/:id?cmd=diff': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                diff_to_superseded?: string | undefined
                view?: 'xml' | undefined
                withissues?: true | 1 | undefined
              }
            }
            output: {
              action?:
                | {
                    options?: { sourceupdate?: string | undefined } | undefined
                    source?:
                      | {
                          package?: string | undefined
                          project?: string | undefined
                          rev?: string | undefined
                        }
                      | undefined
                    sourcediff?:
                      | {
                          files?:
                            | {
                                file?:
                                  | {
                                      diff?: string | undefined
                                      new?:
                                        | {
                                            md5?: string | undefined
                                            name?: string | undefined
                                            size?: string | undefined
                                          }
                                        | undefined
                                      old?:
                                        | {
                                            md5?: string | undefined
                                            name?: string | undefined
                                            size?: string | undefined
                                          }
                                        | undefined
                                      state?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                          issues?:
                            | {
                                issue?:
                                  | {
                                      label?: string | undefined
                                      name?: string | undefined
                                      state?: string | undefined
                                      tracker?: string | undefined
                                      url?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                          key?: string | undefined
                          new?:
                            | {
                                package?: string | undefined
                                project?: string | undefined
                                rev?: string | undefined
                                srcmd5?: string | undefined
                              }
                            | undefined
                          old?:
                            | {
                                package?: string | undefined
                                project?: string | undefined
                                rev?: string | undefined
                                srcmd5?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    target?:
                      | { package?: string | undefined; project?: string | undefined }
                      | undefined
                    type?: string | undefined
                  }
                | undefined
              actions?: string | undefined
              id?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                diff_to_superseded?: string | undefined
                view?: 'xml' | undefined
                withissues?: true | 1 | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                diff_to_superseded?: string | undefined
                view?: 'xml' | undefined
                withissues?: true | 1 | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                diff_to_superseded?: string | undefined
                view?: 'xml' | undefined
                withissues?: true | 1 | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/request?view=collection': {
      $get:
        | {
            input: {
              query: {
                user?: string | undefined
                project?: string | undefined
                package?: string | undefined
                states?: string | undefined
                types?: string | undefined
                roles?: string | undefined
                withhistory?: string | undefined
                withfullhistory?: string | undefined
                limit?: number | undefined
                ids?: string | undefined
              }
            }
            output: {
              matches?: string | undefined
              request?:
                | {
                    action?:
                      | {
                          options?: { sourceupdate?: string | undefined } | undefined
                          source?:
                            | {
                                package?: string | undefined
                                project?: string | undefined
                                rev?: number | undefined
                              }
                            | undefined
                          target?:
                            | { package?: string | undefined; project?: string | undefined }
                            | undefined
                          type?: string | undefined
                        }
                      | undefined
                    creator?: string | undefined
                    description?: string | undefined
                    history?:
                      | {
                          comment?: string | undefined
                          description?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    review?:
                      | (
                          | {
                              by_user?: string | undefined
                              state?: string | undefined
                              when?: string | undefined
                              who?: string | undefined
                            }
                          | {
                              by_group?: string | undefined
                              state?: string | undefined
                              when?: string | undefined
                              who?: string | undefined
                            }
                          | {
                              by_project?: string | undefined
                              state?: string | undefined
                              when?: string | undefined
                              who?: string | undefined
                            }
                          | {
                              by_package?: string | undefined
                              state?: string | undefined
                              when?: string | undefined
                              who?: string | undefined
                            }
                        )[]
                      | undefined
                    state?:
                      | {
                          comment?: string | undefined
                          name?: string | undefined
                          when?: string | undefined
                          who?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                user?: string | undefined
                project?: string | undefined
                package?: string | undefined
                states?: string | undefined
                types?: string | undefined
                roles?: string | undefined
                withhistory?: string | undefined
                withfullhistory?: string | undefined
                limit?: number | undefined
                ids?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                user?: string | undefined
                project?: string | undefined
                package?: string | undefined
                states?: string | undefined
                types?: string | undefined
                roles?: string | undefined
                withhistory?: string | undefined
                withfullhistory?: string | undefined
                limit?: number | undefined
                ids?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/worker/status': {
      $get:
        | {
            input: {}
            output: {
              blocked?: { arch?: string | undefined; jobs?: string | undefined }[] | undefined
              buildavg?: { arch?: string | undefined; buildavg?: string | undefined }[] | undefined
              building?:
                | {
                    arch?: string | undefined
                    hostarch?: string | undefined
                    package?: string | undefined
                    project?: string | undefined
                    repository?: string | undefined
                    starttime?: string | undefined
                    workerid?: string | undefined
                  }[]
                | undefined
              clients?: number | undefined
              down?: { hostarch?: string | undefined; workerid?: string | undefined }[] | undefined
              idle?: { hostarch?: string | undefined; workerid?: string | undefined }[] | undefined
              partition?:
                | {
                    daemon?:
                      | {
                          arch?: string | undefined
                          queue?:
                            | {
                                high?: string | undefined
                                low?: string | undefined
                                med?: string | undefined
                                next?: string | undefined
                              }
                            | undefined
                          starttime?: string | undefined
                          state?: string | undefined
                          type?: string | undefined
                        }[]
                      | undefined
                    name?: string | undefined
                  }[]
                | undefined
              waiting?: { arch?: string | undefined; jobs?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/worker/:architecture_name::worker_id': {
      $get:
        | {
            input: { param: { architecture_name: string; worker_id: string } }
            output: {
              hardware?:
                | {
                    cpu?: { flag?: string[] | undefined } | undefined
                    jobs?: string | undefined
                    processors?: string | undefined
                  }
                | undefined
              hostarch?: string | undefined
              hostlabel?: string | undefined
              linux?: { flavor?: string | undefined; version?: string | undefined } | undefined
              registerserver?: string | undefined
              sandbox?: string | undefined
              workerid?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { architecture_name: string; worker_id: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { architecture_name: string; worker_id: string } }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/worker?cmd=checkconstraints': {
      $post:
        | {
            input: {
              query: { project: string; repository: string; arch: string; package: string }
            } & {
              json: {
                hardware?:
                  | {
                      cpu?: { flag?: string[] | undefined } | undefined
                      disk?: { size?: string | undefined } | undefined
                      memory?: { size?: string | undefined } | undefined
                      physicalmemory?: { size?: string | undefined } | undefined
                      processors?: string | undefined
                    }
                  | undefined
                hostlabel?: string | undefined
                linux?:
                  | {
                      flavor?: string | undefined
                      version?: { max?: string | undefined; min?: string | undefined } | undefined
                    }
                  | undefined
                sandbox?: string | undefined
              }
            }
            output: {
              count?: number | undefined
              entry?: { name?: string | undefined }[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { project: string; repository: string; arch: string; package: string }
            } & {
              json: {
                hardware?:
                  | {
                      cpu?: { flag?: string[] | undefined } | undefined
                      disk?: { size?: string | undefined } | undefined
                      memory?: { size?: string | undefined } | undefined
                      physicalmemory?: { size?: string | undefined } | undefined
                      processors?: string | undefined
                    }
                  | undefined
                hostlabel?: string | undefined
                linux?:
                  | {
                      flavor?: string | undefined
                      version?: { max?: string | undefined; min?: string | undefined } | undefined
                    }
                  | undefined
                sandbox?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: { project: string; repository: string; arch: string; package: string }
            } & {
              json: {
                hardware?:
                  | {
                      cpu?: { flag?: string[] | undefined } | undefined
                      disk?: { size?: string | undefined } | undefined
                      memory?: { size?: string | undefined } | undefined
                      physicalmemory?: { size?: string | undefined } | undefined
                      processors?: string | undefined
                    }
                  | undefined
                hostlabel?: string | undefined
                linux?:
                  | {
                      flavor?: string | undefined
                      version?: { max?: string | undefined; min?: string | undefined } | undefined
                    }
                  | undefined
                sandbox?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: { project: string; repository: string; arch: string; package: string }
            } & {
              json: {
                hardware?:
                  | {
                      cpu?: { flag?: string[] | undefined } | undefined
                      disk?: { size?: string | undefined } | undefined
                      memory?: { size?: string | undefined } | undefined
                      physicalmemory?: { size?: string | undefined } | undefined
                      processors?: string | undefined
                    }
                  | undefined
                hostlabel?: string | undefined
                linux?:
                  | {
                      flavor?: string | undefined
                      version?: { max?: string | undefined; min?: string | undefined } | undefined
                    }
                  | undefined
                sandbox?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              data?: string[] | undefined
              details?: string | undefined
              summary?: string | undefined
            }
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
