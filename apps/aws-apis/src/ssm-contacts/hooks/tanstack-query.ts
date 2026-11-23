import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetSSMContactsAcceptPageKey() {
  return ['#X-Amz-Target=SSMContacts.AcceptPage'] as const
}

export function getXAmzTargetSSMContactsActivateContactChannelKey() {
  return ['#X-Amz-Target=SSMContacts.ActivateContactChannel'] as const
}

export function getXAmzTargetSSMContactsCreateContactKey() {
  return ['#X-Amz-Target=SSMContacts.CreateContact'] as const
}

export function getXAmzTargetSSMContactsCreateContactChannelKey() {
  return ['#X-Amz-Target=SSMContacts.CreateContactChannel'] as const
}

export function getXAmzTargetSSMContactsCreateRotationKey() {
  return ['#X-Amz-Target=SSMContacts.CreateRotation'] as const
}

export function getXAmzTargetSSMContactsCreateRotationOverrideKey() {
  return ['#X-Amz-Target=SSMContacts.CreateRotationOverride'] as const
}

export function getXAmzTargetSSMContactsDeactivateContactChannelKey() {
  return ['#X-Amz-Target=SSMContacts.DeactivateContactChannel'] as const
}

export function getXAmzTargetSSMContactsDeleteContactKey() {
  return ['#X-Amz-Target=SSMContacts.DeleteContact'] as const
}

export function getXAmzTargetSSMContactsDeleteContactChannelKey() {
  return ['#X-Amz-Target=SSMContacts.DeleteContactChannel'] as const
}

export function getXAmzTargetSSMContactsDeleteRotationKey() {
  return ['#X-Amz-Target=SSMContacts.DeleteRotation'] as const
}

export function getXAmzTargetSSMContactsDeleteRotationOverrideKey() {
  return ['#X-Amz-Target=SSMContacts.DeleteRotationOverride'] as const
}

export function getXAmzTargetSSMContactsDescribeEngagementKey() {
  return ['#X-Amz-Target=SSMContacts.DescribeEngagement'] as const
}

export function getXAmzTargetSSMContactsDescribePageKey() {
  return ['#X-Amz-Target=SSMContacts.DescribePage'] as const
}

export function getXAmzTargetSSMContactsGetContactKey() {
  return ['#X-Amz-Target=SSMContacts.GetContact'] as const
}

export function getXAmzTargetSSMContactsGetContactChannelKey() {
  return ['#X-Amz-Target=SSMContacts.GetContactChannel'] as const
}

export function getXAmzTargetSSMContactsGetContactPolicyKey() {
  return ['#X-Amz-Target=SSMContacts.GetContactPolicy'] as const
}

export function getXAmzTargetSSMContactsGetRotationKey() {
  return ['#X-Amz-Target=SSMContacts.GetRotation'] as const
}

export function getXAmzTargetSSMContactsGetRotationOverrideKey() {
  return ['#X-Amz-Target=SSMContacts.GetRotationOverride'] as const
}

export function getXAmzTargetSSMContactsListContactChannelsKey() {
  return ['#X-Amz-Target=SSMContacts.ListContactChannels'] as const
}

export function getXAmzTargetSSMContactsListContactsKey() {
  return ['#X-Amz-Target=SSMContacts.ListContacts'] as const
}

export function getXAmzTargetSSMContactsListEngagementsKey() {
  return ['#X-Amz-Target=SSMContacts.ListEngagements'] as const
}

export function getXAmzTargetSSMContactsListPageReceiptsKey() {
  return ['#X-Amz-Target=SSMContacts.ListPageReceipts'] as const
}

export function getXAmzTargetSSMContactsListPageResolutionsKey() {
  return ['#X-Amz-Target=SSMContacts.ListPageResolutions'] as const
}

export function getXAmzTargetSSMContactsListPagesByContactKey() {
  return ['#X-Amz-Target=SSMContacts.ListPagesByContact'] as const
}

export function getXAmzTargetSSMContactsListPagesByEngagementKey() {
  return ['#X-Amz-Target=SSMContacts.ListPagesByEngagement'] as const
}

export function getXAmzTargetSSMContactsListPreviewRotationShiftsKey() {
  return ['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts'] as const
}

