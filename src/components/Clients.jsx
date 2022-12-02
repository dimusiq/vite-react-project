import { clients } from '../constants';
import styles from '../styles';

const Clients = () => (
	<section className={`${styles.flexCenter}`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client) => {
				return (
					<div
						key={clients.id}
						className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]`}>
						<img
							src={client.logo}
							alt='client'
							className='sm:w-[192px] w-[100px]'
						/>
					</div>
				);
			})}
		</div>
	</section>
);

export default Clients;
