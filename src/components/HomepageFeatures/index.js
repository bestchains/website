import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        支持平台快速部署、区块链网络可视化管理、智能合约全生命周期管理，并提供官方合约仓库支持
      </>
    ),
  },
  {
    title: '云原生深度结合',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        转化区块链组件为云原生资源,并深度结合云原生技术本身能力，保证平台稳定、安全、可扩展
      </>
    ),
  },
  {
    title: '开源友好',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        项目所有源代码完全开源,遵循Apache-2.0 License,欢迎所有人参与贡献
      </>
    ),
  },
  {
    title: '公平的投票决策机制',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        平台内部通过Proposal-Vote机制来完成联盟性质的内部决策,支持:   
           All Majority OneVeto
        等多种策略,完美适配区块链去中心化决策特性
      </>
    ),
  },
  {
    title: '细粒度的资源访问控制',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        基于云原生平台RBAC实现更细粒度的区块链资源访问控制,提升平台化区块链服务的安全性
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
