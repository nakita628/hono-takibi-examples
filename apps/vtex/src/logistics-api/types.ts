declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/logistics-capacity/resources/carrier@:capacityType@:shippingPolicyId/time-frames': {
      $get: {
        input: { param: { capacityType: string; shippingPolicyId: string } } & {
          query: { rangeStart: string; rangeEnd: string }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics-capacity/resources/carrier@:capacityType@:shippingPolicyId/time-frames/:windowDayF:windowStartTimeT:windowEndTime': {
      $get: {
        input: {
          param: {
            capacityType: string
            shippingPolicyId: string
            windowDay: string
            windowStartTime: string
            windowEndTime: string
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/carriers/:carrierId/adddayofweekblocked': {
      $post: {
        input: { param: { carrierId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/carriers/:carrierId/getdayofweekblocked': {
      $get: {
        input: { param: { carrierId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/carriers/:carrierId/removedayofweekblocked': {
      $post: {
        input: { param: { carrierId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/docks': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          dockTimeFake: string
          freightTableIds: string[]
          id: string
          name: string
          pickupStoreInfo: {
            additionalInfo: string | null
            address: string | null
            dockId: string | null
            friendlyName: string | null
            isPickupStore: boolean
            storeId: string | null
          }
          priority: number
          salesChannel: string | null
          salesChannels: string[]
          timeFakeOverhead: string
          wmsEndPoint: string
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            address: {
              city: string
              complement: string
              coordinates: number[][]
              country: { acronym: string; name: string }
              neighborhood: string
              number: string
              postalCode: string
              state: string
              street: string
            }
            dockTimeFake: string
            freightTableIds: string[]
            id: string
            name: string
            priority: number
            salesChannel: string | null
            salesChannels: string[]
            timeFakeOverhead: string
            wmsEndPoint: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/docks/:dockId': {
      $delete: {
        input: { param: { dockId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { dockId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          dockTimeFake: string
          freightTableIds: string[]
          id: string
          name: string
          pickupStoreInfo: {
            additionalInfo: string | null
            address: string | null
            dockId: string | null
            friendlyName: string | null
            isPickupStore: boolean
            storeId: string | null
          }
          priority: number
          salesChannel: string | null
          salesChannels: string[]
          timeFakeOverhead: string
          wmsEndPoint: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/docks/:dockId/activation': {
      $post: {
        input: { param: { dockId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/docks/:dockId/deactivation': {
      $post: {
        input: { param: { dockId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/freights/:carrierId/values/update': {
      $post: {
        input: { param: { carrierId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            absoluteMoneyCost: string
            country: string
            maxVolume: number
            operationType: number
            polygon: string
            pricePercent: number
            pricePercentByWeight: number
            timeCost: string
            weightEnd: number
            weightStart: number
            zipCodeEnd: string
            zipCodeStart: string
          }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/freights/:carrierId/:cep/values': {
      $get: {
        input: { param: { carrierId: string; cep: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          absoluteMoneyCost: number
          country: string
          maxVolume: number
          minimumValueInsurance: number
          operationType: number
          polygon: string
          pricePercent: number
          pricePercentByWeight: number
          restrictedFreights: string[]
          timeCost: string
          weightEnd: number
          weightStart: number
          zipCodeEnd: string
          zipCodeStart: string
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/geoshape': {
      $get: {
        input: { query: { page: string; perPage: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { geoShape: { coordinates: number[][] }; name: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/geoshape/:polygonName': {
      $delete: {
        input: { param: { polygonName: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { polygonName: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/holidays': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/holidays/:holidayId': {
      $delete: {
        input: { param: { holidayId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { holidayId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { holidayId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { name: string; startDate: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/pickuppoints': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          accountGroupId?: string | undefined
          accountOwnerId?: string | undefined
          accountOwnerName?: string | undefined
          address?:
            | {
                city?: string | undefined
                complement?: string | undefined
                country?: { acronym?: string | undefined; name?: string | undefined } | undefined
                location?:
                  | { latitude?: number | undefined; longitude?: number | undefined }
                  | undefined
                neighborhood?: string | undefined
                number?: string | undefined
                postalCode?: string | undefined
                state?: string | undefined
                street?: string | undefined
              }
            | undefined
          businessHours?:
            | {
                closingTime?: string | undefined
                dayOfWeek?: number | undefined
                openingTime?: string | undefined
              }[]
            | undefined
          description?: string | undefined
          distance?: number | undefined
          formatted_address?: string | undefined
          id?: string | undefined
          instructions?: string | undefined
          isActive?: boolean | undefined
          isThirdPartyPickup?: boolean | undefined
          name?: string | undefined
          originalId?: string | undefined
          parentAccountName?: string | undefined
          pickupHolidays?: string[] | undefined
          seller?: string | undefined
          tagsLabel?: string[] | undefined
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/pickuppoints/_search': {
      $get: {
        input: { query: { page: string; pageSize: string; keyword: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/pickuppoints/:pickupPointId': {
      $delete: {
        input: { param: { pickupPointId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { pickupPointId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          address: {
            city: string
            complement: string
            country: { acronym: string; name: string }
            location: { latitude: number; longitude: number }
            neighborhood: string
            number: string
            postalCode: string
            state: string
            street: string
          }
          businessHours: { closingTime: string; dayOfWeek: number; openingTime: string }[]
          description: string
          formatted_address: string
          id: string
          instructions: string
          isActive: boolean
          name: string
          warehouseId: string | null
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { pickupPointId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            address: {
              city: string
              complement: string
              country: { acronym: string; name: string }
              location: { latitude: number; longitude: number }
              neighborhood: string
              number: string
              postalCode: string
              reference: string
              state: string
              street: string
            }
            businessHours: { closingTime: string; dayOfWeek: number; openingTime: string }[]
            description: string
            formatted_address: string
            id: string
            instructions: string
            isActive: boolean
            isThirdPartyPickup?: boolean | undefined
            name: string
            tagsLabel: string[]
          }
        }
        output: {
          address: {
            city: string
            complement: string
            country: { acronym: string; name: string }
            location: { latitude: number; longitude: number }
            neighborhood: string
            number: string
            postalCode: string
            reference: string | null
            state: string
            street: string
          }
          businessHours: { closingTime: string; dayOfWeek: number; openingTime: string }[]
          description: string
          formatted_address: string
          id: string
          instructions: string
          isActive: boolean
          name: string
          pickupHolidays: string[]
          tagsLabel: string[]
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/warehouses': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          id: string
          isActive: boolean
          name: string
          pickupPointIds: { [x: string]: unknown }[]
          priority: number
          warehouseDocks: { cost: number; dockId: string; time: string }[]
        }[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            id: string
            name: string
            warehouseDocks: {
              cost: string
              costToDisplay: string
              dockId: string
              name: string
              time: string
              translateDays: string
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/warehouses/:warehouseId': {
      $delete: {
        input: { param: { warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          id?: string | undefined
          isActive?: boolean | undefined
          name?: string | undefined
          pickupPointIds?: { [x: string]: unknown }[] | undefined
          priority?: number | undefined
          warehouseDocks?: { cost: number; dockId: string; time: string }[] | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/warehouses/:warehouseId/activation': {
      $post: {
        input: { param: { warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/configuration/warehouses/:warehouseId/deactivation': {
      $post: {
        input: { param: { warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:itemId/warehouses/:warehouseId/dispatched': {
      $get: {
        input: { param: { itemId: string; warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          availableQuantity?: number | undefined
          dispatchedReservationsQuantity?: number | undefined
          isUnlimitedQuantity?: boolean | undefined
          quantity?: number | undefined
          skuId?: string | undefined
          totalReservedQuantity?: number | undefined
          warehouseId?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId': {
      $get: {
        input: { param: { skuId: string; dockId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          availableQuantity?: number | undefined
          dateOfSupplyUtc?: string | undefined
          deliveryChannel?: string[] | undefined
          dockId?: string | undefined
          isUnlimited?: boolean | undefined
          keepSellingAfterExpiration?: boolean | undefined
          reservedQuantity?: number | undefined
          salesChannel?: string[] | undefined
          skuId?: string | undefined
          timeToRefill?: string | undefined
          totalQuantity?: number | undefined
          transfer?: string | undefined
          warehouseId?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:skuId/docks/:dockId/warehouses/:warehouseId': {
      $get: {
        input: { param: { skuId: string; dockId: string; warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          availableQuantity?: number | undefined
          dateOfSupplyUtc?: string | undefined
          deliveryChannel?: string[] | undefined
          dockId?: string | undefined
          isUnlimited?: boolean | undefined
          keepSellingAfterExpiration?: boolean | undefined
          reservedQuantity?: number | undefined
          salesChannel?: string[] | undefined
          skuId?: string | undefined
          timeToRefill?: string | undefined
          totalQuantity?: number | undefined
          transfer?: string | undefined
          warehouseId?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId': {
      $get: {
        input: { param: { skuId: string; warehouseId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          availableQuantity?: number | undefined
          dateOfSupplyUtc?: string | undefined
          deliveryChannel?: string[] | undefined
          dockId?: string | undefined
          isUnlimited?: boolean | undefined
          keepSellingAfterExpiration?: boolean | undefined
          reservedQuantity?: number | undefined
          salesChannel?: string[] | undefined
          skuId?: string | undefined
          timeToRefill?: string | undefined
          totalQuantity?: number | undefined
          transfer?: string | undefined
          warehouseId?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots': {
      $get: {
        input: { param: { skuId: string; warehouseId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots/:supplyLotId': {
      $put: {
        input: { param: { skuId: string; warehouseId: string; supplyLotId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: { dateOfSupplyUtc: string; keepSellingAfterExpiration: boolean; quantity: number }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/items/:skuId/warehouses/:warehouseId/supplyLots/:supplyLotId/transfer': {
      $post: {
        input: { param: { skuId: string; warehouseId: string; supplyLotId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/reservations': {
      $post: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            autorizationExpirationTTL: string
            deliveryItemOptions: {
              aditionalTimeBlockedDays: string
              deliveryWindows: string[]
              dockId: string
              dockTime: string
              item: {
                additionalHandlingTime: string
                dimension: { height: number; length: number; weight: number; width: number }
                groupItemId: string | null
                id: string
                kitItem: string[]
                price: number
                quantity: number
              }
              listPrice: number
              location: {
                country: string
                inStore: { IsCheckedIn: boolean; StoreId: string | null }
                zipCode: string
              }
              promotionalPrice: number
              slaType: string
              slaTypeName: string
              timeToDockPlusDockTime: string
              totalTime: string
              transitTime: string
              wareHouseId: string | null
            }[]
            lockId: string | null
            salesChannel: string
          }
        }
        output: {
          AuthorizedDateUtc: string
          CanceledDateUtc: string
          ConfirmedDateUtc: string
          Errors: string[]
          IsSucess: boolean
          LastUpdateDateUtc: string
          LockId: string
          MaximumConfirmationDateUtc: string
          PickupPointItemOptions: string | null
          ReservationDateUtc: string
          SalesChannel: string
          SlaRequest: {
            deliveryWindows: string | null
            dockId: string
            dockTime: string
            freightTableId: string
            freightTableName: string
            item: {
              additionalHandlingTime: string
              dimension: {
                height: number
                length: number
                maxSumDimension: number
                weight: number
                width: number
              }
              groupItemId: string | null
              id: string
              kitItem: string[]
              modal: string | null
              price: number
              quantity: number
              unlimitedQuantity: boolean
            }
            listPrice: number
            location: {
              country: string
              deliveryPointId: string | null
              inStore: { IsCheckedIn: boolean; StoreId: string }
              point: string | null
              zipCode: string
            }
            pickupStoreInfo: string | null
            promotionalPrice: number
            slaType: string
            slaTypeName: string
            timeToDockPlusDockTime: string
            totalTime: string
            transitTime: string
            wareHouseId: string
            wmsEndPoint: string
          }[]
          Status: number
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/reservations/:reservationId': {
      $get: {
        input: { param: { reservationId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          AuthorizedDateUtc?: string | undefined
          CanceledDateUtc?: string | undefined
          ConfirmedDateUtc?: string | undefined
          Errors?: string[] | undefined
          IsSucess?: boolean | undefined
          LastUpdateDateUtc?: string | undefined
          LockId?: string | undefined
          MaximumConfirmationDateUtc?: string | undefined
          PickupPointItemOptions?: string | undefined
          ReservationDateUtc?: string | undefined
          SalesChannel?: string | undefined
          SlaRequest?:
            | {
                deliveryWindows?: (string | null) | undefined
                dockId?: string | undefined
                dockTime?: string | undefined
                freightTableId?: string | undefined
                freightTableName?: string | undefined
                item?:
                  | {
                      additionalHandlingTime: string
                      dimension: {
                        height: number
                        length: number
                        maxSumDimension: number
                        weight: number
                        width: number
                      }
                      groupItemId: string | null
                      id: string
                      kitItem: string[]
                      modal: string | null
                      price: number
                      quantity: number
                      unlimitedQuantity: boolean
                    }
                  | undefined
                listPrice?: number | undefined
                location?:
                  | {
                      country: string
                      deliveryPointId: string | null
                      inStore: { IsCheckedIn: boolean; StoreId: string }
                      point: string | null
                      zipCode: string
                    }
                  | undefined
                pickupStoreInfo?: (string | null) | undefined
                promotionalPrice?: number | undefined
                slaType?: string | undefined
                slaTypeName?: string | undefined
                timeToDockPlusDockTime?: string | undefined
                totalTime?: string | undefined
                transitTime?: string | undefined
                wareHouseId?: string | undefined
                wmsEndPoint?: string | undefined
              }[]
            | undefined
          Status?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/reservations/:reservationId/acknowledge': {
      $post: {
        input: { param: { reservationId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/reservations/:reservationId/cancel': {
      $post: {
        input: { param: { reservationId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/reservations/:reservationId/confirm': {
      $post: {
        input: { param: { reservationId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/reservations/:warehouseId/:skuId': {
      $get: {
        input: { param: { warehouseId: string; skuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/skus/:skuId': {
      $get: {
        input: { param: { skuId: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          balance: {
            hasUnlimitedQuantity: boolean
            reservedQuantity: number
            totalQuantity: number
            warehouseId: string
            warehouseName: string
          }[]
          skuId: string
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/inventory/skus/:skuId/warehouses/:warehouseId': {
      $put: {
        input: { param: { skuId: string; warehouseId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            dateUtcOnBalanceSystem?: string | undefined
            quantity: number
            'timeToRefill (deprecated)': string
            unlimitedQuantity: boolean
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/shipping-policies': {
      $get: {
        input: { query: { page: string; perPage: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            businessHourSettings: {
              carrierBusinessHours: {
                closingTime: string
                dayOfWeek: number
                openingTime: string
              }[]
              isOpenOutsideBusinessHours: boolean
            }
            carrierSchedule?:
              | { dayOfWeek?: number | undefined; timeLimit?: string | undefined }[]
              | undefined
            cubicWeightSettings: {
              minimunAcceptableVolumetricWeight: number
              volumetricFactor: number
            }
            deliveryScheduleSettings: {
              dayOfWeekForDelivery: {
                dayOfWeek: number
                deliveryRanges: {
                  deliveryCapacity?: { capacityType: string; maxValue: number }[] | undefined
                  endTime: string
                  listPrice: number
                  startTime: string
                }[]
              }[]
              maxRangeDelivery: number
              useDeliverySchedule: boolean
            }
            id: string
            isActive: boolean
            maxDimension: { largestMeasure: number; maxMeasureSum: number }
            maximumValueAceptable: number
            minimumValueAceptable: number
            modalSettings: {
              modals: { [x: string]: unknown }[]
              useOnlyItemsWithDefinedModal: boolean
            }
            name: string
            numberOfItemsPerShipment: number
            pickupPointsSettings: {
              pickupPointIds: { [x: string]: unknown }[]
              pickupPointTags: { [x: string]: unknown }[]
              sellers: { [x: string]: unknown }[]
            }
            shippingMethod: string
            weekendAndHolidays: { holiday: boolean; saturday: boolean; sunday: boolean }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/shipping-policies/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { header: { Accept: string; 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            deliveryOnWeekends: boolean
            deliveryScheduleSettings?:
              | {
                  dayOfWeekForDelivery: {
                    dayOfWeek: number
                    deliveryRanges: {
                      deliveryCapacity?: { capacityType: string; maxValue: number }[] | undefined
                      endTime: string
                      listPrice: number
                      startTime: string
                    }[]
                  }[]
                  maxRangeDelivery: number
                  useDeliverySchedule: boolean
                }
              | undefined
            isActive: boolean
            maxDimension: { largestMeasure: number; maxMeasureSum: number }
            name: string
            shippingMethod: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logistics/pvt/shipping/calculate': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            items: {
              additionalHandlingTime: string
              dimension: { height: number; length: number; weight: number; width: number }
              groupItemId: string | null
              id: string
              kitItem: {
                additionalHandlingTime: string
                dimension: { height: number; length: number; weight: number; width: number }
                groupItemId: string | null
                id: string
                kitItem: string[]
                price: number
                quantity: number
              }[]
              price: number
              quantity: number
            }[]
            location: { country: string; point: number[]; zipCode: string }
            salesChannel: string
          }[]
        }
        output: {
          aditionalTimeBlockedDays: string
          availabilityQuantity: number
          carrierSchedule: string[]
          coordinates: string | null
          deliveryOnWeekends: boolean
          deliveryWindows: {
            endDateUtc?: string | undefined
            listPrice?: number | undefined
            startDateUtc?: string | undefined
          }[]
          dockId: string
          dockTime: string
          freightTableId: string
          freightTableName: string
          itemId: string
          listPrice: number
          location: {
            country: string
            deliveryPointId: string | null
            inStore: { IsCheckedIn: boolean; StoreId: string }
            point: string | null
            zipCode: string
          }
          pickupStoreInfo: string | null
          quantity: number
          restrictedFreight: string | null
          salesChannel: string
          slaType: string
          slaTypeName: string
          timeToDockPlusDockTime: string
          totalTime: string
          transitTime: string
          wareHouseId: string
        }[][]
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
