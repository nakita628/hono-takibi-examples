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
type IoK8sApimachineryPkgApisMetaV1StatusCause = {
  field?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
type IoK8sApimachineryPkgApisMetaV1Status = {
  apiVersion?: string | undefined
  code?: number | undefined
  details?:
    | {
        causes?: IoK8sApimachineryPkgApisMetaV1StatusCause[] | undefined
        group?: string | undefined
        kind?: string | undefined
        name?: string | undefined
        retryAfterSeconds?: number | undefined
        uid?: string | undefined
      }
    | undefined
  kind?: string | undefined
  message?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: bigint | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        shardInfo?: { selector: string } | undefined
      }
    | undefined
  reason?: string | undefined
  status?: string | undefined
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
type IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
type IoK8sApimachineryPkgApisMetaV1Condition = {
  lastTransitionTime: {}
  message?: string | undefined
  observedGeneration?: bigint | undefined
  reason: string
  status: string
  type: string
}
type IoK8sApimachineryPkgApisMetaV1Time = string
type IoK8sApiPolicyV1PodDisruptionBudget = {
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
  spec?:
    | {
        maxUnavailable?: {} | undefined
        minAvailable?: {} | undefined
        selector?:
          | {
              matchExpressions?:
                | IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[]
                | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        unhealthyPodEvictionPolicy?: string | undefined
      }
    | undefined
  status?:
    | {
        conditions?: IoK8sApimachineryPkgApisMetaV1Condition[] | undefined
        currentHealthy?: number | undefined
        desiredHealthy?: number | undefined
        disruptedPods?: { [x: string]: IoK8sApimachineryPkgApisMetaV1Time } | undefined
        disruptionsAllowed?: number | undefined
        expectedPods?: number | undefined
        observedGeneration?: bigint | undefined
      }
    | undefined
}
type IoK8sApiPolicyV1PodDisruptionBudgetList = {
  apiVersion?: string | undefined
  items: IoK8sApiPolicyV1PodDisruptionBudget[]
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: bigint | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        shardInfo?: { selector: string } | undefined
      }
    | undefined
}
type IoK8sApimachineryPkgApisMetaV1Patch = { [x: string]: unknown }
type IoK8sApimachineryPkgApisMetaV1WatchEvent = { object: {}; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis/policy/v1/': {
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
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets': {
      $delete:
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
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
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name': {
      $delete:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
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
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudget
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
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
    '/apis/policy/v1/poddisruptionbudgets': {
      $get:
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiPolicyV1PodDisruptionBudgetList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/policy/v1/watch/poddisruptionbudgets': {
      $get:
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
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
