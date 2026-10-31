import { createRoute, z } from '@hono/zod-openapi'

type GroundTruthListType =
  | {
      label: string
      value: string | ({ [key: string]: unknown } | null) | boolean | number | GroundTruthListType
    }[]
  | {
      label: string
      value: string | ({ [key: string]: unknown } | null) | boolean | number | GroundTruthListType
    }[][]

const AppClientSchema = z
  .strictObject({
    appClientId: z.string().regex(/^las:app-client:[a-z0-9-_]+$/),
    callbackUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).nullable(),
    clientId: z.string(),
    clientSecret: z.string().exactOptional(),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    defaultLoginUrl: z
      .string()
      .regex(/^http:\/\/localhost.*|^https:\/\/.*/)
      .nullable(),
    description: z.string().max(4096).nullable(),
    hasSecret: z.boolean(),
    loginUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).nullable(),
    logoutUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).nullable(),
    name: z.string().max(4096).nullable(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'appClientId',
      'callbackUrls',
      'clientId',
      'createdBy',
      'createdTime',
      'defaultLoginUrl',
      'description',
      'hasSecret',
      'loginUrls',
      'logoutUrls',
      'name',
      'updatedBy',
      'updatedTime',
    ],
    title: 'appClient',
  })
  .openapi('AppClient')

