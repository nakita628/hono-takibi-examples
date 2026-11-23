import { createRoute, z } from '@hono/zod-openapi'

type OBBCAData1Type = {
  ProductDetails?: {
    Segment?: (
      | 'ClientAccount'
      | 'Standard'
      | 'NonCommercialChaitiesClbSoc'
      | 'NonCommercialPublicAuthGovt'
      | 'Religious'
      | 'SectorSpecific'
      | 'Startup'
      | 'Switcher'
    )[]
    FeeFreeLength?: number
    FeeFreeLengthPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
    Notes?: string[]
  }
  CreditInterest?: {
    TierBandSet: {
      TierBandMethod: 'Banded' | 'Tiered' | 'Whole'
      CalculationMethod?: 'Compound' | 'SimpleInterest'
      Destination: 'PayAway' | 'SelfCredit'
      Notes?: string[]
      TierBand: {
        Identification?: string
        TierValueMinimum: string
        TierValueMaximum?: string
        CalculationFrequency?:
          | 'Daily'
          | 'HalfYearly'
          | 'Monthly'
          | 'Other'
          | 'Quarterly'
          | 'PerStatementDate'
          | 'Weekly'
          | 'Yearly'
        ApplicationFrequency:
          | 'Daily'
          | 'HalfYearly'
          | 'Monthly'
          | 'Other'
          | 'Quarterly'
          | 'PerStatementDate'
          | 'Weekly'
          | 'Yearly'
        DepositInterestAppliedCoverage?: 'Banded' | 'Tiered' | 'Whole'
        FixedVariableInterestRateType: 'Fixed' | 'Variable'
        AER: string
        BankInterestRateType?: 'Gross' | 'Other'
        BankInterestRate?: string
        Notes?: string[]
        OtherBankInterestType?: { Code?: string; Name: string; Description: string }
        OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
        OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
      }[]
    }[]
  }
  Overdraft?: {
    Notes?: string[]
    OverdraftTierBandSet: {
      TierBandMethod: 'Banded' | 'Tiered' | 'Whole'
      OverdraftType?: 'Committed' | 'OnDemand'
      Identification?: string
      AuthorisedIndicator?: boolean
      BufferAmount?: string
      Notes?: string[]
      OverdraftTierBand: {
        Identification?: string
        TierValueMin: string
        TierValueMax?: string
        EAR?: string
        RepresentativeAPR?: string
        AgreementLengthMin?: number
        AgreementLengthMax?: number
        AgreementPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
        OverdraftInterestChargingCoverage?: 'Banded' | 'Tiered' | 'Whole'
        BankGuaranteedIndicator?: boolean
        Notes?: string[]
        OverdraftFeesCharges?: {
          OverdraftFeeChargeCap?: {
            FeeType: (
              | 'ArrangedOverdraft'
              | 'AnnualReview'
              | 'EmergencyBorrowing'
              | 'BorrowingItem'
              | 'OverdraftRenewal'
              | 'OverdraftSetup'
              | 'Surcharge'
              | 'TempOverdraft'
              | 'UnauthorisedBorrowing'
              | 'UnauthorisedPaidTrans'
              | 'Other'
              | 'UnauthorisedUnpaidTrans'
            )[]
            MinMaxType: 'Minimum' | 'Maximum'
            FeeCapOccurrence?: number
            FeeCapAmount?: string
            CappingPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
            Notes?: string[]
            OtherFeeType?: { Code?: string; Name: string; Description: string }[]
          }[]
          OverdraftFeeChargeDetail: {
            FeeType:
              | 'ArrangedOverdraft'
              | 'AnnualReview'
              | 'EmergencyBorrowing'
              | 'BorrowingItem'
              | 'OverdraftRenewal'
              | 'OverdraftSetup'
              | 'Surcharge'
              | 'TempOverdraft'
              | 'UnauthorisedBorrowing'
              | 'UnauthorisedPaidTrans'
              | 'Other'
              | 'UnauthorisedUnpaidTrans'
            NegotiableIndicator?: boolean
            OverdraftControlIndicator?: boolean
            IncrementalBorrowingAmount?: string
            FeeAmount?: string
            FeeRate?: string
            FeeRateType?: 'Gross' | 'Other'
            ApplicationFrequency:
              | 'OnClosing'
              | 'OnOpening'
              | 'ChargingPeriod'
              | 'Daily'
              | 'PerItem'
              | 'Monthly'
              | 'OnAnniversary'
              | 'Other'
              | 'PerHundredPounds'
              | 'PerHour'
              | 'PerOccurrence'
              | 'PerSheet'
              | 'PerTransaction'
              | 'PerTransactionAmount'
              | 'PerTransactionPercentage'
              | 'Quarterly'
              | 'SixMonthly'
              | 'StatementMonthly'
              | 'Weekly'
              | 'Yearly'
            CalculationFrequency?:
              | 'OnClosing'
              | 'OnOpening'
              | 'ChargingPeriod'
              | 'Daily'
              | 'PerItem'
              | 'Monthly'
              | 'OnAnniversary'
              | 'Other'
              | 'PerHundredPounds'
              | 'PerHour'
              | 'PerOccurrence'
              | 'PerSheet'
              | 'PerTransaction'
              | 'PerTransactionAmount'
              | 'PerTransactionPercentage'
              | 'Quarterly'
              | 'SixMonthly'
              | 'StatementMonthly'
              | 'Weekly'
              | 'Yearly'
            Notes?: string[]
            OverdraftFeeChargeCap?: {
              FeeType: (
                | 'ArrangedOverdraft'
                | 'AnnualReview'
                | 'EmergencyBorrowing'
                | 'BorrowingItem'
                | 'OverdraftRenewal'
                | 'OverdraftSetup'
                | 'Surcharge'
                | 'TempOverdraft'
                | 'UnauthorisedBorrowing'
                | 'UnauthorisedPaidTrans'
                | 'Other'
                | 'UnauthorisedUnpaidTrans'
              )[]
              MinMaxType: 'Minimum' | 'Maximum'
              FeeCapOccurrence?: number
              FeeCapAmount?: string
              CappingPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
              Notes?: string[]
              OtherFeeType?: { Code?: string; Name: string; Description: string }[]
            }[]
            OtherFeeType?: { Code?: string; Name: string; Description: string }
            OtherFeeRateType?: { Code?: string; Name: string; Description: string }
            OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
            OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
          }[]
        }[]
      }[]
      OverdraftFeesCharges?: {
        OverdraftFeeChargeCap?: {
          FeeType: (
            | 'ArrangedOverdraft'
            | 'AnnualReview'
            | 'EmergencyBorrowing'
            | 'BorrowingItem'
            | 'OverdraftRenewal'
            | 'OverdraftSetup'
            | 'Surcharge'
            | 'TempOverdraft'
            | 'UnauthorisedBorrowing'
            | 'UnauthorisedPaidTrans'
            | 'Other'
            | 'UnauthorisedUnpaidTrans'
          )[]
          MinMaxType: 'Minimum' | 'Maximum'
          FeeCapOccurrence?: number
          FeeCapAmount?: string
          CappingPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
          Notes?: string[]
          OtherFeeType?: { Code?: string; Name: string; Description: string }[]
        }[]
        OverdraftFeeChargeDetail: {
          FeeType:
            | 'ArrangedOverdraft'
            | 'AnnualReview'
            | 'EmergencyBorrowing'
            | 'BorrowingItem'
            | 'OverdraftRenewal'
            | 'OverdraftSetup'
            | 'Surcharge'
            | 'TempOverdraft'
            | 'UnauthorisedBorrowing'
            | 'UnauthorisedPaidTrans'
            | 'Other'
            | 'UnauthorisedUnpaidTrans'
          NegotiableIndicator?: boolean
          OverdraftControlIndicator?: boolean
          IncrementalBorrowingAmount?: string
          FeeAmount?: string
          FeeRate?: string
          FeeRateType?: 'Gross' | 'Other'
          ApplicationFrequency:
            | 'OnClosing'
            | 'OnOpening'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAnniversary'
            | 'Other'
            | 'PerHundredPounds'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
          CalculationFrequency?:
            | 'OnClosing'
            | 'OnOpening'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAnniversary'
            | 'Other'
            | 'PerHundredPounds'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
          Notes?: string[]
          OverdraftFeeChargeCap?: {
            FeeType: (
              | 'ArrangedOverdraft'
              | 'AnnualReview'
              | 'EmergencyBorrowing'
              | 'BorrowingItem'
              | 'OverdraftRenewal'
              | 'OverdraftSetup'
              | 'Surcharge'
              | 'TempOverdraft'
              | 'UnauthorisedBorrowing'
              | 'UnauthorisedPaidTrans'
              | 'Other'
              | 'UnauthorisedUnpaidTrans'
            )[]
            MinMaxType: 'Minimum' | 'Maximum'
            FeeCapOccurrence?: number
            FeeCapAmount?: string
            CappingPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
            Notes?: string[]
            OtherFeeType?: { Code?: string; Name: string; Description: string }[]
          }[]
          OtherFeeType?: { Code?: string; Name: string; Description: string }
          OtherFeeRateType?: { Code?: string; Name: string; Description: string }
          OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
          OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
        }[]
      }[]
    }[]
  }
  OtherFeesCharges?: {
    TariffType?: 'Electronic' | 'Mixed' | 'Other'
    TariffName?: string
    OtherTariffType?: { Code?: string; Name: string; Description: string }
    FeeChargeDetail: {
      FeeCategory: 'Other' | 'Servicing'
      FeeType:
        | 'Other'
        | 'ServiceCAccountFee'
        | 'ServiceCAccountFeeMonthly'
        | 'ServiceCAccountFeeQuarterly'
        | 'ServiceCFixedTariff'
        | 'ServiceCBusiDepAccBreakage'
        | 'ServiceCMinimumMonthlyFee'
        | 'ServiceCOther'
      NegotiableIndicator?: boolean
      FeeAmount?: string
      FeeRate?: string
      FeeRateType?: 'Gross' | 'Other'
      ApplicationFrequency:
        | 'OnClosing'
        | 'OnOpening'
        | 'ChargingPeriod'
        | 'Daily'
        | 'PerItem'
        | 'Monthly'
        | 'OnAnniversary'
        | 'Other'
        | 'PerHundredPounds'
        | 'PerHour'
        | 'PerOccurrence'
        | 'PerSheet'
        | 'PerTransaction'
        | 'PerTransactionAmount'
        | 'PerTransactionPercentage'
        | 'Quarterly'
        | 'SixMonthly'
        | 'StatementMonthly'
        | 'Weekly'
        | 'Yearly'
      CalculationFrequency?:
        | 'OnClosing'
        | 'OnOpening'
        | 'ChargingPeriod'
        | 'Daily'
        | 'PerItem'
        | 'Monthly'
        | 'OnAnniversary'
        | 'Other'
        | 'PerHundredPounds'
        | 'PerHour'
        | 'PerOccurrence'
        | 'PerSheet'
        | 'PerTransaction'
        | 'PerTransactionAmount'
        | 'PerTransactionPercentage'
        | 'Quarterly'
        | 'SixMonthly'
        | 'StatementMonthly'
        | 'Weekly'
        | 'Yearly'
      Notes?: string[]
      FeeChargeCap?: {
        FeeType: (
          | 'Other'
          | 'ServiceCAccountFee'
          | 'ServiceCAccountFeeMonthly'
          | 'ServiceCAccountFeeQuarterly'
          | 'ServiceCFixedTariff'
          | 'ServiceCBusiDepAccBreakage'
          | 'ServiceCMinimumMonthlyFee'
          | 'ServiceCOther'
        )[]
        MinMaxType: 'Minimum' | 'Maximum'
        FeeCapOccurrence?: number
        FeeCapAmount?: string
        CappingPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
        Notes?: string[]
        OtherFeeType?: { Code?: string; Name: string; Description: string }[]
      }[]
      OtherFeeCategoryType?: { Code?: string; Name: string; Description: string }
      OtherFeeType?: {
        Code?: string
        FeeCategory: 'Other' | 'Servicing'
        Name: string
        Description: string
      }
      OtherFeeRateType?: { Code?: string; Name: string; Description: string }
      OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
      OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
      FeeApplicableRange?: {
        MinimumAmount?: string
        MaximumAmount?: string
        MinimumRate?: string
        MaximumRate?: string
      }
    }[]
    FeeChargeCap?: {
      FeeType: (
        | 'Other'
        | 'ServiceCAccountFee'
        | 'ServiceCAccountFeeMonthly'
        | 'ServiceCAccountFeeQuarterly'
        | 'ServiceCFixedTariff'
        | 'ServiceCBusiDepAccBreakage'
        | 'ServiceCMinimumMonthlyFee'
        | 'ServiceCOther'
      )[]
      MinMaxType: 'Minimum' | 'Maximum'
      FeeCapOccurrence?: number
      FeeCapAmount?: string
      CappingPeriod?: 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
      Notes?: string[]
      OtherFeeType?: { Code?: string; Name: string; Description: string }[]
    }[]
  }[]
}

type OBPCAData1Type = {
  ProductDetails?: {
    Segment?: (
      | 'Basic'
      | 'BenefitAndReward'
      | 'CreditInterest'
      | 'Cashback'
      | 'General'
      | 'Graduate'
      | 'Other'
      | 'Overdraft'
      | 'Packaged'
      | 'Premium'
      | 'Reward'
      | 'Student'
      | 'YoungAdult'
      | 'Youth'
    )[]
    MonthlyMaximumCharge?: string
    Notes?: string[]
  }
  CreditInterest?: {
    TierBandSet: {
      TierBandMethod: 'Tiered' | 'Whole'
      CalculationMethod?: 'Compound' | 'SimpleInterest'
      Destination?: 'PayAway' | 'SelfCredit'
      Notes?: string[]
      TierBand: {
        Identification?: string
        TierValueMinimum: string
        TierValueMaximum?: string
        CalculationFrequency?:
          | 'PerAcademicTerm'
          | 'Daily'
          | 'HalfYearly'
          | 'Monthly'
          | 'Other'
          | 'Quarterly'
          | 'PerStatementDate'
          | 'Weekly'
          | 'Yearly'
        ApplicationFrequency:
          | 'PerAcademicTerm'
          | 'Daily'
          | 'HalfYearly'
          | 'Monthly'
          | 'Other'
          | 'Quarterly'
          | 'PerStatementDate'
          | 'Weekly'
          | 'Yearly'
        DepositInterestAppliedCoverage?: 'Tiered' | 'Whole'
        FixedVariableInterestRateType: 'Fixed' | 'Variable'
        AER: string
        BankInterestRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other'
        BankInterestRate?: string
        Notes?: string[]
        OtherBankInterestType?: { Code?: string; Name: string; Description: string }
        OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
        OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
      }[]
    }[]
  }
  Overdraft?: {
    Notes?: string[]
    OverdraftTierBandSet: {
      TierBandMethod: 'Tiered' | 'Whole' | 'Banded'
      OverdraftType?: 'Committed' | 'OnDemand' | 'Other'
      Identification?: string
      AuthorisedIndicator?: boolean
      BufferAmount?: string
      Notes?: string[]
      OverdraftTierBand: {
        Identification?: string
        TierValueMin: string
        TierValueMax?: string
        OverdraftInterestChargingCoverage?: 'Tiered' | 'Whole'
        BankGuaranteedIndicator?: boolean
        EAR?: string
        RepresentativeAPR?: string
        Notes?: string[]
        OverdraftFeesCharges?: {
          OverdraftFeeChargeCap?: {
            FeeType: (
              | 'ArrangedOverdraft'
              | 'EmergencyBorrowing'
              | 'BorrowingItem'
              | 'OverdraftRenewal'
              | 'AnnualReview'
              | 'OverdraftSetup'
              | 'Surcharge'
              | 'TempOverdraft'
              | 'UnauthorisedBorrowing'
              | 'UnauthorisedPaidTrans'
              | 'Other'
              | 'UnauthorisedUnpaidTrans'
            )[]
            OverdraftControlIndicator?: boolean
            MinMaxType: 'Minimum' | 'Maximum'
            FeeCapOccurrence?: number
            FeeCapAmount?: string
            CappingPeriod?:
              | 'AcademicTerm'
              | 'Day'
              | 'Half Year'
              | 'Month'
              | 'Quarter'
              | 'Week'
              | 'Year'
            Notes?: string[]
            OtherFeeType?: { Code?: string; Name: string; Description: string }[]
          }[]
          OverdraftFeeChargeDetail: {
            FeeType:
              | 'ArrangedOverdraft'
              | 'EmergencyBorrowing'
              | 'BorrowingItem'
              | 'OverdraftRenewal'
              | 'AnnualReview'
              | 'OverdraftSetup'
              | 'Surcharge'
              | 'TempOverdraft'
              | 'UnauthorisedBorrowing'
              | 'UnauthorisedPaidTrans'
              | 'Other'
              | 'UnauthorisedUnpaidTrans'
            OverdraftControlIndicator?: boolean
            IncrementalBorrowingAmount?: string
            FeeAmount?: string
            FeeRate?: string
            FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other'
            ApplicationFrequency:
              | 'AccountClosing'
              | 'AccountOpening'
              | 'AcademicTerm'
              | 'ChargingPeriod'
              | 'Daily'
              | 'PerItem'
              | 'Monthly'
              | 'OnAccountAnniversary'
              | 'Other'
              | 'PerHour'
              | 'PerOccurrence'
              | 'PerSheet'
              | 'PerTransaction'
              | 'PerTransactionAmount'
              | 'PerTransactionPercentage'
              | 'Quarterly'
              | 'SixMonthly'
              | 'StatementMonthly'
              | 'Weekly'
              | 'Yearly'
            CalculationFrequency?:
              | 'AccountClosing'
              | 'AccountOpening'
              | 'AcademicTerm'
              | 'ChargingPeriod'
              | 'Daily'
              | 'PerItem'
              | 'Monthly'
              | 'OnAccountAnniversary'
              | 'Other'
              | 'PerHour'
              | 'PerOccurrence'
              | 'PerSheet'
              | 'PerTransaction'
              | 'PerTransactionAmount'
              | 'PerTransactionPercentage'
              | 'Quarterly'
              | 'SixMonthly'
              | 'StatementMonthly'
              | 'Weekly'
              | 'Yearly'
            Notes?: string[]
            OtherFeeType?: { Code?: string; Name: string; Description: string }
            OtherFeeRateType?: { Code?: string; Name: string; Description: string }
            OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
            OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
            OverdraftFeeChargeCap?: {
              FeeType: (
                | 'ArrangedOverdraft'
                | 'EmergencyBorrowing'
                | 'BorrowingItem'
                | 'OverdraftRenewal'
                | 'AnnualReview'
                | 'OverdraftSetup'
                | 'Surcharge'
                | 'TempOverdraft'
                | 'UnauthorisedBorrowing'
                | 'UnauthorisedPaidTrans'
                | 'Other'
                | 'UnauthorisedUnpaidTrans'
              )[]
              OverdraftControlIndicator?: boolean
              MinMaxType: 'Minimum' | 'Maximum'
              FeeCapOccurrence?: number
              FeeCapAmount?: string
              CappingPeriod?:
                | 'AcademicTerm'
                | 'Day'
                | 'Half Year'
                | 'Month'
                | 'Quarter'
                | 'Week'
                | 'Year'
              Notes?: string[]
              OtherFeeType?: { Code?: string; Name: string; Description: string }[]
            }
          }[]
        }[]
      }[]
      OverdraftFeesCharges?: {
        OverdraftFeeChargeCap?: {
          FeeType: (
            | 'ArrangedOverdraft'
            | 'EmergencyBorrowing'
            | 'BorrowingItem'
            | 'OverdraftRenewal'
            | 'AnnualReview'
            | 'OverdraftSetup'
            | 'Surcharge'
            | 'TempOverdraft'
            | 'UnauthorisedBorrowing'
            | 'UnauthorisedPaidTrans'
            | 'Other'
            | 'UnauthorisedUnpaidTrans'
          )[]
          OverdraftControlIndicator?: boolean
          MinMaxType: 'Minimum' | 'Maximum'
          FeeCapOccurrence?: number
          FeeCapAmount?: string
          CappingPeriod?:
            | 'AcademicTerm'
            | 'Day'
            | 'Half Year'
            | 'Month'
            | 'Quarter'
            | 'Week'
            | 'Year'
          Notes?: string[]
          OtherFeeType?: { Code?: string; Name: string; Description: string }[]
        }[]
        OverdraftFeeChargeDetail: {
          FeeType:
            | 'ArrangedOverdraft'
            | 'EmergencyBorrowing'
            | 'BorrowingItem'
            | 'OverdraftRenewal'
            | 'AnnualReview'
            | 'OverdraftSetup'
            | 'Surcharge'
            | 'TempOverdraft'
            | 'UnauthorisedBorrowing'
            | 'UnauthorisedPaidTrans'
            | 'Other'
            | 'UnauthorisedUnpaidTrans'
          OverdraftControlIndicator?: boolean
          IncrementalBorrowingAmount?: string
          FeeAmount?: string
          FeeRate?: string
          FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other'
          ApplicationFrequency:
            | 'AccountClosing'
            | 'AccountOpening'
            | 'AcademicTerm'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAccountAnniversary'
            | 'Other'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
          CalculationFrequency?:
            | 'AccountClosing'
            | 'AccountOpening'
            | 'AcademicTerm'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAccountAnniversary'
            | 'Other'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
          Notes?: string[]
          OtherFeeType?: { Code?: string; Name: string; Description: string }
          OtherFeeRateType?: { Code?: string; Name: string; Description: string }
          OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
          OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
          OverdraftFeeChargeCap?: {
            FeeType: (
              | 'ArrangedOverdraft'
              | 'EmergencyBorrowing'
              | 'BorrowingItem'
              | 'OverdraftRenewal'
              | 'AnnualReview'
              | 'OverdraftSetup'
              | 'Surcharge'
              | 'TempOverdraft'
              | 'UnauthorisedBorrowing'
              | 'UnauthorisedPaidTrans'
              | 'Other'
              | 'UnauthorisedUnpaidTrans'
            )[]
            OverdraftControlIndicator?: boolean
            MinMaxType: 'Minimum' | 'Maximum'
            FeeCapOccurrence?: number
            FeeCapAmount?: string
            CappingPeriod?:
              | 'AcademicTerm'
              | 'Day'
              | 'Half Year'
              | 'Month'
              | 'Quarter'
              | 'Week'
              | 'Year'
            Notes?: string[]
            OtherFeeType?: { Code?: string; Name: string; Description: string }[]
          }
        }[]
      }[]
    }[]
  }
  OtherFeesCharges?: {
    FeeChargeDetail: {
      FeeCategory: 'Other' | 'Servicing'
      FeeType: 'ServiceCAccountFee' | 'ServiceCAccountFeeMonthly' | 'ServiceCOther' | 'Other'
      FeeAmount?: string
      FeeRate?: string
      FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other'
      ApplicationFrequency:
        | 'AccountClosing'
        | 'AccountOpening'
        | 'AcademicTerm'
        | 'ChargingPeriod'
        | 'Daily'
        | 'PerItem'
        | 'Monthly'
        | 'OnAccountAnniversary'
        | 'Other'
        | 'PerHour'
        | 'PerOccurrence'
        | 'PerSheet'
        | 'PerTransaction'
        | 'PerTransactionAmount'
        | 'PerTransactionPercentage'
        | 'Quarterly'
        | 'SixMonthly'
        | 'StatementMonthly'
        | 'Weekly'
        | 'Yearly'
      CalculationFrequency?:
        | 'AccountClosing'
        | 'AccountOpening'
        | 'AcademicTerm'
        | 'ChargingPeriod'
        | 'Daily'
        | 'PerItem'
        | 'Monthly'
        | 'OnAccountAnniversary'
        | 'Other'
        | 'PerHour'
        | 'PerOccurrence'
        | 'PerSheet'
        | 'PerTransaction'
        | 'PerTransactionAmount'
        | 'PerTransactionPercentage'
        | 'Quarterly'
        | 'SixMonthly'
        | 'StatementMonthly'
        | 'Weekly'
        | 'Yearly'
      Notes?: string[]
      OtherFeeCategoryType?: { Code?: string; Name: string; Description: string }
      OtherFeeType?: {
        Code?: string
        FeeCategory: 'Other' | 'Servicing'
        Name: string
        Description: string
      }
      OtherFeeRateType?: { Code?: string; Name: string; Description: string }
      OtherApplicationFrequency?: { Code?: string; Name: string; Description: string }
      OtherCalculationFrequency?: { Code?: string; Name: string; Description: string }
      FeeChargeCap?: {
        FeeType: ('ServiceCAccountFee' | 'ServiceCAccountFeeMonthly' | 'ServiceCOther' | 'Other')[]
        MinMaxType: 'Minimum' | 'Maximum'
        FeeCapOccurrence?: number
        FeeCapAmount?: string
        CappingPeriod?: 'AcademicTerm' | 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
        Notes?: string[]
        OtherFeeType?: { Code?: string; Name: string; Description: string }[]
      }[]
      FeeApplicableRange?: {
        MinimumAmount?: string
        MaximumAmount?: string
        MinimumRate?: string
        MaximumRate?: string
      }
    }[]
    FeeChargeCap?: {
      FeeType: ('ServiceCAccountFee' | 'ServiceCAccountFeeMonthly' | 'ServiceCOther' | 'Other')[]
      MinMaxType: 'Minimum' | 'Maximum'
      FeeCapOccurrence?: number
      FeeCapAmount?: string
      CappingPeriod?: 'AcademicTerm' | 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
      Notes?: string[]
      OtherFeeType?: { Code?: string; Name: string; Description: string }[]
    }[]
  }
}

const AccountIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
    example: '22289',
  })
  .openapi('AccountId')

const OBInternalAccountStatus1CodeSchema = z
  .enum(['Deleted', 'Disabled', 'Enabled', 'Pending', 'ProForma'])
  .openapi({
    description:
      'Specifies the status of account resource in code form. <br />\nFor a full list of enumeration values refer to `OBInternalAccountStatus1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'Enabled',
  })
  .openapi('OBInternalAccountStatus1Code')

const StatusUpdateDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('StatusUpdateDateTime')

const ActiveOrHistoricCurrencyCode_0Schema = z
  .string()
  .regex(/^[A-Z]{3,3}$/)
  .openapi({
    description:
      'Identification of the currency in which the account is held. \nUsage: Currency should only be used in case one and the same account number covers several currencies\nand the initiating party needs to identify which currency needs to be used for settlement on the account.',
  })
  .openapi('ActiveOrHistoricCurrencyCode_0')

const OBInternalAccountType1CodeSchema = z
  .enum(['Business', 'Personal'])
  .openapi({
    description:
      "Specifies the type of account (personal or business). <br /> For a full list of enumeration values refer to 'OBInternalAccountType1Code' in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)",
  })
  .openapi('OBInternalAccountType1Code')

const OBExternalAccountSubType1CodeSchema = z
  .enum([
    'CACC',
    'CARD',
    'CASH',
    'CHAR',
    'CISH',
    'COMM',
    'CPAC',
    'LLSV',
    'LOAN',
    'MGLD',
    'MOMA',
    'NREX',
    'ODFT',
    'ONDP',
    'OTHR',
    'SACC',
    'SLRY',
    'SVGS',
    'TAXE',
    'TRAN',
    'TRAS',
    'VACC',
    'NFCA',
    'MORT',
    'WALT',
  ])
  .openapi({
    description:
      'Specifies the sub type of account (product family group) <br /> For a full list of enumeration values refer to `OBExternalCashAccountType1Code` *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBExternalAccountSubType1Code')

const Description_0Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Specifies the description of the account type.' })
  .openapi('Description_0')

const NicknameSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({
    description:
      'The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.',
  })
  .openapi('Nickname')

const OpeningDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date on which the account and related basic services are effectively operational for the account owner. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('OpeningDate')

const MaturityDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Maturity date of the account. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('MaturityDate')

const OBInternalSwitchStatusCodeSchema = z
  .string()
  .openapi({
    description:
      'Specifies the switch status for the account, in a coded form. <br /> For a full list of enumeration values refer to `OBInternalSwitchStatusCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    'x-namespaced-enum': ['UK.CASS.NotSwitched', 'UK.CASS.SwitchCompleted'],
  })
  .openapi('OBInternalSwitchStatusCode')

const OBInternalAccountIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    'x-namespaced-enum': [
      'UK.OBIE.BBAN',
      'UK.OBIE.IBAN',
      'UK.OBIE.PAN',
      'UK.OBIE.Paym',
      'UK.OBIE.SortCodeAccountNumber',
      'UK.OBIE.Wallet',
    ],
  })
  .openapi('OBInternalAccountIdentification4Code')

const Identification_0Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
    example: '80200112344562',
  })
  .openapi('Identification_0')

const Name_0Schema = z
  .string()
  .min(1)
  .max(350)
  .openapi({
    description:
      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
    example: 'Jane Smith',
  })
  .openapi('Name_0')

const LEISchema = z
  .string()
  .regex(/^[A-Z0-9]{18,18}[0-9]{2,2}$/)
  .min(1)
  .max(20)
  .openapi({
    description:
      'Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".',
    example: 'IZ9Q00LZEVUKWCQY6X15',
  })
  .openapi('LEI')

const SecondaryIdentificationSchema = z
  .string()
  .min(1)
  .max(34)
  .openapi({
    description:
      'This is secondary identification of the account, as assigned by the account servicing institution. \nThis can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
    example: '87562298675897',
  })
  .openapi('SecondaryIdentification')

const OBFrequency2Schema = z
  .enum(['YEAR', 'DAIL', 'INDA', 'MNTH', 'QURT', 'MIAN', 'TEND', 'MOVE', 'WEEK', 'NONE', 'SLCT'])
  .openapi({
    description:
      'For a full list of enumeration values refer to `OBFrequency2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)',
  })
  .openapi('OBFrequency2')

const OBCommunicationMethodSchema = z
  .enum(['EMAL', 'FAXI', 'FILE', 'ONLI', 'POST'])
  .openapi({
    description:
      'For a full list of enumeration values see `OBExternalCommunicationMethod2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets) ',
  })
  .openapi('OBCommunicationMethod')

const OBFileFormatSchema = z
  .enum(['DPDF', 'DXML', 'SDSH', 'WORD', 'XSLT', 'DCSV'])
  .openapi({
    description:
      'For a full list of enumeration values refer to `ExternalDocumentFormat1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)',
  })
  .openapi('OBFileFormat')

const OBAddressType2CodeSchema = z
  .enum(['BIZZ', 'DLVY', 'MLTO', 'PBOX', 'ADDR', 'HOME', 'CORR', 'STAT'])
  .openapi({
    description:
      'Identifies the nature of the postal address. <br /> For a full set of codes see `OBAddressType2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).',
    example: 'BIZZ',
  })
  .openapi('OBAddressType2Code')

const StreetNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({ description: 'Name of a street or thoroughfare.', example: 'Bank Street' })
  .openapi('StreetName')

const BuildingNumberSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description: 'Number that identifies the position of a building on a street.',
    example: '11',
  })
  .openapi('BuildingNumber')

const BuildingNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({ description: 'Name of a referenced building.' })
  .openapi('BuildingName')

const FloorSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Number that identifies the level within a building', example: '11' })
  .openapi('Floor')

const UnitNumberSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description: 'Number that identifies the unit of a specific address .',
    example: 'A88',
  })
  .openapi('UnitNumber')

const RoomSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({
    description: 'Information that locates and identifies a room to form part of an address',
    example: 'Basement 03',
  })
  .openapi('Room')

const PostBoxSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description:
      'Information that locates and identifies a box in a post office assigned to a person or organization, where letters for them are kept until called for.',
    example: 'PO Box 123456',
  })
  .openapi('PostBox')

const TownNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description: 'Name of a built-up area, with defined boundaries, and a local government.',
    example: 'London',
  })
  .openapi('TownName')

const DistrictNameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      'Number that of the regional area, known as a district, which forms part of an address',
    example: 'Greater London',
  })
  .openapi('DistrictName')

const CareOfSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      "The 'care of' address is used whenever sending mail to a person or organisation who does not actually live or work at the address. They will receive the mail for the individual.",
    example: 'Jane Smith',
  })
  .openapi('CareOf')

const PostCodeSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description:
      'Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.',
    example: 'EC2N 4AG',
  })
  .openapi('PostCode')

const OBPostalAddress7Schema = z
  .object({
    AddressType: OBAddressType2CodeSchema.exactOptional(),
    Department: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({
        description: 'Identification of a division of a large organisation or building.',
        example: 'Finance',
      }),
    SubDepartment: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({
        description: 'Identification of a sub-division of a large organisation or building.',
        example: 'Payroll',
      }),
    StreetName: StreetNameSchema.exactOptional(),
    BuildingNumber: BuildingNumberSchema.exactOptional(),
    BuildingName: BuildingNameSchema.exactOptional(),
    Floor: FloorSchema.exactOptional(),
    UnitNumber: UnitNumberSchema.exactOptional(),
    Room: RoomSchema.exactOptional(),
    PostBox: PostBoxSchema.exactOptional(),
    TownLocationName: TownNameSchema.exactOptional(),
    DistrictName: DistrictNameSchema.exactOptional(),
    CareOf: CareOfSchema.exactOptional(),
    PostCode: PostCodeSchema.exactOptional(),
    TownName: TownNameSchema.exactOptional(),
    CountrySubDivision: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identifies a subdivision of a country such as state, region, county.',
      }),
    Country: z
      .string()
      .regex(/^[A-Z]{2,2}$/)
      .exactOptional()
      .openapi({ description: 'Nation with its own government.' }),
    AddressLine: z
      .array(
        z
          .string()
          .min(1)
          .max(70)
          .openapi({
            description:
              'Information that locates and identifies a specific address, as defined by postal services, presented in free format text.',
          }),
      )
      .min(0)
      .max(7)
      .exactOptional(),
  })
  .openapi({
    description:
      'Information that locates and identifies a specific address, as defined by postal services.',
    required: [],
  })
  .openapi('OBPostalAddress7')

const StatementFrequencyAndFormatSchema = z
  .array(
    z
      .object({
        Frequency: OBFrequency2Schema.exactOptional(),
        CommunicationMethod: OBCommunicationMethodSchema.exactOptional(),
        Format: OBFileFormatSchema.exactOptional(),
        DeliveryAddress: OBPostalAddress7Schema.exactOptional(),
      })
      .openapi({ description: 'Frequency and format of statements for an account', required: [] }),
  )
  .openapi('StatementFrequencyAndFormat')

const OBInternalFinancialInstitutionIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.BICFI',
    'x-namespaced-enum': ['UK.OBIE.BICFI'],
  })
  .openapi('OBInternalFinancialInstitutionIdentification4Code')

const Identification_1Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description: 'Unique and unambiguous identification of the servicing institution.',
    example: '80200112344562',
  })
  .openapi('Identification_1')

const Name_1Schema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      'Name by which an agent is known and which is usually used to identify that agent.',
    example: 'Agent Name',
  })
  .openapi('Name_1')

