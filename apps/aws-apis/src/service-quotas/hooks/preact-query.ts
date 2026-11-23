import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate'] as const
}

export function getXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate',
  ] as const
}

export function getXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate'] as const
}

export function getXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota'] as const
}

export function getXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate'] as const
}

export function getXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange'] as const
}

export function getXAmzTargetServiceQuotasV20190624GetServiceQuotaKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota'] as const
}

export function getXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate',
  ] as const
}

export function getXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas'] as const
}

export function getXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory'] as const
}

export function getXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota',
  ] as const
}

export function getXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate',
  ] as const
}

export function getXAmzTargetServiceQuotasV20190624ListServiceQuotasKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas'] as const
}

export function getXAmzTargetServiceQuotasV20190624ListServicesKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.ListServices'] as const
}

export function getXAmzTargetServiceQuotasV20190624ListTagsForResourceKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource'] as const
}

export function getXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate',
  ] as const
}

export function getXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease'] as const
}

export function getXAmzTargetServiceQuotasV20190624TagResourceKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.TagResource'] as const
}

export function getXAmzTargetServiceQuotasV20190624UntagResourceKey() {
  return ['#X-Amz-Target=ServiceQuotasV20190624.UntagResource'] as const
}

export function getPostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuota<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624GetServiceQuota<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListServiceQuotasMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListServiceQuotasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624ListServiceQuotasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListServiceQuotas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetServiceQuotasV20190624ListServiceQuotasMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListServicesMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServices',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624ListServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.ListServices'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetServiceQuotasV20190624ListServicesMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease',
    '/#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncrease<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624TagResourceMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.TagResource',
    '/#X-Amz-Target=ServiceQuotasV20190624.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetServiceQuotasV20190624TagResourceMutationOptions<
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

export function getPostXAmzTargetServiceQuotasV20190624UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.UntagResource',
    '/#X-Amz-Target=ServiceQuotasV20190624.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetServiceQuotasV20190624UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetServiceQuotasV20190624UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ServiceQuotasV20190624.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetServiceQuotasV20190624UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetServiceQuotasV20190624UntagResourceMutationOptions<
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
