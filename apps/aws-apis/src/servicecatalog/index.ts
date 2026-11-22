import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareHandler,
  XAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceHandler,
  XAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceHandler,
  XAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceCopyProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreateConstraintHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreatePortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreateProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreateServiceActionHandler,
  XAmzTargetAWS242ServiceCatalogServiceCreateTagOptionHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeleteConstraintHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeletePortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeleteProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionHandler,
  XAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeConstraintHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProductViewHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeRecordHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionHandler,
  XAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionHandler,
  XAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessHandler,
  XAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceHandler,
  XAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceHandler,
  XAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessHandler,
  XAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanHandler,
  XAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionHandler,
  XAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusHandler,
  XAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsHandler,
  XAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesHandler,
  XAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceHandler,
  XAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceListLaunchPathsHandler,
  XAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessHandler,
  XAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessHandler,
  XAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceListPortfoliosHandler,
  XAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansHandler,
  XAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionHandler,
  XAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsHandler,
  XAmzTargetAWS242ServiceCatalogServiceListRecordHistoryHandler,
  XAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionHandler,
  XAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceListServiceActionsHandler,
  XAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceListTagOptionsHandler,
  XAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultHandler,
  XAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultHandler,
  XAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultHandler,
  XAmzTargetAWS242ServiceCatalogServiceProvisionProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareHandler,
  XAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsHandler,
  XAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminHandler,
  XAmzTargetAWS242ServiceCatalogServiceSearchProductsHandler,
  XAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsHandler,
  XAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateConstraintHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionHandler,
  XAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioHandler)
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactHandler,
  )
  .route('/', XAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceHandler)
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactHandler,
  )
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactHandler,
  )
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCopyProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreateConstraintHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreatePortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreateProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreateServiceActionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceCreateTagOptionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeleteConstraintHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeletePortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeleteProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeConstraintHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProductViewHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeRecordHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioHandler)
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactHandler,
  )
  .route('/', XAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListLaunchPathsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListPortfoliosHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListRecordHistoryHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListServiceActionsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceListTagOptionsHandler)
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultHandler,
  )
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultHandler,
  )
  .route(
    '/',
    XAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultHandler,
  )
  .route('/', XAmzTargetAWS242ServiceCatalogServiceProvisionProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceSearchProductsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateConstraintHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionHandler)
  .route('/', XAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionHandler)

export default app