const OBBranchAndFinancialInstitutionIdentification5_0Schema = z
  .object({
    SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema,
    Identification: Identification_1Schema,
    Name: Name_1Schema.exactOptional(),
  })
  .openapi({
    required: ['SchemeName', 'Identification'],
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.',
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification5_0')

const OBAccount6Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    Status: OBInternalAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
    Currency: ActiveOrHistoricCurrencyCode_0Schema.exactOptional(),
    AccountCategory: OBInternalAccountType1CodeSchema.exactOptional(),
    AccountTypeCode: OBExternalAccountSubType1CodeSchema.exactOptional(),
    Description: Description_0Schema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    OpeningDate: OpeningDateSchema.exactOptional(),
    MaturityDate: MaturityDateSchema.exactOptional(),
    SwitchStatus: OBInternalSwitchStatusCodeSchema.exactOptional(),
    Account: z
      .array(
        z
          .object({
            SchemeName: OBInternalAccountIdentification4CodeSchema,
            Identification: Identification_0Schema,
            Name: Name_0Schema.exactOptional(),
            LEI: LEISchema.exactOptional(),
            SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
          })
          .openapi({
            description: 'Provides the details to identify an account.',
            required: ['SchemeName', 'Identification'],
          }),
      )
      .exactOptional(),
    StatementFrequencyAndFormat: StatementFrequencyAndFormatSchema.exactOptional(),
    Servicer: OBBranchAndFinancialInstitutionIdentification5_0Schema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:\n\n  * Data.Currency  \n  * Data.AccountCategory  \n  * Data.AccountTypeCode\n\nFor all other accounts, the fields must be populated by the ASPSP.',
    required: ['AccountId'],
  })
  .openapi('OBAccount6')

const LinksSchema = z
  .strictObject({
    Self: z.url(),
    First: z.url().exactOptional(),
    Prev: z.url().exactOptional(),
    Next: z.url().exactOptional(),
    Last: z.url().exactOptional(),
  })
  .openapi({ description: 'Links relevant to the payload', required: ['Self'] })
  .openapi('Links')

const ISODateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ISODateTime')

const MetaSchema = z
  .strictObject({
    TotalPages: z.int32().exactOptional(),
    FirstAvailableDateTime: ISODateTimeSchema.exactOptional(),
    LastAvailableDateTime: ISODateTimeSchema.exactOptional(),
  })
  .openapi({ title: 'MetaData', description: 'Meta Data relevant to the payload', required: [] })
  .openapi('Meta')

type OBReadAccount6Type = {
  Data: { Account?: z.infer<typeof OBAccount6Schema>[] }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const OBCodeMnemonicSchema = z
  .string()
  .regex(/^\w{0,4}$/)
  .openapi({ description: 'The four letter Mnemonic used within an XML file to identify a code' })
  .openapi('OBCodeMnemonic')

const Name_4Schema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Long name associated with the code' })
  .openapi('Name_4')

const Description_3Schema = z
  .string()
  .min(1)
  .max(350)
  .openapi({ description: 'Description to describe the purpose of the code' })
  .openapi('Description_3')

const OBOtherCodeType1_0Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({ required: ['Name', 'Description'] })
  .openapi('OBOtherCodeType1_0')

const OBInterestCalculationMethod1CodeSchema = z
  .enum(['ITCO', 'ITOT', 'ITSI'])
  .openapi({ description: 'Methods of calculating interest' })
  .openapi('OBInterestCalculationMethod1Code')

const OBInterestFixedVariableType1CodeSchema = z
  .enum(['INFI', 'INVA'])
  .openapi({ description: 'Type of interest rate, Fixed or Variable' })
  .openapi('OBInterestFixedVariableType1Code')

const OBOtherCodeType1_1Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other application frequencies that are not available in the standard code list',
  })
  .openapi('OBOtherCodeType1_1')

const OBOtherCodeType1_2Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other calculation frequency which is not available in the standard code set.',
  })
  .openapi('OBOtherCodeType1_2')

const OBMinMaxType1CodeSchema = z
  .enum(['FMMN', 'FMMX'])
  .openapi({ description: 'Min Max type' })
  .openapi('OBMinMaxType1Code')

const Number_0Schema = z
  .int()
  .openapi({
    description:
      'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it s part of a government scheme, or whether the rate may vary dependent on the applicant s circumstances.',
  })
  .openapi('Number_0')

const OBAmount1_0Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({ description: 'Cap amount charged for a fee/charge' })
  .openapi('OBAmount1_0')

const OBPeriod1CodeSchema = z
  .enum(['PACT', 'PDAY', 'PHYR', 'PMTH', 'PQTR', 'PWEK', 'PYER'])
  .openapi({ description: 'Period e.g. day, week, month etc. for which the fee/charge is capped' })
  .openapi('OBPeriod1Code')

const OBOverdraftFeeType1CodeSchema = z
  .enum([
    'FBAO',
    'FBAR',
    'FBEB',
    'FBIT',
    'FBOR',
    'FBOS',
    'FBSC',
    'FBTO',
    'FBUB',
    'FBUT',
    'FTOT',
    'FTUT',
  ])
  .openapi({ description: 'Overdraft fee type' })
  .openapi('OBOverdraftFeeType1Code')

const OBAmount1_1Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
  })
  .openapi('OBAmount1_1')

const OBAmount1_2Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
  })
  .openapi('OBAmount1_2')

const OBRate1_02Schema = z
  .string()
  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBRate1_02')

const OBInterestRateType1Code_0Schema = z
  .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
  .openapi({
    description:
      'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBInterestRateType1Code_0')

const OBFeeFrequency1Code_0Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'Frequency at which the overdraft charge is applied to the account' })
  .openapi('OBFeeFrequency1Code_0')

const OBFeeFrequency1Code_1Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'How often is the overdraft fee/charge calculated for the account.' })
  .openapi('OBFeeFrequency1Code_1')

const OBOtherCodeType1_3Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other Fee type which is not available in the standard code set',
  })
  .openapi('OBOtherCodeType1_3')

const OBOtherCodeType1_4Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other fee rate type code which is not available in the standard code set',
  })
  .openapi('OBOtherCodeType1_4')

const OBFeeType1CodeSchema = z
  .enum(['FEPF', 'FTOT', 'FYAF', 'FYAM', 'FYAQ', 'FYCP', 'FYDB', 'FYMI', 'FYXX'])
  .openapi({ description: 'Fee/Charge Type' })
  .openapi('OBFeeType1Code')

const OBAmount1_3Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
  })
  .openapi('OBAmount1_3')

const OBRate1_12Schema = z
  .string()
  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBRate1_12')

const OBInterestRateType1Code_1Schema = z
  .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
  .openapi({
    description:
      'Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
  })
  .openapi('OBInterestRateType1Code_1')

const OBFeeFrequency1Code_2Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'How frequently the fee/charge is applied to the account' })
  .openapi('OBFeeFrequency1Code_2')

const OBFeeFrequency1Code_3Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'How frequently the fee/charge is calculated' })
  .openapi('OBFeeFrequency1Code_3')

const OBFeeCategory1CodeSchema = z
  .enum(['FCOT', 'FCRE', 'FCSV'])
  .openapi({ description: 'Categorisation of fees and charges into standard categories.' })
  .openapi('OBFeeCategory1Code')

const OBOtherFeeChargeDetailTypeSchema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    FeeCategory: OBFeeCategory1CodeSchema,
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['FeeCategory', 'Name', 'Description'],
    description: 'Other Fee/charge type which is not available in the standard code set',
  })
  .openapi('OBOtherFeeChargeDetailType')

const OBOtherCodeType1_5Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other fee rate type which is not in the standard rate type list',
  })
  .openapi('OBOtherCodeType1_5')

const OBOtherCodeType1_6Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other application frequencies not covered in the standard code list',
  })
  .openapi('OBOtherCodeType1_6')

const OBOtherCodeType1_7Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other calculation frequency which is not available in standard code set.',
  })
  .openapi('OBOtherCodeType1_7')

const Number_1Schema = z
  .int()
  .openapi({
    description:
      'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
  })
  .openapi('Number_1')

const OBAmount1_4Schema = z
  .string()
  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
  .openapi({
    description:
      'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
  })
  .openapi('OBAmount1_4')

const OBFeeFrequency1Code_4Schema = z
  .enum([
    'FEAC',
    'FEAO',
    'FECP',
    'FEDA',
    'FEHO',
    'FEI',
    'FEMO',
    'FEOA',
    'FEOT',
    'FEPC',
    'FEPH',
    'FEPO',
    'FEPS',
    'FEPT',
    'FEPTA',
    'FEPTP',
    'FEQU',
    'FESM',
    'FEST',
    'FEWE',
    'FEYE',
  ])
  .openapi({ description: 'Period e.g. day, week, month etc. for which the fee/charge is capped' })
  .openapi('OBFeeFrequency1Code_4')

const OBOtherCodeType1_8Schema = z
  .strictObject({
    Code: OBCodeMnemonicSchema.exactOptional(),
    Name: Name_4Schema,
    Description: Description_3Schema,
  })
  .openapi({
    required: ['Name', 'Description'],
    description: 'Other fee rate type which is not available in the standard code set',
  })
  .openapi('OBOtherCodeType1_8')

const OBSupplementaryData1Schema = z
  .looseObject({})
  .openapi({
    description:
      'Additional information that can not be captured in the structured fields and/or any other specific block.',
  })
  .openapi('OBSupplementaryData1')

const OBBCAData1Schema: z.ZodType<OBBCAData1Type> = z
  .strictObject({
    ProductDetails: z
      .strictObject({
        Segment: z
          .array(
            z
              .enum([
                'ClientAccount',
                'Standard',
                'NonCommercialChaitiesClbSoc',
                'NonCommercialPublicAuthGovt',
                'Religious',
                'SectorSpecific',
                'Startup',
                'Switcher',
              ])
              .openapi({
                description:
                  'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to BCA products, they are segmented in relation to different markets that they wish to focus on. ',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to BCA products, they are segmented in relation to different markets that they wish to focus on. ',
            title: 'Segment',
          }),
        FeeFreeLength: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'The length/duration of the fee free period',
            title: 'FeeFreeLength',
          }),
        FeeFreeLengthPeriod: z
          .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
          .exactOptional()
          .openapi({
            description: 'The unit of period (days, weeks, months etc.) of the promotional length',
            title: 'FeeFreeLengthPeriod',
          }),
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({
            description: 'Optional additional notes to supplement the Core product details',
            title: 'Notes',
          }),
      })
      .exactOptional()
      .openapi({ title: 'ProductDetails', required: [] }),
    CreditInterest: z
      .strictObject({
        TierBandSet: z
          .array(
            z
              .object({
                TierBandMethod: z
                  .enum(['Banded', 'Tiered', 'Whole'])
                  .openapi({
                    description:
                      'The methodology of how credit interest is paid/applied. It can be:-\n\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n\n3. Whole\nThe same interest rate is applied irrespective of the BCA balance',
                    title: 'TierBandMethod',
                  }),
                CalculationMethod: z
                  .enum(['Compound', 'SimpleInterest'])
                  .exactOptional()
                  .openapi({
                    description: 'Methods of calculating interest',
                    title: 'CalculationMethod',
                  }),
                Destination: z
                  .enum(['PayAway', 'SelfCredit'])
                  .openapi({
                    description:
                      'Describes whether accrued interest is payable only to the BCA or to another bank account',
                    title: 'Destination',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the Tier Band Set details',
                    title: 'Notes',
                  }),
                TierBand: z
                  .array(
                    z
                      .object({
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a BCA.',
                            title: 'Identification',
                          }),
                        TierValueMinimum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'Minimum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMinimum',
                          }),
                        TierValueMaximum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMaximum',
                          }),
                        CalculationFrequency: z
                          .enum([
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description: 'How often is credit interest calculated for the account.',
                            title: 'CalculationFrequency',
                          }),
                        ApplicationFrequency: z
                          .enum([
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .openapi({
                            description:
                              "How often is interest applied to the BCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's BCA.",
                            title: 'ApplicationFrequency',
                          }),
                        DepositInterestAppliedCoverage: z
                          .enum(['Banded', 'Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description: 'Amount on which Interest applied.',
                            title: 'DepositInterestAppliedCoverage',
                          }),
                        FixedVariableInterestRateType: z
                          .enum(['Fixed', 'Variable'])
                          .openapi({
                            description: 'Type of interest rate, Fixed or Variable',
                            title: 'FixedVariableInterestRateType',
                          }),
                        AER: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \nRead more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A',
                            title: 'AER',
                          }),
                        BankInterestRateType: z
                          .enum(['Gross', 'Other'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the BCA.',
                            title: 'BankInterestRateType',
                          }),
                        BankInterestRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Bank Interest for the BCA product',
                            title: 'BankInterestRate',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier Band details',
                            title: 'Notes',
                          }),
                        OtherBankInterestType: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other interest rate types which are not available in the standard code list',
                            title: 'OtherBankInterestType',
                            required: ['Name', 'Description'],
                          }),
                        OtherApplicationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other application frequencies that are not available in the standard code list',
                            title: 'OtherApplicationFrequency',
                            required: ['Name', 'Description'],
                          }),
                        OtherCalculationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other calculation frequency which is not available in the standard code set.',
                            title: 'OtherCalculationFrequency',
                            required: ['Name', 'Description'],
                          }),
                      })
                      .openapi({
                        description: 'Tier Band Details',
                        required: [
                          'TierValueMinimum',
                          'ApplicationFrequency',
                          'FixedVariableInterestRateType',
                          'AER',
                        ],
                      }),
                  )
                  .min(1)
                  .openapi({ description: 'Tier Band Details', title: 'TierBand' }),
              })
              .openapi({
                description:
                  'The group of tiers or bands for which credit interest can be applied.',
                required: ['TierBandMethod', 'Destination', 'TierBand'],
              }),
          )
          .min(1)
          .openapi({
            description: 'The group of tiers or bands for which credit interest can be applied.',
            title: 'TierBandSet',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Details about the interest that may be payable to the BCA account holders',
        title: 'CreditInterest',
        required: ['TierBandSet'],
      }),
    Overdraft: z
      .strictObject({
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({ description: 'Associated Notes about the overdraft rates', title: 'Notes' }),
        OverdraftTierBandSet: z
          .array(
            z
              .object({
                TierBandMethod: z
                  .enum(['Banded', 'Tiered', 'Whole'])
                  .openapi({
                    description:
                      "The methodology of how overdraft is charged. It can be:\n'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). \n'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation\n'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.",
                    title: 'TierBandMethod',
                  }),
                OverdraftType: z
                  .enum(['Committed', 'OnDemand'])
                  .exactOptional()
                  .openapi({
                    description:
                      "An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.",
                    title: 'OverdraftType',
                  }),
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of a  Tier Band for a overdraft product.',
                    title: 'Identification',
                  }),
                AuthorisedIndicator: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Indicates if the Overdraft is authorised (Y) or unauthorised (N)',
                    title: 'AuthorisedIndicator',
                  }),
                BufferAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.',
                    title: 'BufferAmount',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the overdraft Tier Band Set details',
                    title: 'Notes',
                  }),
                OverdraftTierBand: z
                  .array(
                    z
                      .object({
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a overdraft.',
                            title: 'Identification',
                          }),
                        TierValueMin: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description: 'Minimum value of Overdraft Tier/Band',
                            title: 'TierValueMin',
                          }),
                        TierValueMax: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Maximum value of Overdraft Tier/Band',
                            title: 'TierValueMax',
                          }),
                        EAR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently\nused interchangeably), being the actual annual interest rate of an Overdraft.',
                            title: 'EAR',
                          }),
                        RepresentativeAPR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account.',
                            title: 'RepresentativeAPR',
                          }),
                        AgreementLengthMin: z
                          .float32()
                          .exactOptional()
                          .openapi({
                            description:
                              'Specifies the minimum length of a band for a fixed overdraft agreement',
                            title: 'AgreementLengthMin',
                          }),
                        AgreementLengthMax: z
                          .float32()
                          .exactOptional()
                          .openapi({
                            description:
                              'Specifies the maximum length of a band for a fixed overdraft agreement',
                            title: 'AgreementLengthMax',
                          }),
                        AgreementPeriod: z
                          .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Specifies the period of a fixed length overdraft agreement',
                            title: 'AgreementPeriod',
                          }),
                        OverdraftInterestChargingCoverage: z
                          .enum(['Banded', 'Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is £2k and the interest tiers are:- 0-£500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the ‘Whole’ of the account balance,  and in the 2nd that it is ‘Tiered’.',
                            title: 'OverdraftInterestChargingCoverage',
                          }),
                        BankGuaranteedIndicator: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                            title: 'BankGuaranteedIndicator',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier/band details',
                            title: 'Notes',
                          }),
                        OverdraftFeesCharges: z
                          .array(
                            z
                              .object({
                                OverdraftFeeChargeCap: z
                                  .array(
                                    z
                                      .object({
                                        FeeType: z
                                          .array(
                                            z
                                              .enum([
                                                'ArrangedOverdraft',
                                                'AnnualReview',
                                                'EmergencyBorrowing',
                                                'BorrowingItem',
                                                'OverdraftRenewal',
                                                'OverdraftSetup',
                                                'Surcharge',
                                                'TempOverdraft',
                                                'UnauthorisedBorrowing',
                                                'UnauthorisedPaidTrans',
                                                'Other',
                                                'UnauthorisedUnpaidTrans',
                                              ])
                                              .openapi({ description: 'Overdraft fee type' }),
                                          )
                                          .min(1)
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                            title: 'FeeType',
                                          }),
                                        MinMaxType: z
                                          .enum(['Minimum', 'Maximum'])
                                          .openapi({
                                            description: 'Min Max type',
                                            title: 'MinMaxType',
                                          }),
                                        FeeCapOccurrence: z
                                          .float32()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                            title: 'FeeCapOccurrence',
                                          }),
                                        FeeCapAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Cap amount charged for a fee/charge',
                                            title: 'FeeCapAmount',
                                          }),
                                        CappingPeriod: z
                                          .enum([
                                            'Day',
                                            'Half Year',
                                            'Month',
                                            'Quarter',
                                            'Week',
                                            'Year',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                            title: 'CappingPeriod',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Notes related to Overdraft fee charge cap',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .array(
                                            z
                                              .object({
                                                Code: z
                                                  .string()
                                                  .regex(/^\w{0,4}$/)
                                                  .min(0)
                                                  .max(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'The four letter Mnemonic used within an XML file to identify a code',
                                                    title: 'Code',
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(70)
                                                  .openapi({
                                                    description:
                                                      'Long name associated with the code',
                                                    title: 'Name',
                                                  }),
                                                Description: z
                                                  .string()
                                                  .min(1)
                                                  .max(350)
                                                  .openapi({
                                                    description:
                                                      'Description to describe the purpose of the code',
                                                    title: 'Description',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                required: ['Name', 'Description'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                        required: ['FeeType', 'MinMaxType'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                                OverdraftFeeChargeDetail: z
                                  .array(
                                    z
                                      .object({
                                        FeeType: z
                                          .enum([
                                            'ArrangedOverdraft',
                                            'AnnualReview',
                                            'EmergencyBorrowing',
                                            'BorrowingItem',
                                            'OverdraftRenewal',
                                            'OverdraftSetup',
                                            'Surcharge',
                                            'TempOverdraft',
                                            'UnauthorisedBorrowing',
                                            'UnauthorisedPaidTrans',
                                            'Other',
                                            'UnauthorisedUnpaidTrans',
                                          ])
                                          .openapi({
                                            description: 'Overdraft fee type',
                                            title: 'FeeType',
                                          }),
                                        NegotiableIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether fee and charges are negotiable',
                                            title: 'NegotiableIndicator',
                                          }),
                                        OverdraftControlIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                            title: 'OverdraftControlIndicator',
                                          }),
                                        IncrementalBorrowingAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                            title: 'IncrementalBorrowingAmount',
                                          }),
                                        FeeAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                            title: 'FeeAmount',
                                          }),
                                        FeeRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRate',
                                          }),
                                        FeeRateType: z
                                          .enum(['Gross', 'Other'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRateType',
                                          }),
                                        ApplicationFrequency: z
                                          .enum([
                                            'OnClosing',
                                            'OnOpening',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAnniversary',
                                            'Other',
                                            'PerHundredPounds',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .openapi({
                                            description:
                                              'Frequency at which the overdraft charge is applied to the account',
                                            title: 'ApplicationFrequency',
                                          }),
                                        CalculationFrequency: z
                                          .enum([
                                            'OnClosing',
                                            'OnOpening',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAnniversary',
                                            'Other',
                                            'PerHundredPounds',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'How often is the overdraft fee/charge calculated for the account.',
                                            title: 'CalculationFrequency',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                            title: 'Notes',
                                          }),
                                        OverdraftFeeChargeCap: z
                                          .array(
                                            z
                                              .object({
                                                FeeType: z
                                                  .array(
                                                    z
                                                      .enum([
                                                        'ArrangedOverdraft',
                                                        'AnnualReview',
                                                        'EmergencyBorrowing',
                                                        'BorrowingItem',
                                                        'OverdraftRenewal',
                                                        'OverdraftSetup',
                                                        'Surcharge',
                                                        'TempOverdraft',
                                                        'UnauthorisedBorrowing',
                                                        'UnauthorisedPaidTrans',
                                                        'Other',
                                                        'UnauthorisedUnpaidTrans',
                                                      ])
                                                      .openapi({
                                                        description: 'Overdraft fee type',
                                                      }),
                                                  )
                                                  .min(1)
                                                  .openapi({
                                                    description:
                                                      'Fee/charge type which is being capped',
                                                    title: 'FeeType',
                                                  }),
                                                MinMaxType: z
                                                  .enum(['Minimum', 'Maximum'])
                                                  .openapi({
                                                    description: 'Min Max type',
                                                    title: 'MinMaxType',
                                                  }),
                                                FeeCapOccurrence: z
                                                  .float32()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                                    title: 'FeeCapOccurrence',
                                                  }),
                                                FeeCapAmount: z
                                                  .string()
                                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Cap amount charged for a fee/charge',
                                                    title: 'FeeCapAmount',
                                                  }),
                                                CappingPeriod: z
                                                  .enum([
                                                    'Day',
                                                    'Half Year',
                                                    'Month',
                                                    'Quarter',
                                                    'Week',
                                                    'Year',
                                                  ])
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                                    title: 'CappingPeriod',
                                                  }),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description: 'maxLength 2000 text',
                                                      }),
                                                  )
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Notes related to Overdraft fee charge cap',
                                                    title: 'Notes',
                                                  }),
                                                OtherFeeType: z
                                                  .array(
                                                    z
                                                      .object({
                                                        Code: z
                                                          .string()
                                                          .regex(/^\w{0,4}$/)
                                                          .min(0)
                                                          .max(4)
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              'The four letter Mnemonic used within an XML file to identify a code',
                                                            title: 'Code',
                                                          }),
                                                        Name: z
                                                          .string()
                                                          .min(1)
                                                          .max(70)
                                                          .openapi({
                                                            description:
                                                              'Long name associated with the code',
                                                            title: 'Name',
                                                          }),
                                                        Description: z
                                                          .string()
                                                          .min(1)
                                                          .max(350)
                                                          .openapi({
                                                            description:
                                                              'Description to describe the purpose of the code',
                                                            title: 'Description',
                                                          }),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Other fee type code which is not available in the standard code set',
                                                        required: ['Name', 'Description'],
                                                      }),
                                                  )
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Other fee type code which is not available in the standard code set',
                                                    title: 'OtherFeeType',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                required: ['FeeType', 'MinMaxType'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                            title: 'OverdraftFeeChargeCap',
                                          }),
                                        OtherFeeType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other Fee type which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherFeeRateType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee rate type code which is not available in the standard code set',
                                            title: 'OtherFeeRateType',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherApplicationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other application frequencies that are not available in the standard code list',
                                            title: 'OtherApplicationFrequency',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherCalculationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other calculation frequency which is not available in the standard code set.',
                                            title: 'OtherCalculationFrequency',
                                            required: ['Name', 'Description'],
                                          }),
                                      })
                                      .openapi({
                                        description: 'Details about the fees/charges',
                                        required: ['FeeType', 'ApplicationFrequency'],
                                      }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Details about the fees/charges',
                                    title: 'OverdraftFeeChargeDetail',
                                  }),
                              })
                              .openapi({
                                description: 'Overdraft fees and charges',
                                required: ['OverdraftFeeChargeDetail'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Overdraft fees and charges',
                            title: 'OverdraftFeesCharges',
                          }),
                      })
                      .openapi({
                        description: 'Provides overdraft details for a specific tier or band',
                        required: ['TierValueMin'],
                      }),
                  )
                  .min(1)
                  .openapi({
                    description: 'Provides overdraft details for a specific tier or band',
                    title: 'OverdraftTierBand',
                  }),
                OverdraftFeesCharges: z
                  .array(
                    z
                      .object({
                        OverdraftFeeChargeCap: z
                          .array(
                            z
                              .object({
                                FeeType: z
                                  .array(
                                    z
                                      .enum([
                                        'ArrangedOverdraft',
                                        'AnnualReview',
                                        'EmergencyBorrowing',
                                        'BorrowingItem',
                                        'OverdraftRenewal',
                                        'OverdraftSetup',
                                        'Surcharge',
                                        'TempOverdraft',
                                        'UnauthorisedBorrowing',
                                        'UnauthorisedPaidTrans',
                                        'Other',
                                        'UnauthorisedUnpaidTrans',
                                      ])
                                      .openapi({ description: 'Overdraft fee type' }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Fee/charge type which is being capped',
                                    title: 'FeeType',
                                  }),
                                MinMaxType: z
                                  .enum(['Minimum', 'Maximum'])
                                  .openapi({ description: 'Min Max type', title: 'MinMaxType' }),
                                FeeCapOccurrence: z
                                  .float32()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                    title: 'FeeCapOccurrence',
                                  }),
                                FeeCapAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description: 'Cap amount charged for a fee/charge',
                                    title: 'FeeCapAmount',
                                  }),
                                CappingPeriod: z
                                  .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                    title: 'CappingPeriod',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Notes related to Overdraft fee charge cap',
                                    title: 'Notes',
                                  }),
                                OtherFeeType: z
                                  .array(
                                    z
                                      .object({
                                        Code: z
                                          .string()
                                          .regex(/^\w{0,4}$/)
                                          .min(0)
                                          .max(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The four letter Mnemonic used within an XML file to identify a code',
                                            title: 'Code',
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(70)
                                          .openapi({
                                            description: 'Long name associated with the code',
                                            title: 'Name',
                                          }),
                                        Description: z
                                          .string()
                                          .min(1)
                                          .max(350)
                                          .openapi({
                                            description:
                                              'Description to describe the purpose of the code',
                                            title: 'Description',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Other fee type code which is not available in the standard code set',
                                        required: ['Name', 'Description'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee type code which is not available in the standard code set',
                                    title: 'OtherFeeType',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                required: ['FeeType', 'MinMaxType'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                            title: 'OverdraftFeeChargeCap',
                          }),
                        OverdraftFeeChargeDetail: z
                          .array(
                            z
                              .object({
                                FeeType: z
                                  .enum([
                                    'ArrangedOverdraft',
                                    'AnnualReview',
                                    'EmergencyBorrowing',
                                    'BorrowingItem',
                                    'OverdraftRenewal',
                                    'OverdraftSetup',
                                    'Surcharge',
                                    'TempOverdraft',
                                    'UnauthorisedBorrowing',
                                    'UnauthorisedPaidTrans',
                                    'Other',
                                    'UnauthorisedUnpaidTrans',
                                  ])
                                  .openapi({ description: 'Overdraft fee type', title: 'FeeType' }),
                                NegotiableIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Indicates whether fee and charges are negotiable',
                                    title: 'NegotiableIndicator',
                                  }),
                                OverdraftControlIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                    title: 'OverdraftControlIndicator',
                                  }),
                                IncrementalBorrowingAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                    title: 'IncrementalBorrowingAmount',
                                  }),
                                FeeAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                    title: 'FeeAmount',
                                  }),
                                FeeRate: z
                                  .string()
                                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRate',
                                  }),
                                FeeRateType: z
                                  .enum(['Gross', 'Other'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRateType',
                                  }),
                                ApplicationFrequency: z
                                  .enum([
                                    'OnClosing',
                                    'OnOpening',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAnniversary',
                                    'Other',
                                    'PerHundredPounds',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .openapi({
                                    description:
                                      'Frequency at which the overdraft charge is applied to the account',
                                    title: 'ApplicationFrequency',
                                  }),
                                CalculationFrequency: z
                                  .enum([
                                    'OnClosing',
                                    'OnOpening',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAnniversary',
                                    'Other',
                                    'PerHundredPounds',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'How often is the overdraft fee/charge calculated for the account.',
                                    title: 'CalculationFrequency',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                    title: 'Notes',
                                  }),
                                OverdraftFeeChargeCap: z
                                  .array(
                                    z
                                      .object({
                                        FeeType: z
                                          .array(
                                            z
                                              .enum([
                                                'ArrangedOverdraft',
                                                'AnnualReview',
                                                'EmergencyBorrowing',
                                                'BorrowingItem',
                                                'OverdraftRenewal',
                                                'OverdraftSetup',
                                                'Surcharge',
                                                'TempOverdraft',
                                                'UnauthorisedBorrowing',
                                                'UnauthorisedPaidTrans',
                                                'Other',
                                                'UnauthorisedUnpaidTrans',
                                              ])
                                              .openapi({ description: 'Overdraft fee type' }),
                                          )
                                          .min(1)
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                            title: 'FeeType',
                                          }),
                                        MinMaxType: z
                                          .enum(['Minimum', 'Maximum'])
                                          .openapi({
                                            description: 'Min Max type',
                                            title: 'MinMaxType',
                                          }),
                                        FeeCapOccurrence: z
                                          .float32()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.',
                                            title: 'FeeCapOccurrence',
                                          }),
                                        FeeCapAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Cap amount charged for a fee/charge',
                                            title: 'FeeCapAmount',
                                          }),
                                        CappingPeriod: z
                                          .enum([
                                            'Day',
                                            'Half Year',
                                            'Month',
                                            'Quarter',
                                            'Week',
                                            'Year',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                            title: 'CappingPeriod',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Notes related to Overdraft fee charge cap',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .array(
                                            z
                                              .object({
                                                Code: z
                                                  .string()
                                                  .regex(/^\w{0,4}$/)
                                                  .min(0)
                                                  .max(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'The four letter Mnemonic used within an XML file to identify a code',
                                                    title: 'Code',
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(70)
                                                  .openapi({
                                                    description:
                                                      'Long name associated with the code',
                                                    title: 'Name',
                                                  }),
                                                Description: z
                                                  .string()
                                                  .min(1)
                                                  .max(350)
                                                  .openapi({
                                                    description:
                                                      'Description to describe the purpose of the code',
                                                    title: 'Description',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                required: ['Name', 'Description'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                        required: ['FeeType', 'MinMaxType'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                                OtherFeeType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other Fee type which is not available in the standard code set',
                                    title: 'OtherFeeType',
                                    required: ['Name', 'Description'],
                                  }),
                                OtherFeeRateType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee rate type code which is not available in the standard code set',
                                    title: 'OtherFeeRateType',
                                    required: ['Name', 'Description'],
                                  }),
                                OtherApplicationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other application frequencies that are not available in the standard code list',
                                    title: 'OtherApplicationFrequency',
                                    required: ['Name', 'Description'],
                                  }),
                                OtherCalculationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other calculation frequency which is not available in the standard code set.',
                                    title: 'OtherCalculationFrequency',
                                    required: ['Name', 'Description'],
                                  }),
                              })
                              .openapi({
                                description: 'Details about the fees/charges',
                                required: ['FeeType', 'ApplicationFrequency'],
                              }),
                          )
                          .min(1)
                          .openapi({
                            description: 'Details about the fees/charges',
                            title: 'OverdraftFeeChargeDetail',
                          }),
                      })
                      .openapi({
                        description: 'Overdraft fees and charges details',
                        required: ['OverdraftFeeChargeDetail'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Overdraft fees and charges details',
                    title: 'OverdraftFeesCharges',
                  }),
              })
              .openapi({
                description: 'Tier band set details',
                required: ['TierBandMethod', 'OverdraftTierBand'],
              }),
          )
          .min(1)
          .openapi({ description: 'Tier band set details', title: 'OverdraftTierBandSet' }),
      })
      .exactOptional()
      .openapi({
        description: 'Borrowing details',
        title: 'Overdraft',
        required: ['OverdraftTierBandSet'],
      }),
    OtherFeesCharges: z
      .array(
        z
          .object({
            TariffType: z
              .enum(['Electronic', 'Mixed', 'Other'])
              .exactOptional()
              .openapi({
                description: 'TariffType which defines the fee and charges.',
                title: 'TariffType',
              }),
            TariffName: z
              .string()
              .min(1)
              .max(350)
              .exactOptional()
              .openapi({ description: 'Name of the tariff', title: 'TariffName' }),
            OtherTariffType: z
              .strictObject({
                Code: z
                  .string()
                  .regex(/^\w{0,4}$/)
                  .min(0)
                  .max(4)
                  .exactOptional()
                  .openapi({
                    description:
                      'The four letter Mnemonic used within an XML file to identify a code',
                    title: 'Code',
                  }),
                Name: z
                  .string()
                  .min(1)
                  .max(70)
                  .openapi({ description: 'Long name associated with the code', title: 'Name' }),
                Description: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description: 'Description to describe the purpose of the code',
                    title: 'Description',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Other tariff type which is not in the standard list.',
                title: 'OtherTariffType',
                required: ['Name', 'Description'],
              }),
            FeeChargeDetail: z
              .array(
                z
                  .object({
                    FeeCategory: z
                      .enum(['Other', 'Servicing'])
                      .openapi({
                        description: 'Categorisation of fees and charges into standard categories.',
                        title: 'FeeCategory',
                      }),
                    FeeType: z
                      .enum([
                        'Other',
                        'ServiceCAccountFee',
                        'ServiceCAccountFeeMonthly',
                        'ServiceCAccountFeeQuarterly',
                        'ServiceCFixedTariff',
                        'ServiceCBusiDepAccBreakage',
                        'ServiceCMinimumMonthlyFee',
                        'ServiceCOther',
                      ])
                      .openapi({ description: 'Fee/Charge Type', title: 'FeeType' }),
                    NegotiableIndicator: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Fee/charge which is usually negotiable rather than a fixed amount',
                        title: 'NegotiableIndicator',
                      }),
                    FeeAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                        title: 'FeeAmount',
                      }),
                    FeeRate: z
                      .string()
                      .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                        title: 'FeeRate',
                      }),
                    FeeRateType: z
                      .enum(['Gross', 'Other'])
                      .exactOptional()
                      .openapi({
                        description:
                          'Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                        title: 'FeeRateType',
                      }),
                    ApplicationFrequency: z
                      .enum([
                        'OnClosing',
                        'OnOpening',
                        'ChargingPeriod',
                        'Daily',
                        'PerItem',
                        'Monthly',
                        'OnAnniversary',
                        'Other',
                        'PerHundredPounds',
                        'PerHour',
                        'PerOccurrence',
                        'PerSheet',
                        'PerTransaction',
                        'PerTransactionAmount',
                        'PerTransactionPercentage',
                        'Quarterly',
                        'SixMonthly',
                        'StatementMonthly',
                        'Weekly',
                        'Yearly',
                      ])
                      .openapi({
                        description: 'How frequently the fee/charge is applied to the account',
                        title: 'ApplicationFrequency',
                      }),
                    CalculationFrequency: z
                      .enum([
                        'OnClosing',
                        'OnOpening',
                        'ChargingPeriod',
                        'Daily',
                        'PerItem',
                        'Monthly',
                        'OnAnniversary',
                        'Other',
                        'PerHundredPounds',
                        'PerHour',
                        'PerOccurrence',
                        'PerSheet',
                        'PerTransaction',
                        'PerTransactionAmount',
                        'PerTransactionPercentage',
                        'Quarterly',
                        'SixMonthly',
                        'StatementMonthly',
                        'Weekly',
                        'Yearly',
                      ])
                      .exactOptional()
                      .openapi({
                        description: 'How frequently the fee/charge is calculated',
                        title: 'CalculationFrequency',
                      }),
                    Notes: z
                      .array(
                        z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Optional additional notes to supplement the fee/charge details.',
                        title: 'Notes',
                      }),
                    FeeChargeCap: z
                      .array(
                        z
                          .object({
                            FeeType: z
                              .array(
                                z
                                  .enum([
                                    'Other',
                                    'ServiceCAccountFee',
                                    'ServiceCAccountFeeMonthly',
                                    'ServiceCAccountFeeQuarterly',
                                    'ServiceCFixedTariff',
                                    'ServiceCBusiDepAccBreakage',
                                    'ServiceCMinimumMonthlyFee',
                                    'ServiceCOther',
                                  ])
                                  .openapi({
                                    description: 'Fee/charge type which is being capped',
                                  }),
                              )
                              .min(1)
                              .openapi({
                                description: 'Fee/charge type which is being capped',
                                title: 'FeeType',
                              }),
                            MinMaxType: z
                              .enum(['Minimum', 'Maximum'])
                              .openapi({ description: 'Min Max type', title: 'MinMaxType' }),
                            FeeCapOccurrence: z
                              .float32()
                              .exactOptional()
                              .openapi({
                                description:
                                  'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                title: 'FeeCapOccurrence',
                              }),
                            FeeCapAmount: z
                              .string()
                              .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                              .exactOptional()
                              .openapi({
                                description:
                                  'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                                title: 'FeeCapAmount',
                              }),
                            CappingPeriod: z
                              .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                title: 'CappingPeriod',
                              }),
                            Notes: z
                              .array(
                                z
                                  .string()
                                  .min(1)
                                  .max(2000)
                                  .openapi({ description: 'maxLength 2000 text' }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Free text for adding  extra details for fee charge cap',
                                title: 'Notes',
                              }),
                            OtherFeeType: z
                              .array(
                                z
                                  .object({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Other fee type code which is not available in the standard code set',
                                    required: ['Name', 'Description'],
                                  }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  'Other fee type code which is not available in the standard code set',
                                title: 'OtherFeeType',
                              }),
                          })
                          .openapi({
                            description:
                              'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                            required: ['FeeType', 'MinMaxType'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                        title: 'FeeChargeCap',
                      }),
                    OtherFeeCategoryType: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        title: 'OtherFeeCategoryType',
                        required: ['Name', 'Description'],
                      }),
                    OtherFeeType: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        FeeCategory: z
                          .enum(['Other', 'Servicing'])
                          .openapi({
                            description:
                              'Categorisation of fees and charges into standard categories.',
                            title: 'FeeCategory',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other Fee/charge type which is not available in the standard code set',
                        title: 'OtherFeeType',
                        required: ['FeeCategory', 'Name', 'Description'],
                      }),
                    OtherFeeRateType: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other fee rate type which is not available in the standard code set',
                        title: 'OtherFeeRateType',
                        required: ['Name', 'Description'],
                      }),
                    OtherApplicationFrequency: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other application frequencies not covered in the standard code list',
                        title: 'OtherApplicationFrequency',
                        required: ['Name', 'Description'],
                      }),
                    OtherCalculationFrequency: z
                      .strictObject({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Other calculation frequency which is not available in standard code set.',
                        title: 'OtherCalculationFrequency',
                        required: ['Name', 'Description'],
                      }),
                    FeeApplicableRange: z
                      .strictObject({
                        MinimumAmount: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)',
                            title: 'MinimumAmount',
                          }),
                        MaximumAmount: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum Amount on which fee is applicable (where it is expressed as an amount)',
                            title: 'MaximumAmount',
                          }),
                        MinimumRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Minimum rate on which fee/charge is applicable(where it is expressed as a rate)',
                            title: 'MinimumRate',
                          }),
                        MaximumRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum rate on which fee/charge is applicable(where it is expressed as a rate)',
                            title: 'MaximumRate',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Range or amounts or rates for which the fee/charge applies',
                        title: 'FeeApplicableRange',
                        required: [],
                      }),
                  })
                  .openapi({
                    description: 'Other fees/charges details',
                    required: ['FeeCategory', 'FeeType', 'ApplicationFrequency'],
                  }),
              )
              .min(1)
              .openapi({ description: 'Other fees/charges details', title: 'FeeChargeDetail' }),
            FeeChargeCap: z
              .array(
                z
                  .object({
                    FeeType: z
                      .array(
                        z
                          .enum([
                            'Other',
                            'ServiceCAccountFee',
                            'ServiceCAccountFeeMonthly',
                            'ServiceCAccountFeeQuarterly',
                            'ServiceCFixedTariff',
                            'ServiceCBusiDepAccBreakage',
                            'ServiceCMinimumMonthlyFee',
                            'ServiceCOther',
                          ])
                          .openapi({ description: 'Fee/charge type which is being capped' }),
                      )
                      .min(1)
                      .openapi({
                        description: 'Fee/charge type which is being capped',
                        title: 'FeeType',
                      }),
                    MinMaxType: z
                      .enum(['Minimum', 'Maximum'])
                      .openapi({ description: 'Min Max type', title: 'MinMaxType' }),
                    FeeCapOccurrence: z
                      .float32()
                      .exactOptional()
                      .openapi({
                        description:
                          'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                        title: 'FeeCapOccurrence',
                      }),
                    FeeCapAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                        title: 'FeeCapAmount',
                      }),
                    CappingPeriod: z
                      .enum(['Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                      .exactOptional()
                      .openapi({
                        description:
                          'Period e.g. day, week, month etc. for which the fee/charge is capped',
                        title: 'CappingPeriod',
                      }),
                    Notes: z
                      .array(
                        z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Free text for adding  extra details for fee charge cap',
                        title: 'Notes',
                      }),
                    OtherFeeType: z
                      .array(
                        z
                          .object({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .openapi({
                            description:
                              'Other fee type code which is not available in the standard code set',
                            required: ['Name', 'Description'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Other fee type code which is not available in the standard code set',
                        title: 'OtherFeeType',
                      }),
                  })
                  .openapi({
                    description:
                      'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                    required: ['FeeType', 'MinMaxType'],
                  }),
              )
              .exactOptional()
              .openapi({
                description:
                  'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                title: 'FeeChargeCap',
              }),
          })
          .openapi({
            description:
              'Contains details of fees and charges which are not associated with either Overdraft or features/benefits',
            required: ['FeeChargeDetail'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Contains details of fees and charges which are not associated with either Overdraft or features/benefits',
        title: 'OtherFeesCharges',
      }),
  })
  .openapi({ title: 'BCA', required: [] })
  .openapi('OBBCAData1')

