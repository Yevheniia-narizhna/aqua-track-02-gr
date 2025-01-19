import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  selectDate,
  selectPercentDay,
  selectWaterDay,
} from "../../../../redux/water/selectors.js";
import {
  apiGetWaterDay,
  updateWaterDay,
} from "../../../../redux/water/operations.js";
import css from "./WaterProgressBar.module.css";
import dayjs from "dayjs";

const WaterProgressBar = () => {
  const dispatch = useDispatch();

  const selectedDate = useSelector(selectDate);
  const percentDay = useSelector(selectPercentDay);
  const consumedWater = useSelector(selectWaterDay);

  const [localPercent, setLocalPercent] = useState(0);

  useEffect(() => {
    if (selectedDate) {
      dispatch(apiGetWaterDay(selectedDate));
    }
  }, [selectedDate, dispatch]);

  useEffect(() => {
    if (percentDay !== undefined) {
      setLocalPercent(percentDay);
    }
  }, [percentDay]);

  const handleSliderChange = (newPercent) => {
    setLocalPercent(newPercent);
    if (selectedDate) {
      dispatch(updateWaterDay({ date: selectedDate, amount: newPercent }));
    }
  };

  const currentDate = dayjs().format("YYYY-MM-DD");
  const selectedDateFormatted = dayjs(selectedDate).format("YYYY-MM-DD");

  const formattedDate =
    selectedDateFormatted === currentDate
      ? "Today"
      : dayjs(selectedDate).format("DD, MMMM");

  return (
    <div className={css.container}>
      <div className={css.containerBar}>
        <div className={css.title}>{formattedDate}</div>

        <div className={css.sliderWrapper}>
          <ReactSlider
            value={localPercent}
            onChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            className={css.slider}
            thumbClassName={css.thumb}
            trackClassName={css.track}
            renderThumb={(props) => (
              <div
                {...props}
                className={css.thumb}
                data-tooltip-id="progress-tooltip"
                data-tooltip-content={`${Math.min(localPercent, 100).toFixed(
                  0
                )}%`}
              />
            )}
          />
        </div>

        <ReactTooltip
          id="progress-tooltip"
          className={css.customTooltip}
          place="top"
          effect="solid"
          arrowClassName={css.customArrow}
        />

        <div className={css.percentBar}>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
