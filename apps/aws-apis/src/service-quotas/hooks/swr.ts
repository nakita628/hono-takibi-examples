import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuota<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624GetServiceQuota<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotas<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListServiceQuotasKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListServiceQuotas<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624ListServiceQuotasKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListServicesKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListServices',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624ListServicesKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.ListServices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource',
    '/#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate',
    '/#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease',
    '/#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncrease<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624TagResourceKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.TagResource',
    '/#X-Amz-Target=ServiceQuotasV20190624.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624TagResourceKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetServiceQuotasV20190624UntagResourceKey() {
  return [
    '#X-Amz-Target=ServiceQuotasV20190624.UntagResource',
    '/#X-Amz-Target=ServiceQuotasV20190624.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetServiceQuotasV20190624UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetServiceQuotasV20190624UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=ServiceQuotasV20190624.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ServiceQuotasV20190624.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