const OBPCAData1Schema: z.ZodType<OBPCAData1Type> = z
  .strictObject({
    ProductDetails: z
      .strictObject({
        Segment: z
          .array(
            z
              .enum([
                'Basic',
                'BenefitAndReward',
                'CreditInterest',
                'Cashback',
                'General',
                'Graduate',
                'Other',
                'Overdraft',
                'Packaged',
                'Premium',
                'Reward',
                'Student',
                'YoungAdult',
                'Youth',
              ])
              .openapi({
                description:
                  'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to PCA products, they are segmented in relation to different markets that they wish to focus on. ',
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd \nWith respect to PCA products, they are segmented in relation to different markets that they wish to focus on. ',
            title: 'Segment',
          }),
        MonthlyMaximumCharge: z
          .string()
          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
          .exactOptional()
          .openapi({
            description:
              'The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order',
            title: 'MonthlyMaximumCharge',
          }),
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({
            description: 'Optional additional notes to supplement the Core product details',
            title: 'Notes',
          }),
      })
      .exactOptional()
      .openapi({ title: 'ProductDetails', required: [] }),
    CreditInterest: z
      .strictObject({
        TierBandSet: z
          .array(
            z
              .object({
                TierBandMethod: z
                  .enum(['Tiered', 'Whole'])
                  .openapi({
                    description:
                      'The methodology of how credit interest is charged. It can be:-\n\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n\n3. Whole\nThe same interest rate is applied irrespective of the PCA balance',
                    title: 'TierBandMethod',
                  }),
                CalculationMethod: z
                  .enum(['Compound', 'SimpleInterest'])
                  .exactOptional()
                  .openapi({
                    description: 'Methods of calculating interest',
                    title: 'CalculationMethod',
                  }),
                Destination: z
                  .enum(['PayAway', 'SelfCredit'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Describes whether accrued interest is payable only to the PCA or to another bank account',
                    title: 'Destination',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the Tier Band Set details',
                    title: 'Notes',
                  }),
                TierBand: z
                  .array(
                    z
                      .object({
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a PCA.',
                            title: 'Identification',
                          }),
                        TierValueMinimum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'Minimum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMinimum',
                          }),
                        TierValueMaximum: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Maximum deposit value for which the credit interest tier applies.',
                            title: 'TierValueMaximum',
                          }),
                        CalculationFrequency: z
                          .enum([
                            'PerAcademicTerm',
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .exactOptional()
                          .openapi({
                            description: 'How often is credit interest calculated for the account.',
                            title: 'CalculationFrequency',
                          }),
                        ApplicationFrequency: z
                          .enum([
                            'PerAcademicTerm',
                            'Daily',
                            'HalfYearly',
                            'Monthly',
                            'Other',
                            'Quarterly',
                            'PerStatementDate',
                            'Weekly',
                            'Yearly',
                          ])
                          .openapi({
                            description:
                              "How often is interest applied to the PCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's PCA.",
                            title: 'ApplicationFrequency',
                          }),
                        DepositInterestAppliedCoverage: z
                          .enum(['Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description: 'Amount on which Interest applied.',
                            title: 'DepositInterestAppliedCoverage',
                          }),
                        FixedVariableInterestRateType: z
                          .enum(['Fixed', 'Variable'])
                          .openapi({
                            description: 'Type of interest rate, Fixed or Variable',
                            title: 'FixedVariableInterestRateType',
                          }),
                        AER: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description:
                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \nRead more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A',
                            title: 'AER',
                          }),
                        BankInterestRateType: z
                          .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the PCA.',
                            title: 'BankInterestRateType',
                          }),
                        BankInterestRate: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Bank Interest for the PCA product',
                            title: 'BankInterestRate',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier Band details',
                            title: 'Notes',
                          }),
                        OtherBankInterestType: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other interest rate types which are not available in the standard code list',
                            title: 'OtherBankInterestType',
                            required: ['Name', 'Description'],
                          }),
                        OtherApplicationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other application frequencies that are not available in the standard code list',
                            title: 'OtherApplicationFrequency',
                            required: ['Name', 'Description'],
                          }),
                        OtherCalculationFrequency: z
                          .strictObject({
                            Code: z
                              .string()
                              .regex(/^\w{0,4}$/)
                              .min(0)
                              .max(4)
                              .exactOptional()
                              .openapi({
                                description:
                                  'The four letter Mnemonic used within an XML file to identify a code',
                                title: 'Code',
                              }),
                            Name: z
                              .string()
                              .min(1)
                              .max(70)
                              .openapi({
                                description: 'Long name associated with the code',
                                title: 'Name',
                              }),
                            Description: z
                              .string()
                              .min(1)
                              .max(350)
                              .openapi({
                                description: 'Description to describe the purpose of the code',
                                title: 'Description',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Other calculation frequency which is not available in the standard code set.',
                            title: 'OtherCalculationFrequency',
                            required: ['Name', 'Description'],
                          }),
                      })
                      .openapi({
                        description: 'Tier Band Details',
                        required: [
                          'TierValueMinimum',
                          'ApplicationFrequency',
                          'FixedVariableInterestRateType',
                          'AER',
                        ],
                      }),
                  )
                  .min(1)
                  .openapi({ description: 'Tier Band Details', title: 'TierBand' }),
              })
              .openapi({
                description:
                  'The group of tiers or bands for which credit interest can be applied.',
                required: ['TierBandMethod', 'TierBand'],
              }),
          )
          .min(1)
          .openapi({
            description: 'The group of tiers or bands for which credit interest can be applied.',
            title: 'TierBandSet',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Details about the interest that may be payable to the PCA account holders',
        title: 'CreditInterest',
        required: ['TierBandSet'],
      }),
    Overdraft: z
      .strictObject({
        Notes: z
          .array(z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }))
          .exactOptional()
          .openapi({ description: 'Associated Notes about the overdraft rates', title: 'Notes' }),
        OverdraftTierBandSet: z
          .array(
            z
              .object({
                TierBandMethod: z
                  .enum(['Tiered', 'Whole', 'Banded'])
                  .openapi({
                    description:
                      "The methodology of how overdraft is charged. It can be:\n'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). \n'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation\n'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.",
                    title: 'TierBandMethod',
                  }),
                OverdraftType: z
                  .enum(['Committed', 'OnDemand', 'Other'])
                  .exactOptional()
                  .openapi({
                    description:
                      "An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.",
                    title: 'OverdraftType',
                  }),
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of a  Tier Band for a overdraft product.',
                    title: 'Identification',
                  }),
                AuthorisedIndicator: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Indicates if the Overdraft is authorised (Y) or unauthorised (N)',
                    title: 'AuthorisedIndicator',
                  }),
                BufferAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.',
                    title: 'BufferAmount',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional additional notes to supplement the overdraft Tier Band Set details',
                    title: 'Notes',
                  }),
                OverdraftTierBand: z
                  .array(
                    z
                      .object({
                        Identification: z
                          .string()
                          .min(1)
                          .max(35)
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique and unambiguous identification of a  Tier Band for a overdraft.',
                            title: 'Identification',
                          }),
                        TierValueMin: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .openapi({
                            description: 'Minimum value of Overdraft Tier/Band',
                            title: 'TierValueMin',
                          }),
                        TierValueMax: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description: 'Maximum value of Overdraft Tier/Band',
                            title: 'TierValueMax',
                          }),
                        OverdraftInterestChargingCoverage: z
                          .enum(['Tiered', 'Whole'])
                          .exactOptional()
                          .openapi({
                            description: 'Interest charged on whole amount or tiered/banded',
                            title: 'OverdraftInterestChargingCoverage',
                          }),
                        BankGuaranteedIndicator: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'Indicates that a bank provides the overdraft limit up to TierValueMIn to all customers automatically',
                            title: 'BankGuaranteedIndicator',
                          }),
                        EAR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently\nused interchangeably), being the actual annual interest rate of an Overdraft.',
                            title: 'EAR',
                          }),
                        RepresentativeAPR: z
                          .string()
                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account.',
                            title: 'RepresentativeAPR',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Optional additional notes to supplement the Tier/band details',
                            title: 'Notes',
                          }),
                        OverdraftFeesCharges: z
                          .array(
                            z
                              .object({
                                OverdraftFeeChargeCap: z
                                  .array(
                                    z
                                      .object({
                                        FeeType: z
                                          .array(
                                            z
                                              .enum([
                                                'ArrangedOverdraft',
                                                'EmergencyBorrowing',
                                                'BorrowingItem',
                                                'OverdraftRenewal',
                                                'AnnualReview',
                                                'OverdraftSetup',
                                                'Surcharge',
                                                'TempOverdraft',
                                                'UnauthorisedBorrowing',
                                                'UnauthorisedPaidTrans',
                                                'Other',
                                                'UnauthorisedUnpaidTrans',
                                              ])
                                              .openapi({ description: 'Overdraft fee type' }),
                                          )
                                          .min(1)
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                            title: 'FeeType',
                                          }),
                                        OverdraftControlIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies for the overdraft control feature/benefit',
                                            title: 'OverdraftControlIndicator',
                                          }),
                                        MinMaxType: z
                                          .enum(['Minimum', 'Maximum'])
                                          .openapi({
                                            description:
                                              'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                            title: 'MinMaxType',
                                          }),
                                        FeeCapOccurrence: z
                                          .float32()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                            title: 'FeeCapOccurrence',
                                          }),
                                        FeeCapAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Cap amount charged for a fee/charge',
                                            title: 'FeeCapAmount',
                                          }),
                                        CappingPeriod: z
                                          .enum([
                                            'AcademicTerm',
                                            'Day',
                                            'Half Year',
                                            'Month',
                                            'Quarter',
                                            'Week',
                                            'Year',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                            title: 'CappingPeriod',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Notes related to Overdraft fee charge cap',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .array(
                                            z
                                              .object({
                                                Code: z
                                                  .string()
                                                  .regex(/^\w{0,4}$/)
                                                  .min(0)
                                                  .max(4)
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'The four letter Mnemonic used within an XML file to identify a code',
                                                    title: 'Code',
                                                  }),
                                                Name: z
                                                  .string()
                                                  .min(1)
                                                  .max(70)
                                                  .openapi({
                                                    description:
                                                      'Long name associated with the code',
                                                    title: 'Name',
                                                  }),
                                                Description: z
                                                  .string()
                                                  .min(1)
                                                  .max(350)
                                                  .openapi({
                                                    description:
                                                      'Description to describe the purpose of the code',
                                                    title: 'Description',
                                                  }),
                                              })
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                required: ['Name', 'Description'],
                                              }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                        required: ['FeeType', 'MinMaxType'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                    title: 'OverdraftFeeChargeCap',
                                  }),
                                OverdraftFeeChargeDetail: z
                                  .array(
                                    z
                                      .object({
                                        FeeType: z
                                          .enum([
                                            'ArrangedOverdraft',
                                            'EmergencyBorrowing',
                                            'BorrowingItem',
                                            'OverdraftRenewal',
                                            'AnnualReview',
                                            'OverdraftSetup',
                                            'Surcharge',
                                            'TempOverdraft',
                                            'UnauthorisedBorrowing',
                                            'UnauthorisedPaidTrans',
                                            'Other',
                                            'UnauthorisedUnpaidTrans',
                                          ])
                                          .openapi({
                                            description: 'Overdraft fee type',
                                            title: 'FeeType',
                                          }),
                                        OverdraftControlIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies for the overdraft control feature/benefit',
                                            title: 'OverdraftControlIndicator',
                                          }),
                                        IncrementalBorrowingAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                            title: 'IncrementalBorrowingAmount',
                                          }),
                                        FeeAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                            title: 'FeeAmount',
                                          }),
                                        FeeRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRate',
                                          }),
                                        FeeRateType: z
                                          .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                            title: 'FeeRateType',
                                          }),
                                        ApplicationFrequency: z
                                          .enum([
                                            'AccountClosing',
                                            'AccountOpening',
                                            'AcademicTerm',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAccountAnniversary',
                                            'Other',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .openapi({
                                            description:
                                              'Frequency at which the overdraft charge is applied to the account',
                                            title: 'ApplicationFrequency',
                                          }),
                                        CalculationFrequency: z
                                          .enum([
                                            'AccountClosing',
                                            'AccountOpening',
                                            'AcademicTerm',
                                            'ChargingPeriod',
                                            'Daily',
                                            'PerItem',
                                            'Monthly',
                                            'OnAccountAnniversary',
                                            'Other',
                                            'PerHour',
                                            'PerOccurrence',
                                            'PerSheet',
                                            'PerTransaction',
                                            'PerTransactionAmount',
                                            'PerTransactionPercentage',
                                            'Quarterly',
                                            'SixMonthly',
                                            'StatementMonthly',
                                            'Weekly',
                                            'Yearly',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'How often is the overdraft fee/charge calculated for the account.',
                                            title: 'CalculationFrequency',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({ description: 'maxLength 2000 text' }),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                            title: 'Notes',
                                          }),
                                        OtherFeeType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other Fee type which is not available in the standard code set',
                                            title: 'OtherFeeType',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherFeeRateType: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other fee rate type code which is not available in the standard code set',
                                            title: 'OtherFeeRateType',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherApplicationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other application frequencies that are not available in the standard code list',
                                            title: 'OtherApplicationFrequency',
                                            required: ['Name', 'Description'],
                                          }),
                                        OtherCalculationFrequency: z
                                          .strictObject({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Other calculation frequency which is not available in the standard code set.',
                                            title: 'OtherCalculationFrequency',
                                            required: ['Name', 'Description'],
                                          }),
                                        OverdraftFeeChargeCap: z
                                          .strictObject({
                                            FeeType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'ArrangedOverdraft',
                                                    'EmergencyBorrowing',
                                                    'BorrowingItem',
                                                    'OverdraftRenewal',
                                                    'AnnualReview',
                                                    'OverdraftSetup',
                                                    'Surcharge',
                                                    'TempOverdraft',
                                                    'UnauthorisedBorrowing',
                                                    'UnauthorisedPaidTrans',
                                                    'Other',
                                                    'UnauthorisedUnpaidTrans',
                                                  ])
                                                  .openapi({ description: 'Overdraft fee type' }),
                                              )
                                              .min(1)
                                              .openapi({
                                                description:
                                                  'Fee/charge type which is being capped',
                                                title: 'FeeType',
                                              }),
                                            OverdraftControlIndicator: z
                                              .boolean()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Specifies for the overdraft control feature/benefit',
                                                title: 'OverdraftControlIndicator',
                                              }),
                                            MinMaxType: z
                                              .enum(['Minimum', 'Maximum'])
                                              .openapi({
                                                description:
                                                  'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                                title: 'MinMaxType',
                                              }),
                                            FeeCapOccurrence: z
                                              .float32()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                                title: 'FeeCapOccurrence',
                                              }),
                                            FeeCapAmount: z
                                              .string()
                                              .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                              .exactOptional()
                                              .openapi({
                                                description: 'Cap amount charged for a fee/charge',
                                                title: 'FeeCapAmount',
                                              }),
                                            CappingPeriod: z
                                              .enum([
                                                'AcademicTerm',
                                                'Day',
                                                'Half Year',
                                                'Month',
                                                'Quarter',
                                                'Week',
                                                'Year',
                                              ])
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                                title: 'CappingPeriod',
                                              }),
                                            Notes: z
                                              .array(
                                                z
                                                  .string()
                                                  .min(1)
                                                  .max(2000)
                                                  .openapi({ description: 'maxLength 2000 text' }),
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Notes related to Overdraft fee charge cap',
                                                title: 'Notes',
                                              }),
                                            OtherFeeType: z
                                              .array(
                                                z
                                                  .object({
                                                    Code: z
                                                      .string()
                                                      .regex(/^\w{0,4}$/)
                                                      .min(0)
                                                      .max(4)
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          'The four letter Mnemonic used within an XML file to identify a code',
                                                        title: 'Code',
                                                      }),
                                                    Name: z
                                                      .string()
                                                      .min(1)
                                                      .max(70)
                                                      .openapi({
                                                        description:
                                                          'Long name associated with the code',
                                                        title: 'Name',
                                                      }),
                                                    Description: z
                                                      .string()
                                                      .min(1)
                                                      .max(350)
                                                      .openapi({
                                                        description:
                                                          'Description to describe the purpose of the code',
                                                        title: 'Description',
                                                      }),
                                                  })
                                                  .openapi({
                                                    description:
                                                      'Other fee type code which is not available in the standard code set',
                                                    required: ['Name', 'Description'],
                                                  }),
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'Other fee type code which is not available in the standard code set',
                                                title: 'OtherFeeType',
                                              }),
                                          })
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                            title: 'OverdraftFeeChargeCap',
                                            required: ['FeeType', 'MinMaxType'],
                                          }),
                                      })
                                      .openapi({
                                        description: 'Details about the fees/charges',
                                        required: ['FeeType', 'ApplicationFrequency'],
                                      }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Details about the fees/charges',
                                    title: 'OverdraftFeeChargeDetail',
                                  }),
                              })
                              .openapi({
                                description: 'Overdraft fees and charges',
                                required: ['OverdraftFeeChargeDetail'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Overdraft fees and charges',
                            title: 'OverdraftFeesCharges',
                          }),
                      })
                      .openapi({
                        description: 'Provides overdraft details for a specific tier or band',
                        required: ['TierValueMin'],
                      }),
                  )
                  .min(1)
                  .openapi({
                    description: 'Provides overdraft details for a specific tier or band',
                    title: 'OverdraftTierBand',
                  }),
                OverdraftFeesCharges: z
                  .array(
                    z
                      .object({
                        OverdraftFeeChargeCap: z
                          .array(
                            z
                              .object({
                                FeeType: z
                                  .array(
                                    z
                                      .enum([
                                        'ArrangedOverdraft',
                                        'EmergencyBorrowing',
                                        'BorrowingItem',
                                        'OverdraftRenewal',
                                        'AnnualReview',
                                        'OverdraftSetup',
                                        'Surcharge',
                                        'TempOverdraft',
                                        'UnauthorisedBorrowing',
                                        'UnauthorisedPaidTrans',
                                        'Other',
                                        'UnauthorisedUnpaidTrans',
                                      ])
                                      .openapi({ description: 'Overdraft fee type' }),
                                  )
                                  .min(1)
                                  .openapi({
                                    description: 'Fee/charge type which is being capped',
                                    title: 'FeeType',
                                  }),
                                OverdraftControlIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Specifies for the overdraft control feature/benefit',
                                    title: 'OverdraftControlIndicator',
                                  }),
                                MinMaxType: z
                                  .enum(['Minimum', 'Maximum'])
                                  .openapi({
                                    description:
                                      'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                    title: 'MinMaxType',
                                  }),
                                FeeCapOccurrence: z
                                  .float32()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                    title: 'FeeCapOccurrence',
                                  }),
                                FeeCapAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description: 'Cap amount charged for a fee/charge',
                                    title: 'FeeCapAmount',
                                  }),
                                CappingPeriod: z
                                  .enum([
                                    'AcademicTerm',
                                    'Day',
                                    'Half Year',
                                    'Month',
                                    'Quarter',
                                    'Week',
                                    'Year',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                    title: 'CappingPeriod',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'Notes related to Overdraft fee charge cap',
                                    title: 'Notes',
                                  }),
                                OtherFeeType: z
                                  .array(
                                    z
                                      .object({
                                        Code: z
                                          .string()
                                          .regex(/^\w{0,4}$/)
                                          .min(0)
                                          .max(4)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The four letter Mnemonic used within an XML file to identify a code',
                                            title: 'Code',
                                          }),
                                        Name: z
                                          .string()
                                          .min(1)
                                          .max(70)
                                          .openapi({
                                            description: 'Long name associated with the code',
                                            title: 'Name',
                                          }),
                                        Description: z
                                          .string()
                                          .min(1)
                                          .max(350)
                                          .openapi({
                                            description:
                                              'Description to describe the purpose of the code',
                                            title: 'Description',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Other fee type code which is not available in the standard code set',
                                        required: ['Name', 'Description'],
                                      }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee type code which is not available in the standard code set',
                                    title: 'OtherFeeType',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                required: ['FeeType', 'MinMaxType'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Details about any caps (maximum charges) that apply to a particular fee/charge',
                            title: 'OverdraftFeeChargeCap',
                          }),
                        OverdraftFeeChargeDetail: z
                          .array(
                            z
                              .object({
                                FeeType: z
                                  .enum([
                                    'ArrangedOverdraft',
                                    'EmergencyBorrowing',
                                    'BorrowingItem',
                                    'OverdraftRenewal',
                                    'AnnualReview',
                                    'OverdraftSetup',
                                    'Surcharge',
                                    'TempOverdraft',
                                    'UnauthorisedBorrowing',
                                    'UnauthorisedPaidTrans',
                                    'Other',
                                    'UnauthorisedUnpaidTrans',
                                  ])
                                  .openapi({ description: 'Overdraft fee type', title: 'FeeType' }),
                                OverdraftControlIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Specifies for the overdraft control feature/benefit',
                                    title: 'OverdraftControlIndicator',
                                  }),
                                IncrementalBorrowingAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Every additional tranche of an overdraft balance to which an overdraft fee is applied',
                                    title: 'IncrementalBorrowingAmount',
                                  }),
                                FeeAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)',
                                    title: 'FeeAmount',
                                  }),
                                FeeRate: z
                                  .string()
                                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRate',
                                  }),
                                FeeRateType: z
                                  .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)',
                                    title: 'FeeRateType',
                                  }),
                                ApplicationFrequency: z
                                  .enum([
                                    'AccountClosing',
                                    'AccountOpening',
                                    'AcademicTerm',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAccountAnniversary',
                                    'Other',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .openapi({
                                    description:
                                      'Frequency at which the overdraft charge is applied to the account',
                                    title: 'ApplicationFrequency',
                                  }),
                                CalculationFrequency: z
                                  .enum([
                                    'AccountClosing',
                                    'AccountOpening',
                                    'AcademicTerm',
                                    'ChargingPeriod',
                                    'Daily',
                                    'PerItem',
                                    'Monthly',
                                    'OnAccountAnniversary',
                                    'Other',
                                    'PerHour',
                                    'PerOccurrence',
                                    'PerSheet',
                                    'PerTransaction',
                                    'PerTransactionAmount',
                                    'PerTransactionPercentage',
                                    'Quarterly',
                                    'SixMonthly',
                                    'StatementMonthly',
                                    'Weekly',
                                    'Yearly',
                                  ])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'How often is the overdraft fee/charge calculated for the account.',
                                    title: 'CalculationFrequency',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({ description: 'maxLength 2000 text' }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                    title: 'Notes',
                                  }),
                                OtherFeeType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other Fee type which is not available in the standard code set',
                                    title: 'OtherFeeType',
                                    required: ['Name', 'Description'],
                                  }),
                                OtherFeeRateType: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other fee rate type code which is not available in the standard code set',
                                    title: 'OtherFeeRateType',
                                    required: ['Name', 'Description'],
                                  }),
                                OtherApplicationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other application frequencies that are not available in the standard code list',
                                    title: 'OtherApplicationFrequency',
                                    required: ['Name', 'Description'],
                                  }),
                                OtherCalculationFrequency: z
                                  .strictObject({
                                    Code: z
                                      .string()
                                      .regex(/^\w{0,4}$/)
                                      .min(0)
                                      .max(4)
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The four letter Mnemonic used within an XML file to identify a code',
                                        title: 'Code',
                                      }),
                                    Name: z
                                      .string()
                                      .min(1)
                                      .max(70)
                                      .openapi({
                                        description: 'Long name associated with the code',
                                        title: 'Name',
                                      }),
                                    Description: z
                                      .string()
                                      .min(1)
                                      .max(350)
                                      .openapi({
                                        description:
                                          'Description to describe the purpose of the code',
                                        title: 'Description',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Other calculation frequency which is not available in the standard code set.',
                                    title: 'OtherCalculationFrequency',
                                    required: ['Name', 'Description'],
                                  }),
                                OverdraftFeeChargeCap: z
                                  .strictObject({
                                    FeeType: z
                                      .array(
                                        z
                                          .enum([
                                            'ArrangedOverdraft',
                                            'EmergencyBorrowing',
                                            'BorrowingItem',
                                            'OverdraftRenewal',
                                            'AnnualReview',
                                            'OverdraftSetup',
                                            'Surcharge',
                                            'TempOverdraft',
                                            'UnauthorisedBorrowing',
                                            'UnauthorisedPaidTrans',
                                            'Other',
                                            'UnauthorisedUnpaidTrans',
                                          ])
                                          .openapi({ description: 'Overdraft fee type' }),
                                      )
                                      .min(1)
                                      .openapi({
                                        description: 'Fee/charge type which is being capped',
                                        title: 'FeeType',
                                      }),
                                    OverdraftControlIndicator: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Specifies for the overdraft control feature/benefit',
                                        title: 'OverdraftControlIndicator',
                                      }),
                                    MinMaxType: z
                                      .enum(['Minimum', 'Maximum'])
                                      .openapi({
                                        description:
                                          'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                                        title: 'MinMaxType',
                                      }),
                                    FeeCapOccurrence: z
                                      .float32()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                                        title: 'FeeCapOccurrence',
                                      }),
                                    FeeCapAmount: z
                                      .string()
                                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                      .exactOptional()
                                      .openapi({
                                        description: 'Cap amount charged for a fee/charge',
                                        title: 'FeeCapAmount',
                                      }),
                                    CappingPeriod: z
                                      .enum([
                                        'AcademicTerm',
                                        'Day',
                                        'Half Year',
                                        'Month',
                                        'Quarter',
                                        'Week',
                                        'Year',
                                      ])
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Period e.g. day, week, month etc. for which the fee/charge is capped',
                                        title: 'CappingPeriod',
                                      }),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({ description: 'maxLength 2000 text' }),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description: 'Notes related to Overdraft fee charge cap',
                                        title: 'Notes',
                                      }),
                                    OtherFeeType: z
                                      .array(
                                        z
                                          .object({
                                            Code: z
                                              .string()
                                              .regex(/^\w{0,4}$/)
                                              .min(0)
                                              .max(4)
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  'The four letter Mnemonic used within an XML file to identify a code',
                                                title: 'Code',
                                              }),
                                            Name: z
                                              .string()
                                              .min(1)
                                              .max(70)
                                              .openapi({
                                                description: 'Long name associated with the code',
                                                title: 'Name',
                                              }),
                                            Description: z
                                              .string()
                                              .min(1)
                                              .max(350)
                                              .openapi({
                                                description:
                                                  'Description to describe the purpose of the code',
                                                title: 'Description',
                                              }),
                                          })
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                          }),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Other fee type code which is not available in the standard code set',
                                        title: 'OtherFeeType',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular fee/charge',
                                    title: 'OverdraftFeeChargeCap',
                                    required: ['FeeType', 'MinMaxType'],
                                  }),
                              })
                              .openapi({
                                description: 'Details about the fees/charges',
                                required: ['FeeType', 'ApplicationFrequency'],
                              }),
                          )
                          .min(1)
                          .openapi({
                            description: 'Details about the fees/charges',
                            title: 'OverdraftFeeChargeDetail',
                          }),
                      })
                      .openapi({
                        description: 'Overdraft fees and charges details',
                        required: ['OverdraftFeeChargeDetail'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Overdraft fees and charges details',
                    title: 'OverdraftFeesCharges',
                  }),
              })
              .openapi({
                description: 'Tier band set details',
                required: ['TierBandMethod', 'OverdraftTierBand'],
              }),
          )
          .min(1)
          .openapi({ description: 'Tier band set details', title: 'OverdraftTierBandSet' }),
      })
      .exactOptional()
      .openapi({
        description: 'Details about Overdraft rates, fees & charges',
        title: 'Overdraft',
        required: ['OverdraftTierBandSet'],
      }),
    OtherFeesCharges: z
      .strictObject({
        FeeChargeDetail: z
          .array(
            z
              .object({
                FeeCategory: z
                  .enum(['Other', 'Servicing'])
                  .openapi({
                    description: 'Categorisation of fees and charges into standard categories.',
                    title: 'FeeCategory',
                  }),
                FeeType: z
                  .enum([
                    'ServiceCAccountFee',
                    'ServiceCAccountFeeMonthly',
                    'ServiceCOther',
                    'Other',
                  ])
                  .openapi({ description: 'Fee/Charge Type', title: 'FeeType' }),
                FeeAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                    title: 'FeeAmount',
                  }),
                FeeRate: z
                  .string()
                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                    title: 'FeeRate',
                  }),
                FeeRateType: z
                  .enum(['LinkedBaseRate', 'Gross', 'Net', 'Other'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)',
                    title: 'FeeRateType',
                  }),
                ApplicationFrequency: z
                  .enum([
                    'AccountClosing',
                    'AccountOpening',
                    'AcademicTerm',
                    'ChargingPeriod',
                    'Daily',
                    'PerItem',
                    'Monthly',
                    'OnAccountAnniversary',
                    'Other',
                    'PerHour',
                    'PerOccurrence',
                    'PerSheet',
                    'PerTransaction',
                    'PerTransactionAmount',
                    'PerTransactionPercentage',
                    'Quarterly',
                    'SixMonthly',
                    'StatementMonthly',
                    'Weekly',
                    'Yearly',
                  ])
                  .openapi({
                    description: 'How frequently the fee/charge is applied to the account',
                    title: 'ApplicationFrequency',
                  }),
                CalculationFrequency: z
                  .enum([
                    'AccountClosing',
                    'AccountOpening',
                    'AcademicTerm',
                    'ChargingPeriod',
                    'Daily',
                    'PerItem',
                    'Monthly',
                    'OnAccountAnniversary',
                    'Other',
                    'PerHour',
                    'PerOccurrence',
                    'PerSheet',
                    'PerTransaction',
                    'PerTransactionAmount',
                    'PerTransactionPercentage',
                    'Quarterly',
                    'SixMonthly',
                    'StatementMonthly',
                    'Weekly',
                    'Yearly',
                  ])
                  .exactOptional()
                  .openapi({
                    description: 'How frequently the fee/charge is calculated',
                    title: 'CalculationFrequency',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Optional additional notes to supplement the fee/charge details.',
                    title: 'Notes',
                  }),
                OtherFeeCategoryType: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                  })
                  .exactOptional()
                  .openapi({ title: 'OtherFeeCategoryType', required: ['Name', 'Description'] }),
                OtherFeeType: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    FeeCategory: z
                      .enum(['Other', 'Servicing'])
                      .openapi({
                        description: 'Categorisation of fees and charges into standard categories.',
                        title: 'FeeCategory',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other Fee/charge type which is not available in the standard code set',
                    title: 'OtherFeeType',
                    required: ['FeeCategory', 'Name', 'Description'],
                  }),
                OtherFeeRateType: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other fee rate type which is not available in the standard code set',
                    title: 'OtherFeeRateType',
                    required: ['Name', 'Description'],
                  }),
                OtherApplicationFrequency: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other application frequencies not covered in the standard code list',
                    title: 'OtherApplicationFrequency',
                    required: ['Name', 'Description'],
                  }),
                OtherCalculationFrequency: z
                  .strictObject({
                    Code: z
                      .string()
                      .regex(/^\w{0,4}$/)
                      .min(0)
                      .max(4)
                      .exactOptional()
                      .openapi({
                        description:
                          'The four letter Mnemonic used within an XML file to identify a code',
                        title: 'Code',
                      }),
                    Name: z
                      .string()
                      .min(1)
                      .max(70)
                      .openapi({
                        description: 'Long name associated with the code',
                        title: 'Name',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description to describe the purpose of the code',
                        title: 'Description',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Other calculation frequency which is not available in standard code set.',
                    title: 'OtherCalculationFrequency',
                    required: ['Name', 'Description'],
                  }),
                FeeChargeCap: z
                  .array(
                    z
                      .object({
                        FeeType: z
                          .array(
                            z
                              .enum([
                                'ServiceCAccountFee',
                                'ServiceCAccountFeeMonthly',
                                'ServiceCOther',
                                'Other',
                              ])
                              .openapi({ description: 'Fee/charge type which is being capped' }),
                          )
                          .min(1)
                          .openapi({
                            description: 'Fee/charge type which is being capped',
                            title: 'FeeType',
                          }),
                        MinMaxType: z
                          .enum(['Minimum', 'Maximum'])
                          .openapi({
                            description:
                              'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                            title: 'MinMaxType',
                          }),
                        FeeCapOccurrence: z
                          .float32()
                          .exactOptional()
                          .openapi({
                            description:
                              'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                            title: 'FeeCapOccurrence',
                          }),
                        FeeCapAmount: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                            title: 'FeeCapAmount',
                          }),
                        CappingPeriod: z
                          .enum([
                            'AcademicTerm',
                            'Day',
                            'Half Year',
                            'Month',
                            'Quarter',
                            'Week',
                            'Year',
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Period e.g. day, week, month etc. for which the fee/charge is capped',
                            title: 'CappingPeriod',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({ description: 'maxLength 2000 text' }),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Free text for adding  extra details for fee charge cap',
                            title: 'Notes',
                          }),
                        OtherFeeType: z
                          .array(
                            z
                              .object({
                                Code: z
                                  .string()
                                  .regex(/^\w{0,4}$/)
                                  .min(0)
                                  .max(4)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The four letter Mnemonic used within an XML file to identify a code',
                                    title: 'Code',
                                  }),
                                Name: z
                                  .string()
                                  .min(1)
                                  .max(70)
                                  .openapi({
                                    description: 'Long name associated with the code',
                                    title: 'Name',
                                  }),
                                Description: z
                                  .string()
                                  .min(1)
                                  .max(350)
                                  .openapi({
                                    description: 'Description to describe the purpose of the code',
                                    title: 'Description',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Other fee type code which is not available in the standard code set',
                                required: ['Name', 'Description'],
                              }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Other fee type code which is not available in the standard code set',
                            title: 'OtherFeeType',
                          }),
                      })
                      .openapi({
                        description:
                          'Details about any caps (maximum charges) that apply to a particular fee/charge',
                        required: ['FeeType', 'MinMaxType'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Details about any caps (maximum charges) that apply to a particular fee/charge',
                    title: 'FeeChargeCap',
                  }),
                FeeApplicableRange: z
                  .strictObject({
                    MinimumAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)',
                        title: 'MinimumAmount',
                      }),
                    MaximumAmount: z
                      .string()
                      .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Maximum Amount on which fee is applicable (where it is expressed as an amount)',
                        title: 'MaximumAmount',
                      }),
                    MinimumRate: z
                      .string()
                      .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Minimum rate on which fee/charge is applicable(where it is expressed as a rate)',
                        title: 'MinimumRate',
                      }),
                    MaximumRate: z
                      .string()
                      .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Maximum rate on which fee/charge is applicable(where it is expressed as a rate)',
                        title: 'MaximumRate',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Range or amounts or rates for which the fee/charge applies',
                    title: 'FeeApplicableRange',
                    required: [],
                  }),
              })
              .openapi({
                description: 'Other fees/charges details',
                required: ['FeeCategory', 'FeeType', 'ApplicationFrequency'],
              }),
          )
          .min(1)
          .openapi({ description: 'Other fees/charges details', title: 'FeeChargeDetail' }),
        FeeChargeCap: z
          .array(
            z
              .object({
                FeeType: z
                  .array(
                    z
                      .enum([
                        'ServiceCAccountFee',
                        'ServiceCAccountFeeMonthly',
                        'ServiceCOther',
                        'Other',
                      ])
                      .openapi({ description: 'Fee/charge type which is being capped' }),
                  )
                  .min(1)
                  .openapi({
                    description: 'Fee/charge type which is being capped',
                    title: 'FeeType',
                  }),
                MinMaxType: z
                  .enum(['Minimum', 'Maximum'])
                  .openapi({
                    description:
                      'Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution',
                    title: 'MinMaxType',
                  }),
                FeeCapOccurrence: z
                  .float32()
                  .exactOptional()
                  .openapi({
                    description:
                      'fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount',
                    title: 'FeeCapOccurrence',
                  }),
                FeeCapAmount: z
                  .string()
                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description:
                      'Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)',
                    title: 'FeeCapAmount',
                  }),
                CappingPeriod: z
                  .enum(['AcademicTerm', 'Day', 'Half Year', 'Month', 'Quarter', 'Week', 'Year'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Period e.g. day, week, month etc. for which the fee/charge is capped',
                    title: 'CappingPeriod',
                  }),
                Notes: z
                  .array(
                    z.string().min(1).max(2000).openapi({ description: 'maxLength 2000 text' }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'Free text for adding  extra details for fee charge cap',
                    title: 'Notes',
                  }),
                OtherFeeType: z
                  .array(
                    z
                      .object({
                        Code: z
                          .string()
                          .regex(/^\w{0,4}$/)
                          .min(0)
                          .max(4)
                          .exactOptional()
                          .openapi({
                            description:
                              'The four letter Mnemonic used within an XML file to identify a code',
                            title: 'Code',
                          }),
                        Name: z
                          .string()
                          .min(1)
                          .max(70)
                          .openapi({
                            description: 'Long name associated with the code',
                            title: 'Name',
                          }),
                        Description: z
                          .string()
                          .min(1)
                          .max(350)
                          .openapi({
                            description: 'Description to describe the purpose of the code',
                            title: 'Description',
                          }),
                      })
                      .openapi({
                        description:
                          'Other fee type code which is not available in the standard code set',
                        required: ['Name', 'Description'],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'Other fee type code which is not available in the standard code set',
                    title: 'OtherFeeType',
                  }),
              })
              .openapi({
                description:
                  'Details about any caps (maximum charges) that apply to a particular fee/charge',
                required: ['FeeType', 'MinMaxType'],
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'Details about any caps (maximum charges) that apply to a particular fee/charge',
            title: 'FeeChargeCap',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains details of fees and charges which are not associated with either borrowing or features/benefits',
        title: 'OtherFeesCharges',
        required: ['FeeChargeDetail'],
      }),
  })
  .openapi({ title: 'PCA', required: [] })
  .openapi('OBPCAData1')

