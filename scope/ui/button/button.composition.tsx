import React from 'react';
import { Button } from './button';

export const PrimaryButton = () => {
  return (
    <Button >hello world!</Button>
  );
}

export const SecondaryButton = () => {
  return (
    <Button primary={false}>hello world!</Button>
  );
}


export const SmmallButton = () => {
  return (
    <Button size='small'>Small</Button>
  );
}

export const MediumButton = () => {
  return (
    <Button size='medium'>Medium</Button>
  );
}

export const LargeButton = () => {
  return (
    <Button size='large'>Large</Button>
  );
}
