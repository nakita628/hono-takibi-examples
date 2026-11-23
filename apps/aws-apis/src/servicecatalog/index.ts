import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAws242ServiceCatalogServiceAcceptPortfolioShareHandler,
  xAmzTargetAws242ServiceCatalogServiceAssociateBudgetWithResourceHandler,
  xAmzTargetAws242ServiceCatalogServiceAssociatePrincipalWithPortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceAssociateProductWithPortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceAssociateTagOptionWithResourceHandler,
  xAmzTargetAws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceCopyProductHandler,
  xAmzTargetAws242ServiceCatalogServiceCreateConstraintHandler,
  xAmzTargetAws242ServiceCatalogServiceCreatePortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceCreatePortfolioShareHandler,
  xAmzTargetAws242ServiceCatalogServiceCreateProductHandler,
  xAmzTargetAws242ServiceCatalogServiceCreateProvisionedProductPlanHandler,
  xAmzTargetAws242ServiceCatalogServiceCreateProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceCreateServiceActionHandler,
  xAmzTargetAws242ServiceCatalogServiceCreateTagOptionHandler,
  xAmzTargetAws242ServiceCatalogServiceDeleteConstraintHandler,
  xAmzTargetAws242ServiceCatalogServiceDeletePortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceDeletePortfolioShareHandler,
  xAmzTargetAws242ServiceCatalogServiceDeleteProductHandler,
  xAmzTargetAws242ServiceCatalogServiceDeleteProvisionedProductPlanHandler,
  xAmzTargetAws242ServiceCatalogServiceDeleteProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceDeleteServiceActionHandler,
  xAmzTargetAws242ServiceCatalogServiceDeleteTagOptionHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeConstraintHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeCopyProductStatusHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribePortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribePortfolioSharesHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribePortfolioShareStatusHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProductAsAdminHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProductHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProductViewHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProvisionedProductHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProvisionedProductPlanHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeProvisioningParametersHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeRecordHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeServiceActionExecutionParametersHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeServiceActionHandler,
  xAmzTargetAws242ServiceCatalogServiceDescribeTagOptionHandler,
  xAmzTargetAws242ServiceCatalogServiceDisableAwsOrganizationsAccessHandler,
  xAmzTargetAws242ServiceCatalogServiceDisassociateBudgetFromResourceHandler,
  xAmzTargetAws242ServiceCatalogServiceDisassociatePrincipalFromPortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceDisassociateProductFromPortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceDisassociateTagOptionFromResourceHandler,
  xAmzTargetAws242ServiceCatalogServiceEnableAwsOrganizationsAccessHandler,
  xAmzTargetAws242ServiceCatalogServiceExecuteProvisionedProductPlanHandler,
  xAmzTargetAws242ServiceCatalogServiceExecuteProvisionedProductServiceActionHandler,
  xAmzTargetAws242ServiceCatalogServiceGetAwsOrganizationsAccessStatusHandler,
  xAmzTargetAws242ServiceCatalogServiceGetProvisionedProductOutputsHandler,
  xAmzTargetAws242ServiceCatalogServiceImportAsProvisionedProductHandler,
  xAmzTargetAws242ServiceCatalogServiceListAcceptedPortfolioSharesHandler,
  xAmzTargetAws242ServiceCatalogServiceListBudgetsForResourceHandler,
  xAmzTargetAws242ServiceCatalogServiceListConstraintsForPortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceListLaunchPathsHandler,
  xAmzTargetAws242ServiceCatalogServiceListOrganizationPortfolioAccessHandler,
  xAmzTargetAws242ServiceCatalogServiceListPortfolioAccessHandler,
  xAmzTargetAws242ServiceCatalogServiceListPortfoliosForProductHandler,
  xAmzTargetAws242ServiceCatalogServiceListPortfoliosHandler,
  xAmzTargetAws242ServiceCatalogServiceListPrincipalsForPortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceListProvisionedProductPlansHandler,
  xAmzTargetAws242ServiceCatalogServiceListProvisioningArtifactsForServiceActionHandler,
  xAmzTargetAws242ServiceCatalogServiceListProvisioningArtifactsHandler,
  xAmzTargetAws242ServiceCatalogServiceListRecordHistoryHandler,
  xAmzTargetAws242ServiceCatalogServiceListResourcesForTagOptionHandler,
  xAmzTargetAws242ServiceCatalogServiceListServiceActionsForProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceListServiceActionsHandler,
  xAmzTargetAws242ServiceCatalogServiceListStackInstancesForProvisionedProductHandler,
  xAmzTargetAws242ServiceCatalogServiceListTagOptionsHandler,
  xAmzTargetAws242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultHandler,
  xAmzTargetAws242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultHandler,
  xAmzTargetAws242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultHandler,
  xAmzTargetAws242ServiceCatalogServiceProvisionProductHandler,
  xAmzTargetAws242ServiceCatalogServiceRejectPortfolioShareHandler,
  xAmzTargetAws242ServiceCatalogServiceScanProvisionedProductsHandler,
  xAmzTargetAws242ServiceCatalogServiceSearchProductsAsAdminHandler,
  xAmzTargetAws242ServiceCatalogServiceSearchProductsHandler,
  xAmzTargetAws242ServiceCatalogServiceSearchProvisionedProductsHandler,
  xAmzTargetAws242ServiceCatalogServiceTerminateProvisionedProductHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateConstraintHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdatePortfolioHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdatePortfolioShareHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateProductHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateProvisionedProductHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateProvisionedProductPropertiesHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateProvisioningArtifactHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateServiceActionHandler,
  xAmzTargetAws242ServiceCatalogServiceUpdateTagOptionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAws242ServiceCatalogServiceAcceptPortfolioShareHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceAssociateBudgetWithResourceHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceAssociatePrincipalWithPortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceAssociateProductWithPortfolioHandler)
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactHandler,
  )
  .route('/', xAmzTargetAws242ServiceCatalogServiceAssociateTagOptionWithResourceHandler)
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactHandler,
  )
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactHandler,
  )
  .route('/', xAmzTargetAws242ServiceCatalogServiceCopyProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreateConstraintHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreatePortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreatePortfolioShareHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreateProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreateProvisionedProductPlanHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreateProvisioningArtifactHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreateServiceActionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceCreateTagOptionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeleteConstraintHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeletePortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeletePortfolioShareHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeleteProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeleteProvisionedProductPlanHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeleteProvisioningArtifactHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeleteServiceActionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDeleteTagOptionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeConstraintHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeCopyProductStatusHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribePortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribePortfolioShareStatusHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribePortfolioSharesHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProductAsAdminHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProductViewHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProvisionedProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProvisionedProductPlanHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProvisioningArtifactHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeProvisioningParametersHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeRecordHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeServiceActionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeServiceActionExecutionParametersHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDescribeTagOptionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDisableAwsOrganizationsAccessHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDisassociateBudgetFromResourceHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDisassociatePrincipalFromPortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceDisassociateProductFromPortfolioHandler)
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactHandler,
  )
  .route('/', xAmzTargetAws242ServiceCatalogServiceDisassociateTagOptionFromResourceHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceEnableAwsOrganizationsAccessHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceExecuteProvisionedProductPlanHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceExecuteProvisionedProductServiceActionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceGetAwsOrganizationsAccessStatusHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceGetProvisionedProductOutputsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceImportAsProvisionedProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListAcceptedPortfolioSharesHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListBudgetsForResourceHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListConstraintsForPortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListLaunchPathsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListOrganizationPortfolioAccessHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListPortfolioAccessHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListPortfoliosHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListPortfoliosForProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListPrincipalsForPortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListProvisionedProductPlansHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListProvisioningArtifactsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListProvisioningArtifactsForServiceActionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListRecordHistoryHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListResourcesForTagOptionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListServiceActionsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListServiceActionsForProvisioningArtifactHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListStackInstancesForProvisionedProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceListTagOptionsHandler)
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultHandler,
  )
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultHandler,
  )
  .route(
    '/',
    xAmzTargetAws242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultHandler,
  )
  .route('/', xAmzTargetAws242ServiceCatalogServiceProvisionProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceRejectPortfolioShareHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceScanProvisionedProductsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceSearchProductsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceSearchProductsAsAdminHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceSearchProvisionedProductsHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceTerminateProvisionedProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateConstraintHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdatePortfolioHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdatePortfolioShareHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateProvisionedProductHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateProvisionedProductPropertiesHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateProvisioningArtifactHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateServiceActionHandler)
  .route('/', xAmzTargetAws242ServiceCatalogServiceUpdateTagOptionHandler)

export default app
