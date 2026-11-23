import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCopyProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCopyProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCopyProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCopyProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWS242ServiceCatalogServiceCopyProductMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateConstraintMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateConstraintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCreateConstraintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateConstraint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreateConstraintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCreateProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWS242ServiceCatalogServiceCreateProductMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateServiceAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceCreateTagOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProductMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdmin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProductView<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeRecordMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeRecordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeRecord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeRecordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus',
    '/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs',
    '/#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListLaunchPaths<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPortfolios<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListRecordHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListServiceActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListTagOptionsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceListTagOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceListTagOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceListTagOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceListTagOptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult',
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceProvisionProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceProvisionProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceProvisionProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceProvisionProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceProvisionProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceSearchProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin',
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdmin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts',
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProductMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionMutationKey() {
  return [
    '#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption',
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