export function getXAmzTargetSSMContactsListRotationOverridesKey() {
  return ['#X-Amz-Target=SSMContacts.ListRotationOverrides'] as const
}

export function getXAmzTargetSSMContactsListRotationShiftsKey() {
  return ['#X-Amz-Target=SSMContacts.ListRotationShifts'] as const
}

export function getXAmzTargetSSMContactsListRotationsKey() {
  return ['#X-Amz-Target=SSMContacts.ListRotations'] as const
}

export function getXAmzTargetSSMContactsListTagsForResourceKey() {
  return ['#X-Amz-Target=SSMContacts.ListTagsForResource'] as const
}

export function getXAmzTargetSSMContactsPutContactPolicyKey() {
  return ['#X-Amz-Target=SSMContacts.PutContactPolicy'] as const
}

export function getXAmzTargetSSMContactsSendActivationCodeKey() {
  return ['#X-Amz-Target=SSMContacts.SendActivationCode'] as const
}

export function getXAmzTargetSSMContactsStartEngagementKey() {
  return ['#X-Amz-Target=SSMContacts.StartEngagement'] as const
}

export function getXAmzTargetSSMContactsStopEngagementKey() {
  return ['#X-Amz-Target=SSMContacts.StopEngagement'] as const
}

export function getXAmzTargetSSMContactsTagResourceKey() {
  return ['#X-Amz-Target=SSMContacts.TagResource'] as const
}

export function getXAmzTargetSSMContactsUntagResourceKey() {
  return ['#X-Amz-Target=SSMContacts.UntagResource'] as const
}

export function getXAmzTargetSSMContactsUpdateContactKey() {
  return ['#X-Amz-Target=SSMContacts.UpdateContact'] as const
}

export function getXAmzTargetSSMContactsUpdateContactChannelKey() {
  return ['#X-Amz-Target=SSMContacts.UpdateContactChannel'] as const
}

export function getXAmzTargetSSMContactsUpdateRotationKey() {
  return ['#X-Amz-Target=SSMContacts.UpdateRotation'] as const
}

export function getPostXAmzTargetSSMContactsAcceptPageMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.AcceptPage',
    '/#X-Amz-Target=SSMContacts.AcceptPage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsAcceptPageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsAcceptPageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.AcceptPage'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsAcceptPage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsAcceptPageMutationOptions<
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

export function getPostXAmzTargetSSMContactsActivateContactChannelMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ActivateContactChannel',
    '/#X-Amz-Target=SSMContacts.ActivateContactChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsActivateContactChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsActivateContactChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ActivateContactChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsActivateContactChannel<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsActivateContactChannelMutationOptions<
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

export function getPostXAmzTargetSSMContactsCreateContactMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateContact',
    '/#X-Amz-Target=SSMContacts.CreateContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsCreateContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsCreateContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.CreateContact'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsCreateContact<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsCreateContactMutationOptions<
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

export function getPostXAmzTargetSSMContactsCreateContactChannelMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateContactChannel',
    '/#X-Amz-Target=SSMContacts.CreateContactChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsCreateContactChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsCreateContactChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.CreateContactChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsCreateContactChannel<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsCreateContactChannelMutationOptions<
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

export function getPostXAmzTargetSSMContactsCreateRotationMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateRotation',
    '/#X-Amz-Target=SSMContacts.CreateRotation',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsCreateRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsCreateRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.CreateRotation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsCreateRotation<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsCreateRotationMutationOptions<
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

export function getPostXAmzTargetSSMContactsCreateRotationOverrideMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateRotationOverride',
    '/#X-Amz-Target=SSMContacts.CreateRotationOverride',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsCreateRotationOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsCreateRotationOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.CreateRotationOverride'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsCreateRotationOverride<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsCreateRotationOverrideMutationOptions<
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

export function getPostXAmzTargetSSMContactsDeactivateContactChannelMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeactivateContactChannel',
    '/#X-Amz-Target=SSMContacts.DeactivateContactChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDeactivateContactChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDeactivateContactChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.DeactivateContactChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsDeactivateContactChannel<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsDeactivateContactChannelMutationOptions<
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

export function getPostXAmzTargetSSMContactsDeleteContactMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteContact',
    '/#X-Amz-Target=SSMContacts.DeleteContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDeleteContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDeleteContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.DeleteContact'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsDeleteContact<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsDeleteContactMutationOptions<
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