type OBReadProduct2Type = {
  Data: {
    Product?: {
      ProductName?: string
      ProductId?: string
      AccountId: z.infer<typeof AccountIdSchema>
      SecondaryProductId?: string
      ProductType:
        | 'BusinessCurrentAccount'
        | 'CommercialCreditCard'
        | 'Other'
        | 'PersonalCurrentAccount'
        | 'SMELoan'
      MarketingStateId?: string
      OtherProductType?: {
        Name: string
        Description: string
        ProductDetails?: {
          Segment?: (
            | 'GEAS'
            | 'GEBA'
            | 'GEBR'
            | 'GEBU'
            | 'GECI'
            | 'GECS'
            | 'GEFB'
            | 'GEFG'
            | 'GEG'
            | 'GEGR'
            | 'GEGS'
            | 'GEOT'
            | 'GEOV'
            | 'GEPA'
            | 'GEPR'
            | 'GERE'
            | 'GEST'
            | 'GEYA'
            | 'GEYO'
            | 'PSCA'
            | 'PSES'
            | 'PSNC'
            | 'PSNP'
            | 'PSRG'
            | 'PSSS'
            | 'PSST'
            | 'PSSW'
          )[]
          FeeFreeLength?: number
          FeeFreeLengthPeriod?: 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
          MonthlyMaximumCharge?: string
          Notes?: string[]
          OtherSegment?: z.infer<typeof OBOtherCodeType1_0Schema>
        }
        CreditInterest?: {
          TierBandSet: {
            TierBandMethod: 'INBA' | 'INTI' | 'INWH'
            CalculationMethod?: z.infer<typeof OBInterestCalculationMethod1CodeSchema>
            Destination: 'INOT' | 'INPA' | 'INSC'
            Notes?: string[]
            OtherCalculationMethod?: z.infer<typeof OBOtherCodeType1_0Schema>
            OtherDestination?: z.infer<typeof OBOtherCodeType1_0Schema>
            TierBand: {
              Identification?: string
              TierValueMinimum: string
              TierValueMaximum?: string
              CalculationFrequency?:
                | 'FQAT'
                | 'FQDY'
                | 'FQHY'
                | 'FQMY'
                | 'FQOT'
                | 'FQQY'
                | 'FQSD'
                | 'FQWY'
                | 'FQYY'
              ApplicationFrequency:
                | 'FQAT'
                | 'FQDY'
                | 'FQHY'
                | 'FQMY'
                | 'FQOT'
                | 'FQQY'
                | 'FQSD'
                | 'FQWY'
                | 'FQYY'
              DepositInterestAppliedCoverage?: 'INBA' | 'INTI' | 'INWH'
              FixedVariableInterestRateType: z.infer<typeof OBInterestFixedVariableType1CodeSchema>
              AER: string
              BankInterestRateType?: 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'
              BankInterestRate?: string
              Notes?: string[]
              OtherBankInterestType?: {
                Code?: z.infer<typeof OBCodeMnemonicSchema>
                Name: z.infer<typeof Name_4Schema>
                Description: z.infer<typeof Description_3Schema>
              }
              OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_1Schema>
              OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_2Schema>
            }[]
          }[]
        }
        Overdraft?: {
          Notes?: string[]
          OverdraftTierBandSet: {
            TierBandMethod: 'INBA' | 'INTI' | 'INWH'
            OverdraftType?: 'OVCO' | 'OVOD' | 'OVOT'
            Identification?: string
            AuthorisedIndicator?: boolean
            BufferAmount?: string
            Notes?: string[]
            OverdraftTierBand: {
              Identification?: string
              TierValueMin: string
              TierValueMax?: string
              EAR?: string
              AgreementLengthMin?: number
              AgreementLengthMax?: number
              AgreementPeriod?: 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
              OverdraftInterestChargingCoverage?: 'INBA' | 'INTI' | 'INWH'
              BankGuaranteedIndicator?: boolean
              Notes?: string[]
              OverdraftFeesCharges?: {
                OverdraftFeeChargeCap?: {
                  FeeType: (
                    | 'FBAO'
                    | 'FBAR'
                    | 'FBEB'
                    | 'FBIT'
                    | 'FBOR'
                    | 'FBOS'
                    | 'FBSC'
                    | 'FBTO'
                    | 'FBUB'
                    | 'FBUT'
                    | 'FTOT'
                    | 'FTUT'
                  )[]
                  MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
                  FeeCapOccurrence?: z.infer<typeof Number_0Schema>
                  FeeCapAmount?: z.infer<typeof OBAmount1_0Schema>
                  CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
                  Notes?: string[]
                  OtherFeeType?: {
                    Code?: z.infer<typeof OBCodeMnemonicSchema>
                    Name: z.infer<typeof Name_4Schema>
                    Description: z.infer<typeof Description_3Schema>
                  }[]
                }[]
                OverdraftFeeChargeDetail: {
                  FeeType: z.infer<typeof OBOverdraftFeeType1CodeSchema>
                  NegotiableIndicator?: boolean
                  OverdraftControlIndicator?: boolean
                  IncrementalBorrowingAmount?: z.infer<typeof OBAmount1_1Schema>
                  FeeAmount?: z.infer<typeof OBAmount1_2Schema>
                  FeeRate?: z.infer<typeof OBRate1_02Schema>
                  FeeRateType?: z.infer<typeof OBInterestRateType1Code_0Schema>
                  ApplicationFrequency: z.infer<typeof OBFeeFrequency1Code_0Schema>
                  CalculationFrequency?: z.infer<typeof OBFeeFrequency1Code_1Schema>
                  Notes?: string[]
                  OverdraftFeeChargeCap?: {
                    FeeType: (
                      | 'FBAO'
                      | 'FBAR'
                      | 'FBEB'
                      | 'FBIT'
                      | 'FBOR'
                      | 'FBOS'
                      | 'FBSC'
                      | 'FBTO'
                      | 'FBUB'
                      | 'FBUT'
                      | 'FTOT'
                      | 'FTUT'
                    )[]
                    MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
                    FeeCapOccurrence?: z.infer<typeof Number_0Schema>
                    FeeCapAmount?: z.infer<typeof OBAmount1_0Schema>
                    CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
                    Notes?: string[]
                    OtherFeeType?: {
                      Code?: z.infer<typeof OBCodeMnemonicSchema>
                      Name: z.infer<typeof Name_4Schema>
                      Description: z.infer<typeof Description_3Schema>
                    }[]
                  }[]
                  OtherFeeType?: z.infer<typeof OBOtherCodeType1_3Schema>
                  OtherFeeRateType?: z.infer<typeof OBOtherCodeType1_4Schema>
                  OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_1Schema>
                  OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_2Schema>
                }[]
              }[]
            }[]
            OverdraftFeesCharges?: {
              OverdraftFeeChargeCap?: {
                FeeType: (
                  | 'FBAO'
                  | 'FBAR'
                  | 'FBEB'
                  | 'FBIT'
                  | 'FBOR'
                  | 'FBOS'
                  | 'FBSC'
                  | 'FBTO'
                  | 'FBUB'
                  | 'FBUT'
                  | 'FTOT'
                  | 'FTUT'
                )[]
                MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
                FeeCapOccurrence?: z.infer<typeof Number_0Schema>
                FeeCapAmount?: z.infer<typeof OBAmount1_0Schema>
                CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
                Notes?: string[]
                OtherFeeType?: {
                  Code?: z.infer<typeof OBCodeMnemonicSchema>
                  Name: z.infer<typeof Name_4Schema>
                  Description: z.infer<typeof Description_3Schema>
                }[]
              }[]
              OverdraftFeeChargeDetail: {
                FeeType: z.infer<typeof OBOverdraftFeeType1CodeSchema>
                NegotiableIndicator?: boolean
                OverdraftControlIndicator?: boolean
                IncrementalBorrowingAmount?: z.infer<typeof OBAmount1_1Schema>
                FeeAmount?: z.infer<typeof OBAmount1_2Schema>
                FeeRate?: z.infer<typeof OBRate1_02Schema>
                FeeRateType?: z.infer<typeof OBInterestRateType1Code_0Schema>
                ApplicationFrequency: z.infer<typeof OBFeeFrequency1Code_0Schema>
                CalculationFrequency?: z.infer<typeof OBFeeFrequency1Code_1Schema>
                Notes?: string[]
                OverdraftFeeChargeCap?: {
                  FeeType: (
                    | 'FBAO'
                    | 'FBAR'
                    | 'FBEB'
                    | 'FBIT'
                    | 'FBOR'
                    | 'FBOS'
                    | 'FBSC'
                    | 'FBTO'
                    | 'FBUB'
                    | 'FBUT'
                    | 'FTOT'
                    | 'FTUT'
                  )[]
                  MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
                  FeeCapOccurrence?: z.infer<typeof Number_0Schema>
                  FeeCapAmount?: z.infer<typeof OBAmount1_0Schema>
                  CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
                  Notes?: string[]
                  OtherFeeType?: {
                    Code?: z.infer<typeof OBCodeMnemonicSchema>
                    Name: z.infer<typeof Name_4Schema>
                    Description: z.infer<typeof Description_3Schema>
                  }[]
                }[]
                OtherFeeType?: z.infer<typeof OBOtherCodeType1_3Schema>
                OtherFeeRateType?: z.infer<typeof OBOtherCodeType1_4Schema>
                OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_1Schema>
                OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_2Schema>
              }[]
            }[]
          }[]
        }
        LoanInterest?: {
          Notes?: string[]
          LoanInterestTierBandSet: {
            TierBandMethod: 'INBA' | 'INTI' | 'INWH'
            Identification?: string
            CalculationMethod: z.infer<typeof OBInterestCalculationMethod1CodeSchema>
            Notes?: string[]
            OtherCalculationMethod?: z.infer<typeof OBOtherCodeType1_0Schema>
            LoanInterestTierBand: {
              Identification?: string
              TierValueMinimum: string
              TierValueMaximum?: string
              TierValueMinTerm: number
              MinTermPeriod: 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
              TierValueMaxTerm?: number
              MaxTermPeriod?: 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
              FixedVariableInterestRateType: z.infer<typeof OBInterestFixedVariableType1CodeSchema>
              RepAPR: string
              LoanProviderInterestRateType?: 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'
              LoanProviderInterestRate?: string
              Notes?: string[]
              OtherLoanProviderInterestRateType?: {
                Code?: z.infer<typeof OBCodeMnemonicSchema>
                Name: z.infer<typeof Name_4Schema>
                Description: z.infer<typeof Description_3Schema>
              }
              LoanInterestFeesCharges?: {
                LoanInterestFeeChargeDetail: {
                  FeeType: z.infer<typeof OBFeeType1CodeSchema>
                  NegotiableIndicator?: boolean
                  FeeAmount?: z.infer<typeof OBAmount1_3Schema>
                  FeeRate?: z.infer<typeof OBRate1_12Schema>
                  FeeRateType?: z.infer<typeof OBInterestRateType1Code_1Schema>
                  ApplicationFrequency: z.infer<typeof OBFeeFrequency1Code_2Schema>
                  CalculationFrequency: z.infer<typeof OBFeeFrequency1Code_3Schema>
                  Notes?: string[]
                  OtherFeeType?: z.infer<typeof OBOtherFeeChargeDetailTypeSchema>
                  OtherFeeRateType?: z.infer<typeof OBOtherCodeType1_5Schema>
                  OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_6Schema>
                  OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_7Schema>
                }[]
                LoanInterestFeeChargeCap?: {
                  FeeType: (
                    | 'FEPF'
                    | 'FTOT'
                    | 'FYAF'
                    | 'FYAM'
                    | 'FYAQ'
                    | 'FYCP'
                    | 'FYDB'
                    | 'FYMI'
                    | 'FYXX'
                  )[]
                  MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
                  FeeCapOccurrence?: z.infer<typeof Number_1Schema>
                  FeeCapAmount?: z.infer<typeof OBAmount1_4Schema>
                  CappingPeriod?: z.infer<typeof OBFeeFrequency1Code_4Schema>
                  Notes?: string[]
                  OtherFeeType?: {
                    Code?: z.infer<typeof OBCodeMnemonicSchema>
                    Name: z.infer<typeof Name_4Schema>
                    Description: z.infer<typeof Description_3Schema>
                  }[]
                }[]
              }[]
            }[]
            LoanInterestFeesCharges?: {
              LoanInterestFeeChargeDetail: {
                FeeType: z.infer<typeof OBFeeType1CodeSchema>
                NegotiableIndicator?: boolean
                FeeAmount?: z.infer<typeof OBAmount1_3Schema>
                FeeRate?: z.infer<typeof OBRate1_12Schema>
                FeeRateType?: z.infer<typeof OBInterestRateType1Code_1Schema>
                ApplicationFrequency: z.infer<typeof OBFeeFrequency1Code_2Schema>
                CalculationFrequency: z.infer<typeof OBFeeFrequency1Code_3Schema>
                Notes?: string[]
                OtherFeeType?: z.infer<typeof OBOtherFeeChargeDetailTypeSchema>
                OtherFeeRateType?: z.infer<typeof OBOtherCodeType1_5Schema>
                OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_6Schema>
                OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_7Schema>
              }[]
              LoanInterestFeeChargeCap?: {
                FeeType: (
                  | 'FEPF'
                  | 'FTOT'
                  | 'FYAF'
                  | 'FYAM'
                  | 'FYAQ'
                  | 'FYCP'
                  | 'FYDB'
                  | 'FYMI'
                  | 'FYXX'
                )[]
                MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
                FeeCapOccurrence?: z.infer<typeof Number_1Schema>
                FeeCapAmount?: z.infer<typeof OBAmount1_4Schema>
                CappingPeriod?: z.infer<typeof OBFeeFrequency1Code_4Schema>
                Notes?: string[]
                OtherFeeType?: {
                  Code?: z.infer<typeof OBCodeMnemonicSchema>
                  Name: z.infer<typeof Name_4Schema>
                  Description: z.infer<typeof Description_3Schema>
                }[]
              }[]
            }[]
          }[]
        }
        Repayment?: {
          RepaymentType?:
            | 'USBA'
            | 'USBU'
            | 'USCI'
            | 'USCS'
            | 'USER'
            | 'USFA'
            | 'USFB'
            | 'USFI'
            | 'USIO'
            | 'USOT'
            | 'USPF'
            | 'USRW'
            | 'USSL'
          RepaymentFrequency?:
            | 'SMDA'
            | 'SMFL'
            | 'SMFO'
            | 'SMHY'
            | 'SMMO'
            | 'SMOT'
            | 'SMQU'
            | 'SMWE'
            | 'SMYE'
          AmountType?: 'RABD' | 'RABL' | 'RACI' | 'RAFC' | 'RAIO' | 'RALT' | 'USOT'
          Notes?: string[]
          OtherRepaymentType?: {
            Code?: z.infer<typeof OBCodeMnemonicSchema>
            Name: z.infer<typeof Name_4Schema>
            Description: z.infer<typeof Description_3Schema>
          }
          OtherRepaymentFrequency?: {
            Code?: z.infer<typeof OBCodeMnemonicSchema>
            Name: z.infer<typeof Name_4Schema>
            Description: z.infer<typeof Description_3Schema>
          }
          OtherAmountType?: {
            Code?: z.infer<typeof OBCodeMnemonicSchema>
            Name: z.infer<typeof Name_4Schema>
            Description: z.infer<typeof Description_3Schema>
          }
          RepaymentFeeCharges?: {
            RepaymentFeeChargeDetail: {
              FeeType: z.infer<typeof OBFeeType1CodeSchema>
              NegotiableIndicator?: boolean
              FeeAmount?: z.infer<typeof OBAmount1_3Schema>
              FeeRate?: z.infer<typeof OBRate1_12Schema>
              FeeRateType?: z.infer<typeof OBInterestRateType1Code_1Schema>
              ApplicationFrequency: z.infer<typeof OBFeeFrequency1Code_2Schema>
              CalculationFrequency: z.infer<typeof OBFeeFrequency1Code_3Schema>
              Notes?: string[]
              OtherFeeType?: z.infer<typeof OBOtherFeeChargeDetailTypeSchema>
              OtherFeeRateType?: z.infer<typeof OBOtherCodeType1_8Schema>
              OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_6Schema>
              OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_7Schema>
            }[]
            RepaymentFeeChargeCap?: {
              FeeType: (
                | 'FEPF'
                | 'FTOT'
                | 'FYAF'
                | 'FYAM'
                | 'FYAQ'
                | 'FYCP'
                | 'FYDB'
                | 'FYMI'
                | 'FYXX'
              )[]
              MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
              FeeCapOccurrence?: z.infer<typeof Number_1Schema>
              FeeCapAmount?: z.infer<typeof OBAmount1_4Schema>
              CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
              Notes?: string[]
              OtherFeeType?: {
                Code?: z.infer<typeof OBCodeMnemonicSchema>
                Name: z.infer<typeof Name_4Schema>
                Description: z.infer<typeof Description_3Schema>
              }[]
            }[]
          }
          RepaymentHoliday?: {
            MaxHolidayLength?: number
            MaxHolidayPeriod?: 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
            Notes?: string[]
          }[]
        }
        OtherFeesCharges?: {
          TariffType?: 'TTEL' | 'TTMX' | 'TTOT'
          TariffName?: string
          OtherTariffType?: {
            Code?: z.infer<typeof OBCodeMnemonicSchema>
            Name: z.infer<typeof Name_4Schema>
            Description: z.infer<typeof Description_3Schema>
          }
          FeeChargeDetail: {
            FeeCategory: z.infer<typeof OBFeeCategory1CodeSchema>
            FeeType: z.infer<typeof OBFeeType1CodeSchema>
            NegotiableIndicator?: boolean
            FeeAmount?: z.infer<typeof OBAmount1_3Schema>
            FeeRate?: z.infer<typeof OBRate1_12Schema>
            FeeRateType?: z.infer<typeof OBInterestRateType1Code_1Schema>
            ApplicationFrequency: z.infer<typeof OBFeeFrequency1Code_2Schema>
            CalculationFrequency?: z.infer<typeof OBFeeFrequency1Code_3Schema>
            Notes?: string[]
            FeeChargeCap?: {
              FeeType: (
                | 'FEPF'
                | 'FTOT'
                | 'FYAF'
                | 'FYAM'
                | 'FYAQ'
                | 'FYCP'
                | 'FYDB'
                | 'FYMI'
                | 'FYXX'
              )[]
              MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
              FeeCapOccurrence?: z.infer<typeof Number_1Schema>
              FeeCapAmount?: z.infer<typeof OBAmount1_4Schema>
              CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
              Notes?: string[]
              OtherFeeType?: {
                Code?: z.infer<typeof OBCodeMnemonicSchema>
                Name: z.infer<typeof Name_4Schema>
                Description: z.infer<typeof Description_3Schema>
              }[]
            }[]
            OtherFeeCategoryType?: z.infer<typeof OBOtherCodeType1_0Schema>
            OtherFeeType?: z.infer<typeof OBOtherFeeChargeDetailTypeSchema>
            OtherFeeRateType?: z.infer<typeof OBOtherCodeType1_8Schema>
            OtherApplicationFrequency?: z.infer<typeof OBOtherCodeType1_6Schema>
            OtherCalculationFrequency?: z.infer<typeof OBOtherCodeType1_7Schema>
            FeeApplicableRange?: {
              MinimumAmount?: string
              MaximumAmount?: string
              MinimumRate?: string
              MaximumRate?: string
            }
          }[]
          FeeChargeCap?: {
            FeeType: (
              | 'FEPF'
              | 'FTOT'
              | 'FYAF'
              | 'FYAM'
              | 'FYAQ'
              | 'FYCP'
              | 'FYDB'
              | 'FYMI'
              | 'FYXX'
            )[]
            MinMaxType: z.infer<typeof OBMinMaxType1CodeSchema>
            FeeCapOccurrence?: z.infer<typeof Number_1Schema>
            FeeCapAmount?: z.infer<typeof OBAmount1_4Schema>
            CappingPeriod?: z.infer<typeof OBPeriod1CodeSchema>
            Notes?: string[]
            OtherFeeType?: {
              Code?: z.infer<typeof OBCodeMnemonicSchema>
              Name: z.infer<typeof Name_4Schema>
              Description: z.infer<typeof Description_3Schema>
            }[]
          }[]
        }[]
        SupplementaryData?: z.infer<typeof OBSupplementaryData1Schema>
      }
      BCA?: z.infer<typeof OBBCAData1Schema>
      PCA?: z.infer<typeof OBPCAData1Schema>
    }[]
  }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const StandingOrderIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.',
    example: 'Ben5',
  })
  .openapi('StandingOrderId')

const NextPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the next payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2017-07-12T00:00:00+00:00',
  })
  .openapi('NextPaymentDateTime')

const LastPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the last (most recent) payment for a Standing Order schedule was made. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2017-07-12T00:00:00+00:00',
  })
  .openapi('LastPaymentDateTime')

const NumberOfPaymentsSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
  })
  .openapi('NumberOfPayments')

const ExternalMandateStatus1CodeSchema = z
  .enum(['ACTV', 'CANC', 'EXPI', 'SUSP'])
  .openapi({
    description:
      "Specifies the status of the standing order in code form. For a full list of enumeration values refer to 'ExternalMandateStatus1Code' in *ISO_External_Codeset* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)",
    example: 'ACTV',
  })
  .openapi('ExternalMandateStatus1Code')

const OBActiveCurrencyAndAmountSimpleTypeSchema = z
  .string()
  .regex(/^\d{1,13}$|^\d{1,13}\.\d{1,5}$/)
  .openapi({
    description:
      'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
    example: '1209.06',
  })
  .openapi('OBActiveCurrencyAndAmountSimpleType')

const ActiveOrHistoricCurrencyCode_1Schema = z
  .string()
  .regex(/^[A-Z]{3,3}$/)
  .openapi({
    description:
      'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
    example: 'GBP',
  })
  .openapi('ActiveOrHistoricCurrencyCode_1')

const OBActiveOrHistoricCurrencyAndAmount_2Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'The amount of the first Standing Order',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_2')

const OBActiveOrHistoricCurrencyAndAmount_3Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'The amount of the next Standing Order.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_3')

const OBActiveOrHistoricCurrencyAndAmount_11Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'The amount of the last (most recent) Standing Order instruction.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_11')

const OBActiveOrHistoricCurrencyAndAmount_4Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'The amount of the final Standing Order',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_4')

const OBBranchAndFinancialInstitutionIdentification5_1Schema = z
  .object({
    SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema,
    Identification: Identification_1Schema,
    Name: Name_1Schema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
    LEI: LEISchema.exactOptional(),
  })
  .openapi({
    required: ['SchemeName', 'Identification'],
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification5_1')

const ExternalProxyAccountType1CodeSchema = z
  .enum([
    'TELE',
    'EMAL',
    'DNAM',
    'CINC',
    'COTX',
    'COID',
    'CUST',
    'DRLC',
    'EIDN',
    'EWAL',
    'PVTX',
    'LEIC',
    'MBNO',
    'NIDN',
    'CCPT',
    'SHID',
    'SOSE',
    'TOKN',
    'UBIL',
    'VIPN',
    'BIID',
  ])
  .openapi({
    description:
      'Specifies the external proxy account type code, as published in the proxy account type external code set.<br /> For more information and a full list of values see `ExternalProxyAccountType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'TELE',
  })
  .openapi('ExternalProxyAccountType1Code')

const OBProxy1Schema = z
  .object({
    Identification: z
      .string()
      .min(1)
      .max(2048)
      .openapi({
        description:
          'Identification used to indicate the account identification under another specified name.',
        example: '2360549017905188',
      }),
    Code: ExternalProxyAccountType1CodeSchema,
    Type: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({ description: 'Type of the proxy identification.' }),
  })
  .openapi({
    description: 'Specifies an alternate assumed name for the identification of the account.',
    required: ['Identification', 'Code'],
  })
  .openapi('OBProxy1')

const OBCashAccount5_1Schema = z
  .object({
    SchemeName: OBInternalAccountIdentification4CodeSchema,
    Identification: z
      .string()
      .min(1)
      .max(256)
      .openapi({ description: 'Beneficiary account identification.' }),
    Name: Name_0Schema.exactOptional(),
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
    Proxy: OBProxy1Schema.exactOptional(),
  })
  .openapi({
    required: ['SchemeName', 'Identification'],
    description: 'Provides the details to identify the beneficiary account.',
  })
  .openapi('OBCashAccount5_1')

const OBExternalMandateClassification1CodeSchema = z
  .enum(['FIXE', 'USGB', 'VARI'])
  .openapi({
    description:
      'Type of mandate instruction. For a full list of values see `OBExternalClassification1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'FIXE',
  })
  .openapi('OBExternalMandateClassification1Code')

const ExternalCategoryPurpose1CodeSchema = z
  .enum([
    'BONU',
    'CASH',
    'CBLK',
    'CCRD',
    'CGWV',
    'CIPC',
    'CONC',
    'CORT',
    'DCRD',
    'DIVI',
    'DVPM',
    'EPAY',
    'FCDT',
    'FCIN',
    'FCOL',
    'GOVT',
    'GP2P',
    'HEDG',
    'ICCP',
    'IDCP',
    'INTC',
    'INTE',
    'LBOX',
    'LOAN',
    'MP2B',
    'MP2P',
    'OTHR',
    'PENS',
    'RPRE',
    'RRCT',
    'RVPM',
    'SALA',
    'SECU',
    'SSBE',
    'SUPP',
    'SWEP',
    'TAXS',
    'TOPG',
    'TRAD',
    'TREA',
    'VATX',
    'VOST',
    'WHLD',
    'ZABA',
  ])
  .openapi({
    description:
      'Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk.  For all enum values see `ExternalCategoryPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalCategoryPurpose1Code')

const OBFrequency6CodeSchema = z
  .enum([
    'ADHO',
    'YEAR',
    'DAIL',
    'FRTN',
    'INDA',
    'MNTH',
    'QURT',
    'MIAN',
    'WEEK',
    'WODL',
    'FOWK',
    'TWMH',
    'FOMH',
    'FIMH',
    'ALMH',
    'NONE',
    'LWMH',
    'LXMH',
    'TWYR',
  ])
  .openapi({
    description:
      'For a full list of values see `OBFrequency6Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'MNTH',
  })
  .openapi('OBFrequency6Code')

const Frequency_1Schema = z
  .string()
  .regex(
    /^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
  )
  .openapi({
    description:
      'Individual Definitions:\nNotKnown - Not Known\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlDay - An interval specified in number of calendar days (02 to 31)\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)\nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.\nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.\nIndividual Patterns:\nNotKnown (ScheduleCode)\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlDay:NoOfDay (ScheduleCode + NoOfDay)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nNotKnown\nEvryDay\nEvryWorkgDay\nIntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
  })
  .openapi('Frequency_1')

const PointInTimeSchema = z
  .string()
  .max(2)
  .openapi({
    description:
      'Exact2NumericText - Further information on the exact point in time the event should take place. Specifies a frequency in terms of an exact point in time or moment within a specified frequency type. Note: should not be used alongside `CountPerPeriod`.',
    example: '00',
  })
  .openapi('PointInTime')

const OBFrequency6Schema = z
  .object({
    Type: z.xor([OBFrequency6CodeSchema, Frequency_1Schema]),
    CountPerPeriod: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of instructions to be created and processed during the specified period. Specifies a frequency in terms of a count per period within a specified frequency type. Note: should not be used alongside `PointInTime`',
        example: 1,
      }),
    PointInTime: PointInTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Regularity with which credit transfer instructions are to be created and processed',
    required: ['Type'],
  })
  .openapi('OBFrequency6')

const OBMandateRelatedInformation1Schema = z
  .object({
    MandateIdentification: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'Unique identification, as assigned by the creditor, to unambiguously identify the mandate.',
        example: 'Golfers',
      }),
    Classification: OBExternalMandateClassification1CodeSchema.exactOptional(),
    CategoryPurposeCode: ExternalCategoryPurpose1CodeSchema.exactOptional(),
    FirstPaymentDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date on which the first payment for a recurrent credit transfer will be made.',
        example: '2024-04-25T12:46:49.425Z',
      }),
    RecurringPaymentDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date on which the first recurring payment for a Standing Order schedule will be made. \nUsage: This must be populated only if the first recurring date is different to the first payment date. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
        example: '2024-04-25T12:46:49.425Z',
      }),
    FinalPaymentDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date on which the final payment for a recurrent credit transfer will be made.',
        example: '2024-04-25T12:46:49.425Z',
      }),
    Frequency: OBFrequency6Schema,
    Reason: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description: 'Reason for the setup of the credit transfer mandate.',
        example: 'To pay monthly membership',
      }),
  })
  .openapi({
    description:
      'Provides further details of the mandate signed between the creditor and the debtor.',
    required: ['Frequency'],
  })
  .openapi('OBMandateRelatedInformation1')

