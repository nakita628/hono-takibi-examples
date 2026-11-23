import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCopyProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreateConstraintKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreateProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeleteProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeRecordKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListPortfoliosKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListServiceActionsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceListTagOptionsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
  ] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceProvisionProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceSearchProductsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction'] as const
}

export function getXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionKey() {
  return ['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption'] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCopyProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCopyProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCopyProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateConstraintKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateConstraint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreateConstraintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreateProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateServiceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateTagOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShares<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdmin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProductView<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParameters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeRecordKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeRecord<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParameters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus',
    '/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs',
    '/#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioShares<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListLaunchPaths<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPortfolios<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlans<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifacts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListRecordHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListServiceActions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListTagOptionsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListTagOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceListTagOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult',
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceProvisionProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceProvisionProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceProvisionProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProducts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceSearchProducts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin',
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdmin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProducts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolio<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProduct<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
