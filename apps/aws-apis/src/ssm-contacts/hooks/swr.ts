import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetSSMContactsAcceptPageKey() {
  return [
    '#X-Amz-Target=SSMContacts.AcceptPage',
    '/#X-Amz-Target=SSMContacts.AcceptPage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsAcceptPage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsAcceptPageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SSMContacts.AcceptPage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsActivateContactChannelKey() {
  return [
    '#X-Amz-Target=SSMContacts.ActivateContactChannel',
    '/#X-Amz-Target=SSMContacts.ActivateContactChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsActivateContactChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsActivateContactChannelKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ActivateContactChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsCreateContactKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateContact',
    '/#X-Amz-Target=SSMContacts.CreateContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsCreateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsCreateContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.CreateContact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsCreateContactChannelKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateContactChannel',
    '/#X-Amz-Target=SSMContacts.CreateContactChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsCreateContactChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsCreateContactChannelKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.CreateContactChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsCreateRotationKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateRotation',
    '/#X-Amz-Target=SSMContacts.CreateRotation',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsCreateRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsCreateRotationKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.CreateRotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsCreateRotationOverrideKey() {
  return [
    '#X-Amz-Target=SSMContacts.CreateRotationOverride',
    '/#X-Amz-Target=SSMContacts.CreateRotationOverride',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsCreateRotationOverride<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsCreateRotationOverrideKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.CreateRotationOverride'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDeactivateContactChannelKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeactivateContactChannel',
    '/#X-Amz-Target=SSMContacts.DeactivateContactChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDeactivateContactChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDeactivateContactChannelKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.DeactivateContactChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDeleteContactKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteContact',
    '/#X-Amz-Target=SSMContacts.DeleteContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDeleteContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDeleteContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.DeleteContact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDeleteContactChannelKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteContactChannel',
    '/#X-Amz-Target=SSMContacts.DeleteContactChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDeleteContactChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDeleteContactChannelKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.DeleteContactChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDeleteRotationKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteRotation',
    '/#X-Amz-Target=SSMContacts.DeleteRotation',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDeleteRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDeleteRotationKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.DeleteRotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDeleteRotationOverrideKey() {
  return [
    '#X-Amz-Target=SSMContacts.DeleteRotationOverride',
    '/#X-Amz-Target=SSMContacts.DeleteRotationOverride',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDeleteRotationOverride<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDeleteRotationOverrideKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.DeleteRotationOverride'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDescribeEngagementKey() {
  return [
    '#X-Amz-Target=SSMContacts.DescribeEngagement',
    '/#X-Amz-Target=SSMContacts.DescribeEngagement',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDescribeEngagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDescribeEngagementKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.DescribeEngagement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsDescribePageKey() {
  return [
    '#X-Amz-Target=SSMContacts.DescribePage',
    '/#X-Amz-Target=SSMContacts.DescribePage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsDescribePage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsDescribePageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.DescribePage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsGetContactKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetContact',
    '/#X-Amz-Target=SSMContacts.GetContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsGetContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsGetContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SSMContacts.GetContact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsGetContactChannelKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetContactChannel',
    '/#X-Amz-Target=SSMContacts.GetContactChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsGetContactChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsGetContactChannelKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.GetContactChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsGetContactPolicyKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetContactPolicy',
    '/#X-Amz-Target=SSMContacts.GetContactPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsGetContactPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsGetContactPolicyKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.GetContactPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsGetRotationKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetRotation',
    '/#X-Amz-Target=SSMContacts.GetRotation',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsGetRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsGetRotationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SSMContacts.GetRotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsGetRotationOverrideKey() {
  return [
    '#X-Amz-Target=SSMContacts.GetRotationOverride',
    '/#X-Amz-Target=SSMContacts.GetRotationOverride',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsGetRotationOverride<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsGetRotationOverrideKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.GetRotationOverride'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListContactChannelsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListContactChannels',
    '/#X-Amz-Target=SSMContacts.ListContactChannels',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListContactChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListContactChannelsKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListContactChannels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListContactsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListContacts',
    '/#X-Amz-Target=SSMContacts.ListContacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.ListContacts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListEngagementsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListEngagements',
    '/#X-Amz-Target=SSMContacts.ListEngagements',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListEngagements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListEngagementsKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListEngagements'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListPageReceiptsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPageReceipts',
    '/#X-Amz-Target=SSMContacts.ListPageReceipts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListPageReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListPageReceiptsKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListPageReceipts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListPageResolutionsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPageResolutions',
    '/#X-Amz-Target=SSMContacts.ListPageResolutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListPageResolutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListPageResolutionsKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListPageResolutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListPagesByContactKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPagesByContact',
    '/#X-Amz-Target=SSMContacts.ListPagesByContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListPagesByContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListPagesByContactKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListPagesByContact'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListPagesByEngagementKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPagesByEngagement',
    '/#X-Amz-Target=SSMContacts.ListPagesByEngagement',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListPagesByEngagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListPagesByEngagementKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListPagesByEngagement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListPreviewRotationShiftsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListPreviewRotationShifts',
    '/#X-Amz-Target=SSMContacts.ListPreviewRotationShifts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListPreviewRotationShifts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListPreviewRotationShiftsKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListRotationOverridesKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListRotationOverrides',
    '/#X-Amz-Target=SSMContacts.ListRotationOverrides',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListRotationOverrides<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListRotationOverridesKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListRotationOverrides'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListRotationShiftsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListRotationShifts',
    '/#X-Amz-Target=SSMContacts.ListRotationShifts',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListRotationShifts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListRotationShiftsKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListRotationShifts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListRotationsKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListRotations',
    '/#X-Amz-Target=SSMContacts.ListRotations',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListRotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListRotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.ListRotations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsListTagsForResourceKey() {
  return [
    '#X-Amz-Target=SSMContacts.ListTagsForResource',
    '/#X-Amz-Target=SSMContacts.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsPutContactPolicyKey() {
  return [
    '#X-Amz-Target=SSMContacts.PutContactPolicy',
    '/#X-Amz-Target=SSMContacts.PutContactPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsPutContactPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsPutContactPolicyKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.PutContactPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsSendActivationCodeKey() {
  return [
    '#X-Amz-Target=SSMContacts.SendActivationCode',
    '/#X-Amz-Target=SSMContacts.SendActivationCode',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsSendActivationCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsSendActivationCodeKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.SendActivationCode'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsStartEngagementKey() {
  return [
    '#X-Amz-Target=SSMContacts.StartEngagement',
    '/#X-Amz-Target=SSMContacts.StartEngagement',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsStartEngagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsStartEngagementKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.StartEngagement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsStopEngagementKey() {
  return [
    '#X-Amz-Target=SSMContacts.StopEngagement',
    '/#X-Amz-Target=SSMContacts.StopEngagement',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsStopEngagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsStopEngagementKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.StopEngagement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsTagResourceKey() {
  return [
    '#X-Amz-Target=SSMContacts.TagResource',
    '/#X-Amz-Target=SSMContacts.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=SSMContacts.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsUntagResourceKey() {
  return [
    '#X-Amz-Target=SSMContacts.UntagResource',
    '/#X-Amz-Target=SSMContacts.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsUpdateContactKey() {
  return [
    '#X-Amz-Target=SSMContacts.UpdateContact',
    '/#X-Amz-Target=SSMContacts.UpdateContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsUpdateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsUpdateContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.UpdateContact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsUpdateContactChannelKey() {
  return [
    '#X-Amz-Target=SSMContacts.UpdateContactChannel',
    '/#X-Amz-Target=SSMContacts.UpdateContactChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsUpdateContactChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsUpdateContactChannelKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SSMContacts.UpdateContactChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSSMContactsUpdateRotationKey() {
  return [
    '#X-Amz-Target=SSMContacts.UpdateRotation',
    '/#X-Amz-Target=SSMContacts.UpdateRotation',
    'POST',
  ] as const
}

export function usePostXAmzTargetSSMContactsUpdateRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSSMContactsUpdateRotationKey()
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
            (typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=SSMContacts.UpdateRotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