const AppClientsSchema = z
  .strictObject({
    appClients: z.array(
      z
        .strictObject({
          appClientId: z.string().regex(/^las:app-client:[a-z0-9-_]+$/),
          callbackUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).nullable(),
          clientId: z.string(),
          clientSecret: z.string().exactOptional(),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          defaultLoginUrl: z
            .string()
            .regex(/^http:\/\/localhost.*|^https:\/\/.*/)
            .nullable(),
          description: z.string().max(4096).nullable(),
          hasSecret: z.boolean(),
          loginUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).nullable(),
          logoutUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).nullable(),
          name: z.string().max(4096).nullable(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'appClientId',
            'callbackUrls',
            'clientId',
            'createdBy',
            'createdTime',
            'defaultLoginUrl',
            'description',
            'hasSecret',
            'loginUrls',
            'logoutUrls',
            'name',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
  })
  .openapi({ required: ['appClients', 'nextToken'], title: 'appClients' })
  .openapi('AppClients')

const AssetSchema = z
  .strictObject({
    assetId: z.string().regex(/^las:asset:[a-f0-9]{32}$/),
    content: z.string().min(1).exactOptional(),
    contentMD5: z.string().max(4096).nullable(),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    description: z.string().max(4096).nullable(),
    name: z.string().max(4096).nullable(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'assetId',
      'contentMD5',
      'createdBy',
      'createdTime',
      'description',
      'name',
      'updatedBy',
      'updatedTime',
    ],
    title: 'asset',
  })
  .openapi('Asset')

const AssetsSchema = z
  .strictObject({
    assets: z.array(
      z
        .strictObject({
          assetId: z.string().regex(/^las:asset:[a-f0-9]{32}$/),
          content: z.string().min(1).exactOptional(),
          contentMD5: z.string().max(4096).nullable(),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          description: z.string().max(4096).nullable(),
          name: z.string().max(4096).nullable(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'assetId',
            'contentMD5',
            'createdBy',
            'createdTime',
            'description',
            'name',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
  })
  .openapi({ required: ['assets', 'nextToken'], title: 'assets' })
  .openapi('Assets')

const DataBundleSchema = z
  .strictObject({
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    dataBundleId: z.string().regex(/^las:model-data-bundle:[a-f0-9]{32}$/),
    datasets: z.array(
      z
        .strictObject({
          containsPersonallyIdentifiableInformation: z.boolean(),
          createdBy: z.string().max(4096).nullable().exactOptional(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable()
            .exactOptional(),
          datasetId: z.string().regex(/^las:dataset:[a-f0-9]{32}$/),
          description: z.string().max(4096).nullable(),
          groundTruthSummary: z.object({}).exactOptional(),
          metadata: z.object({}).nullable().exactOptional(),
          name: z.string().max(4096).nullable().exactOptional(),
          numberOfDocuments: z.int().min(0),
          retentionInDays: z.int().min(0).max(1825),
          storageLocation: z.literal('EU'),
          updatedBy: z.string().max(4096).nullable().exactOptional(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable()
            .exactOptional(),
          version: z.int().min(0),
        })
        .openapi({
          required: [
            'containsPersonallyIdentifiableInformation',
            'datasetId',
            'description',
            'numberOfDocuments',
            'retentionInDays',
            'storageLocation',
            'version',
          ],
        }),
    ),
    description: z.string().max(4096).nullable(),
    modelId: z.string().regex(/^las:model:[a-z0-9-_]+$/),
    name: z.string().max(4096).nullable(),
    retentionInDays: z.int().min(1).exactOptional(),
    status: z.enum(['running', 'succeeded', 'failed']),
    summary: z.object({}).nullable(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'dataBundleId',
      'datasets',
      'description',
      'modelId',
      'name',
      'status',
      'summary',
      'updatedBy',
      'updatedTime',
    ],
    title: 'dataBundle',
  })
  .openapi('DataBundle')

const DataBundlesSchema = z
  .strictObject({
    dataBundles: z.array(
      z
        .strictObject({
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          dataBundleId: z.string().regex(/^las:model-data-bundle:[a-f0-9]{32}$/),
          datasets: z.array(
            z
              .strictObject({
                containsPersonallyIdentifiableInformation: z.boolean(),
                createdBy: z.string().max(4096).nullable().exactOptional(),
                createdTime: z
                  .string()
                  .regex(
                    /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
                  )
                  .nullable()
                  .exactOptional(),
                datasetId: z.string().regex(/^las:dataset:[a-f0-9]{32}$/),
                description: z.string().max(4096).nullable(),
                groundTruthSummary: z.object({}).exactOptional(),
                metadata: z.object({}).nullable().exactOptional(),
                name: z.string().max(4096).nullable().exactOptional(),
                numberOfDocuments: z.int().min(0),
                retentionInDays: z.int().min(0).max(1825),
                storageLocation: z.literal('EU'),
                updatedBy: z.string().max(4096).nullable().exactOptional(),
                updatedTime: z
                  .string()
                  .regex(
                    /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
                  )
                  .nullable()
                  .exactOptional(),
                version: z.int().min(0),
              })
              .openapi({
                required: [
                  'containsPersonallyIdentifiableInformation',
                  'datasetId',
                  'description',
                  'numberOfDocuments',
                  'retentionInDays',
                  'storageLocation',
                  'version',
                ],
              }),
          ),
          description: z.string().max(4096).nullable(),
          modelId: z.string().regex(/^las:model:[a-z0-9-_]+$/),
          name: z.string().max(4096).nullable(),
          retentionInDays: z.int().min(1).exactOptional(),
          status: z.enum(['running', 'succeeded', 'failed']),
          summary: z.object({}).nullable(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'createdBy',
            'createdTime',
            'dataBundleId',
            'datasets',
            'description',
            'modelId',
            'name',
            'status',
            'summary',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
    status: z.array(z.enum(['running', 'succeeded', 'failed'])).exactOptional(),
  })
  .openapi({ required: ['dataBundles', 'nextToken'], title: 'dataBundles' })
  .openapi('DataBundles')

const DatasetSchema = z
  .strictObject({
    containsPersonallyIdentifiableInformation: z.boolean(),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    datasetId: z.string().regex(/^las:dataset:[a-f0-9]{32}$/),
    description: z.string().max(4096).nullable(),
    groundTruthSummary: z.object({}),
    metadata: z.object({}).nullable(),
    name: z.string().max(4096).nullable().exactOptional(),
    numberOfDocuments: z.int().min(0),
    retentionInDays: z.int().min(0).max(1825),
    storageLocation: z.literal('EU'),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    version: z.int().min(0),
  })
  .openapi({
    required: [
      'containsPersonallyIdentifiableInformation',
      'createdBy',
      'createdTime',
      'datasetId',
      'description',
      'groundTruthSummary',
      'metadata',
      'numberOfDocuments',
      'retentionInDays',
      'storageLocation',
      'updatedBy',
      'updatedTime',
      'version',
    ],
    title: 'dataset',
  })
  .openapi('Dataset')

const DatasetsSchema = z
  .strictObject({
    datasets: z.array(
      z
        .strictObject({
          containsPersonallyIdentifiableInformation: z.boolean(),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          datasetId: z.string().regex(/^las:dataset:[a-f0-9]{32}$/),
          description: z.string().max(4096).nullable(),
          groundTruthSummary: z.object({}),
          metadata: z.object({}).nullable(),
          name: z.string().max(4096).nullable().exactOptional(),
          numberOfDocuments: z.int().min(0),
          retentionInDays: z.int().min(0).max(1825),
          storageLocation: z.literal('EU'),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          version: z.int().min(0),
        })
        .openapi({
          required: [
            'containsPersonallyIdentifiableInformation',
            'createdBy',
            'createdTime',
            'datasetId',
            'description',
            'groundTruthSummary',
            'metadata',
            'numberOfDocuments',
            'retentionInDays',
            'storageLocation',
            'updatedBy',
            'updatedTime',
            'version',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
  })
  .openapi({ required: ['datasets', 'nextToken'], title: 'datasets' })
  .openapi('Datasets')

const DeploymentEnvironmentSchema = z
  .strictObject({
    deploymentEnvironmentId: z
      .string()
      .regex(/^las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/),
    description: z.string().max(4096).nullable(),
    modelDeploymentUnits: z.int().min(0),
    name: z.string().max(4096).nullable(),
    organizationId: z
      .string()
      .regex(/^las:organization:[a-z0-9-_]+$/)
      .nullable(),
    status: z.enum(['available', 'unavailable']),
  })
  .openapi({
    required: [
      'deploymentEnvironmentId',
      'description',
      'modelDeploymentUnits',
      'name',
      'organizationId',
      'status',
    ],
    title: 'deploymentEnvironment',
  })
  .openapi('DeploymentEnvironment')

const DeploymentEnvironmentsSchema = z
  .strictObject({
    deploymentEnvironments: z.array(
      z
        .strictObject({
          deploymentEnvironmentId: z
            .string()
            .regex(/^las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/),
          description: z.string().max(4096).nullable(),
          modelDeploymentUnits: z.int().min(0),
          name: z.string().max(4096).nullable(),
          organizationId: z
            .string()
            .regex(/^las:organization:[a-z0-9-_]+$/)
            .nullable(),
          status: z.enum(['available', 'unavailable']),
        })
        .openapi({
          required: [
            'deploymentEnvironmentId',
            'description',
            'modelDeploymentUnits',
            'name',
            'organizationId',
            'status',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
  })
  .openapi({ required: ['deploymentEnvironments', 'nextToken'], title: 'deploymentEnvironments' })
  .openapi('DeploymentEnvironments')

const GroundTruthListSchema: z.ZodType<GroundTruthListType> = z
  .lazy(() =>
    z.union([
      z.array(
        z
          .strictObject({
            label: z
              .string()
              .regex(/^[0-9A-Za-z-_]+$/)
              .min(1)
              .max(36),
            value: z.union([
              z.string().min(0).max(512),
              z.any().nullable(),
              z.boolean(),
              z.number(),
              GroundTruthListSchema,
            ]),
          })
          .openapi({ required: ['label', 'value'] }),
      ),
      z.array(
        z.array(
          z
            .strictObject({
              label: z
                .string()
                .regex(/^[0-9A-Za-z-_]+$/)
                .min(1)
                .max(36),
              value: z.union([
                z.string().min(0).max(512),
                z.any().nullable(),
                z.boolean(),
                z.number(),
                GroundTruthListSchema,
              ]),
            })
            .openapi({ required: ['label', 'value'] }),
        ),
      ),
    ]),
  )
  .openapi('GroundTruthList')

const DocumentSchema = z
  .strictObject({
    consentId: z
      .string()
      .regex(/^las:consent:[a-f0-9]{32}$/)
      .exactOptional(),
    content: z.string().min(1).exactOptional(),
    contentMD5: z.string().max(4096).nullable(),
    contentType: z.enum(['application/pdf', 'image/jpeg', 'image/png', 'image/tiff']),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    datasetId: z
      .string()
      .regex(/^las:dataset:[a-f0-9]{32}$/)
      .exactOptional(),
    description: z.string().max(4096).nullable(),
    documentId: z.string().regex(/^las:document:[a-f0-9]{32}$/),
    groundTruth: z
      .array(
        z
          .strictObject({
            label: z
              .string()
              .regex(/^[0-9A-Za-z-_]+$/)
              .min(1)
              .max(36),
            value: z.union([
              z.string().min(0).max(512).nullable(),
              z.boolean().nullable(),
              z.number().nullable(),
              GroundTruthListSchema.nullable(),
            ]),
          })
          .openapi({ required: ['label', 'value'] }),
      )
      .exactOptional(),
    metadata: z.object({}).nullable(),
    name: z.string().max(4096).nullable(),
    retentionInDays: z.int().min(1),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'contentMD5',
      'contentType',
      'createdBy',
      'createdTime',
      'description',
      'documentId',
      'metadata',
      'name',
      'retentionInDays',
      'updatedBy',
      'updatedTime',
    ],
    title: 'document',
  })
  .openapi('Document')

const DocumentsSchema = z
  .strictObject({
    consentId: z.array(z.string().regex(/^las:consent:[a-f0-9]{32}$/)).exactOptional(),
    datasetId: z.array(z.string().regex(/^las:dataset:[a-f0-9]{32}$/)).exactOptional(),
    documents: z.array(
      z
        .strictObject({
          consentId: z
            .string()
            .regex(/^las:consent:[a-f0-9]{32}$/)
            .exactOptional(),
          content: z.string().min(1).exactOptional(),
          contentMD5: z.string().max(4096).nullable(),
          contentType: z.enum(['application/pdf', 'image/jpeg', 'image/png', 'image/tiff']),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          datasetId: z
            .string()
            .regex(/^las:dataset:[a-f0-9]{32}$/)
            .exactOptional(),
          description: z.string().max(4096).nullable(),
          documentId: z.string().regex(/^las:document:[a-f0-9]{32}$/),
          groundTruth: z
            .array(
              z
                .strictObject({
                  label: z
                    .string()
                    .regex(/^[0-9A-Za-z-_]+$/)
                    .min(1)
                    .max(36),
                  value: z.union([
                    z.string().min(0).max(512).nullable(),
                    z.boolean().nullable(),
                    z.number().nullable(),
                    GroundTruthListSchema.nullable(),
                  ]),
                })
                .openapi({ required: ['label', 'value'] }),
            )
            .exactOptional(),
          metadata: z.object({}).nullable(),
          name: z.string().max(4096).nullable(),
          retentionInDays: z.int().min(1),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'contentMD5',
            'contentType',
            'createdBy',
            'createdTime',
            'description',
            'documentId',
            'metadata',
            'name',
            'retentionInDays',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
    order: z.enum(['ascending', 'descending']).exactOptional(),
    sortBy: z.literal('createdTime').exactOptional(),
  })
  .openapi({ required: ['documents', 'nextToken'], title: 'documents' })
  .openapi('Documents')

const EmptySchema = z.object({}).openapi({ title: 'Empty Schema' }).openapi('Empty')

const ErrorSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ title: 'Error Schema', required: [] })
  .openapi('Error')

const LogSchema = z
  .strictObject({
    events: z.array(z.object({})).exactOptional(),
    logId: z.string().regex(/^las:log:[a-f0-9]{32}$/),
    startTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    transitionExecutionId: z
      .string()
      .regex(/^las:transition-execution:[a-f0-9]{32}$/)
      .nullable(),
    transitionId: z
      .union([
        z.string().regex(/^las:transition:[a-f0-9]{32}$/),
        z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
      ])
      .nullable(),
    workflowExecutionId: z
      .string()
      .regex(/^las:workflow-execution:[a-f0-9]{32}$/)
      .nullable(),
    workflowId: z
      .string()
      .regex(/^las:workflow:[a-f0-9]{32}$/)
      .nullable(),
  })
  .openapi({
    required: [
      'logId',
      'startTime',
      'transitionExecutionId',
      'transitionId',
      'workflowExecutionId',
      'workflowId',
    ],
    title: 'log',
  })
  .openapi('Log')

const LogsSchema = z
  .strictObject({
    logs: z.array(
      z
        .strictObject({
          events: z.array(z.object({})).exactOptional(),
          logId: z.string().regex(/^las:log:[a-f0-9]{32}$/),
          startTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          transitionExecutionId: z
            .string()
            .regex(/^las:transition-execution:[a-f0-9]{32}$/)
            .nullable(),
          transitionId: z
            .union([
              z.string().regex(/^las:transition:[a-f0-9]{32}$/),
              z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
            ])
            .nullable(),
          workflowExecutionId: z
            .string()
            .regex(/^las:workflow-execution:[a-f0-9]{32}$/)
            .nullable(),
          workflowId: z
            .string()
            .regex(/^las:workflow:[a-f0-9]{32}$/)
            .nullable(),
        })
        .openapi({
          required: [
            'logId',
            'startTime',
            'transitionExecutionId',
            'transitionId',
            'workflowExecutionId',
            'workflowId',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
    order: z.enum(['ascending', 'descending']).exactOptional(),
    transitionExecutionId: z
      .string()
      .regex(/^las:transition-execution:[a-f0-9]{32}$/)
      .exactOptional(),
    transitionId: z
      .union([
        z.string().regex(/^las:transition:[a-f0-9]{32}$/),
        z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
      ])
      .exactOptional(),
    workflowExecutionId: z
      .string()
      .regex(/^las:workflow-execution:[a-f0-9]{32}$/)
      .exactOptional(),
    workflowId: z
      .string()
      .regex(/^las:workflow:[a-f0-9]{32}$/)
      .exactOptional(),
  })
  .openapi({ required: ['logs', 'nextToken'], title: 'logs' })
  .openapi('Logs')

const ModelSchema = z
  .strictObject({
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    description: z.string().max(4096).nullable(),
    fieldConfig: z
      .record(
        z.string(),
        z.xor([
          z
            .object({
              description: z.string().max(4096).nullable().exactOptional(),
              enum: z
                .array(
                  z
                    .string()
                    .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                    .min(1)
                    .max(512),
                )
                .min(1)
                .max(500)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              maxLength: z.int().min(1).max(512).exactOptional(),
              type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
            })
            .openapi({ required: ['type'] }),
          z
            .object({
              fields: z.record(
                z.string(),
                z
                  .object({
                    description: z.string().max(4096).nullable().exactOptional(),
                    enum: z
                      .array(
                        z
                          .string()
                          .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                          .min(1)
                          .max(512),
                      )
                      .min(1)
                      .max(500)
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional(),
                    maxLength: z.int().min(1).max(512).exactOptional(),
                    type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
                  })
                  .openapi({ required: ['type'] }),
              ),
              type: z.literal('lines'),
            })
            .openapi({ required: ['fields', 'type'] }),
        ]),
      )
      .nullable(),
    height: z.int().min(97).max(1921),
    metadata: z.object({}).nullable(),
    modelId: z.string().regex(/^las:model:[a-z0-9-_]+$/),
    name: z.string().max(4096).nullable(),
    numberOfDataBundles: z.int().min(0),
    numberOfRunningTrainings: z.int().min(0),
    organizationId: z.string().regex(/^las:organization:[a-z0-9-_]+$/),
    postprocessConfig: z
      .xor([
        z.strictObject({ strategy: z.literal('BEST_FIRST') }).openapi({ required: ['strategy'] }),
        z
          .strictObject({
            parameters: z
              .object({ collapse: z.boolean().exactOptional(), n: z.int().min(1).max(3) })
              .openapi({ required: ['n'] }),
            strategy: z.literal('BEST_N_PAGES'),
          })
          .openapi({ required: ['parameters', 'strategy'] }),
      ])
      .exactOptional(),
    preprocessConfig: z
      .strictObject({
        autoRotate: z.boolean(),
        imageQuality: z.enum(['LOW', 'HIGH']),
        maxPages: z.int().min(1).max(3),
      })
      .openapi({ required: ['autoRotate', 'imageQuality', 'maxPages'] }),
    status: z.enum(['active', 'inactive']),
    trainingId: z
      .string()
      .regex(/^las:model-training:[a-f0-9]{32}$/)
      .nullable(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    width: z.int().min(97).max(1921),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'description',
      'fieldConfig',
      'height',
      'metadata',
      'modelId',
      'name',
      'numberOfDataBundles',
      'numberOfRunningTrainings',
      'organizationId',
      'preprocessConfig',
      'status',
      'trainingId',
      'updatedBy',
      'updatedTime',
      'width',
    ],
    title: 'model',
  })
  .openapi('Model')

const ModelsSchema = z
  .strictObject({
    models: z.array(
      z
        .strictObject({
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          description: z.string().max(4096).nullable(),
          fieldConfig: z
            .record(
              z.string(),
              z.xor([
                z
                  .object({
                    description: z.string().max(4096).nullable().exactOptional(),
                    enum: z
                      .array(
                        z
                          .string()
                          .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                          .min(1)
                          .max(512),
                      )
                      .min(1)
                      .max(500)
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional(),
                    maxLength: z.int().min(1).max(512).exactOptional(),
                    type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
                  })
                  .openapi({ required: ['type'] }),
                z
                  .object({
                    fields: z.record(
                      z.string(),
                      z
                        .object({
                          description: z.string().max(4096).nullable().exactOptional(),
                          enum: z
                            .array(
                              z
                                .string()
                                .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                                .min(1)
                                .max(512),
                            )
                            .min(1)
                            .max(500)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            })
                            .exactOptional(),
                          maxLength: z.int().min(1).max(512).exactOptional(),
                          type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
                        })
                        .openapi({ required: ['type'] }),
                    ),
                    type: z.literal('lines'),
                  })
                  .openapi({ required: ['fields', 'type'] }),
              ]),
            )
            .nullable(),
          height: z.int().min(97).max(1921),
          metadata: z.object({}).nullable(),
          modelId: z.string().regex(/^las:model:[a-z0-9-_]+$/),
          name: z.string().max(4096).nullable(),
          numberOfDataBundles: z.int().min(0),
          numberOfRunningTrainings: z.int().min(0),
          organizationId: z.string().regex(/^las:organization:[a-z0-9-_]+$/),
          postprocessConfig: z
            .xor([
              z
                .strictObject({ strategy: z.literal('BEST_FIRST') })
                .openapi({ required: ['strategy'] }),
              z
                .strictObject({
                  parameters: z
                    .object({ collapse: z.boolean().exactOptional(), n: z.int().min(1).max(3) })
                    .openapi({ required: ['n'] }),
                  strategy: z.literal('BEST_N_PAGES'),
                })
                .openapi({ required: ['parameters', 'strategy'] }),
            ])
            .exactOptional(),
          preprocessConfig: z
            .strictObject({
              autoRotate: z.boolean(),
              imageQuality: z.enum(['LOW', 'HIGH']),
              maxPages: z.int().min(1).max(3),
            })
            .openapi({ required: ['autoRotate', 'imageQuality', 'maxPages'] }),
          status: z.enum(['active', 'inactive']),
          trainingId: z
            .string()
            .regex(/^las:model-training:[a-f0-9]{32}$/)
            .nullable(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          width: z.int().min(97).max(1921),
        })
        .openapi({
          required: [
            'createdBy',
            'createdTime',
            'description',
            'fieldConfig',
            'height',
            'metadata',
            'modelId',
            'name',
            'numberOfDataBundles',
            'numberOfRunningTrainings',
            'organizationId',
            'preprocessConfig',
            'status',
            'trainingId',
            'updatedBy',
            'updatedTime',
            'width',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
  })
  .openapi({ required: ['models', 'nextToken'], title: 'models' })
  .openapi('Models')

const OrganizationSchema = z
  .strictObject({
    clientId: z
      .string()
      .regex(/^[0-9a-z]+$/)
      .nullable()
      .exactOptional(),
    deploymentsAllowed: z.object({}).exactOptional(),
    deploymentsCreated: z.object({}).exactOptional(),
    description: z.string().max(4096).nullable(),
    documentRetentionInDays: z.int().min(1),
    monthlyNumberOfActiveModelsUsed: z.int().min(0),
    monthlyNumberOfDataBundlesAllowed: z.int().min(0),
    monthlyNumberOfDataBundlesCreated: z.int().min(0),
    monthlyNumberOfDocumentsAllowed: z.int().min(0),
    monthlyNumberOfDocumentsCreated: z.int().min(0),
    monthlyNumberOfFieldPredictionsUsed: z.int().min(0),
    monthlyNumberOfGpuHoursUsed: z.number().min(0),
    monthlyNumberOfModelDeploymentUnitsUsed: z.int().min(0).exactOptional(),
    monthlyNumberOfPredictionsAllowed: z.int().min(0),
    monthlyNumberOfPredictionsCreated: z.int().min(0),
    monthlyNumberOfTrainingsAllowed: z.int().min(0),
    monthlyNumberOfTrainingsCreated: z.int().min(0),
    monthlyNumberOfTransitionExecutionsAllowed: z.int().min(0),
    monthlyNumberOfTransitionExecutionsCreated: z.int().min(0),
    monthlyNumberOfWorkflowExecutionsAllowed: z.int().min(0),
    monthlyNumberOfWorkflowExecutionsCreated: z.int().min(0),
    monthlyUsageSummary: z.object({}),
    name: z.string().max(4096).nullable(),
    numberOfAppClientsAllowed: z.int().min(0),
    numberOfAppClientsCreated: z.int().min(0),
    numberOfAssetsAllowed: z.int().min(0),
    numberOfAssetsCreated: z.int().min(0),
    numberOfDatasetsAllowed: z.int().min(0).exactOptional(),
    numberOfDatasetsCreated: z.int().min(0).exactOptional(),
    numberOfModelsAllowed: z.int().min(0),
    numberOfModelsCreated: z.int().min(0),
    numberOfSecretsAllowed: z.int().min(0),
    numberOfSecretsCreated: z.int().min(0),
    numberOfTransitionsAllowed: z.int().min(0),
    numberOfTransitionsCreated: z.int().min(0),
    numberOfUsersAllowed: z.int().min(0),
    numberOfUsersCreated: z.int().min(0),
    numberOfWorkflowsAllowed: z.int().min(0),
    numberOfWorkflowsCreated: z.int().min(0),
    organizationId: z.string().regex(/^las:organization:[a-z0-9-_]+$/),
    paymentMethodId: z
      .string()
      .regex(/^las:payment-method:[a-f0-9]{32}$/)
      .nullable(),
    planId: z
      .string()
      .regex(/^(|las:organization:[a-z0-9-_]+\/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/)
      .nullable(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'description',
      'documentRetentionInDays',
      'monthlyNumberOfActiveModelsUsed',
      'monthlyNumberOfDataBundlesAllowed',
      'monthlyNumberOfDataBundlesCreated',
      'monthlyNumberOfDocumentsAllowed',
      'monthlyNumberOfDocumentsCreated',
      'monthlyNumberOfFieldPredictionsUsed',
      'monthlyNumberOfGpuHoursUsed',
      'monthlyNumberOfPredictionsAllowed',
      'monthlyNumberOfPredictionsCreated',
      'monthlyNumberOfTrainingsAllowed',
      'monthlyNumberOfTrainingsCreated',
      'monthlyNumberOfTransitionExecutionsAllowed',
      'monthlyNumberOfTransitionExecutionsCreated',
      'monthlyNumberOfWorkflowExecutionsAllowed',
      'monthlyNumberOfWorkflowExecutionsCreated',
      'monthlyUsageSummary',
      'name',
      'numberOfAppClientsAllowed',
      'numberOfAppClientsCreated',
      'numberOfAssetsAllowed',
      'numberOfAssetsCreated',
      'numberOfModelsAllowed',
      'numberOfModelsCreated',
      'numberOfSecretsAllowed',
      'numberOfSecretsCreated',
      'numberOfTransitionsAllowed',
      'numberOfTransitionsCreated',
      'numberOfUsersAllowed',
      'numberOfUsersCreated',
      'numberOfWorkflowsAllowed',
      'numberOfWorkflowsCreated',
      'organizationId',
      'paymentMethodId',
      'planId',
      'updatedBy',
      'updatedTime',
    ],
    title: 'organization',
  })
  .openapi('Organization')

const OrganizationsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    organizations: z.array(
      z
        .strictObject({
          clientId: z
            .string()
            .regex(/^[0-9a-z]+$/)
            .nullable()
            .exactOptional(),
          deploymentsAllowed: z.object({}).exactOptional(),
          deploymentsCreated: z.object({}).exactOptional(),
          description: z.string().max(4096).nullable(),
          documentRetentionInDays: z.int().min(1),
          monthlyNumberOfActiveModelsUsed: z.int().min(0),
          monthlyNumberOfDataBundlesAllowed: z.int().min(0),
          monthlyNumberOfDataBundlesCreated: z.int().min(0),
          monthlyNumberOfDocumentsAllowed: z.int().min(0),
          monthlyNumberOfDocumentsCreated: z.int().min(0),
          monthlyNumberOfFieldPredictionsUsed: z.int().min(0),
          monthlyNumberOfGpuHoursUsed: z.number().min(0),
          monthlyNumberOfModelDeploymentUnitsUsed: z.int().min(0).exactOptional(),
          monthlyNumberOfPredictionsAllowed: z.int().min(0),
          monthlyNumberOfPredictionsCreated: z.int().min(0),
          monthlyNumberOfTrainingsAllowed: z.int().min(0),
          monthlyNumberOfTrainingsCreated: z.int().min(0),
          monthlyNumberOfTransitionExecutionsAllowed: z.int().min(0),
          monthlyNumberOfTransitionExecutionsCreated: z.int().min(0),
          monthlyNumberOfWorkflowExecutionsAllowed: z.int().min(0),
          monthlyNumberOfWorkflowExecutionsCreated: z.int().min(0),
          monthlyUsageSummary: z.object({}),
          name: z.string().max(4096).nullable(),
          numberOfAppClientsAllowed: z.int().min(0),
          numberOfAppClientsCreated: z.int().min(0),
          numberOfAssetsAllowed: z.int().min(0),
          numberOfAssetsCreated: z.int().min(0),
          numberOfDatasetsAllowed: z.int().min(0).exactOptional(),
          numberOfDatasetsCreated: z.int().min(0).exactOptional(),
          numberOfModelsAllowed: z.int().min(0),
          numberOfModelsCreated: z.int().min(0),
          numberOfSecretsAllowed: z.int().min(0),
          numberOfSecretsCreated: z.int().min(0),
          numberOfTransitionsAllowed: z.int().min(0),
          numberOfTransitionsCreated: z.int().min(0),
          numberOfUsersAllowed: z.int().min(0),
          numberOfUsersCreated: z.int().min(0),
          numberOfWorkflowsAllowed: z.int().min(0),
          numberOfWorkflowsCreated: z.int().min(0),
          organizationId: z.string().regex(/^las:organization:[a-z0-9-_]+$/),
          paymentMethodId: z
            .string()
            .regex(/^las:payment-method:[a-f0-9]{32}$/)
            .nullable(),
          planId: z
            .string()
            .regex(
              /^(|las:organization:[a-z0-9-_]+\/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/,
            )
            .nullable(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'description',
            'documentRetentionInDays',
            'monthlyNumberOfActiveModelsUsed',
            'monthlyNumberOfDataBundlesAllowed',
            'monthlyNumberOfDataBundlesCreated',
            'monthlyNumberOfDocumentsAllowed',
            'monthlyNumberOfDocumentsCreated',
            'monthlyNumberOfFieldPredictionsUsed',
            'monthlyNumberOfGpuHoursUsed',
            'monthlyNumberOfPredictionsAllowed',
            'monthlyNumberOfPredictionsCreated',
            'monthlyNumberOfTrainingsAllowed',
            'monthlyNumberOfTrainingsCreated',
            'monthlyNumberOfTransitionExecutionsAllowed',
            'monthlyNumberOfTransitionExecutionsCreated',
            'monthlyNumberOfWorkflowExecutionsAllowed',
            'monthlyNumberOfWorkflowExecutionsCreated',
            'monthlyUsageSummary',
            'name',
            'numberOfAppClientsAllowed',
            'numberOfAppClientsCreated',
            'numberOfAssetsAllowed',
            'numberOfAssetsCreated',
            'numberOfModelsAllowed',
            'numberOfModelsCreated',
            'numberOfSecretsAllowed',
            'numberOfSecretsCreated',
            'numberOfTransitionsAllowed',
            'numberOfTransitionsCreated',
            'numberOfUsersAllowed',
            'numberOfUsersCreated',
            'numberOfWorkflowsAllowed',
            'numberOfWorkflowsCreated',
            'organizationId',
            'paymentMethodId',
            'planId',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'organizations'], title: 'organizations' })
  .openapi('Organizations')

const PatchAppClientIdSchema = z
  .strictObject({
    defaultLoginUrl: z
      .string()
      .regex(/^http:\/\/localhost.*|^https:\/\/.*/)
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    loginUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /appClients/{appClientId}', required: [] })
  .openapi('PatchAppClientId')

const PatchAssetIdSchema = z
  .strictObject({
    content: z.string().min(1).exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /assets/assetId', required: [] })
  .openapi('PatchAssetId')

const PatchDataBundleIdSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /models/{modelId}/dataBundles/{dataBundleId}', required: [] })
  .openapi('PatchDataBundleId')

const PatchDatasetIdSchema = z
  .strictObject({
    containsPersonallyIdentifiableInformation: z.boolean().exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    retentionInDays: z.int().min(1).exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /datasets/{datasetId}', required: [] })
  .openapi('PatchDatasetId')

const PatchDocumentIdSchema = z
  .strictObject({
    datasetId: z
      .string()
      .regex(/^las:dataset:[a-f0-9]{32}$/)
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    groundTruth: z
      .array(
        z
          .strictObject({
            label: z
              .string()
              .regex(/^[0-9A-Za-z-_]+$/)
              .min(1)
              .max(36),
            value: z.union([
              z.string().min(0).max(512).nullable(),
              z.boolean().nullable(),
              z.number().nullable(),
              GroundTruthListSchema.nullable(),
            ]),
          })
          .openapi({ required: ['label', 'value'] }),
      )
      .nullable()
      .exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    retentionInDays: z.int().min(1).exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /documents/{documentId}', required: [] })
  .openapi('PatchDocumentId')

const PatchModelIdSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    fieldConfig: z
      .record(
        z.string(),
        z.xor([
          z
            .object({
              description: z.string().max(4096).nullable().exactOptional(),
              enum: z
                .array(
                  z
                    .string()
                    .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                    .min(1)
                    .max(512),
                )
                .min(1)
                .max(500)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              maxLength: z.int().min(1).max(512).exactOptional(),
              type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
            })
            .openapi({ required: ['type'] }),
          z
            .object({
              fields: z.record(
                z.string(),
                z
                  .object({
                    description: z.string().max(4096).nullable().exactOptional(),
                    enum: z
                      .array(
                        z
                          .string()
                          .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                          .min(1)
                          .max(512),
                      )
                      .min(1)
                      .max(500)
                      .superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      })
                      .exactOptional(),
                    maxLength: z.int().min(1).max(512).exactOptional(),
                    type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
                  })
                  .openapi({ required: ['type'] }),
              ),
              type: z.literal('lines'),
            })
            .openapi({ required: ['fields', 'type'] }),
        ]),
      )
      .exactOptional(),
    height: z.int().min(97).max(1921).exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    postprocessConfig: z
      .xor([
        z.strictObject({ strategy: z.literal('BEST_FIRST') }).openapi({ required: ['strategy'] }),
        z
          .strictObject({
            parameters: z
              .object({ collapse: z.boolean().exactOptional(), n: z.int().min(1).max(3) })
              .openapi({ required: ['n'] }),
            strategy: z.literal('BEST_N_PAGES'),
          })
          .openapi({ required: ['parameters', 'strategy'] }),
      ])
      .exactOptional(),
    preprocessConfig: z
      .strictObject({
        autoRotate: z.boolean(),
        imageQuality: z.enum(['LOW', 'HIGH']),
        maxPages: z.int().min(1).max(3),
      })
      .exactOptional()
      .openapi({ required: ['autoRotate', 'imageQuality', 'maxPages'] }),
    trainingId: z
      .string()
      .regex(/^las:model-training:[a-f0-9]{32}$/)
      .nullable()
      .exactOptional(),
    width: z.int().min(97).max(1921).exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /models/modelId', required: [] })
  .openapi('PatchModelId')

const PatchOrganizationIdSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    paymentMethodId: z
      .string()
      .regex(/^las:payment-method:[a-f0-9]{32}$/)
      .exactOptional(),
    planId: z
      .string()
      .regex(/^(|las:organization:[a-z0-9-_]+\/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/)
      .exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /organizations/organizationId', required: [] })
  .openapi('PatchOrganizationId')

const PatchPaymentMethodIdSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    stripeSetupIntentSecret: z.string().min(1).exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /paymentMethods/{paymentMethodId}', required: [] })
  .openapi('PatchPaymentMethodId')

const PatchSecretIdSchema = z
  .strictObject({
    data: z.object({}).exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /secrets/{secretId}', required: [] })
  .openapi('PatchSecretId')

const PatchTrainingIdSchema = z
  .strictObject({
    deploymentEnvironmentId: z
      .string()
      .regex(
        /^(|las:organization:[a-z0-9-_]+\/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/,
      )
      .nullable()
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    status: z.literal('cancelled').exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /models/{modelId}/trainings/{trainingId}', required: [] })
  .openapi('PatchTrainingId')

const PatchTransistionExecutionIdSchema = z
  .union([
    z.object({ status: z.literal('succeeded').exactOptional() }).openapi({ required: [] }),
    z
      .object({ status: z.enum(['failed', 'rejected', 'retry']).exactOptional() })
      .openapi({ required: [] }),
  ])
  .and(
    z
      .object({
        error: z
          .strictObject({ message: z.string().max(4096) })
          .exactOptional()
          .openapi({ required: ['message'] }),
        output: z.object({}).exactOptional(),
        startTime: z
          .string()
          .regex(
            /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
          )
          .nullable()
          .exactOptional(),
        status: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({ title: 'PATCH transitions/{transitionId}/executions/{executionId}' })
  .openapi('PatchTransistionExecutionId')

const PatchTransitionIdSchema = z
  .strictObject({
    assets: z
      .object({
        jsRemoteComponent: z
          .string()
          .regex(/^las:asset:[a-f0-9]{32}$/)
          .exactOptional(),
      })
      .catchall(z.string().regex(/^las:asset:[a-f0-9]{32}$/))
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    environment: z.record(z.string(), z.string()).exactOptional(),
    environmentSecrets: z.array(z.string().regex(/^las:secret:[a-f0-9]{32}$/)).exactOptional(),
    inputJsonSchema: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    outputJsonSchema: z.object({}).exactOptional(),
    parameters: z
      .union([
        z
          .strictObject({
            cpu: z.union([z.literal(256), z.literal(512), z.literal(1024)]).exactOptional(),
            environment: z.record(z.string(), z.string()).nullable().exactOptional(),
            environmentSecrets: z
              .array(z.string().regex(/^las:secret:[a-f0-9]{32}$/))
              .nullable()
              .exactOptional(),
            imageUrl: z.string().exactOptional(),
            memory: z
              .union([
                z.literal(512),
                z.literal(1024),
                z.literal(2048),
                z.literal(4096),
                z.literal(8192),
              ])
              .exactOptional(),
            secretId: z
              .string()
              .regex(/^las:secret:[a-f0-9]{32}$/)
              .nullable()
              .exactOptional(),
          })
          .openapi({ required: [] }),
        z
          .strictObject({
            assets: z
              .object({
                jsRemoteComponent: z
                  .string()
                  .regex(/^las:asset:[a-f0-9]{32}$/)
                  .exactOptional(),
              })
              .catchall(z.string().regex(/^las:asset:[a-f0-9]{32}$/))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      ])
      .exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /transitions/{transitionId}', required: [] })
  .openapi('PatchTransitionId')

const PatchUserIdSchema = z
  .strictObject({
    avatar: z.string().max(131072).nullable().exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /users/{userId}', required: [] })
  .openapi('PatchUserId')

const PatchWorkflowExecutionIdSchema = z
  .strictObject({
    nextTransitionId: z.union([
      z.string().regex(/^las:transition:[a-f0-9]{32}$/),
      z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
    ]),
  })
  .openapi({
    required: ['nextTransitionId'],
    title: 'PATCH workflows/{workflowId}/executions/{executionId}',
  })
  .openapi('PatchWorkflowExecutionId')

const PatchWorkflowIdSchema = z
  .strictObject({
    completedConfig: z
      .strictObject({
        environment: z.record(z.string(), z.string()).exactOptional(),
        environmentSecrets: z.array(z.string().regex(/^las:secret:[a-f0-9]{32}$/)).exactOptional(),
        imageUrl: z.string(),
        secretId: z
          .string()
          .regex(/^las:secret:[a-f0-9]{32}$/)
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['imageUrl'] }),
    description: z.string().max(4096).nullable().exactOptional(),
    errorConfig: z
      .strictObject({
        email: z
          .string()
          .regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/)
          .exactOptional(),
        manualRetry: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ title: 'PATCH /workflows/{workflowId}', required: [] })
  .openapi('PatchWorkflowId')

const PaymentMethodSchema = z
  .strictObject({
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    description: z.string().max(4096).nullable(),
    details: z.object({}).nullable(),
    name: z.string().max(4096).nullable(),
    paymentMethodId: z.string().regex(/^las:payment-method:[a-f0-9]{32}$/),
    stripePublishableKey: z.string().max(4096).nullable().exactOptional(),
    stripeSetupIntentSecret: z.string().max(4096).nullable().exactOptional(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'description',
      'details',
      'name',
      'paymentMethodId',
      'updatedBy',
      'updatedTime',
    ],
    title: 'payment_method',
  })
  .openapi('PaymentMethod')

const PaymentMethodsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    paymentMethods: z.array(
      z
        .strictObject({
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          description: z.string().max(4096).nullable(),
          details: z.object({}).nullable(),
          name: z.string().max(4096).nullable(),
          paymentMethodId: z.string().regex(/^las:payment-method:[a-f0-9]{32}$/),
          stripePublishableKey: z.string().max(4096).nullable().exactOptional(),
          stripeSetupIntentSecret: z.string().max(4096).nullable().exactOptional(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'createdBy',
            'createdTime',
            'description',
            'details',
            'name',
            'paymentMethodId',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'paymentMethods'], title: 'payment_methods' })
  .openapi('PaymentMethods')

const PlanSchema = z
  .strictObject({
    activeModels: z.object({}).nullable().exactOptional(),
    available: z.boolean(),
    currency: z.enum(['USD', 'EUR', 'NOK']),
    description: z.string().max(4096).nullable().exactOptional(),
    fieldPredictions: z.object({}).nullable().exactOptional(),
    gpuHours: z.object({}).nullable().exactOptional(),
    latest: z.int().min(1),
    license: z.object({}).nullable().exactOptional(),
    modelDeploymentUnits: z.object({}).nullable().exactOptional(),
    name: z.string().max(4096).nullable(),
    organizationId: z
      .string()
      .regex(/^las:organization:[a-z0-9-_]+$/)
      .nullable(),
    planId: z.string().regex(/^las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/),
  })
  .openapi({
    required: ['available', 'currency', 'latest', 'name', 'organizationId', 'planId'],
    title: 'plan',
  })
  .openapi('Plan')

const PlansSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    plans: z.array(
      z
        .strictObject({
          activeModels: z.object({}).nullable().exactOptional(),
          available: z.boolean(),
          currency: z.enum(['USD', 'EUR', 'NOK']),
          description: z.string().max(4096).nullable().exactOptional(),
          fieldPredictions: z.object({}).nullable().exactOptional(),
          gpuHours: z.object({}).nullable().exactOptional(),
          latest: z.int().min(1),
          license: z.object({}).nullable().exactOptional(),
          modelDeploymentUnits: z.object({}).nullable().exactOptional(),
          name: z.string().max(4096).nullable(),
          organizationId: z
            .string()
            .regex(/^las:organization:[a-z0-9-_]+$/)
            .nullable(),
          planId: z.string().regex(/^las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/),
        })
        .openapi({
          required: ['available', 'currency', 'latest', 'name', 'organizationId', 'planId'],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'plans'], title: 'plans' })
  .openapi('Plans')

const PostAppClientsSchema = z
  .strictObject({
    callbackUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).exactOptional(),
    defaultLoginUrl: z
      .string()
      .regex(/^http:\/\/localhost.*|^https:\/\/.*/)
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    generateSecret: z.boolean().default(true).exactOptional(),
    loginUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).exactOptional(),
    logoutUrls: z.array(z.string().regex(/^http:\/\/localhost.*|^https:\/\/.*/)).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .openapi({ title: 'POST /appClients', required: [] })
  .openapi('PostAppClients')

const PostAssetsSchema = z
  .strictObject({
    content: z.string().min(1).max(6250000),
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .openapi({ required: ['content'], title: 'POST /assets' })
  .openapi('PostAssets')

const PostDataBundlesSchema = z
  .strictObject({
    datasetIds: z
      .array(z.string().regex(/^las:dataset:[a-f0-9]{32}$/))
      .min(1)
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .openapi({ title: 'POST /models/{modelId}/dataBundles', required: [] })
  .openapi('PostDataBundles')

const PostDatasetsSchema = z
  .strictObject({
    containsPersonallyIdentifiableInformation: z.boolean().exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    retentionInDays: z.int().min(1).exactOptional(),
  })
  .openapi({ title: 'POST /datasets', required: [] })
  .openapi('PostDatasets')

const PostDocumentsSchema = z
  .strictObject({
    consentId: z
      .string()
      .regex(/^las:consent:[a-f0-9]{32}$/)
      .exactOptional(),
    content: z.string().min(1).max(6250000),
    contentType: z.enum(['application/pdf', 'image/jpeg', 'image/png', 'image/tiff']).nullable(),
    datasetId: z
      .string()
      .regex(/^las:dataset:[a-f0-9]{32}$/)
      .exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    groundTruth: z
      .array(
        z
          .strictObject({
            label: z
              .string()
              .regex(/^[0-9A-Za-z-_]+$/)
              .min(1)
              .max(36),
            value: z.union([
              z.string().min(0).max(512).nullable(),
              z.boolean().nullable(),
              z.number().nullable(),
              GroundTruthListSchema.nullable(),
            ]),
          })
          .openapi({ required: ['label', 'value'] }),
      )
      .exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    retentionInDays: z.int().min(1).exactOptional(),
  })
  .openapi({ required: ['content', 'contentType'], title: 'POST /documents' })
  .openapi('PostDocuments')

const PostHeartbeatsSchema = z
  .object({})
  .openapi({ title: 'POST /transitions/{transitionId}/executions/{executionId}/heartbeats' })
  .openapi('PostHeartbeats')

const PostModelsSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    fieldConfig: z.record(
      z.string(),
      z.xor([
        z
          .object({
            description: z.string().max(4096).nullable().exactOptional(),
            enum: z
              .array(
                z
                  .string()
                  .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                  .min(1)
                  .max(512),
              )
              .min(1)
              .max(500)
              .superRefine((items, ctx) => {
                const seen = new Map()
                for (const [i, val] of items.entries()) {
                  const key = JSON.stringify(val)
                  if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                  else seen.set(key, i)
                }
              })
              .exactOptional(),
            maxLength: z.int().min(1).max(512).exactOptional(),
            type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
          })
          .openapi({ required: ['type'] }),
        z
          .object({
            fields: z.record(
              z.string(),
              z
                .object({
                  description: z.string().max(4096).nullable().exactOptional(),
                  enum: z
                    .array(
                      z
                        .string()
                        .regex(/^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\-.\/:;<=>?@\[\]\^_`{|}~ ]+$/)
                        .min(1)
                        .max(512),
                    )
                    .min(1)
                    .max(500)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    })
                    .exactOptional(),
                  maxLength: z.int().min(1).max(512).exactOptional(),
                  type: z.enum(['amount', 'date', 'digits', 'enum', 'numeric', 'string']),
                })
                .openapi({ required: ['type'] }),
            ),
            type: z.literal('lines'),
          })
          .openapi({ required: ['fields', 'type'] }),
      ]),
    ),
    height: z.int().min(97).max(1921).exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    postprocessConfig: z
      .xor([
        z.strictObject({ strategy: z.literal('BEST_FIRST') }).openapi({ required: ['strategy'] }),
        z
          .strictObject({
            parameters: z
              .object({ collapse: z.boolean().exactOptional(), n: z.int().min(1).max(3) })
              .openapi({ required: ['n'] }),
            strategy: z.literal('BEST_N_PAGES'),
          })
          .openapi({ required: ['parameters', 'strategy'] }),
      ])
      .exactOptional(),
    preprocessConfig: z
      .strictObject({
        autoRotate: z.boolean(),
        imageQuality: z.enum(['LOW', 'HIGH']),
        maxPages: z.int().min(1).max(3),
      })
      .exactOptional()
      .openapi({ required: ['autoRotate', 'imageQuality', 'maxPages'] }),
    width: z.int().min(97).max(1921).exactOptional(),
  })
  .openapi({ required: ['fieldConfig'], title: 'POST /models' })
  .openapi('PostModels')

const PostOrganizationsSchema = z
  .strictObject({ name: z.string().max(4096).nullable().exactOptional() })
  .openapi({ title: 'POST /organizations', required: [] })
  .openapi('PostOrganizations')

const PostPaymentMethodsSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .openapi({ title: 'POST /paymentMethods', required: [] })
  .openapi('PostPaymentMethods')

const PostPredictionsSchema = z
  .strictObject({
    autoRotate: z.boolean().exactOptional(),
    documentId: z.string().regex(/^las:document:[a-f0-9]{32}$/),
    imageQuality: z.enum(['LOW', 'HIGH']).exactOptional(),
    maxPages: z.int().min(1).max(3).exactOptional(),
    modelId: z.string().regex(/^(|las:organization:[a-z0-9-_]+\/)las:model:[a-z0-9-_]+$/),
    postprocessConfig: z
      .xor([
        z.strictObject({ strategy: z.literal('BEST_FIRST') }).openapi({ required: ['strategy'] }),
        z
          .strictObject({
            parameters: z
              .object({ collapse: z.boolean().exactOptional(), n: z.int().min(1).max(3) })
              .openapi({ required: ['n'] }),
            strategy: z.literal('BEST_N_PAGES'),
          })
          .openapi({ required: ['parameters', 'strategy'] }),
      ])
      .exactOptional(),
    rotation: z
      .union([z.literal(0), z.literal(90), z.literal(180), z.literal(270)])
      .exactOptional(),
    trainingId: z
      .string()
      .regex(/^las:model-training:[a-f0-9]{32}$/)
      .exactOptional(),
  })
  .openapi({ required: ['documentId', 'modelId'], title: 'POST /predictions' })
  .openapi('PostPredictions')

const PostSecretsSchema = z
  .strictObject({
    data: z.object({}),
    description: z.string().max(4096).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .openapi({ required: ['data'], title: 'POST /secrets' })
  .openapi('PostSecrets')

const PostSignUpSchema = z
  .strictObject({
    email: z.string().regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/),
    name: z.string().max(4096).nullable().exactOptional(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-"!@#%&\/,><':;|_~`])\S{8,99}$/,
      ),
    reCaptchaResponse: z.string(),
  })
  .openapi({ required: ['email', 'password', 'reCaptchaResponse'], title: 'POST /users' })
  .openapi('PostSignUp')

const PostTrainingsSchema = z
  .strictObject({
    dataBundleIds: z
      .array(z.string().regex(/^las:model-data-bundle:[a-f0-9]{32}$/))
      .min(1)
      .exactOptional(),
    dataScientistAssistance: z.boolean().exactOptional(),
    description: z.string().max(4096).nullable().exactOptional(),
    instanceType: z.enum(['small-gpu', 'medium-gpu', 'large-gpu']).nullable().exactOptional(),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    warmStartConfig: z
      .strictObject({ trainingId: z.string().regex(/^las:model-training:[a-f0-9]{32}$/) })
      .exactOptional()
      .openapi({ required: ['trainingId'] }),
  })
  .openapi({ title: 'POST /models/{modelId}/trainings', required: [] })
  .openapi('PostTrainings')

const PostTransitionExecutionSchema = z
  .object({})
  .openapi({ title: 'POST /transitions/{transitionId}/executions' })
  .openapi('PostTransitionExecution')

const PostTransitionsSchema = z
  .strictObject({
    description: z.string().max(4096).nullable().exactOptional(),
    inputJsonSchema: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    outputJsonSchema: z.object({}).exactOptional(),
    parameters: z
      .union([
        z
          .strictObject({
            cpu: z.union([z.literal(256), z.literal(512), z.literal(1024)]).exactOptional(),
            environment: z.record(z.string(), z.string()).exactOptional(),
            environmentSecrets: z
              .array(z.string().regex(/^las:secret:[a-f0-9]{32}$/))
              .exactOptional(),
            imageUrl: z.string(),
            memory: z
              .union([
                z.literal(512),
                z.literal(1024),
                z.literal(2048),
                z.literal(4096),
                z.literal(8192),
              ])
              .exactOptional(),
            secretId: z
              .string()
              .regex(/^las:secret:[a-f0-9]{32}$/)
              .exactOptional(),
          })
          .openapi({ required: ['imageUrl'] }),
        z
          .strictObject({
            assets: z
              .object({
                jsRemoteComponent: z
                  .string()
                  .regex(/^las:asset:[a-f0-9]{32}$/)
                  .exactOptional(),
              })
              .catchall(z.string().regex(/^las:asset:[a-f0-9]{32}$/))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      ])
      .exactOptional(),
    timeoutInSeconds: z.int().min(60).max(1800).exactOptional(),
    transitionType: z.enum(['docker', 'manual']),
  })
  .openapi({ required: ['transitionType'], title: 'POST /transitions' })
  .openapi('PostTransitions')

const PostUsersSchema = z
  .strictObject({
    appClientId: z
      .string()
      .regex(/^las:app-client:[a-z0-9-_]+$/)
      .exactOptional(),
    avatar: z.string().max(131072).nullable().exactOptional(),
    email: z.string().regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/),
    metadata: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
  })
  .openapi({ required: ['email'], title: 'POST /users' })
  .openapi('PostUsers')

const PostWorkflowExecutionsSchema = z
  .strictObject({ input: z.object({}) })
  .openapi({ required: ['input'], title: 'POST /workflows/{workflowId}/executions' })
  .openapi('PostWorkflowExecutions')

const PostWorkflowsSchema = z
  .strictObject({
    completedConfig: z
      .strictObject({
        environment: z.record(z.string(), z.string()).exactOptional(),
        environmentSecrets: z.array(z.string().regex(/^las:secret:[a-f0-9]{32}$/)).exactOptional(),
        imageUrl: z.string(),
        secretId: z
          .string()
          .regex(/^las:secret:[a-f0-9]{32}$/)
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['imageUrl'] }),
    description: z.string().max(4096).nullable().exactOptional(),
    errorConfig: z
      .strictObject({
        email: z
          .string()
          .regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/)
          .exactOptional(),
        manualRetry: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().max(4096).nullable().exactOptional(),
    specification: z
      .strictObject({
        definition: z.object({}),
        language: z.literal('ASL').exactOptional(),
        version: z.literal('1.0.0').exactOptional(),
      })
      .openapi({ required: ['definition'] }),
  })
  .openapi({ required: ['specification'], title: 'POST /workflows' })
  .openapi('PostWorkflows')

const PredictionSchema = z
  .strictObject({
    createdBy: z.string().max(4096).nullable().exactOptional(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable()
      .exactOptional(),
    documentId: z.string().regex(/^las:document:[a-f0-9]{32}$/),
    inferenceTime: z.number().min(0),
    modelId: z.string().regex(/^(|las:organization:[a-z0-9-_]+\/)las:model:[a-z0-9-_]+$/),
    predictionId: z.string().regex(/^las:prediction:[a-f0-9]{32}$/),
    predictions: z.array(
      z.union([
        z
          .strictObject({
            confidence: z.number().min(0).max(1),
            label: z
              .string()
              .regex(/^[0-9A-Za-z-_]+$/)
              .min(1)
              .max(36),
            location: z.array(z.number().min(0).max(1)).length(4).exactOptional(),
            page: z.int().min(0).exactOptional(),
            value: z.string().min(1).max(512).nullable(),
          })
          .openapi({ required: ['confidence', 'label', 'value'] }),
        z
          .strictObject({
            label: z
              .string()
              .regex(/^[0-9A-Za-z-_]+$/)
              .min(1)
              .max(36),
            page: z.int().min(0).exactOptional(),
            value: z.array(
              z.array(
                z
                  .strictObject({
                    confidence: z.number().min(0).max(1),
                    label: z
                      .string()
                      .regex(/^[0-9A-Za-z-_]+$/)
                      .min(1)
                      .max(36),
                    location: z.array(z.number().min(0).max(1)).length(4).exactOptional(),
                    page: z.int().min(0).exactOptional(),
                    value: z.string().min(1).max(512).nullable(),
                  })
                  .openapi({ required: ['confidence', 'label', 'value'] }),
              ),
            ),
          })
          .openapi({ required: ['label', 'value'] }),
      ]),
    ),
    trainingId: z
      .string()
      .regex(/^las:model-training:[a-f0-9]{32}$/)
      .nullable()
      .exactOptional(),
  })
  .openapi({
    required: ['documentId', 'inferenceTime', 'modelId', 'predictionId', 'predictions'],
    title: 'prediction',
  })
  .openapi('Prediction')

const PredictionsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    order: z.enum(['ascending', 'descending']).exactOptional(),
    predictions: z.array(
      z
        .strictObject({
          createdBy: z.string().max(4096).nullable().exactOptional(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable()
            .exactOptional(),
          documentId: z.string().regex(/^las:document:[a-f0-9]{32}$/),
          inferenceTime: z.number().min(0),
          modelId: z.string().regex(/^(|las:organization:[a-z0-9-_]+\/)las:model:[a-z0-9-_]+$/),
          predictionId: z.string().regex(/^las:prediction:[a-f0-9]{32}$/),
          predictions: z.array(
            z.union([
              z
                .strictObject({
                  confidence: z.number().min(0).max(1),
                  label: z
                    .string()
                    .regex(/^[0-9A-Za-z-_]+$/)
                    .min(1)
                    .max(36),
                  location: z.array(z.number().min(0).max(1)).length(4).exactOptional(),
                  page: z.int().min(0).exactOptional(),
                  value: z.string().min(1).max(512).nullable(),
                })
                .openapi({ required: ['confidence', 'label', 'value'] }),
              z
                .strictObject({
                  label: z
                    .string()
                    .regex(/^[0-9A-Za-z-_]+$/)
                    .min(1)
                    .max(36),
                  page: z.int().min(0).exactOptional(),
                  value: z.array(
                    z.array(
                      z
                        .strictObject({
                          confidence: z.number().min(0).max(1),
                          label: z
                            .string()
                            .regex(/^[0-9A-Za-z-_]+$/)
                            .min(1)
                            .max(36),
                          location: z.array(z.number().min(0).max(1)).length(4).exactOptional(),
                          page: z.int().min(0).exactOptional(),
                          value: z.string().min(1).max(512).nullable(),
                        })
                        .openapi({ required: ['confidence', 'label', 'value'] }),
                    ),
                  ),
                })
                .openapi({ required: ['label', 'value'] }),
            ]),
          ),
          trainingId: z
            .string()
            .regex(/^las:model-training:[a-f0-9]{32}$/)
            .nullable()
            .exactOptional(),
        })
        .openapi({
          required: ['documentId', 'inferenceTime', 'modelId', 'predictionId', 'predictions'],
        }),
    ),
    sortBy: z.literal('createdTime').exactOptional(),
  })
  .openapi({ required: ['nextToken', 'predictions'], title: 'predictions' })
  .openapi('Predictions')

const ProfileSchema = z
  .strictObject({
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable()
      .exactOptional(),
    email: z
      .string()
      .regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/)
      .exactOptional(),
    familyName: z.string().max(4096).nullable().exactOptional(),
    givenName: z.string().max(4096).nullable().exactOptional(),
    locale: z.string().max(4096).nullable().exactOptional(),
    metadata: z.object({}).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    picture: z.string().max(4096).nullable().exactOptional(),
    profileId: z.string().regex(/^las:profile:[a-f0-9]{32}$/),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: ['profileId'], title: 'profile' })
  .openapi('Profile')

const SecretSchema = z
  .strictObject({
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    description: z.string().max(4096).nullable(),
    name: z.string().max(4096).nullable(),
    secretId: z.string().regex(/^las:secret:[a-f0-9]{32}$/),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'description',
      'name',
      'secretId',
      'updatedBy',
      'updatedTime',
    ],
    title: 'secret',
  })
  .openapi('Secret')

const SecretsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    secrets: z.array(
      z
        .strictObject({
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          description: z.string().max(4096).nullable(),
          name: z.string().max(4096).nullable(),
          secretId: z.string().regex(/^las:secret:[a-f0-9]{32}$/),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'createdBy',
            'createdTime',
            'description',
            'name',
            'secretId',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'secrets'], title: 'secrets' })
  .openapi('Secrets')

const SignUpSchema = z
  .strictObject({
    clientId: z.string(),
    username: z.string().regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/),
  })
  .openapi({ required: ['clientId', 'username'], title: 'signup' })
  .openapi('SignUp')

const TrainingSchema = z
  .strictObject({
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    dataBundleIds: z.array(z.string().regex(/^las:model-data-bundle:[a-f0-9]{32}$/)),
    dataScientistAssistance: z.boolean().exactOptional(),
    deploymentEnvironmentId: z
      .string()
      .regex(
        /^(|las:organization:[a-z0-9-_]+\/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/,
      )
      .nullable()
      .exactOptional(),
    description: z.string().max(4096).nullable(),
    evaluation: z.object({}),
    gpuHours: z.number().min(0).nullable(),
    instanceType: z.enum(['small-gpu', 'medium-gpu', 'large-gpu']),
    metadata: z.object({}).nullable(),
    modelId: z.string().regex(/^las:model:[a-z0-9-_]+$/),
    name: z.string().max(4096).nullable(),
    status: z.enum([
      'waiting-for-approval',
      'pending',
      'running',
      'succeeded',
      'failed',
      'cancelled',
    ]),
    trainingId: z.string().regex(/^las:model-training:[a-f0-9]{32}$/),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    warmStartConfig: z
      .union([
        z
          .strictObject({ trainingId: z.string().regex(/^las:model-training:[a-f0-9]{32}$/) })
          .openapi({ required: ['trainingId'] }),
        z.strictObject({}),
      ])
      .exactOptional(),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'dataBundleIds',
      'description',
      'evaluation',
      'gpuHours',
      'instanceType',
      'metadata',
      'modelId',
      'name',
      'status',
      'trainingId',
      'updatedBy',
      'updatedTime',
    ],
    title: 'training',
  })
  .openapi('Training')

const TrainingsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    status: z
      .array(
        z.enum(['waiting-for-approval', 'pending', 'running', 'succeeded', 'failed', 'cancelled']),
      )
      .exactOptional(),
    trainings: z.array(
      z
        .strictObject({
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          dataBundleIds: z.array(z.string().regex(/^las:model-data-bundle:[a-f0-9]{32}$/)),
          dataScientistAssistance: z.boolean().exactOptional(),
          deploymentEnvironmentId: z
            .string()
            .regex(
              /^(|las:organization:[a-z0-9-_]+\/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$/,
            )
            .nullable()
            .exactOptional(),
          description: z.string().max(4096).nullable(),
          evaluation: z.object({}),
          gpuHours: z.number().min(0).nullable(),
          instanceType: z.enum(['small-gpu', 'medium-gpu', 'large-gpu']),
          metadata: z.object({}).nullable(),
          modelId: z.string().regex(/^las:model:[a-z0-9-_]+$/),
          name: z.string().max(4096).nullable(),
          status: z.enum([
            'waiting-for-approval',
            'pending',
            'running',
            'succeeded',
            'failed',
            'cancelled',
          ]),
          trainingId: z.string().regex(/^las:model-training:[a-f0-9]{32}$/),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          warmStartConfig: z
            .union([
              z
                .strictObject({ trainingId: z.string().regex(/^las:model-training:[a-f0-9]{32}$/) })
                .openapi({ required: ['trainingId'] }),
              z.strictObject({}),
            ])
            .exactOptional(),
        })
        .openapi({
          required: [
            'createdBy',
            'createdTime',
            'dataBundleIds',
            'description',
            'evaluation',
            'gpuHours',
            'instanceType',
            'metadata',
            'modelId',
            'name',
            'status',
            'trainingId',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'trainings'], title: 'trainings' })
  .openapi('Trainings')

const TransitionSchema = z
  .strictObject({
    assets: z
      .object({
        jsRemoteComponent: z
          .string()
          .regex(/^las:asset:[a-f0-9]{32}$/)
          .exactOptional(),
      })
      .catchall(z.string().regex(/^las:asset:[a-f0-9]{32}$/))
      .exactOptional(),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    description: z.string().max(4096).nullable(),
    inputJsonSchema: z.object({}).exactOptional(),
    name: z.string().max(4096).nullable(),
    outputJsonSchema: z.object({}).exactOptional(),
    parameters: z.object({}),
    timeoutInSeconds: z.int().min(60).max(1800),
    transitionId: z.union([
      z.string().regex(/^las:transition:[a-f0-9]{32}$/),
      z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
    ]),
    transitionType: z.enum(['docker', 'manual']),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'description',
      'name',
      'parameters',
      'timeoutInSeconds',
      'transitionId',
      'transitionType',
      'updatedBy',
      'updatedTime',
    ],
    title: 'transition',
  })
  .openapi('Transition')

const TransitionExecutionSchema = z
  .strictObject({
    completedBy: z.string().max(4096).nullable(),
    endTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable()
      .exactOptional(),
    executionId: z.string().regex(/^las:transition-execution:[a-f0-9]{32}$/),
    input: z.object({}).nullable(),
    logId: z
      .string()
      .regex(/^las:log:[a-f0-9]{32}$/)
      .nullable()
      .exactOptional(),
    startTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable()
      .exactOptional(),
    status: z.enum(['running', 'succeeded', 'failed', 'rejected', 'retry']),
    transitionId: z.union([
      z.string().regex(/^las:transition:[a-f0-9]{32}$/),
      z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
    ]),
  })
  .openapi({
    required: ['completedBy', 'executionId', 'input', 'status', 'transitionId'],
    title: 'transition-execution',
  })
  .openapi('TransitionExecution')

const TransitionExecutionsSchema = z
  .strictObject({
    executions: z.array(
      z
        .strictObject({
          completedBy: z.string().max(4096).nullable(),
          endTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable()
            .exactOptional(),
          executionId: z.string().regex(/^las:transition-execution:[a-f0-9]{32}$/),
          input: z.object({}).nullable(),
          logId: z
            .string()
            .regex(/^las:log:[a-f0-9]{32}$/)
            .nullable()
            .exactOptional(),
          startTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable()
            .exactOptional(),
          status: z.enum(['running', 'succeeded', 'failed', 'rejected', 'retry']),
          transitionId: z.union([
            z.string().regex(/^las:transition:[a-f0-9]{32}$/),
            z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
          ]),
        })
        .openapi({ required: ['completedBy', 'executionId', 'input', 'status', 'transitionId'] }),
    ),
    nextToken: z.string().max(4096).nullable(),
    status: z
      .array(z.enum(['running', 'succeeded', 'failed', 'rejected', 'retry']))
      .exactOptional(),
    transitionId: z.union([
      z.string().regex(/^las:transition:[a-f0-9]{32}$/),
      z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
    ]),
  })
  .openapi({
    required: ['executions', 'nextToken', 'transitionId'],
    title: 'transition-executions',
  })
  .openapi('TransitionExecutions')

const TransitionsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    transitionType: z.array(z.enum(['docker', 'manual'])).exactOptional(),
    transitions: z.array(
      z
        .strictObject({
          assets: z
            .object({
              jsRemoteComponent: z
                .string()
                .regex(/^las:asset:[a-f0-9]{32}$/)
                .exactOptional(),
            })
            .catchall(z.string().regex(/^las:asset:[a-f0-9]{32}$/))
            .exactOptional(),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          description: z.string().max(4096).nullable(),
          inputJsonSchema: z.object({}).exactOptional(),
          name: z.string().max(4096).nullable(),
          outputJsonSchema: z.object({}).exactOptional(),
          parameters: z.object({}),
          timeoutInSeconds: z.int().min(60).max(1800),
          transitionId: z.union([
            z.string().regex(/^las:transition:[a-f0-9]{32}$/),
            z.string().regex(/^las:transition:commons-[0-9A-Za-z-]+$/),
          ]),
          transitionType: z.enum(['docker', 'manual']),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
        })
        .openapi({
          required: [
            'createdBy',
            'createdTime',
            'description',
            'name',
            'parameters',
            'timeoutInSeconds',
            'transitionId',
            'transitionType',
            'updatedBy',
            'updatedTime',
          ],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'transitions'], title: 'transitions' })
  .openapi('Transitions')

const UserSchema = z
  .strictObject({
    avatar: z.string().max(131072).nullable().exactOptional(),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    email: z.string().regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/),
    metadata: z.object({}).nullable().exactOptional(),
    name: z.string().max(4096).nullable().exactOptional(),
    profileId: z
      .string()
      .regex(/^las:profile:[a-f0-9]{32}$/)
      .nullable()
      .exactOptional(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    userId: z.string().regex(/^las:user:[a-f0-9]{32}$/),
  })
  .openapi({
    required: ['createdBy', 'createdTime', 'email', 'updatedBy', 'updatedTime', 'userId'],
    title: 'user',
  })
  .openapi('User')

const UsersSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    users: z.array(
      z
        .strictObject({
          avatar: z.string().max(131072).nullable().exactOptional(),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          email: z.string().regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/),
          metadata: z.object({}).nullable().exactOptional(),
          name: z.string().max(4096).nullable().exactOptional(),
          profileId: z
            .string()
            .regex(/^las:profile:[a-f0-9]{32}$/)
            .nullable()
            .exactOptional(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          userId: z.string().regex(/^las:user:[a-f0-9]{32}$/),
        })
        .openapi({
          required: ['createdBy', 'createdTime', 'email', 'updatedBy', 'updatedTime', 'userId'],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'users'], title: 'users' })
  .openapi('Users')

const WorkflowSchema = z
  .strictObject({
    completedConfig: z
      .strictObject({
        environment: z.record(z.string(), z.string()).exactOptional(),
        environmentSecrets: z.array(z.string().regex(/^las:secret:[a-f0-9]{32}$/)).exactOptional(),
        imageUrl: z.string(),
        secretId: z
          .string()
          .regex(/^las:secret:[a-f0-9]{32}$/)
          .exactOptional(),
      })
      .nullable()
      .openapi({ required: ['imageUrl'] }),
    createdBy: z.string().max(4096).nullable(),
    createdTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    description: z.string().max(4096).nullable(),
    errorConfig: z
      .strictObject({
        email: z
          .string()
          .regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/)
          .exactOptional(),
        manualRetry: z.boolean().exactOptional(),
      })
      .nullable()
      .openapi({ required: [] }),
    name: z.string().max(4096).nullable(),
    numberOfRunningExecutions: z.int(),
    updatedBy: z.string().max(4096).nullable(),
    updatedTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    workflowId: z.string().regex(/^las:workflow:[a-f0-9]{32}$/),
  })
  .openapi({
    required: [
      'completedConfig',
      'createdBy',
      'createdTime',
      'description',
      'errorConfig',
      'name',
      'numberOfRunningExecutions',
      'updatedBy',
      'updatedTime',
      'workflowId',
    ],
    title: 'workflow',
  })
  .openapi('Workflow')

const WorkflowExecutionSchema = z
  .strictObject({
    completedBy: z
      .array(
        z.union([
          z.string().regex(/^las:user:[a-f0-9]{32}$/),
          z.string().regex(/^las:app-client:[a-z0-9-_]+$/),
        ]),
      )
      .exactOptional(),
    completedTaskLogId: z
      .string()
      .regex(/^las:log:[a-f0-9]{32}$/)
      .nullable()
      .exactOptional(),
    endTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    events: z.array(z.object({})).exactOptional(),
    executionId: z.string().regex(/^las:workflow-execution:[a-f0-9]{32}$/),
    input: z.object({}).nullable(),
    logId: z
      .string()
      .regex(/^las:log:[a-f0-9]{32}$/)
      .nullable()
      .exactOptional(),
    output: z.object({}).nullable(),
    startTime: z
      .string()
      .regex(
        /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
      )
      .nullable(),
    status: z.enum(['running', 'succeeded', 'failed', 'rejected', 'retry', 'error']),
    transitionExecutions: z.object({}).nullable(),
    workflowId: z.string().regex(/^las:workflow:[a-f0-9]{32}$/),
  })
  .openapi({
    required: [
      'endTime',
      'executionId',
      'input',
      'output',
      'startTime',
      'status',
      'transitionExecutions',
      'workflowId',
    ],
    title: 'workflow-execution',
  })
  .openapi('WorkflowExecution')

const WorkflowExecutionsSchema = z
  .strictObject({
    executions: z.array(
      z
        .strictObject({
          completedBy: z
            .array(
              z.union([
                z.string().regex(/^las:user:[a-f0-9]{32}$/),
                z.string().regex(/^las:app-client:[a-z0-9-_]+$/),
              ]),
            )
            .exactOptional(),
          completedTaskLogId: z
            .string()
            .regex(/^las:log:[a-f0-9]{32}$/)
            .nullable()
            .exactOptional(),
          endTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          events: z.array(z.object({})).exactOptional(),
          executionId: z.string().regex(/^las:workflow-execution:[a-f0-9]{32}$/),
          input: z.object({}).nullable(),
          logId: z
            .string()
            .regex(/^las:log:[a-f0-9]{32}$/)
            .nullable()
            .exactOptional(),
          output: z.object({}).nullable(),
          startTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          status: z.enum(['running', 'succeeded', 'failed', 'rejected', 'retry', 'error']),
          transitionExecutions: z.object({}).nullable(),
          workflowId: z.string().regex(/^las:workflow:[a-f0-9]{32}$/),
        })
        .openapi({
          required: [
            'endTime',
            'executionId',
            'input',
            'output',
            'startTime',
            'status',
            'transitionExecutions',
            'workflowId',
          ],
        }),
    ),
    nextToken: z.string().max(4096).nullable(),
    order: z.enum(['ascending', 'descending']).exactOptional(),
    sortBy: z.enum(['startTime', 'endTime']).exactOptional(),
    status: z
      .array(z.enum(['running', 'succeeded', 'failed', 'rejected', 'retry', 'error']))
      .exactOptional(),
    workflowId: z.string().regex(/^las:workflow:[a-f0-9]{32}$/),
  })
  .openapi({ required: ['executions', 'nextToken', 'workflowId'], title: 'workflow-executions' })
  .openapi('WorkflowExecutions')

const WorkflowsSchema = z
  .strictObject({
    nextToken: z.string().max(4096).nullable(),
    workflows: z.array(
      z
        .strictObject({
          completedConfig: z
            .strictObject({
              environment: z.record(z.string(), z.string()).exactOptional(),
              environmentSecrets: z
                .array(z.string().regex(/^las:secret:[a-f0-9]{32}$/))
                .exactOptional(),
              imageUrl: z.string(),
              secretId: z
                .string()
                .regex(/^las:secret:[a-f0-9]{32}$/)
                .exactOptional(),
            })
            .nullable()
            .openapi({ required: ['imageUrl'] }),
          createdBy: z.string().max(4096).nullable(),
          createdTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          description: z.string().max(4096).nullable(),
          errorConfig: z
            .strictObject({
              email: z
                .string()
                .regex(/^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$/)
                .exactOptional(),
              manualRetry: z.boolean().exactOptional(),
            })
            .nullable()
            .openapi({ required: [] }),
          name: z.string().max(4096).nullable(),
          numberOfRunningExecutions: z.int(),
          updatedBy: z.string().max(4096).nullable(),
          updatedTime: z
            .string()
            .regex(
              /^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$/,
            )
            .nullable(),
          workflowId: z.string().regex(/^las:workflow:[a-f0-9]{32}$/),
        })
        .openapi({
          required: [
            'completedConfig',
            'createdBy',
            'createdTime',
            'description',
            'errorConfig',
            'name',
            'numberOfRunningExecutions',
            'updatedBy',
            'updatedTime',
            'workflowId',
          ],
        }),
    ),
  })
  .openapi({ required: ['nextToken', 'workflows'], title: 'workflows' })
  .openapi('Workflows')

const OAuth2SecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: {
        'api.lucidtech.ai/appclients:read': 'Read permissions',
        'api.lucidtech.ai/appclients:write': 'Write permissions',
        'api.lucidtech.ai/assets:read': 'Read permissions',
        'api.lucidtech.ai/assets:write': 'Write permissions',
        'api.lucidtech.ai/databundles:read': 'Read permissions',
        'api.lucidtech.ai/databundles:write': 'Write permissions',
        'api.lucidtech.ai/datasets:read': 'Read permissions',
        'api.lucidtech.ai/datasets:write': 'Write permissions',
        'api.lucidtech.ai/deploymentenvironments:read': 'Read permissions',
        'api.lucidtech.ai/documents:read': 'Read permissions',
        'api.lucidtech.ai/documents:write': 'Write permissions',
        'api.lucidtech.ai/logs:read': 'Read permissions',
        'api.lucidtech.ai/models:read': 'Read permissions',
        'api.lucidtech.ai/models:write': 'Write permissions',
        'api.lucidtech.ai/organizations:read': 'Read permissions',
        'api.lucidtech.ai/organizations:write': 'Write permissions',
        'api.lucidtech.ai/paymentmethods:read': 'Read permissions',
        'api.lucidtech.ai/paymentmethods:write': 'Write permissions',
        'api.lucidtech.ai/plans:read': 'Read permissions',
        'api.lucidtech.ai/predictions:read': 'Read permissions',
        'api.lucidtech.ai/predictions:write': 'Write permissions',
        'api.lucidtech.ai/profiles:read': 'Read permissions',
        'api.lucidtech.ai/profiles:write': 'Write permissions',
        'api.lucidtech.ai/secrets:read': 'Read permissions',
        'api.lucidtech.ai/secrets:write': 'Write permissions',
        'api.lucidtech.ai/trainings:read': 'Read permissions',
        'api.lucidtech.ai/trainings:write': 'Write permissions',
        'api.lucidtech.ai/transitions.executions.heartbeats:write': 'Write permissions',
        'api.lucidtech.ai/transitions.executions:read': 'Read permissions',
        'api.lucidtech.ai/transitions.executions:write': 'Write permissions',
        'api.lucidtech.ai/transitions:read': 'Read permissions',
        'api.lucidtech.ai/transitions:write': 'Write permissions',
        'api.lucidtech.ai/users:read': 'Read permissions',
        'api.lucidtech.ai/users:write': 'Write permissions',
        'api.lucidtech.ai/workflows.executions:read': 'Read permissions',
        'api.lucidtech.ai/workflows.executions:write': 'Write permissions',
        'api.lucidtech.ai/workflows:read': 'Read permissions',
        'api.lucidtech.ai/workflows:write': 'Write permissions',
      },
      tokenUrl: 'https://auth.lucidtech.ai/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAppClientsRoute = createRoute({
  method: 'get',
  path: '/appClients',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AppClientsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/appclients:read'] }],
})

export const postAppClientsRoute = createRoute({
  method: 'post',
  path: '/appClients',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostAppClientsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AppClientSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/appclients:write'] }],
})

export const optionsAppClientsRoute = createRoute({
  method: 'options',
  path: '/appClients',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const deleteAppClientsAppClientIdRoute = createRoute({
  method: 'delete',
  path: '/appClients/{appClientId}',
  request: {
    params: z.object({
      appClientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appClientId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AppClientSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const optionsAppClientsAppClientIdRoute = createRoute({
  method: 'options',
  path: '/appClients/{appClientId}',
  request: {
    params: z.object({
      appClientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appClientId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchAppClientsAppClientIdRoute = createRoute({
  method: 'patch',
  path: '/appClients/{appClientId}',
  request: {
    params: z.object({
      appClientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'appClientId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchAppClientIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AppClientSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/appclients:write'] }],
})

export const getAssetsRoute = createRoute({
  method: 'get',
  path: '/assets',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AssetsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:read'] }],
})

export const postAssetsRoute = createRoute({
  method: 'post',
  path: '/assets',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostAssetsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AssetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:write'] }],
})

export const optionsAssetsRoute = createRoute({
  method: 'options',
  path: '/assets',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getAssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}',
  request: {
    params: z.object({
      assetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'assetId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AssetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:read'] }],
})

export const deleteAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/assets/{assetId}',
  request: {
    params: z.object({
      assetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'assetId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AssetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:read'] }],
})

export const optionsAssetsAssetIdRoute = createRoute({
  method: 'options',
  path: '/assets/{assetId}',
  request: {
    params: z.object({
      assetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'assetId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchAssetsAssetIdRoute = createRoute({
  method: 'patch',
  path: '/assets/{assetId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      assetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'assetId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchAssetIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: AssetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:write'] }],
})

export const getDatasetsRoute = createRoute({
  method: 'get',
  path: '/datasets',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DatasetsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/datasets:read'] }],
})

export const postDatasetsRoute = createRoute({
  method: 'post',
  path: '/datasets',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostDatasetsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DatasetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/datasets:write'] }],
})

export const optionsDatasetsRoute = createRoute({
  method: 'options',
  path: '/datasets',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getDatasetsDatasetIdRoute = createRoute({
  method: 'get',
  path: '/datasets/{datasetId}',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'datasetId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DatasetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/datasets:read'] }],
})

export const deleteDatasetsDatasetIdRoute = createRoute({
  method: 'delete',
  path: '/datasets/{datasetId}',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'datasetId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DatasetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/datasets:read'] }],
})

export const optionsDatasetsDatasetIdRoute = createRoute({
  method: 'options',
  path: '/datasets/{datasetId}',
  request: {
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'datasetId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchDatasetsDatasetIdRoute = createRoute({
  method: 'patch',
  path: '/datasets/{datasetId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      datasetId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'datasetId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchDatasetIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DatasetSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/datasets:write'] }],
})

export const getDeploymentEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/deploymentEnvironments',
  request: {
    query: z.object({
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'owner', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DeploymentEnvironmentsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/secrets:read'] }],
})

export const optionsDeploymentEnvironmentsRoute = createRoute({
  method: 'options',
  path: '/deploymentEnvironments',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getDeploymentEnvironmentsDeploymentEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/deploymentEnvironments/{deploymentEnvironmentId}',
  request: {
    params: z.object({
      deploymentEnvironmentId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'deploymentEnvironmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DeploymentEnvironmentSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/organizations:read'] }],
})

export const optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute = createRoute({
  method: 'options',
  path: '/deploymentEnvironments/{deploymentEnvironmentId}',
  request: {
    params: z.object({
      deploymentEnvironmentId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'deploymentEnvironmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getDocumentsRoute = createRoute({
  method: 'get',
  path: '/documents',
  request: {
    query: z.object({
      datasetId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'datasetId', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'order', schema: { type: 'string' }, required: false },
        }),
      documentId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'documentId', schema: { type: 'string' }, required: false },
        }),
      consentId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'consentId', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sortBy', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DocumentsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/documents:read'] }],
})

export const postDocumentsRoute = createRoute({
  method: 'post',
  path: '/documents',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostDocumentsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/documents:write'] }],
})

export const deleteDocumentsRoute = createRoute({
  method: 'delete',
  path: '/documents',
  request: {
    query: z.object({
      consentId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'consentId', schema: { type: 'string' }, required: false },
        }),
      datasetId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'datasetId', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DocumentsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/documents:write'] }],
})

export const optionsDocumentsRoute = createRoute({
  method: 'options',
  path: '/documents',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/documents/{documentId}',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'documentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/documents:read'] }],
})

export const deleteDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/documents/{documentId}',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'documentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/documents:read'] }],
})

export const optionsDocumentsDocumentIdRoute = createRoute({
  method: 'options',
  path: '/documents/{documentId}',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'documentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchDocumentsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/documents/{documentId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'documentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchDocumentIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/documents:write'] }],
})

export const getLogsRoute = createRoute({
  method: 'get',
  path: '/logs',
  request: {
    query: z.object({
      workflowId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'workflowId', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'order', schema: { type: 'string' }, required: false },
        }),
      transitionExecutionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'transitionExecutionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      transitionId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'transitionId', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
      workflowExecutionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workflowExecutionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: LogsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/logs:read'] }],
})

export const optionsLogsRoute = createRoute({
  method: 'options',
  path: '/logs',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getLogsLogIdRoute = createRoute({
  method: 'get',
  path: '/logs/{logId}',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'logId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: LogSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/logs:read'] }],
})

export const optionsLogsLogIdRoute = createRoute({
  method: 'options',
  path: '/logs/{logId}',
  request: {
    params: z.object({
      logId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'logId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getModelsRoute = createRoute({
  method: 'get',
  path: '/models',
  request: {
    query: z.object({
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'owner', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ModelsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/models:read'] }],
})

export const postModelsRoute = createRoute({
  method: 'post',
  path: '/models',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostModelsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ModelSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/models:write'] }],
})

export const optionsModelsRoute = createRoute({
  method: 'options',
  path: '/models',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/models/{modelId}',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ModelSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/models:read'] }],
})

export const deleteModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/models/{modelId}',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ModelSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/models:read'] }],
})

export const optionsModelsModelIdRoute = createRoute({
  method: 'options',
  path: '/models/{modelId}',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchModelsModelIdRoute = createRoute({
  method: 'patch',
  path: '/models/{modelId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchModelIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ModelSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/models:write'] }],
})

export const getModelsModelIdDataBundlesRoute = createRoute({
  method: 'get',
  path: '/models/{modelId}/dataBundles',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'status', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DataBundlesSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/databundles:read'] }],
})

export const postModelsModelIdDataBundlesRoute = createRoute({
  method: 'post',
  path: '/models/{modelId}/dataBundles',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostDataBundlesSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DataBundleSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/databundles:write'] }],
})

export const optionsModelsModelIdDataBundlesRoute = createRoute({
  method: 'options',
  path: '/models/{modelId}/dataBundles',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const deleteModelsModelIdDataBundlesDataBundleIdRoute = createRoute({
  method: 'delete',
  path: '/models/{modelId}/dataBundles/{dataBundleId}',
  request: {
    params: z.object({
      dataBundleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataBundleId', required: true, schema: { type: 'string' } },
        }),
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DataBundleSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const optionsModelsModelIdDataBundlesDataBundleIdRoute = createRoute({
  method: 'options',
  path: '/models/{modelId}/dataBundles/{dataBundleId}',
  request: {
    params: z.object({
      dataBundleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataBundleId', required: true, schema: { type: 'string' } },
        }),
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchModelsModelIdDataBundlesDataBundleIdRoute = createRoute({
  method: 'patch',
  path: '/models/{modelId}/dataBundles/{dataBundleId}',
  request: {
    params: z.object({
      dataBundleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataBundleId', required: true, schema: { type: 'string' } },
        }),
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchDataBundleIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: DataBundleSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/databundles:write'] }],
})

export const getModelsModelIdTrainingsRoute = createRoute({
  method: 'get',
  path: '/models/{modelId}/trainings',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'status', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TrainingsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:read'] }],
})

export const postModelsModelIdTrainingsRoute = createRoute({
  method: 'post',
  path: '/models/{modelId}/trainings',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostTrainingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TrainingSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:write'] }],
})

export const optionsModelsModelIdTrainingsRoute = createRoute({
  method: 'options',
  path: '/models/{modelId}/trainings',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const optionsModelsModelIdTrainingsTrainingIdRoute = createRoute({
  method: 'options',
  path: '/models/{modelId}/trainings/{trainingId}',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
      trainingId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'trainingId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchModelsModelIdTrainingsTrainingIdRoute = createRoute({
  method: 'patch',
  path: '/models/{modelId}/trainings/{trainingId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'modelId', required: true, schema: { type: 'string' } },
        }),
      trainingId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'trainingId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchTrainingIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TrainingSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/predictions:write'] }],
})

export const getOrganizationsRoute = createRoute({
  method: 'get',
  path: '/organizations',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: OrganizationsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/organizations:read'] }],
})

export const postOrganizationsRoute = createRoute({
  method: 'post',
  path: '/organizations',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostOrganizationsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: OrganizationSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/organizations:write'] }],
})

export const optionsOrganizationsRoute = createRoute({
  method: 'options',
  path: '/organizations',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: OrganizationSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/organizations:read'] }],
})

export const optionsOrganizationsOrganizationIdRoute = createRoute({
  method: 'options',
  path: '/organizations/{organizationId}',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchOrganizationsOrganizationIdRoute = createRoute({
  method: 'patch',
  path: '/organizations/{organizationId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchOrganizationIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: OrganizationSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/organizations:write'] }],
})

export const getPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/paymentMethods',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PaymentMethodsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/paymentmethods:read'] }],
})

export const postPaymentMethodsRoute = createRoute({
  method: 'post',
  path: '/paymentMethods',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostPaymentMethodsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PaymentMethodSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/paymentmethods:write'] }],
})

export const optionsPaymentMethodsRoute = createRoute({
  method: 'options',
  path: '/paymentMethods',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'get',
  path: '/paymentMethods/{paymentMethodId}',
  request: {
    params: z.object({
      paymentMethodId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PaymentMethodSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/paymentmethods:read'] }],
})

export const deletePaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'delete',
  path: '/paymentMethods/{paymentMethodId}',
  request: {
    params: z.object({
      paymentMethodId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PaymentMethodSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/paymentmethods:read'] }],
})

export const optionsPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'options',
  path: '/paymentMethods/{paymentMethodId}',
  request: {
    params: z.object({
      paymentMethodId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'patch',
  path: '/paymentMethods/{paymentMethodId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      paymentMethodId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchPaymentMethodIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PaymentMethodSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/paymentmethods:write'] }],
})

export const getPlansRoute = createRoute({
  method: 'get',
  path: '/plans',
  request: {
    query: z.object({
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'owner', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PlansSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/plans:read'] }],
})

export const optionsPlansRoute = createRoute({
  method: 'options',
  path: '/plans',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getPlansPlanIdRoute = createRoute({
  method: 'get',
  path: '/plans/{planId}',
  request: {
    params: z.object({
      planId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PlanSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/plans:read'] }],
})

export const optionsPlansPlanIdRoute = createRoute({
  method: 'options',
  path: '/plans/{planId}',
  request: {
    params: z.object({
      planId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getPredictionsRoute = createRoute({
  method: 'get',
  path: '/predictions',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sortBy', schema: { type: 'string' }, required: false },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'order', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PredictionsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/predictions:read'] }],
})

export const postPredictionsRoute = createRoute({
  method: 'post',
  path: '/predictions',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostPredictionsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PredictionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/predictions:write'] }],
})

export const optionsPredictionsRoute = createRoute({
  method: 'options',
  path: '/predictions',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getProfilesProfileIdRoute = createRoute({
  method: 'get',
  path: '/profiles/{profileId}',
  request: {
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'profileId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ProfileSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:read'] }],
})

export const optionsProfilesProfileIdRoute = createRoute({
  method: 'options',
  path: '/profiles/{profileId}',
  request: {
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'profileId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchProfilesProfileIdRoute = createRoute({
  method: 'patch',
  path: '/profiles/{profileId}',
  request: {
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'profileId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: ProfileSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/assets:write'] }],
})

export const getSecretsRoute = createRoute({
  method: 'get',
  path: '/secrets',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: SecretsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/secrets:read'] }],
})

export const postSecretsRoute = createRoute({
  method: 'post',
  path: '/secrets',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostSecretsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: SecretSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/secrets:write'] }],
})

export const optionsSecretsRoute = createRoute({
  method: 'options',
  path: '/secrets',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const deleteSecretsSecretIdRoute = createRoute({
  method: 'delete',
  path: '/secrets/{secretId}',
  request: {
    params: z.object({
      secretId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'secretId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: SecretSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const optionsSecretsSecretIdRoute = createRoute({
  method: 'options',
  path: '/secrets/{secretId}',
  request: {
    params: z.object({
      secretId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'secretId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchSecretsSecretIdRoute = createRoute({
  method: 'patch',
  path: '/secrets/{secretId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      secretId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'secretId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchSecretIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: SecretSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/secrets:write'] }],
})

export const postSignupRoute = createRoute({
  method: 'post',
  path: '/signup',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostSignUpSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: SignUpSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const optionsSignupRoute = createRoute({
  method: 'options',
  path: '/signup',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getTransitionsRoute = createRoute({
  method: 'get',
  path: '/transitions',
  request: {
    query: z.object({
      transitionType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'transitionType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions:read'] }],
})

export const postTransitionsRoute = createRoute({
  method: 'post',
  path: '/transitions',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostTransitionsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions:write'] }],
})

export const optionsTransitionsRoute = createRoute({
  method: 'options',
  path: '/transitions',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getTransitionsTransitionIdRoute = createRoute({
  method: 'get',
  path: '/transitions/{transitionId}',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions:read'] }],
})

export const deleteTransitionsTransitionIdRoute = createRoute({
  method: 'delete',
  path: '/transitions/{transitionId}',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions:read'] }],
})

export const optionsTransitionsTransitionIdRoute = createRoute({
  method: 'options',
  path: '/transitions/{transitionId}',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchTransitionsTransitionIdRoute = createRoute({
  method: 'patch',
  path: '/transitions/{transitionId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchTransitionIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions:write'] }],
})

export const getTransitionsTransitionIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/transitions/{transitionId}/executions',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'order', schema: { type: 'string' }, required: false },
        }),
      executionId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'executionId', schema: { type: 'string' }, required: false },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'status', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sortBy', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionExecutionsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions.executions:read'] }],
})

export const postTransitionsTransitionIdExecutionsRoute = createRoute({
  method: 'post',
  path: '/transitions/{transitionId}/executions',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostTransitionExecutionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions.executions:write'] }],
})

export const optionsTransitionsTransitionIdExecutionsRoute = createRoute({
  method: 'options',
  path: '/transitions/{transitionId}/executions',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getTransitionsTransitionIdExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/transitions/{transitionId}/executions/{executionId}',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions.executions:read'] }],
})

export const optionsTransitionsTransitionIdExecutionsExecutionIdRoute = createRoute({
  method: 'options',
  path: '/transitions/{transitionId}/executions/{executionId}',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchTransitionsTransitionIdExecutionsExecutionIdRoute = createRoute({
  method: 'patch',
  path: '/transitions/{transitionId}/executions/{executionId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchTransistionExecutionIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: TransitionExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions.executions:write'] }],
})

export const postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute = createRoute({
  method: 'post',
  path: '/transitions/{transitionId}/executions/{executionId}/heartbeats',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostHeartbeatsSchema } }, required: true },
  },
  responses: {
    204: {
      description: '204 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/transitions.executions.heartbeats:write'] }],
})

export const optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute = createRoute({
  method: 'options',
  path: '/transitions/{transitionId}/executions/{executionId}/heartbeats',
  request: {
    params: z.object({
      transitionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'transitionId', required: true, schema: { type: 'string' } },
        }),
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: UsersSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/users:read'] }],
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostUsersSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/users:write'] }],
})

export const optionsUsersRoute = createRoute({
  method: 'options',
  path: '/users',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/users:read'] }],
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/users:read'] }],
})

export const optionsUsersUserIdRoute = createRoute({
  method: 'options',
  path: '/users/{userId}',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchUserIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/users:write'] }],
})

export const getWorkflowsRoute = createRoute({
  method: 'get',
  path: '/workflows',
  request: {
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows:read'] }],
})

export const postWorkflowsRoute = createRoute({
  method: 'post',
  path: '/workflows',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostWorkflowsSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows:write'] }],
})

export const optionsWorkflowsRoute = createRoute({
  method: 'options',
  path: '/workflows',
  request: { body: { content: { 'application/json': { schema: EmptySchema } }, required: true } },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getWorkflowsWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/workflows/{workflowId}',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows:read'] }],
})

export const deleteWorkflowsWorkflowIdRoute = createRoute({
  method: 'delete',
  path: '/workflows/{workflowId}',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows:read'] }],
})

export const optionsWorkflowsWorkflowIdRoute = createRoute({
  method: 'options',
  path: '/workflows/{workflowId}',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchWorkflowsWorkflowIdRoute = createRoute({
  method: 'patch',
  path: '/workflows/{workflowId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchWorkflowIdSchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows:write'] }],
})

export const getWorkflowsWorkflowIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/workflows/{workflowId}/executions',
  request: {
    query: z.object({
      fromStartTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fromStartTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      toStartTime: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'toStartTime', schema: { type: 'string' }, required: false },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'nextToken', schema: { type: 'string' }, required: false },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'order', schema: { type: 'string' }, required: false },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'status', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'maxResults', schema: { type: 'string' }, required: false },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sortBy', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowExecutionsSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:read'] }],
})

export const postWorkflowsWorkflowIdExecutionsRoute = createRoute({
  method: 'post',
  path: '/workflows/{workflowId}/executions',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostWorkflowExecutionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:write'] }],
})

export const optionsWorkflowsWorkflowIdExecutionsRoute = createRoute({
  method: 'options',
  path: '/workflows/{workflowId}/executions',
  request: {
    params: z.object({
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getWorkflowsWorkflowIdExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/workflows/{workflowId}/executions/{executionId}',
  request: {
    params: z.object({
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:read'] }],
})

export const deleteWorkflowsWorkflowIdExecutionsExecutionIdRoute = createRoute({
  method: 'delete',
  path: '/workflows/{workflowId}/executions/{executionId}',
  request: {
    params: z.object({
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:read'] }],
})

export const optionsWorkflowsWorkflowIdExecutionsExecutionIdRoute = createRoute({
  method: 'options',
  path: '/workflows/{workflowId}/executions/{executionId}',
  request: {
    params: z.object({
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EmptySchema } }, required: true },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const patchWorkflowsWorkflowIdExecutionsExecutionIdRoute = createRoute({
  method: 'patch',
  path: '/workflows/{workflowId}/executions/{executionId}',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Content-Type', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      executionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'executionId', required: true, schema: { type: 'string' } },
        }),
      workflowId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workflowId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchWorkflowExecutionIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: WorkflowExecutionSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: '400 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: '403 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: '404 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    415: {
      description: '415 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: '500 response',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ OAuth2: ['api.lucidtech.ai/workflows.executions:write'] }],
})