export function getPostXAmzTargetSSMContactsDeleteContactChannelMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteContactChannel',
    '/#X-Amz-Target=SSMContacts.DeleteContactChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDeleteContactChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDeleteContactChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.DeleteContactChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsDeleteContactChannel<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsDeleteContactChannelMutationOptions<
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

export function getPostXAmzTargetSSMContactsDeleteRotationMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteRotation',
    '/#X-Amz-Target=SSMContacts.DeleteRotation',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDeleteRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDeleteRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.DeleteRotation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsDeleteRotation<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsDeleteRotationMutationOptions<
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

export function getPostXAmzTargetSSMContactsDeleteRotationOverrideMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteRotationOverride',
    '/#X-Amz-Target=SSMContacts.DeleteRotationOverride',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDeleteRotationOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDeleteRotationOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.DeleteRotationOverride'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsDeleteRotationOverride<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsDeleteRotationOverrideMutationOptions<
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

export function getPostXAmzTargetSSMContactsDescribeEngagementMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DescribeEngagement',
    '/#X-Amz-Target=SSMContacts.DescribeEngagement',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDescribeEngagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDescribeEngagementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.DescribeEngagement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsDescribeEngagement<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsDescribeEngagementMutationOptions<
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

export function getPostXAmzTargetSSMContactsDescribePageMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DescribePage',
    '/#X-Amz-Target=SSMContacts.DescribePage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsDescribePageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsDescribePageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.DescribePage'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsDescribePage<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsDescribePageMutationOptions<
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

export function getPostXAmzTargetSSMContactsGetContactMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetContact',
    '/#X-Amz-Target=SSMContacts.GetContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsGetContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsGetContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.GetContact'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsGetContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsGetContactMutationOptions<
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

export function getPostXAmzTargetSSMContactsGetContactChannelMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetContactChannel',
    '/#X-Amz-Target=SSMContacts.GetContactChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsGetContactChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsGetContactChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.GetContactChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsGetContactChannel<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsGetContactChannelMutationOptions<
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

export function getPostXAmzTargetSSMContactsGetContactPolicyMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetContactPolicy',
    '/#X-Amz-Target=SSMContacts.GetContactPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsGetContactPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsGetContactPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.GetContactPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsGetContactPolicy<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsGetContactPolicyMutationOptions<
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

export function getPostXAmzTargetSSMContactsGetRotationMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetRotation',
    '/#X-Amz-Target=SSMContacts.GetRotation',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsGetRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsGetRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.GetRotation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsGetRotation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsGetRotationMutationOptions<
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

export function getPostXAmzTargetSSMContactsGetRotationOverrideMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetRotationOverride',
    '/#X-Amz-Target=SSMContacts.GetRotationOverride',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsGetRotationOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsGetRotationOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.GetRotationOverride'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsGetRotationOverride<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsGetRotationOverrideMutationOptions<
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

export function getPostXAmzTargetSSMContactsListContactChannelsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListContactChannels',
    '/#X-Amz-Target=SSMContacts.ListContactChannels',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListContactChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListContactChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListContactChannels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListContactChannels<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListContactChannelsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListContactsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListContacts',
    '/#X-Amz-Target=SSMContacts.ListContacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.ListContacts'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsListContacts<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListContactsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListEngagementsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListEngagements',
    '/#X-Amz-Target=SSMContacts.ListEngagements',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListEngagementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListEngagementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.ListEngagements'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsListEngagements<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListEngagementsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListPageReceiptsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPageReceipts',
    '/#X-Amz-Target=SSMContacts.ListPageReceipts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListPageReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListPageReceiptsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListPageReceipts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListPageReceipts<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListPageReceiptsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListPageResolutionsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPageResolutions',
    '/#X-Amz-Target=SSMContacts.ListPageResolutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListPageResolutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListPageResolutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListPageResolutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListPageResolutions<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListPageResolutionsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListPagesByContactMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPagesByContact',
    '/#X-Amz-Target=SSMContacts.ListPagesByContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListPagesByContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListPagesByContactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListPagesByContact'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListPagesByContact<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListPagesByContactMutationOptions<
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

