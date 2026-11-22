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
type IoK8sApiNetworkingV1IngressClass = {
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
  spec: {
    controller: string
    parameters?:
      | {
          apiGroup?: string | undefined
          kind: string
          name: string
          namespace?: string | undefined
          scope?: string | undefined
        }
      | undefined
  }
}
type IoK8sApiNetworkingV1IngressClassList = {
  apiVersion?: string | undefined
  items: IoK8sApiNetworkingV1IngressClass[]
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
type IoK8sApiNetworkingV1HTTPIngressPath = {
  backend: {
    resource?: { apiGroup?: string | undefined; kind: string; name: string } | undefined
    service?:
      | {
          name: string
          port?: { name?: string | undefined; number?: number | undefined } | undefined
        }
      | undefined
  }
  path?: string | undefined
  pathType: string
}
type IoK8sApiNetworkingV1IngressRule = {
  host?: string | undefined
  http?: { paths: IoK8sApiNetworkingV1HTTPIngressPath[] } | undefined
}
type IoK8sApiNetworkingV1IngressTLS = {
  hosts?: string[] | undefined
  secretName?: string | undefined
}
type IoK8sApiNetworkingV1IngressPortStatus = {
  error?: string | undefined
  port?: number | undefined
  protocol?: string | undefined
}
type IoK8sApiNetworkingV1IngressLoadBalancerIngress = {
  hostname?: string | undefined
  ip?: string | undefined
  ports?: IoK8sApiNetworkingV1IngressPortStatus[] | undefined
}
type IoK8sApiNetworkingV1Ingress = {
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
        defaultBackend?:
          | {
              resource?: { apiGroup?: string | undefined; kind: string; name: string } | undefined
              service?:
                | {
                    name: string
                    port?: { name?: string | undefined; number?: number | undefined } | undefined
                  }
                | undefined
            }
          | undefined
        ingressClassName?: string | undefined
        rules?: IoK8sApiNetworkingV1IngressRule[] | undefined
        tls?: IoK8sApiNetworkingV1IngressTLS[] | undefined
      }
    | undefined
  status?:
    | {
        loadBalancer?:
          | { ingress?: IoK8sApiNetworkingV1IngressLoadBalancerIngress[] | undefined }
          | undefined
      }
    | undefined
}
type IoK8sApiNetworkingV1IngressList = {
  apiVersion?: string | undefined
  items: IoK8sApiNetworkingV1Ingress[]
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
type IoK8sApiNetworkingV1IPAddress = {
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
  spec: {
    parentRef: {
      group?: string | undefined
      name: string
      namespace?: string | undefined
      resource: string
    }
  }
}
type IoK8sApiNetworkingV1IPAddressList = {
  apiVersion?: string | undefined
  items: IoK8sApiNetworkingV1IPAddress[]
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
type IoK8sApiNetworkingV1NetworkPolicyPort = {
  endPort?: number | undefined
  port?: {} | undefined
  protocol?: string | undefined
}
type IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
type IoK8sApiNetworkingV1NetworkPolicyPeer = {
  ipBlock?: { cidr: string; except?: string[] | undefined } | undefined
  namespaceSelector?:
    | {
        matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  podSelector?:
    | {
        matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
}
type IoK8sApiNetworkingV1NetworkPolicyEgressRule = {
  ports?: IoK8sApiNetworkingV1NetworkPolicyPort[] | undefined
  to?: IoK8sApiNetworkingV1NetworkPolicyPeer[] | undefined
}
type IoK8sApiNetworkingV1NetworkPolicyIngressRule = {
  from?: IoK8sApiNetworkingV1NetworkPolicyPeer[] | undefined
  ports?: IoK8sApiNetworkingV1NetworkPolicyPort[] | undefined
}
type IoK8sApiNetworkingV1NetworkPolicy = {
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
        egress?: IoK8sApiNetworkingV1NetworkPolicyEgressRule[] | undefined
        ingress?: IoK8sApiNetworkingV1NetworkPolicyIngressRule[] | undefined
        podSelector?:
          | {
              matchExpressions?:
                | IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[]
                | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        policyTypes?: string[] | undefined
      }
    | undefined
}
type IoK8sApiNetworkingV1NetworkPolicyList = {
  apiVersion?: string | undefined
  items: IoK8sApiNetworkingV1NetworkPolicy[]
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
type IoK8sApimachineryPkgApisMetaV1Condition = {
  lastTransitionTime: {}
  message?: string | undefined
  observedGeneration?: bigint | undefined
  reason: string
  status: string
  type: string
}
type IoK8sApiNetworkingV1ServiceCIDR = {
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
  spec?: { cidrs?: string[] | undefined } | undefined
  status?: { conditions?: IoK8sApimachineryPkgApisMetaV1Condition[] | undefined } | undefined
}
type IoK8sApiNetworkingV1ServiceCIDRList = {
  apiVersion?: string | undefined
  items: IoK8sApiNetworkingV1ServiceCIDR[]
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
type IoK8sApimachineryPkgApisMetaV1WatchEvent = { object: {}; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis/networking.k8s.io/v1/': {
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
    '/apis/networking.k8s.io/v1/ingressclasses': {
      $delete:
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            output: IoK8sApiNetworkingV1IngressClassList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClassList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClassList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClassList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClassList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClassList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClassList
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
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
            output: IoK8sApiNetworkingV1IngressClass
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
    '/apis/networking.k8s.io/v1/ingressclasses/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IngressClass
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
    '/apis/networking.k8s.io/v1/ingresses': {
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
    '/apis/networking.k8s.io/v1/ipaddresses': {
      $delete:
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            output: IoK8sApiNetworkingV1IPAddressList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddressList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddressList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddressList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddressList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddressList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddressList
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
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
            output: IoK8sApiNetworkingV1IPAddress
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
    '/apis/networking.k8s.io/v1/ipaddresses/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1IPAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses': {
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1IngressList
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name': {
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
            output: IoK8sApiNetworkingV1Ingress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
            output: IoK8sApiNetworkingV1Ingress
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
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies': {
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name': {
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
            output: IoK8sApiNetworkingV1NetworkPolicy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1NetworkPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1NetworkPolicy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
            output: IoK8sApiNetworkingV1NetworkPolicy
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
    '/apis/networking.k8s.io/v1/networkpolicies': {
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
            output: IoK8sApiNetworkingV1NetworkPolicyList
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
    '/apis/networking.k8s.io/v1/servicecidrs': {
      $delete:
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDRList
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
            input: {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
            output: IoK8sApiNetworkingV1ServiceCIDR
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
    '/apis/networking.k8s.io/v1/servicecidrs/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
    '/apis/networking.k8s.io/v1/servicecidrs/:name/status': {
      $get:
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { pretty?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiNetworkingV1ServiceCIDR
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
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
    '/apis/networking.k8s.io/v1/watch/ingressclasses': {
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
  } & {
    '/apis/networking.k8s.io/v1/watch/ingressclasses/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
    '/apis/networking.k8s.io/v1/watch/ingresses': {
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
  } & {
    '/apis/networking.k8s.io/v1/watch/ipaddresses': {
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
  } & {
    '/apis/networking.k8s.io/v1/watch/ipaddresses/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses': {
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
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name': {
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
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies': {
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
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name': {
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
    '/apis/networking.k8s.io/v1/watch/networkpolicies': {
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
  } & {
    '/apis/networking.k8s.io/v1/watch/servicecidrs': {
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
  } & {
    '/apis/networking.k8s.io/v1/watch/servicecidrs/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
            input: { param: { name: string } } & {
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
