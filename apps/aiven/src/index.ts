import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  aiGatewayHandler,
  applicationUsersHandler,
  authenticationMethodsHandler,
  billingGroupHandler,
  billingHandler,
  cloudPlatformsHandler,
  customCloudHandler,
  domainsHandler,
  groupsHandler,
  kafkaConnectCustomPluginsHandler,
  oAuth2Handler,
  organizationBillingGroupHandler,
  organizationEmissionsHandler,
  organizationPaymentMethodHandler,
  organizationsHandler,
  organizationVpcHandler,
  paymentHandler,
  permissionsHandler,
  projectBillingHandler,
  projectHandler,
  projectKeyManagementHandler,
  secretsHandler,
  serviceApplicationHandler,
  serviceClickHouseHandler,
  serviceFlinkHandler,
  serviceHandler,
  serviceIntegrationsHandler,
  serviceKafkaHandler,
  serviceKafkaMirrorMakerHandler,
  serviceManagedAgentsHandler,
  serviceMySQLHandler,
  serviceOpenSearchHandler,
  servicePostgreSQLHandler,
  serviceThanosHandler,
  staticIPHandler,
  upgradePipelineHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aiGatewayHandler)
  .route('/', accountHandler)
  .route('/', applicationUsersHandler)
  .route('/', authenticationMethodsHandler)
  .route('/', billingGroupHandler)
  .route('/', billingHandler)
  .route('/', cloudPlatformsHandler)
  .route('/', customCloudHandler)
  .route('/', domainsHandler)
  .route('/', groupsHandler)
  .route('/', kafkaConnectCustomPluginsHandler)
  .route('/', oAuth2Handler)
  .route('/', organizationBillingGroupHandler)
  .route('/', organizationEmissionsHandler)
  .route('/', organizationPaymentMethodHandler)
  .route('/', organizationVpcHandler)
  .route('/', organizationsHandler)
  .route('/', paymentHandler)
  .route('/', permissionsHandler)
  .route('/', projectHandler)
  .route('/', projectBillingHandler)
  .route('/', projectKeyManagementHandler)
  .route('/', secretsHandler)
  .route('/', serviceApplicationHandler)
  .route('/', serviceClickHouseHandler)
  .route('/', serviceFlinkHandler)
  .route('/', serviceKafkaHandler)
  .route('/', serviceKafkaMirrorMakerHandler)
  .route('/', serviceManagedAgentsHandler)
  .route('/', serviceMySQLHandler)
  .route('/', serviceOpenSearchHandler)
  .route('/', servicePostgreSQLHandler)
  .route('/', serviceThanosHandler)
  .route('/', serviceHandler)
  .route('/', serviceIntegrationsHandler)
  .route('/', staticIPHandler)
  .route('/', upgradePipelineHandler)
  .route('/', usersHandler)

export default app