const ExternalDocumentType1CodeSchema = z
  .enum([
    'AROI',
    'BOLD',
    'CINV',
    'CMCN',
    'CNFA',
    'CONT',
    'CREN',
    'DEBN',
    'DISP',
    'DNFA',
    'HIRI',
    'INVS',
    'MSIN',
    'PROF',
    'PUOR',
    'QUOT',
    'SBIN',
    'SOAC',
    'SPRR',
    'TISH',
    'TSUT',
    'USAR',
    'VCHR',
  ])
  .openapi({
    description:
      'Specifies the document type as published in an external document type code list. For more information see `ExternalDocumentType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalDocumentType1Code')

const OBReferredDocumentInformationSchema = z
  .object({
    Code: ExternalDocumentType1CodeSchema.exactOptional(),
    Issuer: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({ description: 'Identification of the issuer of the reference document type.' }),
    Number: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identification of the type specified for the referred document line.',
      }),
    RelatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date associated with the referred document line.' }),
    LineDetails: z
      .array(z.string().min(1).max(2048))
      .exactOptional()
      .openapi({
        description: 'Set of elements used to provide the content of the referred document line.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBReferredDocumentInformation')

const ExternalCreditorReferenceType1CodeSchema = z
  .enum(['DISP', 'FXDR', 'PUOR', 'RPIN', 'RADM', 'SCOR'])
  .openapi({
    description:
      'Specifies the type of creditor reference as published in an external creditor reference type code set. For more information see `ExternalCreditorReferenceType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalCreditorReferenceType1Code')

const Identification_3Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification of the organisation issuing the invoice, when it is different from the creditor or ultimate creditor',
    example: '80200112344562',
  })
  .openapi('Identification_3')

const Identification_4Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification of the party to whom an invoice is issued, when it is different from the debtor or ultimate debtor.',
    example: '80200112344562',
  })
  .openapi('Identification_4')

const OBRemittanceInformationStructuredSchema = z
  .object({
    ReferredDocumentInformation: z.array(OBReferredDocumentInformationSchema).exactOptional(),
    ReferredDocumentAmount: OBActiveCurrencyAndAmountSimpleTypeSchema.exactOptional(),
    CreditorReferenceInformation: z
      .object({
        Code: ExternalCreditorReferenceType1CodeSchema.exactOptional(),
        Issuer: z
          .string()
          .min(1)
          .max(35)
          .exactOptional()
          .openapi({ description: 'Entity that assigns the identification.' }),
        Reference: z
          .string()
          .min(1)
          .max(35)
          .exactOptional()
          .openapi({
            description:
              'Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Reference information provided by the creditor to allow the identification of the underlying documents.',
        required: [],
      }),
    Invoicer: Identification_3Schema.exactOptional(),
    Invoicee: Identification_4Schema.exactOptional(),
    TaxRemittance: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Provides remittance information about a payment made for tax-related purposes.',
      }),
    AdditionalRemittanceInformation: z
      .array(z.string().min(1).max(140))
      .max(3)
      .exactOptional()
      .openapi({
        description:
          'Additional information, in free text form, to complement the structured remittance information.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBRemittanceInformationStructured')

const OBRemittanceInformation2Schema = z
  .object({
    Structured: z.array(OBRemittanceInformationStructuredSchema).exactOptional(),
    Unstructured: z
      .array(z.string().min(1).max(140))
      .exactOptional()
      .openapi({
        description:
          "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
      }),
  })
  .openapi({
    description:
      "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system",
    required: [],
  })
  .openapi('OBRemittanceInformation2')

const OBStandingOrder6Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    StandingOrderId: StandingOrderIdSchema.exactOptional(),
    NextPaymentDateTime: NextPaymentDateTimeSchema.exactOptional(),
    LastPaymentDateTime: LastPaymentDateTimeSchema.exactOptional(),
    NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
    StandingOrderStatusCode: ExternalMandateStatus1CodeSchema.exactOptional(),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_2Schema.exactOptional(),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_3Schema.exactOptional(),
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_11Schema.exactOptional(),
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_4Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    CreditorAccount: OBCashAccount5_1Schema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    MandateRelatedInformation: OBMandateRelatedInformation1Schema.exactOptional(),
    RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
  })
  .openapi({ required: ['AccountId'] })
  .openapi('OBStandingOrder6')

type OBReadStandingOrder6Type = {
  Data: { StandingOrder?: z.infer<typeof OBStandingOrder6Schema>[] }
  Links?: z.infer<typeof LinksSchema>
  Meta?: z.infer<typeof MetaSchema>
}

const OBIntermediaryAgentSchema = z
  .object({
    Name: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Name by which an agent is known and which is usually used to identify that agent.',
      }),
    SchemeName: OBInternalAccountIdentification4CodeSchema.exactOptional(),
    Identification: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'Unique and unambiguous identification of a financial institution or a branch of a financial institution.',
      }),
    LEI: LEISchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
    ProcessingStatus: z
      .enum(['PDNG', 'RCVD', 'ACSP', 'ACSC', 'RJCT', 'UNKN', 'CANC'])
      .exactOptional()
      .openapi({
        description:
          'Status of the payment at the Intermediary Agent. For a full list of enumeration values refer to `OBIntermediaryAgentStatus1Code` in `OB_Internal_CodeSet` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
      }),
  })
  .openapi({
    description: 'The intermediary agent associated with this transaction.',
    required: [],
  })
  .openapi('OBIntermediaryAgent')

const OBUltimateCreditor1Schema = z
  .object({
    Name: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Name by which a party is known and which is usually used to identify that party.',
      }),
    Identification: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'Identification assigned by an institution.' }),
    LEI: LEISchema.exactOptional(),
    SchemeName: OBInternalAccountIdentification4CodeSchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({ description: 'Ultimate party to which an amount of money is due.', required: [] })
  .openapi('OBUltimateCreditor1')

const OBUltimateDebtor1Schema = z
  .object({
    Name: z
      .string()
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Name by which a party is known and which is usually used to identify that party.',
      }),
    Identification: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({ description: 'Identification assigned by an institution.' }),
    LEI: LEISchema.exactOptional(),
    SchemeName: OBInternalAccountIdentification4CodeSchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({
    description: 'Ultimate party that owes an amount of money to the (ultimate) creditor.',
    required: [],
  })
  .openapi('OBUltimateDebtor1')

const AddressLineSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({
    description:
      'Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.',
  })
  .openapi('AddressLine')

const BeneficiaryIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.',
    example: 'Ben1',
  })
  .openapi('BeneficiaryId')

const BookingDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      "Date and time when a transaction entry is posted to an account on the account servicer's books.\nUsage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
  })
  .openapi('BookingDateTime')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2,2}$/)
  .openapi({ description: 'Nation with its own government, occupying a particular territory.' })
  .openapi('CountryCode')

const CountrySubDivisionSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Identifies a subdivision of a country eg, state, region, county.' })
  .openapi('CountrySubDivision')

const CreationDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2024-05-29T00:00:00Z',
  })
  .openapi('CreationDateTime')

const DateSchema = z.iso
  .date()
  .openapi({
    description:
      'Date and time associated with the date time type. All dates in the JSON payloads are represented in ISO 8601 date format. \n An example is below:\n2017-04-05',
  })
  .openapi('Date')

const DateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time associated with the date time type. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2024-05-29T00:00:00Z',
  })
  .openapi('DateTime')

const DebtorReferenceSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'A reference value provided by the PSU to the PISP while setting up the scheduled payment.',
    example: 'REF51561806',
  })
  .openapi('DebtorReference')

const Description_1Schema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    description: 'Description that may be available for the statement fee.',
    example: 'International usage charge',
  })
  .openapi('Description_1')

const Description_2Schema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    description: 'Description that may be available for the statement interest.',
    example: 'Interest occurred over statement duration',
  })
  .openapi('Description_2')

const DirectDebitIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.',
  })
  .openapi('DirectDebitId')

const EmailAddressSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description: 'Address for electronic mail (e-mail).',
    example: 'd.user@semiotec.co.jp',
  })
  .openapi('EmailAddress')

const EndDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the statement period ends. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2017-07-12T00:00:00+00:00',
  })
  .openapi('EndDateTime')

const FileSchema = z.looseObject({}).openapi('File')

const FinalPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the final payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('FinalPaymentDateTime')

const FirstPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the first payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('FirstPaymentDateTime')

const FullLegalNameSchema = z
  .string()
  .min(1)
  .max(350)
  .openapi({ description: 'The full legal name of the party.', example: 'Jane Smith' })
  .openapi('FullLegalName')

const Identification_2Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Unique and unambiguous identification of a financial institution or a branch of a financial institution.',
  })
  .openapi('Identification_2')

const MandateIdentificationSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.',
  })
  .openapi('MandateIdentification')

const Name_2Schema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Name of Service User.' })
  .openapi('Name_2')

const Name_3Schema = z
  .string()
  .min(1)
  .max(350)
  .openapi({
    description: 'Name by which a party is known and which is usually used to identify that party.',
    example: 'Mx Jane Smith',
  })
  .openapi('Name_3')

const OBAccount6BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    Status: OBInternalAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
    Currency: ActiveOrHistoricCurrencyCode_0Schema.exactOptional(),
    AccountCategory: OBInternalAccountType1CodeSchema.exactOptional(),
    AccountTypeCode: OBExternalAccountSubType1CodeSchema.exactOptional(),
    Description: Description_0Schema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    OpeningDate: OpeningDateSchema.exactOptional(),
    MaturityDate: MaturityDateSchema.exactOptional(),
    SwitchStatus: OBInternalSwitchStatusCodeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId'],
  })
  .openapi('OBAccount6Basic')

const OBAccount6DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    Status: OBInternalAccountStatus1CodeSchema.exactOptional(),
    StatusUpdateDateTime: StatusUpdateDateTimeSchema.exactOptional(),
    Currency: ActiveOrHistoricCurrencyCode_0Schema.exactOptional(),
    AccountCategory: OBInternalAccountType1CodeSchema.exactOptional(),
    AccountTypeCode: OBExternalAccountSubType1CodeSchema.exactOptional(),
    Description: Description_0Schema.exactOptional(),
    Nickname: NicknameSchema.exactOptional(),
    OpeningDate: OpeningDateSchema.exactOptional(),
    MaturityDate: MaturityDateSchema.exactOptional(),
    SwitchStatus: OBInternalSwitchStatusCodeSchema.exactOptional(),
    Account: z.array(
      z
        .object({
          SchemeName: OBInternalAccountIdentification4CodeSchema,
          Identification: Identification_0Schema,
          Name: Name_0Schema.exactOptional(),
          LEI: LEISchema.exactOptional(),
          SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
        })
        .openapi({
          description: 'Provides the details to identify an account.',
          required: ['SchemeName', 'Identification'],
        }),
    ),
    StatementFrequencyAndFormat: StatementFrequencyAndFormatSchema.exactOptional(),
    Servicer: OBBranchAndFinancialInstitutionIdentification5_0Schema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'Account'],
  })
  .openapi('OBAccount6Detail')

const OBActiveOrHistoricCurrencyAndAmount_0Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'The amount of the most recent direct debit collection.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_0')

const OBActiveOrHistoricCurrencyAndAmount_1Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description:
      'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_1')

const OBActiveOrHistoricCurrencyAndAmount_10Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Transaction charges to be paid by the charge bearer.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_10')

const OBActiveOrHistoricCurrencyAndAmount_5Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Amount of money associated with the statement benefit type.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_5')

const OBActiveOrHistoricCurrencyAndAmount_6Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Amount of money associated with the statement fee type.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_6')

const OBActiveOrHistoricCurrencyAndAmount_7Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Amount of money associated with the statement interest amount type.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_7')

const OBExternalBalanceSubType1CodeSchema = z
  .enum(['BCUR', 'LCUR'])
  .openapi({
    description:
      'Amount sub type, in a coded form. Default if not specified is BCUR of the account.',
  })
  .openapi('OBExternalBalanceSubType1Code')

const OBActiveOrHistoricCurrencyAndAmount_8Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
    SubType: OBExternalBalanceSubType1CodeSchema.exactOptional(),
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Amount of money associated with the amount type.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_8')

const OBActiveOrHistoricCurrencyAndAmount_9Schema = z
  .object({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCode_1Schema,
  })
  .openapi({
    required: ['Amount', 'Currency'],
    description: 'Amount of money in the cash transaction entry.',
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount_9')

const OBBalanceType1CodeSchema = z
  .enum(['CLAV', 'CLBD', 'FWAV', 'INFO', 'ITAV', 'ITBD', 'OPAV', 'OPBD', 'PRCD', 'XPCD'])
  .openapi({
    description:
      'Balance type, in a coded form. <br /> For a full list of enumeration values refer to `ExternalBalanceType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).',
    example: 'CLAV',
  })
  .openapi('OBBalanceType1Code')

const OBBankTransactionCodeStructure1Schema = z
  .object({
    Code: z.string().openapi({ description: 'Specifies the family within a domain.' }),
    SubCode: z
      .string()
      .openapi({ description: 'Specifies the sub-product family within a specific family.' }),
  })
  .openapi({
    required: ['Code', 'SubCode'],
    description:
      'Set of elements used to fully identify the type of underlying transaction resulting in an entry.',
  })
  .openapi('OBBankTransactionCodeStructure1')

const OBInternalBeneficiaryType1CodeSchema = z
  .enum(['Trusted', 'Ordinary'])
  .openapi({ description: 'Specifies the Beneficiary Type.', example: 'Ordinary' })
  .openapi('OBInternalBeneficiaryType1Code')

const ReferenceSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
    example: 'Towbar Club',
  })
  .openapi('Reference')

const OBBranchAndFinancialInstitutionIdentification6_0Schema = z
  .object({
    SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
    Identification: Identification_1Schema.exactOptional(),
    Name: Name_1Schema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
    LEI: LEISchema.exactOptional(),
  })
  .openapi({
    description:
      'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_0')

const OBCashAccount5_0Schema = z
  .object({
    SchemeName: OBInternalAccountIdentification4CodeSchema,
    Identification: Identification_0Schema,
    Name: Name_0Schema.exactOptional(),
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
    Proxy: OBProxy1Schema.exactOptional(),
  })
  .openapi({
    required: ['SchemeName', 'Identification'],
    description: 'Provides the details to identify the beneficiary account.',
  })
  .openapi('OBCashAccount5_0')

const OBBeneficiary5Schema = z
  .strictObject({
    AccountId: AccountIdSchema.exactOptional(),
    BeneficiaryId: BeneficiaryIdSchema.exactOptional(),
    BeneficiaryType: OBInternalBeneficiaryType1CodeSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_0Schema.exactOptional(),
    CreditorAccount: OBCashAccount5_0Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OBBeneficiary5')

const OBBeneficiary5BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema.exactOptional(),
    BeneficiaryId: BeneficiaryIdSchema.exactOptional(),
    BeneficiaryType: OBInternalBeneficiaryType1CodeSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OBBeneficiary5Basic')

const OBBeneficiary5DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema.exactOptional(),
    BeneficiaryId: BeneficiaryIdSchema.exactOptional(),
    BeneficiaryType: OBInternalBeneficiaryType1CodeSchema.exactOptional(),
    Reference: ReferenceSchema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_0Schema.exactOptional(),
    CreditorAccount: OBCashAccount5_0Schema,
  })
  .openapi({ required: ['CreditorAccount'] })
  .openapi('OBBeneficiary5Detail')

const OBBranchAndFinancialInstitutionIdentification6_1Schema = z
  .object({
    SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
    Identification: Identification_2Schema.exactOptional(),
    Name: Name_1Schema.exactOptional(),
    LEI: LEISchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({
    description: 'Financial institution servicing an account for the creditor.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_1')

const OBBranchAndFinancialInstitutionIdentification6_2Schema = z
  .object({
    SchemeName: OBInternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
    Identification: Identification_2Schema.exactOptional(),
    Name: Name_1Schema.exactOptional(),
    LEI: LEISchema.exactOptional(),
    PostalAddress: OBPostalAddress7Schema.exactOptional(),
  })
  .openapi({
    description: 'Financial institution servicing an account for the debtor.',
    required: [],
  })
  .openapi('OBBranchAndFinancialInstitutionIdentification6_2')

const OBCashAccount6_0Schema = z
  .object({
    SchemeName: OBInternalAccountIdentification4CodeSchema.exactOptional(),
    Identification: Identification_0Schema.exactOptional(),
    Name: Name_0Schema.exactOptional(),
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
    Proxy: OBProxy1Schema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account of the creditor, in the case of a debit transaction.',
    required: [],
  })
  .openapi('OBCashAccount6_0')

const OBCashAccount6_1Schema = z
  .object({
    SchemeName: OBInternalAccountIdentification4CodeSchema,
    Identification: Identification_0Schema,
    Name: Name_0Schema.exactOptional(),
    SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
    Proxy: OBProxy1Schema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account of the debtor, in the case of a credit transaction.',
    required: ['SchemeName', 'Identification'],
  })
  .openapi('OBCashAccount6_1')

const OBCreditDebitCode_0Schema = z
  .enum(['Credit', 'Debit'])
  .openapi({
    description:
      'Indicates whether the amount is a credit or a debit. For a full list of values see `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)<br />\nUsage: A zero amount is considered to be a credit amount.',
    example: 'Credit',
  })
  .openapi('OBCreditDebitCode_0')

const OBCreditDebitCode_1Schema = z
  .enum(['Credit', 'Debit'])
  .openapi({
    description:
      'Indicates whether the transaction is a credit or a debit entry. <br />\n<br />\nFor a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBCreditDebitCode_1')

const OBCreditDebitCode_2Schema = z
  .enum(['Credit', 'Debit'])
  .openapi({
    description:
      'Indicates whether the balance is a credit or a debit balance. \nUsage: A zero balance is considered to be a credit balance.\n<br />\nFor a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'Credit',
  })
  .openapi('OBCreditDebitCode_2')

const OBCurrencyExchange5Schema = z
  .object({
    SourceCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({
        description: 'Currency from which an amount is to be converted in a currency conversion.',
      }),
    TargetCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({
        description: 'Currency into which an amount is to be converted in a currency conversion.',
      }),
    UnitCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({
        description:
          'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
      }),
    ExchangeRate: z
      .number()
      .openapi({
        description:
          'Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.\nUsage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).',
      }),
    ContractIdentification: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'Unique identification to unambiguously identify the foreign exchange contract.',
      }),
    QuotationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time at which an exchange rate is quoted. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
      }),
    InstructedAmount: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .exactOptional()
      .openapi({
        required: ['Amount', 'Currency'],
        description:
          'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.',
      }),
  })
  .openapi({
    required: ['SourceCurrency', 'ExchangeRate'],
    description: 'Set of elements used to provide details on the currency exchange.',
  })
  .openapi('OBCurrencyExchange5')

const ExternalEntryStatus1CodeSchema = z
  .enum(['BOOK', 'FUTR', 'INFO', 'PDNG', 'RJCT'])
  .openapi({
    description:
      'Status of a transaction entry on the books of the account servicer. <br />\nFor a full list of enumeration values refer to `ExternalEntryStatus1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('ExternalEntryStatus1Code')

const OBInternalTransactionMutability1CodeSchema = z
  .enum(['Mutable', 'Immutable'])
  .openapi({
    description:
      'Specifies the Mutability of the Transaction record. <br />\nFor a full list of enumeration values refer to `OBInternalTransactionMutability1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBInternalTransactionMutability1Code')

const OBExternalStatusReason1CodeSchema = z
  .string()
  .length(4)
  .openapi({
    description:
      'Low level textual error code, for all enum values see `OBExternalStatusReason1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'U001',
  })
  .openapi('OBExternalStatusReason1Code')

const OBError1Schema = z
  .strictObject({
    ErrorCode: OBExternalStatusReason1CodeSchema,
    Message: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          "A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'\nOBL doesn't standardise this field",
      }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency',
      }),
    Url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to help remediate the problem, or provide more information, or to API Reference, or help etc',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: ['ErrorCode'] })
  .openapi('OBError1')

const OBErrorResponse1Schema = z
  .strictObject({
    Id: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.',
      }),
    Code: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'Deprecated <br />High level textual error code, to help categorise the errors.',
        example: '400 BadRequest',
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description: 'Deprecated <br />Brief Error message',
        example: 'There is something wrong with the request parameters provided',
      }),
    Errors: z.array(OBError1Schema).min(1),
  })
  .openapi({
    description:
      'An array of detail error codes, and messages, and URLs to documentation to help remediation.',
    required: ['Errors'],
  })
  .openapi('OBErrorResponse1')

const OBInternalAccountRole1CodeSchema = z
  .string()
  .openapi({
    description:
      'A party’s role with respect to the related account. For a full list refer to `OBInternalAccountRole1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    'x-namespaced-enum': [
      'UK.OBIE.Administrator',
      'UK.OBIE.Beneficiary',
      'UK.OBIE.CustodianForMinor',
      'UK.OBIE.Granter',
      'UK.OBIE.LegalGuardian',
      'UK.OBIE.OtherParty',
      'UK.OBIE.PowerOfAttorney',
      'UK.OBIE.Principal',
      'UK.OBIE.Protector',
      'UK.OBIE.RegisteredShareholderName',
      'UK.OBIE.SecondaryOwner',
      'UK.OBIE.SeniorManagingOfficial',
      'UK.OBIE.Settlor',
      'UK.OBIE.SuccessorOnDeath',
    ],
  })
  .openapi('OBInternalAccountRole1Code')

const OBInternalLegalStructureType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Legal standing of the party. For a full list refer to `OBInternalLegalStructureType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.Individual',
    'x-namespaced-enum': [
      'UK.OBIE.CIC',
      'UK.OBIE.CIO',
      'UK.OBIE.Charity',
      'UK.OBIE.CoOp',
      'UK.OBIE.GeneralPartnership',
      'UK.OBIE.Individual',
      'UK.OBIE.LimitedLiabilityPartnership',
      'UK.OBIE.LimitedPartnership',
      'UK.OBIE.PrivateLimitedCompany',
      'UK.OBIE.PublicLimitedCompany',
      'UK.OBIE.ScottishLimitedPartnership',
      'UK.OBIE.Sole',
    ],
  })
  .openapi('OBInternalLegalStructureType1Code')

const OBInternalPartyType1CodeSchema = z
  .enum(['Delegate', 'Joint', 'Sole'])
  .openapi({
    description:
      'Party type, in a coded form. For a full list see `OBInternalPartyType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'Joint',
  })
  .openapi('OBInternalPartyType1Code')

const OBExternalPurpose1CodeSchema = z
  .enum([
    'BKDF',
    'BKFE',
    'BKFM',
    'BKIP',
    'BKPP',
    'CBLK',
    'CDCB',
    'CDCD',
    'CDCS',
    'CDDP',
    'CDOC',
    'CDQC',
    'ETUP',
    'FCOL',
    'MTUP',
    'ACCT',
    'CASH',
    'COLL',
    'CSDB',
    'DEPT',
    'INTC',
    'INTP',
    'LIMA',
    'NETT',
    'BFWD',
    'CCIR',
    'CCPC',
    'CCPM',
    'CCSM',
    'CRDS',
    'CRPR',
    'CRSP',
    'CRTL',
    'EQPT',
    'EQUS',
    'EXPT',
    'EXTD',
    'FIXI',
    'FWBC',
    'FWCC',
    'FWSB',
    'FWSC',
    'MARG',
    'MBSB',
    'MBSC',
    'MGCC',
    'MGSC',
    'OCCC',
    'OPBC',
    'OPCC',
    'OPSB',
    'OPSC',
    'OPTN',
    'OTCD',
    'REPO',
    'RPBC',
    'RPCC',
    'RPSB',
    'RPSC',
    'RVPO',
    'SBSC',
    'SCIE',
    'SCIR',
    'SCRP',
    'SHBC',
    'SHCC',
    'SHSL',
    'SLEB',
    'SLOA',
    'SWBC',
    'SWCC',
    'SWPT',
    'SWSB',
    'SWSC',
    'TBAS',
    'TBBC',
    'TBCC',
    'TRCP',
    'AGRT',
    'AREN',
    'BEXP',
    'BOCE',
    'COMC',
    'CPYR',
    'GDDS',
    'GDSV',
    'GSCB',
    'LICF',
    'MP2B',
    'POPE',
    'ROYA',
    'SCVE',
    'SERV',
    'SUBS',
    'SUPP',
    'TRAD',
    'CHAR',
    'COMT',
    'MP2P',
    'ECPG',
    'ECPR',
    'ECPU',
    'EPAY',
    'CLPR',
    'COMP',
    'DBTC',
    'GOVI',
    'HLRP',
    'HLST',
    'INPC',
    'INPR',
    'INSC',
    'INSU',
    'INTE',
    'LBRI',
    'LIFI',
    'LOAN',
    'LOAR',
    'PENO',
    'PPTI',
    'RELG',
    'RINP',
    'TRFD',
    'FORW',
    'FXNT',
    'ADMG',
    'ADVA',
    'BCDM',
    'BCFG',
    'BLDM',
    'BNET',
    'CBFF',
    'CBFR',
    'CCRD',
    'CDBL',
    'CFEE',
    'CGDD',
    'CORT',
    'COST',
    'CPKC',
    'DCRD',
    'DSMT',
    'DVPM',
    'EDUC',
    'FACT',
    'FAND',
    'FCPM',
    'FEES',
    'GIFT',
    'GOVT',
    'ICCP',
    'IDCP',
    'IHRP',
    'INSM',
    'IVPT',
    'MCDM',
    'MCFG',
    'MSVC',
    'NOWS',
    'OCDM',
    'OCFG',
    'OFEE',
    'OTHR',
    'PADD',
    'PTSP',
    'RCKE',
    'RCPT',
    'REBT',
    'REFU',
    'RENT',
    'REOD',
    'RIMB',
    'RPNT',
    'RRBN',
    'RRCT',
    'RRTP',
    'RVPM',
    'SLPI',
    'SPLT',
    'STDY',
    'TBAN',
    'TBIL',
    'TCSC',
    'TELI',
    'TMPG',
    'TPRI',
    'TPRP',
    'TRNC',
    'TRVC',
    'WEBI',
    'IPAY',
    'IPCA',
    'IPDO',
    'IPEA',
    'IPEC',
    'IPEW',
    'IPPS',
    'IPRT',
    'IPU2',
    'IPUW',
    'ANNI',
    'CAFI',
    'CFDI',
    'CMDT',
    'DERI',
    'DIVD',
    'FREX',
    'HEDG',
    'INVS',
    'PRME',
    'SAVG',
    'SECU',
    'SEPI',
    'TREA',
    'UNIT',
    'FNET',
    'FUTR',
    'ANTS',
    'CVCF',
    'DMEQ',
    'DNTS',
    'HLTC',
    'HLTI',
    'HSPC',
    'ICRF',
    'LTCF',
    'MAFC',
    'MARF',
    'MDCS',
    'VIEW',
    'CDEP',
    'SWFP',
    'SWPP',
    'SWRS',
    'SWUF',
    'ADCS',
    'AEMP',
    'ALLW',
    'ALMY',
    'BBSC',
    'BECH',
    'BENE',
    'BONU',
    'CCHD',
    'COMM',
    'CSLP',
    'GFRP',
    'GVEA',
    'GVEB',
    'GVEC',
    'GVED',
    'GWLT',
    'HREC',
    'PAYR',
    'PEFC',
    'PENS',
    'PRCP',
    'RHBS',
    'SALA',
    'SPSP',
    'SSBE',
    'LBIN',
    'LCOL',
    'LFEE',
    'LMEQ',
    'LMFI',
    'LMRK',
    'LREB',
    'LREV',
    'LSFL',
    'ESTX',
    'FWLV',
    'GSTX',
    'HSTX',
    'INTX',
    'NITX',
    'PTXP',
    'RDTX',
    'TAXS',
    'VATX',
    'WHLD',
    'TAXR',
    'B112',
    'BR12',
    'TLRF',
    'TLRR',
    'AIRB',
    'BUSB',
    'FERB',
    'RLWY',
    'TRPT',
    'CBTV',
    'ELEC',
    'ENRG',
    'GASB',
    'NWCH',
    'NWCM',
    'OTLC',
    'PHON',
    'UBIL',
    'WTER',
    'BOND',
    'CABD',
    'CAEQ',
    'CBCR',
    'DBCR',
    'DICL',
    'EQTS',
    'FLCR',
    'EFTC',
    'EFTD',
    'MOMA',
    'RAPI',
    'GAMB',
    'LOTT',
    'AMEX',
    'SASW',
    'AUCO',
    'PCOM',
    'PDEP',
    'PLDS',
    'PLRF',
    'GAFA',
    'GAHO',
    'CPEN',
    'DEPD',
    'RETL',
    'DEBT',
    'CRYP',
  ])
  .openapi({
    description:
      'For a full list of enumeration values refer to `ExternalPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBExternalPurpose1Code')

const OBInternalScheduleType1CodeSchema = z
  .enum(['Arrival', 'Execution'])
  .openapi({
    description:
      'Specifies the scheduled payment date type requested. For a full list of enumeration values refer to `OBInternalScheduleType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'Arrival',
  })
  .openapi('OBInternalScheduleType1Code')

const OBInternalStatementAmountType1CodeSchema = z
  .string()
  .openapi({
    description: 'Amount type, in a coded form.',
    example: 'UK.OBIE.CreditLimit',
    'x-namespaced-enum': [
      'UK.OBIE.ArrearsClosingBalance',
      'UK.OBIE.AvailableBalance',
      'UK.OBIE.AverageBalanceWhenInCredit',
      'UK.OBIE.AverageBalanceWhenInDebit',
      'UK.OBIE.AverageDailyBalance',
      'UK.OBIE.BalanceTransferClosingBalance',
      'UK.OBIE.CashClosingBalance',
      'UK.OBIE.ClosingBalance',
      'UK.OBIE.CreditLimit',
      'UK.OBIE.CurrentPayment',
      'UK.OBIE.DirectDebitPaymentDue',
      'UK.OBIE.FSCSInsurance',
      'UK.OBIE.MinimumPaymentDue',
      'UK.OBIE.PendingTransactionsBalance',
      'UK.OBIE.PreviousClosingBalance',
      'UK.OBIE.PreviousPayment',
      'UK.OBIE.PurchaseClosingBalance',
      'UK.OBIE.StartingBalance',
      'UK.OBIE.TotalAdjustments',
      'UK.OBIE.TotalCashAdvances',
      'UK.OBIE.TotalCharges',
      'UK.OBIE.TotalCredits',
      'UK.OBIE.TotalDebits',
      'UK.OBIE.TotalPurchases',
    ],
  })
  .openapi('OBInternalStatementAmountType1Code')

const OBInternalStatementBenefitType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Benefit type, in a coded form. For a full list of values see `OBInternalStatementBenefitType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.Cashback',
    'x-namespaced-enum': [
      'UK.OBIE.Cashback',
      'UK.OBIE.Insurance',
      'UK.OBIE.TravelDiscount',
      'UK.OBIE.TravelInsurance',
    ],
  })
  .openapi('OBInternalStatementBenefitType1Code')

const OBInternalStatementDateTimeType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Date time type, in a coded form. For a full list of values see `OBInternalStatementDateTimeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.NextStatement',
    'x-namespaced-enum': [
      'UK.OBIE.BalanceTransferPromoEnd',
      'UK.OBIE.DirectDebitDue',
      'UK.OBIE.LastPayment',
      'UK.OBIE.LastStatement',
      'UK.OBIE.NextStatement',
      'UK.OBIE.PaymentDue',
      'UK.OBIE.PurchasePromoEnd',
      'UK.OBIE.StatementAvailable',
    ],
  })
  .openapi('OBInternalStatementDateTimeType1Code')

const OBInternalStatementFeeFrequency1CodeSchema = z
  .string()
  .openapi({
    description:
      'How frequently the fee is applied to the Account. For a full list of values see `OBInternalStatementFeeFrequency1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.StatementMonthly',
    'x-namespaced-enum': [
      'UK.OBIE.ChargingPeriod',
      'UK.OBIE.PerTransactionAmount',
      'UK.OBIE.PerTransactionPercentage',
      'UK.OBIE.Quarterly',
      'UK.OBIE.StatementMonthly',
      'UK.OBIE.Weekly',
    ],
  })
  .openapi('OBInternalStatementFeeFrequency1Code')

const OBInternalStatementFeeRateType1CodeSchema = z
  .string()
  .openapi({
    description:
      'This code indicates the specific type of fee rate (e.g., AER, EAR). For a full list of values see `OBInternalStatementFeeRateType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.AER',
    'x-namespaced-enum': ['UK.OBIE.AER', 'UK.OBIE.EAR'],
  })
  .openapi('OBInternalStatementFeeRateType1Code')

const OBInternalStatementFeeType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Fee type, in a coded form. For a full list of values see `OBInternalStatementFeeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.Annual',
    'x-namespaced-enum': [
      'UK.OBIE.Annual',
      'UK.OBIE.BalanceTransfer',
      'UK.OBIE.CashAdvance',
      'UK.OBIE.CashTransaction',
      'UK.OBIE.ForeignCashTransaction',
      'UK.OBIE.ForeignTransaction',
      'UK.OBIE.Gambling',
      'UK.OBIE.LatePayment',
      'UK.OBIE.MoneyTransfer',
      'UK.OBIE.Monthly',
      'UK.OBIE.Overlimit',
      'UK.OBIE.PostalOrder',
      'UK.OBIE.PrizeEntry',
      'UK.OBIE.StatementCopy',
      'UK.OBIE.Total',
      'UK.OBIE.InstalmentPlan',
      'UK.OBIE.ReturnedPayment',
    ],
  })
  .openapi('OBInternalStatementFeeType1Code')

const OBInternalStatementInterestFrequency1CodeSchema = z
  .string()
  .openapi({
    description:
      'Specifies the statement fee type requested. For a full list of values see `OBInternalStatementInterestFrequency1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.Monthly',
    'x-namespaced-enum': [
      'UK.OBIE.Daily',
      'UK.OBIE.HalfYearly',
      'UK.OBIE.Monthly',
      'UK.OBIE.PerStatementDate',
      'UK.OBIE.Quarterly',
      'UK.OBIE.Weekly',
      'UK.OBIE.Yearly',
    ],
  })
  .openapi('OBInternalStatementInterestFrequency1Code')

