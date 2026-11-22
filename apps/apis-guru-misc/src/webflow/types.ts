type AppClients = {
  appClients: {
    appClientId: string
    callbackUrls: string[] | null
    clientId: string
    clientSecret?: string | undefined
    createdBy: string | null
    createdTime: string | null
    defaultLoginUrl: string | null
    description: string | null
    hasSecret: boolean
    loginUrls: string[] | null
    logoutUrls: string[] | null
    name: string | null
    updatedBy: string | null
    updatedTime: string | null
  }[]
  nextToken: string | null
}
type Error = { message?: string | undefined }
type Empty = { [x: string]: unknown }
type PostAppClients = {
  callbackUrls?: string[] | undefined
  defaultLoginUrl?: string | undefined
  description?: (string | null) | undefined
  generateSecret?: boolean | undefined
  loginUrls?: string[] | undefined
  logoutUrls?: string[] | undefined
  name?: (string | null) | undefined
}
type AppClient = {
  appClientId: string
  callbackUrls: string[] | null
  clientId: string
  clientSecret?: string | undefined
  createdBy: string | null
  createdTime: string | null
  defaultLoginUrl: string | null
  description: string | null
  hasSecret: boolean
  loginUrls: string[] | null
  logoutUrls: string[] | null
  name: string | null
  updatedBy: string | null
  updatedTime: string | null
}
type PatchAppClientId = {
  defaultLoginUrl?: string | undefined
  description?: (string | null) | undefined
  loginUrls?: string[] | undefined
  name?: (string | null) | undefined
}
type Assets = {
  assets: {
    assetId: string
    content?: string | undefined
    contentMD5: string | null
    createdBy: string | null
    createdTime: string | null
    description: string | null
    name: string | null
    updatedBy: string | null
    updatedTime: string | null
  }[]
  nextToken: string | null
}
type PostAssets = {
  content: string
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type Asset = {
  assetId: string
  content?: string | undefined
  contentMD5: string | null
  createdBy: string | null
  createdTime: string | null
  description: string | null
  name: string | null
  updatedBy: string | null
  updatedTime: string | null
}
type PatchAssetId = {
  content?: string | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type Datasets = {
  datasets: {
    containsPersonallyIdentifiableInformation: boolean
    createdBy: string | null
    createdTime: string | null
    datasetId: string
    description: string | null
    groundTruthSummary: { [x: string]: unknown }
    metadata: { [x: string]: unknown } | null
    name?: (string | null) | undefined
    numberOfDocuments: number
    retentionInDays: number
    storageLocation: 'EU'
    updatedBy: string | null
    updatedTime: string | null
    version: number
  }[]
  nextToken: string | null
}
type PostDatasets = {
  containsPersonallyIdentifiableInformation?: boolean | undefined
  description?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  retentionInDays?: number | undefined
}
type Dataset = {
  containsPersonallyIdentifiableInformation: boolean
  createdBy: string | null
  createdTime: string | null
  datasetId: string
  description: string | null
  groundTruthSummary: { [x: string]: unknown }
  metadata: { [x: string]: unknown } | null
  name?: (string | null) | undefined
  numberOfDocuments: number
  retentionInDays: number
  storageLocation: 'EU'
  updatedBy: string | null
  updatedTime: string | null
  version: number
}
type PatchDatasetId = {
  containsPersonallyIdentifiableInformation?: boolean | undefined
  description?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  retentionInDays?: number | undefined
}
type DeploymentEnvironments = {
  deploymentEnvironments: {
    deploymentEnvironmentId: string
    description: string | null
    modelDeploymentUnits: number
    name: string | null
    organizationId: string | null
    status: 'available' | 'unavailable'
  }[]
  nextToken: string | null
}
type DeploymentEnvironment = {
  deploymentEnvironmentId: string
  description: string | null
  modelDeploymentUnits: number
  name: string | null
  organizationId: string | null
  status: 'available' | 'unavailable'
}
type GroundTruthList =
  | {
      label: string
      value: string | ({ [x: string]: unknown } | null) | boolean | number | GroundTruthList
    }[]
  | {
      label: string
      value: string | ({ [x: string]: unknown } | null) | boolean | number | GroundTruthList
    }[][]
type Documents = {
  consentId?: string[] | undefined
  datasetId?: string[] | undefined
  documents: {
    consentId?: string | undefined
    content?: string | undefined
    contentMD5: string | null
    contentType: 'application/pdf' | 'image/jpeg' | 'image/png' | 'image/tiff'
    createdBy: string | null
    createdTime: string | null
    datasetId?: string | undefined
    description: string | null
    documentId: string
    groundTruth?:
      | {
          label: string
          value: (string | null) | (boolean | null) | (number | null) | GroundTruthList
        }[]
      | undefined
    metadata: { [x: string]: unknown } | null
    name: string | null
    retentionInDays: number
    updatedBy: string | null
    updatedTime: string | null
  }[]
  nextToken: string | null
  order?: 'ascending' | 'descending' | undefined
  sortBy?: 'createdTime' | undefined
}
type PostDocuments = {
  consentId?: string | undefined
  content: string
  contentType: 'application/pdf' | 'image/jpeg' | 'image/png' | 'image/tiff'
  datasetId?: string | undefined
  description?: (string | null) | undefined
  groundTruth?:
    | {
        label: string
        value: (string | null) | (boolean | null) | (number | null) | GroundTruthList
      }[]
    | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  retentionInDays?: number | undefined
}
type Document = {
  consentId?: string | undefined
  content?: string | undefined
  contentMD5: string | null
  contentType: 'application/pdf' | 'image/jpeg' | 'image/png' | 'image/tiff'
  createdBy: string | null
  createdTime: string | null
  datasetId?: string | undefined
  description: string | null
  documentId: string
  groundTruth?:
    | {
        label: string
        value: (string | null) | (boolean | null) | (number | null) | GroundTruthList
      }[]
    | undefined
  metadata: { [x: string]: unknown } | null
  name: string | null
  retentionInDays: number
  updatedBy: string | null
  updatedTime: string | null
}
type PatchDocumentId = {
  datasetId?: string | undefined
  description?: (string | null) | undefined
  groundTruth?:
    | (
        | {
            label: string
            value: (string | null) | (boolean | null) | (number | null) | GroundTruthList
          }[]
        | null
      )
    | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  retentionInDays?: number | undefined
}
type Logs = {
  logs: {
    events?: { [x: string]: unknown }[] | undefined
    logId: string
    startTime: string | null
    transitionExecutionId: string | null
    transitionId: string | string
    workflowExecutionId: string | null
    workflowId: string | null
  }[]
  nextToken: string | null
  order?: 'ascending' | 'descending' | undefined
  transitionExecutionId?: string | undefined
  transitionId?: string | string | undefined
  workflowExecutionId?: string | undefined
  workflowId?: string | undefined
}
type Log = {
  events?: { [x: string]: unknown }[] | undefined
  logId: string
  startTime: string | null
  transitionExecutionId: string | null
  transitionId: string | string
  workflowExecutionId: string | null
  workflowId: string | null
}
type Models = {
  models: {
    createdBy: string | null
    createdTime: string | null
    description: string | null
    fieldConfig: {
      [x: string]:
        | {
            description?: (string | null) | undefined
            enum?: string[] | undefined
            maxLength?: number | undefined
            type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
          }
        | {
            fields: {
              [x: string]: {
                description?: (string | null) | undefined
                enum?: string[] | undefined
                maxLength?: number | undefined
                type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
              }
            }
            type: 'lines'
          }
    } | null
    height: number
    metadata: { [x: string]: unknown } | null
    modelId: string
    name: string | null
    numberOfDataBundles: number
    numberOfRunningTrainings: number
    organizationId: string
    postprocessConfig?:
      | { strategy: 'BEST_FIRST' }
      | { parameters: { collapse?: boolean | undefined; n: number }; strategy: 'BEST_N_PAGES' }
      | undefined
    preprocessConfig: { autoRotate: boolean; imageQuality: 'LOW' | 'HIGH'; maxPages: number }
    status: 'active' | 'inactive'
    trainingId: string | null
    updatedBy: string | null
    updatedTime: string | null
    width: number
  }[]
  nextToken: string | null
}
type PostModels = {
  description?: (string | null) | undefined
  fieldConfig: {
    [x: string]:
      | {
          description?: (string | null) | undefined
          enum?: string[] | undefined
          maxLength?: number | undefined
          type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
        }
      | {
          fields: {
            [x: string]: {
              description?: (string | null) | undefined
              enum?: string[] | undefined
              maxLength?: number | undefined
              type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
            }
          }
          type: 'lines'
        }
  }
  height?: number | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  postprocessConfig?:
    | { strategy: 'BEST_FIRST' }
    | { parameters: { collapse?: boolean | undefined; n: number }; strategy: 'BEST_N_PAGES' }
    | undefined
  preprocessConfig?:
    | { autoRotate: boolean; imageQuality: 'LOW' | 'HIGH'; maxPages: number }
    | undefined
  width?: number | undefined
}
type Model = {
  createdBy: string | null
  createdTime: string | null
  description: string | null
  fieldConfig: {
    [x: string]:
      | {
          description?: (string | null) | undefined
          enum?: string[] | undefined
          maxLength?: number | undefined
          type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
        }
      | {
          fields: {
            [x: string]: {
              description?: (string | null) | undefined
              enum?: string[] | undefined
              maxLength?: number | undefined
              type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
            }
          }
          type: 'lines'
        }
  } | null
  height: number
  metadata: { [x: string]: unknown } | null
  modelId: string
  name: string | null
  numberOfDataBundles: number
  numberOfRunningTrainings: number
  organizationId: string
  postprocessConfig?:
    | { strategy: 'BEST_FIRST' }
    | { parameters: { collapse?: boolean | undefined; n: number }; strategy: 'BEST_N_PAGES' }
    | undefined
  preprocessConfig: { autoRotate: boolean; imageQuality: 'LOW' | 'HIGH'; maxPages: number }
  status: 'active' | 'inactive'
  trainingId: string | null
  updatedBy: string | null
  updatedTime: string | null
  width: number
}
type PatchModelId = {
  description?: (string | null) | undefined
  fieldConfig?:
    | {
        [x: string]:
          | {
              description?: (string | null) | undefined
              enum?: string[] | undefined
              maxLength?: number | undefined
              type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
            }
          | {
              fields: {
                [x: string]: {
                  description?: (string | null) | undefined
                  enum?: string[] | undefined
                  maxLength?: number | undefined
                  type: 'amount' | 'date' | 'digits' | 'enum' | 'numeric' | 'string'
                }
              }
              type: 'lines'
            }
      }
    | undefined
  height?: number | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  postprocessConfig?:
    | { strategy: 'BEST_FIRST' }
    | { parameters: { collapse?: boolean | undefined; n: number }; strategy: 'BEST_N_PAGES' }
    | undefined
  preprocessConfig?:
    | { autoRotate: boolean; imageQuality: 'LOW' | 'HIGH'; maxPages: number }
    | undefined
  trainingId?: (string | null) | undefined
  width?: number | undefined
}
type DataBundles = {
  dataBundles: {
    createdBy: string | null
    createdTime: string | null
    dataBundleId: string
    datasets: {
      containsPersonallyIdentifiableInformation: boolean
      createdBy?: (string | null) | undefined
      createdTime?: (string | null) | undefined
      datasetId: string
      description: string | null
      groundTruthSummary?: { [x: string]: unknown } | undefined
      metadata?: ({ [x: string]: unknown } | null) | undefined
      name?: (string | null) | undefined
      numberOfDocuments: number
      retentionInDays: number
      storageLocation: 'EU'
      updatedBy?: (string | null) | undefined
      updatedTime?: (string | null) | undefined
      version: number
    }[]
    description: string | null
    modelId: string
    name: string | null
    retentionInDays?: number | undefined
    status: 'running' | 'succeeded' | 'failed'
    summary: { [x: string]: unknown } | null
    updatedBy: string | null
    updatedTime: string | null
  }[]
  nextToken: string | null
  status?: ('running' | 'succeeded' | 'failed')[] | undefined
}
type PostDataBundles = {
  datasetIds?: string[] | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type DataBundle = {
  createdBy: string | null
  createdTime: string | null
  dataBundleId: string
  datasets: {
    containsPersonallyIdentifiableInformation: boolean
    createdBy?: (string | null) | undefined
    createdTime?: (string | null) | undefined
    datasetId: string
    description: string | null
    groundTruthSummary?: { [x: string]: unknown } | undefined
    metadata?: ({ [x: string]: unknown } | null) | undefined
    name?: (string | null) | undefined
    numberOfDocuments: number
    retentionInDays: number
    storageLocation: 'EU'
    updatedBy?: (string | null) | undefined
    updatedTime?: (string | null) | undefined
    version: number
  }[]
  description: string | null
  modelId: string
  name: string | null
  retentionInDays?: number | undefined
  status: 'running' | 'succeeded' | 'failed'
  summary: { [x: string]: unknown } | null
  updatedBy: string | null
  updatedTime: string | null
}
type PatchDataBundleId = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type Trainings = {
  nextToken: string | null
  status?:
    | ('waiting-for-approval' | 'pending' | 'running' | 'succeeded' | 'failed' | 'cancelled')[]
    | undefined
  trainings: {
    createdBy: string | null
    createdTime: string | null
    dataBundleIds: string[]
    dataScientistAssistance?: boolean | undefined
    deploymentEnvironmentId?: (string | null) | undefined
    description: string | null
    evaluation: { [x: string]: unknown }
    gpuHours: number | null
    instanceType: 'small-gpu' | 'medium-gpu' | 'large-gpu'
    metadata: { [x: string]: unknown } | null
    modelId: string
    name: string | null
    status: 'waiting-for-approval' | 'pending' | 'running' | 'succeeded' | 'failed' | 'cancelled'
    trainingId: string
    updatedBy: string | null
    updatedTime: string | null
    warmStartConfig?: { trainingId: string } | {} | undefined
  }[]
}
type PostTrainings = {
  dataBundleIds?: string[] | undefined
  dataScientistAssistance?: boolean | undefined
  description?: (string | null) | undefined
  instanceType?: 'small-gpu' | 'medium-gpu' | 'large-gpu' | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  warmStartConfig?: { trainingId: string } | undefined
}
type Training = {
  createdBy: string | null
  createdTime: string | null
  dataBundleIds: string[]
  dataScientistAssistance?: boolean | undefined
  deploymentEnvironmentId?: (string | null) | undefined
  description: string | null
  evaluation: { [x: string]: unknown }
  gpuHours: number | null
  instanceType: 'small-gpu' | 'medium-gpu' | 'large-gpu'
  metadata: { [x: string]: unknown } | null
  modelId: string
  name: string | null
  status: 'waiting-for-approval' | 'pending' | 'running' | 'succeeded' | 'failed' | 'cancelled'
  trainingId: string
  updatedBy: string | null
  updatedTime: string | null
  warmStartConfig?: { trainingId: string } | {} | undefined
}
type PatchTrainingId = {
  deploymentEnvironmentId?: (string | null) | undefined
  description?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  status?: 'cancelled' | undefined
}
type Organizations = {
  nextToken: string | null
  organizations: {
    clientId?: (string | null) | undefined
    deploymentsAllowed?: { [x: string]: unknown } | undefined
    deploymentsCreated?: { [x: string]: unknown } | undefined
    description: string | null
    documentRetentionInDays: number
    monthlyNumberOfActiveModelsUsed: number
    monthlyNumberOfDataBundlesAllowed: number
    monthlyNumberOfDataBundlesCreated: number
    monthlyNumberOfDocumentsAllowed: number
    monthlyNumberOfDocumentsCreated: number
    monthlyNumberOfFieldPredictionsUsed: number
    monthlyNumberOfGpuHoursUsed: number
    monthlyNumberOfModelDeploymentUnitsUsed?: number | undefined
    monthlyNumberOfPredictionsAllowed: number
    monthlyNumberOfPredictionsCreated: number
    monthlyNumberOfTrainingsAllowed: number
    monthlyNumberOfTrainingsCreated: number
    monthlyNumberOfTransitionExecutionsAllowed: number
    monthlyNumberOfTransitionExecutionsCreated: number
    monthlyNumberOfWorkflowExecutionsAllowed: number
    monthlyNumberOfWorkflowExecutionsCreated: number
    monthlyUsageSummary: { [x: string]: unknown }
    name: string | null
    numberOfAppClientsAllowed: number
    numberOfAppClientsCreated: number
    numberOfAssetsAllowed: number
    numberOfAssetsCreated: number
    numberOfDatasetsAllowed?: number | undefined
    numberOfDatasetsCreated?: number | undefined
    numberOfModelsAllowed: number
    numberOfModelsCreated: number
    numberOfSecretsAllowed: number
    numberOfSecretsCreated: number
    numberOfTransitionsAllowed: number
    numberOfTransitionsCreated: number
    numberOfUsersAllowed: number
    numberOfUsersCreated: number
    numberOfWorkflowsAllowed: number
    numberOfWorkflowsCreated: number
    organizationId: string
    paymentMethodId: string | null
    planId: string | null
    updatedBy: string | null
    updatedTime: string | null
  }[]
}
type PostOrganizations = { name?: (string | null) | undefined }
type Organization = {
  clientId?: (string | null) | undefined
  deploymentsAllowed?: { [x: string]: unknown } | undefined
  deploymentsCreated?: { [x: string]: unknown } | undefined
  description: string | null
  documentRetentionInDays: number
  monthlyNumberOfActiveModelsUsed: number
  monthlyNumberOfDataBundlesAllowed: number
  monthlyNumberOfDataBundlesCreated: number
  monthlyNumberOfDocumentsAllowed: number
  monthlyNumberOfDocumentsCreated: number
  monthlyNumberOfFieldPredictionsUsed: number
  monthlyNumberOfGpuHoursUsed: number
  monthlyNumberOfModelDeploymentUnitsUsed?: number | undefined
  monthlyNumberOfPredictionsAllowed: number
  monthlyNumberOfPredictionsCreated: number
  monthlyNumberOfTrainingsAllowed: number
  monthlyNumberOfTrainingsCreated: number
  monthlyNumberOfTransitionExecutionsAllowed: number
  monthlyNumberOfTransitionExecutionsCreated: number
  monthlyNumberOfWorkflowExecutionsAllowed: number
  monthlyNumberOfWorkflowExecutionsCreated: number
  monthlyUsageSummary: { [x: string]: unknown }
  name: string | null
  numberOfAppClientsAllowed: number
  numberOfAppClientsCreated: number
  numberOfAssetsAllowed: number
  numberOfAssetsCreated: number
  numberOfDatasetsAllowed?: number | undefined
  numberOfDatasetsCreated?: number | undefined
  numberOfModelsAllowed: number
  numberOfModelsCreated: number
  numberOfSecretsAllowed: number
  numberOfSecretsCreated: number
  numberOfTransitionsAllowed: number
  numberOfTransitionsCreated: number
  numberOfUsersAllowed: number
  numberOfUsersCreated: number
  numberOfWorkflowsAllowed: number
  numberOfWorkflowsCreated: number
  organizationId: string
  paymentMethodId: string | null
  planId: string | null
  updatedBy: string | null
  updatedTime: string | null
}
type PatchOrganizationId = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  paymentMethodId?: string | undefined
  planId?: string | undefined
}
type PaymentMethods = {
  nextToken: string | null
  paymentMethods: {
    createdBy: string | null
    createdTime: string | null
    description: string | null
    details: { [x: string]: unknown } | null
    name: string | null
    paymentMethodId: string
    stripePublishableKey?: (string | null) | undefined
    stripeSetupIntentSecret?: (string | null) | undefined
    updatedBy: string | null
    updatedTime: string | null
  }[]
}
type PostPaymentMethods = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type PaymentMethod = {
  createdBy: string | null
  createdTime: string | null
  description: string | null
  details: { [x: string]: unknown } | null
  name: string | null
  paymentMethodId: string
  stripePublishableKey?: (string | null) | undefined
  stripeSetupIntentSecret?: (string | null) | undefined
  updatedBy: string | null
  updatedTime: string | null
}
type PatchPaymentMethodId = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  stripeSetupIntentSecret?: string | undefined
}
type Plans = {
  nextToken: string | null
  plans: {
    activeModels?: ({ [x: string]: unknown } | null) | undefined
    available: boolean
    currency: 'USD' | 'EUR' | 'NOK'
    description?: (string | null) | undefined
    fieldPredictions?: ({ [x: string]: unknown } | null) | undefined
    gpuHours?: ({ [x: string]: unknown } | null) | undefined
    latest: number
    license?: ({ [x: string]: unknown } | null) | undefined
    modelDeploymentUnits?: ({ [x: string]: unknown } | null) | undefined
    name: string | null
    organizationId: string | null
    planId: string
  }[]
}
type Plan = {
  activeModels?: ({ [x: string]: unknown } | null) | undefined
  available: boolean
  currency: 'USD' | 'EUR' | 'NOK'
  description?: (string | null) | undefined
  fieldPredictions?: ({ [x: string]: unknown } | null) | undefined
  gpuHours?: ({ [x: string]: unknown } | null) | undefined
  latest: number
  license?: ({ [x: string]: unknown } | null) | undefined
  modelDeploymentUnits?: ({ [x: string]: unknown } | null) | undefined
  name: string | null
  organizationId: string | null
  planId: string
}
type Predictions = {
  nextToken: string | null
  order?: 'ascending' | 'descending' | undefined
  predictions: {
    createdBy?: (string | null) | undefined
    createdTime?: (string | null) | undefined
    documentId: string
    inferenceTime: number
    modelId: string
    predictionId: string
    predictions: (
      | {
          confidence: number
          label: string
          location?: number[] | undefined
          page?: number | undefined
          value: string | null
        }
      | {
          label: string
          page?: number | undefined
          value: {
            confidence: number
            label: string
            location?: number[] | undefined
            page?: number | undefined
            value: string | null
          }[][]
        }
    )[]
    trainingId?: (string | null) | undefined
  }[]
  sortBy?: 'createdTime' | undefined
}
type PostPredictions = {
  autoRotate?: boolean | undefined
  documentId: string
  imageQuality?: 'LOW' | 'HIGH' | undefined
  maxPages?: number | undefined
  modelId: string
  postprocessConfig?:
    | { strategy: 'BEST_FIRST' }
    | { parameters: { collapse?: boolean | undefined; n: number }; strategy: 'BEST_N_PAGES' }
    | undefined
  rotation?: 0 | 90 | 180 | 270 | undefined
  trainingId?: string | undefined
}
type Prediction = {
  createdBy?: (string | null) | undefined
  createdTime?: (string | null) | undefined
  documentId: string
  inferenceTime: number
  modelId: string
  predictionId: string
  predictions: (
    | {
        confidence: number
        label: string
        location?: number[] | undefined
        page?: number | undefined
        value: string | null
      }
    | {
        label: string
        page?: number | undefined
        value: {
          confidence: number
          label: string
          location?: number[] | undefined
          page?: number | undefined
          value: string | null
        }[][]
      }
  )[]
  trainingId?: (string | null) | undefined
}
type Profile = {
  createdTime?: (string | null) | undefined
  email?: string | undefined
  familyName?: (string | null) | undefined
  givenName?: (string | null) | undefined
  locale?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  name?: (string | null) | undefined
  picture?: (string | null) | undefined
  profileId: string
  updatedTime?: (string | null) | undefined
}
type Secrets = {
  nextToken: string | null
  secrets: {
    createdBy: string | null
    createdTime: string | null
    description: string | null
    name: string | null
    secretId: string
    updatedBy: string | null
    updatedTime: string | null
  }[]
}
type PostSecrets = {
  data: { [x: string]: unknown }
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type Secret = {
  createdBy: string | null
  createdTime: string | null
  description: string | null
  name: string | null
  secretId: string
  updatedBy: string | null
  updatedTime: string | null
}
type PatchSecretId = {
  data?: { [x: string]: unknown } | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type PostSignUp = {
  email: string
  name?: (string | null) | undefined
  password: string
  reCaptchaResponse: string
}
type SignUp = { clientId: string; username: string }
type Transitions = {
  nextToken: string | null
  transitionType?: ('docker' | 'manual')[] | undefined
  transitions: {
    assets?: { jsRemoteComponent?: string | undefined } | undefined
    createdBy: string | null
    createdTime: string | null
    description: string | null
    inputJsonSchema?: { [x: string]: unknown } | undefined
    name: string | null
    outputJsonSchema?: { [x: string]: unknown } | undefined
    parameters: { [x: string]: unknown }
    timeoutInSeconds: number
    transitionId: string | string
    transitionType: 'docker' | 'manual'
    updatedBy: string | null
    updatedTime: string | null
  }[]
}
type PostTransitions = {
  description?: (string | null) | undefined
  inputJsonSchema?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  outputJsonSchema?: { [x: string]: unknown } | undefined
  parameters?:
    | {
        cpu?: 256 | 512 | 1024 | undefined
        environment?: { [x: string]: string } | undefined
        environmentSecrets?: string[] | undefined
        imageUrl: string
        memory?: 512 | 1024 | 2048 | 4096 | 8192 | undefined
        secretId?: string | undefined
      }
    | { assets?: { jsRemoteComponent?: string | undefined } | undefined }
    | undefined
  timeoutInSeconds?: number | undefined
  transitionType: 'docker' | 'manual'
}
type Transition = {
  assets?: { jsRemoteComponent?: string | undefined } | undefined
  createdBy: string | null
  createdTime: string | null
  description: string | null
  inputJsonSchema?: { [x: string]: unknown } | undefined
  name: string | null
  outputJsonSchema?: { [x: string]: unknown } | undefined
  parameters: { [x: string]: unknown }
  timeoutInSeconds: number
  transitionId: string | string
  transitionType: 'docker' | 'manual'
  updatedBy: string | null
  updatedTime: string | null
}
type PatchTransitionId = {
  assets?: { jsRemoteComponent?: string | undefined } | undefined
  description?: (string | null) | undefined
  environment?: { [x: string]: string } | undefined
  environmentSecrets?: string[] | undefined
  inputJsonSchema?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
  outputJsonSchema?: { [x: string]: unknown } | undefined
  parameters?:
    | {
        cpu?: 256 | 512 | 1024 | undefined
        environment?: ({ [x: string]: string } | null) | undefined
        environmentSecrets?: (string[] | null) | undefined
        imageUrl?: string | undefined
        memory?: 512 | 1024 | 2048 | 4096 | 8192 | undefined
        secretId?: (string | null) | undefined
      }
    | { assets?: { jsRemoteComponent?: string | undefined } | undefined }
    | undefined
}
type TransitionExecutions = {
  executions: {
    completedBy: string | null
    endTime?: (string | null) | undefined
    executionId: string
    input: { [x: string]: unknown } | null
    logId?: (string | null) | undefined
    startTime?: (string | null) | undefined
    status: 'running' | 'succeeded' | 'failed' | 'rejected' | 'retry'
    transitionId: string | string
  }[]
  nextToken: string | null
  status?: ('running' | 'succeeded' | 'failed' | 'rejected' | 'retry')[] | undefined
  transitionId: string | string
}
type PostTransitionExecution = { [x: string]: unknown }
type TransitionExecution = {
  completedBy: string | null
  endTime?: (string | null) | undefined
  executionId: string
  input: { [x: string]: unknown } | null
  logId?: (string | null) | undefined
  startTime?: (string | null) | undefined
  status: 'running' | 'succeeded' | 'failed' | 'rejected' | 'retry'
  transitionId: string | string
}
type PatchTransistionExecutionId =
  | { status?: 'succeeded' | undefined }
  | { status?: 'failed' | 'rejected' | 'retry' | undefined }
type PostHeartbeats = { [x: string]: unknown }
type Users = {
  nextToken: string | null
  users: {
    avatar?: (string | null) | undefined
    createdBy: string | null
    createdTime: string | null
    email: string
    metadata?: ({ [x: string]: unknown } | null) | undefined
    name?: (string | null) | undefined
    profileId?: (string | null) | undefined
    updatedBy: string | null
    updatedTime: string | null
    userId: string
  }[]
}
type PostUsers = {
  appClientId?: string | undefined
  avatar?: (string | null) | undefined
  email: string
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
}
type User = {
  avatar?: (string | null) | undefined
  createdBy: string | null
  createdTime: string | null
  email: string
  metadata?: ({ [x: string]: unknown } | null) | undefined
  name?: (string | null) | undefined
  profileId?: (string | null) | undefined
  updatedBy: string | null
  updatedTime: string | null
  userId: string
}
type PatchUserId = {
  avatar?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
}
type Workflows = {
  nextToken: string | null
  workflows: {
    completedConfig: {
      environment?: { [x: string]: string } | undefined
      environmentSecrets?: string[] | undefined
      imageUrl: string
      secretId?: string | undefined
    } | null
    createdBy: string | null
    createdTime: string | null
    description: string | null
    errorConfig: { email?: string | undefined; manualRetry?: boolean | undefined } | null
    name: string | null
    numberOfRunningExecutions: number
    updatedBy: string | null
    updatedTime: string | null
    workflowId: string
  }[]
}
type PostWorkflows = {
  completedConfig?:
    | {
        environment?: { [x: string]: string } | undefined
        environmentSecrets?: string[] | undefined
        imageUrl: string
        secretId?: string | undefined
      }
    | undefined
  description?: (string | null) | undefined
  errorConfig?: { email?: string | undefined; manualRetry?: boolean | undefined } | undefined
  name?: (string | null) | undefined
  specification: {
    definition: { [x: string]: unknown }
    language?: 'ASL' | undefined
    version?: '1.0.0' | undefined
  }
}
type Workflow = {
  completedConfig: {
    environment?: { [x: string]: string } | undefined
    environmentSecrets?: string[] | undefined
    imageUrl: string
    secretId?: string | undefined
  } | null
  createdBy: string | null
  createdTime: string | null
  description: string | null
  errorConfig: { email?: string | undefined; manualRetry?: boolean | undefined } | null
  name: string | null
  numberOfRunningExecutions: number
  updatedBy: string | null
  updatedTime: string | null
  workflowId: string
}
type PatchWorkflowId = {
  completedConfig?:
    | {
        environment?: { [x: string]: string } | undefined
        environmentSecrets?: string[] | undefined
        imageUrl: string
        secretId?: string | undefined
      }
    | undefined
  description?: (string | null) | undefined
  errorConfig?: { email?: string | undefined; manualRetry?: boolean | undefined } | undefined
  name?: (string | null) | undefined
}
type WorkflowExecutions = {
  executions: {
    completedBy?: (string | string)[] | undefined
    completedTaskLogId?: (string | null) | undefined
    endTime: string | null
    events?: { [x: string]: unknown }[] | undefined
    executionId: string
    input: { [x: string]: unknown } | null
    logId?: (string | null) | undefined
    output: { [x: string]: unknown } | null
    startTime: string | null
    status: 'running' | 'succeeded' | 'failed' | 'rejected' | 'retry' | 'error'
    transitionExecutions: { [x: string]: unknown } | null
    workflowId: string
  }[]
  nextToken: string | null
  order?: 'ascending' | 'descending' | undefined
  sortBy?: 'startTime' | 'endTime' | undefined
  status?: ('running' | 'succeeded' | 'failed' | 'rejected' | 'retry' | 'error')[] | undefined
  workflowId: string
}
type PostWorkflowExecutions = { input: { [x: string]: unknown } }
type WorkflowExecution = {
  completedBy?: (string | string)[] | undefined
  completedTaskLogId?: (string | null) | undefined
  endTime: string | null
  events?: { [x: string]: unknown }[] | undefined
  executionId: string
  input: { [x: string]: unknown } | null
  logId?: (string | null) | undefined
  output: { [x: string]: unknown } | null
  startTime: string | null
  status: 'running' | 'succeeded' | 'failed' | 'rejected' | 'retry' | 'error'
  transitionExecutions: { [x: string]: unknown } | null
  workflowId: string
}
type PatchWorkflowExecutionId = { nextTransitionId: string | string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/appClients': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: AppClients
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAppClients }
            output: AppClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAppClients }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAppClients }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAppClients }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAppClients }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAppClients }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/appClients/:appClientId': {
      $delete:
        | {
            input: { param: { appClientId: string } }
            output: AppClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appClientId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appClientId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appClientId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appClientId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { appClientId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { appClientId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { appClientId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAppClientId
            }
            output: AppClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appClientId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAppClientId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appClientId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAppClientId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { appClientId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAppClientId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appClientId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAppClientId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { appClientId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAppClientId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Assets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAssets }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAssets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAssets }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAssets }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAssets }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostAssets }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/assets/:assetId': {
      $delete:
        | {
            input: { param: { assetId: string } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { assetId: string } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { assetId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { assetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAssetId
            }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAssetId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { assetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAssetId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAssetId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { assetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAssetId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { assetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchAssetId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasets': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Datasets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDatasets }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDatasets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDatasets }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDatasets }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDatasets }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDatasets }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasets/:datasetId': {
      $delete:
        | {
            input: { param: { datasetId: string } }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { datasetId: string } }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { datasetId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { datasetId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { datasetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDatasetId
            }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDatasetId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDatasetId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDatasetId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDatasetId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { datasetId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDatasetId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploymentEnvironments': {
      $get:
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: DeploymentEnvironments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/deploymentEnvironments/:deploymentEnvironmentId': {
      $get:
        | {
            input: { param: { deploymentEnvironmentId: string } }
            output: DeploymentEnvironment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentEnvironmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deploymentEnvironmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deploymentEnvironmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deploymentEnvironmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { deploymentEnvironmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { deploymentEnvironmentId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/documents': {
      $delete:
        | {
            input: {
              query: {
                consentId?: string | undefined
                datasetId?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Documents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                consentId?: string | undefined
                datasetId?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                consentId?: string | undefined
                datasetId?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                consentId?: string | undefined
                datasetId?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                consentId?: string | undefined
                datasetId?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                consentId?: string | undefined
                datasetId?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                datasetId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                documentId?: string | undefined
                consentId?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Documents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                datasetId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                documentId?: string | undefined
                consentId?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                datasetId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                documentId?: string | undefined
                consentId?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                datasetId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                documentId?: string | undefined
                consentId?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                datasetId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                documentId?: string | undefined
                consentId?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                datasetId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                documentId?: string | undefined
                consentId?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDocuments }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDocuments }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDocuments }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDocuments }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDocuments }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostDocuments }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:documentId': {
      $delete:
        | {
            input: { param: { documentId: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { documentId: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { documentId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { documentId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDocumentId
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { documentId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDocumentId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { documentId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDocumentId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { documentId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDocumentId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { documentId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDocumentId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { documentId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchDocumentId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/logs': {
      $get:
        | {
            input: {
              query: {
                workflowId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                transitionExecutionId?: string | undefined
                transitionId?: string | undefined
                maxResults?: string | undefined
                workflowExecutionId?: string | undefined
              }
            }
            output: Logs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                transitionExecutionId?: string | undefined
                transitionId?: string | undefined
                maxResults?: string | undefined
                workflowExecutionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                transitionExecutionId?: string | undefined
                transitionId?: string | undefined
                maxResults?: string | undefined
                workflowExecutionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                transitionExecutionId?: string | undefined
                transitionId?: string | undefined
                maxResults?: string | undefined
                workflowExecutionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                transitionExecutionId?: string | undefined
                transitionId?: string | undefined
                maxResults?: string | undefined
                workflowExecutionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                workflowId?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                transitionExecutionId?: string | undefined
                transitionId?: string | undefined
                maxResults?: string | undefined
                workflowExecutionId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/logs/:logId': {
      $get:
        | { input: { param: { logId: string } }; output: Log; outputFormat: 'json'; status: 200 }
        | { input: { param: { logId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { logId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { logId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { logId: string } }; output: Error; outputFormat: 'json'; status: 415 }
        | { input: { param: { logId: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $options: {
        input: { param: { logId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models': {
      $get:
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Models
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostModels }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostModels }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostModels }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostModels }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostModels }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostModels }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/models/:modelId': {
      $delete:
        | {
            input: { param: { modelId: string } }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { modelId: string } }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { modelId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchModelId
            }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchModelId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchModelId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchModelId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchModelId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchModelId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/models/:modelId/dataBundles': {
      $get:
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: DataBundles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { modelId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostDataBundles
            }
            output: DataBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostDataBundles
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostDataBundles
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostDataBundles
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostDataBundles
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostDataBundles
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/models/:modelId/dataBundles/:dataBundleId': {
      $delete:
        | {
            input: { param: { dataBundleId: string; modelId: string } }
            output: DataBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { dataBundleId: string; modelId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { dataBundleId: string; modelId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchDataBundleId }
            output: DataBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchDataBundleId }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchDataBundleId }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchDataBundleId }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchDataBundleId }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { dataBundleId: string; modelId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchDataBundleId }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/models/:modelId/trainings': {
      $get:
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Trainings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } } & {
              query: {
                status?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { modelId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTrainings
            }
            output: Training
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTrainings
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTrainings
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTrainings
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTrainings
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTrainings
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/models/:modelId/trainings/:trainingId': {
      $options: {
        input: { param: { modelId: string; trainingId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { modelId: string; trainingId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTrainingId }
            output: Training
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string; trainingId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTrainingId }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string; trainingId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTrainingId }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { modelId: string; trainingId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTrainingId }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { modelId: string; trainingId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTrainingId }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { modelId: string; trainingId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTrainingId }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Organizations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostOrganizations }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostOrganizations }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostOrganizations }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostOrganizations }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostOrganizations }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostOrganizations }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { organizationId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { organizationId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchOrganizationId }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchOrganizationId }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchOrganizationId }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchOrganizationId }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchOrganizationId }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchOrganizationId }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentMethods': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: PaymentMethods
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPaymentMethods }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPaymentMethods }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPaymentMethods }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPaymentMethods }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPaymentMethods }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPaymentMethods }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentMethods/:paymentMethodId': {
      $delete:
        | {
            input: { param: { paymentMethodId: string } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { paymentMethodId: string } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { paymentMethodId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { paymentMethodId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { paymentMethodId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchPaymentMethodId }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchPaymentMethodId }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentMethodId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchPaymentMethodId }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentMethodId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchPaymentMethodId }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentMethodId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchPaymentMethodId }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { paymentMethodId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchPaymentMethodId }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/plans': {
      $get:
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Plans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                owner?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/plans/:planId': {
      $get:
        | { input: { param: { planId: string } }; output: Plan; outputFormat: 'json'; status: 200 }
        | { input: { param: { planId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { planId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { planId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { planId: string } }; output: Error; outputFormat: 'json'; status: 415 }
        | { input: { param: { planId: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $options: {
        input: { param: { planId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/predictions': {
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
                order?: string | undefined
              }
            }
            output: Predictions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
                order?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
                order?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
                order?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
                order?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
                order?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPredictions }
            output: Prediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPredictions }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPredictions }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPredictions }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPredictions }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostPredictions }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/profiles/:profileId': {
      $get:
        | {
            input: { param: { profileId: string } }
            output: Profile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { profileId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { profileId: string } }
            output: Profile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { profileId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/secrets': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Secrets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSecrets }
            output: Secret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSecrets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSecrets }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSecrets }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSecrets }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSecrets }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/secrets/:secretId': {
      $delete:
        | {
            input: { param: { secretId: string } }
            output: Secret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { secretId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { secretId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { secretId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { secretId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { secretId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { secretId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchSecretId
            }
            output: Secret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { secretId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchSecretId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { secretId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchSecretId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchSecretId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { secretId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchSecretId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { secretId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchSecretId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/signup': {
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSignUp }
            output: SignUp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSignUp }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSignUp }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSignUp }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSignUp }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostSignUp }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transitions': {
      $get:
        | {
            input: {
              query: {
                transitionType?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Transitions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transitionType?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transitionType?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                transitionType?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                transitionType?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                transitionType?: string | undefined
                nextToken?: string | undefined
                maxResults?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostTransitions }
            output: Transition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostTransitions }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostTransitions }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostTransitions }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostTransitions }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostTransitions }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transitions/:transitionId': {
      $delete:
        | {
            input: { param: { transitionId: string } }
            output: Transition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { transitionId: string } }
            output: Transition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { transitionId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchTransitionId
            }
            output: Transition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchTransitionId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchTransitionId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchTransitionId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchTransitionId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchTransitionId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transitions/:transitionId/executions': {
      $get:
        | {
            input: { param: { transitionId: string } } & {
              query: {
                nextToken?: string | undefined
                order?: string | undefined
                executionId?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: TransitionExecutions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string } } & {
              query: {
                nextToken?: string | undefined
                order?: string | undefined
                executionId?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string } } & {
              query: {
                nextToken?: string | undefined
                order?: string | undefined
                executionId?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string } } & {
              query: {
                nextToken?: string | undefined
                order?: string | undefined
                executionId?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string } } & {
              query: {
                nextToken?: string | undefined
                order?: string | undefined
                executionId?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string } } & {
              query: {
                nextToken?: string | undefined
                order?: string | undefined
                executionId?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { transitionId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTransitionExecution
            }
            output: TransitionExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTransitionExecution
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTransitionExecution
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTransitionExecution
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTransitionExecution
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string } } & { header: { 'Content-Type': string } } & {
              json: PostTransitionExecution
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transitions/:transitionId/executions/:executionId': {
      $get:
        | {
            input: { param: { transitionId: string; executionId: string } }
            output: TransitionExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string; executionId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string; executionId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string; executionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string; executionId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string; executionId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { transitionId: string; executionId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTransistionExecutionId }
            output: TransitionExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTransistionExecutionId }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTransistionExecutionId }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTransistionExecutionId }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTransistionExecutionId }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchTransistionExecutionId }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transitions/:transitionId/executions/:executionId/heartbeats': {
      $options: {
        input: { param: { transitionId: string; executionId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PostHeartbeats }
            output: Empty
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PostHeartbeats }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PostHeartbeats }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PostHeartbeats }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PostHeartbeats }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transitionId: string; executionId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PostHeartbeats }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Users
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostUsers }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostUsers }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostUsers }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostUsers }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostUsers }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostUsers }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:userId': {
      $delete:
        | { input: { param: { userId: string } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 415 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $get:
        | { input: { param: { userId: string } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 415 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $options: {
        input: { param: { userId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchUserId
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchUserId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchUserId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchUserId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchUserId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { userId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchUserId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workflows': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Workflows
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { nextToken?: string | undefined; maxResults?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: { input: { json: Empty }; output: Empty; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { header: { 'Content-Type': string } } & { json: PostWorkflows }
            output: Workflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostWorkflows }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostWorkflows }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostWorkflows }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostWorkflows }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Content-Type': string } } & { json: PostWorkflows }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workflows/:workflowId': {
      $delete:
        | {
            input: { param: { workflowId: string } }
            output: Workflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { workflowId: string } }
            output: Workflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { workflowId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchWorkflowId
            }
            output: Workflow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchWorkflowId
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchWorkflowId
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchWorkflowId
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchWorkflowId
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PatchWorkflowId
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workflows/:workflowId/executions': {
      $get:
        | {
            input: { param: { workflowId: string } } & {
              query: {
                fromStartTime?: string | undefined
                toStartTime?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: WorkflowExecutions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & {
              query: {
                fromStartTime?: string | undefined
                toStartTime?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & {
              query: {
                fromStartTime?: string | undefined
                toStartTime?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & {
              query: {
                fromStartTime?: string | undefined
                toStartTime?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & {
              query: {
                fromStartTime?: string | undefined
                toStartTime?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & {
              query: {
                fromStartTime?: string | undefined
                toStartTime?: string | undefined
                nextToken?: string | undefined
                order?: string | undefined
                status?: string | undefined
                maxResults?: string | undefined
                sortBy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { workflowId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PostWorkflowExecutions
            }
            output: WorkflowExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PostWorkflowExecutions
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PostWorkflowExecutions
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PostWorkflowExecutions
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PostWorkflowExecutions
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & { header: { 'Content-Type': string } } & {
              json: PostWorkflowExecutions
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workflows/:workflowId/executions/:executionId': {
      $delete:
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: WorkflowExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: WorkflowExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { executionId: string; workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $options: {
        input: { param: { executionId: string; workflowId: string } } & { json: Empty }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { executionId: string; workflowId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchWorkflowExecutionId }
            output: WorkflowExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { executionId: string; workflowId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchWorkflowExecutionId }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { executionId: string; workflowId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchWorkflowExecutionId }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { executionId: string; workflowId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchWorkflowExecutionId }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { executionId: string; workflowId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchWorkflowExecutionId }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { executionId: string; workflowId: string } } & {
              header: { 'Content-Type': string }
            } & { json: PatchWorkflowExecutionId }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
