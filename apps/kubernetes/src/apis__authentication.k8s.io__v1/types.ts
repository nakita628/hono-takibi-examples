type IoK8sApimachineryPkgApisMetaV1APIResource = {
  categories?: string[] | undefined
  group?: string | undefined
  kind: string
  name: string
  namespaced: boolean
  shortNames?: string[] | undefined
  singularName: string
  storageVersionHash?: string | undefined
  verbs: string[]
  version?: string | undefined
}
type IoK8sApimachineryPkgApisMetaV1APIResourceList = {
  apiVersion?: string | undefined
  groupVersion: string
  kind?: string | undefined
  resources: IoK8sApimachineryPkgApisMetaV1APIResource[]
}
type IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry = {
  apiVersion?: string | undefined
  fieldsType?: string | undefined
  fieldsV1?: {} | undefined
  manager?: string | undefined
  operation?: string | undefined
  subresource?: string | undefined
  time?: {} | undefined
}
type IoK8sApimachineryPkgApisMetaV1OwnerReference = {
  apiVersion: string
  blockOwnerDeletion?: boolean | undefined
  controller?: boolean | undefined
  kind: string
  name: string
  uid: string
}
type IoK8sApiAuthenticationV1SelfSubjectReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: {} | undefined
        deletionGracePeriodSeconds?: bigint | undefined
        deletionTimestamp?: {} | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: bigint | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  status?:
    | {
        userInfo?:
          | {
              extra?: { [x: string]: string[] } | undefined
              groups?: string[] | undefined
              uid?: string | undefined
              username?: string | undefined
            }
          | undefined
      }
    | undefined
}
type IoK8sApiAuthenticationV1TokenReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: {} | undefined
        deletionGracePeriodSeconds?: bigint | undefined
        deletionTimestamp?: {} | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: bigint | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec: { audiences?: string[] | undefined; token: string }
  status?:
    | {
        audiences?: string[] | undefined
        authenticated?: boolean | undefined
        error?: string | undefined
        user?:
          | {
              extra?: { [x: string]: string[] } | undefined
              groups?: string[] | undefined
              uid?: string | undefined
              username?: string | undefined
            }
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis/authentication.k8s.io/v1/': {
      $get:
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/apis/authentication.k8s.io/v1/selfsubjectreviews': {
      $post:
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1SelfSubjectReview
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/authentication.k8s.io/v1/tokenreviews': {
      $post:
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiAuthenticationV1TokenReview
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