const OBInternalStatementInterestRateType1CodeSchema = z
  .string()
  .openapi({
    description:
      'This code specifies the type of interest (e.g., BOE Base Rate, Fixed Rate, Gross).',
    example: 'UK.OBIE.FixedRate',
    'x-namespaced-enum': [
      'UK.OBIE.BOEBaseRate',
      'UK.OBIE.FixedRate',
      'UK.OBIE.Gross',
      'UK.OBIE.LoanProviderBaseRate',
      'UK.OBIE.Net',
    ],
  })
  .openapi('OBInternalStatementInterestRateType1Code')

const OBInternalStatementInterestType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Interest amount type, in a coded form. For a full list of values see `OBInternalStatementInterestType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.Total',
    'x-namespaced-enum': [
      'UK.OBIE.BalanceTransfer',
      'UK.OBIE.Cash',
      'UK.OBIE.EstimatedNext',
      'UK.OBIE.Purchase',
      'UK.OBIE.Total',
      'UK.OBIE.InstalmentPlan',
      'UK.OBIE.MoneyTransfer',
    ],
  })
  .openapi('OBInternalStatementInterestType1Code')

const OBInternalStatementRateType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Statement rate type, in a coded form. For a full list of values see `OBInternalStatementRateType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.AnnualCash',
    'x-namespaced-enum': [
      'UK.OBIE.AnnualBalanceTransfer',
      'UK.OBIE.AnnualBalanceTransferAfterPromo',
      'UK.OBIE.AnnualBalanceTransferPromo',
      'UK.OBIE.AnnualCash',
      'UK.OBIE.AnnualPurchase',
      'UK.OBIE.AnnualPurchaseAfterPromo',
      'UK.OBIE.AnnualPurchasePromo',
      'UK.OBIE.MonthlyBalanceTransfer',
      'UK.OBIE.MonthlyCash',
      'UK.OBIE.MonthlyPurchase',
    ],
  })
  .openapi('OBInternalStatementRateType1Code')

const OBInternalStatementType1CodeSchema = z
  .enum(['AccountClosure', 'AccountOpening', 'Annual', 'Interim', 'RegularPeriodic'])
  .openapi({
    description:
      'Statement type, in a coded form. For a full list of values see `OBInternalStatementType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'RegularPeriodic',
  })
  .openapi('OBInternalStatementType1Code')

const OBInternalStatementValueType1CodeSchema = z
  .string()
  .openapi({
    description:
      'Statement value type, in a coded form. For a full list of values see `OBInternalStatementValueType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
    example: 'UK.OBIE.Credit',
    'x-namespaced-enum': [
      'UK.OBIE.AirMilesPoints',
      'UK.OBIE.AirMilesPointsBalance',
      'UK.OBIE.Credits',
      'UK.OBIE.Debits',
      'UK.OBIE.HotelPoints',
      'UK.OBIE.HotelPointsBalance',
      'UK.OBIE.RetailShoppingPoints',
      'UK.OBIE.RetailShoppingPointsBalance',
    ],
  })
  .openapi('OBInternalStatementValueType1Code')

const OBFrequencyPeriodTypeSchema = z
  .enum(['ADHO', 'YEAR', 'DAIL', 'INDA', 'MNTH', 'QURT', 'MIAN', 'WEEK'])
  .openapi({
    description:
      'Individual Definitions:\n ADHO - Adhoc \n YEAR - Annual\nDAIL - Daily\nINDA - Intra Day\nMNTH - Monthly\nQURT - Quarterly\nWEEK - Weekly ',
  })
  .openapi('OBFrequencyPeriodType')

const OBMerchantDetails1Schema = z
  .object({
    MerchantName: z
      .string()
      .min(1)
      .max(350)
      .exactOptional()
      .openapi({ description: 'Name by which the merchant is known.' }),
    MerchantCategoryCode: z
      .string()
      .min(3)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.',
      }),
  })
  .openapi({ description: 'Details of the merchant involved in the transaction.', required: [] })
  .openapi('OBMerchantDetails1')

const PartyIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.',
    example: 'PXSIF023',
  })
  .openapi('PartyId')

const PartyNumberSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description: 'Number assigned by an agent to identify its customer.',
    example: '20202002',
  })
  .openapi('PartyNumber')

const PhoneNumber_0Schema = z
  .string()
  .regex(/\+[0-9]{1,3}-[0-9()+\-]{1,30}/)
  .openapi({
    description:
      'Collection of information that identifies a phone number, as defined by telecom services.',
    example: '+44-2079460000',
  })
  .openapi('PhoneNumber_0')

const PhoneNumber_1Schema = z
  .string()
  .regex(/\+[0-9]{1,3}-[0-9()+\-]{1,30}/)
  .openapi({
    description:
      'Collection of information that identifies a mobile phone number, as defined by telecom services.',
    example: '+44-7700900000',
  })
  .openapi('PhoneNumber_1')

const OBPartyRelationships1Schema = z
  .object({
    Account: z
      .object({
        Related: z
          .url()
          .openapi({
            description: 'Absolute URI to the related resource.',
            example: 'https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019',
          }),
        Id: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'Unique identification as assigned by the ASPSP to uniquely identify the related resource.',
            example: '89019',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['Related', 'Id'],
        description: 'Relationship to the Account resource.',
      }),
  })
  .openapi({ description: "The Party's relationships with other resources.", required: [] })
  .openapi('OBPartyRelationships1')

const OBParty2Schema = z
  .strictObject({
    PartyId: PartyIdSchema,
    PartyNumber: PartyNumberSchema.exactOptional(),
    PartyType: OBInternalPartyType1CodeSchema.exactOptional(),
    Name: Name_3Schema.exactOptional(),
    FullLegalName: FullLegalNameSchema.exactOptional(),
    LegalStructure: OBInternalLegalStructureType1CodeSchema.exactOptional(),
    LEI: LEISchema.exactOptional(),
    BeneficialOwnership: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "A flag to indicate a party's beneficial ownership of the related account",
      }),
    AccountRole: OBInternalAccountRole1CodeSchema.exactOptional(),
    EmailAddress: EmailAddressSchema.exactOptional(),
    Phone: PhoneNumber_0Schema.exactOptional(),
    Mobile: PhoneNumber_1Schema.exactOptional(),
    Relationships: OBPartyRelationships1Schema.exactOptional(),
    Address: z.array(OBPostalAddress7Schema).exactOptional(),
  })
  .openapi({ required: ['PartyId'] })
  .openapi('OBParty2')

const OBRate1_0Schema = z
  .number()
  .openapi({
    description:
      'Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)',
    example: 0.05,
  })
  .openapi('OBRate1_0')

const OBRate1_1Schema = z
  .number()
  .openapi({
    description:
      'Rate for Statement Interest (where it is applicable in terms of a rate rather than an amount)',
    example: 0.05,
  })
  .openapi('OBRate1_1')

const OBReadAccount6Schema: z.ZodType<OBReadAccount6Type> = z
  .strictObject({
    Data: z
      .object({ Account: z.array(OBAccount6Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadAccount6')

const OBReadBalance1Schema = z
  .strictObject({
    Data: z
      .object({
        Balance: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                CreditDebitIndicator: OBCreditDebitCode_2Schema,
                Type: OBBalanceType1CodeSchema,
                DateTime: z.iso
                  .datetime({ offset: true })
                  .openapi({
                    description:
                      'Indicates the date (and time) of the balance. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                  }),
                Amount: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                    SubType: z
                      .enum(['BCUR', 'LCUR'])
                      .default('BCUR')
                      .exactOptional()
                      .openapi({
                        description:
                          'Balance sub type, in a coded form. Default if not specified is BCUR of the account',
                      }),
                  })
                  .openapi({
                    required: ['Amount', 'Currency'],
                    description: 'Amount of money of the cash balance.',
                  }),
                CreditLine: z
                  .array(
                    z
                      .object({
                        Included: z
                          .boolean()
                          .openapi({
                            description:
                              'Indicates whether or not the credit line is included in the balance of the account.\nUsage: If not present, credit line is not included in the balance amount of the account.',
                          }),
                        Type: z
                          .enum(['Available', 'Credit', 'Emergency', 'Pre-Agreed', 'Temporary'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Limit type, in a coded form. <br /> For a full list of enumeration values refer to `OBInternalLimitType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
                          }),
                        Amount: z
                          .object({
                            Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                            Currency: ActiveOrHistoricCurrencyCode_1Schema,
                          })
                          .exactOptional()
                          .openapi({
                            required: ['Amount', 'Currency'],
                            description: 'Amount of money of the credit line.',
                          }),
                      })
                      .openapi({
                        description: 'Set of elements used to provide details on the credit line.',
                        required: ['Included'],
                      }),
                  )
                  .exactOptional(),
                LocalAmount: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                    SubType: z
                      .enum(['BCUR', 'LCUR'])
                      .default('LCUR')
                      .exactOptional()
                      .openapi({
                        description:
                          'Balance sub type, in a coded form. Default if not specified is LCUR of the account',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    required: ['Amount', 'Currency'],
                    description:
                      'Optional component providing the equivalent of Amount in local currency. Default is Local Currency (LCUR) if not specified',
                  }),
              })
              .openapi({
                description: 'Set of elements used to define the balance details.',
                required: ['AccountId', 'CreditDebitIndicator', 'Type', 'DateTime', 'Amount'],
              }),
          )
          .min(1),
        TotalValue: z
          .object({
            Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
            Currency: ActiveOrHistoricCurrencyCode_1Schema,
          })
          .exactOptional()
          .openapi({
            required: ['Amount', 'Currency'],
            description: 'Combined sum of all Amounts in the accounts base currency',
          }),
      })
      .openapi({ required: ['Balance'] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadBalance1')

const OBReadBeneficiary5Schema = z
  .object({
    Data: z
      .object({ Beneficiary: z.array(OBBeneficiary5Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadBeneficiary5')

const OBRisk2Schema = z
  .strictObject({})
  .openapi({
    description:
      'The Risk section is sent by the initiating party to the ASPSP. <br />\nIt is used to specify additional details for risk scoring for Account Info.',
  })
  .openapi('OBRisk2')

const OBReadConsent1Schema = z
  .object({
    Data: z
      .object({
        Permissions: z
          .array(
            z
              .enum([
                'ReadAccountsBasic',
                'ReadAccountsDetail',
                'ReadBalances',
                'ReadBeneficiariesBasic',
                'ReadBeneficiariesDetail',
                'ReadDirectDebits',
                'ReadOffers',
                'ReadPAN',
                'ReadParty',
                'ReadPartyPSU',
                'ReadProducts',
                'ReadScheduledPaymentsBasic',
                'ReadScheduledPaymentsDetail',
                'ReadStandingOrdersBasic',
                'ReadStandingOrdersDetail',
                'ReadStatementsBasic',
                'ReadStatementsDetail',
                'ReadTransactionsBasic',
                'ReadTransactionsCredits',
                'ReadTransactionsDebits',
                'ReadTransactionsDetail',
              ])
              .openapi({
                description:
                  'Specifies the Open Banking account access data types. <br /> This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP. <br /> For a full list of enumeration values refer to `OBInternalPermissions1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)',
              }),
          )
          .min(1),
        ExpirationDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified date and time the permissions will expire.\nIf this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        TransactionFromDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified start date and time for the transaction query period.\nIf this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        TransactionToDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified end date and time for the transaction query period.\nIf this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({ required: ['Permissions'] }),
    Risk: OBRisk2Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBReadConsent1')

const OBInternalConsentStatus1CodeSchema = z
  .enum(['AWAU', 'RJCT', 'AUTH', 'CANC', 'EXPD'])
  .openapi({ description: 'Specifies the status of consent resource in code form.' })
  .openapi('OBInternalConsentStatus1Code')

const OBStatusReasonSchema = z
  .object({
    StatusReasonCode: z
      .string()
      .min(1)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Specifies the status reason in a code form. \n For a full description see `OBExternalStatusReason1Code` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
        example: 'U004',
      }),
    StatusReasonDescription: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description: 'Description supporting the StatusReasonCode.',
        example: 'Permissions field is missing',
      }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Recommended but optional reference to JSON path if relevant to the StatusReasonCode.',
        example: 'Data.Permissions',
      }),
  })
  .openapi({ required: [] })
  .openapi('OBStatusReason')

const OBReadConsentResponse1Schema = z
  .strictObject({
    Data: z
      .object({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'Unique identification as assigned to identify the account access consent resource.',
          }),
        CreationDateTime: CreationDateTimeSchema,
        Status: OBInternalConsentStatus1CodeSchema,
        StatusReason: z
          .array(OBStatusReasonSchema)
          .exactOptional()
          .openapi({ description: 'Specifies the status reason.' }),
        StatusUpdateDateTime: StatusUpdateDateTimeSchema,
        Permissions: z
          .array(
            z
              .enum([
                'ReadAccountsBasic',
                'ReadAccountsDetail',
                'ReadBalances',
                'ReadBeneficiariesBasic',
                'ReadBeneficiariesDetail',
                'ReadDirectDebits',
                'ReadOffers',
                'ReadPAN',
                'ReadParty',
                'ReadPartyPSU',
                'ReadProducts',
                'ReadScheduledPaymentsBasic',
                'ReadScheduledPaymentsDetail',
                'ReadStandingOrdersBasic',
                'ReadStandingOrdersDetail',
                'ReadStatementsBasic',
                'ReadStatementsDetail',
                'ReadTransactionsBasic',
                'ReadTransactionsCredits',
                'ReadTransactionsDebits',
                'ReadTransactionsDetail',
              ])
              .openapi({
                description:
                  'Specifies the Open Banking account access data types. <br /> This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP. <br /> For a full list of enumeration values refer to `OBInternalPermissions1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)',
              }),
          )
          .min(1),
        ExpirationDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified date and time the permissions will expire.\nIf this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        TransactionFromDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified start date and time for the transaction query period.\nIf this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        TransactionToDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified end date and time for the transaction query period.\nIf this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Permissions',
        ],
      }),
    Risk: OBRisk2Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBReadConsentResponse1')

const StatementIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'Unique identifier for the statement resource within a servicing institution. This identifier is both unique and immutable.',
    example: '8sfhke-sifhkeuf-97813',
  })
  .openapi('StatementId')

const StatementReferenceSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Unique reference for the statement. This reference may be optionally populated if available.',
    example: '002',
  })
  .openapi('StatementReference')

const StartDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which the statement period starts. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2017-07-12T00:00:00+00:00',
  })
  .openapi('StartDateTime')

const RateSchema = z
  .string()
  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
  .max(40)
  .openapi({ description: 'Rate associated with the statement rate type.', example: '0.224' })
  .openapi('Rate')

const ValueSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({ description: 'Value associated with the statement value type.' })
  .openapi('Value')

const OBStatement2Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    StatementId: StatementIdSchema.exactOptional(),
    StatementReference: StatementReferenceSchema.exactOptional(),
    Type: OBInternalStatementType1CodeSchema,
    StartDateTime: StartDateTimeSchema,
    EndDateTime: EndDateTimeSchema,
    CreationDateTime: CreationDateTimeSchema,
    StatementDescription: z
      .array(
        z
          .string()
          .min(1)
          .max(500)
          .openapi({
            description: 'Other descriptions that may be available for the statement resource.',
            example: 'August 2017 Statement',
          }),
      )
      .exactOptional(),
    StatementBenefit: z
      .array(
        z
          .object({
            Type: OBInternalStatementBenefitType1CodeSchema,
            Amount: OBActiveOrHistoricCurrencyAndAmount_5Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a benefit or reward amount for the statement resource.',
            required: ['Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementFee: z
      .array(
        z
          .object({
            Description: Description_1Schema.exactOptional(),
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementFeeType1CodeSchema,
            Rate: OBRate1_0Schema.exactOptional(),
            RateType: OBInternalStatementFeeRateType1CodeSchema.exactOptional(),
            Frequency: OBInternalStatementFeeFrequency1CodeSchema.exactOptional(),
            Amount: OBActiveOrHistoricCurrencyAndAmount_6Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a fee for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementInterest: z
      .array(
        z
          .object({
            Description: Description_2Schema.exactOptional(),
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementInterestType1CodeSchema,
            Rate: OBRate1_1Schema.exactOptional(),
            RateType: OBInternalStatementInterestRateType1CodeSchema.exactOptional(),
            Frequency: OBInternalStatementInterestFrequency1CodeSchema.exactOptional(),
            Amount: OBActiveOrHistoricCurrencyAndAmount_7Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic interest amount related to the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementAmount: z
      .array(
        z
          .object({
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementAmountType1CodeSchema,
            Amount: z
              .object({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCode_1Schema,
                SubType: z
                  .enum(['BCUR', 'LCUR'])
                  .default('BCUR')
                  .exactOptional()
                  .openapi({
                    description:
                      'The amount in the domestic or base accounting currency. Default is Base Currency (BCUR) if not specified',
                  }),
              })
              .openapi({
                required: ['Amount', 'Currency'],
                description: 'Amount of money of the cash balance.',
              }),
            LocalAmount: z
              .object({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCode_1Schema,
                SubType: z
                  .enum(['BCUR', 'LCUR'])
                  .default('LCUR')
                  .exactOptional()
                  .openapi({
                    description:
                      'The amount in the local market currency for which the asset is held. Default is Local Currency (LCUR) if not specified',
                  }),
              })
              .exactOptional()
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Optional component providing the equivalent of Amount in local currency.',
              }),
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic amount for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementDateTime: z
      .array(
        z
          .object({ DateTime: DateTimeSchema, Type: OBInternalStatementDateTimeType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic date time for the statement resource.',
            required: ['DateTime', 'Type'],
          }),
      )
      .exactOptional(),
    StatementRate: z
      .array(
        z
          .object({ Rate: RateSchema, Type: OBInternalStatementRateType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic rate related to the statement resource.',
            required: ['Rate', 'Type'],
          }),
      )
      .exactOptional(),
    StatementValue: z
      .array(
        z
          .object({ Value: ValueSchema, Type: OBInternalStatementValueType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic number value related to the statement resource.',
            required: ['Value', 'Type'],
          }),
      )
      .exactOptional(),
    TotalValue: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .exactOptional()
      .openapi({
        description: 'Combined sum of all Amounts in the accounts base currency',
        required: ['Amount', 'Currency'],
      }),
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'Type', 'StartDateTime', 'EndDateTime', 'CreationDateTime'],
  })
  .openapi('OBStatement2')

const OBReadDataStatement2Schema = z
  .strictObject({ Statement: z.array(OBStatement2Schema).exactOptional() })
  .openapi({ required: [] })
  .openapi('OBReadDataStatement2')

const TransactionIdSchema = z
  .string()
  .min(1)
  .max(210)
  .openapi({
    description:
      'Unique identifier for the transaction within a servicing institution. This identifier is both unique and immutable.',
  })
  .openapi('TransactionId')

const TransactionReferenceSchema = z
  .string()
  .min(1)
  .max(210)
  .openapi({
    description:
      'Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.',
  })
  .openapi('TransactionReference')

const ValueDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.\nUsage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.\nFor transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ValueDateTime')

const TransactionInformationSchema = z
  .string()
  .min(1)
  .max(500)
  .openapi({
    description:
      'Further details of the transaction. \nThis is the transaction narrative, which is unstructured text.',
  })
  .openapi('TransactionInformation')

const ProprietaryBankTransactionCodeStructure1Schema = z
  .strictObject({
    Code: z
      .string()
      .min(1)
      .max(35)
      .openapi({
        description: 'Proprietary bank transaction code to identify the underlying transaction.',
      }),
    Issuer: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identification of the issuer of the proprietary bank transaction code.',
      }),
  })
  .openapi({
    required: ['Code'],
    description: 'Set of elements to fully identify a proprietary bank transaction code.',
  })
  .openapi('ProprietaryBankTransactionCodeStructure1')

const OBExtendedProprietaryBankTransactionCodeSchema = z
  .object({
    Code: z
      .string()
      .min(1)
      .max(35)
      .openapi({
        description: 'Proprietary bank transaction code to identify the underlying transaction.',
      }),
    Issuer: z
      .string()
      .min(1)
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Identification of the issuer of the proprietary bank transaction code.',
      }),
    Description: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'Description of the code and its usage on the ASPSP channel' }),
  })
  .openapi({
    description:
      'Additional proprietary bank transaction codes used by the ASPSP for the underlying transaction',
    required: ['Code'],
  })
  .openapi('OBExtendedProprietaryBankTransactionCode')

const OBTransactionCashBalanceSchema = z
  .strictObject({
    CreditDebitIndicator: OBCreditDebitCode_2Schema,
    Type: OBBalanceType1CodeSchema,
    Amount: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .openapi({
        required: ['Amount', 'Currency'],
        description:
          'Amount of money of the cash balance after a transaction entry is applied to the account..',
      }),
  })
  .openapi({
    required: ['CreditDebitIndicator', 'Type', 'Amount'],
    description:
      'Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.',
  })
  .openapi('OBTransactionCashBalance')

const OBTransactionCardInstrument1Schema = z
  .strictObject({
    CardSchemeName: z
      .enum(['AmericanExpress', 'Diners', 'Discover', 'MasterCard', 'VISA'])
      .openapi({
        description:
          'Name of the card scheme. <br />\nFor a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
      }),
    AuthorisationType: z
      .enum(['ConsumerDevice', 'Contactless', 'None', 'PIN'])
      .exactOptional()
      .openapi({
        description:
          'The card authorisation type. <br />\nFor a full list of enumeration values refer to `OBInternalCardAuthorisationType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
      }),
    Name: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({ description: 'Name of the cardholder using the card instrument.' }),
    Identification: z
      .string()
      .min(1)
      .max(34)
      .exactOptional()
      .openapi({
        description:
          'Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.',
      }),
  })
  .openapi({
    required: ['CardSchemeName'],
    description:
      'Set of elements to describe the card instrument used in the transaction. <br />\nFor a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
  })
  .openapi('OBTransactionCardInstrument1')

const OBTransaction6Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    TransactionId: TransactionIdSchema.exactOptional(),
    TransactionReference: TransactionReferenceSchema.exactOptional(),
    StatementReference: z.array(StatementReferenceSchema).exactOptional(),
    CreditDebitIndicator: OBCreditDebitCode_1Schema,
    Status: ExternalEntryStatus1CodeSchema,
    TransactionMutability: OBInternalTransactionMutability1CodeSchema.exactOptional(),
    BookingDateTime: BookingDateTimeSchema,
    ValueDateTime: ValueDateTimeSchema.exactOptional(),
    TransactionInformation: TransactionInformationSchema.exactOptional(),
    AddressLine: AddressLineSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmount_9Schema,
    ChargeAmount: OBActiveOrHistoricCurrencyAndAmount_10Schema.exactOptional(),
    CurrencyExchange: OBCurrencyExchange5Schema.exactOptional(),
    BankTransactionCode: OBBankTransactionCodeStructure1Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    ExtendedProprietaryBankTransactionCodes: z
      .array(OBExtendedProprietaryBankTransactionCodeSchema)
      .exactOptional(),
    Balance: OBTransactionCashBalanceSchema.exactOptional(),
    MerchantDetails: OBMerchantDetails1Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_1Schema.exactOptional(),
    CreditorAccount: OBCashAccount6_0Schema.exactOptional(),
    DebtorAgent: OBBranchAndFinancialInstitutionIdentification6_2Schema.exactOptional(),
    DebtorAccount: OBCashAccount6_1Schema.exactOptional(),
    CardInstrument: OBTransactionCardInstrument1Schema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    CategoryPurposeCode: ExternalCategoryPurpose1CodeSchema.exactOptional(),
    PaymentPurposeCode: OBExternalPurpose1CodeSchema.exactOptional(),
    UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
    UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
    IntermediaryAgent1: OBIntermediaryAgentSchema.exactOptional(),
    IntermediaryAgent2: OBIntermediaryAgentSchema.exactOptional(),
    IntermediaryAgent3: OBIntermediaryAgentSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'CreditDebitIndicator', 'Status', 'BookingDateTime', 'Amount'],
  })
  .openapi('OBTransaction6')

const OBReadDataTransaction6Schema = z
  .strictObject({ Transaction: z.array(OBTransaction6Schema).exactOptional() })
  .openapi({ required: [] })
  .openapi('OBReadDataTransaction6')

const PreviousPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Date of most recent direct debit collection. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('PreviousPaymentDateTime')

