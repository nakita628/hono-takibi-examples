import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetMacieServiceAssociateMemberAccountMutationKey() {
  return [
    '#X-Amz-Target=MacieService.AssociateMemberAccount',
    '/#X-Amz-Target=MacieService.AssociateMemberAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceAssociateMemberAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceAssociateMemberAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.AssociateMemberAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceAssociateMemberAccount<
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
                  (typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetMacieServiceAssociateMemberAccountMutationOptions<
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

export function getPostXAmzTargetMacieServiceAssociateS3ResourcesMutationKey() {
  return [
    '#X-Amz-Target=MacieService.AssociateS3Resources',
    '/#X-Amz-Target=MacieService.AssociateS3Resources',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceAssociateS3ResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceAssociateS3ResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.AssociateS3Resources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceAssociateS3Resources<
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
                  (typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']
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
  const mutationDefaults = getPostXAmzTargetMacieServiceAssociateS3ResourcesMutationOptions<
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

export function getPostXAmzTargetMacieServiceDisassociateMemberAccountMutationKey() {
  return [
    '#X-Amz-Target=MacieService.DisassociateMemberAccount',
    '/#X-Amz-Target=MacieService.DisassociateMemberAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceDisassociateMemberAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceDisassociateMemberAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.DisassociateMemberAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceDisassociateMemberAccount<
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
                  (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
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
  const mutationDefaults = getPostXAmzTargetMacieServiceDisassociateMemberAccountMutationOptions<
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

export function getPostXAmzTargetMacieServiceDisassociateS3ResourcesMutationKey() {
  return [
    '#X-Amz-Target=MacieService.DisassociateS3Resources',
    '/#X-Amz-Target=MacieService.DisassociateS3Resources',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceDisassociateS3ResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceDisassociateS3ResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.DisassociateS3Resources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceDisassociateS3Resources<
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
                  (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
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
  const mutationDefaults = getPostXAmzTargetMacieServiceDisassociateS3ResourcesMutationOptions<
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

export function getPostXAmzTargetMacieServiceListMemberAccountsMutationKey() {
  return [
    '#X-Amz-Target=MacieService.ListMemberAccounts',
    '/#X-Amz-Target=MacieService.ListMemberAccounts',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceListMemberAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceListMemberAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.ListMemberAccounts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceListMemberAccounts<
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
                  (typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMacieServiceListMemberAccountsMutationOptions<
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

export function getPostXAmzTargetMacieServiceListS3ResourcesMutationKey() {
  return [
    '#X-Amz-Target=MacieService.ListS3Resources',
    '/#X-Amz-Target=MacieService.ListS3Resources',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceListS3ResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceListS3ResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.ListS3Resources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceListS3Resources<
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
                ReturnType<(typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMacieServiceListS3ResourcesMutationOptions<
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

export function getPostXAmzTargetMacieServiceUpdateS3ResourcesMutationKey() {
  return [
    '#X-Amz-Target=MacieService.UpdateS3Resources',
    '/#X-Amz-Target=MacieService.UpdateS3Resources',
    'POST',
  ] as const
}

export function getPostXAmzTargetMacieServiceUpdateS3ResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMacieServiceUpdateS3ResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MacieService.UpdateS3Resources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMacieServiceUpdateS3Resources<
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
                ReturnType<(typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMacieServiceUpdateS3ResourcesMutationOptions<
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
