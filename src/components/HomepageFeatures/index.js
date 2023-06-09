import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '秒级部署',
    Img: require('@site/static/img/quick_deploy.png').default,
    description: (
      <>
        深度结合云原生技术本身能力,实现区块链网络的快速部署以及智能合约的快速构建部署，保证平台稳定、安全、可扩展
      </>
    ),
  },
  {
    title: '云原生DAO',
    Img: require('@site/static/img/DAO.png').default,
    description: (
      <>
        实现云原生DAO(去中心化自治组织),完成对联盟、网络、合约的治理。支持多种治理策略,完美适配区块链去中心化决策特性
      </>
    ),
  },
  {
    title: '合约商店',
    Img: require('@site/static/img/contracts_store.png').default,
    description: (
      <>
        提供多种智能合约实现,涵盖数字藏品、数字存证、ERC20、时间锁、访问控制等业务合约以及Safemath、timer、content等库合约
      </>
    ),
  },
  {
    title: '一键SaaS',
    Img: require('@site/static/img/quick_saas.png').default,
    description: (
      <>
        提供区块链数字存证、数字藏品等多种SaaS服务
      </>
    ),
  },
  {
    title: '可视化监控',
    Img: require('@site/static/img/visualize.png').default,
    description: (
      <>
        实时监控联盟、网络、合约状态，快速定位问题，提供可视化监控报表。
      </>
    ),
  },
  {
    title: '工具',
    Img: require('@site/static/img/tools.png').default,
    description: (
      <>
        提供CLI工具,支持平台资源、SaaS服务操作,方便开发和运维人员。
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureImg}
          src={Img}
          alt={title}
          style={{ width: '65%', height: 'auto' }}
        />
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
