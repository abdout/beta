import React from 'react';
import { Icon } from "@iconify/react";

interface PrevNextButtonsProps {
  currentStep: number;
  totalSteps: number;
  prevStep: () => void;
  nextStep: () => void;
}

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({ currentStep, totalSteps, prevStep, nextStep }) => (
  <>
    <button
      type="button"
      onClick={prevStep}
      style={{
        color: 'white',
        position: 'absolute',
        left: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: currentStep === 0 ? 0.3 : 1
      }}
    >
      <Icon icon="ooui:next-rtl" width="2em" height="2em" />
    </button>

    <button
      type="button"
      onClick={nextStep}
      style={{
        color: 'white',
        position: 'absolute',
        right: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: currentStep === totalSteps - 1 ? 0.7 : 1
      }}
    >
      <Icon icon="ooui:next-ltr" width="2em" height="2em" />
    </button>
  </>
);

export default PrevNextButtons;