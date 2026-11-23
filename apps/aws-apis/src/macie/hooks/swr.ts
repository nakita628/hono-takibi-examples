import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetMacieServiceAssociateMemberAccountKey() {
  return ['#X-Amz-Target=MacieService.AssociateMemberAccount'] as const
}

export function getXAmzTargetMacieServiceAssociateS3ResourcesKey() {
  return ['#X-Amz-Target=MacieService.AssociateS3Resources'] as const
}

export function getXAmzTargetMacieServiceDisassociateMemberAccountKey() {
  return ['#X-Amz-Target=MacieService.DisassociateMemberAccount'] as const
}

export function getXAmzTargetMacieServiceDisassociateS3ResourcesKey() {
  return ['#X-Amz-Target=MacieService.DisassociateS3Resources'] as const
}

export function getXAmzTargetMacieServiceListMemberAccountsKey() {
  return ['#X-Amz-Target=MacieService.ListMemberAccounts'] as const
}

export function getXAmzTargetMacieServiceListS3ResourcesKey() {
  return ['#X-Amz-Target=MacieService.ListS3Resources'] as const
}

export function getXAmzTargetMacieServiceUpdateS3ResourcesKey() {
  return ['#X-Amz-Target=MacieService.UpdateS3Resources'] as const
}

export function getPostXAmzTargetMacieServiceAssociateMemberAccountKey() {
  return [
    '#X-Amz-Target=MacieService.AssociateMemberAccount',
    '/#X-Amz-Target=MacieService.AssociateMemberAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceAssociateMemberAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceAssociateMemberAccountKey()
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
            (typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.AssociateMemberAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMacieServiceAssociateS3ResourcesKey() {
  return [
    '#X-Amz-Target=MacieService.AssociateS3Resources',
    '/#X-Amz-Target=MacieService.AssociateS3Resources',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceAssociateS3Resources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceAssociateS3ResourcesKey()
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
            (typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.AssociateS3Resources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMacieServiceDisassociateMemberAccountKey() {
  return [
    '#X-Amz-Target=MacieService.DisassociateMemberAccount',
    '/#X-Amz-Target=MacieService.DisassociateMemberAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceDisassociateMemberAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceDisassociateMemberAccountKey()
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
            (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.DisassociateMemberAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMacieServiceDisassociateS3ResourcesKey() {
  return [
    '#X-Amz-Target=MacieService.DisassociateS3Resources',
    '/#X-Amz-Target=MacieService.DisassociateS3Resources',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceDisassociateS3Resources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceDisassociateS3ResourcesKey()
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
            (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.DisassociateS3Resources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMacieServiceListMemberAccountsKey() {
  return [
    '#X-Amz-Target=MacieService.ListMemberAccounts',
    '/#X-Amz-Target=MacieService.ListMemberAccounts',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceListMemberAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceListMemberAccountsKey()
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
            (typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.ListMemberAccounts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMacieServiceListS3ResourcesKey() {
  return [
    '#X-Amz-Target=MacieService.ListS3Resources',
    '/#X-Amz-Target=MacieService.ListS3Resources',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceListS3Resources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceListS3ResourcesKey()
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
            (typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.ListS3Resources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMacieServiceUpdateS3ResourcesKey() {
  return [
    '#X-Amz-Target=MacieService.UpdateS3Resources',
    '/#X-Amz-Target=MacieService.UpdateS3Resources',
    'POST',
  ] as const
}

export function usePostXAmzTargetMacieServiceUpdateS3Resources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMacieServiceUpdateS3ResourcesKey()
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
            (typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MacieService.UpdateS3Resources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
