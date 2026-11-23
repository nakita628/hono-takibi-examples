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
type IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
type IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
type IoK8sApiAuthorizationV1Condition = {
  condition?: string | undefined
  description?: string | undefined
  id: string
  type?: string | undefined
}
type IoK8sApiAuthorizationV1NamedConditionsAwareDecision = {
  authorizerName: string
  decision: {
    allow?: { evaluationError?: string | undefined; reason?: string | undefined } | undefined
    conditionsMap?:
      | {
          allowConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
          denyConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
          noOpinionConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
        }
      | undefined
    deny?: { evaluationError?: string | undefined; reason?: string | undefined } | undefined
    noOpinion?: { evaluationError?: string | undefined; reason?: string | undefined } | undefined
    type: string
    union?: IoK8sApiAuthorizationV1NamedConditionsAwareDecision[] | undefined
  }
}
type IoK8sApiAuthorizationV1LocalSubjectAccessReview = {
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
    authorizationOptions?: { handledDecisionTypes: string[] } | undefined
    extra?: { [x: string]: string[] } | undefined
    groups?: string[] | undefined
    nonResourceAttributes?: { path?: string | undefined; verb?: string | undefined } | undefined
    resourceAttributes?:
      | {
          fieldSelector?:
            | {
                rawSelector?: string | undefined
                requirements?: IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement[] | undefined
              }
            | undefined
          group?: string | undefined
          labelSelector?:
            | {
                rawSelector?: string | undefined
                requirements?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
              }
            | undefined
          name?: string | undefined
          namespace?: string | undefined
          resource?: string | undefined
          subresource?: string | undefined
          verb?: string | undefined
          version?: string | undefined
        }
      | undefined
    uid?: string | undefined
    user?: string | undefined
  }
  status?:
    | {
        allowed?: boolean | undefined
        conditionalDecision?:
          | {
              allow?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              conditionsMap?:
                | {
                    allowConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                    denyConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                    noOpinionConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                  }
                | undefined
              deny?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              noOpinion?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              type: string
              union?: IoK8sApiAuthorizationV1NamedConditionsAwareDecision[] | undefined
            }
          | undefined
        denied?: boolean | undefined
        evaluationError?: string | undefined
        reason?: string | undefined
      }
    | undefined
}
type IoK8sApiAuthorizationV1SelfSubjectAccessReview = {
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
    authorizationOptions?: { handledDecisionTypes: string[] } | undefined
    nonResourceAttributes?: { path?: string | undefined; verb?: string | undefined } | undefined
    resourceAttributes?:
      | {
          fieldSelector?:
            | {
                rawSelector?: string | undefined
                requirements?: IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement[] | undefined
              }
            | undefined
          group?: string | undefined
          labelSelector?:
            | {
                rawSelector?: string | undefined
                requirements?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
              }
            | undefined
          name?: string | undefined
          namespace?: string | undefined
          resource?: string | undefined
          subresource?: string | undefined
          verb?: string | undefined
          version?: string | undefined
        }
      | undefined
  }
  status?:
    | {
        allowed?: boolean | undefined
        conditionalDecision?:
          | {
              allow?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              conditionsMap?:
                | {
                    allowConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                    denyConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                    noOpinionConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                  }
                | undefined
              deny?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              noOpinion?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              type: string
              union?: IoK8sApiAuthorizationV1NamedConditionsAwareDecision[] | undefined
            }
          | undefined
        denied?: boolean | undefined
        evaluationError?: string | undefined
        reason?: string | undefined
      }
    | undefined
}
type IoK8sApiAuthorizationV1NonResourceRule = {
  nonResourceURLs?: string[] | undefined
  verbs?: string[] | undefined
}
type IoK8sApiAuthorizationV1ResourceRule = {
  apiGroups?: string[] | undefined
  resourceNames?: string[] | undefined
  resources?: string[] | undefined
  verbs?: string[] | undefined
}
type IoK8sApiAuthorizationV1SelfSubjectRulesReview = {
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
  spec: { namespace: string }
  status?:
    | {
        evaluationError?: string | undefined
        incomplete?: boolean | undefined
        nonResourceRules?: IoK8sApiAuthorizationV1NonResourceRule[] | undefined
        resourceRules?: IoK8sApiAuthorizationV1ResourceRule[] | undefined
      }
    | undefined
}
type IoK8sApiAuthorizationV1SubjectAccessReview = {
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
    authorizationOptions?: { handledDecisionTypes: string[] } | undefined
    extra?: { [x: string]: string[] } | undefined
    groups?: string[] | undefined
    nonResourceAttributes?: { path?: string | undefined; verb?: string | undefined } | undefined
    resourceAttributes?:
      | {
          fieldSelector?:
            | {
                rawSelector?: string | undefined
                requirements?: IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement[] | undefined
              }
            | undefined
          group?: string | undefined
          labelSelector?:
            | {
                rawSelector?: string | undefined
                requirements?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
              }
            | undefined
          name?: string | undefined
          namespace?: string | undefined
          resource?: string | undefined
          subresource?: string | undefined
          verb?: string | undefined
          version?: string | undefined
        }
      | undefined
    uid?: string | undefined
    user?: string | undefined
  }
  status?:
    | {
        allowed?: boolean | undefined
        conditionalDecision?:
          | {
              allow?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              conditionsMap?:
                | {
                    allowConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                    denyConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                    noOpinionConditions?: IoK8sApiAuthorizationV1Condition[] | undefined
                  }
                | undefined
              deny?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              noOpinion?:
                | { evaluationError?: string | undefined; reason?: string | undefined }
                | undefined
              type: string
              union?: IoK8sApiAuthorizationV1NamedConditionsAwareDecision[] | undefined
            }
          | undefined
        denied?: boolean | undefined
        evaluationError?: string | undefined
        reason?: string | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis/authorization.k8s.io/v1/': {
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
    '/apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews': {
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1LocalSubjectAccessReview
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
    '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews': {
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectAccessReview
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
    '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews': {
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
            output: IoK8sApiAuthorizationV1SelfSubjectRulesReview
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
    '/apis/authorization.k8s.io/v1/subjectaccessreviews': {
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
            output: IoK8sApiAuthorizationV1SubjectAccessReview
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