const OBReadDirectDebit2Schema = z
  .strictObject({
    Data: z
      .object({
        DirectDebit: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                DirectDebitId: DirectDebitIdSchema.exactOptional(),
                DirectDebitStatusCode: ExternalMandateStatus1CodeSchema.exactOptional(),
                MandateRelatedInformation: OBMandateRelatedInformation1Schema.exactOptional(),
                Name: Name_2Schema,
                PreviousPaymentDateTime: PreviousPaymentDateTimeSchema.exactOptional(),
                PreviousPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_0Schema.exactOptional(),
              })
              .openapi({
                description: 'Account to or from which a cash entry is made.',
                required: ['AccountId', 'Name'],
              }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadDirectDebit2')

const OBReadOffer1Schema = z
  .strictObject({
    Data: z
      .object({
        Offer: z
          .array(
            z
              .object({
                AccountId: AccountIdSchema,
                OfferId: z
                  .string()
                  .min(1)
                  .max(40)
                  .exactOptional()
                  .openapi({
                    description:
                      'A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.',
                    example: 'Offer1',
                  }),
                OfferType: z
                  .enum([
                    'BalanceTransfer',
                    'LimitIncrease',
                    'MoneyTransfer',
                    'Other',
                    'PromotionalRate',
                  ])
                  .exactOptional()
                  .openapi({
                    description:
                      'Offer type, in a coded form. For a full list of values refer to `OBExternalOfferType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)',
                    example: 'LimitIncrease',
                  }),
                Description: z
                  .string()
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({
                    description: 'Further details of the offer.',
                    example: 'Credit limit increase for the account up to £10000.00',
                  }),
                StartDateTime: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Date and time at which the offer starts. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                    example: '2024-05-29T00:00:00Z',
                  }),
                EndDateTime: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Date and time at which the offer ends. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                    example: '2024-06-29T00:00:00Z',
                  }),
                Rate: z
                  .string()
                  .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                  .exactOptional()
                  .openapi({
                    description: 'Rate associated with the offer type.',
                    example: '100.00',
                  }),
                Value: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Value associated with the offer type.', example: 10 }),
                Term: z
                  .string()
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({
                    description: 'Further details of the term of the offer.',
                    example: 'Starting first of the month and ending at the end of year',
                  }),
                URL: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'URL (Uniform Resource Locator) where documentation on the offer can be found',
                    example: 'http://modelbank.com/offer/offer1',
                  }),
                Amount: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                  })
                  .exactOptional()
                  .openapi({
                    required: ['Amount', 'Currency'],
                    description: 'Amount of money associated with the offer type.',
                  }),
                Fee: z
                  .object({
                    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                    Currency: ActiveOrHistoricCurrencyCode_1Schema,
                  })
                  .exactOptional()
                  .openapi({
                    required: ['Amount', 'Currency'],
                    description: 'Fee associated with the offer type.',
                  }),
              })
              .openapi({ required: ['AccountId'] }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadOffer1')

const OBReadParty2Schema = z
  .strictObject({
    Data: z.object({ Party: OBParty2Schema.exactOptional() }).openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadParty2')

const OBReadParty3Schema = z
  .strictObject({
    Data: z.object({ Party: z.array(OBParty2Schema).exactOptional() }).openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadParty3')

const OBReadProduct2Schema: z.ZodType<OBReadProduct2Type> = z
  .strictObject({
    Data: z
      .object({
        Product: z
          .array(
            z
              .object({
                ProductName: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.',
                    example: '321 Product',
                  }),
                ProductId: z
                  .string()
                  .min(1)
                  .max(40)
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifier within the parent organisation for the product. Must be unique in the organisation',
                    example: '51B',
                  }),
                AccountId: AccountIdSchema,
                SecondaryProductId: z
                  .string()
                  .min(1)
                  .max(70)
                  .exactOptional()
                  .openapi({
                    description:
                      'Any secondary Identification which supports Product Identifier to uniquely identify the current account banking products.',
                    example: 'CA78',
                  }),
                ProductType: z
                  .enum([
                    'BusinessCurrentAccount',
                    'CommercialCreditCard',
                    'Other',
                    'PersonalCurrentAccount',
                    'SMELoan',
                  ])
                  .openapi({
                    description:
                      'Descriptive code for the product category.  For a full list refer to `OBInternalProductType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)<br /><br /> If ProductType - "Other" is chosen, the object OtherProductType must be populated with name, and description.',
                    example: 'PersonalCurrentAccount',
                  }),
                MarketingStateId: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of a Product Marketing State.',
                    example: '22878123',
                  }),
                OtherProductType: z
                  .object({
                    Name: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Name of "Other" product type.',
                        example: 'e-Wallet',
                      }),
                    Description: z
                      .string()
                      .min(1)
                      .max(350)
                      .openapi({
                        description: 'Description of "Other" product type',
                        example: 'Virtual wallet',
                      }),
                    ProductDetails: z
                      .object({
                        Segment: z
                          .array(
                            z
                              .enum([
                                'GEAS',
                                'GEBA',
                                'GEBR',
                                'GEBU',
                                'GECI',
                                'GECS',
                                'GEFB',
                                'GEFG',
                                'GEG',
                                'GEGR',
                                'GEGS',
                                'GEOT',
                                'GEOV',
                                'GEPA',
                                'GEPR',
                                'GERE',
                                'GEST',
                                'GEYA',
                                'GEYO',
                                'PSCA',
                                'PSES',
                                'PSNC',
                                'PSNP',
                                'PSRG',
                                'PSSS',
                                'PSST',
                                'PSSW',
                              ])
                              .openapi({
                                description:
                                  'Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.\nRead more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd ',
                              }),
                          )
                          .exactOptional(),
                        FeeFreeLength: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'The length/duration of the fee free period' }),
                        FeeFreeLengthPeriod: z
                          .enum(['PACT', 'PDAY', 'PHYR', 'PMTH', 'PQTR', 'PWEK', 'PYER'])
                          .exactOptional()
                          .openapi({
                            description:
                              'The unit of period (days, weeks, months etc.) of the promotional length',
                          }),
                        MonthlyMaximumCharge: z
                          .string()
                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                          .exactOptional()
                          .openapi({
                            description:
                              'The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description:
                                  'Optional additional notes to supplement the Core product details',
                              }),
                          )
                          .exactOptional(),
                        OtherSegment: OBOtherCodeType1_0Schema.exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    CreditInterest: z
                      .object({
                        TierBandSet: z
                          .array(
                            z
                              .object({
                                TierBandMethod: z
                                  .enum(['INBA', 'INTI', 'INWH'])
                                  .openapi({
                                    description:
                                      "The methodology of how credit interest is paid/applied. It can be:-\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n3. Whole\nThe same interest rate is applied irrespective of the product holder's account balance",
                                  }),
                                CalculationMethod:
                                  OBInterestCalculationMethod1CodeSchema.exactOptional(),
                                Destination: z
                                  .enum(['INOT', 'INPA', 'INSC'])
                                  .openapi({
                                    description:
                                      'Describes whether accrued interest is payable only to the BCA or to another bank account',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Optional additional notes to supplement the Tier Band Set details',
                                      }),
                                  )
                                  .exactOptional(),
                                OtherCalculationMethod: OBOtherCodeType1_0Schema.exactOptional(),
                                OtherDestination: OBOtherCodeType1_0Schema.exactOptional(),
                                TierBand: z
                                  .array(
                                    z
                                      .object({
                                        Identification: z
                                          .string()
                                          .min(1)
                                          .max(35)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Unique and unambiguous identification of a  Tier Band for the Product.',
                                          }),
                                        TierValueMinimum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'Minimum deposit value for which the credit interest tier applies.',
                                          }),
                                        TierValueMaximum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum deposit value for which the credit interest tier applies.',
                                          }),
                                        CalculationFrequency: z
                                          .enum([
                                            'FQAT',
                                            'FQDY',
                                            'FQHY',
                                            'FQMY',
                                            'FQOT',
                                            'FQQY',
                                            'FQSD',
                                            'FQWY',
                                            'FQYY',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'How often is credit interest calculated for the account.',
                                          }),
                                        ApplicationFrequency: z
                                          .enum([
                                            'FQAT',
                                            'FQDY',
                                            'FQHY',
                                            'FQMY',
                                            'FQOT',
                                            'FQQY',
                                            'FQSD',
                                            'FQWY',
                                            'FQYY',
                                          ])
                                          .openapi({
                                            description:
                                              "How often is interest applied to the Product for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's account.",
                                          }),
                                        DepositInterestAppliedCoverage: z
                                          .enum(['INBA', 'INTI', 'INWH'])
                                          .exactOptional()
                                          .openapi({
                                            description: 'Amount on which Interest applied.',
                                          }),
                                        FixedVariableInterestRateType:
                                          OBInterestFixedVariableType1CodeSchema,
                                        AER: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \nRead more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A',
                                          }),
                                        BankInterestRateType: z
                                          .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account.",
                                          }),
                                        BankInterestRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Bank Interest for the product',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({
                                                description:
                                                  'Optional additional notes to supplement the Tier Band details',
                                              }),
                                          )
                                          .exactOptional(),
                                        OtherBankInterestType: z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Name: Name_4Schema,
                                            Description: Description_3Schema,
                                          })
                                          .exactOptional()
                                          .openapi({
                                            required: ['Name', 'Description'],
                                            description:
                                              'Other interest rate types which are not available in the standard code list',
                                          }),
                                        OtherApplicationFrequency:
                                          OBOtherCodeType1_1Schema.exactOptional(),
                                        OtherCalculationFrequency:
                                          OBOtherCodeType1_2Schema.exactOptional(),
                                      })
                                      .openapi({
                                        description: 'Tier Band Details',
                                        required: [
                                          'TierValueMinimum',
                                          'ApplicationFrequency',
                                          'FixedVariableInterestRateType',
                                          'AER',
                                        ],
                                      }),
                                  )
                                  .min(1),
                              })
                              .openapi({
                                description:
                                  'The group of tiers or bands for which credit interest can be applied.',
                                required: ['TierBandMethod', 'Destination', 'TierBand'],
                              }),
                          )
                          .min(1),
                      })
                      .exactOptional()
                      .openapi({
                        required: ['TierBandSet'],
                        description:
                          'Details about the interest that may be payable to the Account holders',
                      }),
                    Overdraft: z
                      .object({
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description: 'Associated Notes about the overdraft rates',
                              }),
                          )
                          .exactOptional(),
                        OverdraftTierBandSet: z
                          .array(
                            z
                              .object({
                                TierBandMethod: z
                                  .enum(['INBA', 'INTI', 'INWH'])
                                  .openapi({
                                    description:
                                      "The methodology of how overdraft is charged. It can be:\n'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable). \n'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation\n'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.",
                                  }),
                                OverdraftType: z
                                  .enum(['OVCO', 'OVOD', 'OVOT'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time.",
                                  }),
                                Identification: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Unique and unambiguous identification of a  Tier Band for a overdraft product.',
                                  }),
                                AuthorisedIndicator: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Indicates if the Overdraft is authorised (Y) or unauthorised (N)',
                                  }),
                                BufferAmount: z
                                  .string()
                                  .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Optional additional notes to supplement the overdraft Tier Band Set details',
                                      }),
                                  )
                                  .exactOptional(),
                                OverdraftTierBand: z
                                  .array(
                                    z
                                      .object({
                                        Identification: z
                                          .string()
                                          .min(1)
                                          .max(35)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Unique and unambiguous identification of a  Tier Band for a overdraft.',
                                          }),
                                        TierValueMin: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description: 'Minimum value of Overdraft Tier/Band',
                                          }),
                                        TierValueMax: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description: 'Maximum value of Overdraft Tier/Band',
                                          }),
                                        EAR: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently\nused interchangeably), being the actual annual interest rate of an Overdraft.',
                                          }),
                                        AgreementLengthMin: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies the minimum length of a band for a fixed overdraft agreement',
                                          }),
                                        AgreementLengthMax: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies the maximum length of a band for a fixed overdraft agreement',
                                          }),
                                        AgreementPeriod: z
                                          .enum([
                                            'PACT',
                                            'PDAY',
                                            'PHYR',
                                            'PMTH',
                                            'PQTR',
                                            'PWEK',
                                            'PYER',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Specifies the period of a fixed length overdraft agreement',
                                          }),
                                        OverdraftInterestChargingCoverage: z
                                          .enum(['INBA', 'INTI', 'INWH'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is  2k and the interest tiers are:- 0- 500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the  Whole  of the account balance,  and in the 2nd that it is  Tiered .',
                                          }),
                                        BankGuaranteedIndicator: z
                                          .boolean()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it s part of a government scheme, or whether the rate may vary dependent on the applicant s circumstances.',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({
                                                description:
                                                  'Optional additional notes to supplement the Tier/band details',
                                              }),
                                          )
                                          .exactOptional(),
                                        OverdraftFeesCharges: z
                                          .array(
                                            z
                                              .object({
                                                OverdraftFeeChargeCap: z
                                                  .array(
                                                    z
                                                      .object({
                                                        FeeType: z
                                                          .array(
                                                            z
                                                              .enum([
                                                                'FBAO',
                                                                'FBAR',
                                                                'FBEB',
                                                                'FBIT',
                                                                'FBOR',
                                                                'FBOS',
                                                                'FBSC',
                                                                'FBTO',
                                                                'FBUB',
                                                                'FBUT',
                                                                'FTOT',
                                                                'FTUT',
                                                              ])
                                                              .openapi({
                                                                description:
                                                                  'Fee/charge type which is being capped',
                                                              }),
                                                          )
                                                          .min(1),
                                                        MinMaxType: OBMinMaxType1CodeSchema,
                                                        FeeCapOccurrence:
                                                          Number_0Schema.exactOptional(),
                                                        FeeCapAmount:
                                                          OBAmount1_0Schema.exactOptional(),
                                                        CappingPeriod:
                                                          OBPeriod1CodeSchema.exactOptional(),
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Notes related to Overdraft fee charge cap',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType: z
                                                          .array(
                                                            z
                                                              .object({
                                                                Code: OBCodeMnemonicSchema.exactOptional(),
                                                                Name: Name_4Schema,
                                                                Description: Description_3Schema,
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Other fee type code which is not available in the standard code set',
                                                                required: ['Name', 'Description'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                        required: ['FeeType', 'MinMaxType'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OverdraftFeeChargeDetail: z
                                                  .array(
                                                    z
                                                      .object({
                                                        FeeType: OBOverdraftFeeType1CodeSchema,
                                                        NegotiableIndicator: z
                                                          .boolean()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              'Indicates whether fee and charges are negotiable',
                                                          }),
                                                        OverdraftControlIndicator: z
                                                          .boolean()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                                          }),
                                                        IncrementalBorrowingAmount:
                                                          OBAmount1_1Schema.exactOptional(),
                                                        FeeAmount:
                                                          OBAmount1_2Schema.exactOptional(),
                                                        FeeRate: OBRate1_02Schema.exactOptional(),
                                                        FeeRateType:
                                                          OBInterestRateType1Code_0Schema.exactOptional(),
                                                        ApplicationFrequency:
                                                          OBFeeFrequency1Code_0Schema,
                                                        CalculationFrequency:
                                                          OBFeeFrequency1Code_1Schema.exactOptional(),
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OverdraftFeeChargeCap: z
                                                          .array(
                                                            z
                                                              .object({
                                                                FeeType: z
                                                                  .array(
                                                                    z
                                                                      .enum([
                                                                        'FBAO',
                                                                        'FBAR',
                                                                        'FBEB',
                                                                        'FBIT',
                                                                        'FBOR',
                                                                        'FBOS',
                                                                        'FBSC',
                                                                        'FBTO',
                                                                        'FBUB',
                                                                        'FBUT',
                                                                        'FTOT',
                                                                        'FTUT',
                                                                      ])
                                                                      .openapi({
                                                                        description:
                                                                          'Fee/charge type which is being capped',
                                                                      }),
                                                                  )
                                                                  .min(1),
                                                                MinMaxType: OBMinMaxType1CodeSchema,
                                                                FeeCapOccurrence:
                                                                  Number_0Schema.exactOptional(),
                                                                FeeCapAmount:
                                                                  OBAmount1_0Schema.exactOptional(),
                                                                CappingPeriod:
                                                                  OBPeriod1CodeSchema.exactOptional(),
                                                                Notes: z
                                                                  .array(
                                                                    z
                                                                      .string()
                                                                      .min(1)
                                                                      .max(2000)
                                                                      .openapi({
                                                                        description:
                                                                          'Notes related to Overdraft fee charge cap',
                                                                      }),
                                                                  )
                                                                  .exactOptional(),
                                                                OtherFeeType: z
                                                                  .array(
                                                                    z
                                                                      .object({
                                                                        Code: OBCodeMnemonicSchema.exactOptional(),
                                                                        Name: Name_4Schema,
                                                                        Description:
                                                                          Description_3Schema,
                                                                      })
                                                                      .openapi({
                                                                        description:
                                                                          'Other fee type code which is not available in the standard code set',
                                                                        required: [
                                                                          'Name',
                                                                          'Description',
                                                                        ],
                                                                      }),
                                                                  )
                                                                  .exactOptional(),
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                                required: ['FeeType', 'MinMaxType'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType:
                                                          OBOtherCodeType1_3Schema.exactOptional(),
                                                        OtherFeeRateType:
                                                          OBOtherCodeType1_4Schema.exactOptional(),
                                                        OtherApplicationFrequency:
                                                          OBOtherCodeType1_1Schema.exactOptional(),
                                                        OtherCalculationFrequency:
                                                          OBOtherCodeType1_2Schema.exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about the fees/charges',
                                                        required: [
                                                          'FeeType',
                                                          'ApplicationFrequency',
                                                        ],
                                                      }),
                                                  )
                                                  .min(1),
                                              })
                                              .openapi({
                                                description: 'Overdraft fees and charges',
                                                required: ['OverdraftFeeChargeDetail'],
                                              }),
                                          )
                                          .exactOptional(),
                                      })
                                      .openapi({
                                        description:
                                          'Provides overdraft details for a specific tier or band',
                                        required: ['TierValueMin'],
                                      }),
                                  )
                                  .min(1),
                                OverdraftFeesCharges: z
                                  .array(
                                    z
                                      .object({
                                        OverdraftFeeChargeCap: z
                                          .array(
                                            z
                                              .object({
                                                FeeType: z
                                                  .array(
                                                    z
                                                      .enum([
                                                        'FBAO',
                                                        'FBAR',
                                                        'FBEB',
                                                        'FBIT',
                                                        'FBOR',
                                                        'FBOS',
                                                        'FBSC',
                                                        'FBTO',
                                                        'FBUB',
                                                        'FBUT',
                                                        'FTOT',
                                                        'FTUT',
                                                      ])
                                                      .openapi({
                                                        description:
                                                          'Fee/charge type which is being capped',
                                                      }),
                                                  )
                                                  .min(1),
                                                MinMaxType: OBMinMaxType1CodeSchema,
                                                FeeCapOccurrence: Number_0Schema.exactOptional(),
                                                FeeCapAmount: OBAmount1_0Schema.exactOptional(),
                                                CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Notes related to Overdraft fee charge cap',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherFeeType: z
                                                  .array(
                                                    z
                                                      .object({
                                                        Code: OBCodeMnemonicSchema.exactOptional(),
                                                        Name: Name_4Schema,
                                                        Description: Description_3Schema,
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Other fee type code which is not available in the standard code set',
                                                        required: ['Name', 'Description'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                              })
                                              .openapi({
                                                description:
                                                  'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                required: ['FeeType', 'MinMaxType'],
                                              }),
                                          )
                                          .exactOptional(),
                                        OverdraftFeeChargeDetail: z
                                          .array(
                                            z
                                              .object({
                                                FeeType: OBOverdraftFeeType1CodeSchema,
                                                NegotiableIndicator: z
                                                  .boolean()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Indicates whether fee and charges are negotiable',
                                                  }),
                                                OverdraftControlIndicator: z
                                                  .boolean()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      "Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not.",
                                                  }),
                                                IncrementalBorrowingAmount:
                                                  OBAmount1_1Schema.exactOptional(),
                                                FeeAmount: OBAmount1_2Schema.exactOptional(),
                                                FeeRate: OBRate1_02Schema.exactOptional(),
                                                FeeRateType:
                                                  OBInterestRateType1Code_0Schema.exactOptional(),
                                                ApplicationFrequency: OBFeeFrequency1Code_0Schema,
                                                CalculationFrequency:
                                                  OBFeeFrequency1Code_1Schema.exactOptional(),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Free text for capturing any other info related to Overdraft Fees Charge Details',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OverdraftFeeChargeCap: z
                                                  .array(
                                                    z
                                                      .object({
                                                        FeeType: z
                                                          .array(
                                                            z
                                                              .enum([
                                                                'FBAO',
                                                                'FBAR',
                                                                'FBEB',
                                                                'FBIT',
                                                                'FBOR',
                                                                'FBOS',
                                                                'FBSC',
                                                                'FBTO',
                                                                'FBUB',
                                                                'FBUT',
                                                                'FTOT',
                                                                'FTUT',
                                                              ])
                                                              .openapi({
                                                                description:
                                                                  'Fee/charge type which is being capped',
                                                              }),
                                                          )
                                                          .min(1),
                                                        MinMaxType: OBMinMaxType1CodeSchema,
                                                        FeeCapOccurrence:
                                                          Number_0Schema.exactOptional(),
                                                        FeeCapAmount:
                                                          OBAmount1_0Schema.exactOptional(),
                                                        CappingPeriod:
                                                          OBPeriod1CodeSchema.exactOptional(),
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Notes related to Overdraft fee charge cap',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType: z
                                                          .array(
                                                            z
                                                              .object({
                                                                Code: OBCodeMnemonicSchema.exactOptional(),
                                                                Name: Name_4Schema,
                                                                Description: Description_3Schema,
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Other fee type code which is not available in the standard code set',
                                                                required: ['Name', 'Description'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.',
                                                        required: ['FeeType', 'MinMaxType'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherFeeType:
                                                  OBOtherCodeType1_3Schema.exactOptional(),
                                                OtherFeeRateType:
                                                  OBOtherCodeType1_4Schema.exactOptional(),
                                                OtherApplicationFrequency:
                                                  OBOtherCodeType1_1Schema.exactOptional(),
                                                OtherCalculationFrequency:
                                                  OBOtherCodeType1_2Schema.exactOptional(),
                                              })
                                              .openapi({
                                                description: 'Details about the fees/charges',
                                                required: ['FeeType', 'ApplicationFrequency'],
                                              }),
                                          )
                                          .min(1),
                                      })
                                      .openapi({
                                        description: 'Overdraft fees and charges details',
                                        required: ['OverdraftFeeChargeDetail'],
                                      }),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({
                                description: 'Tier band set details',
                                required: ['TierBandMethod', 'OverdraftTierBand'],
                              }),
                          )
                          .min(1),
                      })
                      .exactOptional()
                      .openapi({
                        required: ['OverdraftTierBandSet'],
                        description: 'Borrowing details',
                      }),
                    LoanInterest: z
                      .object({
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description:
                                  'Optional additional notes to supplement the LoanInterest',
                              }),
                          )
                          .exactOptional(),
                        LoanInterestTierBandSet: z
                          .array(
                            z
                              .object({
                                TierBandMethod: z
                                  .enum(['INBA', 'INTI', 'INWH'])
                                  .openapi({
                                    description:
                                      'The methodology of how credit interest is charged. It can be:-\n1. Banded\nInterest rates are banded. i.e. Increasing rate on whole balance as balance increases.\n2. Tiered\nInterest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.\n3. Whole\nThe same interest rate is applied irrespective of the SME Loan balance',
                                  }),
                                Identification: z
                                  .string()
                                  .min(1)
                                  .max(35)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Loan interest tierbandset identification. Used by  loan providers for internal use purpose.',
                                  }),
                                CalculationMethod: OBInterestCalculationMethod1CodeSchema,
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Optional additional notes to supplement the Tier Band Set details',
                                      }),
                                  )
                                  .exactOptional(),
                                OtherCalculationMethod: OBOtherCodeType1_0Schema.exactOptional(),
                                LoanInterestTierBand: z
                                  .array(
                                    z
                                      .object({
                                        Identification: z
                                          .string()
                                          .min(1)
                                          .max(35)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Unique and unambiguous identification of a  Tier Band for a SME Loan.',
                                          }),
                                        TierValueMinimum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'Minimum loan value for which the loan interest tier applies.',
                                          }),
                                        TierValueMaximum: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum loan value for which the loan interest tier applies.',
                                          }),
                                        TierValueMinTerm: z
                                          .int()
                                          .openapi({
                                            description:
                                              'Minimum loan term for which the loan interest tier applies.',
                                          }),
                                        MinTermPeriod: z
                                          .enum([
                                            'PACT',
                                            'PDAY',
                                            'PHYR',
                                            'PMTH',
                                            'PQTR',
                                            'PWEK',
                                            'PYER',
                                          ])
                                          .openapi({
                                            description:
                                              'The unit of period (days, weeks, months etc.) of the Minimum Term',
                                          }),
                                        TierValueMaxTerm: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum loan term for which the loan interest tier applies.',
                                          }),
                                        MaxTermPeriod: z
                                          .enum([
                                            'PACT',
                                            'PDAY',
                                            'PHYR',
                                            'PMTH',
                                            'PQTR',
                                            'PWEK',
                                            'PYER',
                                          ])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'The unit of period (days, weeks, months etc.) of the Maximum Term',
                                          }),
                                        FixedVariableInterestRateType:
                                          OBInterestFixedVariableType1CodeSchema,
                                        RepAPR: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .openapi({
                                            description:
                                              'The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made. \nFor SME Loan, this APR is the representative APR which includes any account fees.',
                                          }),
                                        LoanProviderInterestRateType: z
                                          .enum(['INBB', 'INFR', 'INGR', 'INLR', 'INNE', 'INOT'])
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan.',
                                          }),
                                        LoanProviderInterestRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Loan provider Interest for the SME Loan product',
                                          }),
                                        Notes: z
                                          .array(
                                            z
                                              .string()
                                              .min(1)
                                              .max(2000)
                                              .openapi({
                                                description:
                                                  'Optional additional notes to supplement the Tier Band details',
                                              }),
                                          )
                                          .exactOptional(),
                                        OtherLoanProviderInterestRateType: z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Name: Name_4Schema,
                                            Description: Description_3Schema,
                                          })
                                          .exactOptional()
                                          .openapi({
                                            required: ['Name', 'Description'],
                                            description:
                                              'Other loan interest rate types which are not available in the standard code list',
                                          }),
                                        LoanInterestFeesCharges: z
                                          .array(
                                            z
                                              .object({
                                                LoanInterestFeeChargeDetail: z
                                                  .array(
                                                    z
                                                      .object({
                                                        FeeType: OBFeeType1CodeSchema,
                                                        NegotiableIndicator: z
                                                          .boolean()
                                                          .exactOptional()
                                                          .openapi({
                                                            description:
                                                              'Fee/charge which is usually negotiable rather than a fixed amount',
                                                          }),
                                                        FeeAmount:
                                                          OBAmount1_3Schema.exactOptional(),
                                                        FeeRate: OBRate1_12Schema.exactOptional(),
                                                        FeeRateType:
                                                          OBInterestRateType1Code_1Schema.exactOptional(),
                                                        ApplicationFrequency:
                                                          OBFeeFrequency1Code_2Schema,
                                                        CalculationFrequency:
                                                          OBFeeFrequency1Code_3Schema,
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Optional additional notes to supplement the fee/charge details.',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType:
                                                          OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                                        OtherFeeRateType:
                                                          OBOtherCodeType1_5Schema.exactOptional(),
                                                        OtherApplicationFrequency:
                                                          OBOtherCodeType1_6Schema.exactOptional(),
                                                        OtherCalculationFrequency:
                                                          OBOtherCodeType1_7Schema.exactOptional(),
                                                      })
                                                      .openapi({
                                                        description: 'Other fees/charges details',
                                                        required: [
                                                          'FeeType',
                                                          'ApplicationFrequency',
                                                          'CalculationFrequency',
                                                        ],
                                                      }),
                                                  )
                                                  .min(1),
                                                LoanInterestFeeChargeCap: z
                                                  .array(
                                                    z
                                                      .object({
                                                        FeeType: z
                                                          .array(
                                                            z
                                                              .enum([
                                                                'FEPF',
                                                                'FTOT',
                                                                'FYAF',
                                                                'FYAM',
                                                                'FYAQ',
                                                                'FYCP',
                                                                'FYDB',
                                                                'FYMI',
                                                                'FYXX',
                                                              ])
                                                              .openapi({
                                                                description:
                                                                  'Fee/charge type which is being capped',
                                                              }),
                                                          )
                                                          .min(1),
                                                        MinMaxType: OBMinMaxType1CodeSchema,
                                                        FeeCapOccurrence:
                                                          Number_1Schema.exactOptional(),
                                                        FeeCapAmount:
                                                          OBAmount1_4Schema.exactOptional(),
                                                        CappingPeriod:
                                                          OBFeeFrequency1Code_4Schema.exactOptional(),
                                                        Notes: z
                                                          .array(
                                                            z
                                                              .string()
                                                              .min(1)
                                                              .max(2000)
                                                              .openapi({
                                                                description:
                                                                  'Free text for adding  extra details for fee charge cap',
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                        OtherFeeType: z
                                                          .array(
                                                            z
                                                              .object({
                                                                Code: OBCodeMnemonicSchema.exactOptional(),
                                                                Name: Name_4Schema,
                                                                Description: Description_3Schema,
                                                              })
                                                              .openapi({
                                                                description:
                                                                  'Other fee type code which is not available in the standard code set',
                                                                required: ['Name', 'Description'],
                                                              }),
                                                          )
                                                          .exactOptional(),
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Details about any caps (minimum/maximum charges) that apply to a particular fee/charge',
                                                        required: ['FeeType', 'MinMaxType'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                              })
                                              .openapi({
                                                description:
                                                  'Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits',
                                                required: ['LoanInterestFeeChargeDetail'],
                                              }),
                                          )
                                          .exactOptional(),
                                      })
                                      .openapi({
                                        description: 'Tier Band Details',
                                        required: [
                                          'TierValueMinimum',
                                          'TierValueMinTerm',
                                          'MinTermPeriod',
                                          'FixedVariableInterestRateType',
                                          'RepAPR',
                                        ],
                                      }),
                                  )
                                  .min(1),
                                LoanInterestFeesCharges: z
                                  .array(
                                    z
                                      .object({
                                        LoanInterestFeeChargeDetail: z
                                          .array(
                                            z
                                              .object({
                                                FeeType: OBFeeType1CodeSchema,
                                                NegotiableIndicator: z
                                                  .boolean()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      'Fee/charge which is usually negotiable rather than a fixed amount',
                                                  }),
                                                FeeAmount: OBAmount1_3Schema.exactOptional(),
                                                FeeRate: OBRate1_12Schema.exactOptional(),
                                                FeeRateType:
                                                  OBInterestRateType1Code_1Schema.exactOptional(),
                                                ApplicationFrequency: OBFeeFrequency1Code_2Schema,
                                                CalculationFrequency: OBFeeFrequency1Code_3Schema,
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Optional additional notes to supplement the fee/charge details.',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherFeeType:
                                                  OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                                OtherFeeRateType:
                                                  OBOtherCodeType1_5Schema.exactOptional(),
                                                OtherApplicationFrequency:
                                                  OBOtherCodeType1_6Schema.exactOptional(),
                                                OtherCalculationFrequency:
                                                  OBOtherCodeType1_7Schema.exactOptional(),
                                              })
                                              .openapi({
                                                description: 'Other fees/charges details',
                                                required: [
                                                  'FeeType',
                                                  'ApplicationFrequency',
                                                  'CalculationFrequency',
                                                ],
                                              }),
                                          )
                                          .min(1),
                                        LoanInterestFeeChargeCap: z
                                          .array(
                                            z
                                              .object({
                                                FeeType: z
                                                  .array(
                                                    z
                                                      .enum([
                                                        'FEPF',
                                                        'FTOT',
                                                        'FYAF',
                                                        'FYAM',
                                                        'FYAQ',
                                                        'FYCP',
                                                        'FYDB',
                                                        'FYMI',
                                                        'FYXX',
                                                      ])
                                                      .openapi({
                                                        description:
                                                          'Fee/charge type which is being capped',
                                                      }),
                                                  )
                                                  .min(1),
                                                MinMaxType: OBMinMaxType1CodeSchema,
                                                FeeCapOccurrence: Number_1Schema.exactOptional(),
                                                FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                                CappingPeriod:
                                                  OBFeeFrequency1Code_4Schema.exactOptional(),
                                                Notes: z
                                                  .array(
                                                    z
                                                      .string()
                                                      .min(1)
                                                      .max(2000)
                                                      .openapi({
                                                        description:
                                                          'Free text for adding  extra details for fee charge cap',
                                                      }),
                                                  )
                                                  .exactOptional(),
                                                OtherFeeType: z
                                                  .array(
                                                    z
                                                      .object({
                                                        Code: OBCodeMnemonicSchema.exactOptional(),
                                                        Name: Name_4Schema,
                                                        Description: Description_3Schema,
                                                      })
                                                      .openapi({
                                                        description:
                                                          'Other fee type code which is not available in the standard code set',
                                                        required: ['Name', 'Description'],
                                                      }),
                                                  )
                                                  .exactOptional(),
                                              })
                                              .openapi({
                                                description:
                                                  'Details about any caps (minimum/maximum charges) that apply to a particular fee/charge',
                                                required: ['FeeType', 'MinMaxType'],
                                              }),
                                          )
                                          .exactOptional(),
                                      })
                                      .openapi({
                                        description:
                                          'Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits',
                                        required: ['LoanInterestFeeChargeDetail'],
                                      }),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({
                                description:
                                  'The group of tiers or bands for which debit interest can be applied.',
                                required: [
                                  'TierBandMethod',
                                  'CalculationMethod',
                                  'LoanInterestTierBand',
                                ],
                              }),
                          )
                          .min(1),
                      })
                      .exactOptional()
                      .openapi({
                        required: ['LoanInterestTierBandSet'],
                        description:
                          'Details about the interest that may be payable to the SME Loan holders',
                      }),
                    Repayment: z
                      .object({
                        RepaymentType: z
                          .enum([
                            'USBA',
                            'USBU',
                            'USCI',
                            'USCS',
                            'USER',
                            'USFA',
                            'USFB',
                            'USFI',
                            'USIO',
                            'USOT',
                            'USPF',
                            'USRW',
                            'USSL',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Repayment type' }),
                        RepaymentFrequency: z
                          .enum([
                            'SMDA',
                            'SMFL',
                            'SMFO',
                            'SMHY',
                            'SMMO',
                            'SMOT',
                            'SMQU',
                            'SMWE',
                            'SMYE',
                          ])
                          .exactOptional()
                          .openapi({ description: 'Repayment frequency' }),
                        AmountType: z
                          .enum(['RABD', 'RABL', 'RACI', 'RAFC', 'RAIO', 'RALT', 'USOT'])
                          .exactOptional()
                          .openapi({
                            description:
                              'The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc',
                          }),
                        Notes: z
                          .array(
                            z
                              .string()
                              .min(1)
                              .max(2000)
                              .openapi({
                                description:
                                  'Optional additional notes to supplement the Repayment',
                              }),
                          )
                          .exactOptional(),
                        OtherRepaymentType: z
                          .object({
                            Code: OBCodeMnemonicSchema.exactOptional(),
                            Name: Name_4Schema,
                            Description: Description_3Schema,
                          })
                          .exactOptional()
                          .openapi({
                            required: ['Name', 'Description'],
                            description:
                              'Other repayment type which is not in the standard code list',
                          }),
                        OtherRepaymentFrequency: z
                          .object({
                            Code: OBCodeMnemonicSchema.exactOptional(),
                            Name: Name_4Schema,
                            Description: Description_3Schema,
                          })
                          .exactOptional()
                          .openapi({
                            required: ['Name', 'Description'],
                            description:
                              'Other repayment frequency which is not in the standard code list',
                          }),
                        OtherAmountType: z
                          .object({
                            Code: OBCodeMnemonicSchema.exactOptional(),
                            Name: Name_4Schema,
                            Description: Description_3Schema,
                          })
                          .exactOptional()
                          .openapi({
                            required: ['Name', 'Description'],
                            description: 'Other amount type which is not in the standard code list',
                          }),
                        RepaymentFeeCharges: z
                          .object({
                            RepaymentFeeChargeDetail: z
                              .array(
                                z
                                  .object({
                                    FeeType: OBFeeType1CodeSchema,
                                    NegotiableIndicator: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Fee/charge which is usually negotiable rather than a fixed amount',
                                      }),
                                    FeeAmount: OBAmount1_3Schema.exactOptional(),
                                    FeeRate: OBRate1_12Schema.exactOptional(),
                                    FeeRateType: OBInterestRateType1Code_1Schema.exactOptional(),
                                    ApplicationFrequency: OBFeeFrequency1Code_2Schema,
                                    CalculationFrequency: OBFeeFrequency1Code_3Schema,
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Optional additional notes to supplement the fee/charge details.',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherFeeType: OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                    OtherFeeRateType: OBOtherCodeType1_8Schema.exactOptional(),
                                    OtherApplicationFrequency:
                                      OBOtherCodeType1_6Schema.exactOptional(),
                                    OtherCalculationFrequency:
                                      OBOtherCodeType1_7Schema.exactOptional(),
                                  })
                                  .openapi({
                                    description:
                                      'Details about specific fees/charges that are applied for repayment',
                                    required: [
                                      'FeeType',
                                      'ApplicationFrequency',
                                      'CalculationFrequency',
                                    ],
                                  }),
                              )
                              .min(1),
                            RepaymentFeeChargeCap: z
                              .array(
                                z
                                  .object({
                                    FeeType: z
                                      .array(
                                        z
                                          .enum([
                                            'FEPF',
                                            'FTOT',
                                            'FYAF',
                                            'FYAM',
                                            'FYAQ',
                                            'FYCP',
                                            'FYDB',
                                            'FYMI',
                                            'FYXX',
                                          ])
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                          }),
                                      )
                                      .min(1),
                                    MinMaxType: OBMinMaxType1CodeSchema,
                                    FeeCapOccurrence: Number_1Schema.exactOptional(),
                                    FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                    CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Free text for adding  extra details for fee charge cap',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherFeeType: z
                                      .array(
                                        z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Name: Name_4Schema,
                                            Description: Description_3Schema,
                                          })
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                          }),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({
                                    description:
                                      'RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged',
                                    required: ['FeeType', 'MinMaxType'],
                                  }),
                              )
                              .exactOptional(),
                          })
                          .exactOptional()
                          .openapi({
                            required: ['RepaymentFeeChargeDetail'],
                            description:
                              'Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.',
                          }),
                        RepaymentHoliday: z
                          .array(
                            z
                              .object({
                                MaxHolidayLength: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The maximum length/duration of a Repayment Holiday',
                                  }),
                                MaxHolidayPeriod: z
                                  .enum(['PACT', 'PDAY', 'PHYR', 'PMTH', 'PQTR', 'PWEK', 'PYER'])
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The unit of period (days, weeks, months etc.) of the repayment holiday',
                                  }),
                                Notes: z
                                  .array(
                                    z
                                      .string()
                                      .min(1)
                                      .max(2000)
                                      .openapi({
                                        description:
                                          'Free text for adding details for repayment holiday',
                                      }),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({
                                description: 'Details of capital repayment holiday if any',
                                required: [],
                              }),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Repayment details of the Loan product',
                        required: [],
                      }),
                    OtherFeesCharges: z
                      .array(
                        z
                          .object({
                            TariffType: z
                              .enum(['TTEL', 'TTMX', 'TTOT'])
                              .exactOptional()
                              .openapi({
                                description: 'TariffType which defines the fee and charges.',
                              }),
                            TariffName: z
                              .string()
                              .min(1)
                              .max(350)
                              .exactOptional()
                              .openapi({ description: 'Name of the tariff' }),
                            OtherTariffType: z
                              .object({
                                Code: OBCodeMnemonicSchema.exactOptional(),
                                Name: Name_4Schema,
                                Description: Description_3Schema,
                              })
                              .exactOptional()
                              .openapi({
                                required: ['Name', 'Description'],
                                description: 'Other tariff type which is not in the standard list.',
                              }),
                            FeeChargeDetail: z
                              .array(
                                z
                                  .object({
                                    FeeCategory: OBFeeCategory1CodeSchema,
                                    FeeType: OBFeeType1CodeSchema,
                                    NegotiableIndicator: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Fee/charge which is usually negotiable rather than a fixed amount',
                                      }),
                                    FeeAmount: OBAmount1_3Schema.exactOptional(),
                                    FeeRate: OBRate1_12Schema.exactOptional(),
                                    FeeRateType: OBInterestRateType1Code_1Schema.exactOptional(),
                                    ApplicationFrequency: OBFeeFrequency1Code_2Schema,
                                    CalculationFrequency:
                                      OBFeeFrequency1Code_3Schema.exactOptional(),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Optional additional notes to supplement the fee/charge details.',
                                          }),
                                      )
                                      .exactOptional(),
                                    FeeChargeCap: z
                                      .array(
                                        z
                                          .object({
                                            FeeType: z
                                              .array(
                                                z
                                                  .enum([
                                                    'FEPF',
                                                    'FTOT',
                                                    'FYAF',
                                                    'FYAM',
                                                    'FYAQ',
                                                    'FYCP',
                                                    'FYDB',
                                                    'FYMI',
                                                    'FYXX',
                                                  ])
                                                  .openapi({
                                                    description:
                                                      'Fee/charge type which is being capped',
                                                  }),
                                              )
                                              .min(1),
                                            MinMaxType: OBMinMaxType1CodeSchema,
                                            FeeCapOccurrence: Number_1Schema.exactOptional(),
                                            FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                            CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                            Notes: z
                                              .array(
                                                z
                                                  .string()
                                                  .min(1)
                                                  .max(2000)
                                                  .openapi({
                                                    description:
                                                      'Free text for adding  extra details for fee charge cap',
                                                  }),
                                              )
                                              .exactOptional(),
                                            OtherFeeType: z
                                              .array(
                                                z
                                                  .object({
                                                    Code: OBCodeMnemonicSchema.exactOptional(),
                                                    Name: Name_4Schema,
                                                    Description: Description_3Schema,
                                                  })
                                                  .openapi({
                                                    description:
                                                      'Other fee type code which is not available in the standard code set',
                                                    required: ['Name', 'Description'],
                                                  }),
                                              )
                                              .exactOptional(),
                                          })
                                          .openapi({
                                            description:
                                              'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                                            required: ['FeeType', 'MinMaxType'],
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherFeeCategoryType: OBOtherCodeType1_0Schema.exactOptional(),
                                    OtherFeeType: OBOtherFeeChargeDetailTypeSchema.exactOptional(),
                                    OtherFeeRateType: OBOtherCodeType1_8Schema.exactOptional(),
                                    OtherApplicationFrequency:
                                      OBOtherCodeType1_6Schema.exactOptional(),
                                    OtherCalculationFrequency:
                                      OBOtherCodeType1_7Schema.exactOptional(),
                                    FeeApplicableRange: z
                                      .object({
                                        MinimumAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Minimum Amount on which fee/charge is applicable (where it is expressed as an amount)',
                                          }),
                                        MaximumAmount: z
                                          .string()
                                          .regex(/^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum Amount on which fee is applicable (where it is expressed as an amount)',
                                          }),
                                        MinimumRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Minimum rate on which fee/charge is applicable(where it is expressed as a rate)',
                                          }),
                                        MaximumRate: z
                                          .string()
                                          .regex(/^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$/)
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Maximum rate on which fee/charge is applicable(where it is expressed as a rate)',
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Range or amounts or rates for which the fee/charge applies',
                                        required: [],
                                      }),
                                  })
                                  .openapi({
                                    description: 'Other fees/charges details',
                                    required: ['FeeCategory', 'FeeType', 'ApplicationFrequency'],
                                  }),
                              )
                              .min(1),
                            FeeChargeCap: z
                              .array(
                                z
                                  .object({
                                    FeeType: z
                                      .array(
                                        z
                                          .enum([
                                            'FEPF',
                                            'FTOT',
                                            'FYAF',
                                            'FYAM',
                                            'FYAQ',
                                            'FYCP',
                                            'FYDB',
                                            'FYMI',
                                            'FYXX',
                                          ])
                                          .openapi({
                                            description: 'Fee/charge type which is being capped',
                                          }),
                                      )
                                      .min(1),
                                    MinMaxType: OBMinMaxType1CodeSchema,
                                    FeeCapOccurrence: Number_1Schema.exactOptional(),
                                    FeeCapAmount: OBAmount1_4Schema.exactOptional(),
                                    CappingPeriod: OBPeriod1CodeSchema.exactOptional(),
                                    Notes: z
                                      .array(
                                        z
                                          .string()
                                          .min(1)
                                          .max(2000)
                                          .openapi({
                                            description:
                                              'Free text for adding  extra details for fee charge cap',
                                          }),
                                      )
                                      .exactOptional(),
                                    OtherFeeType: z
                                      .array(
                                        z
                                          .object({
                                            Code: OBCodeMnemonicSchema.exactOptional(),
                                            Name: Name_4Schema,
                                            Description: Description_3Schema,
                                          })
                                          .openapi({
                                            description:
                                              'Other fee type code which is not available in the standard code set',
                                            required: ['Name', 'Description'],
                                          }),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({
                                    description:
                                      'Details about any caps (maximum charges) that apply to a particular or group of fee/charge',
                                    required: ['FeeType', 'MinMaxType'],
                                  }),
                              )
                              .exactOptional(),
                          })
                          .openapi({
                            description:
                              'Contains details of fees and charges which are not associated with either Overdraft or features/benefits',
                            required: ['FeeChargeDetail'],
                          }),
                      )
                      .exactOptional(),
                    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    required: ['Name', 'Description'],
                    description:
                      'This field provides extension to the ProductType enumeration. If ProductType - "Other" is chosen, this field must be populated with name, and description for ASPSP specific product type.',
                  }),
                BCA: OBBCAData1Schema.exactOptional(),
                PCA: OBPCAData1Schema.exactOptional(),
              })
              .openapi({
                description: 'Product details associated with the Account',
                required: ['AccountId', 'ProductType'],
              }),
          )
          .exactOptional(),
      })
      .openapi({ description: 'Aligning with the read write specs structure.', required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({
    required: ['Data'],
    description: 'Product details of Other Product which is not available in the standard list',
  })
  .openapi('OBReadProduct2')

const ScheduledPaymentIdSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({
    description:
      'A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.',
    example: 'SP03',
  })
  .openapi('ScheduledPaymentId')

const ScheduledPaymentDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date on which the scheduled payment will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
    example: '2017-07-12T00:00:00+00:00',
  })
  .openapi('ScheduledPaymentDateTime')

