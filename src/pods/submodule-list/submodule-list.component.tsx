import React from 'react';
import {
  DashboardComponent,
  DashboardItemProps,
} from 'common/components/dashboard';

interface Props {
  items: DashboardItemProps[];
}

export const SubmoduleListComponent: React.FC<Props> = props => {
  const { items } = props;

  return <DashboardComponent items={items} />;
};
