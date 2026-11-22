import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectServiceServiceNameAclKafkaAclIdRoute,
  deleteProjectProjectServiceServiceNameConnectorsConnectorNameRoute,
  deleteProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute,
  deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclIdRoute,
  deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameRoute,
  deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
  deleteProjectProjectServiceServiceNameQuotaRoute,
  deleteProjectProjectServiceServiceNameTopicTopicNameRoute,
  getProjectProjectServiceServiceNameAclRoute,
  getProjectProjectServiceServiceNameAvailableConnectorsRoute,
  getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfigurationRoute,
  getProjectProjectServiceServiceNameConnectorsConnectorNameStatusRoute,
  getProjectProjectServiceServiceNameConnectorsRoute,
  getProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute,
  getProjectProjectServiceServiceNameKafkaAclRoute,
  getProjectProjectServiceServiceNameKafkaSchemaConfigRoute,
  getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute,
  getProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaIdRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchemaRoute,
  getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopicRoute,
  getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotalRoute,
  getProjectProjectServiceServiceNameKafkaTieredStorageSummaryRoute,
  getProjectProjectServiceServiceNameQuotaDescribeRoute,
  getProjectProjectServiceServiceNameQuotaRoute,
  getProjectProjectServiceServiceNameTopicRoute,
  getProjectProjectServiceServiceNameTopicTopicNameRoute,
  postProjectProjectServiceServiceNameAclRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNamePauseRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameRestartRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameResumeRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameStopRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestartRoute,
  postProjectProjectServiceServiceNameConnectorsRoute,
  postProjectProjectServiceServiceNameKafkaAclRoute,
  postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessagesRoute,
  postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduceRoute,
  postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionIdRoute,
  postProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute,
  postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute,
  postProjectProjectServiceServiceNameQuotaRoute,
  postProjectProjectServiceServiceNameTopicRoute,
  postProjectProjectServiceServiceNameValidateCustomPluginClassesRoute,
  putProjectProjectServiceServiceNameConnectorsConnectorNameRoute,
  putProjectProjectServiceServiceNameKafkaSchemaConfigRoute,
  putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute,
  putProjectProjectServiceServiceNameTopicTopicNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceKafkaHandler = app
  .openapi(postProjectProjectServiceServiceNameAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameAclKafkaAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameAvailableConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameConnectorsConnectorNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestartRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameValidateCustomPluginClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameQuotaDescribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaTieredStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameTopicTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameTopicTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameTopicTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameKafkaSchemaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchemaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