const OBScheduledPayment3Schema = z
  .strictObject({
    AccountId: AccountIdSchema,
    ScheduledPaymentId: ScheduledPaymentIdSchema.exactOptional(),
    ScheduledPaymentDateTime: ScheduledPaymentDateTimeSchema,
    ScheduledType: OBInternalScheduleType1CodeSchema,
    Reference: ReferenceSchema.exactOptional(),
    DebtorReference: DebtorReferenceSchema.exactOptional(),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1Schema,
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    CreditorAccount: OBCashAccount5_1Schema.exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'ScheduledPaymentDateTime', 'ScheduledType', 'InstructedAmount'],
  })
  .openapi('OBScheduledPayment3')

const OBReadScheduledPayment3Schema = z
  .strictObject({
    Data: z
      .object({ ScheduledPayment: z.array(OBScheduledPayment3Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadScheduledPayment3')

const OBReadStandingOrder6Schema: z.ZodType<OBReadStandingOrder6Type> = z
  .strictObject({
    Data: z
      .object({ StandingOrder: z.array(OBStandingOrder6Schema).exactOptional() })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadStandingOrder6')

const OBReadStatement2Schema = z
  .strictObject({
    Data: OBReadDataStatement2Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadStatement2')

const OBReadTransaction6Schema = z
  .strictObject({
    Data: OBReadDataTransaction6Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBReadTransaction6')

const OBScheduledPayment3BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    ScheduledPaymentId: ScheduledPaymentIdSchema.exactOptional(),
    ScheduledPaymentDateTime: ScheduledPaymentDateTimeSchema,
    ScheduledType: OBInternalScheduleType1CodeSchema,
    Reference: ReferenceSchema.exactOptional(),
    DebtorReference: DebtorReferenceSchema.exactOptional(),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1Schema,
  })
  .openapi({
    required: ['AccountId', 'ScheduledPaymentDateTime', 'ScheduledType', 'InstructedAmount'],
  })
  .openapi('OBScheduledPayment3Basic')

const OBScheduledPayment3DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    ScheduledPaymentId: ScheduledPaymentIdSchema.exactOptional(),
    ScheduledPaymentDateTime: ScheduledPaymentDateTimeSchema,
    ScheduledType: OBInternalScheduleType1CodeSchema,
    Reference: ReferenceSchema.exactOptional(),
    DebtorReference: DebtorReferenceSchema.exactOptional(),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1Schema,
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    CreditorAccount: OBCashAccount5_1Schema,
  })
  .openapi({
    required: [
      'AccountId',
      'ScheduledPaymentDateTime',
      'ScheduledType',
      'InstructedAmount',
      'CreditorAccount',
    ],
  })
  .openapi('OBScheduledPayment3Detail')

const OBStandingOrder6BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    StandingOrderId: StandingOrderIdSchema.exactOptional(),
    NextPaymentDateTime: NextPaymentDateTimeSchema.exactOptional(),
    LastPaymentDateTime: LastPaymentDateTimeSchema.exactOptional(),
    NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
    StandingOrderStatusCode: ExternalMandateStatus1CodeSchema.exactOptional(),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_2Schema.exactOptional(),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_3Schema.exactOptional(),
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_11Schema.exactOptional(),
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_4Schema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    MandateRelatedInformation: OBMandateRelatedInformation1Schema.exactOptional(),
    RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
  })
  .openapi({ required: ['AccountId'] })
  .openapi('OBStandingOrder6Basic')

const OBStandingOrder6DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    StandingOrderId: StandingOrderIdSchema.exactOptional(),
    NextPaymentDateTime: NextPaymentDateTimeSchema.exactOptional(),
    LastPaymentDateTime: LastPaymentDateTimeSchema.exactOptional(),
    NumberOfPayments: NumberOfPaymentsSchema.exactOptional(),
    StandingOrderStatusCode: ExternalMandateStatus1CodeSchema.exactOptional(),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_2Schema.exactOptional(),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_3Schema.exactOptional(),
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_11Schema.exactOptional(),
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmount_4Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification5_1Schema.exactOptional(),
    CreditorAccount: OBCashAccount5_1Schema,
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    MandateRelatedInformation: OBMandateRelatedInformation1Schema.exactOptional(),
    RemittanceInformation: OBRemittanceInformation2Schema.exactOptional(),
  })
  .openapi({ required: ['AccountId', 'CreditorAccount'] })
  .openapi('OBStandingOrder6Detail')

const OBStatement2BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    StatementId: StatementIdSchema.exactOptional(),
    StatementReference: StatementReferenceSchema.exactOptional(),
    Type: OBInternalStatementType1CodeSchema,
    StartDateTime: StartDateTimeSchema,
    EndDateTime: EndDateTimeSchema,
    CreationDateTime: CreationDateTimeSchema,
    StatementDescription: z
      .array(
        z
          .string()
          .min(1)
          .max(500)
          .openapi({
            description: 'Other descriptions that may be available for the statement resource.',
          }),
      )
      .exactOptional(),
    StatementBenefit: z
      .array(
        z
          .object({
            Type: OBInternalStatementBenefitType1CodeSchema,
            Amount: OBActiveOrHistoricCurrencyAndAmount_5Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a benefit or reward amount for the statement resource.',
            required: ['Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementFee: z
      .array(
        z
          .object({
            Description: Description_1Schema.exactOptional(),
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementFeeType1CodeSchema,
            Rate: OBRate1_0Schema.exactOptional(),
            RateType: OBInternalStatementFeeRateType1CodeSchema.exactOptional(),
            Frequency: OBInternalStatementFeeFrequency1CodeSchema.exactOptional(),
            Amount: OBActiveOrHistoricCurrencyAndAmount_6Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a fee for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementInterest: z
      .array(
        z
          .object({
            Description: Description_2Schema.exactOptional(),
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementInterestType1CodeSchema,
            Rate: OBRate1_1Schema.exactOptional(),
            RateType: OBInternalStatementInterestRateType1CodeSchema.exactOptional(),
            Frequency: OBInternalStatementInterestFrequency1CodeSchema.exactOptional(),
            Amount: OBActiveOrHistoricCurrencyAndAmount_7Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic interest amount related to the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementDateTime: z
      .array(
        z
          .object({ DateTime: DateTimeSchema, Type: OBInternalStatementDateTimeType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic date time for the statement resource.',
            required: ['DateTime', 'Type'],
          }),
      )
      .exactOptional(),
    StatementRate: z
      .array(
        z
          .object({ Rate: RateSchema, Type: OBInternalStatementRateType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic rate related to the statement resource.',
            required: ['Rate', 'Type'],
          }),
      )
      .exactOptional(),
    StatementValue: z
      .array(
        z
          .object({ Value: ValueSchema, Type: OBInternalStatementValueType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic number value related to the statement resource.',
            required: ['Value', 'Type'],
          }),
      )
      .exactOptional(),
    TotalValue: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .exactOptional()
      .openapi({
        description: 'Combined sum of all Amounts in the accounts base currency',
        required: ['Amount', 'Currency'],
      }),
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'Type', 'StartDateTime', 'EndDateTime', 'CreationDateTime'],
  })
  .openapi('OBStatement2Basic')

const OBStatement2DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    StatementId: StatementIdSchema.exactOptional(),
    StatementReference: StatementReferenceSchema.exactOptional(),
    Type: OBInternalStatementType1CodeSchema,
    StartDateTime: StartDateTimeSchema,
    EndDateTime: EndDateTimeSchema,
    CreationDateTime: CreationDateTimeSchema,
    StatementDescription: z
      .array(
        z
          .string()
          .min(1)
          .max(500)
          .openapi({
            description: 'Other descriptions that may be available for the statement resource.',
          }),
      )
      .exactOptional(),
    StatementBenefit: z
      .array(
        z
          .object({
            Type: OBInternalStatementBenefitType1CodeSchema,
            Amount: OBActiveOrHistoricCurrencyAndAmount_5Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a benefit or reward amount for the statement resource.',
            required: ['Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementFee: z
      .array(
        z
          .object({
            Description: Description_1Schema.exactOptional(),
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementFeeType1CodeSchema,
            Rate: OBRate1_0Schema.exactOptional(),
            RateType: OBInternalStatementFeeRateType1CodeSchema.exactOptional(),
            Frequency: OBInternalStatementFeeFrequency1CodeSchema.exactOptional(),
            Amount: OBActiveOrHistoricCurrencyAndAmount_6Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a fee for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementInterest: z
      .array(
        z
          .object({
            Description: Description_2Schema.exactOptional(),
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementInterestType1CodeSchema,
            Rate: OBRate1_1Schema.exactOptional(),
            RateType: OBInternalStatementInterestRateType1CodeSchema.exactOptional(),
            Frequency: OBInternalStatementInterestFrequency1CodeSchema.exactOptional(),
            Amount: OBActiveOrHistoricCurrencyAndAmount_7Schema,
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic interest amount related to the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementAmount: z
      .array(
        z
          .object({
            CreditDebitIndicator: OBCreditDebitCode_0Schema,
            Type: OBInternalStatementAmountType1CodeSchema,
            Amount: OBActiveOrHistoricCurrencyAndAmount_8Schema,
            LocalAmount: z
              .object({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCode_1Schema,
                SubType: z
                  .enum(['BCUR', 'LCUR'])
                  .default('LCUR')
                  .exactOptional()
                  .openapi({
                    description:
                      'The amount in the local market currency for which the asset is held. Default is Local Currency (LCUR) if not specified',
                  }),
              })
              .exactOptional()
              .openapi({
                required: ['Amount', 'Currency'],
                description:
                  'Optional component providing the equivalent of Amount in local currency.',
              }),
          })
          .openapi({
            description:
              'Set of elements used to provide details of a generic amount for the statement resource.',
            required: ['CreditDebitIndicator', 'Type', 'Amount'],
          }),
      )
      .exactOptional(),
    StatementDateTime: z
      .array(
        z
          .object({ DateTime: DateTimeSchema, Type: OBInternalStatementDateTimeType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic date time for the statement resource.',
            required: ['DateTime', 'Type'],
          }),
      )
      .exactOptional(),
    StatementRate: z
      .array(
        z
          .object({ Rate: RateSchema, Type: OBInternalStatementRateType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic rate related to the statement resource.',
            required: ['Rate', 'Type'],
          }),
      )
      .exactOptional(),
    StatementValue: z
      .array(
        z
          .object({ Value: ValueSchema, Type: OBInternalStatementValueType1CodeSchema })
          .openapi({
            description:
              'Set of elements used to provide details of a generic number value related to the statement resource.',
            required: ['Value', 'Type'],
          }),
      )
      .exactOptional(),
    TotalValue: z
      .object({
        Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
        Currency: ActiveOrHistoricCurrencyCode_1Schema,
      })
      .exactOptional()
      .openapi({
        description: 'Combined sum of all Amounts in the accounts base currency',
        required: ['Amount', 'Currency'],
      }),
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'Type', 'StartDateTime', 'EndDateTime', 'CreationDateTime'],
  })
  .openapi('OBStatement2Detail')

const OBTransaction6BasicSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    TransactionId: TransactionIdSchema.exactOptional(),
    TransactionReference: TransactionReferenceSchema.exactOptional(),
    StatementReference: z.array(StatementReferenceSchema).exactOptional(),
    CreditDebitIndicator: OBCreditDebitCode_1Schema,
    Status: ExternalEntryStatus1CodeSchema,
    TransactionMutability: OBInternalTransactionMutability1CodeSchema.exactOptional(),
    BookingDateTime: BookingDateTimeSchema,
    ValueDateTime: ValueDateTimeSchema.exactOptional(),
    AddressLine: AddressLineSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmount_9Schema,
    ChargeAmount: OBActiveOrHistoricCurrencyAndAmount_10Schema.exactOptional(),
    CurrencyExchange: OBCurrencyExchange5Schema.exactOptional(),
    BankTransactionCode: OBBankTransactionCodeStructure1Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    ExtendedProprietaryBankTransactionCodes: z
      .array(OBExtendedProprietaryBankTransactionCodeSchema)
      .exactOptional(),
    CardInstrument: OBTransactionCardInstrument1Schema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    CategoryPurposeCode: ExternalCategoryPurpose1CodeSchema.exactOptional(),
    PaymentPurposeCode: OBExternalPurpose1CodeSchema.exactOptional(),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'CreditDebitIndicator', 'Status', 'BookingDateTime', 'Amount'],
  })
  .openapi('OBTransaction6Basic')

const OBTransaction6DetailSchema = z
  .strictObject({
    AccountId: AccountIdSchema,
    TransactionId: TransactionIdSchema.exactOptional(),
    TransactionReference: TransactionReferenceSchema.exactOptional(),
    StatementReference: z.array(StatementReferenceSchema).exactOptional(),
    CreditDebitIndicator: OBCreditDebitCode_1Schema,
    Status: ExternalEntryStatus1CodeSchema,
    TransactionMutability: OBInternalTransactionMutability1CodeSchema.exactOptional(),
    BookingDateTime: BookingDateTimeSchema,
    ValueDateTime: ValueDateTimeSchema.exactOptional(),
    TransactionInformation: TransactionInformationSchema.exactOptional(),
    AddressLine: AddressLineSchema.exactOptional(),
    Amount: OBActiveOrHistoricCurrencyAndAmount_9Schema,
    ChargeAmount: OBActiveOrHistoricCurrencyAndAmount_10Schema.exactOptional(),
    CurrencyExchange: OBCurrencyExchange5Schema.exactOptional(),
    BankTransactionCode: OBBankTransactionCodeStructure1Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    ExtendedProprietaryBankTransactionCodes: z
      .array(OBExtendedProprietaryBankTransactionCodeSchema)
      .exactOptional(),
    Balance: OBTransactionCashBalanceSchema.exactOptional(),
    MerchantDetails: OBMerchantDetails1Schema.exactOptional(),
    CreditorAgent: OBBranchAndFinancialInstitutionIdentification6_1Schema.exactOptional(),
    CreditorAccount: OBCashAccount6_0Schema.exactOptional(),
    DebtorAgent: OBBranchAndFinancialInstitutionIdentification6_2Schema.exactOptional(),
    DebtorAccount: OBCashAccount6_1Schema.exactOptional(),
    CardInstrument: OBTransactionCardInstrument1Schema.exactOptional(),
    SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
    CategoryPurposeCode: ExternalCategoryPurpose1CodeSchema.exactOptional(),
    PaymentPurposeCode: OBExternalPurpose1CodeSchema.exactOptional(),
    UltimateCreditor: OBUltimateCreditor1Schema.exactOptional(),
    UltimateDebtor: OBUltimateDebtor1Schema.exactOptional(),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'CreditDebitIndicator', 'Status', 'BookingDateTime', 'Amount'],
  })
  .openapi('OBTransaction6Detail')

const TimeSchema = z
  .string()
  .regex(/^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/)
  .openapi({
    format: 'time',
    description:
      'Time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.\nUsage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.\nFor transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\nT10:43:07+00:00',
  })
  .openapi('Time')

const ModelSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Model')

const RateLimitPolicyHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.\n\nA non-empty list of Quota Policy Items. The Item value __MUST__ be a String.\n\nExample:\n`RateLimit-Policy: "default";q=100;w=10`\n\nThe **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.\n\nThe **OPTIONAL** "w" parameter value conveys a time window.\n',
    param: { required: false },
  })

const RateLimitHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.\n\nA server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.\n\nExample:\n`RateLimit: "default";r=50;t=30`\n\nThe **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.\n\nThe **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.\n',
    param: { required: false },
  })

const _201AccountAccessConsentsCreatedResponse = {
  description: 'Account Access Consents Created',
  content: {
    'application/json; charset=utf-8': { schema: OBReadConsentResponse1Schema },
    'application/json': { schema: OBReadConsentResponse1Schema },
    'application/jose+jwe': { schema: OBReadConsentResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountAccessConsentsConsentIdReadResponse = {
  description: 'Account Access Consents Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadConsentResponse1Schema },
    'application/json': { schema: OBReadConsentResponse1Schema },
    'application/jose+jwe': { schema: OBReadConsentResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _204AccountAccessConsentsConsentIdDeletedResponse = {
  description: 'Account Access Consents Deleted',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsReadResponse = {
  description: 'Accounts Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadAccount6Schema },
    'application/json': { schema: OBReadAccount6Schema },
    'application/jose+jwe': { schema: OBReadAccount6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdReadResponse = {
  description: 'Accounts Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadAccount6Schema },
    'application/json': { schema: OBReadAccount6Schema },
    'application/jose+jwe': { schema: OBReadAccount6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdBalancesReadResponse = {
  description: 'Balances Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadBalance1Schema },
    'application/json': { schema: OBReadBalance1Schema },
    'application/jose+jwe': { schema: OBReadBalance1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200BalancesReadResponse = {
  description: 'Balances Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadBalance1Schema },
    'application/json': { schema: OBReadBalance1Schema },
    'application/jose+jwe': { schema: OBReadBalance1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdBeneficiariesReadResponse = {
  description: 'Beneficiaries Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadBeneficiary5Schema },
    'application/json': { schema: OBReadBeneficiary5Schema },
    'application/jose+jwe': { schema: OBReadBeneficiary5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200BeneficiariesReadResponse = {
  description: 'Beneficiaries Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadBeneficiary5Schema },
    'application/json': { schema: OBReadBeneficiary5Schema },
    'application/jose+jwe': { schema: OBReadBeneficiary5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdDirectDebitsReadResponse = {
  description: 'Direct Debits Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadDirectDebit2Schema },
    'application/json': { schema: OBReadDirectDebit2Schema },
    'application/jose+jwe': { schema: OBReadDirectDebit2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200DirectDebitsReadResponse = {
  description: 'Direct Debits Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadDirectDebit2Schema },
    'application/json': { schema: OBReadDirectDebit2Schema },
    'application/jose+jwe': { schema: OBReadDirectDebit2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdOffersReadResponse = {
  description: 'Offers Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadOffer1Schema },
    'application/json': { schema: OBReadOffer1Schema },
    'application/jose+jwe': { schema: OBReadOffer1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200OffersReadResponse = {
  description: 'Offers Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadOffer1Schema },
    'application/json': { schema: OBReadOffer1Schema },
    'application/jose+jwe': { schema: OBReadOffer1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdPartiesReadResponse = {
  description: 'Parties Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadParty3Schema },
    'application/json': { schema: OBReadParty3Schema },
    'application/jose+jwe': { schema: OBReadParty3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdPartyReadResponse = {
  description: 'Parties Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadParty2Schema },
    'application/json': { schema: OBReadParty2Schema },
    'application/jose+jwe': { schema: OBReadParty2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200PartyReadResponse = {
  description: 'Parties Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadParty2Schema },
    'application/json': { schema: OBReadParty2Schema },
    'application/jose+jwe': { schema: OBReadParty2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdProductReadResponse = {
  description: 'Products Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadProduct2Schema },
    'application/json': { schema: OBReadProduct2Schema },
    'application/jose+jwe': { schema: OBReadProduct2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200ProductsReadResponse = {
  description: 'Products Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadProduct2Schema },
    'application/json': { schema: OBReadProduct2Schema },
    'application/jose+jwe': { schema: OBReadProduct2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdScheduledPaymentsReadResponse = {
  description: 'Scheduled Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadScheduledPayment3Schema },
    'application/json': { schema: OBReadScheduledPayment3Schema },
    'application/jose+jwe': { schema: OBReadScheduledPayment3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200ScheduledPaymentsReadResponse = {
  description: 'Scheduled Payments Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadScheduledPayment3Schema },
    'application/json': { schema: OBReadScheduledPayment3Schema },
    'application/jose+jwe': { schema: OBReadScheduledPayment3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdStandingOrdersReadResponse = {
  description: 'Standing Orders Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadStandingOrder6Schema },
    'application/json': { schema: OBReadStandingOrder6Schema },
    'application/jose+jwe': { schema: OBReadStandingOrder6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200StandingOrdersReadResponse = {
  description: 'Standing Orders Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadStandingOrder6Schema },
    'application/json': { schema: OBReadStandingOrder6Schema },
    'application/jose+jwe': { schema: OBReadStandingOrder6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdStatementsReadResponse = {
  description: 'Statements Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
    'application/json': { schema: OBReadStatement2Schema },
    'application/jose+jwe': { schema: OBReadStatement2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdStatementsStatementIdReadResponse = {
  description: 'Statements Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
    'application/json': { schema: OBReadStatement2Schema },
    'application/jose+jwe': { schema: OBReadStatement2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdStatementsStatementIdFileReadResponse = {
  description: 'Statements Read\n\nASPSP will specify all available content types\n',
  content: {
    'application/json; charset=utf-8': { schema: FileSchema },
    'application/json': { schema: FileSchema },
    'application/jose+jwe': { schema: FileSchema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdStatementsStatementIdTransactionsReadResponse = {
  description: 'Transactions Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
    'application/json': { schema: OBReadTransaction6Schema },
    'application/jose+jwe': { schema: OBReadTransaction6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200StatementsReadResponse = {
  description: 'Statements Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
    'application/json': { schema: OBReadStatement2Schema },
    'application/jose+jwe': { schema: OBReadStatement2Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200AccountsAccountIdTransactionsReadResponse = {
  description: 'Transactions Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
    'application/json': { schema: OBReadTransaction6Schema },
    'application/jose+jwe': { schema: OBReadTransaction6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _200TransactionsReadResponse = {
  description: 'Transactions Read',
  content: {
    'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
    'application/json': { schema: OBReadTransaction6Schema },
    'application/jose+jwe': { schema: OBReadTransaction6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
    'RateLimit-Policy': RateLimitPolicyHeaderSchema,
    RateLimit: RateLimitHeaderSchema,
  }),
}

const _400ErrorResponse = {
  description: 'Bad request',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _401ErrorResponse = {
  description: 'Unauthorized',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _403ErrorResponse = {
  description: 'Forbidden',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _404ErrorResponse = {
  description: 'Not found',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _405ErrorResponse = {
  description: 'Method Not Allowed',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _406ErrorResponse = {
  description: 'Not Acceptable',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _415ErrorResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const _429ErrorResponse = {
  description: 'Too Many Requests',
  headers: z.object({
    'Retry-After': z
      .int()
      .exactOptional()
      .openapi({ description: 'Number in seconds to wait', param: { required: false } }),
    'x-fapi-interaction-id': z
      .string()
      .exactOptional()
      .openapi({
        description: 'An RFC4122 UID used as a correlation id.',
        param: { required: false },
      }),
  }),
}

const _500ErrorResponse = {
  description: 'Internal Server Error',
  content: {
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': z
      .string()
      .openapi({ description: 'An RFC4122 UID used as a correlation id.' }),
  }),
}

const FromBookingDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'fromBookingDateTime',
      description:
        'The UTC ISO 8601 Date Time to filter transactions FROM.\n\nNote: Time component is optional - set to 00:00:00 for just Date.\n\nThe value **must not** include the timezone component.\n',
      schema: { type: 'string', format: 'date-time', example: '2026-01-01T00:00:00' },
      required: false,
    },
    example: '2026-01-01T00:00:00',
  })

const ToBookingDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'toBookingDateTime',
      description:
        'The UTC ISO 8601 Date Time to filter transactions TO.\n\nNote: Time component is optional - set to 00:00:00 for just Date.\n\nThe value **must not** include the timezone component.\n',
      schema: { type: 'string', format: 'date-time', example: '2026-12-31T23:59:59' },
      required: false,
    },
    example: '2026-12-31T23:59:59',
  })

const FromStatementDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'fromStatementDateTime',
      description:
        'The UTC ISO 8601 Date Time to filter statements FROM.\n\nNote: Time component is optional - set to 00:00:00 for just Date.\n\nThe value **must not** include the timezone component.\n',
      schema: { type: 'string', format: 'date-time', example: '2026-01-01T00:00:00' },
      required: false,
    },
    example: '2026-01-01T00:00:00',
  })

const ToStatementDateTimeParamParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'toStatementDateTime',
      description:
        'The UTC ISO 8601 Date Time to filter statements TO.\n\nNote: Time component is optional - set to 00:00:00 for just Date.\n\nThe value **must not** include the timezone component.\n',
      schema: { type: 'string', format: 'date-time', example: '2026-12-31T23:59:59' },
      required: false,
    },
    example: '2026-12-31T23:59:59',
  })

const ConsentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'ConsentId',
      in: 'path',
      description: 'ConsentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const AccountIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'AccountId',
      in: 'path',
      description: 'AccountId',
      required: true,
      schema: { type: 'string' },
    },
  })

const StatementIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'StatementId',
      in: 'path',
      description: 'StatementId',
      required: true,
      schema: { type: 'string' },
    },
  })

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'Authorization',
      required: true,
      description: 'An Authorisation Token as per https://tools.ietf.org/html/rfc6750',
      schema: { type: 'string' },
    },
  })

const XCustomerUserAgentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-customer-user-agent',
      description: 'Indicates the user-agent that the PSU is using.',
      required: false,
      schema: { type: 'string' },
    },
  })

const XFapiCustomerIpAddressParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-fapi-customer-ip-address',
      required: false,
      description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
      schema: { type: 'string' },
    },
  })

const XFapiAuthDateParamsSchema = z
  .string()
  .regex(
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT|UTC)$/,
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-fapi-auth-date',
      required: false,
      description:
        'The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC',
      schema: {
        type: 'string',
        pattern:
          '^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d{4} \\d{2}:\\d{2}:\\d{2} (GMT|UTC)$',
      },
    },
  })

const XFapiInteractionIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-fapi-interaction-id',
      required: false,
      description: 'An RFC4122 UID used as a correlation id.',
      schema: { type: 'string' },
    },
  })

const XIdempotencyKeyParamsSchema = z
  .string()
  .regex(/^(?!\s)(.*)(\S)$/)
  .max(40)
  .openapi({
    param: {
      name: 'x-idempotency-key',
      in: 'header',
      description:
        'Every request will be processed only once per x-idempotency-key.  The\nIdempotency Key will be valid for 24 hours.\n',
      required: true,
      schema: { type: 'string', maxLength: 40, pattern: '^(?!\\s)(.*)(\\S)$' },
    },
  })

const XJwsSignatureParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'x-jws-signature',
      required: true,
      description: 'A detached JWS signature of the body of the payload.',
      schema: { type: 'string' },
    },
  })

const XClientIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-client-id',
      required: false,
      description:
        'Only used if an ASPSP requires the client ID in order to return rate limit headers. \n\nTPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.\n\nThis header __must not__ be used for client authentication\n',
      schema: { type: 'string' },
    },
  })

const TPPOAuth2SecuritySecurityScheme = {
  type: 'oauth2',
  description: 'TPP client credential authorisation flow with the ASPSP',
  flows: {
    clientCredentials: {
      tokenUrl: 'https://authserver.example/token',
      scopes: { accounts: 'Ability to read Accounts information' },
    },
  },
}

const PSUOAuth2SecuritySecurityScheme = {
  type: 'oauth2',
  description:
    'OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://authserver.example/authorization',
      tokenUrl: 'https://authserver.example/token',
      scopes: { accounts: 'Ability to read Accounts information' },
    },
  },
}

export const postAccountAccessConsentsRoute = createRoute({
  method: 'post',
  path: '/account-access-consents',
  tags: ['Account Access Consents'],
  summary: 'Create an Account Access Consent',
  description:
    'Enables an AISP to ask an ASPSP to create a new account-access-consent resource, by sending a copy of the consent to the ASPSP.',
  operationId: 'CreateAccountAccessConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/json; charset=utf-8': { schema: OBReadConsent1Schema },
        'application/json': { schema: OBReadConsent1Schema },
        'application/jose+jwe': { schema: OBReadConsent1Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201AccountAccessConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['accounts'] }],
})

export const getAccountAccessConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/account-access-consents/{ConsentId}',
  tags: ['Account Access Consents'],
  summary: 'Get an Account Access Consent',
  description: 'Enables an AISP to retrieve the status of an AIS consent.',
  operationId: 'GetAccountAccessConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountAccessConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['accounts'] }],
})

export const deleteAccountAccessConsentsConsentIdRoute = createRoute({
  method: 'delete',
  path: '/account-access-consents/{ConsentId}',
  tags: ['Account Access Consents'],
  summary: 'Delete an Account Access Consent',
  description: 'Enables an AISP to inform the ASPSP that the PSU has revoked their consent.',
  operationId: 'DeleteAccountAccessConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    204: _204AccountAccessConsentsConsentIdDeletedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['accounts'] }],
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Get Accounts',
  description:
    "Enables an AISP to retrieve a list of a PSU's accounts and information about those account(s) that the PSU has consented to.",
  operationId: 'GetAccounts',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}',
  tags: ['Accounts'],
  summary: 'Get an Account by AccountId',
  description: 'Enables an AISP to retrieve information about a specific PSU account.',
  operationId: 'GetAccountsAccountId',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdBalancesRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/balances',
  tags: ['Balances'],
  summary: 'Get Balances for an AccountId',
  description:
    'Enables an AISP to retrieve account balance information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdBalances',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdBalancesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdBeneficiariesRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/beneficiaries',
  tags: ['Beneficiaries'],
  summary: 'Get Beneficiaries for an AccountId',
  description: 'Enables an AISP to retrieve Beneficiary information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdBeneficiaries',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdBeneficiariesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdDirectDebitsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/direct-debits',
  tags: ['Direct Debits'],
  summary: 'Get Direct Debits for an AccountId',
  description: 'Enables an AISP to retrieve Direct Debit information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdDirectDebits',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdDirectDebitsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdOffersRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/offers',
  tags: ['Offers'],
  summary: 'Get Offers for an AccountId',
  description: 'Enables an AISP to retrieve any offer information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdOffers',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdOffersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdPartiesRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/parties',
  tags: ['Parties'],
  summary: 'Get Parties for an AccountId',
  description: 'Enables an AISP to retrieve details about the PSU account-holder(s)/operator(s).',
  operationId: 'GetAccountsAccountIdParties',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdPartiesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdPartyRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/party',
  tags: ['Parties'],
  summary: 'Get Party for an AccountId',
  description:
    'Enables an AISP to retrieve details about the party that gave permission to the AISP to view a specific PSU account.',
  operationId: 'GetAccountsAccountIdParty',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdPartyReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdProductRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/product',
  tags: ['Products'],
  summary: 'Get Product for an AccountId',
  description:
    'Enables an AISP to retrieve the account product information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdProduct',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdProductReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdScheduledPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/scheduled-payments',
  tags: ['Scheduled Payments'],
  summary: 'Get Scheduled Payments for an AccountId',
  description:
    'Enables an AISP to retrieve Scheduled Payment information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdScheduledPayments',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdScheduledPaymentsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStandingOrdersRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/standing-orders',
  tags: ['Standing Orders'],
  summary: 'Get Standing Orders for an AccountId',
  description: 'Enables an AISP to retrieve Standing Order information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdStandingOrders',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStandingOrdersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements',
  tags: ['Statements'],
  summary: 'Get Statements for an AccountId',
  description: 'Enables an AISP to retrieve statement information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdStatements',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
    query: z.object({
      fromStatementDateTime: FromStatementDateTimeParamParamsSchema,
      toStatementDateTime: ToStatementDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsStatementIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements/{StatementId}',
  tags: ['Statements'],
  summary: 'Get Statement by StatementId for an AccountId',
  description:
    'Enables an AISP to retrieve the statement information resource for a specific statement.',
  operationId: 'GetAccountsAccountIdStatementsStatementId',
  request: {
    params: z.object({ StatementId: StatementIdParamsSchema, AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsStatementIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsStatementIdFileRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements/{StatementId}/file',
  tags: ['Statements'],
  summary: 'Get Statement file by StatementId for an AccountId',
  description: 'Enables an AISP to retrieve a non-json representation of a specific statement.',
  operationId: 'GetAccountsAccountIdStatementsStatementIdFile',
  request: {
    params: z.object({ StatementId: StatementIdParamsSchema, AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsStatementIdFileReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdStatementsStatementIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/statements/{StatementId}/transactions',
  tags: ['Statements'],
  summary: 'Get Statement Transactions for an AccountId',
  description:
    'Enables an AISP to retrieve transactions that appear on a selected statement for a specific PSU account.',
  operationId: 'GetAccountsAccountIdStatementsStatementIdTransactions',
  request: {
    params: z.object({ StatementId: StatementIdParamsSchema, AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdStatementsStatementIdTransactionsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getAccountsAccountIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{AccountId}/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions for an AccountId',
  description: 'Enables an AISP to retrieve transaction information for a specific PSU account.',
  operationId: 'GetAccountsAccountIdTransactions',
  request: {
    params: z.object({ AccountId: AccountIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
    query: z.object({
      fromBookingDateTime: FromBookingDateTimeParamParamsSchema,
      toBookingDateTime: ToBookingDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200AccountsAccountIdTransactionsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getBalancesRoute = createRoute({
  method: 'get',
  path: '/balances',
  tags: ['Balances'],
  summary: 'Get Balances',
  description:
    'Enables an AISP to retrieve balance information for account(s) that the PSU has consented to.',
  operationId: 'GetBalances',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200BalancesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getBeneficiariesRoute = createRoute({
  method: 'get',
  path: '/beneficiaries',
  tags: ['Beneficiaries'],
  summary: 'Get Beneficiaries',
  description:
    'Enables an AISP to retrieve Beneficiary information for account(s) that the PSU has consented to.',
  operationId: 'GetBeneficiaries',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200BeneficiariesReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getDirectDebitsRoute = createRoute({
  method: 'get',
  path: '/direct-debits',
  tags: ['Direct Debits'],
  summary: 'Get Direct Debits',
  description:
    'Enables an AISP to retrieve Direct Debit information for account(s) that the PSU has consented to.',
  operationId: 'GetDirectDebits',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200DirectDebitsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getOffersRoute = createRoute({
  method: 'get',
  path: '/offers',
  tags: ['Offers'],
  summary: 'Get Offers',
  description:
    'Enables an AISP to retrieve any offer information for account(s) that the PSU has consented to.',
  operationId: 'GetOffers',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200OffersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getPartyRoute = createRoute({
  method: 'get',
  path: '/party',
  tags: ['Parties'],
  summary: 'Get Party',
  description:
    'Retrieve details about the party that gave permission to the AISP to view an account(s).',
  operationId: 'GetParty',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200PartyReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  tags: ['Products'],
  summary: 'Get Products',
  description:
    'Enables an AISP to retrieve the account product information for account(s) that the PSU has consented to.',
  operationId: 'GetProducts',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200ProductsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getScheduledPaymentsRoute = createRoute({
  method: 'get',
  path: '/scheduled-payments',
  tags: ['Scheduled Payments'],
  summary: 'Get Scheduled Payments',
  description:
    'Enables an AISP to retrieve Scheduled Payment information for account(s) that the PSU has consented to.',
  operationId: 'GetScheduledPayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200ScheduledPaymentsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getStandingOrdersRoute = createRoute({
  method: 'get',
  path: '/standing-orders',
  tags: ['Standing Orders'],
  summary: 'Get Standing Orders',
  description:
    'Enables an AISP to retrieve Standing Order information for account(s) that the PSU has consented to.',
  operationId: 'GetStandingOrders',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
  },
  responses: {
    200: _200StandingOrdersReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getStatementsRoute = createRoute({
  method: 'get',
  path: '/statements',
  tags: ['Statements'],
  summary: 'Get Statements',
  description:
    'Enables an AISP to retrieve statement information for account(s) that the PSU has consented to.',
  operationId: 'GetStatements',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
    query: z.object({
      fromStatementDateTime: FromStatementDateTimeParamParamsSchema,
      toStatementDateTime: ToStatementDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200StatementsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  description:
    'Enables an AISP to retrieve transaction information for account(s) that the PSU has consented to.',
  operationId: 'GetTransactions',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      'x-client-id': XClientIdParamsSchema,
    }),
    query: z.object({
      fromBookingDateTime: FromBookingDateTimeParamParamsSchema,
      toBookingDateTime: ToBookingDateTimeParamParamsSchema,
    }),
  },
  responses: {
    200: _200TransactionsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['accounts'] }],
})
