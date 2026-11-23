import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostPlaycustomappV1AccountsAccountCustomApps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaycustomappV1AccountsAccountCustomAppsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