export function getPostXAmzTargetSSMContactsListPagesByEngagementMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPagesByEngagement',
    '/#X-Amz-Target=SSMContacts.ListPagesByEngagement',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListPagesByEngagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListPagesByEngagementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListPagesByEngagement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListPagesByEngagement<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsListPagesByEngagementMutationOptions<
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

export function getPostXAmzTargetSSMContactsListPreviewRotationShiftsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPreviewRotationShifts',
    '/#X-Amz-Target=SSMContacts.ListPreviewRotationShifts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListPreviewRotationShiftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListPreviewRotationShiftsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListPreviewRotationShifts<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsListPreviewRotationShiftsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListRotationOverridesMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListRotationOverrides',
    '/#X-Amz-Target=SSMContacts.ListRotationOverrides',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListRotationOverridesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListRotationOverridesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListRotationOverrides'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListRotationOverrides<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsListRotationOverridesMutationOptions<
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

export function getPostXAmzTargetSSMContactsListRotationShiftsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListRotationShifts',
    '/#X-Amz-Target=SSMContacts.ListRotationShifts',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListRotationShiftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListRotationShiftsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListRotationShifts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListRotationShifts<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListRotationShiftsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListRotationsMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListRotations',
    '/#X-Amz-Target=SSMContacts.ListRotations',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListRotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListRotationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.ListRotations'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsListRotations<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListRotationsMutationOptions<
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

export function getPostXAmzTargetSSMContactsListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListTagsForResource',
    '/#X-Amz-Target=SSMContacts.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetSSMContactsPutContactPolicyMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.PutContactPolicy',
    '/#X-Amz-Target=SSMContacts.PutContactPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsPutContactPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsPutContactPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.PutContactPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsPutContactPolicy<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsPutContactPolicyMutationOptions<
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

export function getPostXAmzTargetSSMContactsSendActivationCodeMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.SendActivationCode',
    '/#X-Amz-Target=SSMContacts.SendActivationCode',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsSendActivationCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsSendActivationCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.SendActivationCode'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsSendActivationCode<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsSendActivationCodeMutationOptions<
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

export function getPostXAmzTargetSSMContactsStartEngagementMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.StartEngagement',
    '/#X-Amz-Target=SSMContacts.StartEngagement',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsStartEngagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsStartEngagementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.StartEngagement'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsStartEngagement<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsStartEngagementMutationOptions<
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

export function getPostXAmzTargetSSMContactsStopEngagementMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.StopEngagement',
    '/#X-Amz-Target=SSMContacts.StopEngagement',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsStopEngagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsStopEngagementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.StopEngagement'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsStopEngagement<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsStopEngagementMutationOptions<
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

export function getPostXAmzTargetSSMContactsTagResourceMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.TagResource',
    '/#X-Amz-Target=SSMContacts.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsTagResourceMutationOptions<
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

export function getPostXAmzTargetSSMContactsUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.UntagResource',
    '/#X-Amz-Target=SSMContacts.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.UntagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsUntagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsUntagResourceMutationOptions<
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

export function getPostXAmzTargetSSMContactsUpdateContactMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.UpdateContact',
    '/#X-Amz-Target=SSMContacts.UpdateContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsUpdateContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsUpdateContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.UpdateContact'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsUpdateContact<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsUpdateContactMutationOptions<
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

export function getPostXAmzTargetSSMContactsUpdateContactChannelMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.UpdateContactChannel',
    '/#X-Amz-Target=SSMContacts.UpdateContactChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsUpdateContactChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsUpdateContactChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SSMContacts.UpdateContactChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSSMContactsUpdateContactChannel<
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
                  (typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetSSMContactsUpdateContactChannelMutationOptions<
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

export function getPostXAmzTargetSSMContactsUpdateRotationMutationKey() {
  return [
    '#X-Amz-Target=SSMContacts.UpdateRotation',
    '/#X-Amz-Target=SSMContacts.UpdateRotation',
    'POST',
  ] as const
}

export function getPostXAmzTargetSSMContactsUpdateRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSSMContactsUpdateRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=SSMContacts.UpdateRotation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSSMContactsUpdateRotation<
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
                ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSSMContactsUpdateRotationMutationOptions<
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
