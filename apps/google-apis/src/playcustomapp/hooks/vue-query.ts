import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPlaycustomappKey() {
  return ['playcustomapp'] as const
}

export function getPostPlaycustomappV1AccountsAccountCustomAppsMutationKey() {
  return ['playcustomapp', '/playcustomapp/v1/accounts/:account/customApps', 'POST'] as const
}

export function getPostPlaycustomappV1AccountsAccountCustomAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaycustomappV1AccountsAccountCustomAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']
      >,
    ) {
      return parseResponse(
        client.playcustomapp.v1.accounts[':account'].customApps.$post(args, options),
      )
    },
  })
}

export function usePostPlaycustomappV1AccountsAccountCustomApps<
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
                    (typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']
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
  const mutationDefaults = getPostPlaycustomappV1AccountsAccountCustomAppsMutationOptions<
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
