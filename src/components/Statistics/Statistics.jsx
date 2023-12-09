import { Section, Ul, List, H2 } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <H2 className="title">{title}</H2>}
      <Ul className="stat-list">
        {stats.map(i => (
          <List key={i.id} className="item">
            <span className="label">{i.label}</span>
            <span className="percentage">{i.percentage}</span>
          </List>
        ))}
      </Ul>
    </Section>
  );
};

export default Statistics;
